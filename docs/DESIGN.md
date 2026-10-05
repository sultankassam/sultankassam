# Sultan Kassam / Engineering notebook

The reference profile's restraint informs the spacing, but this identity is original: oversized name typography, a quiet circuit emblem, linked full-width project modules, and public-data telemetry. No external fonts, badge services, scripts in images, or fragile statistics endpoints.

## Tokens

Dark: background #0D1117, surface #161B22, border #30363D, text #F0F6FC, muted #A0ACBA, cyan #39D0FF, violet #A371F7. Light: background #F6F8FA, surface #FFFFFF, border #D0D7DE, text #182230, muted #536174, cyan #0969A6. Corners: 16px outer / 12px inner. Spacing: 32px modules / 40px hero. System fonts keep images self-contained. Static SVGs prioritize reliable GitHub rendering over animation.

## Evidence and copy boundaries

Audit sources: public GitHub user, repository, language, tree and event endpoints; jarvis package.json, src/components/Jarvis.tsx and API routes; AutoMod core/models.py and core/views.py. Reference: https://github.com/Seifudinsec.

Jarvis supports browser voice/chat interaction, local chat memory and OpenAI-backed file analysis. Its search route simulates results; its URL summarizer does not fetch page contents. Neither is promoted as reliable web retrieval. AutoMod models service bookings, parts inventory and mechanic assignment, with payment-integration code. Both are described as prototypes, without production claims. No employment, proficiency, location, deployment, uptime or contact details are inferred. Only the verified GitHub contact appears.

## Generated data

Run `npm run generate` using Node 22+. Dependencies: none. An optional GITHUB_TOKEN authenticates API requests; only public user endpoints are used and private records are excluded. Original project count excludes forks and the profile repository. Leading languages aggregate GitHub source-byte totals. Dates use API timestamps, not inferred shipping status. Activity uses at most 300 public events over a 28-day UTC chart, explicitly not a complete contribution or commit count. Empty feeds render a flat baseline.

Daily automation at 04:17 UTC (07:17 Africa/Nairobi) and manual dispatch update repository-hosted assets. No push trigger, so bot commits cannot loop. Pinned action revisions, a single contents-write permission, a timeout and concurrency guard keep the workflow bounded. API failures fail the run before the commit step; existing published assets remain available. No generated timestamp forces unnecessary commits. A chart rolls daily because its date window changes; otherwise identical inputs produce identical files.

## Maintenance

Project selection and descriptions are curated in scripts/update-profile.mjs. If a showcased project stops being public, generation fails without publishing a replacement. Review the README when scope changes. Contact links can be added once verified. Keep source evidence separate from claims of skill or operational reliability.

## Validation

`npm run check` checks asset paths, alt text, size, unsafe SVG content and credential patterns. Parse all SVGs as XML before publication. Validate workflow YAML and remote README links. Render both color schemes at desktop and mobile widths. Public-snapshot.json contains only selected public repository metadata, language totals and aggregate daily event counts.

Narrow screens at 600px and below receive dedicated 480px SVG layouts with vertically stacked matrix, architecture and metrics. Desktop assets retain the horizontal dashboard arrangement.
