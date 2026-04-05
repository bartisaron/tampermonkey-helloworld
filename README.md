# userscripts

Tampermonkey userscripts written in TypeScript, auto-built and published via GitHub Actions.

## Setup (first time)

1. Replace `YOUR_USERNAME` in `vite.config.ts` with your GitHub username
2. Enable GitHub Pages in your repo settings:
   - Go to **Settings → Pages**
   - Set source to **GitHub Actions**
3. Push to `main` — the Action builds and publishes automatically

## Install a script

Once deployed, share the raw Pages URL with your users, e.g.:

```
https://YOUR_USERNAME.github.io/userscripts/vanenet-hello.user.js
```

Tampermonkey will prompt to install it when they open that URL.

## Development

```bash
npm install
npm run dev     # live-reload dev server at localhost
npm run build   # local build into dist/ (gitignored)
```

## Adding a new script

1. Create `src/your-script.ts`
2. Add a new `monkey({ entry: ... })` config in `vite.config.ts` or create a separate config file
3. Push — CI does the rest

## Releasing an update

1. Bump `version` in `vite.config.ts` userscript metadata
2. Push to `main`
3. Tampermonkey auto-updates on its check interval (default: daily), or users can hit "Check for updates" manually
