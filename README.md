# Hochzeits-Website

Statische Website (Astro) für unsere Hochzeit, Inhalt auf Deutsch. Formulare speichern in einem Google Sheet über ein Apps Script (`apps-script/`). Noch ohne Design: das Gerüst ist semantisches HTML mit einer neutralen CSS-Datei.

## Lokal entwickeln

```
npm install
npm run dev      # http://localhost:4321
npm run build    # Ausgabe in dist/
```

## Wo ändere ich was?

- **Inhalte** (Namen, Datum, Orte, Ablauf, FAQ, Impressum): `src/data/hochzeit.ts`. Alles mit `TODO` ist offen.
- **Backend-URL**: `src/data/config.ts` oder Umgebungsvariable `PUBLIC_API_URL`. Leer = Formulare zeigen "noch nicht aktiv".
- **Design**: `src/styles/global.css` (Variablen in `:root` für Farben, Schrift, Abstände). Layout/Navigation: `src/layouts/Base.astro`.
- **Texte einzelner Seiten**: `src/pages/**`.

## Zwei Einstiege (keine persönlichen Links)

- `/` für alle Gäste (Trauung und Sektempfang).
- `/feier/` und `/feier/zusage/`: Infos und Zusage für die Feier am Abend. Normal verlinkt (Start, Navigation, Zusage-Seite); wer zur Feier kommt, steht auf der Einladung.
- Die ganze Seite ist `noindex` und per `robots.txt` gesperrt (privates Event).

## Backend

Einrichtung siehe [apps-script/README.md](apps-script/README.md).

## Deploy auf GitHub Pages (eigene Domain)

1. GitHub-Repo anlegen und pushen (Branch `main`).
2. Settings → Pages → Source: **GitHub Actions**. Der Workflow `.github/workflows/deploy.yml` baut und veröffentlicht bei jedem Push.
3. Optional: Repository-Variable `PUBLIC_API_URL` (Settings → Secrets and variables → Actions → Variables) mit der Web-App-URL.
4. Eigene Domain `felixundlouheiraten.de`: steht in `public/CNAME` und `site` in `astro.config.mjs`; in GitHub unter Settings → Pages eingetragen.
5. DNS: für die Hauptdomain A-Records auf `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; für `www` ein CNAME auf `2000game.github.io`; DNS liegt bei Cloudflare (Registrar netcup), Einträge auf „DNS only“.
6. Settings → Pages: Custom domain eintragen, **Enforce HTTPS** aktivieren.

## Offen

- [ ] Datum (geplant Fr/Sa 27./28.08.2027) und `datumIso` für den Countdown
- [ ] Kirche (Name, Adresse, Uhrzeit, Karte)
- [ ] Feier-Location (Name, Adresse, Uhrzeit, Karte)
- [ ] Zusagefrist
- [ ] Geschenke-Text
- [x] Domain `felixundlouheiraten.de`
- [ ] Impressum und Datenschutz (Rechtstexte)
- [ ] Apps Script einrichten, URL eintragen, Wünsche für Bring & Share füllen
- [ ] Texte, FAQ, Anreise (Parken, ÖPNV) ausfüllen
- [ ] Design
