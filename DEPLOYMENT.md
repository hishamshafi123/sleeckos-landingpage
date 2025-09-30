# Production Deployment Guide

## For Static Hosting (Hostinger, Netlify, Vercel)

### 1. Build the Application
```bash
npm install
npm run build
```

### 2. Upload Files to public_html
Upload **ONLY** the contents of `dist/public/` to your `public_html` folder:

```
public_html/
├── index.html
└── assets/
    ├── index--cHOE_mI.css
    ├── index-BrKNhNvL.js
    ├── ui-DtobhS87.js
    └── vendor-1XCZ5AD1.js
```

**DO NOT upload:**
- node_modules/
- dist/ (only the contents of dist/public/)
- src files
- .git/
- Any configuration files

### 3. Environment Variables
Create a `.env.production` file with your production settings:
```env
NODE_ENV=production
VITE_API_URL=https://yourdomain.com/api
DATABASE_URL=your-production-database-url
VITE_CALENDLY_URL=https://calendly.com/hishamshafiofficial/ai-insider-knowledge-for-businesses
VITE_GA_ID=G-15HLMKE2ML
```

## For Node.js Hosting

### 1. Upload Complete Project
Upload all files except:
- node_modules/
- dist/
- .git/

### 2. Install Dependencies
```bash
npm install --production
```

### 3. Build Application
```bash
npm run build
```

### 4. Start Application
```bash
npm start
```

## Performance Optimizations Applied

✅ **Removed development scripts** (Replit banner)
✅ **Optimized font loading** (reduced from 20+ fonts to 3 essential fonts)
✅ **Code splitting** (vendor, UI, and main chunks)
✅ **Minification and compression**
✅ **Production environment configuration**
✅ **SEO meta tags** added
✅ **Browser caching optimization**
✅ **TypeScript errors fixed**
✅ **Favicon added**
✅ **Security vulnerabilities checked**

## File Sizes (Gzipped)
- HTML: 1.19 kB
- CSS: 12.01 kB
- Vendor JS: 45.44 kB
- UI Components: 14.93 kB
- Main JS: 33.64 kB
- **Total: ~107 kB**

Your application is now production-ready and optimized for fast loading!