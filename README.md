# Gemeinsame AI-App

Die iPad-PWA wird über GitHub Pages veröffentlicht.

Die drei Projekte liegen gemeinsam im Workspace:

- `OmniRoute`: Dashboard und AI-Router auf Port `20128`
- `jarvis`: Assistant-Dienst auf Port `3000`
- `GodMode`: Electron-App mit Renderer auf Port `1212`

## Starten

```bash
npm run start:all
```

Der Launcher startet die vorhandenen Dienste parallel und öffnet das OmniRoute-Dashboard. Die Prozesse bleiben aktiv, damit erneutes Öffnen schnell ist.

Dashboard lokal:

```text
http://localhost:20128/dashboard
```

GodMode wird separat als Electron-App gestartet. Für OmniRoute ist das lokale Standardpasswort zunächst `CHANGEME`; öffentliches, passwortloses Hosting ist aus Sicherheitsgründen nicht aktiviert.