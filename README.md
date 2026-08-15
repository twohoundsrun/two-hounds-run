# Two Hounds Run Website

Source code for the Two Hounds Run digital studio website.

## What is included

- Responsive one-page homepage
- Services, projects, about, process, and contact sections
- Mobile and desktop layouts
- Custom navy, blue-gray, cream, and copper design system
- React, TypeScript, Tailwind CSS, Vite, and Vinext setup
- Production build and validation scripts

## Requirements

- Node.js 22.13 or newer
- npm
- Linux, macOS, Windows Subsystem for Linux, or a cloud development environment

## Start the website locally

Open a terminal inside this folder and run:

```bash
npm install
npm run dev
```

The terminal will display the local address to open in your browser. Press `Ctrl+C` when you want to stop the development server.

## Create a production build

```bash
npm run build
```

The completed production build is written to the `dist` folder.

## Main files to edit

| File | Purpose |
| --- | --- |
| `app/page.tsx` | All homepage text, services, projects, links, and page sections |
| `app/globals.css` | Colors, spacing, typography, desktop layout, and mobile layout |
| `app/layout.tsx` | Website title, search description, and fonts |
| `public/images/` | Brand logo and artwork from the Two Hounds Run brand kit |

## Change the contact email

Open `app/page.tsx` and search for:

```text
mailto:collindk94@gmail.com
```

Replace it with the email address you want customers to use.

## Add project links

The featured projects are stored in the `projects` list near the top of `app/page.tsx`. Add a `url` value to a project, then change its project card from an `article` to a link when you are ready to make the cards clickable.

## Replace the placeholder project art

The three project cards use placeholder SVG artwork in `public/images/projects/` (`gate.svg`, `espn.svg`, `tennis.svg`), built from the brand kit palette. Swap in real screenshots by replacing those files (or editing the `visual` field in the `projects` array in `app/page.tsx`).

## Hosting

This project is configured for a Cloudflare-compatible Vinext deployment. It is not currently a plain static GitHub Pages site. If you want to host it through GitHub Pages, create a static HTML/CSS version or change the build configuration before deploying.

## Useful commands

```bash
npm run dev      # Run the local development site
npm run build    # Create and validate the production build
npm run lint     # Check the source code
npm test         # Build and run the included test
```

## Notes

- Installed dependencies are intentionally not included in the download. Running `npm install` recreates them.
- The site-specific deployment identity is intentionally excluded, so this copy can safely be placed in a new repository.
- The current contact button uses `collindk94@gmail.com` until it is replaced with a dedicated Two Hounds Run address.
