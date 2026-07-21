# Ninja TOEIC - Legal Pages Website

Privacy Policy, Terms of Service, and Account Deletion pages for the Ninja TOEIC app.

Built with **Next.js 15** (App Router) + **TypeScript** + **Tailwind CSS**, exported as a fully static site.

## Pages

| Route                    | Description          |
| ------------------------ | -------------------- |
| `/en`                    | Home (English)       |
| `/zh`                    | Home (Traditional Chinese) |
| `/en/privacy`            | Privacy Policy       |
| `/en/terms`              | Terms of Service     |
| `/en/account-deletion`   | Account Deletion     |
| `/zh/privacy`            | 隱私權政策           |
| `/zh/terms`              | 服務條款             |
| `/zh/account-deletion`   | 帳號刪除說明         |

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build Static Files

```bash
npm run build
```

The static output will be in the `out/` directory.

## Deploy

The `out/` folder can be deployed to any static hosting:

### Cloudflare Pages

1. Push to a Git repo
2. In Cloudflare Pages, create a new project from the repo
3. Set build command: `npm run build`
4. Set output directory: `out`

### GitHub Pages

1. Push to a Git repo
2. Enable GitHub Pages in Settings > Pages
3. Use GitHub Actions to build and deploy, or push the `out/` folder to a `gh-pages` branch

### Manual / Other

Simply upload the contents of the `out/` directory to any static file server.

## Customization

- **App name / email**: Edit `src/content/site.ts`
- **Privacy Policy**: Edit `src/content/privacy.ts`
- **Terms of Service**: Edit `src/content/terms.ts`
- **Account Deletion**: Edit `src/content/account-deletion.ts`

All legal content is stored as TypeScript constants, separate from components.
