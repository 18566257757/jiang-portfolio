# Design QA

## Scope

Milky Way background fidelity and layer order only. The existing WebGL Earth and page UI are intentional invariants.

## References

- Source design: `C:\Users\Mayn\.codex\generated_images\019efec0-faca-7590-b743-abdc31280ee8\exec-a229565f-46e7-4eca-a59c-552397001b74.png`
- Extracted background plate: `public/assets/milky-way-background.png`
- Latest mobile render: `C:\Users\Mayn\AppData\Local\Temp\jiang-galaxy-reference-layered.png`
- Scrolled layer check: `C:\Users\Mayn\AppData\Local\Temp\jiang-galaxy-layer-scroll.png`

## Fidelity Ledger

| Check | Source evidence | Render evidence | Result |
| --- | --- | --- | --- |
| Milky Way direction | Detailed band runs from upper-left toward lower-right | Same diagonal path is retained in the extracted plate and responsive crop | Passed |
| Milky Way texture | Granular gray-brown dust with bright knots and dark lanes | Source-derived raster plate preserves the detailed dust texture | Passed |
| Palette | Neutral black, smoky gray, muted brown, cool-white stars | No procedural teal or purple nebula remains | Passed |
| Star density | Dense around the galactic band, sparse in deep space | Plate preserves the source distribution; a restrained animated star layer adds motion | Passed |
| Layer order | Earth is the foreground subject in the source | Galaxy `z-index: 0`, particles `2`, WebGL Earth `3` at rest and while scrolling | Passed |
| Responsive crop | Source is 16:9 desktop | Mobile uses left-biased object positioning to retain the galactic core | Passed |
| Motion | Static source implies environmental motion | Slow image drift, scroll parallax, and independent star twinkle are active | Passed |

## Verification

- Production build completed successfully.
- Browser console errors: none.
- Consecutive browser frames differ, confirming active motion.
- The WebGL Earth remains above the Milky Way at the top and during scroll enlargement.

final result: passed
