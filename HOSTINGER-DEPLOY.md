# 🚀 Hostinger Deployment Guide

## Quick Deploy

### 1. Build for Hostinger
```bash
npm run build:hostinger
```

### 2. Upload Files
Upload **ALL contents** of the `hostinger/` folder to your Hostinger `public_html/`:

```
public_html/
├── index.html
├── favicon.svg
└── assets/
    ├── index-v2pH7DFj.js
    ├── index--cHOE_mI.css
    ├── ui-DtobhS87.js
    └── vendor-1XCZ5AD1.js
```

### 3. Done!
Your website is now live on Hostinger.

## File Sizes (Optimized)
- **HTML**: 2.85 kB
- **CSS**: 72.34 kB
- **JavaScript**: 297 kB total
- **Total**: ~370 kB (lightning fast!)

## What's Included
✅ **Optimized production build**
✅ **Code splitting** (vendor, UI, main chunks)
✅ **Minified CSS/JS**
✅ **SEO meta tags**
✅ **Calendly integration**
✅ **Google Analytics tracking**
✅ **Mobile optimized**

## Commands
- `npm run build:hostinger` - Build for Hostinger
- `npm run dev` - Development server
- `npm run preview` - Preview production build

---
**The `hostinger/` folder contains ONLY what you need for static hosting!**