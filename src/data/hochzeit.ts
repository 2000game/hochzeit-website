// ZENTRALE INHALTE. Alles hier ändern, die Seiten lesen nur aus dieser Datei.
// Werte mit "// FAKE" sind ausgedachte Beispieldaten und müssen noch durch echte ersetzt werden.

export const paar = {
  name1: 'Felix',
  name2: 'Lou',
};

export const termin = {
  datumText: 'Samstag, 28. August 2027', // FAKE: Datum noch nicht fest (27./28.08.2027 geplant)
  datumIso: '2027-08-28T14:00:00+02:00', // FAKE: für den Countdown
  zusageBis: '30. April 2027', // FAKE
};

export const trauung = {
  name: 'Alte Dorfkirche Musterhausen', // FAKE
  adresse: 'Kirchgasse 1, 55000 Musterhausen', // FAKE
  beginn: '14:00 Uhr', // FAKE
  mapsUrl: 'https://www.openstreetmap.org/#map=15/49.99/8.27', // FAKE
  parken: 'Direkt an der Kirche gibt es nur wenige Plätze. Bitte nutzt den Parkplatz am Dorfgemeinschaftshaus (Schulstraße, 3 Minuten zu Fuß).', // FAKE
  oepnv: 'Ab Mainz Hbf mit dem Bus 60 Richtung Musterhausen bis „Kirchgasse“, ca. 35 Minuten. Die Haltestelle liegt direkt vor der Kirche.', // FAKE
};

export const feier = {
  name: 'Hofgut Sonnenwiese', // FAKE
  adresse: 'Am Weinberg 12, 55000 Musterhausen', // FAKE
  beginn: '17:30 Uhr', // FAKE
  ende: 'ca. 23:00 Uhr',
  mapsUrl: 'https://www.openstreetmap.org/#map=15/49.98/8.25', // FAKE
  parken: 'Auf dem Hofgut gibt es genug Parkplätze, eingewiesen wird an der Einfahrt.', // FAKE
  fahrzeit: 'Von der Kirche sind es mit dem Auto etwa 15 Minuten.', // FAKE
};

export const texte = {
  start: 'Schön, dass Du dabei bist! Hier findest Du alles Wichtige rund um unseren Tag: wann und wo es losgeht, was Du mitbringen kannst und wie Du uns zusagst.', // FAKE
  ablauf: 'Zur Trauung und zum Sektempfang danach laden wir alle ein, die uns auf unserem Weg begleitet haben. Wir freuen uns auf Euch!', // FAKE
  feier: 'Am Abend feiern wir im kleineren Kreis weiter: mit Grillbuffet, guten Gesprächen und Musik im Garten. Wenn Du dazu eingeladen bist, steht das auf Deiner Einladung.', // FAKE
  uebernachtung: 'Wer nicht mehr fahren möchte: In Musterhausen gibt es die Pension „Zur Linde“ und mehrere Ferienwohnungen. In Mainz ist die Auswahl an Hotels groß.', // FAKE
};

export const ablaufTrauung = [
  { zeit: '13:30', titel: 'Ankommen', text: 'Die Kirche ist ab 13:30 Uhr geöffnet. Such Dir einen Platz.' }, // FAKE
  { zeit: '14:00', titel: 'Trauung', text: 'Wir sagen Ja. Bitte lasst die Handys in der Tasche.' }, // FAKE
  { zeit: '15:00', titel: 'Sektempfang', text: 'Wir stoßen mit Euch vor der Kirche an. Sekt und Wasser haben wir, das Essen bringt Ihr mit (Bring & Share).' }, // FAKE
  { zeit: '17:00', titel: 'Ende Sektempfang', text: 'Danke, dass Ihr da wart!' }, // FAKE
];

export const ablaufFeier = [
  { zeit: '17:00', titel: 'Fahrt zur Location', text: 'Jeder fährt selbst, gern in Fahrgemeinschaften. Adresse siehe unten.' }, // FAKE
  { zeit: '17:30', titel: 'Ankommen', text: 'Garten, Getränke, Plaudern.' }, // FAKE
  { zeit: '18:30', titel: 'Grillbuffet', text: 'Vorspeisen, Grill und zum Nachtisch Tiramisu. Für alle ist etwas dabei.' }, // FAKE
  { zeit: '20:30', titel: 'Feiern', text: 'Unsere Playlist läuft.' }, // FAKE
  { zeit: 'ca. 23:00', titel: 'Ende', text: 'Wir verabschieden uns gemeinsam.' },
];

