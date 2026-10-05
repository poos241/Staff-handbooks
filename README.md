# Staff Handbooks

Docusaurus-powered staff handbook website for our Discord & VRChat little space community.

## Editing

All handbook content lives in `docs/` as plain Markdown files — just edit the text and rebuild.

- `docs/general-handbook/` — info every staff member needs
- `docs/server-staff/` — moderators & trial mods
- `docs/event-staff/` — event hosts & security
- `docs/it/` — server IT team

Pages marked with `TODO` need your group's specific details filled in.

## Local preview

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## Deploy

Set `url` and `baseUrl` in `docusaurus.config.js` for your hosting (e.g. GitHub Pages), then build and publish the `build/` folder.
