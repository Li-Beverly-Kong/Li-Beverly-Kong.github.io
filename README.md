# Li Beverly Kong Academic Homepage

This site is now based on the mature open-source [Academic Pages](https://github.com/academicpages/academicpages.github.io) GitHub Pages template.

It keeps the original Academic Pages/Jekyll structure, but customizes the homepage into the desired two-step flow:

1. Initial homepage: sidebar identity plus a concise academic introduction.
2. First click: expands personal profile, external websites, academic statement, and selected work.
3. Second click: expands the detailed CV section.

## Important Files

- `_config.yml`: site title, URL, author sidebar, email, GitHub, Scholar, ORCID, and other global settings.
- `_data/navigation.yml`: top navigation.
- `_pages/about.md`: homepage and two-step interaction.
- `_pages/cv.md`: standalone CV page at `/cv/`.
- `_includes/head/custom.html`: custom CSS for the redesigned homepage sections.
- `work/static-backup/`: backup of the earlier pure HTML/CSS/JS version.
- `work/academicpages-sample-content/`: original Academic Pages sample posts, publications, talks, teaching, and portfolio content.

## Deployment

Push the full repository contents to your GitHub Pages repository:

```text
aurora-kl.github.io
```

Then in GitHub:

```text
Settings -> Pages -> Deploy from a branch -> main -> /root
```

GitHub Pages will build the Jekyll site automatically.

## Edit Your Information

Start with `_config.yml`:

- `title`
- `name`
- `description`
- `url`
- `repository`
- `author.name`
- `author.bio`
- `author.location`
- `author.employer`
- `author.email`
- `author.github`
- `author.googlescholar`
- `author.orcid`

Then edit `_pages/about.md`:

- homepage introduction
- profile section
- external links
- academic statement
- selected work
- interactive CV content

The standalone `/cv/` page lives in `_pages/cv.md`.

## Adding Real Academic Content Later

The mature Academic Pages template supports structured academic collections:

- `_publications/`
- `_talks/`
- `_teaching/`
- `_portfolio/`
- `_posts/`

The original sample content has been moved into `work/academicpages-sample-content/` so fake publications and talks do not appear on your live site. You can copy the structure from those examples when you are ready to add real content.

## Local Preview

If you have Ruby/Bundler ready:

```bash
bundle install
bundle exec jekyll serve
```

Then open:

```text
http://localhost:4000
```

In this Codex workspace, downloading Ruby gems was attempted but stalled, so local Jekyll build verification was not completed here. The site is structured for GitHub Pages' normal Jekyll build pipeline.
