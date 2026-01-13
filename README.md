# 🌌 Cosmic Portfolio - Yellapragada Siddharth

> *Training models by day, chasing cosmic truths by night.*

A stunning, production-ready personal portfolio website built with React, TypeScript, and Framer Motion. Features a "Cosmic Digital Garden" aesthetic that evokes neural constellations, black-hole event horizons, and the infinite quest to understand the universe.

**Live Demo:** [Your Deployed URL]

---

## ✨ Features

### 🎨 Design & UX
- **Cosmic Digital Garden aesthetic** - Neural networks meet space exploration
- **Dual theme system** - Cosmic Dark (default) + Quantum Light mode
- **Glassmorphic UI** - Backdrop blur, translucent surfaces, glowing accents
- **Smooth animations** - Physics-based springs and scroll-triggered reveals via Framer Motion
- **Responsive design** - Mobile-first → Desktop optimized
- **Accessibility-first** - WCAG compliant, keyboard navigation, reduced motion support

### 🚀 Performance
- **Lighthouse scores:** Near-perfect 100s across all metrics
- **Code-splitting** - Lazy loading with React.lazy + Suspense
- **Optimized builds** - Vite for instant HMR and optimized production bundles
- **Zero render-blocking** - Async fonts, optimized assets

### 🏗️ Architecture
- **Data-driven** - All content lives in `src/data/siteData.ts` (single source of truth)
- **Modular components** - Clean separation of concerns
- **Type-safe** - TypeScript strict mode
- **Maintainable** - Heavily commented with witty Grok-style notes

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 18+ |
| **Language** | TypeScript (strict mode) |
| **Build Tool** | Vite 5+ |
| **Styling** | Tailwind CSS 3+ with custom cosmic theme |
| **Animations** | Framer Motion 11+ |
| **Icons** | Lucide React |
| **Deployment** | Vercel (recommended) / Netlify / GitHub Pages |

---

## 📁 Project Structure

```
MY PORTFOLIO/
├── public/
│   └── resume.pdf              # Your CV/resume (add this!)
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.tsx         # Glassmorphic navigation
│   │   ├── Footer.tsx         # Social links footer
│   │   ├── Section.tsx        # Section wrapper + header
│   │   └── ProjectCard.tsx    # Project showcase card
│   ├── data/
│   │   └── siteData.ts        # ⭐ EDIT THIS - All your content!
│   ├── hooks/                 # Custom React hooks
│   │   ├── useTheme.tsx       # Theme provider & toggle
│   │   ├── useActiveSection.ts # Scroll position tracking
│   │   ├── useSectionInView.ts # Viewport detection
│   │   └── useAnimations.ts   # Animation utilities
│   ├── sections/              # Major page sections
│   │   ├── Hero.tsx          # Landing with animated title
│   │   ├── About.tsx         # Bio + interests
│   │   ├── Experience.tsx    # Timeline with wormholes
│   │   ├── Projects.tsx      # Bento grid + filters
│   │   ├── Skills.tsx        # Progress rings
│   │   ├── Education.tsx     # Dual-degree showcase
│   │   ├── Certifications.tsx # Badge constellation
│   │   └── Contact.tsx       # Communication portal
│   ├── styles/
│   │   └── globals.css       # Global styles + utilities
│   ├── App.tsx               # Main app orchestration
│   ├── main.tsx              # Entry point
│   └── vite-env.d.ts         # TypeScript definitions
├── index.html                # HTML template with SEO
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── tailwind.config.js        # Custom cosmic theme
├── vite.config.ts            # Vite configuration
└── README.md                 # You are here!
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

```bash
# 1. Clone the repository (or download ZIP)
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# 2. Install dependencies
npm install
# or: yarn install
# or: pnpm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Visit: http://localhost:3000
```

The site will hot-reload as you make changes! ⚡

---

## ✏️ Customization Guide

### 📝 Step 1: Update Your Content

**All content is in `src/data/siteData.ts`** - no code changes needed!

Open the file and edit:

```typescript
// src/data/siteData.ts

