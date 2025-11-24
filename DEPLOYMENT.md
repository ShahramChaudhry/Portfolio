# Deployment Guide

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel CLI (Fastest)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. From your project directory, run:
```bash
vercel
```

3. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? **shahram-portfolio** (or your preferred name)
   - In which directory is your code located? **./**
   - Want to modify settings? **N**

4. Vercel will provide a deployment URL. Your site is now live!

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your GitHub repository

5. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: ./
   - **Build Command**: `next build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

6. Click "Deploy"

7. Your site will be live at `https://your-project-name.vercel.app`

## Custom Domain Setup

1. In Vercel dashboard, go to your project

2. Navigate to **Settings** → **Domains**

3. Add your custom domain (e.g., `shahramchaudhry.com`)

4. Follow Vercel's DNS configuration instructions:
   - Add A record pointing to `76.76.21.21`
   - Or add CNAME record pointing to `cname.vercel-dns.com`

5. Wait for DNS propagation (usually 5-60 minutes)

## Environment Variables (Optional)

If you're using email functionality:

1. In Vercel dashboard, go to **Settings** → **Environment Variables**

2. Add your email service credentials:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASSWORD`

3. Redeploy your project for changes to take effect

## Post-Deployment Checklist

- [ ] Test all sections scroll properly
- [ ] Verify contact form works
- [ ] Check all links (Calendly, LinkedIn, Email)
- [ ] Test on mobile devices
- [ ] Verify SEO meta tags
- [ ] Check page load performance
- [ ] Test 404 page

## Monitoring & Analytics

Consider adding:

1. **Vercel Analytics** (built-in, free for hobby projects)
   - Enable in project settings

2. **Google Analytics**:
```tsx
// Add to app/layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
  strategy="afterInteractive"
/>
```

3. **Sentry** for error tracking

## Updating Your Site

Simply push to your main branch:

```bash
git add .
git commit -m "Update content"
git push
```

Vercel will automatically redeploy!

## Troubleshooting

### Build Errors

1. Run locally first:
```bash
npm run build
```

2. Fix any errors before deploying

### Performance Issues

1. Check Vercel Analytics for slow pages
2. Optimize images (use Next.js Image component)
3. Consider lazy loading for heavy components

### Email Not Working

1. Verify environment variables are set
2. Check email service credentials
3. Review API route logs in Vercel dashboard

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

