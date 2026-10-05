# Pass 2 validation

Local validation before publication:

- Rendered all 80 generated SVGs, including dark/light, mobile and still variants.
- Parsed all SVG XML; browser text bounds fit inside each viewBox.
- Rendered GitHub Markdown API output at 320, 375, 390, 430 and 960px in both color schemes. Dedicated mobile and light sources were selected correctly; no horizontal overflow.
- GitHub's Markdown renderer preserved all 13 picture elements and their page-level reduced-motion sources.
- Hero pulse, Jarvis node, activity scan and terminal cursor changed pixels when loaded as external images. Still variants remained unchanged across captures.
- Inspected the SK monogram at 16, 32 and 64px.
- Repeated public-data generation produced identical asset hashes for unchanged inputs.
- Generator syntax, image paths, alt text, credential-pattern scanning, asset safety and workflow YAML checks passed.

The existing daily/manual Action, explicit contents permission, concurrency guard and no-op commit check are retained. The live profile and Action require post-push verification; their results are reported with the completed pass.

All SVGs are under 4KB each at this validation. Alternate themes and motion preferences do not add image requests: each picture loads one selected source.