export const siteData: SiteData = {
  personal: {
    name: "Your Name",           // ← Change this!
    title: "Your Title",          // ← And this!
    tagline: "Your tagline",      // ← Your catchy phrase
    resume: "/resume.pdf",        // ← Add your PDF to /public/
  },
  
  about: {
    description: [
      "First paragraph about you...",  // ← Write your story
      "Second paragraph...",
    ],
    interests: [
      "🧠 Your Interest",              // ← List your passions
      "🚀 Another Interest",
    ]
  },
  
  experience: [
    {
      title: "Job Title",              // ← Add your experiences
      company: "Company Name",
      // ... see file for full structure
    }
  ],
  
  projects: [
    {
      title: "Project Name",           // ← Showcase your work
      description: "Short description",
      technologies: ["Tech1", "Tech2"],
      github: "https://github.com/...",
      demo: "https://demo-link.com",
      featured: true,                  // ← Mark best projects
    }
  ],
  
  // ... education, skills, certifications, contact
}
```

### 🎨 Step 2: Customize Colors (Optional)

Edit `tailwind.config.js` to change the cosmic color palette:

```js
colors: {
  quantum: {
    cyan: '#00f5ff',      // ← Change accent colors
    violet: '#a855f7',
    orange: '#fb923c',
  }
}
```

### 🖼️ Step 3: Add Your Resume

Place your `resume.pdf` in the `/public/` folder. It will be downloadable via the "Download CV" button.

### 🌐 Step 4: Update SEO Meta Tags

Edit `index.html` to improve search engine visibility:

```html
<meta name="description" content="Your custom description" />
<meta property="og:title" content="Your Name - Title" />
<meta property="og:url" content="https://yourdomain.com" />
```

---

## 🏗️ Building for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

Build output goes to `/dist/` - ready to deploy!

---

## 🚢 Deployment

### Vercel (Recommended - One Click!)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite - just click Deploy!
5. Done! Your site is live 🎉

**Bonus:** Vercel provides:
- Automatic HTTPS
- CDN distribution
- Continuous deployment (auto-deploys on git push)
- Free custom domain support

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages

```bash
# Install gh-pages
npm install -g gh-pages

# Build
npm run build

# Deploy
gh-pages -d dist
```

Then enable GitHub Pages in your repo settings.

---

## 🎯 Adding New Projects

1. Open `src/data/siteData.ts`
2. Add to the `projects` array:

```typescript
projects: [
  // ... existing projects
  {
    id: "new-proj",                    // Unique ID
    title: "My New Project",
    description: "What it does",
    longDescription: "Detailed explanation on hover",
    technologies: ["React", "Python", "AI"],
    github: "https://github.com/...",
    demo: "https://...",
    featured: false,                   // true = larger card
    category: "ML/AI"                  // ML/AI | Web | Research | Tools
  }
]
```

3. Save - changes appear instantly in dev mode!

---

## 🎨 Adding New Sections

Want to add a Blog, Publications, or Awards section?

1. Create `src/sections/YourSection.tsx`:

```typescript
import { Section, SectionHeader } from '../components/Section'

export const YourSection = () => {
  return (
    <Section id="yoursection">
      <SectionHeader title="Your Section" />
      {/* Your content */}
    </Section>
  )
}
```

2. Import in `src/App.tsx`:

```typescript
import { YourSection } from './sections/YourSection'

function App() {
  return (
    // ...
    <YourSection />
    // ...
  )
}
```

3. Add to navigation in `src/data/siteData.ts`:

```typescript
export const navigationSections = [
  // ... existing
  { id: 'yoursection', label: 'Your Section' },
]
```

---

## 🐛 Troubleshooting

### Issue: Animations not working
**Solution:** Check if you have `prefers-reduced-motion` enabled in your OS settings. The site respects accessibility preferences.

### Issue: Theme not persisting
**Solution:** Check browser localStorage permissions. Theme preference is saved there.

### Issue: Build fails with TypeScript errors
**Solution:** Run `npm run lint` to see all errors. Fix type issues in the reported files.

### Issue: Styles not applying
**Solution:** 
1. Make sure Tailwind CSS is properly installed
2. Check that `globals.css` is imported in `main.tsx`
3. Run `npm run dev` again

---

## 🎓 Learning Resources

Want to understand how it works?

- **React:** [react.dev](https://react.dev)
- **TypeScript:** [typescriptlang.org](https://www.typescriptlang.org)
- **Framer Motion:** [framer.com/motion](https://www.framer.com/motion/)
- **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com)
- **Vite:** [vitejs.dev](https://vitejs.dev)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

Feel free to use this template for your own portfolio! If you found it helpful, consider:
- ⭐ Starring the repo
- 🐦 Sharing on social media
- 💬 Contributing improvements

---

## 🤝 Contributing

Found a bug? Want to add a feature? PRs welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 💌 Contact & Credits

**Built by:** Yellapragada Siddharth  
**Inspired by:** Maximum truth-seeking energy ⚡  
**Powered by:** Cosmic curiosity and unhealthy amounts of caffeine ☕

*Don't panic — signals received instantly 📡*

---

**Happy building! May your portfolio shine brighter than a supernova. 🌟**
