# Landing Page Klonen

Dies ist ein Code-Bundle für "Landing Page Klonen". Das ursprüngliche Projekt ist hier verfügbar: https://www.figma.com/design/nbJDbizkocH2lFo0bpkx61/Landing-Page-Klonen.

## Voraussetzungen für Mac-Nutzer

Um dieses Projekt lokal zu bauen und zu starten, benötigst du auf deinem Mac folgende Werkzeuge:

- **Homebrew** (Paketmanager für macOS)
- **Node.js** (Version 18 oder neuer, empfohlen: aktuelle LTS-Version)
- **npm** (wird automatisch mit Node.js installiert)
- **Git** (zum Klonen/Verwalten des Repositories, ist auf den meisten Macs bereits vorhanden)

### 1. Terminal öffnen

Öffne die App **Terminal** (zu finden über Spotlight-Suche mit `Cmd + Leertaste`, dann "Terminal" eingeben).

### 2. Homebrew installieren

[Homebrew](https://brew.sh) ist der inoffizielle Standard-Paketmanager für macOS. Er lädt Software direkt im Terminal herunter, installiert sie und hält sie aktuell – ähnlich einem App Store, aber für Entwickler-Werkzeuge wie Node.js, Git usw. Homebrew selbst ist kostenlos und Open Source.

#### Installation

Falls Homebrew noch nicht installiert ist, führe folgenden Befehl im Terminal aus (er ist auf der offiziellen Seite [brew.sh](https://brew.sh) zu finden):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Folge den Anweisungen im Terminal – ggf. wirst du nach deinem Mac-Passwort gefragt. Am Ende gibt Homebrew eventuell zwei Befehle aus, um Homebrew zum `PATH` hinzuzufügen (das ist bei Apple-Silicon-Macs, also M1/M2/M3/M4, notwendig, da Homebrew dort standardmäßig unter `/opt/homebrew` statt `/usr/local` installiert wird) – führe diese dann ebenfalls im Terminal aus.

Prüfe die Installation anschließend mit:

```bash
brew --version
```

#### Die wichtigsten Homebrew-Befehle

Diese Befehle wirst du im Alltag mit Homebrew am häufigsten brauchen:

| Befehl | Beschreibung |
| --- | --- |
| `brew install <paket>` | Installiert ein neues Programm/Paket, z. B. `brew install node` |
| `brew uninstall <paket>` | Deinstalliert ein Paket wieder |
| `brew update` | Aktualisiert Homebrew selbst und die Liste verfügbarer Pakete |
| `brew upgrade` | Aktualisiert alle installierten Pakete auf die neueste Version |
| `brew upgrade <paket>` | Aktualisiert nur ein bestimmtes Paket |
| `brew list` | Zeigt alle aktuell installierten Pakete an |
| `brew search <begriff>` | Sucht nach verfügbaren Paketen, z. B. `brew search node` |
| `brew info <paket>` | Zeigt Details und Version eines Pakets an |
| `brew doctor` | Prüft die Homebrew-Installation auf Probleme und schlägt Lösungen vor |
| `brew cleanup` | Entfernt alte, nicht mehr benötigte Versionen installierter Pakete |

#### Wichtige Seiten rund um Homebrew

- **Offizielle Website:** [brew.sh](https://brew.sh) – Installationsanleitung und Übersicht
- **Formulae-Suche:** [formulae.brew.sh](https://formulae.brew.sh) – Durchsuchbare Liste aller verfügbaren Pakete ("Formulae") und Programme ("Casks")
- **Dokumentation:** [docs.brew.sh](https://docs.brew.sh) – ausführliches Handbuch mit allen Befehlen und Konzepten
- **GitHub-Repository:** [github.com/Homebrew/brew](https://github.com/Homebrew/brew) – Quellcode, Issues und Beiträge der Community

### 3. Node.js installieren

Node.js bringt automatisch auch `npm` (Node Package Manager) mit. Installiere Node.js über Homebrew:

```bash
brew install node
```

Prüfe danach, ob die Installation erfolgreich war:

```bash
node -v
npm -v
```

Es sollte jeweils eine Versionsnummer angezeigt werden (z. B. `v22.x.x` für Node und `10.x.x` für npm). Für dieses Projekt wird mindestens Node.js 18 empfohlen.

> **Hinweis:** Falls du mehrere Node.js-Versionen parallel verwalten möchtest (z. B. für unterschiedliche Projekte), kannst du alternativ [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) nutzen. Für dieses Projekt reicht die Installation über Homebrew aber vollkommen aus.

### 4. Git installieren (falls noch nicht vorhanden)

Git ist auf den meisten Macs bereits vorinstalliert. Prüfe dies mit:

```bash
git --version
```

Falls Git noch nicht installiert ist, wird macOS automatisch anbieten, die Xcode-Kommandozeilenwerkzeuge zu installieren – bestätige das im erscheinenden Dialogfenster. Alternativ lässt sich Git auch über Homebrew installieren:

```bash
brew install git
```

## Projekt herunterladen

Falls du das Projekt noch nicht lokal hast, klone es mit Git (Repository-URL ggf. anpassen):

```bash
git clone <REPOSITORY-URL>
cd RELAUNCH-WEBSITE
```

Falls du das Projekt bereits heruntergeladen hast, navigiere im Terminal einfach in den Projektordner:

```bash
cd /Pfad/zum/Projekt/RELAUNCH-WEBSITE
```

## Installation der Projekt-Abhängigkeiten

Im Projektordner alle benötigten Pakete (React, Vite, Tailwind CSS usw.) installieren:

```bash
npm i
```

Dieser Befehl liest die Datei `package.json` aus und installiert alle dort aufgeführten Abhängigkeiten in den Ordner `node_modules`. Das kann je nach Internetverbindung einige Minuten dauern.

## Seite lokal starten (Entwicklungsserver)

Um die Website lokal im Browser anzusehen und live Änderungen zu sehen (Hot Module Replacement), starte den Vite-Entwicklungsserver:

```bash
npm run dev
```

Das Terminal zeigt danach eine lokale Adresse an, üblicherweise:

```
http://localhost:5173
```

Diese Adresse in einem Browser öffnen, um die Seite anzusehen. Der Server bleibt aktiv, solange das Terminal-Fenster geöffnet ist – mit `Ctrl + C` im Terminal kannst du ihn beenden.

## Seite für die Produktion bauen

Um eine optimierte, für den Live-Betrieb bestimmte Version der Website zu erzeugen, führe aus:

```bash
npm run build
```

Dieser Befehl erstellt einen Ordner `dist`, der alle fertig gebauten, statischen Dateien (HTML, CSS, JavaScript) enthält. Dieser `dist`-Ordner kann anschließend auf einen beliebigen Webserver oder Hosting-Dienst (z. B. Netlify, Vercel, ein eigener Server) hochgeladen werden.

## Kurzübersicht der Befehle

| Befehl | Beschreibung |
| --- | --- |
| `npm i` | Installiert alle Projekt-Abhängigkeiten |
| `npm run dev` | Startet den lokalen Entwicklungsserver mit Live-Reload |
| `npm run build` | Erstellt die produktionsreife Version im Ordner `dist` |
