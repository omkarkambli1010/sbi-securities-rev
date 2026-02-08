# SBI Securities - Modern Animated Website

A cutting-edge, animated website built with the latest web technologies, featuring smooth GSAP animations, dark/light themes, and comprehensive SEO optimization.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** SCSS (with CSS Modules)
- **Animations:** GSAP 3.x + Lenis (smooth scroll)
- **UI Enhancements:** Framer Motion
- **SEO:** next-seo, next-sitemap
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React

## ✨ Features

- ⚡ **Blazing Fast** - Optimized for performance with Next.js 15
- 🎨 **Beautiful Animations** - GSAP-powered smooth animations and transitions
- 🌓 **Dark/Light Theme** - Seamless theme switching with CSS variables
- 📱 **Fully Responsive** - Mobile-first design approach
- ♿ **Accessible** - WCAG 2.1 compliant
- 🔍 **SEO Optimized** - Meta tags, structured data, and sitemap
- 🎯 **Type Safe** - Full TypeScript support
- 📦 **Component-Based** - Modular and reusable components

## 📁 Project Structure

```
sbi_securities_rev/
├── public/                  # Static assets
├── src/
│   ├── app/                # Next.js App Router pages
│   ├── components/         # React components
│   │   ├── ui/            # Base UI components
│   │   ├── animations/    # GSAP animation components
│   │   ├── sections/      # Page sections
│   │   └── layout/        # Layout components
│   ├── lib/               # Utility functions and GSAP helpers
│   ├── hooks/             # Custom React hooks
│   ├── styles/            # SCSS architecture
│   │   ├── abstracts/    # Variables, mixins, functions
│   │   ├── base/         # Reset, typography, global
│   │   ├── themes/       # Light/dark themes
│   │   ├── layout/       # Grid, container
│   │   └── utilities/    # Helper classes
│   ├── types/            # TypeScript type definitions
│   └── config/           # App configuration
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sbi_securities_rev
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 SCSS Architecture

The project follows a modular SCSS architecture:

- **Abstracts:** Variables, mixins, functions for reuse
- **Base:** Global styles, reset, typography
- **Themes:** Light and dark theme definitions
- **Layout:** Grid system and containers
- **Utilities:** Helper classes for spacing, animations, etc.

### Using SCSS Modules

Components use CSS Modules for scoped styling:

```tsx
import styles from './Button.module.scss';

export function Button() {
  return <button className={styles.button}>Click me</button>;
}
```

## 🎭 Theming

The website supports dark and light themes using CSS custom properties. Theme switching is handled via React Context and persisted in localStorage.

### Color Palette (SBI Securities)

**Light Theme:**
- Primary: `#0d6efd`
- Secondary: `#3b82f6`
- Background: `#ffffff`
- Foreground: `#212529`

**Dark Theme:**
- Primary: `#3b82f6`
- Secondary: `#60a5fa`
- Background: `#0a0a0a`
- Foreground: `#f8f9fa`

## 🎬 Animations

GSAP is used for all major animations:

- Scroll-triggered animations with ScrollTrigger
- Smooth scrolling with Lenis
- Text animations with SplitText
- Parallax effects
- Magnetic buttons
- Scroll progress indicators

## 📱 Responsive Design

Mobile-first approach with breakpoints:

- `xs`: 475px
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Reduced motion support (`prefers-reduced-motion`)
- Color contrast ratios (WCAG 2.1 AA)

## 🔍 SEO

- Optimized meta tags
- Open Graph tags
- Twitter Cards
- Structured data (JSON-LD)
- Sitemap generation
- robots.txt

## 📄 License

ISC

## 👥 Author

SBI Securities Team

---

Built with ❤️ using Next.js, GSAP, and SCSS
