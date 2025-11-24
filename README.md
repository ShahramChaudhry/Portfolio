# Shahram Chaudhry - Portfolio

A modern, full-stack portfolio website showcasing product engineering and AI experience design work.

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion
- **Backend**: Next.js API Routes
- **Deployment**: Vercel

## Design System

### Colors
- **Primary**: `#FFFFFF`, `#0A0A0A`
- **Accent (Mint)**: `#5FF5DA`, `#0EF2AD`
- **Greys**: `#111111`, `#1A1A1A`, `#2A2A2A`, `#6B6B6B`, `#A8A8A8`

### Typography
- **Headline**: Space Grotesk
- **Body**: Inter
- **Mono**: JetBrains Mono

## Features

- 🎨 Dark mode first design
- ✨ Smooth scroll animations with Framer Motion
- 📱 Fully responsive layout
- 🎯 Section-based navigation (Hero, Experience, Projects, Services, About, Contact)
- 📧 Contact form with API integration
- 🚀 Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shahram
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file (optional, for email integration):
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
shahram/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── globals.css               # Global styles and Tailwind directives
│   ├── layout.tsx                # Root layout with fonts
│   └── page.tsx                  # Main page with all sections
├── components/
│   ├── Hero.tsx                  # Hero section with scroll animations
│   ├── Experience.tsx            # Timeline-based experience section
│   ├── Projects.tsx              # Projects grid with hover effects
│   ├── Services.tsx              # Services 3-column layout
│   ├── About.tsx                 # About section with floating animation
│   └── Contact.tsx               # Contact section with form and CTAs
├── data/
│   └── projects.json             # Project data
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.js                # Next.js configuration
└── package.json                  # Dependencies
```

## Customization

### Update Personal Information

1. **Contact Links**: Edit the URLs in `components/Contact.tsx`:
   - Calendly booking link
   - Email address
   - LinkedIn profile

2. **Projects**: Edit `data/projects.json` to add/modify projects

3. **Experience**: Edit the `experiences` array in `components/Experience.tsx`

4. **Services**: Modify the `services` array in `components/Services.tsx`

### Email Integration

To enable actual email sending via the contact form:

1. Choose an email service (SendGrid, Resend, or SMTP)
2. Add credentials to `.env.local`:
```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password
```
3. Uncomment and configure the email code in `app/api/contact/route.ts`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Go to [Vercel](https://vercel.com) and import your repository

3. Vercel will automatically detect Next.js and configure the build settings

4. Add environment variables in Vercel dashboard if using email integration

5. Deploy!

### Alternative Deployment

This is a standard Next.js app and can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Render
- AWS Amplify
- DigitalOcean App Platform

## Building for Production

```bash
npm run build
npm run start
```

## License

© Shahram Chaudhry 2025

## Contact

- Email: shahram@example.com
- LinkedIn: [linkedin.com/in/shahramchaudhry](https://linkedin.com/in/shahramchaudhry)
- Book a Call: [calendly.com/shahramchaudhry](https://calendly.com/shahramchaudhry)

