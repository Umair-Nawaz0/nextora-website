# Nextora — Modern AI Automation & Software Solutions

> **Intelligent Automation. Smarter Businesses.**

Nextora is a modern, responsive, high-performance single-page website for an AI technology business specializing in AI-powered business automation, workflow automation, and custom software solutions.

---

## 🚀 Key Highlights & Technologies

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Library**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Architecture**: 100% Frontend-Only, lightweight, fast loading, zero backend or database dependency.
- **Design Aesthetic**: Premium deep-space navy `#060911` with glowing cyan/indigo accents, smooth scrolling, responsive mobile menu, interactive tabs, process timeline, and custom SVG/CSS workflow diagrams (no generic stock photos).

---

## 📁 Project Structure

```text
nextora-website/
├── public/
│   ├── images/
│   └── icons/
├── src/
│   ├── app/
│   │   ├── fonts/
│   │   ├── globals.css        # Custom styles, glow borders, scrollbar
│   │   ├── layout.tsx         # Root layout, metadata & OpenGraph tags
│   │   ├── not-found.tsx      # Custom 404 page
│   │   └── page.tsx           # Single-page landing page
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky navigation with mobile drawer
│   │   ├── Hero.tsx           # Hero section with animated AI workflow node visual
│   │   ├── WhatWeDo.tsx       # Core services cards
│   │   ├── Solutions.tsx      # Interactive solution tabs & deep dives
│   │   ├── WhyNextora.tsx     # 4 Core business advantages
│   │   ├── Process.tsx        # 4-Stage implementation timeline
│   │   ├── Industries.tsx     # 5 Sector-specific automation applications
│   │   ├── Contact.tsx        # Inquiries form, mailto trigger, WhatsApp & copy actions
│   │   └── Footer.tsx         # Brand footer with legal & quick links
│   └── lib/
│       └── constants.ts       # Central configuration file for all content & contacts
├── .env.example
├── .gitignore
├── next.config.mjs
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## ⚙️ Centralized Configuration

All site text, contact placeholders, service items, solution capabilities, and navigation links are located in one single file:

```text
src/lib/constants.ts
```

When you are ready to update the real business email, WhatsApp number, or social links, simply edit `SITE_CONFIG.contact` in this file:

```typescript
export const SITE_CONFIG = {
  name: "Nextora",
  contact: {
    email: "contact@nextoratech.com", // update with your real business email
    whatsappNumber: "+15550192834",    // update with your WhatsApp international number
    whatsappDisplay: "+1 (555) 019-2834",
    ...
  }
};
```

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🌐 Deployment on Vercel

### Option 1: Automatic Deployment via GitHub (Recommended)
1. Push this repository to your GitHub account (already prepared).
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** &rarr; **"Project"**.
4. Import the `nextora-website` repository.
5. Keep the default settings (Framework preset: `Next.js`).
6. Click **Deploy**. Vercel will build and assign you a live `.vercel.app` URL.

### Option 2: Deploy via Vercel CLI
```bash
npx vercel
# Follow prompts to link project and deploy
npx vercel --prod
```

---

## 🔗 Custom Domain Setup

Once you purchase your custom domain (e.g., `yourdomain.com`):

1. **Add Domain in Vercel**:
   - In your Vercel Project Dashboard, navigate to **Settings** &rarr; **Domains**.
   - Enter your domain (e.g. `yourdomain.com`).
   - Add both `yourdomain.com` and `www.yourdomain.com` (Vercel will offer to automatically redirect one to the other).

2. **Configure DNS Records at your Domain Registrar** (GoDaddy, Namecheap, Cloudflare, etc.):
   - **Apex Domain (`@`)**:
     - Type: `A`
     - Name / Host: `@`
     - Value / Points to: `76.76.21.21`
   - **Subdomain (`www`)**:
     - Type: `CNAME`
     - Name / Host: `www`
     - Value / Points to: `cname.vercel-dns.com`

3. **SSL Certificate**:
   - Vercel automatically generates and provisions a free SSL certificate via Let's Encrypt once DNS records are verified.

---

## 📄 License & Attribution

&copy; 2026 Nextora. All rights reserved. Built with modern web standards.
