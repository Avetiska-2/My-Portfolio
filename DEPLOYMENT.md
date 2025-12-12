# Deployment Guide

## Automatic Deployment (Recommended)

Your portfolio now has automatic deployment set up via GitHub Actions!

### How It Works

1. **When you push to main branch**: The GitHub Actions workflow automatically:
   - Installs dependencies
   - Builds your site
   - Deploys to GitHub Pages (gh-pages branch)

2. **The workflow file**: `.github/workflows/deploy.yml`

### To Deploy Your Current Changes

Since you mentioned changes aren't showing on the live site, here's what needs to happen:

1. **Merge this PR** to the main branch
2. The GitHub Actions workflow will automatically trigger
3. Your site will be deployed to: https://avetiska-2.github.io/My-Portfolio/

### Manual Deployment (Alternative)

If you prefer to deploy manually, you can still use:

```bash
npm run deploy
```

This will:
1. Build the production version (`npm run build`)
2. Push the `dist` folder to the `gh-pages` branch

**Note**: Manual deployment requires GitHub authentication.

## Verifying Deployment

After the workflow runs:

1. Go to your repository on GitHub
2. Click on "Actions" tab
3. Check the latest workflow run
4. Once complete (✓), visit your live site: https://avetiska-2.github.io/My-Portfolio/

## GitHub Pages Settings

Make sure GitHub Pages is configured to serve from the `gh-pages` branch:

1. Go to repository Settings
2. Navigate to Pages section (left sidebar)
3. Source should be set to: `gh-pages` branch, `/ (root)` folder
4. Your site URL: https://avetiska-2.github.io/My-Portfolio/

## Build Information

- **Build command**: `npm run build`
- **Build output**: `dist/` folder
- **Build tool**: Vite
- **Base URL**: `/My-Portfolio/` (configured in vite.config.ts)

## Troubleshooting

### Changes not showing on live site?

1. **Check if workflow ran**: Go to Actions tab and verify the latest run succeeded
2. **Clear browser cache**: Press Ctrl+F5 (or Cmd+Shift+R on Mac)
3. **Check GitHub Pages settings**: Ensure it's pointing to gh-pages branch
4. **Wait a few minutes**: GitHub Pages can take 1-5 minutes to update

### Build fails?

1. Check the workflow logs in the Actions tab
2. Verify all dependencies are in package.json
3. Test build locally: `npm run build`

### Need to trigger deployment manually?

1. Go to Actions tab
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select the main branch and click "Run workflow"

## Local Development

To test your site locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server runs at: http://localhost:8080
