# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Hero Section**: Eye-catching landing page with call-to-action buttons
- **About Section**: Personal introduction and contact information
- **Skills Section**: Organized display of technical skills by category
- **Projects Section**: Showcase of featured projects with descriptions
- **Contact Section**: Interactive contact form with social media links
- **Responsive Design**: Fully responsive across all devices
- **Dark Mode Support**: Built-in dark mode styling
- **Modern Tech Stack**: Next.js 16, TypeScript, Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build the production version:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.tsx`: Update name, title, and description
- `src/components/About.tsx`: Add your photo, bio, location, email, and experience
- `src/components/Skills.tsx`: Modify the skills array with your technologies
- `src/components/Projects.tsx`: Replace with your actual projects
- `src/components/Contact.tsx`: Update social media links
- `src/app/layout.tsx`: Update metadata (title, description)

### Styling

All components use Tailwind CSS. Modify the className properties to customize colors, spacing, and layout.

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Hero.tsx        # Landing section
│       ├── About.tsx       # About section
│       ├── Skills.tsx      # Skills display
│       ├── Projects.tsx    # Projects showcase
│       ├── Contact.tsx     # Contact form
│       └── Footer.tsx      # Footer component
├── public/                 # Static assets
└── package.json           # Dependencies
```

## Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Geist Mono

## Deployment

Deploy easily on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or use any other hosting platform that supports Next.js.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
