// ZENTRALE INHALTE. Alles mit TODO ist noch offen und wird hier geändert.

export const paar = {
  name1: 'Felix', // TODO: Vollständige Namen?
  name2: 'Lou',
};

export const termin = {
  // TODO: Datum steht noch nicht fest (geplant Fr/Sa 27./28.08.2027)
  datumText: 'Spätsommer 2027 (Datum folgt)',
  // ISO-Zeitpunkt für den Countdown; leer lassen, solange das Datum offen ist.
  // TODO: z. B. '2027-08-28T14:00:00+02:00'
  datumIso: '',
  zusageBis: 'TODO: Zusagefrist', // TODO
};

export const trauung = {
  name: 'TODO: Name der Kirche', // TODO
  adresse: 'TODO: Straße, PLZ Ort (bei Mainz)', // TODO
  beginn: 'TODO: Uhrzeit',
  mapsUrl: '', // TODO: Link zu Google/OpenStreetMap
};

export const feier = {
  name: 'TODO: Name der Location', // TODO
  adresse: 'TODO: Straße, PLZ Ort (max. 45 Min. von Mainz)', // TODO
  beginn: 'TODO: Uhrzeit',
  ende: 'ca. 23:00 Uhr',
  mapsUrl: '', // TODO
};

export const ablaufTrauung = [
  { zeit: 'TODO', titel: 'Ankommen', text: 'Die Kirche ist ab TODO geöffnet.' },
  { zeit: 'TODO', titel: 'Trauung', text: 'Wir sagen Ja. Bitte schaltet Handys aus.' },
  { zeit: 'TODO', titel: 'Sektempfang', text: 'Wir stoßen mit Euch an. Sekt und Wasser haben wir, Essen bringt Ihr mit (Bring & Share).' },
];

export const ablaufFeier = [
  { zeit: 'TODO', titel: 'Fahrt zur Location', text: 'Jeder fährt selbst. Adresse siehe unten.' },
  { zeit: 'TODO', titel: 'Ankommen', text: 'Garten, Getränke, Plaudern.' },
  { zeit: 'TODO', titel: 'Grillbuffet', text: 'Gartenparty-Stil, für alle ist etwas dabei.' },
  { zeit: 'TODO', titel: 'Feiern', text: 'Unsere Playlist läuft.' },
  { zeit: 'ca. 23:00', titel: 'Ende', text: 'Wir verabschieden uns gemeinsam.' },
];

export const faq = [
  { f: 'Dresscode?', a: 'TODO: z. B. festlich, aber bequem. Der Abend findet im Garten statt.' },
  { f: 'Dürfen Kinder mitkommen?', a: 'TODO: Kinder sind willkommen / bitte vorher bei uns melden.' },
  { f: 'Darf ich während der Trauung fotografieren?', a: 'TODO: Bitte lasst die Handys in der Tasche, wir haben jemanden für Fotos.' },
  { f: 'Wo kann ich parken?', a: 'TODO: Parkplätze an der Kirche / an der Feier-Location. Details unter Anreise.' },
  { f: 'Bis wann soll ich zusagen?', a: 'Bitte bis TODO: Zusagefrist über die Zusage-Seite.' },
  { f: 'Was kann ich bei Bring & Share mitbringen?', a: 'Schau auf die Bring-&-Share-Seite: Dort stehen unsere Wünsche. Du kannst auch etwas anderes eintragen.' },
  { f: 'Wie lange geht die Feier?', a: 'Die Feier endet ca. 23:00 Uhr.' },
  { f: 'Gibt es einen Shuttle oder Hotels?', a: 'Nein, wir organisieren keinen Shuttle und keine Hotels. Jeder reist selbst an und ab.' },
  { f: 'Wo finde ich die Fotos?', a: 'TODO: Nach der Hochzeit verlinken wir hier die Galerie und ein Gäste-Album. Siehe Seite Fotos.' },
  { f: 'Darf ich selbst fotografieren / Fotos hochladen?', a: 'TODO: Ja, gern (nicht während der Trauung). Eigene Fotos kannst Du später im Gäste-Album hochladen.' },
  { f: 'Wer kommt zur Feier?', a: 'Zur Trauung und zum Sektempfang sind alle eingeladen. Zur Feier am Abend kommt ein kleinerer Kreis (ca. 80 Personen); das steht auf Deiner Einladung.' },
];

export const fotos = {
  galerieUrl: '', // TODO: Galerie des Fotografen
  gaesteAlbumUrl: '', // TODO: geteiltes Album, in das Gäste eigene Fotos hochladen
};

export const geschenke = {
  text: 'TODO: Text zum Thema Geschenke, z. B. Wunsch nach einem Beitrag zur Hochzeitsreise. Keine Kontodaten auf der Website.',
};

export const impressum = {
  name: 'TODO: Name', adresse: 'TODO: Anschrift', kontakt: 'TODO: E-Mail',
};

// TODO: Platzhalterbilder (picsum.photos) durch eigene Fotos in public/bilder/ ersetzen.
export const bilder = {
  start: 'https://picsum.photos/seed/hochzeit-start/1200/700',
  feier: 'https://picsum.photos/seed/hochzeit-feier/1200/700',
  galerie: ['paar1', 'paar2', 'paar3', 'paar4', 'paar5', 'paar6'].map(
    (s) => `https://picsum.photos/seed/${s}/600/600`,
  ),
};
