# 🎨 Visual Component Guide

This guide shows you what each component looks like and where to find it.

## 🧭 Navigation Bar (Navbar.tsx)

```
┌─────────────────────────────────────────────────────────────┐
│  YS   [Home] [About] [Experience] [Projects] ... [☀️] [☰]  │ ← Glassmorphic
└─────────────────────────────────────────────────────────────┘
```

**Features:**
- Sticky at top (always visible)
- Active section glow indicator
- Theme toggle (☀️/🌙)
- Mobile hamburger menu (☰)

**Edit:** `src/components/Navbar.tsx`

---

## 🌠 Hero Section (Hero.tsx)

```
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║             ✨ Neural Grid Background ✨                  ║
║                                                           ║
║         Y E L L A P R A G A D A                          ║
║         S I D D H A R T H                                ║
║                                                           ║
║        AI/ML/DL Researcher & Developer                   ║
║   Training models by day, chasing cosmic truths...       ║
║                                                           ║
║     [Download CV ↓]  [View Projects →]                   ║
║                                                           ║
║            🐙 GitHub   💼 LinkedIn                        ║
║                                                           ║
║                    ↓ Scroll                               ║
╚═══════════════════════════════════════════════════════════╝
```

**Features:**
- Staggered name animation (letters appear one by one)
- Cosmic gradient background (breathing effect)
- Neural grid pattern (CSS-only)
- Magnetic CTA buttons
- Orbiting particles

**Edit:** `src/sections/Hero.tsx` + `src/data/siteData.ts` (lines 85-92)

---

## 👤 About Section (About.tsx)

```
┌─────────────────────────────────────────────────┐
│                 About Me                        │
│     Neural explorer on a mission...             │
│                                                 │
│  ┌─────────────────┐  ┌──────────────────────┐ │
│  │ I'm an AI/ML/DL │  │  What Excites Me ✨  │ │
│  │ researcher...   │  │                       │ │
│  │                 │  │  🧠 Neural Search    │ │
│  │ My work spans   │  │  🔬 Transformers     │ │
│  │ from theoretical│  │  🚀 MLOps            │ │
│  │ research to...  │  │  🌌 RL               │ │
│  └─────────────────┘  └──────────────────────┘ │
└─────────────────────────────────────────────────┘
```

**Features:**
- Bio paragraphs (left)
- Interest constellation (right)
- Glassmorphic card with glow

**Edit:** `src/data/siteData.ts` (lines 95-109)

---

## 💼 Experience Section (Experience.tsx)

```
┌─────────────────────────────────────────────────────┐
│                  Experience                         │
│    Milestones in the quest for AI...                │
│                                                     │
│  ┌──────────────────┐         •                    │
│  │ AI Research      │         │                    │
│  │ Intern           │         │ Timeline           │
│  │ Company Name     │         │ Wormhole           │
│  │ 2025 - Present   │         │                    │
│  │                  │         │                    │
│  │ • Developing...  │         •                    │
│  │ • Achieved 23%...│                               │
│  │                  │    ┌──────────────────┐      │
│  │ [PyTorch] [AI]   │    │ ML Engineering   │      │
│  └──────────────────┘    │ Intern           │      │
│                          │ Startup Name     │      │
│                          │ Jan - May 2025   │      │
│                          └──────────────────┘      │
└─────────────────────────────────────────────────────┘
```

**Features:**
- Vertical timeline with connector line
- Alternating left/right layout
- Tech stack pills
- Hover effects (lift + glow)

**Edit:** `src/data/siteData.ts` (lines 112-147)

---

## 🚀 Projects Section (Projects.tsx)

```
┌─────────────────────────────────────────────────────────┐
│                      Projects                           │
│         Building intelligence, one NN at a time...      │
│                                                         │
│    [All] [ML/AI] [Web] [Research] [Tools] ← Filters    │
│                                                         │
│  ┌─────────────────────────────┐  ┌──────────────┐    │
│  │ ⭐ Neural Style Transfer    │  │ Transformer  │    │
│  │    (Featured - Large Card)  │  │ From Scratch │    │
│  │                             │  │              │    │
│  │ Real-time artistic style... │  │ Educational  │    │
│  │                             │  │ implement... │    │
│  │ [PyTorch] [CUDA] [React]    │  │              │    │
│  │                             │  │ [PyTorch]    │    │
│  │ [🐙 Code] [🚀 Demo]         │  │ [NumPy]      │    │
│  └─────────────────────────────┘  └──────────────┘    │
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────┐  │
│  │ LLM Pipeline │  │ Object Det.  │  │ ML Monitor  │  │
│  └──────────────┘  └──────────────┘  └─────────────┘  │
└─────────────────────────────────────────────────────────┘
```

