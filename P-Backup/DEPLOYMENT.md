# 🚀 Deployment Guide - Cosmic Portfolio

## Quick Deploy Options

### 🟢 Vercel (Recommended - Easiest!)

**Why Vercel?**
- Zero configuration needed
- Automatic HTTPS & CDN
- Continuous deployment (auto-deploys on git push)
- Free tier is generous
- Built for React/Vite apps

**Steps:**

1. **Push to GitHub** (if not already)
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Cosmic portfolio ready!"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your portfolio repo
   - Vercel auto-detects Vite settings
   - Click "Deploy"
   - Done! 🎉

3. **Custom Domain (Optional)**
   - In Vercel dashboard, go to Settings → Domains
   - Add your domain (e.g., `yourname.com`)
   - Follow DNS configuration instructions
   - SSL certificate auto-generated

**Environment Variables:** None needed for this portfolio!

---

### 🔵 Netlify

**Steps:**

1. **Build the project locally**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**
   ```bash
   # Install Netlify CLI globally
   npm install -g netlify-cli

   # Login to Netlify
   netlify login

   # Deploy
   netlify deploy --prod --dir=dist
   ```

3. **Or use Netlify UI**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Drag & drop the `dist` folder
   - Done!

**Build Settings (if connecting GitHub):**
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18+

---

### 🟣 GitHub Pages

**Steps:**

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these scripts:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://YOUR_USERNAME.github.io/portfolio"
   }
   ```

3. **Update vite.config.ts**
   Add base path:
   ```typescript
   export default defineConfig({
     base: '/portfolio/', // Your repo name
     plugins: [react()],
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repo Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Save

**Access:** `https://YOUR_USERNAME.github.io/portfolio`

---

### 🟠 Railway

**Steps:**

1. **Create railway.toml**
   ```toml
   [build]
   builder = "NIXPACKS"
   buildCommand = "npm install && npm run build"

   [deploy]
   startCommand = "npx serve dist -s -l 3000"
   ```

2. **Deploy**
   - Go to [railway.app](https://railway.app)
   - New Project → Deploy from GitHub
   - Select your repo
   - Auto-deploys!

---

### 🔴 Cloudflare Pages

**Steps:**

1. **Connect GitHub**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Pages → Create a project
   - Connect to GitHub repo

2. **Build Settings**
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

3. **Deploy** - Automatic!

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure you've:

- [ ] Updated all content in `src/data/siteData.ts`
- [ ] Added your real resume PDF to `public/resume.pdf`
- [ ] Updated SEO meta tags in `index.html`
- [ ] Changed GitHub/LinkedIn/Email links to yours
- [ ] Tested locally: `npm run build && npm run preview`
- [ ] Fixed any console errors
- [ ] Tested on mobile (Chrome DevTools responsive mode)
- [ ] Checked accessibility (Lighthouse in Chrome)

---

## 🔍 SEO Optimization Post-Deployment

### 1. Submit to Search Engines

**Google Search Console**
```
1. Go to search.google.com/search-console
2. Add your site URL
3. Verify ownership (DNS or HTML tag)
4. Submit sitemap (if you create one)
```

**Bing Webmaster Tools**
```
1. Go to bing.com/webmasters
2. Add your site
3. Verify and submit
```

### 2. Create a sitemap (Optional)

Install sitemap generator:
```bash
npm install --save-dev vite-plugin-sitemap
```

Update `vite.config.ts`:
```typescript
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://yourdomain.com'
    })
  ],
})
```

### 3. Add robots.txt

Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

---

## 🐛 Common Deployment Issues

### Issue: Build fails with memory error
**Solution:**
```bash
# Increase Node memory limit
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Issue: 404 on page refresh (SPA routing)
**Solution:** Add redirect rules

**Netlify:** Create `public/_redirects`
```
/* /index.html 200
```

**Vercel:** Create `vercel.json`
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Issue: Images not loading
**Solution:** Check image paths - use relative paths or store in `/public/`

### Issue: Environment variables not working
**Solution:** Prefix with `VITE_`:
```
VITE_API_KEY=your_key
```

Access in code:
```typescript
const apiKey = import.meta.env.VITE_API_KEY
```

---

## 📊 Performance Monitoring

### Lighthouse CI (Automated Performance Checks)

Add to GitHub Actions (`.github/workflows/lighthouse.yml`):
```yaml
name: Lighthouse CI
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install && npm run build
      - uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            http://localhost:3000
          uploadArtifacts: true
```

### Analytics (Optional)

**Google Analytics 4:**
Add to `index.html` in `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Plausible (Privacy-friendly):**
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## 🔐 Security Best Practices

1. **Enable HTTPS** - All modern hosts do this automatically
2. **Add security headers** (Vercel/Netlify handle this)
3. **Don't commit secrets** - Use `.env` files (already gitignored)
4. **Keep dependencies updated**:
   ```bash
   npm audit
   npm update
   ```

---

## 🎉 Success!

Your cosmic portfolio is now live! 🌟

**Next Steps:**
1. Share on LinkedIn/Twitter/X
2. Add link to your GitHub profile README
3. Include in your email signature
4. Monitor analytics (if enabled)
5. Keep updating with new projects!

**Need help?** Open an issue on GitHub or check the main README.

---

*May your portfolio attract opportunities like a black hole attracts matter.* 🌌
