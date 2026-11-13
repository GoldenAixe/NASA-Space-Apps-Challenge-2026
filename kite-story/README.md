# KITE: A Little Robot with a Big Dream

## Open the adventure

1. Extract the entire ZIP.
2. Open **KITE-Final.html** in a WebGL-capable browser. It contains the entire application, Three.js and fonts in one file.
3. Choose **Start Adventure**. This first click also permits browser audio. Auto Play starts ON.

For editing, use **index.html**, **style.css**, **story.js**, **scene.js**, and **main.js**. Keep the `vendor` and `assets` folders beside them. There is no build step, framework, account, API key, or backend.

If your browser restricts local-file storage, open a terminal in this folder and run:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`. Use the same browser and address when continuing: file URLs and localhost use different saved-progress stores. On Windows, `py -m http.server 8000` may be the available command. On macOS/Linux, try `python3`.

## Controls

- **Auto Play ON:** the story advances only after narration and the line's minimum readable/action time finish.
- **Auto Play OFF:** a **Continue** button appears only when the current line is complete. Enter/Space also continues when focus is on the scene. It cannot skip unfinished narration.
- **Drag / one-finger swipe:** look around when the current scene permits it.
- **Scroll / two-finger pinch:** zoom within the current scene with Auto Play OFF. These never change the story position or chapter. Arrow keys provide keyboard camera controls.
- **Click a hardware model or its label / press E nearby:** open its facts. **Continue** closes the panel and resumes the current line.
- **Menu / Escape:** pause. The menu contains only **Continue** and **Exit**.
- **Exit:** asks for confirmation, saves progress, stops audio and returns to the introduction.
- **Voice / Volume / Subtitles:** narration and caption controls. If narration is disabled or unavailable, readable subtitles remain available.
- **Start Adventure:** starts a new story from Chapter 1. **Continue** on the intro restores saved progress.

Progress records the scene, line, whether that line finished, completed encounters, discoveries, completed scenes, and Auto Play. An interrupted line may restart from its beginning; completed lines are not narrated again. Private browsing or disabled LocalStorage can prevent persistence; the app reports this.

## Included story and assets

The supplied story is preserved in its exact six-chapter order across 22 scenes and 96 spoken sections. Dialogue attribution tags remain narrated. Long passages are split for readability without deleting words. Ten numbered entries appear as twelve separately identified historical machines: Apollo LM, LRV, ALSEP, Surveyor, Sojourner, Spirit, Opportunity, Viking 1, Viking 2, Phoenix, InSight and Ingenuity. Kite and the narrator have their own identities too.

- All geometry, terrain, planet textures, labels, repair parts, particles, sound effects and quiet musical notes are generated in code. No model, texture or sound file is missing.
- Three.js r128 and both fonts are bundled locally. Their licenses are included.
- The reference image guides the voxel art and navy/cyan/yellow interface. It is not used as a background image or a claim of pixel-identical rendering.
- There are no unrelated deep-space chapters, stations, missions, or invented Moon/Mars settlements.

## Voice capability — important limitation

Narration uses **browser Speech Synthesis**, not prerecorded voice acting. The implementation prefers natural/enhanced English voices, assigns unused voices to different characters where available, and uses individual voice/rate/pitch profiles. Kite has a cheerful, youthful delivery profile; it does not copy Russell's actor or exact performance.

**Human-like delivery and twelve different installed voices cannot be guaranteed across devices.** If the device offers too few voices, some characters share a base voice with different delivery profiles. If speech fails, timed subtitles carry the full story. Some system voices require internet access even though the graphics and code are local. This package contains no human-recorded or professionally directed character audio. Voice quality remains a requirement that needs listening checks on the intended presentation device.

## Historical accuracy and fiction

Kite, the dialogue and the repair-part exchanges are fictional. Real hardware is shown resting; cyan wireframe mechanism demonstrations are labeled story illustrations, not claims that the retired machines have resumed their missions. Ingenuity's resting model stays grounded and the flight illustration disappears when its damaged rotor blades are discussed. Models and scene spacing are stylized and not to scale; the real landing sites are far apart. Fictional compatible components are not an engineering claim about reusing historical spacecraft.

The educational panels preserve the supplied purpose, dates, components, resting place, status and contribution. These distinctions correct ambiguities in the supplied notes without changing the story:

- **Apollo LM:** the descent stages remain; the ascent stages departed. The surface model shows the descent stage.
- **Surveyor:** Surveyor 1 first landed June 2, 1966. Soil scoops belonged to Surveyors 3 and 7. The story's Surveyor character represents the family.
- **Phoenix:** November 2, 2008 is the last communication date. A mission-end announcement followed in November; NASA's later history also describes the final end of recovery efforts in 2010.
- **InSight:** December 15, 2022 is last contact; NASA announced the mission's retirement on December 21.
- **Ingenuity:** flight 72 occurred January 18, 2024; the flight mission's end was announced January 25. “Cannot fly” is more precise than claiming every onboard system stopped.

Primary references:

- https://science.nasa.gov/mission/apollo-11/
- https://science.nasa.gov/mission/apollo-15/
- https://history.nasa.gov/wp-content/uploads/static/history/alsj/HamishALSEP.html
- https://nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html
- https://science.nasa.gov/mission/mars-pathfinder/
- https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/
- https://science.nasa.gov/mission/viking-1/
- https://science.nasa.gov/mission/viking-2/
- https://www.nasa.gov/history/15-years-ago-phoenix-mars-lander-launches-to-the-red-planet/
- https://www.nasa.gov/missions/insight/nasa-retires-insight-mars-lander-mission-after-years-of-science/
- https://www.nasa.gov/news-release/after-three-years-on-mars-nasas-ingenuity-helicopter-mission-ends/
- https://science.nasa.gov/blog/farewell-to-our-flying-friend-and-closing-in-on-the-crater-rim/

## Source preservation and corrections

| Supplied system | Treatment |
|---|---|
| Three.js renderer, lighting, resize, pixel ratio | Retained; device-based quality and automatic reduction added |
| Voxel helpers, rover/rocket/lander factories | Retained and corrected; separate twins, six Sojourner wheels, descent-only LM, solar arrays and rotor model |
| Instanced terrain, sky, planets, clouds | Retained; only story-relevant scenery instantiated |
| Trail and particle pools | Retained; used for travel/launch/landing |
| Smooth camera math and local map | Retained and adapted to narrated scene framing |
| Hardware labels, raycasting, observation viewport | Retained; repaired panels and keyboard/touch access |
| Story progression | Replaced position-trigger logic because it interrupted speech, skipped narrative and completed encounters before dialogue finished |
| Speech and sound | Reworked for speaker-specific voices, cancellation tokens, completion gating, pause/resume and subtitle fallback |
| Progress persistence | Reworked with validated scene/line saves and completed-line restoration |
| Pause/settings/free-roam controls | Replaced with the specifically requested minimal interface; removed Skip, Replay, tabs and restart/free-roam menu actions |
| Cleanup | Scene geometry/materials disposed while protecting shared caches; a single animation loop is used |

## Validation performed and limits

See **VALIDATION.md**. All JavaScript syntax checks and the executable 14-case state/model suite passed. The entire 96-section sequence reached the ending, including a no-voice fallback run. Every source narrative/dialogue line was compared against the generated story text.

**A real browser preview could not be completed in the authoring environment.** Tests used real Three.js geometry and a Node VM with mocked DOM, WebGL renderer and speech events. These verify story/state/model construction, not actual GPU appearance, real audio quality, touch ergonomics, or compatibility across Chrome, Edge, Firefox, Safari and iOS. Responsive CSS and reduced-motion logic are implemented, but real-device acceptance testing remains necessary. No cross-browser or professional-voice certification is claimed.
