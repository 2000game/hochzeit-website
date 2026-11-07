// URL der Google-Apps-Script-Web-App (siehe apps-script/README.md).
// Leer lassen = Formulare zeigen "noch nicht aktiv".
// Alternativ per Umgebungsvariable PUBLIC_API_URL (z. B. in .env oder GitHub-Variable).
// TODO: Web-App-URL eintragen, sobald das Apps Script deployed ist.
export const API_URL: string = import.meta.env.PUBLIC_API_URL ?? '';

// Eigene Apps-Script-Web-App der Trauzeugen (Kopie von apps-script/Code.gs an IHREM Sheet),
// damit das Brautpaar die Programmpunkte nicht sieht. Leer = Formular zeigt "noch nicht aktiv".
// TODO: URL von den Trauzeugen eintragen (oder GitHub-Variable PUBLIC_PROGRAMM_API_URL).
export const PROGRAMM_API_URL: string = import.meta.env.PUBLIC_PROGRAMM_API_URL ?? '';
