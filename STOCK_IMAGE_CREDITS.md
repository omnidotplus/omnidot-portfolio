# Stock imagery — provenance

Every image under `public/assets/work/*-concept/` is licensed stock standing in
for a finished build. None of it is photography of Omnidot work.

All files were downloaded from **Unsplash** (<https://unsplash.com/license>),
which permits commercial use without attribution. Attribution is nonetheless
recorded here so that any image can be traced, re-licensed, or replaced without
guesswork later.

Source URL pattern: `https://images.unsplash.com/photo-<id>?w=1600&q=68&fm=jpg&fit=crop`
Downloaded: 2026-11-17.

| File | Unsplash photo id |
|---|---|
| `editorial-commerce-concept/cover.jpg` | `1441986300917-64674bd600d8` |
| `editorial-commerce-concept/product.jpg` | `1556740738-b6a63e27c4df` |
| `editorial-commerce-concept/mobile.jpg` | `1552664730-d307ca884978` |
| `editorial-commerce-concept/system.jpg` | `1526628953301-3e589a6a8b74` |
| `hospitality-booking-concept/cover.jpg` | `1572044162444-ad60f128bdea` |
| `hospitality-booking-concept/room.jpg` | `1555041469-a586c61ea9bc` |
| `hospitality-booking-concept/booking.jpg` | `1434626881859-194d67b2b86f` |
| `hospitality-booking-concept/mobile.jpg` | `1545235617-9465d2a55698` |
| `fintech-dashboard-concept/cover.jpg` | `1460925895917-afdab827c52f` |
| `fintech-dashboard-concept/dashboard.jpg` | `1551288049-bebda4e38f71` |
| `fintech-dashboard-concept/charts.jpg` | `1542744173-8e7e53415bb0` |
| `fintech-dashboard-concept/mobile.jpg` | `1556742049-0cfed4f6a45d` |
| `studio-portfolio-concept/cover.jpg` | `1484480974693-6ca0a78fb36b` |
| `studio-portfolio-concept/grid.jpg` | `1559136555-9303baea8ebd` |
| `studio-portfolio-concept/desk.jpg` | `1507003211169-0a1dd7228f2d` |
| `studio-portfolio-concept/space.jpg` | `1517292987719-0369a794ec0f` |
| `logistics-platform-concept/cover.jpg` | `1519389950473-47ba0277781c` |
| `logistics-platform-concept/console.jpg` | `1498050108023-c5249f4df085` |
| `logistics-platform-concept/workspace.jpg` | `1593642532842-98d0fd5ebc1a` |
| `logistics-platform-concept/ops.jpg` | `1504384308090-c894fdcc538d` |

## Replacing a concept with real work

When one of these becomes an actual client build:

1. Replace the images in that slug's folder with screenshots of the real site.
2. In `lib/content.ts`, delete `concept: true`, add the `Client` and `Year`
   credits, and rewrite `body` to describe the engagement rather than the
   approach.
3. Delete that slug's rows from the table above.

Until step 1 is done, the `concept: true` flag must stay — it is what renders
the "Studio concept" badge on the card and the disclaimer on the case study.
