---
sidebar_position: 4
---

# Posting Handbook Updates

The [Handbook Updates](/updates) page is the changelog — a running feed of what changed and when. Any staff member with repo access can post an update in about two minutes. No coding needed.

## How to post an update

1. Click **Post a handbook update** in the footer (or go to the `blog` folder in the GitHub repo and click *Add file → Create new file*).
2. Name the file like this: `2026-10-08-timeout-policy-change.md`
   - Start with today's date (`YYYY-MM-DD`), then a short dash-separated title.
3. Paste the template below into the file, fill it in, and delete the parts you don't need.
4. Click **Commit changes** → **Commit directly to the main branch**.
5. The site rebuilds itself — your post appears on the Updates page within a few minutes.

## Template

Copy everything below into your new file:

```markdown
---
slug: short-unique-name
title: What changed in plain words
date: 2026-10-08
---

One or two sentences summarizing the change.

<!-- truncate -->

## Details

- What changed and why.
- Who it affects.
- Link to the updated handbook page if there is one.
```

### Template notes

- `slug` must be unique — it's the post's URL. Use dashes, no spaces.
- `date` should match the date in your filename.
- Everything above `<!-- truncate -->` shows as the preview on the Updates feed; everything below shows when someone opens the full post.
- Keep it short. If the full explanation lives on a handbook page, link to it instead of duplicating it.

## Editing an existing update

Open the post on the Updates page and click **Edit this page** at the bottom — same as any handbook page. Fix it, commit, done.
