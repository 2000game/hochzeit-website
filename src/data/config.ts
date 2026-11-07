// URL der Google-Apps-Script-Web-App (siehe apps-script/README.md).
// Leer lassen = Formulare zeigen "noch nicht aktiv".
// Alternativ per Umgebungsvariable PUBLIC_API_URL (z. B. in .env oder GitHub-Variable).
// TODO: Web-App-URL eintragen, sobald das Apps Script deployed ist.
export const API_URL: string = import.meta.env.PUBLIC_API_URL ?? '';

