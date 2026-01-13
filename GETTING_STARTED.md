# 🎯 GETTING STARTED - Read This First!

Welcome to your cosmic portfolio! This file will get you from zero to running in under 5 minutes.

## ✅ Prerequisites Check

Before starting, make sure you have:

- [ ] **Node.js 18+** installed
  - Check: `node --version` (should show v18 or higher)
  - Don't have it? Download from [nodejs.org](https://nodejs.org)

- [ ] **npm** (comes with Node.js)
  - Check: `npm --version`

- [ ] **Git** (optional, for version control)
  - Check: `git --version`
  - Download from [git-scm.com](https://git-scm.com)

- [ ] A code editor (VS Code recommended)
  - Download from [code.visualstudio.com](https://code.visualstudio.com)

## 🚀 Step-by-Step Setup (5 Minutes!)

### Step 1: Install Dependencies (2 min)

Open terminal in this project folder and run:

```bash
npm install
```

You'll see packages being installed. Wait for it to complete. ☕

**What this does:** Downloads all required libraries (React, TypeScript, Tailwind, etc.)

---

### Step 2: Start Development Server (30 sec)

```bash
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in XXX ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

**Open your browser** and visit: http://localhost:3000

🎉 **You should see your portfolio!**

---

### Step 3: Make It Yours (2 min)

1. **Open this file in VS Code:**
   ```
   src/data/siteData.ts
   ```

2. **Edit your information:**
   - Line 85-92: Change name, title, tagline
   - Line 96-108: Update your bio
   - Line 346-352: Add your email, GitHub, LinkedIn

3. **Save the file** (Ctrl+S / Cmd+S)

4. **Watch the magic:** Your browser auto-updates instantly! 🪄

---

## 📝 What to Edit Next

### Priority 1: Essential Info ⭐
1. **Personal details** → `src/data/siteData.ts` lines 85-92
2. **Contact info** → Same file, lines 346-352
3. **Resume PDF** → Replace `public/resume.pdf` with your actual resume

### Priority 2: Your Content 🎯
4. **Projects** → `src/data/siteData.ts` lines 150-218
5. **Experience** → Same file, lines 112-147
6. **Skills** → Same file, lines 221-276
7. **Education** → Same file, lines 279-307

### Priority 3: Customization 🎨
8. **Colors** → `tailwind.config.js` lines 12-24
9. **SEO/Meta tags** → `index.html` lines 8-22

---

## 🎨 Theme Customization

### Change Your Main Colors

Edit `tailwind.config.js`:

```js
// Line 14-18: Main accent colors
quantum: {
  cyan: '#00f5ff',      // ← Change this!
  violet: '#a855f7',    // ← And this!
  orange: '#fb923c',    // ← And this!
}
```

Save → See changes instantly in browser!

---

## 🧪 Testing Your Site

### On Desktop
1. Dev server running: `npm run dev`
2. Visit: http://localhost:3000
3. Click through all sections
4. Test theme toggle (moon/sun icon)

### On Mobile
1. Open Chrome DevTools (F12)
2. Click phone icon (top-left)
3. Select device (iPhone, Pixel, etc.)
4. Test navigation, scrolling, buttons

### Production Preview
```bash
npm run build    # Creates optimized version
npm run preview  # Test production build
```

Visit: http://localhost:4173

---

## ✨ Key Features of Your Portfolio

### What's Already Working:

✅ **Glassmorphic navbar** - Sticky top navigation with smooth scroll  
✅ **Hero section** - Animated name reveal with cosmic background  
✅ **Theme toggle** - Dark/Light mode (persisted in browser)  
✅ **Smooth animations** - Framer Motion physics-based  
✅ **Project cards** - Hover effects, tech stacks, live demo links  
✅ **Skills visualization** - Animated progress rings  
✅ **Timeline** - Vertical experience journey  
✅ **Responsive design** - Works on all screen sizes  
✅ **Accessibility** - Keyboard navigation, screen reader friendly  
✅ **SEO optimized** - Meta tags, semantic HTML  
✅ **Fast loading** - Code splitting, lazy loading  

---

## 📁 Important Files to Know

| File | What It Does | Edit? |
|------|-------------|--------|
| `src/data/siteData.ts` | ALL YOUR CONTENT | ✅ YES - Edit this most! |
| `src/App.tsx` | Main app structure | ⚠️ Usually no |
| `tailwind.config.js` | Colors & styling | ✅ YES - For color changes |
| `index.html` | SEO meta tags | ✅ YES - Update meta tags |
| `public/resume.pdf` | Your resume | ✅ YES - Replace with yours |
| `package.json` | Dependencies | ❌ NO - Don't touch |
| `vite.config.ts` | Build config | ❌ NO - Already optimized |

---

## 🐛 Troubleshooting

### "Cannot find module" error
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
```bash
# Option 1: Use different port
npm run dev -- --port 3001

# Option 2: Kill existing process
lsof -ti:3000 | xargs kill -9
```

### Changes not showing
1. Hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac)
2. Clear browser cache
3. Restart dev server: Stop (Ctrl+C) then `npm run dev`

### TypeScript errors
```bash
npm run lint  # See all errors
```

Check the file and line number shown in the error.

---

## 🚀 Ready to Deploy?

Once you're happy with your portfolio:

1. **Test the production build:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Choose a hosting platform:**
   - **Vercel** (easiest) - See `DEPLOYMENT.md`
   - **Netlify** - See `DEPLOYMENT.md`
   - **GitHub Pages** - See `DEPLOYMENT.md`

3. **Full deployment guide:**
   Open `DEPLOYMENT.md` for step-by-step instructions.

---

## 📚 Need More Help?

- **Quick tips:** `CHEATSHEET.md`
- **Full documentation:** `README.md`
- **Deployment guide:** `DEPLOYMENT.md`
- **Code comments:** Every file has helpful comments!

---

## 🎯 Your Next Steps

1. [ ] Start dev server: `npm run dev`
2. [ ] Update personal info in `src/data/siteData.ts`
3. [ ] Replace resume.pdf in `public/` folder
4. [ ] Add your real projects
5. [ ] Test on mobile (Chrome DevTools)
6. [ ] Build & preview: `npm run build && npm run preview`
7. [ ] Deploy (see DEPLOYMENT.md)
8. [ ] Share with the world! 🌍

---

## 💡 Pro Tips

1. **Save often** - Changes auto-reload in browser
2. **Test mobile first** - Most users are on phones
3. **Use sample data** - Keep the structure, just change content
4. **One section at a time** - Don't try to do everything at once
5. **Check console** - F12 in browser shows any errors

---

## 🎉 You're Ready!

You now have everything you need to build an amazing portfolio. 

**Remember:**
- Don't panic if something breaks - just undo and try again
- Every section is independent - fix one at a time
- The data file (`siteData.ts`) is your friend - 90% of edits happen there
- Have fun! This is YOUR cosmic digital garden 🌌

**Questions?** Check the other documentation files or create an issue on GitHub.

---

*Built with maximum truth-seeking energy ⚡*  
*May your portfolio shine brighter than a supernova 🌟*

**Now go make it yours!** 🚀
