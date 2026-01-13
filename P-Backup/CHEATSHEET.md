# 🌌 Cosmic Portfolio - Quick Reference

## 🚀 Most Common Commands

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Install dependencies (run first!)
npm install
```

## 📝 Most Common Edits

### 1. Update Your Info
**File:** `src/data/siteData.ts`
- Lines 85-92: Personal info (name, title, tagline)
- Lines 95-109: About section (bio, interests)
- Lines 112-147: Experience timeline
- Lines 150-218: Projects showcase
- Lines 221-276: Skills with progress bars
- Lines 279-307: Education
- Lines 310-342: Certifications
- Lines 345-352: Contact info

### 2. Change Colors
**File:** `tailwind.config.js`
- Lines 12-24: Cosmic color palette

### 3. Add Resume
**File:** `public/resume.pdf`
- Replace with your actual PDF resume

### 4. Update SEO
**File:** `index.html`
- Lines 8-11: Meta descriptions
- Lines 14-17: Open Graph tags
- Lines 20-22: Twitter cards
- Line 29: Page title

## 🎨 Theme Customization

### Change Background Colors
Edit `tailwind.config.js`:
```js
cosmic: {
  void: '#000000',    // Deep black
  deep: '#02040f',    // Dark blue-black
  dark: '#0a0e1a',    // Lighter dark
}
```

### Change Accent Colors
```js
quantum: {
  cyan: '#00f5ff',    // Electric cyan
  violet: '#a855f7',  // Purple
  orange: '#fb923c',  // Orange
}
```

## 🔧 Component Locations

| What | Where |
|------|-------|
| Navigation bar | `src/components/Navbar.tsx` |
| Footer | `src/components/Footer.tsx` |
| Project cards | `src/components/ProjectCard.tsx` |
| Hero landing | `src/sections/Hero.tsx` |
| About section | `src/sections/About.tsx` |
| Experience timeline | `src/sections/Experience.tsx` |
| Projects grid | `src/sections/Projects.tsx` |
| Skills display | `src/sections/Skills.tsx` |
| Education | `src/sections/Education.tsx` |
| Certifications | `src/sections/Certifications.tsx` |
| Contact form | `src/sections/Contact.tsx` |

## 🐛 Quick Fixes

### Port already in use?
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- --port 3001
```

### Dependencies not installing?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors?
```bash
# Check all errors
npm run lint

# Auto-fix what's possible
npx eslint --fix src/
```

### Build is huge?
- Check if you're importing entire libraries
- Use code splitting for large components
- Optimize images (use WebP format)

## 📱 Testing

### Desktop
```bash
npm run dev
# Visit: http://localhost:3000
```

### Mobile
1. Start dev server: `npm run dev`
2. Open Chrome DevTools (F12)
3. Click device icon (Ctrl+Shift+M)
4. Select phone model

### Production Build
```bash
npm run build
npm run preview
# Visit: http://localhost:4173
```

## 🌐 Deploy (Choose One)

### Vercel (Easiest)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build & deploy
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
# Install gh-pages
npm i -D gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d dist"

# Deploy
npm run build
npm run deploy
```

## 🎯 File Structure Overview

```
src/
├── components/      ← Reusable UI pieces
├── data/           ← ⭐ YOUR CONTENT HERE
├── hooks/          ← Custom React hooks
├── sections/       ← Page sections
├── styles/         ← Global CSS
├── utils/          ← Helper functions
└── App.tsx         ← Main app
```

## 💡 Pro Tips

1. **Edit data first**: Everything in `siteData.ts` - no code needed!
2. **Test mobile**: Most users will view on phones
3. **Optimize images**: Use TinyPNG or similar before adding
4. **Keep it updated**: Add new projects as you build them
5. **Check performance**: Run Lighthouse in Chrome (F12 → Lighthouse)

## 📚 Documentation

- Full README: `README.md`
- Deployment guide: `DEPLOYMENT.md`
- This cheatsheet: `CHEATSHEET.md`

## 🆘 Need Help?

1. Check the full README.md
2. Search existing issues on GitHub
3. Create a new issue with:
   - What you tried
   - What happened
   - Error messages
   - Screenshots

---

**Remember:** The only dumb question is the one not asked! 🚀

*Built with maximum truth-seeking energy ⚡*
