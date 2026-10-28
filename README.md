# colinleecs.github.io

A small Jekyll blog

## Writing a post

Create `_posts/YYYY-MM-DD-some-title.md`:

```markdown
---
layout: post
title: "My post title"
---

Text in **Markdown**.
```

- **Math:** use `$$...$$` for both inline math and display math. Put display math on its own lines, with a blank line before and after.
- **Code:** use fenced blocks with a language, e.g. ```` ```python ````.
- **Images:** put files in `assets/images/` and use `![alt text](/assets/images/file.png)`.
- If a code block contains `{{` or `{%`, wrap it in `{% raw %}` … `{% endraw %}`.

## Previewing locally

```sh
bundle exec jekyll serve      # http://localhost:4000
```