export const faq = [
  { f: 'Gibt es einen Dresscode?', a: 'Festlich, aber bequem. Der Abend findet im Garten statt, denk an flache Schuhe und eine Jacke für später.' }, // FAKE
  { f: 'Dürfen Kinder mitkommen?', a: 'Ja, Kinder sind herzlich willkommen. Trag sie bei der Zusage bitte mit ein.' }, // FAKE
  { f: 'Darf ich während der Trauung fotografieren?', a: 'Bitte nicht. Wir haben eine Fotografin, die alles festhält. So können alle den Moment genießen.' }, // FAKE
  { f: 'Wo kann ich parken?', a: 'An der Kirche ist wenig Platz, bitte nutzt den Parkplatz am Dorfgemeinschaftshaus. Am Hofgut gibt es genug Parkplätze. Details unter Anreise.' }, // FAKE
  { f: 'Bis wann soll ich zusagen?', a: 'Bitte bis zum 30. April 2027 über die Zusage-Seite.' }, // FAKE
  { f: 'Was kann ich bei Bring & Share mitbringen?', a: 'Schau auf die Bring-&-Share-Seite: Dort stehen unsere Wünsche. Du kannst auch etwas anderes eintragen.' },
  { f: 'Wie lange geht die Feier?', a: 'Die Feier endet ca. 23:00 Uhr.' },
  { f: 'Gibt es einen Shuttle oder Hotels?', a: 'Nein, wir organisieren keinen Shuttle und keine Hotels. Jeder reist selbst an und ab. Tipps zur Übernachtung findest Du unter Anreise.' },
  { f: 'Was wünscht Ihr Euch?', a: 'Vor allem, dass Ihr dabei seid! Wer uns trotzdem etwas schenken möchte, findet auf der Seite Geschenke unsere Wunschliste.' }, // FAKE
  { f: 'Kann ich etwas zum Programm beitragen?', a: 'Gern! Melde Deinen Beitrag über die Seite Programmpunkt an. Unsere Trauzeugen stimmen alles ab, wir erfahren davon nichts.' },
  { f: 'Wo finde ich die Fotos?', a: 'Nach der Hochzeit verlinken wir auf der Seite Fotos die Galerie der Fotografin und ein Gäste-Album.' },
  { f: 'Darf ich selbst fotografieren und Fotos hochladen?', a: 'Ja, gern, nur nicht während der Trauung. Deine Fotos kannst Du nach der Hochzeit im Gäste-Album hochladen.' },
  { f: 'Wer kommt zur Feier?', a: 'Zur Trauung und zum Sektempfang sind alle eingeladen. Zur Feier am Abend kommt ein kleinerer Kreis; das steht auf Deiner Einladung.' },
];

export const fotos = {
  galerieUrl: '', // TODO: Galerie des Fotografen (nach der Hochzeit)
  gaesteAlbumUrl: '', // TODO: geteiltes Google-Fotos-Album (nach der Hochzeit)
};

export const geschenke = {
  text: 'Das größte Geschenk ist, dass Du mit uns feierst! Wenn Du uns trotzdem etwas schenken möchtest, freuen wir uns über einen Zuschuss zu unserer Hochzeitsreise oder etwas von unserer Wunschliste.', // FAKE
  // Digitale Wunschliste. id nie ändern, sobald jemand reserviert hat (Reservierungen hängen an der id).
  // anzahl: wie oft das Geschenk vergeben werden kann; 0 = unbegrenzt (z. B. Zuschuss), dann ohne Abhaken.
  wuensche: [
    { id: 'reise', was: 'Zuschuss zur Hochzeitsreise', beschreibung: 'Wir träumen von ein paar Wochen Skandinavien. Jeder Beitrag hilft, gern in einer Karte am Tag selbst.', link: '', preis: '', anzahl: 0 }, // FAKE
    { id: 'kaffeemuehle', was: 'Handkaffeemühle', beschreibung: 'Für den perfekten Sonntagskaffee.', link: 'https://example.com', preis: 'ca. 60 €', anzahl: 1 }, // FAKE
    { id: 'pfanne', was: 'Gusseisenpfanne 28 cm', beschreibung: 'Hält ein Leben lang, wie wir.', link: '', preis: 'ca. 50 €', anzahl: 1 }, // FAKE
    { id: 'glaeser', was: 'Weingläser (2er-Set)', beschreibung: 'Wir brauchen mehr als vier.', link: '', preis: 'ca. 25 €', anzahl: 3 }, // FAKE
    { id: 'pflanze', was: 'Große Zimmerpflanze', beschreibung: 'Eine Monstera oder Geigenfeige für unser Wohnzimmer.', link: '', preis: 'ca. 40 €', anzahl: 1 }, // FAKE
    { id: 'spiel', was: 'Brettspiel für zwei', beschreibung: 'Für lange Winterabende, z. B. Patchwork oder Azul Duel.', link: '', preis: 'ca. 30 €', anzahl: 1 }, // FAKE
  ],
};

export const impressum = {
  name: 'Felix Mustermann', // FAKE
  adresse: 'Musterstraße 1, 55116 Mainz', // FAKE
  kontakt: 'hallo@felixundlouheiraten.de', // FAKE: Adresse existiert noch nicht
};

// Platzhalterbilder (picsum.photos), später durch eigene Fotos in public/bilder/ ersetzen.
export const bilder = {
  start: 'https://picsum.photos/seed/hochzeit-start/1200/700', // FAKE
  feier: 'https://picsum.photos/seed/hochzeit-feier/1200/700', // FAKE
  galerie: ['paar1', 'paar2', 'paar3', 'paar4', 'paar5', 'paar6'].map(
    (s) => `https://picsum.photos/seed/${s}/600/600`, // FAKE
  ),
};

// Ansprechpartner bei Fragen und für Programmpunkte. Telefonnummern stehen öffentlich auf der Seite.
export const trauzeugen = [
  { name: 'Max', telefon: '0151 23456789', mail: '' }, // FAKE
  { name: 'Clara', telefon: '0160 98765432', mail: '' }, // FAKE
];
