/**
 * Backend der Hochzeits-Website: Google Apps Script, gebunden an ein Google Sheet.
 * Einrichtung: siehe README.md in diesem Ordner.
 */

var TABS = {
  Zusagen_Trauung: ['id', 'zeitpunkt', 'person', 'kommt', 'nachricht'],
  Zusagen_Feier: ['id', 'zeitpunkt', 'person', 'kommt', 'essen', 'allergien', 'kind', 'alter', 'nachricht'],
  BringShare_Wuensche: ['id', 'was', 'anzahl_gesucht', 'hinweis'],
  BringShare_Eintraege: ['zeitpunkt', 'name', 'wunsch_id', 'was', 'notiz'],
  Programmpunkte: ['zeitpunkt', 'name', 'kontakt', 'art', 'beschreibung', 'dauer_min', 'technik'],
  Geschenke_Reserviert: ['zeitpunkt', 'geschenk_id', 'was', 'name']
};
var MAX_NAME = 80;
var MAX_TEXT = 1000;
var MAX_PERSONS = 10;

/** Einmal manuell ausführen: legt die Tabs mit Kopfzeilen an. */
function setup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  Object.keys(TABS).forEach(function (name) {
    var sh = ss.getSheetByName(name) || ss.insertSheet(name);
    sh.getRange(1, 1, 1, TABS[name].length).setValues([TABS[name]]).setFontWeight('bold');
    sh.setFrozenRows(1);
  });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  var action = e && e.parameter ? e.parameter.action : '';
  if (action === 'bringshare') return json_(bringshareData_());
  if (action === 'geschenke') return json_({ reserviert: geschenkeCount_() }); // nur Anzahlen, keine Namen
  return json_({ ok: false, error: 'Unbekannte Aktion' });
}

function rows_(name) {
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
  if (!sh || sh.getLastRow() < 2) return [];
  return sh.getRange(2, 1, sh.getLastRow() - 1, TABS[name].length).getValues();
}

function bringshareData_() {
  var entries = rows_('BringShare_Eintraege');
  var count = {};
  entries.forEach(function (r) { if (r[2] !== '') count[String(r[2])] = (count[String(r[2])] || 0) + 1; });
  var wuensche = rows_('BringShare_Wuensche')
    .filter(function (r) { return r[0] !== '' && r[1] !== ''; })
    .map(function (r) {
      var gesucht = Number(r[2]) || 0;
      var eingetragen = count[String(r[0])] || 0;
      return { id: String(r[0]), was: String(r[1]), gesucht: gesucht, eingetragen: eingetragen, offen: Math.max(0, gesucht - eingetragen), hinweis: String(r[3] || '') };
    });
  var eintraege = entries.map(function (r) { return { name: String(r[1]), was: String(r[3]), notiz: String(r[4] || '') }; });
  return { wuensche: wuensche, eintraege: eintraege };
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    var data;
    try { data = JSON.parse(e.postData.contents); } catch (err) { return json_({ ok: false, error: 'Ungültige Anfrage' }); }
    if (!data || typeof data !== 'object') return json_({ ok: false, error: 'Ungültige Anfrage' });
    if (data.website) return json_({ ok: false, error: 'Ungültige Anfrage' }); // Honeypot
    var handlers = { zusage_trauung: zusageTrauung_, zusage_feier: zusageFeier_, bringshare: bringshare_, programmpunkt: programmpunkt_, geschenk: geschenk_ };
    var fn = handlers[data.action];
    if (!fn) return json_({ ok: false, error: 'Unbekannte Aktion' });
    lock.waitLock(20000);
    fn(data);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: err && err.userMessage ? err.message : 'Interner Fehler' });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

function fail_(msg) { var e = new Error(msg); e.userMessage = true; throw e; }

