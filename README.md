# agulev.com

Personal blog of Alexey Gulev - GameDevLog focused on game development, particularly with the Defold engine.

## Setup

This is a Jekyll-based blog configured for GitHub Pages deployment.

### Local Development

1. Install Ruby and Bundler if you haven't already
2. Clone this repository
3. Install dependencies:
   ```bash
   bundle install
   ```
4. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```
5. Open your browser to `http://localhost:4000`

### GitHub Pages Deployment

This site is configured to deploy automatically to GitHub Pages when you push to the `main` branch.

To set up GitHub Pages for your repository:

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The site will automatically build and deploy using the workflow in `.github/workflows/pages.yml`

Your site will be available at `https://username.github.io/repository-name` or your custom domain if configured.

## Content

- Blog posts are in the `_posts/` directory
- Images and media are in the `wp-content/uploads/` directory (migrated from WordPress)
- Pages like About and Archive are in the root directory

## Structure

- `_config.yml` - Jekyll configuration
- `_layouts/` - Page templates
- `_posts/` - Blog posts
- `assets/css/` - Stylesheets
- `wp-content/uploads/` - Media files from WordPress export

## Migration Notes

This blog was migrated from WordPress to Jekyll. The migration included:

- Converting WordPress front matter to Jekyll format
- Converting WordPress blocks to standard HTML/Markdown
- Converting YouTube embeds to responsive iframe embeds
- Preserving all media files and links
