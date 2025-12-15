# Build With Dream - Deployment Guide

## Contents
- **static/** - Optimized JavaScript, CSS, and image assets
- **public/** - Public assets (images, favicon, etc.)
- **BUILD_ID** - Build identifier for cache busting

## Deployment Options

### 1. **Vercel (Recommended for Next.js)**
```bash
npm install -g vercel
vercel --prod
```
Vercel handles everything automatically and provides free hosting with excellent Next.js optimization.

### 2. **Netlify**
Deploy the `.next/` folder alongside this build folder:
- Connect your Git repository
- Build command: `npm run build`
- Publish directory: `.next`

### 3. **Docker Deployment**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

### 4. **Static Hosting (AWS S3, Cloudflare Pages, GitHub Pages)**
For static-only sites, upload the contents of:
- `build-deploy/static/` → `/static/`
- `build-deploy/public/` → `/`

### 5. **Traditional Server (Node.js)**
```bash
npm install
npm run build
npm start
```
Server will run on port 3000 by default.

## Environment Variables (if needed)
Create a `.env.local` file:
```
NEXT_PUBLIC_API_URL=your_api_url
```

## Cache Busting
The BUILD_ID file ensures browser caches are invalidated on new deployments.

## Performance Notes
- All routes are pre-rendered as static content
- Static assets are optimized and minified
- Images are automatically optimized by Next.js
- No database or backend required (static site)

## Support
For questions about deploying Next.js, visit: https://nextjs.org/docs/deployment
