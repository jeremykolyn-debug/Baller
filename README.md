# Baller

Official website for **Baller**, a Rainbow Six Siege tournament organizer.

Plain HTML/CSS/JS: no build step. It's ready for GitHub Pages.

## Pages

| File | What it is |
| --- | --- |
| `index.html` | Home: hero, events, Hall of Champions, crew, partners |
| `event.html?id=<event-id>` | Event detail: grand final, placements, bracket, format, awards, broadcast crew |

## Adding or updating an event

Everything is driven by **`assets/js/data.js`**. To add a new event:

1. Copy an existing object inside `events: [ ... ]`.
2. Give it a new unique `id` (e.g. `invitational-s2`). This becomes `event.html?id=invitational-s2`.
3. Set `status` to `"upcoming"`, `"live"` or `"completed"`.
4. Fill in dates, prize, teams, format, etc. `placements`, `final` and `bracket` can be left out until the event is played.

Events are sorted newest-first by `start` date automatically. The home page stats, results ticker and Hall of Champions update from the same data.

Staff, partners, and the Discord/X links are in the same file.

## Publishing on GitHub Pages

1. Push to `main`.
2. In the repo go to **Settings → Pages**, choose **Deploy from a branch**, select `main` / `(root)`, and save.
3. The site will be live at `https://jeremykolyn-debug.github.io/Baller/`.

## Local preview

Open `index.html` through any static server, for example:

```bash
npx serve .
```