/** Text prüfen, kürzen verboten (zu lang = Fehler), Formeln entschärfen. */
function str_(v, max, required, label) {
  var s = v === undefined || v === null ? '' : String(v).trim();
  if (required && !s) fail_(label + ' fehlt.');
  if (s.length > max) fail_(label + ' ist zu lang.');
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function oneOf_(v, allowed, label) {
  var s = String(v === undefined ? '' : v);
  if (allowed.indexOf(s) === -1) fail_(label + ' ungültig.');
  return s;
}

function persons_(data) {
  if (!Array.isArray(data.persons) || data.persons.length < 1) fail_('Mindestens eine Person angeben.');
  if (data.persons.length > MAX_PERSONS) fail_('Zu viele Personen (max. ' + MAX_PERSONS + ').');
  return data.persons;
}

function now_() { return new Date(); }
function id_() { return Utilities.getUuid().slice(0, 8); }
function append_(name, rows) {
  if (!rows.length) return;
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
  if (!sh) fail_('Tabelle fehlt (setup() ausführen).');
  sh.getRange(sh.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
}

function zusageTrauung_(d) {
  var list = persons_(d);
  var id = id_(), ts = now_(), msg = str_(d.nachricht, MAX_TEXT, false, 'Nachricht');
  var rows = list.map(function (p) {
    return [id, ts, str_(p.name, MAX_NAME, true, 'Name'), oneOf_(p.kommt, ['ja', 'nein'], 'Zusage'), msg];
  });
  append_('Zusagen_Trauung', rows);
}

function zusageFeier_(d) {
  var list = persons_(d);
  var id = id_(), ts = now_(), msg = str_(d.nachricht, MAX_TEXT, false, 'Nachricht');
  var rows = list.map(function (p) {
    var alter = p.alter === '' || p.alter === undefined || p.alter === null ? '' : Number(p.alter);
    if (alter !== '' && (isNaN(alter) || alter < 0 || alter > 120)) fail_('Alter ungültig.');
    return [id, ts, str_(p.name, MAX_NAME, true, 'Name'), oneOf_(p.kommt, ['ja', 'nein'], 'Zusage'),
      oneOf_(p.essen || 'alles', ['alles', 'vegetarisch', 'vegan'], 'Essenswunsch'),
      str_(p.allergien, MAX_TEXT, false, 'Allergien'), p.kind ? 'ja' : 'nein', alter, msg];
  });
  append_('Zusagen_Feier', rows);
}

function bringshare_(d) {
  var name = str_(d.name, MAX_NAME, true, 'Name');
  var wunschId = str_(d.wunsch_id, 40, false, 'Wunsch');
  var was = str_(d.was, 200, false, 'Beitrag');
  var notiz = str_(d.notiz, MAX_TEXT, false, 'Hinweis');
  if (wunschId) {
    var w = bringshareData_().wuensche.filter(function (x) { return x.id === wunschId; })[0];
    if (!w) fail_('Diesen Wunsch gibt es nicht.');
    if (w.offen < 1) fail_('Dafür ist leider schon alles vergeben.');
    if (!was) was = w.was;
  } else if (!was) fail_('Bitte gib an, was Du mitbringst.');
  append_('BringShare_Eintraege', [[now_(), name, wunschId, was, notiz]]);
}

function programmpunkt_(d) {
  var dauer = d.dauer === '' || d.dauer == null ? '' : Number(d.dauer);
  if (dauer !== '' && !(dauer >= 1 && dauer <= 60)) fail_('Bitte eine Dauer zwischen 1 und 60 Minuten angeben.');
  append_('Programmpunkte', [[now_(), str_(d.name, MAX_NAME, true, 'Name'), str_(d.kontakt, 200, true, 'Kontakt'),
    oneOf_(d.art, ['Rede', 'Spiel', 'Musik / Lied', 'Video / Diashow', 'Sonstiges'], 'Art'),
    str_(d.beschreibung, MAX_TEXT, true, 'Beschreibung'), dauer, str_(d.technik, 200, false, 'Technik')]]);
}

function geschenkeCount_() {
  var count = {};
  rows_('Geschenke_Reserviert').forEach(function (r) { var id = String(r[1]); if (id) count[id] = (count[id] || 0) + 1; });
  return count;
}

function geschenk_(d) {
  var id = String(d.geschenk_id || '');
  if (!/^[a-z0-9_-]{1,40}$/i.test(id)) fail_('Ungültiges Geschenk.');
  var max = Number(d.max);
  if (!(max >= 1 && max <= 20)) fail_('Ungültiges Geschenk.');
  if ((geschenkeCount_()[id] || 0) >= max) fail_('Das ist leider schon vergeben.');
  append_('Geschenke_Reserviert', [[now_(), id, str_(d.was, 200, false, 'Geschenk'), str_(d.name, MAX_NAME, true, 'Name')]]);
}
