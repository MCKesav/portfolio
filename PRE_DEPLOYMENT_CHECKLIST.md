# 📋 Pre-Deployment Checklist

Before deploying your portfolio, make sure to complete these steps:

## 🔧 Required Updates

### 1. Personal URLs (CRITICAL)
Replace placeholder URLs with your actual profiles:

**Files to update:**
- [ ] `web/app/components/Footer.tsx` - GitHub, LinkedIn URLs
- [ ] `web/app/components/Navigation.tsx` - If any social links
- [ ] `web/app/page.tsx` - Social links in hero section
- [ ] `web/app/contact/page.tsx` - All social links
- [ ] `web/app/projects/page.tsx` - GitHub and demo links for projects

**Search for these and replace:**
```
https://github.com → https://github.com/YOUR_USERNAME
https://linkedin.com → https://www.linkedin.com/in/YOUR_PROFILE
LeetCode Profile → https://leetcode.com/YOUR_USERNAME
```

### 2. Domain Configuration
After deployment, update these files with your actual domain:

- [ ] `web/app/layout.tsx` - Update `metadataBase` URL
- [ ] `web/app/sitemap.ts` - Update `baseUrl`
- [ ] `web/public/robots.txt` - Update Sitemap URL

### 3. Contact Information
- [ ] Update phone number in `web/app/contact/page.tsx`
- [ ] Verify email address is correct

### 4. Project Links
For each project in `web/app/projects/page.tsx`:
- [ ] Add actual GitHub repository URLs
- [ ] Add live demo URLs (if available)
- [ ] Add project screenshots to `web/public/images/`

## ✨ Optional Enhancements

### Images & Media
- [ ] Add profile photo (400x400px recommended)
- [ ] Add project screenshots
- [ ] Optimize images (use WebP format)

### Contact Form
- [ ] Integrate EmailJS or Formspree for working contact form
- [ ] Test form submissions

### Analytics
- [ ] Set up Google Analytics
- [ ] Enable Vercel Analytics
- [ ] Set up Google Search Console

### Content
- [ ] Proofread all text
- [ ] Check for typos
- [ ] Verify all links work

## 🧪 Testing

Before going live:
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Check all navigation links
- [ ] Test resume PDF download
- [ ] Verify all pages load correctly
- [ ] Check responsiveness at different screen sizes

## 🚀 Deployment Steps

1. **Create GitHub Repository**
   ```bash
   # Already initialized git in the web folder
   # Create repo on GitHub: https://github.com/new
   ```

2. **Push to GitHub**
   ```bash
   cd c:\Users\Asus\OneDrive\Documents\GitHub\portfolio\web
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Root Directory: `web` (leave empty if repo only contains web folder)
   - Click Deploy!

## 📊 Post-Deployment

After deployment:
- [ ] Update URLs with actual domain (see step 2 above)
- [ ] Test live site thoroughly
- [ ] Submit sitemap to Google Search Console
- [ ] Share portfolio link on social media
- [ ] Add to resume and LinkedIn profile

## 🎯 Final Checklist

- [ ] All personal URLs updated
- [ ] Domain configured in code
- [ ] Phone number updated
- [ ] Project links added
- [ ] Tested on mobile
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Live site tested
- [ ] Shared on social media

---

**Status**: ✅ Git initialized and committed | ⏳ Ready for GitHub push and Vercel deployment

**Next Step**: Create GitHub repository and push code!
