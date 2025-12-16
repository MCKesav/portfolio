# 🚀 Deployment Guide

## Prerequisites
- GitHub account
- Vercel account (free) - [vercel.com](https://vercel.com)

## Option 1: Deploy to Vercel (Recommended - 5 minutes)

### Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done):
   ```bash
   cd c:\Users\Asus\OneDrive\Documents\GitHub\portfolio\web
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```

2. **Create GitHub Repository**:
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name: `portfolio`
   - Keep it Public
   - Don't initialize with README (we already have files)
   - Click "Create repository"

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on Vercel

1. **Sign in to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub

2. **Import Project**:
   - Click "Add New..." → "Project"
   - Select your `portfolio` repository
   - Click "Import"

3. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `web` (important!)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - Leave environment variables empty
   - Click "Deploy"

4. **Wait for Deployment** (2-3 minutes):
   - Vercel will build and deploy automatically
   - You'll get a live URL: `your-project.vercel.app`

### Step 3: Custom Domain (Optional)

1. Go to your project settings on Vercel
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

---

## Option 2: Deploy to Netlify (Alternative)

### Step 1: Build Your Site
```bash
cd c:\Users\Asus\OneDrive\Documents\GitHub\portfolio\web
npm run build
```

### Step 2: Deploy to Netlify

1. **Sign in to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Sign in with GitHub

2. **Import from Git**:
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and authorize
   - Select your repository

3. **Configure Build Settings**:
   - **Base directory**: `web`
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - Click "Deploy site"

---

## Post-Deployment Checklist

After successful deployment:

### 1. Update URLs in Your Code

Replace placeholder URLs with your actual links:

**In `web/app/sitemap.ts`:**
```typescript
const baseUrl = 'https://your-actual-domain.vercel.app';
```

**In `web/public/robots.txt`:**
```
Sitemap: https://your-actual-domain.vercel.app/sitemap.xml
```

**In Footer and Contact pages:**
- Add your actual GitHub URL
- Add your actual LinkedIn URL
- Add your actual LeetCode URL

### 2. Test Your Site

Visit your deployed site and check:
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Resume PDF downloads
- [ ] Contact form displays
- [ ] Mobile responsive (use browser DevTools)
- [ ] Links work properly

### 3. Submit to Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your domain
3. Verify ownership
4. Submit your sitemap: `https://your-domain.com/sitemap.xml`

### 4. Add Analytics (Optional)

**Google Analytics:**
1. Create GA4 property
2. Get tracking ID
3. Add to `web/app/layout.tsx`

**Vercel Analytics:**
1. Enable in Vercel dashboard
2. Install `@vercel/analytics`:
   ```bash
   npm install @vercel/analytics
   ```
3. Add to layout

---

## Continuous Deployment

Once set up, every push to your `main` branch will automatically deploy:

```bash
# Make changes
git add .
git commit -m "Update project information"
git push

# Vercel automatically deploys!
```

---

## Troubleshooting

### Build Fails on Vercel

1. **Check Root Directory**: Make sure it's set to `web`
2. **Check Node Version**: Vercel uses Node 18+ by default
3. **Check Build Logs**: View detailed error in Vercel dashboard

### 404 Errors

- Ensure all page files are in `web/app/` directory
- Check that file names are lowercase
- Verify Next.js App Router structure

### Slow Performance

- Enable Vercel Analytics to identify issues
- Optimize images (use Next.js Image component)
- Check Core Web Vitals in Vercel dashboard

---

## Your Live Portfolio URLs

After deployment, your portfolio will be available at:

- **Vercel**: `https://your-portfolio.vercel.app`
- **Custom Domain**: `https://your-custom-domain.com` (if configured)

### Share Your Portfolio:

- 📧 Add to email signature
- 💼 Update LinkedIn profile link
- 🔗 Add to GitHub profile README
- 📱 Add to resume

---

## Next Steps After Deployment

1. ✅ Update GitHub, LinkedIn, LeetCode URLs
2. ✅ Add actual project repository links
3. ✅ Add project screenshots
4. ✅ Update phone number
5. ✅ Set up contact form backend (EmailJS/Formspree)
6. ✅ Add Google Analytics
7. ✅ Share on social media!

**Congratulations! 🎉 Your portfolio is now live!**
