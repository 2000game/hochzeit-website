# Backend einrichten (Google Sheet + Apps Script)

Die Formulare der Website schicken ihre Daten an ein Apps Script, das in einem Google Sheet speichert.

1. In Deinem privaten Google-Konto ein neues **Google Sheet** anlegen (z. B. "Hochzeit Website").
2. Im Sheet: **Erweiterungen → Apps Script**.
3. Den Inhalt von `Code.gs` komplett einfügen (alten Beispielcode ersetzen) und speichern.
4. In der Funktionsauswahl oben `setup` wählen und **Ausführen**. Die Berechtigungen bestätigen. Danach gibt es die Tabs `Zusagen_Trauung`, `Zusagen_Feier`, `BringShare_Wuensche` und `BringShare_Eintraege`.
5. Im Tab `BringShare_Wuensche` von Hand Wünsche eintragen: `id` (kurz, eindeutig, z. B. `salat`), `was`, `anzahl_gesucht`, `hinweis`.
6. **Bereitstellen → Neue Bereitstellung → Typ "Web-App"**. Ausführen als: **Ich**. Zugriff: **Jeder**. Bereitstellen.
7. Die **Web-App-URL** (endet auf `/exec`) kopieren und in `src/data/config.ts` eintragen (oder als Umgebungsvariable `PUBLIC_API_URL` beim Build setzen).
8. Nach jeder Code-Änderung: **Bereitstellung verwalten → Bearbeiten → Neue Version**, sonst läuft der alte Code.

Hinweise:
- Per GET ist nur `?action=bringshare` lesbar (Wünsche und Eintragende). Zusagen werden nie ausgeliefert.
- Das Sheet selbst bleibt privat. Nicht freigeben.
- Eingaben werden geprüft (Pflichtfelder, Längen, max. 10 Personen, Honeypot) und gegen Formel-Einschleusung entschärft.
