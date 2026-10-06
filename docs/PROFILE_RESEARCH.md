# Sultan profile — Pass 3 research

Inspected 2026-10-06. Public live profiles were opened in a real Chromium browser, captured as full-page screenshots, and compared with their rendered README and public source. Discovery included [awesome-github-profile-readme](https://github.com/abhisheknaiidu/awesome-github-profile-readme) and [creative-profile-readme](https://github.com/coderjojo/creative-profile-readme). Rankings measure suitability for Sultan's brief, not developer ability. Observations describe this inspection, not a permanent rating.

## Ranked shortlist

| Rank / profile | URL | Best idea | Weakness | Idea we could adapt |
|---|---|---|---|---|
| 1 / Avi Vashishta | https://github.com/AVIVASHISHTA29 | Command prompts unify portrait, calendar and identity into one experience | Portrait/table arrangement and small metadata need mobile care; extra badges dilute restraint | Commands as chapter labels, progressive reveal, green calendar; original SK geometry and copy |
| 2 / Wildan Syukri Niam | https://github.com/wildanniam | Strong portrait identity followed by concrete project purpose, role and state | Long scroll and portfolio dependency; not all content shares the hero's aesthetic | Project panels must state what the code does and its prototype boundary |
| 3 / Simon Willison | https://github.com/simonw | Generated recent releases, writing and TIL make the profile useful and alive | Dense columns and little visual spectacle | Public-source freshness, dated snapshots and clear provenance |
| 4 / Navdeep Kumar | https://github.com/navi3582 | Cohesive monochrome terminal portrait and green heatmap | Wide paired terminal images lose readability when scaled | Self-hosted calendar and dedicated mobile identity panel |
| 5 / Andrew Grant | https://github.com/Andrew6rant | Neofetch-style ASCII silhouette gives instant technical identity | Tiny terminal rows dominate and constrain mobile readability | Recognizable monogram beside short, large whoami rows |
| 6 / Simon Lecoq | https://github.com/lowlighter | Rich generated metrics expose several dimensions of real work | Very long, dense dashboard; many integrations increase maintenance | Own generator with a small set of meaningful public metrics |
| 7 / Arthur / Platane | https://github.com/Platane | Contribution snake gives a memorable interpretation of GitHub-native data | Contribution motion carries more identity than project presentation | A restrained activity reveal, keeping exact calendar cells and counts |
| 8 / Jonah Lawrence | https://github.com/DenverCoder1 | Open-source project cards make many projects navigable | Badges, sponsor content and repeated cards create visual competition | Prominent clickable project panels and consistent hierarchy |
| 9 / Jay Shyam Patel | https://github.com/novaprime-code | Terminal copy and blue brand accents create a consistent voice | Very long; skill bars imply precision; decorative dependencies | Compact technical identity, no skill percentages |
| 10 / 小弟调调 / jaywcjlove | https://github.com/jaywcjlove | Distinct app-icon library and useful current component content | Large icon inventory and mixed widgets distract from one narrative | Group tools by real implementation domain, not a badge wall |
| 11 / ryo-ma | https://github.com/ryo-ma | Familiar stats paired with clearly pinned public projects | Generic externally rendered cards; light widgets clash with dark profile | Keep information recognizable while designing our own telemetry |

## Evaluation across the requested dimensions

H/M/L are comparative design judgments. U means unverified; mobile and theme entries are layout/source assessments, not claims that every reference was tested at six widths. No load-time benchmark was conducted on references. External requests, image density and source structure inform performance/maintenance risk.

| Profile | Impact | Identity | Motion | Hierarchy | Originality | Projects | Calendar | Mobile | Dark/light | Maintenance | External dependency | Loading risk |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Avi | H | H | H | H | H | M | H | Wide table risk | Dark-led | M | Low for terminal core | Low core, extra widgets |
| Wildan | H | H | H | H | H | H | H | Responsive source variants | Source variants | H | Portfolio + trail | Moderate long page |
| Simonw | M | H | L | H | H | H | Native | Dense columns | Native text | H | Linked feeds | Low text |
| Navi | H | H | H | H | H | M | H | Wide table risk | Dark-led | H | Low core | Low SVG core |
| Andrew | H | H | M | M | H | Native pins | Native | Tiny rows | Dark-led | M | U | Small core image |
| Lowlighter | H | H | M | M | H | M | H | Dense | Mixed | M | Many plugins | High density |
| Platane | H | M | H | H | H | Native pins | H | Wide calendar | Theme assets | H | Action generated | Low core |
| DenverCoder1 | H | H | H | M | M | H | M | Dense card grids | Dark-led | M | Several widgets | High density |
| Novaprime | H | H | H | M | M | M | M | Dense terminal | Dark-led | M | Several widgets | Moderate/high |
| Jaywcjlove | H | H | M | M | H | H | Native | Dense icons | Mixed | M | Mixed images | Moderate/high |
| Ryo-ma | M | M | L | H | M | Native pins | Native | Wide cards | Mixed | H | Stats service | Moderate |

## Top three synthesis

What can Sultan's profile learn from all three without cloning any of them?

From Avi: use a command grammar to organize a living interface. From Wildan: make identity and project purpose unmistakable, with honest state labels. From Simon: generated information should be inspectable, recent and useful. Combine these into **SULTAN OS / SK-2026**: oversized authored typography, the existing SK monogram, charcoal/cyan instruments, genuine green contribution cells, two source-grounded system diagrams, a brief dated activity signal and an intentionally compact scroll. Keep original paths, palette infrastructure, responsive variants and the daily public-data workflow. Do not import anyone's artwork, portrait, copy or layout.

## Technical reference findings

- [navi3582/animated-github-profile](https://github.com/navi3582/animated-github-profile) fetches GitHub's public contribution HTML, generates SVG locally and uses SVG animation rather than scripts. Its portrait preprocessing removes background before ASCII conversion. The idea is reusable; its fixed paired table is not our layout.
- [wildanniam/GitHub-Profile-Console](https://github.com/wildanniam/GitHub-Profile-Console) separates desktop/mobile and dark/light output, keeps source portrait private, and uses structured identity data. A source portrait is required; no face should be invented.
- Public contribution HTML may include anonymized private totals if the account enables them. Fetch with `?include_private=false`; reject a fragment that advertises private contributions rather than silently labeling mixed counts public. Keep source URL and date window in the snapshot. Public calendars are not measures of engineering quality.
- GitHub README images can animate; page CSS, JavaScript and SVG-contained links are not a substitute for GitHub-supported Markdown links. Use separate image anchors and `<picture>` selections.
- Contribution art: 3×5 lettering can fit the full name in 51 columns and seven rows; 4×7 and 5×7 full-name variants exceed the width. Preview all three, choose the compact full name. Never execute historical or future art commits in this pass.

## Existing public project evidence

[Jarvis](https://github.com/sultankassam/jarvis): `src/components/Jarvis.tsx` uses browser speech synthesis; `src/app/api/ask`, `analyze`, `search`, `summarize` contain OpenAI routes. Next.js/React/TypeScript. Present voice/context → AI routes → response, not desktop control or a production agent.

[AutoMod](https://github.com/sultankassam/AutoMod): Django `core/models.py` and migrations contain customer bookings, booking items, stock/parts and mechanic assignments. Present booking → inventory → assignment, not an AI moderator.

Portrait inventory: no suitable source image in the cloned profile repository or supplied attachments. **Portrait source required.** Use the real SK mark as the identity anchor until supplied. No internet portrait scrape.

Reference video was described in the request but no video file was supplied in this chat; no claim of direct video inspection is made.

Post-research live discovery: [sultankassam/contribution-art](https://github.com/sultankassam/contribution-art) already contains explicitly labeled intentional calendar art and a separate daily workflow. Its existing history was read only. Engineering telemetry excludes it; account-calendar totals include it with a visible caveat.