**Features:**
- Bento grid layout (masonry style)
- Category filters (ML/AI, Web, etc.)
- Featured projects = larger cards
- Hover tilt + glow effects
- Tech stack pills orbit slightly
- GitHub + Demo buttons

**Edit:** `src/data/siteData.ts` (lines 150-218)

---

## 🎯 Skills Section (Skills.tsx)

```
┌─────────────────────────────────────────────────────────┐
│              Skills & Technologies                      │
│     Tools I wield in the pursuit of AI...               │
│                                                         │
│  • Deep Learning Frameworks [Core]                      │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │ PyTorch  │ │TensorFlow│ │   JAX    │ │  Keras   │  │
│  │    ◉     │ │    ◉     │ │    ◉     │ │    ◉     │  │
│  │   95%    │ │   85%    │ │   70%    │ │   80%    │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
│                                                         │
│  • ML & AI                                              │
│  [Transformers] [CV] [NLP] [RL] [GANs]                 │
│      90%      85%   88%   75%   70%                     │
│                                                         │
│  • Languages                                            │
│  [Python 95%] [C++ 75%] [JavaScript 80%] [SQL 85%]     │
└─────────────────────────────────────────────────────────┘
```

**Features:**
- Categorized skill groups
- Animated progress rings (SVG circles)
- Featured categories get larger cards
- Hover scale effect

**Edit:** `src/data/siteData.ts` (lines 221-276)

---

## 🎓 Education Section (Education.tsx)

```
┌─────────────────────────────────────────────────────────┐
│                    Education                            │
│        Academic foundations of an AI explorer           │
│                                                         │
│  ┌──────────────────────┐    ┌──────────────────────┐  │
│  │  🎓                  │    │  🎓                  │  │
│  │                      │    │                      │  │
│  │  Bachelor of Eng.    │    │  Dual Degree         │  │
│  │  BITS Pilani         │    │  Toronto Metro U.    │  │
│  │  Hyderabad Campus    │    │  Toronto, Canada     │  │
│  │                      │    │                      │  │
│  │  📍 India            │    │  📍 Canada           │  │
│  │  📅 2022-2026        │    │  📅 2024-2026        │  │
│  │  🏆 GPA: 8.5/10      │    │                      │  │
│  │                      │    │  Research focus:     │  │
│  │  ▹ Focus: ML/DL/CV   │    │  Efficient Trans..   │  │
│  │  ▹ Coursework: NN... │    │  ▹ Collaboration..   │  │
│  └──────────────────────┘    └──────────────────────┘  │
│              ← Dual Degree Connection →                 │
└─────────────────────────────────────────────────────────┘
```

**Features:**
- Side-by-side cards (dual-degree)
- Graduation cap icons (animated)
- GPA display
- Highlights list
- Connecting line visual

**Edit:** `src/data/siteData.ts` (lines 279-307)

---

## 🏆 Certifications Section (Certifications.tsx)

```
┌─────────────────────────────────────────────────────────┐
│                 Certifications                          │
│        Validated skills across the AI/ML universe       │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐ │
│  │  🏆      │  │  🏆      │  │  🏆      │  │  🏆    │ │
│  │          │  │          │  │          │  │        │ │
│  │Deep Learn│  │TensorFlow│  │  MLOps   │  │  AWS   │ │
│  │Special.  │  │Developer │  │  Spec.   │  │  ML    │ │
│  │          │  │          │  │          │  │        │ │
│  │DeepLearn │  │  Google  │  │DeepLearn │  │  AWS   │ │
│  │.AI       │  │          │  │.AI       │  │        │ │
│  │          │  │          │  │          │  │        │ │
│  │📅 2024   │  │📅 2024   │  │📅 2024   │  │📅 2025 │ │
│  │          │  │          │  │          │  │        │ │
│  │[Verify🔗]│  │[Verify🔗]│  │          │  │        │ │
│  └──────────┘  └──────────┘  └──────────┘  └────────┘ │
│                                                         │
│         ✨ ✨ ✨ ✨ Starfield Effect ✨ ✨ ✨ ✨        │
└─────────────────────────────────────────────────────────┘
```

**Features:**
- Constellation/cloud layout
- Award badges (rotating on hover)
- Verify credential links
- Background star animation
- Hover zoom + glow

**Edit:** `src/data/siteData.ts` (lines 310-342)

---

## 📬 Contact Section (Contact.tsx)

