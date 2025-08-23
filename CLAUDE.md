# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based personal blog for Alexey Gulev (agulev.com) focused on game development, particularly the Defold engine. The site is deployed to GitHub Pages and contains Russian and English blog posts about game development.

## Development Commands

### Local Development
```bash
# Install dependencies
bundle install

# Run development server (serves at http://localhost:4000)
bundle exec jekyll serve

# Run development server with auto-reload and live refresh
bundle exec jekyll serve --watch --livereload --host=0.0.0.0 --port=4000

# Build the site for production
bundle exec jekyll build
```

### Deployment
The site automatically deploys to GitHub Pages via GitHub Actions when pushing to the `main` branch. The workflow is defined in `.github/workflows/pages.yml`.

## Architecture & Structure

### Core Jekyll Configuration
- **_config.yml**: Main Jekyll configuration with plugins, pagination, and site settings
- **Gemfile**: Ruby dependencies, uses `github-pages` gem for GitHub Pages compatibility
- **Permalink structure**: Uses `:title/` format for clean URLs

### Content Organization
- **_posts/**: Blog posts in Markdown format with YAML front matter
  - Date-based filenames (YYYY-MM-DD-title.md)
  - Both Russian and English posts supported
  - Post layout automatically applied via defaults
- **_layouts/**: HTML templates (default.html, main.html, post.html, autopage layouts)
- **_includes/**: Reusable components (head.html, pagination.html, post-content.html, giscus.html, etc.)

### Assets & Media
- **assets/css/**: SCSS stylesheets with parts/ subdirectory for modular styles
- **assets/fonts/**: Icon fonts (icomoon)
- **assets/js/**: JavaScript files including language switcher
- **wp-content/uploads/**: Media files migrated from WordPress, organized by year/month

### Special Features
- **Bilingual support**: Separate /en/ and /ru/ directories for language-specific content
  - Language switcher with browser detection (Russian speakers get RU by default, others get EN)
  - Language preference persists across all pages using localStorage
  - Archive and Tags pages include language filtering with adaptive layouts
- **html/ directory**: Static HTML demos and games (Defold HTML5 builds)
- **Pagination**: Uses jekyll-paginate plugin with 5 posts per page
- **Comments**: Giscus integration using GitHub Discussions for blog post comments

### Migration Context
This blog was migrated from WordPress to Jekyll, preserving:
- All media files in wp-content/uploads/ structure
- WordPress-style URL structure
- Post content converted from WordPress blocks to HTML/Markdown

## Dependencies & Plugins
- **github-pages**: GitHub Pages compatible Jekyll environment
- **jekyll-paginate**: Standard pagination (GitHub Pages compatible)
- **jekyll-feed**: RSS feed generation
- **jekyll-sitemap**: Sitemap generation
- **jekyll-seo-tag**: SEO meta tags
- **jemoji**: GitHub-style emoji support

## Content Guidelines
- Post files must follow Jekyll naming convention: `YYYY-MM-DD-title.md`
- YAML front matter should include title, layout (defaults to "post"), and any custom variables
- Media files should be placed in `wp-content/uploads/YYYY/MM/` to maintain consistency
- Language-specific content goes in appropriate subdirectories (/en/, /ru/)