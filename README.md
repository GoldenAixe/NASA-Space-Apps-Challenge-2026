# AstroQuest

AstroQuest is organized into separate HTML, CSS, JavaScript, image, icon, and audio files.
There is no build step and no JavaScript package installation.

## Start playing

1. Extract the entire ZIP archive first.
2. On Windows, double-click `START_GAME.bat` inside the project folder. It uses Python 3.
3. Keep its window open while playing. Click Start in the game to enable audio.

On macOS or Linux, open a terminal in the project folder and run `python3 start_game.py`.
On Windows, the game can also be launched using `py -3 start_game.py`.

Alternatively, serve the project folder using VS Code Live Server or another static web
server, or upload its contents to a static website host. `index.html` is the entry
point. A web server should be used instead of opening the HTML directly because the
separate voice and music files are loaded by the browser's audio system.

The launcher serves the game locally at `http://127.0.0.1:8000/`.
The same address should be used each time to retain access to this version's saved progress.

## Background music

The included `alex-morgan-ambient-541036.mp3` track is used without transcoding.
It loops at **50% playback gain** before the existing Volume control is applied.
During spoken dialogue, it drops to **25% gain** so the voices remain clear.
Playback starts after the Start/Continue click. Pause, hardware details, and Exit use
the existing shared audio pause behavior. The Volume slider also controls music;
setting it to zero mutes everything. The Voice button continues to control speech only.
The original synthesized background melody has been replaced by the included track.

To adjust the music level, edit `volume` and `dialogueVolume` in
`js/audio/music.js`.

## Where to edit

| File or folder | Contents |
| --- | --- |
| `index.html` | Page structure and script loading order |
| `css/styles.css` | All game styling |
| `js/data/story.js` | Chapters, dialogue, hardware definitions, routes |
| `js/data/almanac-data.js` | Existing NSSDCA facts, captions, image paths |
| `js/data/recordings.js` | Recorded voice files and unchanged clip timings |
| `js/scene.js` | Renderer, environment, equipment models |
| `js/state.js` | Shared game state and settings |
| `js/story-controller.js` | Story flow, controls, saves, hardware details |
| `js/animation.js` | Motion, camera, frame loop, demonstrations |
| `js/navigation.js` | Live distances, transitions, launching, landing |
| `js/audio/` | Speech, recorded clips, sound effects, background music |
| `js/kite-rig.js` | Arms, wrench, maintenance platform, outro |
| `js/collisions.js` | Object avoidance, boarding geometry, hand safety |
| `js/speaker-icons.js` | Active speaker's icon mapping |
| `js/almanac.js` | Almanac interactions |
| `js/main.js` | Startup and diagnostics |
| `js/vendor/three.js` | Bundled Three.js engine with original license notice |
| `assets/images/` | The 12 equipment images, including Phoenix and Opportunity pictures |
| `assets/icons/` | The 14 speaker icons as individual SVG files |
| `assets/audio/` | Original Kite/Narrator recordings and background music track |

Keep the folder structure and script order intact. The scripts share
the original game bindings and are intentionally loaded as classic deferred scripts.
Google Fonts uses the existing online stylesheet; the existing fallback
fonts apply offline. Other hardware voices still use the browser's speech voices.
The original save key is unchanged, but browser progress is specific to the
website origin. A different server address or port may have a separate save.
