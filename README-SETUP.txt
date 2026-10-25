TECH-NORTH OFFLINE APP PACKAGE

Files:
- index.html: the Tech-North Word-export app
- manifest.webmanifest: installable app settings
- service-worker.js: offline app-shell and library caching
- icons/: app icons

IMPORTANT: Android installable/offline web apps need to be hosted over HTTPS. Opening index.html directly from a Downloads folder will not activate the service worker.

Deployment steps:
1. Upload all files and folders in this package to the root of an HTTPS static website (keep the folder structure).
2. Open the website on the phone in Chrome while online and wait for it to finish loading.
3. Use Chrome menu (three dots) > Install app or Add to Home screen.
4. While still online, open the app once and test PDF export and any Excel-worker import features so required libraries can be cached.
5. Turn on Airplane mode and test creating/saving a report, adding photos, Word export, and PDF export before relying on it at an inspection site.
6. Use Full backup regularly. Reports and examiner profiles are stored locally in the app's browser storage on that device; they do not automatically sync to your laptop.

Offline limitations: The app shell and common libraries are cached by the service worker when network access is available. If a third-party library cannot be downloaded during setup, its dependent feature may still need one online load before it works offline. Email sending requires connectivity; you can still save/export a report offline and send it later.