```
┌─────────────────────────────────────────────────────────┐
│                   Get In Touch                          │
│      Don't panic — signals received instantly 📡        │
│                                                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │                                                  │  │
│  │  Whether you want to discuss AI research,       │  │
│  │  collaborate on a project, or just say hello... │  │
│  │                                                  │  │
│  │              📍 Toronto / Hyderabad              │  │
│  │                                                  │  │
│  │  ┌──────────┐  ┌──────────┐                     │  │
│  │  │  📧      │  │  🐙      │                     │  │
│  │  │  Email   │  │  GitHub  │                     │  │
│  │  └──────────┘  └──────────┘                     │  │
│  │                                                  │  │
│  │  ┌──────────┐  ┌──────────┐                     │  │
│  │  │  💼      │  │  🐦      │                     │  │
│  │  │ LinkedIn │  │Twitter/X │                     │  │
│  │  └──────────┘  └──────────┘                     │  │
│  │                                                  │  │
│  │         [📤 Send a Message] ← CTA Button        │  │
│  │                                                  │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

**Features:**
- Glassmorphic container
- Social link cards (Email, GitHub, LinkedIn, Twitter)
- Location display
- Primary CTA button (glowing)
- Background radial glow

**Edit:** `src/data/siteData.ts` (lines 345-352)

---

## 🦶 Footer (Footer.tsx)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│        🐙 GitHub   💼 LinkedIn   📧 Email   🐦 X       │
│               (Magnetic hover effects)                  │
│                                                         │
│     Built with ❤️ and an unhealthy amount of ☕        │
│         © 2026 Yellapragada Siddharth. All rights.     │
│              // Don't panic — signals received 📡       │
│                                                         │
│         Designed with maximum truth-seeking ⚡          │
└─────────────────────────────────────────────────────────┘
```

**Features:**
- Social media icon row (magnetic hover)
- Copyright notice
- Witty taglines
- Grok signature

**Edit:** `src/components/Footer.tsx` + `src/data/siteData.ts` (contact info)

---

## 🎨 Color Reference

### Dark Mode (Default)
```
Background:  ████ #000000 → #02040f (gradient)
Surface:     ████ #0a0e1a, #151922
Text:        ████ slate-100, slate-300
Cyan:        ████ #00f5ff (Electric)
Violet:      ████ #a855f7 (Neural)
Orange:      ████ #fb923c (Energy)
```

### Light Mode
```
Background:  ████ #ffffff
Surface:     ████ #f8fafc
Text:        ████ #0f172a
(Same accents: Cyan, Violet, Orange)
```

**Edit colors:** `tailwind.config.js` (lines 12-24)

---

## 📱 Responsive Breakpoints

```
📱 Mobile:    320px - 767px   (1 column)
📱 Tablet:    768px - 1023px  (2 columns)
💻 Desktop:   1024px - 1439px (3 columns)
🖥️ Large:     1440px+         (3-4 columns)
```

All sections automatically adapt to screen size!

---

## 🎭 Animation Cheatsheet

### Hover Effects
- **Cards:** Lift up (y: -8px) + subtle glow
- **Buttons:** Scale 1.05 + glow/shadow
- **Icons:** Rotate or scale 1.2
- **Pills:** Scale 1.1

### Scroll Animations
- **Fade in:** opacity 0 → 1
- **Slide up:** y: 20 → 0
- **Scale up:** scale 0.8 → 1
- **Stagger:** Delay each child by 0.1s

### Navbar
- **Active section:** Glowing indicator (layoutId magic)
- **Theme toggle:** Rotate 180° on click

---

## 🛠️ Quick Edits Cheatsheet

| What to Change | File | Lines |
|----------------|------|-------|
| Your name | `siteData.ts` | 86 |
| Your title | `siteData.ts` | 87 |
| Tagline | `siteData.ts` | 88 |
| Bio paragraphs | `siteData.ts` | 96-108 |
| Email/socials | `siteData.ts` | 346-352 |
| Add project | `siteData.ts` | 150-218 |
| Add experience | `siteData.ts` | 112-147 |
| Change colors | `tailwind.config.js` | 12-24 |
| SEO meta tags | `index.html` | 8-22 |
| Resume file | `public/resume.pdf` | (Replace file) |

---

## 🎯 Pro Tips for Customization

1. **Keep the structure** - Just change the content
2. **Use the data file** - 90% of edits happen in `siteData.ts`
3. **Test mobile first** - Most users are on phones
4. **One section at a time** - Don't overwhelm yourself
5. **Preview changes** - Dev server auto-reloads!

---

**Need more help?** See:
- `GETTING_STARTED.md` - Setup guide
- `README.md` - Full documentation
- `CHEATSHEET.md` - Quick reference

---

*Built with maximum cosmic energy 🌌*
