TECH-NORTH ANDROID INSTALLABLE APP PACKAGE

This package keeps the existing Tech-North inspection report app and adds Android/Chrome installation support. It is a Progressive Web App (PWA), so it installs from a secure HTTPS website and opens from an icon like an app. It is not an APK file.

FILES
- index.html: the existing Tech-North inspection report app, with an Install App button
- manifest.webmanifest: app name, display settings and icons
- service-worker.js: offline app-shell and library caching
- icon-192.png, icon-512.png, icon-512-maskable.png: Android app icons

FIRST-TIME SETUP (REQUIRED)
Android requires an HTTPS website for PWA installation. Opening index.html directly from Downloads or a USB drive will not enable installation.

1. Upload ALL files in this package to the root of an HTTPS static website. Keep the files together in the same folder.
2. Open that HTTPS website in Google Chrome on the Android phone or tablet while online.
3. Wait for the app to finish loading. The Install App button will appear when Chrome confirms that installation is available. Tap it and accept the install prompt.
4. If Chrome does not show the button yet, use Chrome's three-dot menu and choose Install app or Add to Home screen.
5. Repeat the same steps on the other Android device. Installation is done separately on each device.
6. Open the installed app once while online so the offline files and libraries can be cached. Test report creation and exports.

IMPORTANT DATA NOTE
Reports and examiner profiles are stored locally in the app/browser storage on each device. They do not automatically sync between your phone, tablet or computer. Use the app's Full backup feature regularly and transfer backups between devices when needed.

OFFLINE NOTES
The app shell and supported libraries are cached while online. Some first-time features may need one online load before they are available offline. Email sending requires an internet connection.
