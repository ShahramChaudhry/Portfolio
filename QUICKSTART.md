# Quick Start Guide

Get your portfolio running in under 5 minutes!

## Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm

## Installation & Setup

```bash
# 1. Navigate to project directory
cd shahram

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open browser
# Visit http://localhost:3000
```

That's it! Your portfolio is now running locally.

## Customization Checklist

Before deploying, update these key items:

### 1. Contact Information (components/Contact.tsx)
```tsx
// Line ~44: Update Calendly URL
href="https://calendly.com/YOUR-USERNAME"

// Line ~52: Update email
href="mailto:YOUR-EMAIL@example.com"

// Line ~60: Update LinkedIn
href="https://www.linkedin.com/in/YOUR-LINKEDIN"
```

### 2. Projects (data/projects.json)
- Add/remove projects
- Update descriptions
- Add project images to `public/projects/`

### 3. Experience (components/Experience.tsx)
- Update the `experiences` array with your work history

### 4. Services (components/Services.tsx)
- Modify the `services` array to match your offerings

### 5. Meta Information (app/layout.tsx)
- Update page title
- Update description
- Update keywords

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts, and you're live!
```

Or push to GitHub and import in Vercel dashboard.

## Project Structure

```
📁 app/               → Pages and API routes
📁 components/        → React components for each section
📁 data/              → JSON data for projects
📁 public/            → Static files (images, fonts, etc.)
📁 utils/             → Utility functions
```

## Common Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Need Help?

- 📖 [Full README](./README.md)
- 🚀 [Deployment Guide](./DEPLOYMENT.md)
- 📧 Contact: shahram@example.com

## What's Included?

✅ Hero section with scroll animations  
✅ Experience timeline  
✅ Projects showcase  
✅ Services overview  
✅ About section  
✅ Contact form with API  
✅ Fully responsive design  
✅ Dark mode optimized  
✅ Smooth animations  
✅ SEO ready  
✅ Vercel deployment ready  

---

Built with Next.js 14, React, TypeScript, and TailwindCSS

