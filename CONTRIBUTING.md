# Contributing to TEdit Documentation

Thanks for helping improve the TEdit docs!

## Quick Start

```bash
git clone https://github.com/TEdit/tedit-docs.git
cd tedit-docs
npm install
npm start
```

The dev server runs at http://localhost:3000 with hot reload.

## Making Changes

1. Fork the repository
2. Create a branch (`git checkout -b fix/typo-in-toolbar`)
3. Edit the relevant files in `docs/` (TEdit 5) or `versioned_docs/version-4/` (TEdit 4)
4. Verify your changes build: `npm run build`
5. Submit a pull request

## Documentation Structure

- `docs/` — TEdit 5 (current version)
- `versioned_docs/version-4/` — TEdit 4 (archived)
- `static/img/v5/` — TEdit 5 screenshots
- `static/img/v4/` — TEdit 4 screenshots
- `sidebars.js` — Sidebar navigation for TEdit 5
- `versioned_sidebars/` — Sidebar navigation for TEdit 4

## Guidelines

- Keep language clear and concise — our audience ranges from ages 12 to 50
- Use tables for reference data, not long paragraphs
- Add screenshots to `static/img/v5/<category>/` and reference them as `/img/v5/<category>/filename.png`
- Use [Docusaurus admonitions](https://docusaurus.io/docs/markdown-features/admonitions) (`:::tip`, `:::warning`, `:::danger`, `:::info`) where appropriate
- Test your changes with `npm run build` before submitting — broken links will fail the build

## Community

- [Discord](https://discord.gg/SrwYZU2GDY)
- [GitHub Issues](https://github.com/TEdit/tedit-docs/issues)

## License

This project is licensed under the [Microsoft Public License (MS-PL)](LICENSE).
