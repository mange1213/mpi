TECH-NORTH REPORTS — INSTALLABLE APP

This package is a Progressive Web App (PWA). Android Chrome can install it as an app when the site is served over HTTPS and its manifest, icons, and service worker are available.

PUBLISH TO GITHUB PAGES
1. Upload every item from this ZIP directly into the root of the GitHub repository used for the site. Do not put the files inside an extra mpi-main or tech-north-app folder. Keep index.html, manifest.webmanifest, service-worker.js, and icons/ together.
2. Commit the files and wait for GitHub Pages to finish publishing.
3. Check that https://mange1213.github.io/mpi/icons/icon-192.png opens as an image, not a 404 page.
4. Open https://mange1213.github.io/mpi/ in Chrome while online and reload once so the updated app shell and cache can install.

ANDROID PHONE OR TABLET (Chrome)
1. Open the HTTPS site directly in Chrome.
2. Open the three-dot menu and choose Install app. Confirm the installation.
3. Open Tech-North from the device's app list or home screen. If Chrome offers only Add to Home screen / Create shortcut, the site is still not being recognized as installable; check the icon URL and wait for the latest GitHub Pages deployment.

IPHONE OR IPAD
Open the HTTPS site, tap Share, then Add to Home Screen. The iOS home-screen flow is controlled by the browser and operating system.

WINDOWS, macOS, OR LINUX COMPUTER
Open the HTTPS site in a current Chrome or Edge browser and choose Install app from the address-bar icon or browser menu.

OFFLINE AND DATA NOTES
- Open the installed app once while online before using it offline. PDF export and Excel import rely on libraries that must be cached on a successful online visit; Excel import may fetch its reader the first time.
- Email sending needs a connection. Reports and examiner profiles are stored in that browser on that device and do not automatically sync to other devices. Use Full backup regularly to move data.
