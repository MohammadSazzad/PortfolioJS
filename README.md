# PortfolioJS

A modern, responsive developer portfolio for Mohammad Sazzad, migrated from static HTML/CSS/JavaScript to Next.js.

## Features

- Next.js App Router single-page portfolio
- Component-based sections for hero, about, education, experience, skills, projects, achievements, contact, and footer
- Data-driven project, skills, education, experience, and social link content
- Responsive modal mobile navigation
- Smooth scrolling and active section tracking
- Typed hero text animation
- Static export for GitHub Pages

## Project Structure

```text
PortfolioJS/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
├── data/
│   └── portfolio.js
├── public/
│   ├── CNAME
│   ├── cv.pdf
│   └── images
├── next.config.js
├── package.json
└── README.md
```

## Development

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build the static export:

```bash
npm run build
```

The production static site is generated in `out/`.

## Deployment

GitHub Actions builds the Next.js static export and deploys the `out/` directory to GitHub Pages. The custom domain is preserved in `public/CNAME`.

## Technologies Used

- Next.js
- React
- Bootstrap
- Boxicons
- Typed.js
- CSS3
