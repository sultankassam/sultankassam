# Sultan Kassam / Engineering notebook

The reference profile's restraint informs the spacing, but this identity is original: oversized name typography, a quiet circuit emblem, linked full-width project modules, and public-data telemetry. No external fonts, badge services, scripts in images, or fragile statistics endpoints.

## Tokens

Dark: background #0D1117, surface #161B22, border #303D4E, text #F0F6FC, muted #A0AEBD, cyan #39D0FF, violet #A371F7. Light: background #F6F8FC, surface #FFFFFF, border #C9D5E4, text #101E30, muted #50647D, cyan #006C9E. Corners: 18px outer / 12px inner. Spacing: 32px modules / 40px hero. System fonts keep images self-contained. Embedded CSS adds restrained opacity pulses, a slow scan marker, and a terminal cursor. Each has a static fallback and a prefers-reduced-motion override. No JavaScript or external animation dependency is used.

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

Narrow screens at 600px and below receive dedicated 400px SVG layouts with vertically stacked matrix, architecture and metrics. Desktop assets retain the horizontal dashboard arrangement.

## Pass 2: personal systems lab

Preserves the existing public REST collection, deterministic daily generation, responsive picture selection and GitHub Action. The original asset paths remain stable. Rendering helpers in design.mjs now include the SK mark, technical labels, layered panels and shared motion rules. visuals.mjs groups the upgraded visual modules so the data collector remains independent of visual changes.

Hero: oversized name typography and a custom SK mark, with cyan instrument rings and sparse violet lighting. Tagline is an engineering approach, not a claim of shipped services: THINK IN SYSTEMS. BUILD IN CODE. Jarvis and AutoMod remain explicitly public prototypes. Voice/model/reply and booking/stock/assignment diagrams derive from their public source. Active production or desktop-control claims are absent.

Status: PUBLIC LAB and MODE / BUILD are static editorial identity labels. PROJECTS is the original public repository count. SYNC is the UTC calendar date of the successful data collection, deliberately at day resolution to avoid needless timestamp commits. It does not indicate service uptime or a continuous connection. API DATA describes a captured API result. Location is omitted because no public account location has been verified.

Numbered sequence: 00 identity, 01 public systems, 02 topology, 03 engineering, 04 signal, 05 connect. Native prose is minimal. Build pipeline and engineering OS express an approach; they do not assert deployment history, users or achievements. One Easter egg appears in the desktop topology: // inspect the source.

Mobile: 400px drawing canvases, stacked instrumentation, compact topology and a dedicated typographic hero. Essential identity and project text is sized up, rather than scaling the desktop diagrams. Test at viewport widths 320, 375, 390 and 430 in both themes. Small coordinate labels are secondary metadata, never the only source of a project claim. Every image has descriptive alt text.

Motion: pulses 2.4s, scan 10s and cursor 1.4s. Opacity never rapidly flashes and the cursor remains faintly visible. Page-level picture sources select generated still SVGs under prefers-reduced-motion: reduce. Embedded media queries are retained as a secondary fallback; Chromium testing showed they alone are insufficient for image documents. Decorative waveforms are drawn separately from the activity trace; only the trace encodes actual daily public event counts. Its empty baseline remains empty, without invented heartbeat peaks.

README markup can be rebuilt with npm run readme after asset generation. The existing Action regenerates assets and their still variants but keeps the curated README unchanged.

The activity feed covers public account events, including profile-repository updates. It shows the returned-event total and daily peak so the normalized line is interpretable. It is not a complete contribution history.
