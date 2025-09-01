# Repository Guidelines

## Project Structure & Module Organization
- `_posts/`: Markdown posts (`YYYY-MM-DD-title.md`) with `layout: post` and `locale` front matter.
- `en/` and `ru/`: language landing pages (`index.html`) using `jekyll-paginate-v2`.
- `_layouts/`, `_includes/`: Liquid templates and partials; `_config.yml`: site config; `.github/workflows/pages.yml`: CI build.
- `assets/`: CSS/SCSS, JS, images, fonts; `wp-content/uploads/`: migrated media; `html/`: static files explicitly included.

## Build, Test, and Development Commands
- `bundle install`: install Ruby/Jekyll dependencies.
- `bundle exec jekyll serve --livereload`: run locally at `http://localhost:4000`.
- `bundle exec jekyll build`: build to `_site/` (used by CI).
- Optional: `npm install` only if updating icon assets; there is no Node build step.

## Coding Style & Naming Conventions
- Use 2‑space indentation for Markdown, HTML, SCSS, and Liquid.
- Prefer relative links and stable permalinks.
- Post front matter should include: `title`, `date`, `locale` (`en`|`ru`), `tags`, `image`, `permalink`.
  Example:
  ```yaml
  ---
  layout: post
  title: My Post
  date: 2025-08-23
  locale: en
  tags: [defold]
  image: /wp-content/uploads/example.png
  permalink: /my-post/
  ---
  ```

## Testing Guidelines
- No unit tests. Validate changes with `bundle exec jekyll build` and check pages locally.
- Optional link check: `gem install html-proofer && htmlproofer _site`.

## Commit & Pull Request Guidelines
- Commits: short, imperative style (e.g., “fix language switcher”, “add giscus”).
- PRs: clear summary, linked issues, and before/after screenshots for UI changes. List affected pages/paths.
- Ensure local build passes before opening PR. Exclude generated/cache folders from diffs: `_site/`, `.jekyll-cache/`, `node_modules/`, `vendor/`.

## Security & Configuration Tips
- Keep `CNAME` for the custom domain. Do not edit `giscus` IDs unless migrating repos.
- Maintain `pagination.locale` and front matter `locale` consistency across `en/` and `ru/` pages.
