# Validation record

Checked November 14, 2026 (Asia/Manila).

## Checks that passed

The executable suite uses the bundled real Three.js library and real geometry constructors, with mocked browser DOM, WebGL renderer and speech completion events. It is not a browser automation test.

1. All 22 scenes, six chapters and 12 hardware factories initialize.
2. Every included narrative/dialogue section matches the supplied wording and order.
3. Start initializes Scene 1 with Kite visible and individual voice assignments.
4. Time passing cannot advance a line while speech is unfinished.
5. Pause freezes narration progression, scene time and travel position.
6. Auto Play completes all 96 spoken sections, all 22 scenes and all 12 encounters.
7. Continue restores an ended adventure; Start begins a new adventure.
8. Save/restore resumes at the saved scene/line without re-speaking completed lines.
9. Hardware panels freeze the story and do not prematurely complete encounters.
10. Every hardware panel contains its full factual fields.
11. Scrolling changes camera zoom only in permitted manual scenes; it never changes chapter/dialogue.
12. Reduced-motion mode and every environment transition execute.
13. The entire no-voice subtitle path reaches the ending.
14. Corrupt/out-of-range saved data is rejected.

Additional checks:

- All **89 source narrative/dialogue lines** are covered. Only chapter and hardware-section headings are excluded from the spoken text; they are represented through chapter labels and character identities.
- No duplicate HTML IDs; all constant DOM references resolve; no Skip/Replay/free-roam/tab handlers remain in the UI; pause menu has exactly two buttons.
- JavaScript syntax checks pass for every authored source and the complete embedded single-file bundle.
- The standalone HTML embeds all executable code and four font files. No CDN or font server is needed for graphics/UI.
- CPU projection of the actual geometry was used to check the introductory camera layout. It is not a GPU/browser screenshot. Portrait introductory camera bounds were checked separately and adjusted so Kite sits above the intro card.

## Requirement implementation map

| Requirement | Included implementation | Verification scope |
|---|---|---|
| FR-01 Intro | Kite, rocket, title, source introduction, Start/Continue | Model/state and camera geometry checks; browser appearance unverified |
| FR-02 Six chapters | 22 scenes, 96 spoken sections | Complete sequence and exact source-text coverage |
| FR-03 Characters | Kite + 12 historical machine identities | Factories and separate IDs |
| FR-04 Natural narration | Browser natural/enhanced voice preference | Naturalness cannot be guaranteed or certified here |
| FR-05 Different voices | Per-character voice assignment and delivery settings | Mocked multi-voice assignment; limited installed voices may be reused |
| FR-06 Auto Play | Speech-end, reading-time and animation-time gating | Full simulated traversal; real voice timing unverified |
| FR-07 Subtitles | Current speaker and full line, readable timing, toggle | State checks; actual typography requires browser review |
| FR-08 Environments | Earth, brief malfunction in space, Moon, Mars | Real geometry construction and transitions |
| FR-09 Facts | All 10 entries / 12 machine panels | Data and panel construction checks; source links included |
| FR-10 Animations | Kite gestures, repairs, launch, landing, trails, labeled mechanism projections | Logic executes; real GPU presentation unverified |
| FR-11 Progress | Validated LocalStorage record | Save-state tests using a simulated storage service |
| FR-12 Continue | Intro resume, pause resume, line completion, panel return | State tests |
| FR-13 Menu | Continue and Exit only | Static markup and event logic |
| FR-14 Responsive | Desktop, narrow screen and short landscape media rules | CSS implementation; no real-device certification |
| FR-15 Controls | Pointer drag, pinch, controlled wheel, arrow keys, hardware raycast | Event/state logic; real touch ergonomics unverified |
| FR-16 Effects | Procedural alarms, beeps, engine, repair/collection tones, quiet melody | Implementation present; listening test outstanding |
| FR-17 Loading | Four-stage source loading meter, startup error UI | Markup/loader inspection; single-file version initializes immediately |
| FR-18 Accessibility | Keyboard controls, modal focus handling, captions, focus styles, reduced motion | Logic/static checks; screen-reader/device audit outstanding |

## Remaining acceptance work

The workspace did not permit completing a live browser preview. No claim is made that Chrome, Edge, Firefox, Safari, Android Chrome, or iOS Safari were tested. Browser Speech Synthesis varies substantially between those environments. Real-device listening and visual interaction checks remain outstanding; there are no prerecorded human character voices in this package.

To reproduce the state/model suite (not needed to run the adventure):

```sh
cd tests
npm install
npm test
```

The only test dependency is `@napi-rs/canvas`; it is not a runtime website dependency. See `results.json` for the recorded pass list.
