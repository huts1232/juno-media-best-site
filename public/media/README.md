# Hero-media

De hero verwacht hier twee bestanden:

- `hero.mp4` — de achtergrondvideo (16:9, muted loop, ~8-15s, H.264)
- `hero-poster.jpg` — het eerste frame als poster (1920x1080)

Beide paden staan in `src/content/site.ts` onder `pages.home.hero.video`.
Zolang ze ontbreken valt de hero terug op de ingebouwde SVG-placeholder.
