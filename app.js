/* =========================================================================
   MISSION ECHOES (ASTROQUEST) — COMPLETE DATA & INTERACTIVE STORY ENGINE
   ========================================================================= */

const CAPTAIN_NOVA_OPENING =
  "Welcome to MISSION ECHOES, Junior Archivist! I'm Captain Nova. Since the 1960s, humanity has left behind extraordinary machines across the Moon, Mars, and Deep Space. Every machine has a story, and every mission leaves a legacy. Open the Solar System Map to unlock their first-person Echo Logs and verified NASA archives!";

const CHAPTERS_META = [
  {
    id: 1,
    roman: "CHAPTER I",
    title: "The Moon — The First Footprints",
    theme: "The machines that prepared the way for human exploration of the Moon—and the passive instruments left behind that still operate without a battery today.",
    transitionOut: "On the Moon, radio signals take only 1.28 seconds from Earth. Next, we journey to Mars—where signals take up to 20 minutes, requiring machines with wheels, rotors, and brains of their own!"
  },
  {
    id: 2,
    roman: "CHAPTER II",
    title: "Mars — The Silent Explorers",
    theme: "The robotic trailblazers that drove across another planet, discovered ancient water environments, and achieved the first powered flight in alien skies.",
    transitionOut: "Every machine on the Moon and Mars relied on bright sunlight. Now, travel past the asteroid belt into Deep Space—where the Sun shrinks to a cold point of light and nuclear-powered explorers journey toward the stars."
  },
  {
    id: 3,
    roman: "CHAPTER III",
    title: "Deep Space — Beyond the Horizon",
    theme: "The spacecraft whose journeys extended far beyond their original missions—one still hurtling through interstellar space, and another that sacrificed itself to protect alien oceans.",
    transitionOut: "All seven artifact logs are restored! You have unlocked the Final Mission: The Legacy of Space Exploration."
  }
];

/* 7 Featured Artifacts with all 8 Mandatory Story Acts (A-H), Hardware Hotspots, Quiz & Myth Check */
const ARTIFACTS_DATA = [
  {
    id: 1,
    chapterId: 1,
    name: "Surveyor 3",
    subtitle: "The Robot That Was Visited by Humans",
    era: "April 20, 1967 • Oceanus Procellarum, The Moon",
    agency: "NASA / JPL / Hughes Aircraft",
    statusShort: "Inactive on Moon (Camera in Smithsonian)",
    signalPing: "STATIC ARCHIVE CARRIER • 2.99°S, 23.34°W",
    badgeIcon: "🦾",
    badgeTitle: "Lunar Trench Pioneer",
    echoLog:
      "Imagine sitting alone in a silent, airless gray crater for two and a half years. My solar panel had gone cold. My batteries were frozen solid. And then, on a bright lunar morning in November 1969, I felt the ground tremble—not from a meteorite, but from rocket exhaust. Out of the glare walked two humans in white spacesuits. They walked right down into my crater, patted my frame, took my picture, and unbolted my camera so I could go back home to Earth.",
    novaIntro:
      "Locking onto Oceanus Procellarum, 1967! Meet Surveyor 3—the three-legged robotic scout that bounced twice into a lunar crater, dug trenches to prove the Moon wouldn't swallow Apollo astronauts, and became the only spacecraft ever visited by humans on another world!",
    hotspots: [
      {
        part: "Pantograph Soil Scoop",
        what: "A motorized scissor-like mechanical arm extending 1.5 meters with a sharpened scoop door.",
        why: "Built to dig trenches up to 18 cm deep and crush soil clods in front of the camera so engineers could measure the bearing strength of lunar dust."
      },
      {
        part: "Tilting-Mirror TV Camera",
        what: "A vertically mounted television camera aimed upward into a rotating, tilting beryllium mirror.",
        why: "Allowed the lander to scan a full 360-degree panorama without moving the heavy camera body—later snipped off by Apollo 12 astronauts and returned to Earth!"
      },
      {
        part: "Crushable Honeycomb Footpads",
        what: "Three landing leg pads made of crushable aluminum honeycomb blocks.",
        why: "Absorbed landing impact energy while leaving calibrated footprints in the dust to measure surface firmness."
      }
    ],
    sections: [
      {
        code: "A",
        title: "Opening Scene",
        content: "In April 1967, perched at an angle inside a shallow 200-meter crater on the Moon's vast volcanic plain Oceanus Procellarum (the Ocean of Storms), NASA's Surveyor 3 robotic lander became a cornerstone of the Space Age—and the only robotic spacecraft ever visited on another world by human astronauts."
      },
      {
        code: "B",
        title: "The Beginning",
        content: "Before NASA could commit astronauts to landing on the Moon, scientists faced an urgent question: Would millions of years of meteoroid impacts turn the Moon's surface into a deep trap of powdery dust (regolith) that might swallow a heavy crewed lander like quicksand? Launched on April 17, 1967, atop an Atlas-Centaur rocket, Surveyor 3 arrived on April 20, 1967. During touchdown, bright rocks inside its crater confused its landing radar, keeping its vernier steering engines firing. Surveyor 3 bounced twice—rising 10 meters on the first bounce and 3 meters on the second—before engineers on Earth sent a manual engine cutoff command."
      },
      {
        code: "C",
        title: "Inside the Machine",
        content: "Standing 3 meters tall with a landed mass of 296 kilograms, Surveyor 3 was a tripod-shaped aluminum frame packed with rugged survival hardware. Click each component below to inspect how its engineering worked on the Moon."
      },
      {
        code: "D",
        title: "The Mission",
        content: "Across two Earth weeks of blistering lunar daylight (April 20 to May 3, 1967), Surveyor 3 beamed back 6,315 television pictures. Operating for over 18 hours, its mechanical surface sampler dug four trenches, performed bearing-strength impact tests, and dumped lunar soil onto its footpad for close-up inspection. It even captured a solar eclipse caused by Earth passing directly in front of the Sun, revealing Earth's glowing twilight atmosphere from lunar soil."
      },
      {
        code: "E",
        title: "The Discoveries",
        content: "Surveyor 3 proved that lunar regolith behaves much like damp beach sand: powdery in the top few millimeters, but firm and compact underneath—capable of supporting the 15-ton Apollo Lunar Module and walking astronauts. Its precise location also gave NASA the bullseye target needed to prove pinpoint crewed landing navigation."
      },
      {
        code: "F",
        title: "The Final Chapter",
        content: "On May 3, 1967, sunset plunged Surveyor 3 into the minus-150-degree-Celsius lunar night, permanently freezing its batteries. Classification: A machine that stopped functioning on a planetary surface and later had selected components returned to Earth. Thirty-one months later, on November 20, 1969, Apollo 12 astronauts Pete Conrad and Alan Bean landed their Lunar Module Intrepid just 163 meters away, walked down into Surveyor Crater, photographed the tanned spacecraft, and used cable cutters to bring its TV camera and scoop home to Earth."
      },
      {
        code: "G",
        title: "Where It Is Now",
        content: "Surveyor 3's three-legged frame, solar panel, and thermal boxes remain sitting silently inside Surveyor Crater in Oceanus Procellarum (2.99°S, 23.34°W), right beside the discarded descent stage of Apollo 12's Lunar Module Intrepid. Meanwhile, Surveyor 3's retrieved television camera is on permanent public display at the Smithsonian National Air and Space Museum in Washington, D.C."
      },
      {
        code: "H",
        title: "Its Legacy",
        content: "Surveyor 3 bridged robotic scouting and human exploration. Studying its returned camera and aluminum tubes taught engineers how 31 months of solar radiation, thermal cycling, and micrometeorites affect spacecraft—data now guiding NASA's Artemis lunar surface habitats. Primary Source: NASA NSSDCA ID 1967-035A; NASA SP-284 (1972)."
      }
    ],
    quiz: {
      question: "Why did Apollo 12 astronauts Pete Conrad and Alan Bean walk over to Surveyor 3 in November 1969 and cut off its television camera?",
      options: [
        "To repair Surveyor 3's solar panel so it could keep broadcasting",
        "To study how 31 months of harsh lunar exposure affected real spacecraft hardware",
        "Because Apollo 12 forgot to bring its own surface camera from Earth"
      ],
      correctIndex: 1,
      explanation: "Correct! Returning Surveyor 3's camera, scoop, and cabling after 31 months on the Moon gave engineers direct physical proof of how vacuum, radiation, and extreme temperature swings affect hardware."
    },
    mythCheck: {
      claim: "Surveyor 3 landed smoothly on the first try using fully automated AI.",
      isTrue: false,
      truthExplanation: "FALSE! Glare from lunar rocks confused its landing radar, causing Surveyor 3's engines to stay on and bounce the spacecraft twice before engineers on Earth sent a manual cutoff command."
    }
  },
  {
    id: 2,
    chapterId: 1,
    name: "Apollo Lunar Laser Retroreflector",
    subtitle: "The Machine That Never Needed a Battery",
    era: "July 21, 1969 – Present • Mare Tranquillitatis, Fra Mauro & Hadley Rille",
    agency: "NASA (Apollo 11, 14, 15)",
    statusShort: "Passive Optical Instrument — Active Today",
    signalPing: "2.5s GREEN LASER PHOTON RETURN • ONLINE",
    badgeIcon: "💎",
    badgeTitle: "Photon Mirror Guardian",
    echoLog:
      "Every other experiment my astronauts brought to the Moon had a countdown clock. When their batteries drained or their nuclear heaters cooled, they fell silent. Not me. I don't have a computer, a radio, or a single wire. I am a briefcase-sized grid of ultra-pure quartz mirrors sitting in the Sea of Tranquility. Whenever astronomers on Earth fire a pulse of laser light at me, I catch the photons and bounce them straight back to the telescope they came from—for more than half a century and counting.",
    novaIntro:
      "Here is a scientific marvel in the Sea of Tranquility! The Apollo Lunar Laser Retroreflector isn't a powered spacecraft—it's a passive array of fused-silica corner-cube prisms placed by Apollo 11, 14, and 15 astronauts. Zero batteries, zero wires, and still working every clear night in 2026!",
    hotspots: [
      {
        part: "100 Corner-Cube Quartz Prisms",
        what: "Recessed 3.8-cm three-sided corner-cube prisms ground from ultra-pure fused silica glass (300 prisms on Apollo 15's larger panel).",
        why: "Unlike a flat mirror that bounces light away at an angle, a corner cube reflects light off three perpendicular faces straight back toward the exact telescope on Earth that fired it."
      },
      {
        part: "Recessed Thermal Sockets",
        what: "Machined aluminum cavities that shade each glass prism from direct sunlight.",
        why: "Lunar temperatures swing by nearly 300°C between day and night; keeping the prisms thermally uniform prevents glass warping that would scatter the returning laser beam."
      },
      {
        part: "Bubble Level & Sun-Compass Aiming Mount",
        what: "A mechanical levelingขา stand adjusted by hand by Moon-walking astronauts.",
        why: "Allowed Neil Armstrong, Buzz Aldrin, and later crews to tilt the panel directly toward Earth with zero electrical motors."
      }
    ],
    sections: [
      {
        code: "A",
        title: "Opening Scene",
        content: "Placed onto the dusty plains of Mare Tranquillitatis on July 21, 1969, by Apollo 11 astronauts (and joined by sister arrays on Apollo 14 and Apollo 15 in 1971), the Lunar Laser Ranging Retroreflector (LRRR) is the longest-running scientific experiment on the Moon."
      },
      {
        code: "B",
        title: "The Beginning",
        content: "Physicists wanted to measure the exact distance between Earth and the Moon to millimeter precision to test Einstein's theory of gravity and understand the Moon's interior. Active radio transponders would eventually run out of battery or nuclear power. Engineers solved this by designing a completely passive optical target that astronauts could deploy and aim toward Earth in minutes."
      },
      {
        code: "C",
        title: "Inside the Machine",
        content: "In space hardware archiving, it is essential to distinguish a passive scientific instrument from an active spacecraft. The Retroreflector has no power supply, no transmitter, and no moving parts. Inspect its optical hardware below."
      },
      {
        code: "D",
        title: "The Mission",
        content: "Observatories on Earth (such as Apache Point in New Mexico and Côte d'Azur in France) fire powerful laser pulses through telescopes toward the Apollo sites. Over the 384,400-kilometer trip, Earth's atmosphere spreads the beam to about 6.5 kilometers wide. Roughly 2.5 seconds later, the telescope on Earth detects a single returning photon out of 10^17 photons sent—calculating the Earth–Moon distance from the speed of light!"
      },
      {
        code: "E",
        title: "The Discoveries",
        content: "Five decades of laser ranging proved that the Moon is spiraling away from Earth at 3.8 centimeters (1.5 inches) per year due to ocean tidal friction. Tiny rotational wobbles also revealed that the Moon has a fluid outer core and confirmed Einstein's Strong Equivalence Principle—that gravity pulls equally on bodies of different composition—to extreme precision."
      },
      {
        code: "F",
        title: "The Final Chapter",
        content: "While NASA switched off the radio-powered Apollo Lunar Surface Experiments Package (ALSEP) stations on September 30, 1977, the Lunar Laser Retroreflectors have no final chapter. Classification: A passive scientific instrument remaining on a planetary surface and actively used for science today."
      },
      {
        code: "G",
        title: "Where It Is Now",
        content: "All three Apollo retroreflector arrays sit intact on the Moon at Mare Tranquillitatis (Apollo 11), Fra Mauro (Apollo 14), and Hadley Rille (Apollo 15), alongside two French-built reflectors carried on Soviet Lunokhod rovers. Even with a thin dusting of lunar fines, observatories range them weekly."
      },
      {
        code: "H",
        title: "Its Legacy",
        content: "The Apollo Retroreflectors proved that elegant optical geometry can outlast any electronic computer. Today, NASA mounts miniature dome-shaped Laser Retroreflector Arrays (LRAs) on modern commercial and international lunar landers so lunar orbiters can pinpoint their exact positions. Primary Source: NASA NSSDCA 1969-059C-04."
      }
    ],
    quiz: {
      question: "How is the Apollo Lunar Laser Retroreflector able to continue providing scientific data more than 55 years after deployment?",
      options: [
        "It uses a miniature plutonium-238 nuclear battery that lasts 100 years",
        "It is a passive array of corner-cube quartz prisms that reflects laser pulses from Earth without needing any electricity",
        "Astronauts replaced its solar panels during the Space Shuttle era"
      ],
      correctIndex: 1,
      explanation: "Spot on! Corner-cube prisms rely purely on optical geometry—reflecting incoming laser photons straight back toward their source on Earth with zero power supply required."
    },
    mythCheck: {
      claim: "The Apollo Lunar Laser Retroreflector still works today because it uses a tiny nuclear battery.",
      isTrue: false,
      truthExplanation: "FALSE! It is a passive scientific instrument—not a powered spacecraft—and uses zero electricity, batteries, or wires."
    }
  },
  {
    id: 3,
    chapterId: 2,
    name: "Sojourner",
    subtitle: "The Little Rover That Opened Mars",
    era: "July 4, 1997 – September 27, 1997 • Ares Vallis, Mars",
    agency: "NASA / JPL-Caltech",
    statusShort: "Inactive Surface Rover in Ares Vallis",
    signalPing: "UHF RELAY SILENT SINCE SOL 83 • 19.13°N, 33.22°W",
    badgeIcon: "🛞",
    badgeTitle: "Six-Wheel Trailblazer",
    echoLog:
      "Before July 1997, every robot that survived a landing on Mars was bolted to one spot for life. They could look at a rock five meters away and wish they could reach it, but their feet were welded to the ground. Then my lander unfolded its petals like a metal flower, rolled out two ramps, and let my six cleated aluminum wheels touch the rusty red dirt of Ares Vallis. I wasn't much bigger than a microwave oven—but for the first time in history, humanity had wheels on Mars.",
    novaIntro:
      "Welcome to Mars, 1997! Touching down inside a cocoon of 24 giant bouncing airbags, the Mars Pathfinder lander unfolded its petals to release Sojourner—an 11.5-kilogram, six-wheeled pioneer that proved robots could drive across another planet!",
    hotspots: [
      {
        part: "Rocker-Bogie 6-Wheel Suspension",
        what: "A springless articulated linkage connecting threecleated aluminum wheels on each side.",
        why: "Kept all six wheels pressed evenly against jagged Martian rocks so the rover could climb obstacles taller than a wheel without tipping over—now the blueprint for every NASA Mars rover."
      },
      {
        part: "APXS Chemical Rock Sensor",
        what: "The Alpha Particle X-Ray Spectrometer mounted on an extendable nose bracket (built with Germany's Max Planck Institute and the University of Chicago).",
        why: "Pressed against Martian rocks like 'Barnacle Bill' and 'Yogi' to identify the exact chemical elements inside Martian stone."
      },
      {
        part: "5-Stripe Laser Hazard Detector",
        what: "Five red laser projectors paired with stereo front cameras and a 2-MHz Intel 80C85 CPU.",
        why: "Because radio signals took over 10 minutes to travel from Earth, Sojourner watched how laser stripes bent over boulders to steer around hazards by itself."
      },
      {
        part: "Silica Aerogel Insulation",
        what: "Ultra-lightweight 'frozen smoke' insulation (99.8% air by volume) lining the warm electronics box.",
        why: "Trapped daytime heat so the rover's computer and batteries survived minus-100°C Martian nights without heavy heaters."
      }
    ],
    sections: [
      {
        code: "A",
        title: "Opening Scene",
        content: "On July 5, 1997 (Sol 2 of the Mars Pathfinder mission), a six-wheeled robot no bigger than a microwave oven rolled down a steep metal ramp onto the rusty floodplains of Ares Vallis—becoming the first wheeled rover ever to explore another planet."
      },
      {
        code: "B",
        title: "The Beginning",
        content: "After the stationary Viking landers of 1976, 21 years passed without a successful Mars landing. NASA developed Mars Pathfinder and Sojourner (named by 12-year-old Valerie Ambroise after abolitionist Sojourner Truth) to prove that a low-cost, airbag-cushioned lander could deliver a mobile geologist to Mars. Launched December 4, 1996, Pathfinder hit the Martian atmosphere on July 4, 1997, discarded its heat shield and parachute nearby, inflated 24 giant airbags, and bounced at least 15 times across Ares Vallis before coming to rest."
      },
      {
        code: "C",
        title: "Inside the Machine",
        content: "Weighing just 11.5 kilograms on Earth (4.3 kg in Martian gravity) and measuring 65 centimeters long, Sojourner relied on ingenious lightweight engineering. Click its components below to see how it worked."
      },
      {
        code: "D",
        title: "The Mission",
        content: "Designed for a 7-sol technology demonstration, Sojourner operated for 83 sols—nearly 12 times its planned lifespan! Communicating via a short-range UHF radio with its base station (the Carl Sagan Memorial Station lander), Sojourner drove 104 meters, never straying more than 12 meters from the lander while inspecting rocks nicknamed 'Barnacle Bill,' 'Yogi,' 'Scooby Doo,' and 'Shark.'"
      },
      {
        code: "E",
        title: "The Discoveries",
        content: "Using its APXS spectrometer, Sojourner revealed that several Ares Vallis rocks were rich in silica (similar to volcanic andesites on Earth), while rounded pebbles and flood deposits confirmed that catastrophic ancient floods once carved the Ares Vallis channel."
      },
      {
        code: "F",
        title: "The Final Chapter",
        content: "On September 27, 1997 (Sol 83), the Pathfinder base station transmitted its final signal after repeated freeze-thaw cycles caused the lander's battery to fail. Classification: A machine that remains on a planetary surface after its relay lander stopped functioning. Moving detail: Sojourner's fault-protection rules instructed the little rover to drive back toward the lander and circle it if radio link was lost, trying to reconnect with a base station that could no longer answer."
      },
      {
        code: "G",
        title: "Where It Is Now",
        content: "Sojourner and the Carl Sagan Memorial Station sit silently in Ares Vallis (19.13°N, 33.22°W), with Pathfinder's discarded heat shield and parachute nearby. NASA's Mars Reconnaissance Orbiter has photographed the lander and its deflated airbags from orbit."
      },
      {
        code: "H",
        title: "Its Legacy",
        content: "Sojourner's 104-meter drive unlocked the entire surface of Mars. Every NASA Mars rover since—Spirit, Opportunity, Curiosity, and Perseverance—rides on a scaled-up version of Sojourner's six-wheeled rocker-bogie suspension. Primary Source: NASA NSSDCA ID 1996-068A."
      }
    ],
    quiz: {
      question: "Why did Sojourner need a 5-stripe laser hazard detection system and onboard computer to steer around rocks by itself?",
      options: [
        "Because radio signals take 10 to 20 minutes between Earth and Mars, making real-time joystick driving impossible",
        "Because NASA engineers forgot to install cameras on the Pathfinder lander",
        "So it could drive at 60 kilometers per hour across Martian dunes"
      ],
      correctIndex: 0,
      explanation: "Exactly! Light-time delay between Earth and Mars means a human driver on Earth would see a cliff 10+ minutes too late. Autonomous hazard avoidance made roving on Mars possible."
    },
    mythCheck: {
      claim: "Sojourner communicated directly with giant antennas on Earth using its own dish antenna.",
      isTrue: false,
      truthExplanation: "FALSE! Sojourner only carried a short-range UHF radio and relied on the Carl Sagan Memorial Station (Pathfinder lander) a few meters away to relay its data to Earth."
    }
  },
  {
    id: 4,
    chapterId: 2,
    name: "Opportunity",
    subtitle: "The Rover That Refused to Give Up",
    era: "January 25, 2004 – June 10, 2018 • Meridiani Planum, Mars",
    agency: "NASA / JPL-Caltech",
    statusShort: "Inactive Surface Rover inside Perseverance Valley",
    signalPing: "FINAL SIGNAL SOL 5,111 (TAU 10.8) • 2.80°S, 5.43°W",
    badgeIcon: "🔭",
    badgeTitle: "Martian Marathon Geologist",
    echoLog:
      "My designers gave me a warranty of 90 Martian days and expected me to drive less than a kilometer before Martian dust smothered my solar wings. Instead, I rolled out of Eagle Crater and kept driving—across rippled sand dunes, past iron meteorites sitting on the plains, and along the rim of a gigantic 22-kilometer impact crater—for 5,111 sols. Whenever dust dimmed my panels, the Martian wind swept me clean again. Until one June afternoon in 2018, when the sky turned darker than midnight.",
    novaIntro:
      "Meet Opportunity (MER-B)! Designed for a 90-sol mission in 2004, this golf-cart-sized robotic geologist drove an incredible 45.16 kilometers over nearly 15 Earth years—proving beyond doubt that liquid water once soaked ancient Mars!",
    hotspots: [
      {
        part: "Pancam & Mini-TES Mast",
        what: "A neck-like mast standing 1.5 meters high (human eye level) holding stereo color Panoramic Cameras and an infrared thermal spectrometer.",
        why: "Allowed Opportunity to scan crater rims in 3D color and spot water-bearing minerals from across a valley before driving over."
      },
      {
        part: "Rock Abrasion Tool (RAT)",
        what: "A high-speed diamond-tipped grinding wheel mounted on the rover's 5-jointed robotic arm.",
        why: "Ground 5-mm holes through dusty, weathered rock rinds so spectrometers and the Microscopic Imager could examine fresh interior stone."
      },
      {
        part: "Dust-Swept Solar Array Wings",
        what: "Triple-junction gallium arsenide solar panels unfolding like wings across the rover's deck.",
        why: "Generated up to 140 watts of power—and thanks to unexpected Martian wind gusts ('cleaning events'), kept Opportunity alive 55 times longer than planned!"
      }
    ],
    sections: [
      {
        code: "A",
        title: "Opening Scene",
        content: "On January 25, 2004 UTC, wrapped in bouncing airbags, NASA's Opportunity rover scored a cosmic 'hole-in-one'—rolling across the flat plains of Meridiani Planum and coming to rest inside a 22-meter crater (Eagle Crater) right in front of exposed ancient bedrock."
      },
      {
        code: "B",
        title: "The Beginning",
        content: "Orbital infrared maps had detected gray crystalline hematite—an iron mineral that usually forms in water—across Meridiani Planum. Launched July 7, 2003, Opportunity (twin to the Spirit rover in Gusev Crater) was sent to 'Follow the Water' and act as an all-in-one field geologist."
      },
      {
        code: "C",
        title: "Inside the Machine",
        content: "Weighing 185 kilograms—16 times heavier than Sojourner—Opportunity carried its own long-range X-band antenna to talk directly to Earth or relay through Mars orbiters. Click its geological instruments below."
      },
      {
        code: "D",
        title: "The Mission",
        content: "Planned for 90 sols and 600 meters, Opportunity operated for 5,111 sols (nearly 15 Earth years)! Saved repeatedly by seasonal winds that blew dust off its solar panels, it escaped a 5-week sand trap at Purgatory Dune, explored Eagle, Endurance, and Victoria Craters, and reached the 22-km Endeavour Crater—becoming the first vehicle to complete a full 42.195-km marathon on another world (45.16 km total)."
      },
      {
        code: "E",
        title: "The Discoveries",
        content: "Inside Eagle Crater, Opportunity discovered 'Martian blueberries'—tiny hematite spheres formed when mineral-rich groundwater soaked porous rock. Years later at Endeavour Crater, it discovered gypsum veins ('Homestake') and ancient clay minerals formed in neutral-pH, drinkable water capable of supporting ancient microbial life."
      },
      {
        code: "F",
        title: "The Final Chapter",
        content: "In June 2018, a planet-encircling dust storm blotted out 99% of sunlight over Meridiani Planum. Opportunity sent its final signal on June 10, 2018 (Sol 5,111), and after beaming over 1,000 recovery commands, NASA declared its mission complete on February 13, 2019. Classification: A machine that stopped functioning on a planetary surface due to environmental power loss."
      },
      {
        code: "G",
        title: "Where It Is Now",
        content: "Opportunity rests intact and silent in Perseverance Valley on the western rim of Endeavour Crater (2.80°S, 5.43°W). Miles back along its 45.16-km route lie its discarded 2004 heat shield (which Opportunity actually drove up to and photographed in 2004!) and its empty airbag lander platform in Eagle Crater."
      },
      {
        code: "H",
        title: "Its Legacy",
        content: "By proving ancient Mars had wet, habitable environments, Opportunity transformed Mars science from 'Was there water?' to 'Did life ever arise here?'—directly shaping the Curiosity and Perseverance rover missions. Primary Source: NASA NSSDCA ID 2003-032A."
      }
    ],
    quiz: {
      question: "What were the 'Martian blueberries' that Opportunity discovered inside Eagle Crater, and why did they matter?",
      options: [
        "Fossilized berries from ancient Martian plants",
        "Hematite mineral concretions that formed inside water-soaked rock, proving liquid water once existed on Mars",
        "Drops of melted metal from Opportunity's landing rockets"
      ],
      correctIndex: 1,
      explanation: "Correct! Those BB-sized hematite spheres (concretions) formed when groundwater percolated through porous rock billions of years ago, providing ground-truth proof of liquid water on Mars."
    },
    mythCheck: {
      claim: "Opportunity sent a final text message in English saying 'My battery is low and it's getting dark.'",
      isTrue: false,
      truthExplanation: "FALSE! Opportunity transmitted numerical engineering telemetry showing critically low battery power and extreme atmospheric dust opacity (tau 10.8); science journalists translated that telemetry into the famous poetic phrase."
    }
  },
  {
    id: 5,
    chapterId: 2,
    name: "Ingenuity",
    subtitle: "The Little Helicopter That Changed Mars Exploration",
    era: "April 19, 2021 – January 18, 2024 • Jezero Crater, Mars",
    agency: "NASA / JPL-Caltech / AeroVironment",
    statusShort: "Grounded in Neretva Vallis (Electronics Still Logging Weather)",
    signalPing: "FLIGHT ENDED (72 FLIGHTS) • LOCAL MEMORY LOGGING ACTIVE",
    badgeIcon: "🚁",
    badgeTitle: "First Alien Aviator",
    echoLog:
      "Imagine trying to swim upward by flapping your hands in an almost empty vacuum. That is what flying on Mars feels like. The air around me in Jezero Crater is less than 1 percent as thick as the air at sea level on Earth. To lift my tissue-box-sized body off the ground, I had to spin my two carbon-fiber rotor blades at 2,400 revolutions per minute—five times faster than a helicopter on Earth. On April 19, 2021, I spun up, rose three meters into the butterscotch Martian sky, and turned Jezero Crater into the first extraterrestrial airport.",
    novaIntro:
      "Fast-forward to Jezero Crater, 2021! Tucked beneath the belly of the Perseverance rover, the 1.8-kilogram Ingenuity Mars Helicopter was built for just 5 test flights—and went on to fly 72 times across the Red Planet!",
    hotspots: [
      {
        part: "2,400-RPM Coaxial Carbon-Fiber Rotors",
        what: "Two counter-rotating 1.2-meter (4-foot) rotor blades filled with ultra-light structural foam and carbon fiber.",
        why: "Because Mars's atmosphere has less than 1% of Earth's density, the blades had to spin at 2,400–2,537 RPM in opposite directions to generate lift without needing a heavy tail rotor."
      },
      {
        part: "Downward Visual Navigation Camera & Snapdragon CPU",
        what: "A downward-pointing black-and-white camera tracking surface rocks 30 times a second, paired with a laser altimeter and a 500-Hz flight controller.",
        why: "No human could pilot Ingenuity across a 15-minute radio delay; the helicopter had to balance and steer itself autonomously."
      },
      {
        part: "1903 Wright Flyer Wing Swatch",
        what: "A postage-stamp-sized piece of unbleached muslin fabric from the Wright brothers' 1903 airplane wrapped around a cable beneath the solar panel.",
        why: "Honored the historic link between the first powered flight on Earth at Kitty Hawk (1903) and the first powered flight on another planet (2021)."
      }
    ],
    sections: [
      {
        code: "A",
        title: "Opening Scene",
        content: "On April 19, 2021, on a flat patch of Martian dirt named Wright Brothers Field inside Jezero Crater, a 1.8-kilogram rotorcraft spun its twin carbon-fiber blades to 2,537 RPM, lifted three meters into the air, hovered, and landed safely—achieving the first powered, controlled flight by an aircraft on another planet."
      },
      {
        code: "B",
        title: "The Beginning",
        content: "Rovers can inspect rocks up close, but steep boulders and soft sand traps slow them down. JPL engineers designed Ingenuity (named by student Vaneeza Rupani) as a pure technology demonstration carrying zero science instruments, aiming simply to prove that aerodynamic flight is possible in an atmosphere equivalent to 30,000 meters (100,000 feet) above Earth."
      },
      {
        code: "C",
        title: "Inside the Machine",
        content: "Every gram mattered: Ingenuity weighed just 1.8 kilograms on Earth (about the weight of a half-gallon carton of milk, and only 0.68 kg in Martian gravity). Two-thirds of its battery energy went simply to keeping its electronics warm at night. Explore its parts below."
      },
      {
        code: "D",
        title: "The Mission",
        content: "Designed for just 5 flights over 30 sols, Ingenuity operated for nearly three Earth years! Promoted to an operational aerial scout for Perseverance, it survived freezing Martian winter nights through remote software patches and completed 72 total flights—logging 128.8 minutes aloft, covering 17.0 kilometers, and reaching 24 meters in altitude."
      },
      {
        code: "E",
        title: "The Discoveries",
        content: "Ingenuity unlocked aerial planetary exploration—providing real-world aerodynamic data in thin carbon-dioxide air and scouting ancient river delta ridges in Neretva Vallis from above to save Perseverance weeks of risky driving."
      },
      {
        code: "F",
        title: "The Final Chapter",
        content: "On January 18, 2024 (Flight 72), while flying over smooth, featureless sand ripples in Neretva Vallis that gave its downward navigation camera too few rock textures to track, Ingenuity made a hard landing that damaged the tips of its rotor blades. NASA officially ended its flight mission on January 25, 2024. Classification: A machine that remains upright on a planetary surface—grounded by rotor damage, yet with active electronics."
      },
      {
        code: "G",
        title: "Where It Is Now",
        content: "Ingenuity stands upright on a sandy slope at 'Valinor Hills' in Neretva Vallis, Jezero Crater. Before Perseverance drove out of radio range, JPL uploaded final software allowing Ingenuity to wake up each sol, check battery temperatures, and snap a daily surface photo—storing up to 20 years of local weather data in onboard memory for future astronauts to retrieve!"
      },
      {
        code: "H",
        title: "Its Legacy",
        content: "Just as Sojourner's 1997 wheel test led to giant rovers, Ingenuity's 72 flights birthed extraterrestrial aviation—inspiring future six-rotor Mars Chopper concepts and NASA's nuclear-powered Dragonfly rotorcraft mission to Saturn's moon Titan. Primary Source: NASA/JPL Mars Helicopter Archive."
      }
    ],
    quiz: {
      question: "What caused Ingenuity's 72nd and final flight to end in rotor blade damage on January 18, 2024?",
      options: [
        "It flew over smooth, featureless sand ripples that gave its downward visual navigation camera too few surface features to track horizontal speed",
        "A Martian dust devil struck the helicopter in mid-air",
        "Its solar panel detached during takeoff"
      ],
      correctIndex: 0,
      explanation: "Correct! Ingenuity's downward navigation camera relies on tracking distinct rocks and surface textures to calculate velocity; the smooth sand ripples in Neretva Vallis confused its visual tracker during landing."
    },
    mythCheck: {
      claim: "Since Ingenuity broke its rotor blade in January 2024, its computer is completely dead.",
      isTrue: false,
      truthExplanation: "FALSE! While Ingenuity can no longer fly, its solar panel and computer remain healthy—waking up daily to log temperature measurements and photos into its onboard memory for up to 20 years!"
    }
  },
  {
    id: 6,
    chapterId: 3,
    name: "Voyager 1",
    subtitle: "The Machine That Keeps Traveling",
    era: "Launched September 5, 1977 – Present • Interstellar Space",
    agency: "NASA / JPL-Caltech",
    statusShort: "Active in Interstellar Space (~1 Light-Day from Earth in Nov 2026)",
    signalPing: "LIVE DOWNLINK • 24h LIGHT-TIME • MAG & PWS ONLINE",
    badgeIcon: "📀",
    badgeTitle: "Interstellar Messenger",
    echoLog:
      "When I launched from Florida in September 1977, nobody had ever seen an active volcano on another world, and computers still used magnetic tape. Today, in November 2026, I am nearly 25.9 billion kilometers from home—so far away that a beam of radio light traveling at 300,000 kilometers every second takes a full 24 hours—one entire light-day—just to reach Earth. I have left the Sun's bubble of wind behind. My cameras have been turned off for 36 years to save electricity, yet bolted to my side is a gold-plated copper phonograph record that will still be playable a billion years from now.",
    novaIntro:
      "We are locking onto the farthest human-made object in existence! Launched in 1977, Voyager 1 crossed into interstellar space in 2012 and in November 2026 reaches a breathtaking milestone: one full light-day (25.9 billion kilometers) from Earth—still whispering data back home!",
    hotspots: [
      {
        part: "Three Plutonium-238 RTGs",
        what: "Radioisotope Thermoelectric Generators mounted on a boom, converting heat from decaying plutonium-238 into electricity.",
        why: "Sunlight in deep space is thousands of times too weak for solar panels; RTGs still power Voyager 1 nearly 50 years later (though losing ~4 watts per year)."
      },
      {
        part: "The Voyager Golden Record",
        what: "A 12-inch gold-plated copper phonograph record inside an aluminum cover electroplated with ultra-pure uranium-238.",
        why: "Curated by Carl Sagan's committee to carry 115 images, greetings in 55 languages, Earth sounds, and 90 minutes of music as a time capsule for any civilization that might find it."
      },
      {
        part: "13-Meter Magnetometer Boom & Plasma Wave Antennas",
        what: "A long fiberglass boom holding magnetic field sensors (MAG) and twin 10-meter whip antennas (PWS).",
        why: "The two remaining active instruments in late 2026—measuring the galactic magnetic field and interstellar plasma density outside the Sun's bubble."
      },
      {
        part: "3.7-Meter High-Gain Dish & 23-Watt Transmitter",
        what: "A 12-foot white parabolic dish antenna aimed continuously back toward Earth.",
        why: "Focuses a 23-watt radio signal (no stronger than a refrigerator bulb!) across 25.9 billion kilometers to NASA's giant 70-meter Deep Space Network dishes."
      }
    ],
    sections: [
      {
        code: "A",
        title: "Opening Scene",
        content: "Speeding through the cold dark between the stars at 17 kilometers per second (38,000 mph) toward the constellation Ophiuchus, NASA's Voyager 1 is the farthest human-made object in history—reaching the landmark distance of one full light-day (25.9 billion kilometers / 173 AU) from Earth in November 2026."
      },
      {
        code: "B",
        title: "The Beginning",
        content: "In the 1960s, aerospace engineer Gary Flandro discovered that the four giant outer planets line up once every 176 years, allowing a spacecraft to use each planet's gravity like a slingshot ('gravity assist'). Launched September 5, 1977 (16 days after its twin Voyager 2), Voyager 1 raced past Jupiter in March 1979 and Saturn in November 1980."
      },
      {
        code: "C",
        title: "Inside the Machine",
        content: "Voyager 1 has a mass of 722 kilograms and runs on three redundant 1970s computer systems with just 69.63 kilobytes of total memory—recording onto an 8-track digital magnetic tape recorder! Inspect its deep-space hardware below."
      },
      {
        code: "D",
        title: "The Mission",
        content: "After close flybys of Jupiter, Saturn, and Saturn's hazy moon Titan (which slung Voyager 1 35 degrees northward out of the planetary plane), Voyager 1 turned its camera around on February 14, 1990, from 6 billion km away to snap the 'Pale Blue Dot' portrait of Earth before shutting off its cameras forever to save power. On August 25, 2012, at 121 AU, it crossed the heliopause into interstellar space!"
      },
      {
        code: "E",
        title: "The Discoveries",
        content: "Voyager 1 discovered the first active extraterrestrial volcanoes on Jupiter's moon Io, revealed complex braids and shepherd moons in Saturn's rings, found that Titan has a thick nitrogen-methane atmosphere, and made humanity's first direct measurements of the interstellar medium outside the Sun's heliosphere."
      },
      {
        code: "F",
        title: "The Final Chapter (Still Being Written!)",
        content: "Voyager 1's mission has NOT ended! Classification: An active spacecraft continuing its extended mission through interstellar space under severe power and instrument limitations. In 2024, JPL engineers famously rescued Voyager 1 from a corrupted Flight Data Subsystem memory chip by rewriting code across healthy memory from 24 billion km away. To conserve dwindling plutonium power, NASA shut off the Cosmic Ray Subsystem in February 2025 and the Low-Energy Charged Particles sensor in April 2026."
      },
      {
        code: "G",
        title: "Where It Is Now (Verified November 2026 Status)",
        content: "As of November 2026, Voyager 1 is in interstellar space roughly 25.9 billion kilometers (one light-day) from Earth. Two science instruments—the Magnetometer (MAG) and Plasma Wave Subsystem (PWS)—remain powered and transmitting data to the Deep Space Network, expected to operate into the late 2020s or early 2030s."
      },
      {
        code: "H",
        title: "Its Legacy",
        content: "Even after its radio falls silent around the 2030s, Voyager 1 and its Golden Record will orbit the Milky Way galaxy for billions of years—passing within 1.6 light-years of the star Gliese 445 in 40,000 years as humanity's permanent ambassador to the cosmos. Primary Source: NASA/JPL Voyager Mission Status (2026)."
      }
    ],
    quiz: {
      question: "Why did NASA turn off Voyager 1's cameras in 1990 and gradually power down instruments like CRS (2025) and LECP (2026)?",
      options: [
        "Because there is nothing interesting to measure outside the Solar System",
        "Because its plutonium-238 RTG power supply loses about 4 watts per year as the isotope decays, requiring careful power rationing to keep the spacecraft alive",
        "Because Voyager 1's solar panels are covered in interstellar dust"
      ],
      correctIndex: 1,
      explanation: "Correct! Voyager 1 has no solar panels; its three plutonium-238 RTGs lose about 4 watts every year, so engineers shut down heaters and sensors one by one so its remaining instruments can operate into the 2030s."
    },
    mythCheck: {
      claim: "Voyager 1 has completely left our Milky Way galaxy.",
      isTrue: false,
      truthExplanation: "FALSE! Voyager 1 left the heliosphere (the Sun's magnetic wind bubble) to enter interstellar space between the stars, but it is still deep inside our Milky Way galaxy—and hasn't even reached the distant Oort Cloud of comets yet!"
    }
  },
  {
    id: 7,
    chapterId: 3,
    name: "Cassini-Huygens",
    subtitle: "The Final Journey of Cassini",
    era: "October 15, 1997 – September 15, 2017 • Saturn & Titan",
    agency: "NASA / ESA (European Space Agency) / ASI (Italian Space Agency)",
    statusShort: "Cassini Vaporized in Saturn (2017) • ESA Huygens Intact on Titan",
    signalPing: "ORBITER VAPORIZED • HUYGENS LANDER INTACT AT 10.25°S, 192.32°W TITAN",
    badgeIcon: "🪐",
    badgeTitle: "Guardian of the Ocean Worlds",
    echoLog:
      "For thirteen years, Saturn was my home. I wove through its glittering ice rings, watched hexagonal hurricanes twice the size of Earth swirl at its north pole, and dropped my passenger probe onto the methane-soaked plains of Titan. Then I flew straight through icy geysers spraying out of a tiny moon called Enceladus—and tasted an underground ocean that could actually support life. And that is why, on September 15, 2017, when my fuel tank ran nearly dry, I had to make one final dive. To protect the living worlds I discovered, I plunged into Saturn's golden sky and became part of the planet I loved.",
    novaIntro:
      "Our final archive file takes us to the ringed jewel of the Solar System! Cassini-Huygens—built together by NASA, the European Space Agency, and the Italian Space Agency—spent 13 years revealing ocean worlds around Saturn before making the ultimate sacrifice for planetary protection!",
    hotspots: [
      {
        part: "ASI 4-Meter High-Gain Radar Antenna",
        what: "A giant white top-mounted dish antenna designed and built by the Italian Space Agency (ASI).",
        why: "Served triple duty: beaming telemetry across 1.4 billion km to Earth, bouncing microwave radar beams through Titan's thick orange smog to map methane seas, and shielding the spacecraft from ring dust."
      },
      {
        part: "Cosmic Dust & Mass Spectrometers (CDA & INMS)",
        what: "Chemical 'sniffing' and dust-tasting analyzers mounted on the NASA Cassini orbiter.",
        why: "Allowed Cassini to fly directly through the icy plumes erupting from Saturn's moon Enceladus and detect water, salt, organic molecules, and hydrothermal hydrogen!"
      },
      {
        part: "ESA Huygens Titan Atmospheric Lander",
        what: "A 318-kg, 2.7-meter saucer-shaped lander probe designed and built by the European Space Agency (ESA).",
        why: "Separated from Cassini on Christmas Day 2004 and parachuted onto Titan on January 14, 2005—achieving the farthest landing from Earth in human history."
      }
    ],
    sections: [
      {
        code: "A",
        title: "Opening Scene",
        content: "On September 15, 2017, after 13 years of orbiting Saturn, the school-bus-sized Cassini spacecraft dove into Saturn's golden upper atmosphere at 113,000 kilometers per hour, firing its thrusters to keep its antenna pointed at Earth until friction vaporized it completely—protecting the potentially habitable moons it had discovered."
      },
      {
        code: "B",
        title: "The Beginning",
        content: "Voyager 1 and 2 had flown past Saturn in 1980–1981, leaving mysteries hidden beneath Titan's opaque haze. NASA, ESA, and ASI partnered to build a massive 5,712-kilogram orbiter-and-lander duo. Launched October 15, 1997, Cassini-Huygens used four gravity assists (Venus twice, Earth once, Jupiter once) over nearly 7 years before entering Saturn orbit on July 1, 2004."
      },
      {
        code: "C",
        title: "Inside the Machine (International Partnership)",
        content: "Standing 6.7 meters tall and powered by three plutonium RTGs, Cassini-Huygens combined two separable spacecraft built by three space agencies: the NASA Cassini Orbiter (12 instruments), the ESA Huygens Titan Lander (6 instruments), and the ASI High-Gain Radar Antenna. Click each component below."
      },
      {
        code: "D",
        title: "The Mission",
        content: "On January 14, 2005, ESA's Huygens probe parachuted for 2 hours and 27 minutes through Titan's nitrogen-methane haze, landing on a plain of frozen water-ice pebbles and transmitting from the surface for 72 minutes. Meanwhile, the Cassini orbiter completed 294 orbits of Saturn and 162 targeted moon flybys over 13 years."
      },
      {
        code: "E",
        title: "The Discoveries",
        content: "Cassini discovered giant geysers erupting from warm fractures ('Tiger Stripes') at the south pole of icy moon Enceladus—proving it hides a global liquid saltwater ocean with hydrothermal vents! At Titan, Cassini's radar mapped liquid methane and ethane seas (Kraken Mare and Ligeia Mare), and during its final orbits, it revealed Saturn's rings are surprisingly young (10 to 100 million years old)."
      },
      {
        code: "F",
        title: "The Final Chapter: The Grand Finale",
        content: "By 2017, Cassini's propellant was nearly gone. Because Enceladus and Titan hold environments that could support life, Planetary Protection rules forbade leaving an unsteerable spacecraft that might someday crash into and contaminate those moons with Earth microbes. After 22 daring dives between Saturn and its innermost rings ('The Grand Finale'), NASA deliberately plunged Cassini into Saturn on September 15, 2017. Classification: An orbiter deliberately destroyed for planetary protection (while its partner ESA Huygens lander remains intact on Titan)."
      },
      {
        code: "G",
        title: "Where It Is Now",
        content: "The NASA Cassini orbiter no longer exists as a solid object; its vaporized atoms are forever part of Saturn's atmosphere. Meanwhile, the ESA Huygens lander sits intact and silent on the dark, pebble-strewn floodplain of Adiri on Titan (10.25°S, 192.32°W) alongside its discarded heat shield and parachutes."
      },
      {
        code: "H",
        title: "Its Legacy",
        content: "Cassini proved that habitable ocean worlds can exist far outside the traditional sunlit 'Goldilocks Zone'—directly inspiring NASA's Europa Clipper mission to Jupiter's moon Europa and the Dragonfly rotorcraft mission to Titan. Primary Source: NASA/ESA NSSDCA ID 1997-061A & 1997-061C."
      }
    ],
    quiz: {
      question: "Why did NASA deliberately plunge the Cassini orbiter into Saturn's atmosphere on September 15, 2017, instead of leaving it in orbit?",
      options: [
        "To prevent an out-of-fuel Cassini from accidentally crashing into and contaminating the potentially habitable moons Enceladus or Titan",
        "To test whether Cassini could land on a solid surface inside Saturn",
        "Because Saturn's rings were about to explode"
      ],
      correctIndex: 0,
      explanation: "Correct! Because Cassini discovered a subsurface ocean on Enceladus and rich prebiotic chemistry on Titan, NASA destroyed the orbiter in Saturn's atmosphere to uphold Planetary Protection."
    },
    mythCheck: {
      claim: "Both Cassini and the Huygens probe burned up inside Saturn's atmosphere in 2017.",
      isTrue: false,
      truthExplanation: "FALSE! Only the NASA Cassini orbiter plunged into Saturn in 2017; the European Space Agency's Huygens probe landed intact on Saturn's moon Titan back in January 2005 and still rests on Titan's surface today!"
    }
  }
];

/* Cross-Mission Echo Threads (Unlocked when paired artifacts are completed) */
const ECHO_THREADS_DATA = [
  {
    id: "thread-wheels",
    title: "Echo Thread I: The Six-Wheel Evolution",
    requiredArtifacts: [3, 4],
    fromTo: "Sojourner (1997) → Opportunity (2004)",
    description:
      "Sojourner's 11.5-kg, 104-meter test drive in Ares Vallis validated the springless six-wheel rocker-bogie suspension and autonomous hazard avoidance—allowing engineers to scale the exact same suspension architecture up to Opportunity's 185-kg, 45.16-kilometer geological marathon across Meridiani Planum."
  },
  {
    id: "thread-titan",
    title: "Echo Thread II: Lifting Titan's Orange Veil",
    requiredArtifacts: [6, 7],
    fromTo: "Voyager 1 (1980) → Cassini-Huygens (2004–2017)",
    description:
      "When Voyager 1 flew within 6,490 km of Saturn's moon Titan in November 1980, its optical cameras saw an opaque orange nitrogen-methane smog hiding the surface. That mystery directly inspired engineers to equip Cassini with cloud-piercing radar and the ESA Huygens atmospheric lander."
  },
  {
    id: "thread-flight",
    title: "Echo Thread III: From Martian Skies to Titan's Dunes",
    requiredArtifacts: [5, 7],
    fromTo: "Ingenuity (2021–2024) + Cassini-Huygens → Dragonfly",
    description:
      "Ingenuity proved that autonomous computer-guided rotorcraft can fly across another world, while Cassini-Huygens revealed Titan's dense nitrogen air and organic dunes—combining directly to make NASA's nuclear-powered Dragonfly octocopter mission to Titan possible."
  }
];

/* Hardware Status Sort Items for the Final Mission Interactive Activity */
const FINAL_SORT_ITEMS = [
  {
    id: "sort-voyager",
    hardware: "Voyager 1",
    correctCategory: "active_interstellar",
    hint: "Launched 1977; ~1 light-day away in Nov 2026 with MAG & PWS online."
  },
  {
    id: "sort-lrrr",
    hardware: "Apollo Lunar Laser Retroreflector",
    correctCategory: "passive_optical",
    hint: "Placed 1969–1971; uses corner-cube quartz prisms with zero batteries."
  },
  {
    id: "sort-ingenuity",
    hardware: "Ingenuity Mars Helicopter",
    correctCategory: "grounded_logging",
    hint: "Rotor blade damaged on Flight 72 (Jan 2024), but solar panel & computer still log daily telemetry."
  },
  {
    id: "sort-cassini",
    hardware: "NASA Cassini Orbiter",
    correctCategory: "vaporized_protection",
    hint: "Deliberately plunged into Saturn on Sept 15, 2017 to protect Enceladus and Titan."
  },
  {
    id: "sort-surveyor",
    hardware: "Surveyor 3 & Opportunity & ESA Huygens",
    correctCategory: "inactive_surface",
    hint: "Intact hardware resting silently on the surfaces of the Moon, Mars, and Titan."
  }
];

/* =========================================================================
   APPLICATION STATE & LOCALSTORAGE AUTOSAVE
   ========================================================================= */
const PRE_OCCUPIED_USERNAMES = ["captainnova", "apollo11", "explorer1", "archivistprime"];

let appState = {
  currentView: "home",
  currentUser: null, // null when guest, username string when logged in
  unlockAllMode: false,
  selectedArtifactId: 1,
  activeArtifactTab: "learn", // 'learn' | 'challenge'
  storyDisplayMode: "beats", // 'beats' | 'scroll'
  currentBeatIndex: 0, // 0..7 (A..H)
  selectedHotspotIndex: 0,
  visitedBeatsByArtifact: {}, // { artifactId: [0,1,2...] }
  learnCompleted: [], // array of artifactIds
  quizCompleted: [], // array of artifactIds
  finalMissionCompleted: false,
  xp: 0,
  voiceMuted: false,
  lastNovaText: CAPTAIN_NOVA_OPENING
};

/* Load existing accounts dictionary from localStorage */
function getStoredAccounts() {
  try {
    const raw = localStorage.getItem("mission_echoes_accounts_v2");
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveStoredAccounts(accounts) {
  try {
    localStorage.setItem("mission_echoes_accounts_v2", JSON.stringify(accounts));
  } catch (e) {
    console.warn("Storage warning:", e);
  }
}

/* Autosave current user's progress immediately */
function autosaveProgress() {
  updateTopHud();
  if (!appState.currentUser) return;
  const accounts = getStoredAccounts();
  const key = appState.currentUser.toLowerCase();
  if (accounts[key]) {
    accounts[key].progress = {
      learnCompleted: appState.learnCompleted,
      quizCompleted: appState.quizCompleted,
      visitedBeatsByArtifact: appState.visitedBeatsByArtifact,
      finalMissionCompleted: appState.finalMissionCompleted,
      xp: appState.xp
    };
    saveStoredAccounts(accounts);
    const indicator = document.getElementById("autosave-indicator");
    if (indicator) {
      indicator.textContent = "✓ Autosaved";
      indicator.style.opacity = "1";
    }
  }
}

/* =========================================================================
   NAVIGATION & HUD UPDATES
   ========================================================================= */
function navigateTo(viewName) {
  appState.currentView = viewName;
  document.querySelectorAll(".view-section").forEach((sec) => {
    sec.classList.remove("active-view");
  });
  const target = document.getElementById(`view-${viewName}`);
  if (target) target.classList.add("active-view");

  document.querySelectorAll(".nav-btn").forEach((btn) => btn.classList.remove("active"));
  const navBtn = document.getElementById(`nav-${viewName}`);
  if (navBtn) navBtn.classList.add("active");

  if (viewName === "home") {
    updateHomeProgressUI();
  } else if (viewName === "map") {
    renderSolarSystemMap();
  } else if (viewName === "badges") {
    renderBadgesVault();
  } else if (viewName === "final") {
    renderFinalMissionView();
  }
  updateTopHud();
}

function updateTopHud() {
  const totalBadges = appState.quizCompleted.length + (appState.finalMissionCompleted ? 1 : 0);
  const badgeCountEl = document.getElementById("nav-badge-count");
  if (badgeCountEl) badgeCountEl.textContent = `${totalBadges}/8`;

  const xpEl = document.getElementById("user-xp-display");
  if (xpEl) xpEl.textContent = `${appState.xp} XP`;

  updateHomeProgressUI();
}

function updateHomeProgressUI() {
  const count = appState.quizCompleted.length;
  const textEl = document.getElementById("home-progress-text");
  const barEl = document.getElementById("home-progress-bar");
  if (textEl) textEl.textContent = `${count} / 7 Artifacts`;
  if (barEl) barEl.style.width = `${Math.round((count / 7) * 100)}%`;
}

function isArtifactUnlocked(artifactId) {
  if (appState.unlockAllMode || artifactId === 1) return true;
  return appState.quizCompleted.includes(artifactId - 1);
}

function isFinalMissionUnlocked() {
  if (appState.unlockAllMode) return true;
  return appState.quizCompleted.length >= 7;
}

function toggleUnlockAll() {
  appState.unlockAllMode = !appState.unlockAllMode;
  const btn = document.getElementById("btn-unlock-all");
  if (btn) {
    btn.textContent = appState.unlockAllMode ? "🔓 Unlock All: ON" : "🔓 Unlock All: OFF";
    btn.classList.toggle("unlocked-active", appState.unlockAllMode);
  }
  if (appState.currentView === "map") renderSolarSystemMap();
  if (appState.currentView === "artifact") renderArtifactView(appState.selectedArtifactId);
  speakNova(
    appState.unlockAllMode
      ? "Archivist Override active! All 7 hardware stories, verification challenges, and the Final Mission are now unlocked for direct exploration."
      : "Standard progression restored. Complete each artifact's story and challenge in order!"
  );
}

function openChapterDirectly(chapterId) {
  navigateTo("map");
  setTimeout(() => {
    const el = document.getElementById(`chapter-sector-${chapterId}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 80);
}

function startNextUnfinishedArtifact() {
  let nextId = 1;
  for (let i = 1; i <= 7; i++) {
    if (!appState.quizCompleted.includes(i)) {
      nextId = i;
      break;
    }
  }
  openArtifactStory(nextId);
}

/* =========================================================================
   SOLAR SYSTEM MAP RENDERER (3 Chapters + 7 Artifacts + Pressable Final Mission)
   ========================================================================= */
function renderSolarSystemMap() {
  const grid = document.getElementById("chapters-map-grid");
  if (!grid) return;

  grid.innerHTML = CHAPTERS_META.map((chap) => {
    const chapArtifacts = ARTIFACTS_DATA.filter((a) => a.chapterId === chap.id);
    const cardsHtml = chapArtifacts
      .map((art) => {
        const unlocked = isArtifactUnlocked(art.id);
        const completed = appState.quizCompleted.includes(art.id);
        const learnDone = appState.learnCompleted.includes(art.id);

        let statusClass = "status-locked";
        let statusLabel = "🔒 Encrypted";
        if (completed) {
          statusClass = "status-restored";
          statusLabel = "✓ Archive Restored";
        } else if (unlocked) {
          statusClass = "status-ready";
          statusLabel = learnDone ? "⚡ Quiz Ready" : "📡 Signal Active";
        }

        return `
          <article
            class="artifact-map-node ${completed ? "node-completed" : ""} ${!unlocked ? "node-locked" : ""}"
            onclick="handleArtifactNodeClick(${art.id})"
          >
            <div>
              <div class="node-top-meta">
                <span class="node-number">ARTIFACT 0${art.id} • ${art.badgeIcon}</span>
                <span class="node-status-pill ${statusClass}">${statusLabel}</span>
              </div>
              <div class="node-title-group" style="margin-top:0.55rem;">
                <h4>${art.name}</h4>
                <div class="node-concept-sub">"${art.subtitle}"</div>
                <p class="node-summary-text">${art.era}</p>
              </div>
            </div>
            <div class="node-signal-bar">
              <span>${art.signalPing}</span>
              <strong>${unlocked ? "OPEN LOG →" : "LOCKED"}</strong>
            </div>
          </article>
        `;
      })
      .join("");

    return `
      <div class="chapter-sector-block" id="chapter-sector-${chap.id}">
        <div class="chapter-sector-header">
          <div class="chapter-sector-title">
            <span class="section-eyebrow">${chap.roman}</span>
            <h3>${chap.title}</h3>
            <p>${chap.theme}</p>
          </div>
        </div>
        <div class="artifacts-node-row">
          ${cardsHtml}
        </div>
      </div>
    `;
  }).join("");

  /* Render Pressable Final Mission Node */
  const finalCard = document.getElementById("final-mission-card");
  const finalUnlocked = isFinalMissionUnlocked();
  if (finalCard) {
    finalCard.className = `final-mission-banner ${finalUnlocked ? "" : "final-locked"}`;
    finalCard.innerHTML = `
      <div>
        <span class="section-eyebrow">FINAL ARCHIVE SYNTHESIS • EPILOGUE</span>
        <h3 style="font-family:'Orbitron',sans-serif;font-size:1.4rem;margin:0.25rem 0;color:#fff;">
          🌌 Final Mission: The Legacy of Space Exploration
        </h3>
        <p style="color:#cbd5e1;font-size:0.9rem;max-width:720px;">
          ${
            finalUnlocked
              ? "All 7 hardware logs are accessible! Enter the Final Mission to experience Captain Nova's closing transmission, complete the Solar System Hardware Status Sort, and claim your Master Heritage Medal."
              : `Complete all 7 Artifact Verification Challenges (${appState.quizCompleted.length}/7 restored) or click "Unlock All" in the top bar to press and enter the Final Mission immediately.`
          }
        </p>
      </div>
      <div>
        <button
          class="btn-primary-glow"
          onclick="handleFinalMissionClick()"
          style="${finalUnlocked ? "" : "opacity:0.75;"}"
        >
          ${finalUnlocked ? "🚀 Launch Final Mission →" : "🔒 Final Mission (Click to Check / Unlock All)"}
        </button>
      </div>
    `;
  }
}

function handleArtifactNodeClick(artifactId) {
  if (!isArtifactUnlocked(artifactId)) {
    speakNova(
      `Artifact 0${artifactId} is still encrypted! Complete Artifact 0${artifactId - 1}'s story and verification challenge first—or click "Unlock All" in the top navigation bar to jump right in.`
    );
    return;
  }
  openArtifactStory(artifactId);
}

function handleFinalMissionClick() {
  if (!isFinalMissionUnlocked()) {
    speakNova(
      `You have restored ${appState.quizCompleted.length} of 7 artifact files. Complete all 7 challenges to unlock the Final Mission, or click "Unlock All: OFF" in the top bar to test the Final Mission right now!`
    );
    return;
  }
  navigateTo("final");
  speakNova(
    "Welcome to the Final Mission: The Legacy of Space Exploration! Let's bring all seven hardware stories together."
  );
}

/* =========================================================================
   ARTIFACT STORY THEATER & INTERACTIVE HARDWARE INSPECTOR
   ========================================================================= */
function openArtifactStory(artifactId) {
  appState.selectedArtifactId = artifactId;
  appState.activeArtifactTab = "learn";
  appState.currentBeatIndex = 0;
  appState.selectedHotspotIndex = 0;

  if (!appState.visitedBeatsByArtifact[artifactId]) {
    appState.visitedBeatsByArtifact[artifactId] = [0];
  }

  navigateTo("artifact");
  renderArtifactView(artifactId);

  const art = ARTIFACTS_DATA.find((a) => a.id === artifactId);
  if (art) {
    speakNova(art.novaIntro);
  }
}

function renderArtifactView(artifactId) {
  const art = ARTIFACTS_DATA.find((a) => a.id === artifactId);
  if (!art) return;
  const chap = CHAPTERS_META.find((c) => c.id === art.chapterId);

  document.getElementById("artifact-crumb-label").textContent = `${chap.roman} • ${chap.title.toUpperCase()}`;

  const learnDone = appState.learnCompleted.includes(art.id) || appState.unlockAllMode;
  const lockIcon = document.getElementById("challenge-tab-lock-icon");
  if (lockIcon) lockIcon.textContent = learnDone ? "🔓" : "🔒";

  /* Hero Header */
  document.getElementById("artifact-hero-header").innerHTML = `
    <div class="artifact-hero-title">
      <span class="section-eyebrow">ARCHIVE FILE 0${art.id} • ${art.agency}</span>
      <h2>${art.badgeIcon} ${art.name}</h2>
      <div class="concept-subtitle">"${art.subtitle}"</div>
    </div>
    <div class="artifact-quick-specs">
      <div class="spec-box">
        <span>MISSION ERA &amp; LOCATION</span>
        <strong>${art.era}</strong>
      </div>
      <div class="spec-box">
        <span>VERIFIED 2026 STATUS</span>
        <strong>${art.statusShort}</strong>
      </div>
    </div>
  `;

  /* First-Person Echo Log Stage Card */
  document.getElementById("echo-log-stage").innerHTML = `
    <div class="echo-stage-top">
      <span class="layer-badge-creative">🎭 CREATIVE NARRATIVE — FIRST-PERSON ECHO LOG</span>
      <button class="btn-secondary-glass" style="padding:0.35rem 0.75rem;font-size:0.76rem;" onclick="speakEchoLog(${art.id})">
        🔊 Hear ${art.name}'s First-Person Echo Log
      </button>
    </div>
    <blockquote class="echo-quote-text">"${art.echoLog}"</blockquote>
    <div class="echo-disclaimer-note">
      <strong>Archivist Note:</strong> This first-person <em>Echo Log</em> personifies ${art.name} to bring its engineering journey to life. All dates, instruments, and discoveries in Sections A–H below are <strong>Verified NASA Historical Records</strong>.
    </div>
  `;

  renderStorySections(art);
  renderLearnCompletionFooter(art);
  renderChallengePanel(art);
}

function setStoryDisplayMode(mode) {
  appState.storyDisplayMode = mode;
  document.getElementById("btn-mode-beats").classList.toggle("active", mode === "beats");
  document.getElementById("btn-mode-scroll").classList.toggle("active", mode === "scroll");
  const art = ARTIFACTS_DATA.find((a) => a.id === appState.selectedArtifactId);
  if (art) renderStorySections(art);
}

function selectStoryBeat(index) {
  const art = ARTIFACTS_DATA.find((a) => a.id === appState.selectedArtifactId);
  if (!art) return;
  appState.currentBeatIndex = index;
  const visited = appState.visitedBeatsByArtifact[art.id] || [];
  if (!visited.includes(index)) {
    visited.push(index);
    appState.visitedBeatsByArtifact[art.id] = visited;
    autosaveProgress();
  }
  renderStorySections(art);
  renderLearnCompletionFooter(art);
}

function selectHotspot(index) {
  appState.selectedHotspotIndex = index;
  const art = ARTIFACTS_DATA.find((a) => a.id === appState.selectedArtifactId);
  if (art) renderStorySections(art);
}

function buildHotspotInspectorHtml(art) {
  const currentHotspot = art.hotspots[appState.selectedHotspotIndex] || art.hotspots[0];
  const buttons = art.hotspots
    .map(
      (h, idx) => `
      <button
        class="hotspot-chip-btn ${idx === appState.selectedHotspotIndex ? "active" : ""}"
        onclick="selectHotspot(${idx})"
      >
        🔧 ${h.part}
      </button>
    `
    )
    .join("");

  return `
    <div class="hardware-inspector-box">
      <div class="inspector-title">🔍 INTERACTIVE HARDWARE INSPECTOR — CLICK EACH COMPONENT:</div>
      <div class="hotspot-buttons-row">${buttons}</div>
      <div class="hotspot-detail-display">
        <p><strong>What It Is:</strong> ${currentHotspot.what}</p>
        <p style="margin-top:0.4rem;"><strong>Why Engineers Built It That Way:</strong> ${currentHotspot.why}</p>
      </div>
    </div>
  `;
}

function renderStorySections(art) {
  const visited = appState.visitedBeatsByArtifact[art.id] || [0];

  /* Stepper Dots (A through H) */
  const dotsContainer = document.getElementById("story-step-dots");
  dotsContainer.innerHTML = art.sections
    .map((sec, idx) => {
      const isCurrent = appState.storyDisplayMode === "beats" && idx === appState.currentBeatIndex;
      const isVisited = visited.includes(idx);
      return `
        <button
          class="step-dot-btn ${isCurrent ? "active" : ""} ${isVisited ? "visited" : ""}"
          onclick="selectStoryBeat(${idx})"
          title="${sec.code}. ${sec.title}"
        >
          ${sec.code}. ${sec.title.split(" ")[0]}
        </button>
      `;
    })
    .join("");

  const container = document.getElementById("story-sections-container");

  if (appState.storyDisplayMode === "beats") {
    const sec = art.sections[appState.currentBeatIndex];
    const isSectionC = sec.code === "C";
    const prevDisabled = appState.currentBeatIndex === 0;
    const isLastBeat = appState.currentBeatIndex === art.sections.length - 1;

    container.innerHTML = `
      <article class="story-act-card">
        <div class="act-card-header">
          <h3 class="act-letter-title">ACT ${sec.code} — ${sec.title.toUpperCase()}</h3>
          <span class="layer-badge-verified">✓ VERIFIED NASA RECORD (${appState.currentBeatIndex + 1} OF 8)</span>
        </div>
        <div class="act-body-text">
          <p>${sec.content}</p>
        </div>
        ${isSectionC ? buildHotspotInspectorHtml(art) : ""}
        <div class="beat-stepper-controls">
          <button
            class="btn-secondary-glass"
            onclick="selectStoryBeat(${Math.max(0, appState.currentBeatIndex - 1)})"
            ${prevDisabled ? "disabled style='opacity:0.4;cursor:not-allowed;'" : ""}
          >
            ← Previous Story Act
          </button>
          <span style="font-family:'JetBrains Mono',monospace;font-size:0.76rem;color:#94a3b8;">
            Explored ${visited.length} / 8 Story Acts
          </span>
          ${
            !isLastBeat
              ? `<button class="btn-primary-glow" onclick="selectStoryBeat(${appState.currentBeatIndex + 1})">
                   Next Act: ${art.sections[appState.currentBeatIndex + 1].code}. ${art.sections[appState.currentBeatIndex + 1].title} →
                 </button>`
              : `<button class="btn-primary-glow" onclick="markArtifactLearnComplete(${art.id})">
                   ✓ Complete Story &amp; Unlock Verification Challenge →
                 </button>`
          }
        </div>
      </article>
    `;
  } else {
    /* Full Scroll Mode: All 8 Acts A-H visible */
    container.innerHTML = art.sections
      .map(
        (sec) => `
        <article class="story-act-card">
          <div class="act-card-header">
            <h3 class="act-letter-title">ACT ${sec.code} — ${sec.title.toUpperCase()}</h3>
            <span class="layer-badge-verified">✓ VERIFIED NASA RECORD</span>
          </div>
          <div class="act-body-text">
            <p>${sec.content}</p>
          </div>
          ${sec.code === "C" ? buildHotspotInspectorHtml(art) : ""}
        </article>
      `
      )
      .join("");
  }
}

function renderLearnCompletionFooter(art) {
  const isDone = appState.learnCompleted.includes(art.id);
  const footer = document.getElementById("learn-completion-footer");
  footer.innerHTML = `
    <div>
      <strong style="color:#fff;display:block;font-size:0.96rem;">
        ${
          isDone
            ? `✓ ${art.name} Story Archive Completed! Verification Challenge is Unlocked.`
            : `Ready to verify your archive knowledge on ${art.name}?`
        }
      </strong>
      <span style="color:#94a3b8;font-size:0.82rem;">
        Completing the story unlocks the Verification Challenge &amp; Myth Decoder tab.
      </span>
    </div>
    <button class="btn-primary-glow" onclick="markArtifactLearnComplete(${art.id})">
      ${isDone ? "⚡ Go to Verification Challenge →" : "✓ Mark Story Complete &amp; Unlock Challenge"}
    </button>
  `;
}

function markArtifactLearnComplete(artifactId) {
  if (!appState.learnCompleted.includes(artifactId)) {
    appState.learnCompleted.push(artifactId);
    appState.xp += 50;
    autosaveProgress();
  }
  const lockIcon = document.getElementById("challenge-tab-lock-icon");
  if (lockIcon) lockIcon.textContent = "🔓";
  switchArtifactTab("challenge");
}

function switchArtifactTab(tabName) {
  const art = ARTIFACTS_DATA.find((a) => a.id === appState.selectedArtifactId);
  if (!art) return;

  if (tabName === "challenge" && !appState.learnCompleted.includes(art.id) && !appState.unlockAllMode) {
    speakNova(
      `Hold on, Explorer! Complete ${art.name}'s Story & Hardware Archive first (click "Complete Story & Unlock Challenge" at the bottom) before entering the Verification Challenge!`
    );
    return;
  }

  appState.activeArtifactTab = tabName;
  document.getElementById("tab-btn-learn").classList.toggle("active", tabName === "learn");
  document.getElementById("tab-btn-challenge").classList.toggle("active", tabName === "challenge");

  document.getElementById("panel-artifact-learn").classList.toggle("hidden", tabName !== "learn");
  document.getElementById("panel-artifact-challenge").classList.toggle("hidden", tabName !== "challenge");
}

/* =========================================================================
   VERIFICATION CHALLENGE & FACT VS. MYTH DECODER
   ========================================================================= */
function renderChallengePanel(art) {
  const box = document.getElementById("challenge-content-box");
  const isCompleted = appState.quizCompleted.includes(art.id);

  const optionsHtml = art.quiz.options
    .map(
      (opt, idx) => `
      <button
        class="quiz-option-btn"
        id="quiz-opt-${art.id}-${idx}"
        onclick="submitArtifactQuiz(${art.id}, ${idx})"
      >
        <strong>${String.fromCharCode(65 + idx)}.</strong> ${opt}
      </button>
    `
    )
    .join("");

  box.innerHTML = `
    <span class="section-eyebrow">ARCHIVE VERIFICATION CHALLENGE • ${art.name.toUpperCase()}</span>
    <h3 style="font-family:'Orbitron',sans-serif;font-size:1.3rem;margin:0.35rem 0 1rem;color:#fff;">
      ${art.quiz.question}
    </h3>
    <div>${optionsHtml}</div>
    <div id="quiz-feedback-${art.id}" class="hidden" style="margin-top:1rem;padding:1rem;border-radius:10px;"></div>

    <!-- Fact vs. Space Myth Check -->
    <div class="myth-decoder-card">
      <span class="layer-badge-creative">🕵️ FACT VS. POPULAR SPACE MYTH DECODER</span>
      <p style="margin-top:0.65rem;font-size:0.95rem;color:#fff;">
        <strong>Popular Claim:</strong> "${art.mythCheck.claim}"
      </p>
      <p style="margin-top:0.45rem;font-size:0.88rem;color:#bae6fd;">
        <strong>Verified Archive Verdict:</strong> ${art.mythCheck.truthExplanation}
      </p>
    </div>

    ${
      isCompleted
        ? `<div style="margin-top:1.25rem;display:flex;justify-content:flex-end;">
             <button class="btn-primary-glow" onclick="proceedAfterArtifact(${art.id})">
               Continue Journey →
             </button>
           </div>`
        : ""
    }
  `;
}

function submitArtifactQuiz(artifactId, chosenIndex) {
  const art = ARTIFACTS_DATA.find((a) => a.id === artifactId);
  if (!art) return;

  const feedbackEl = document.getElementById(`quiz-feedback-${artifactId}`);
  feedbackEl.classList.remove("hidden");

  art.quiz.options.forEach((_, idx) => {
    const btn = document.getElementById(`quiz-opt-${artifactId}-${idx}`);
    if (btn) btn.classList.remove("correct-choice", "wrong-choice");
  });

  const chosenBtn = document.getElementById(`quiz-opt-${artifactId}-${chosenIndex}`);

  if (chosenIndex === art.quiz.correctIndex) {
    if (chosenBtn) chosenBtn.classList.add("correct-choice");
    const firstTime = !appState.quizCompleted.includes(artifactId);
    if (firstTime) {
      appState.quizCompleted.push(artifactId);
      appState.xp += 100;
      autosaveProgress();
    }

    feedbackEl.style.background = "rgba(34, 197, 94, 0.18)";
    feedbackEl.style.border = "1px solid #22c55e";
    feedbackEl.innerHTML = `
      <strong style="color:#86efac;display:block;margin-bottom:0.35rem;">
        🎉 Archive Verified! Badge Earned: ${art.badgeIcon} ${art.badgeTitle}
      </strong>
      <p style="font-size:0.88rem;color:#e2e8f0;margin-bottom:0.85rem;">${art.quiz.explanation}</p>
      <button class="btn-primary-glow" onclick="proceedAfterArtifact(${artifactId})">
        ${artifactId < 7 ? `Continue to Artifact 0${artifactId + 1} →` : "🌌 Enter the Final Mission →"}
      </button>
    `;

    const chap = CHAPTERS_META.find((c) => c.id === art.chapterId);
    const isLastInChapter = ARTIFACTS_DATA.filter((a) => a.chapterId === art.chapterId).slice(-1)[0].id === artifactId;
    speakNova(
      isLastInChapter
        ? `${art.quiz.explanation} ${chap.transitionOut}`
        : `${art.quiz.explanation} Badge unlocked: ${art.badgeTitle}!`
    );
  } else {
    if (chosenBtn) chosenBtn.classList.add("wrong-choice");
    feedbackEl.style.background = "rgba(239, 68, 68, 0.18)";
    feedbackEl.style.border = "1px solid #ef4444";
    feedbackEl.innerHTML = `
      <strong style="color:#fca5a5;">Not quite, Junior Archivist!</strong>
      <p style="font-size:0.86rem;color:#fecaca;margin-top:0.25rem;">
        Review the verified NASA record in the Story tab and try another answer.
      </p>
    `;
    speakNova("Not quite! Check the verified hardware record and try another option.");
  }
}

function proceedAfterArtifact(artifactId) {
  if (artifactId < 7) {
    openArtifactStory(artifactId + 1);
  } else {
    navigateTo("final");
  }
}

function speakEchoLog(artifactId) {
  const art = ARTIFACTS_DATA.find((a) => a.id === artifactId);
  if (art) {
    speakNova(`${art.name} Echo Log: "${art.echoLog}"`);
  }
}

/* =========================================================================
   FINAL MISSION VIEW (Legacy Epilogue + Hardware Status Sort)
   ========================================================================= */
function renderFinalMissionView() {
  const container = document.getElementById("final-mission-content");
  if (!container) return;

  const sortCardsHtml = FINAL_SORT_ITEMS.map(
    (item) => `
      <div class="sort-item-card">
        <strong style="color:#fff;font-size:0.95rem;">${item.hardware}</strong>
        <p style="font-size:0.76rem;color:#94a3b8;margin:0.25rem 0;">${item.hint}</p>
        <select class="sort-select" id="select-${item.id}">
          <option value="">-- Select Official 2026 Status Classification --</option>
          <option value="active_interstellar">Active Powered Spacecraft in Interstellar Space</option>
          <option value="passive_optical">Passive Surface Instrument (No Power Needed, Still Used)</option>
          <option value="grounded_logging">Grounded Aircraft Logging Local Telemetry in Memory</option>
          <option value="inactive_surface">Inactive Surface Hardware Resting on Moon / Mars / Titan</option>
          <option value="vaporized_protection">Deliberately Vaporized in Saturn for Planetary Protection</option>
        </select>
      </div>
    `
  ).join("");

  container.innerHTML = `
    <div class="story-act-card" style="border-color:var(--amber-glow);">
      <span class="section-eyebrow">FINAL SCENE • CLOSING THE DEEP SPACE HERITAGE ARCHIVE</span>
      <h2 style="font-family:'Orbitron',sans-serif;font-size:1.75rem;margin:0.35rem 0 0.9rem;color:#fff;">
        🌌 The Legacy of Space Exploration
      </h2>
      <blockquote class="echo-quote-text" style="border-left-color:var(--amber-glow);">
        "And just like that, explorer, our journey across the Deep Space Heritage Archive comes together. We've visited the Moon, driven and flown across Mars, and traveled beyond the outer planets into interstellar space. Some machines stopped working when their batteries froze or dust covered their wings. One plunged into Saturn's golden clouds to protect icy ocean moons. One bounces green laser pulses back to Earth without a single battery, and another is crossing the one-light-day mark between the stars. Human exploration does not end when a machine stops working. Their missions may end—their stories do not!"
      </blockquote>
      <button class="btn-secondary-glass" onclick="speakNova('Human exploration does not end when a machine stops working. Every bolt, mirror, wheel, and antenna left across the Solar System is a permanent bookmark in humanity\\'s story. Their missions may end. Their stories do not!')">
        🔊 Hear Captain Nova's Final Transmission
      </button>
    </div>

    <div class="story-act-card">
      <span class="section-eyebrow">FINAL ARCHIVIST CERTIFICATION ACTIVITY</span>
      <h3 style="font-family:'Orbitron',sans-serif;font-size:1.25rem;margin:0.3rem 0 0.5rem;color:#fff;">
        🛰️ Solar System Hardware Status Sort
      </h3>
      <p style="font-size:0.88rem;color:#cbd5e1;">
        Match each group of hardware from our three chapters to its verified 2026 operational classification to claim your <strong>Master Heritage Archivist Medal</strong>!
      </p>
      <div class="status-sort-grid">${sortCardsHtml}</div>
      <div id="final-sort-feedback" class="hidden" style="margin-top:1rem;padding:1rem;border-radius:10px;"></div>
      <div style="margin-top:1.25rem;display:flex;gap:0.85rem;flex-wrap:wrap;">
        <button class="btn-primary-glow" onclick="verifyFinalMissionSort()">
          🏅 Verify Classifications &amp; Claim Final Legacy Medal
        </button>
        <button class="btn-secondary-glass" onclick="navigateTo('badges')">
          🏅 View My Badges &amp; Echo Threads Vault
        </button>
      </div>
    </div>
  `;
}

function verifyFinalMissionSort() {
  let correctCount = 0;
  FINAL_SORT_ITEMS.forEach((item) => {
    const sel = document.getElementById(`select-${item.id}`);
    if (sel && sel.value === item.correctCategory) {
      correctCount++;
      sel.style.borderColor = "#22c55e";
    } else if (sel) {
      sel.style.borderColor = "#ef4444";
    }
  });

  const feedback = document.getElementById("final-sort-feedback");
  feedback.classList.remove("hidden");

  if (correctCount === FINAL_SORT_ITEMS.length) {
    if (!appState.finalMissionCompleted) {
      appState.finalMissionCompleted = true;
      appState.xp += 250;
      autosaveProgress();
    }
    feedback.style.background = "rgba(34, 197, 94, 0.2)";
    feedback.style.border = "1px solid #22c55e";
    feedback.innerHTML = `
      <strong style="color:#86efac;font-size:1rem;">
        🏆 Master Heritage Archivist Certified! (5/5 Correct)
      </strong>
      <p style="color:#e2e8f0;font-size:0.88rem;margin:0.35rem 0 0.75rem;">
        You have mastered the science, engineering, and present-day legacy of NASA's Solar System hardware and unlocked the <strong>Final Legacy Medal</strong>!
      </p>
      <button class="btn-primary-glow" onclick="navigateTo('badges')">
        🏅 Open My Badges Vault →
      </button>
    `;
    speakNova(
      "Congratulations, Master Archivist! You sorted every piece of Solar System hardware accurately and earned the Final Legacy of Space Exploration Medal!"
    );
  } else {
    feedback.style.background = "rgba(245, 158, 11, 0.18)";
    feedback.style.border = "1px solid #f59e0b";
    feedback.innerHTML = `
      <strong style="color:#fde68a;">You matched ${correctCount} of ${FINAL_SORT_ITEMS.length} classifications!</strong>
      <p style="color:#e2e8f0;font-size:0.85rem;margin-top:0.25rem;">
        Check the boxes highlighted in red using the hints on each card and click Verify again.
      </p>
    `;
    speakNova(`You matched ${correctCount} out of 5 hardware classifications. Check the red boxes and try again!`);
  }
}

/* =========================================================================
   DEDICATED "MY BADGES & ECHO THREADS" PAGE
   ========================================================================= */
function renderBadgesVault() {
  const badgesGrid = document.getElementById("badges-grid");
  const threadsGrid = document.getElementById("echo-threads-grid");
  if (!badgesGrid || !threadsGrid) return;

  const earnedArtifacts = appState.quizCompleted.length;
  const totalBadges = earnedArtifacts + (appState.finalMissionCompleted ? 1 : 0);

  let rankTitle = "Cadet Archivist";
  if (totalBadges >= 8) rankTitle = "Master Solar System Archivist";
  else if (totalBadges >= 5) rankTitle = "Senior Deep Space Curator";
  else if (totalBadges >= 2) rankTitle = "Planetary Field Specialist";

  document.getElementById("vault-rank-title").textContent = rankTitle;
  document.getElementById("vault-badges-ratio").textContent = `${totalBadges} / 8`;

  const unlockedThreadsCount = ECHO_THREADS_DATA.filter((t) =>
    t.requiredArtifacts.every((reqId) => appState.quizCompleted.includes(reqId))
  ).length;
  document.getElementById("vault-threads-ratio").textContent = `${unlockedThreadsCount} / 3`;

  /* 7 Artifact Badges + 1 Final Legacy Medal */
  const artifactBadgeCards = ARTIFACTS_DATA.map((art) => {
    const earned = appState.quizCompleted.includes(art.id);
    return `
      <div class="badge-vault-card ${earned ? "earned" : "locked"}">
        <div class="badge-emblem-circle">${art.badgeIcon}</div>
        <span class="section-eyebrow">ARTIFACT 0${art.id}</span>
        <h4 style="font-family:'Orbitron',sans-serif;margin:0.25rem 0;color:#fff;">${art.badgeTitle}</h4>
        <p style="font-size:0.8rem;color:#cbd5e1;margin-bottom:0.5rem;">${art.name} — "${art.subtitle}"</p>
        <span class="node-status-pill ${earned ? "status-restored" : "status-locked"}">
          ${earned ? "✓ EARNED" : "🔒 COMPLETE CHALLENGE TO UNLOCK"}
        </span>
      </div>
    `;
  }).join("");

  const finalMedalCard = `
    <div class="badge-vault-card ${appState.finalMissionCompleted ? "earned" : "locked"}">
      <div class="badge-emblem-circle">🌌</div>
      <span class="section-eyebrow">FINAL MISSION MEDAL</span>
      <h4 style="font-family:'Orbitron',sans-serif;margin:0.25rem 0;color:#fff;">Master of Mission Echoes</h4>
      <p style="font-size:0.8rem;color:#cbd5e1;margin-bottom:0.5rem;">Completed the Hardware Status Sort in the Final Mission.</p>
      <span class="node-status-pill ${appState.finalMissionCompleted ? "status-restored" : "status-locked"}">
        ${appState.finalMissionCompleted ? "✓ EARNED" : "🔒 COMPLETE FINAL MISSION"}
      </span>
    </div>
  `;

  badgesGrid.innerHTML = artifactBadgeCards + finalMedalCard;

  /* 3 Echo Threads Cards */
  threadsGrid.innerHTML = ECHO_THREADS_DATA.map((thread) => {
    const unlocked = thread.requiredArtifacts.every((id) => appState.quizCompleted.includes(id));
    return `
      <div class="echo-thread-card ${unlocked ? "" : "locked"}">
        <span class="layer-badge-creative">${unlocked ? "🔗 ECHO THREAD UNLOCKED" : "🔒 COMPLETE LINKED MISSIONS"}</span>
        <h4 style="font-family:'Orbitron',sans-serif;font-size:1.05rem;color:#fff;margin:0.55rem 0 0.2rem;">
          ${thread.title}
        </h4>
        <div style="font-family:'JetBrains Mono',monospace;font-size:0.75rem;color:var(--amber-glow);margin-bottom:0.5rem;">
          ${thread.fromTo}
        </div>
        <p style="font-size:0.85rem;color:#e2e8f0;line-height:1.5;">
          ${thread.description}
        </p>
      </div>
    `;
  }).join("");
}

/* =========================================================================
   STRICT AUTHENTICATION (Sign In / Sign Up, Occupied Check, Password Regex)
   ========================================================================= */
let currentAuthMode = "signin"; // 'signin' | 'signup'

function openAuthModal(mode = "signin") {
  document.getElementById("auth-modal-backdrop").classList.remove("hidden");
  switchAuthMode(mode);
}

function closeAuthModal() {
  document.getElementById("auth-modal-backdrop").classList.add("hidden");
}

function switchAuthMode(mode) {
  currentAuthMode = mode;
  document.getElementById("tab-signin").classList.toggle("active", mode === "signin");
  document.getElementById("tab-signup").classList.toggle("active", mode === "signup");

  document.getElementById("auth-modal-title").textContent =
    mode === "signin" ? "Sign In to Mission Echoes" : "Create New Archivist ID";
  document.getElementById("auth-modal-subtitle").textContent =
    mode === "signin"
      ? "Enter your registered username and password. Unregistered accounts will not be logged in."
      : "Choose a unique username (1–20 chars) and strong password (8–20 chars) to enable Autosave.";
  document.getElementById("btn-auth-submit").textContent =
    mode === "signin" ? "Sign In & Load Archive" : "Register & Autosave Progress";

  hideAuthAlert();
  document.getElementById("username-suggestions-box").classList.add("hidden");
  validateAuthInputsLive();
}

function showAuthAlert(msg) {
  const box = document.getElementById("auth-alert-box");
  box.textContent = msg;
  box.classList.remove("hidden");
}

function hideAuthAlert() {
  const box = document.getElementById("auth-alert-box");
  box.classList.add("hidden");
}

function isUsernameOccupied(usernameRaw) {
  const clean = usernameRaw.trim().toLowerCase();
  if (!clean) return false;
  if (PRE_OCCUPIED_USERNAMES.includes(clean)) return true;
  const accounts = getStoredAccounts();
  return Boolean(accounts[clean]);
}

function generateAvailableSuggestions(baseName) {
  const cleanBase = baseName.replace(/[^a-zA-Z0-9_]/g, "").slice(0, 13) || "Explorer";
  const candidates = [
    `${cleanBase}_2026`,
    `${cleanBase}Nova`,
    `Astro_${cleanBase}`,
    `${cleanBase}_77`
  ];
  return candidates
    .map((c) => c.slice(0, 20))
    .filter((c) => !isUsernameOccupied(c))
    .slice(0, 3);
}

function applySuggestedUsername(suggested) {
  const input = document.getElementById("auth-username");
  input.value = suggested;
  document.getElementById("username-suggestions-box").classList.add("hidden");
  hideAuthAlert();
  validateAuthInputsLive();
}

function validatePasswordConstraints(pw) {
  return {
    len: pw.length >= 8 && pw.length <= 20,
    upper: /[A-Z]/.test(pw),
    num: /[0-9]/.test(pw),
    sym: /[^A-Za-z0-9]/.test(pw)
  };
}

function validateAuthInputsLive() {
  const userEl = document.getElementById("auth-username");
  const passEl = document.getElementById("auth-password");
  if (!userEl || !passEl) return;

  const uVal = userEl.value;
  const pVal = passEl.value;

  document.getElementById("username-char-count").textContent = `${uVal.length} / 20`;
  document.getElementById("password-char-count").textContent = `${pVal.length} / 20`;

  const rules = validatePasswordConstraints(pVal);
  const updateRuleRow = (id, met, label) => {
    const li = document.getElementById(id);
    if (!li) return;
    li.classList.toggle("rule-met", met);
    li.innerHTML = `<span>${met ? "✓" : "○"}</span> ${label}`;
  };
  updateRuleRow("rule-len", rules.len, "8 to 20 characters long");
  updateRuleRow("rule-upper", rules.upper, "At least 1 uppercase letter (A–Z)");
  updateRuleRow("rule-num", rules.num, "At least 1 number (0–9)");
  updateRuleRow("rule-sym", rules.sym, "At least 1 symbol (!@#$%^&* etc.)");

  /* Live occupied username check during Sign Up */
  if (currentAuthMode === "signup" && uVal.trim().length >= 1) {
    if (isUsernameOccupied(uVal)) {
      const suggestions = generateAvailableSuggestions(uVal.trim());
      const sugBox = document.getElementById("username-suggestions-box");
      const chipsEl = document.getElementById("username-suggestion-chips");
      sugBox.classList.remove("hidden");
      chipsEl.innerHTML = suggestions
        .map(
          (s) =>
            `<button type="button" class="suggestion-chip" onclick="applySuggestedUsername('${s}')">${s}</button>`
        )
        .join("");
    } else {
      document.getElementById("username-suggestions-box").classList.add("hidden");
    }
  }
}

function handleAuthSubmit(event) {
  event.preventDefault(); // Prevents page reload / "Site can't be reached"
  hideAuthAlert();

  const username = document.getElementById("auth-username").value.trim();
  const password = document.getElementById("auth-password").value;

  /* 1. Validate Username Length (1-20 chars) */
  if (username.length < 1 || username.length > 20) {
    showAuthAlert("Username must be between 1 and 20 characters long.");
    return;
  }

  /* 2. Validate Password Rules (8-20 chars, 1 uppercase, 1 number, 1 symbol) */
  const pwRules = validatePasswordConstraints(password);
  if (!pwRules.len || !pwRules.upper || !pwRules.num || !pwRules.sym) {
    showAuthAlert(
      "Password must be 8–20 characters and include at least 1 uppercase letter, 1 number, and 1 symbol."
    );
    return;
  }

  const accounts = getStoredAccounts();
  const key = username.toLowerCase();

  if (currentAuthMode === "signup") {
    if (isUsernameOccupied(username)) {
      const suggestions = generateAvailableSuggestions(username);
      const sugBox = document.getElementById("username-suggestions-box");
      const chipsEl = document.getElementById("username-suggestion-chips");
      sugBox.classList.remove("hidden");
      chipsEl.innerHTML = suggestions
        .map(
          (s) =>
            `<button type="button" class="suggestion-chip" onclick="applySuggestedUsername('${s}')">${s}</button>`
        )
        .join("");
      showAuthAlert(`Username "${username}" is already occupied! Please pick one of the suggested available IDs.`);
      return;
    }

    /* Create new account and autosave current progress */
    accounts[key] = {
      displayName: username,
      password: password,
      progress: {
        learnCompleted: appState.learnCompleted,
        quizCompleted: appState.quizCompleted,
        visitedBeatsByArtifact: appState.visitedBeatsByArtifact,
        finalMissionCompleted: appState.finalMissionCompleted,
        xp: appState.xp
      }
    };
    saveStoredAccounts(accounts);
    completeLoginSession(username);
  } else {
    /* SIGN IN MODE: Strictly reject fake/unregistered accounts and STAY inside modal */
    if (!accounts[key]) {
      showAuthAlert(
        `Account "${username}" not found! Fake or unregistered logins are blocked. Please check your spelling or switch to "Create Archivist ID" to sign up first.`
      );
      return;
    }
    if (accounts[key].password !== password) {
      showAuthAlert("Incorrect security passcode for this Archivist ID. Please try again.");
      return;
    }

    /* Load saved progress */
    const saved = accounts[key].progress || {};
    appState.learnCompleted = saved.learnCompleted || [];
    appState.quizCompleted = saved.quizCompleted || [];
    appState.visitedBeatsByArtifact = saved.visitedBeatsByArtifact || {};
    appState.finalMissionCompleted = Boolean(saved.finalMissionCompleted);
    appState.xp = saved.xp || 0;

    completeLoginSession(accounts[key].displayName);
  }
}

function completeLoginSession(displayName) {
  appState.currentUser = displayName;
  document.getElementById("auth-guest-zone").classList.add("hidden");
  document.getElementById("auth-user-zone").classList.remove("hidden");
  document.getElementById("active-username-label").textContent = displayName;

  closeAuthModal();
  updateTopHud();
  if (appState.currentView === "map") renderSolarSystemMap();
  if (appState.currentView === "badges") renderBadgesVault();

  speakNova(`Welcome aboard, Archivist ${displayName}! Your Mission Echoes profile and autosave link are online.`);
}

function handleLogout() {
  autosaveProgress();
  appState.currentUser = null;
  document.getElementById("auth-guest-zone").classList.remove("hidden");
  document.getElementById("auth-user-zone").classList.add("hidden");
  speakNova("You have signed out safely. Your progress has been saved to your Archivist ID.");
}

/* =========================================================================
   CAPTAIN NOVA ANIMATED ASTRONAUT & WEB SPEECH SYNTHESIS
   ========================================================================= */
function speakNova(text) {
  appState.lastNovaText = text;
  const textEl = document.getElementById("nova-speech-text");
  const bubble = document.getElementById("nova-speech-bubble");
  if (textEl) textEl.textContent = `"${text}"`;
  if (bubble) bubble.classList.remove("hidden");

  if (appState.voiceMuted || !("speechSynthesis" in window)) return;

  try {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1.02;
    utter.pitch = 1.05;

    const dock = document.querySelector(".nova-companion-dock");
    const eq = document.getElementById("nova-equalizer");

    utter.onstart = () => {
      if (dock) dock.classList.add("is-speaking");
      if (eq) eq.classList.add("speaking");
    };
    utter.onend = () => {
      if (dock) dock.classList.remove("is-speaking");
      if (eq) eq.classList.remove("speaking");
    };
    utter.onerror = () => {
      if (dock) dock.classList.remove("is-speaking");
      if (eq) eq.classList.remove("speaking");
    };

    window.speechSynthesis.speak(utter);
  } catch (e) {
    console.warn("Speech synthesis unavailable:", e);
  }
}

function triggerNovaIntro() {
  speakNova(CAPTAIN_NOVA_OPENING);
}

function replayNovaSpeech() {
  speakNova(appState.lastNovaText || CAPTAIN_NOVA_OPENING);
}

function toggleNovaVoice() {
  appState.voiceMuted = !appState.voiceMuted;
  const btn = document.getElementById("btn-nova-mute");
  if (btn) btn.textContent = appState.voiceMuted ? "🔇" : "🔊";
  if (appState.voiceMuted && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    document.querySelector(".nova-companion-dock")?.classList.remove("is-speaking");
    document.getElementById("nova-equalizer")?.classList.remove("speaking");
  } else {
    replayNovaSpeech();
  }
}

function minimizeNovaBubble() {
  document.getElementById("nova-speech-bubble")?.classList.add("hidden");
}

function toggleNovaBubble() {
  const bubble = document.getElementById("nova-speech-bubble");
  if (!bubble) return;
  const wasHidden = bubble.classList.contains("hidden");
  bubble.classList.toggle("hidden");
  if (wasHidden) replayNovaSpeech();
}

/* =========================================================================
   MULTI-LAYERED COSMIC BACKGROUND CANVAS (Nebulae, Stars, Shooting Stars, Planets)
   ========================================================================= */
function initCosmosCanvas() {
  const canvas = document.getElementById("cosmos-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const stars = Array.from({ length: 160 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.8 + 0.4,
    alpha: Math.random(),
    dAlpha: (Math.random() * 0.015 + 0.004) * (Math.random() < 0.5 ? 1 : -1),
    hue: Math.random() < 0.25 ? "#38bdf8" : Math.random() < 0.4 ? "#fde68a" : "#ffffff"
  }));

  let shootingStar = null;

  function spawnShootingStar() {
    shootingStar = {
      x: Math.random() * width * 0.7,
      y: Math.random() * height * 0.35,
      vx: 9 + Math.random() * 5,
      vy: 4 + Math.random() * 3,
      len: 85,
      life: 1.0
    };
  }

  let tick = 0;
  function animate() {
    tick += 0.004;
    ctx.clearRect(0, 0, width, height);

    /* 1. Deep Nebula Gradients */
    const neb1 = ctx.createRadialGradient(width * 0.18, height * 0.25, 20, width * 0.18, height * 0.25, width * 0.42);
    neb1.addColorStop(0, "rgba(56, 189, 248, 0.11)");
    neb1.addColorStop(0.5, "rgba(88, 28, 135, 0.07)");
    neb1.addColorStop(1, "transparent");
    ctx.fillStyle = neb1;
    ctx.fillRect(0, 0, width, height);

    const neb2 = ctx.createRadialGradient(width * 0.82, height * 0.72, 20, width * 0.82, height * 0.72, width * 0.38);
    neb2.addColorStop(0, "rgba(245, 158, 11, 0.08)");
    neb2.addColorStop(0.6, "rgba(30, 58, 138, 0.08)");
    neb2.addColorStop(1, "transparent");
    ctx.fillStyle = neb2;
    ctx.fillRect(0, 0, width, height);

    /* 2. Twinkling Multi-Depth Stars */
    stars.forEach((s) => {
      s.alpha += s.dAlpha;
      if (s.alpha > 1 || s.alpha < 0.15) s.dAlpha *= -1;
      ctx.globalAlpha = Math.max(0.1, Math.min(1, s.alpha));
      ctx.fillStyle = s.hue;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    /* 3. Rendered Planetary Silhouettes (Moon, Mars, Ringed Saturn) */
    // The Moon (top-left)
    const moonX = width * 0.08 + Math.sin(tick) * 8;
    const moonY = height * 0.18 + Math.cos(tick) * 6;
    const moonGrad = ctx.createRadialGradient(moonX - 8, moonY - 8, 4, moonX, moonY, 26);
    moonGrad.addColorStop(0, "#e2e8f0");
    moonGrad.addColorStop(1, "#334155");
    ctx.fillStyle = moonGrad;
    ctx.beginPath();
    ctx.arc(moonX, moonY, 26, 0, Math.PI * 2);
    ctx.fill();

    // Mars (bottom-left)
    const marsX = width * 0.12 + Math.cos(tick * 0.8) * 10;
    const marsY = height * 0.82 + Math.sin(tick * 0.8) * 8;
    const marsGrad = ctx.createRadialGradient(marsX - 6, marsY - 6, 3, marsX, marsY, 22);
    marsGrad.addColorStop(0, "#fb923c");
    marsGrad.addColorStop(1, "#7c2d12");
    ctx.fillStyle = marsGrad;
    ctx.beginPath();
    ctx.arc(marsX, marsY, 22, 0, Math.PI * 2);
    ctx.fill();

    // Ringed Saturn (top-right)
    const satX = width * 0.89 + Math.sin(tick * 0.6) * 10;
    const satY = height * 0.22 + Math.cos(tick * 0.6) * 6;
    ctx.save();
    ctx.translate(satX, satY);
    ctx.rotate(-0.32);
    ctx.strokeStyle = "rgba(253, 230, 138, 0.35)";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.ellipse(0, 0, 52, 14, 0, 0, Math.PI * 2);
    ctx.stroke();
    const satGrad = ctx.createRadialGradient(-6, -6, 4, 0, 0, 24);
    satGrad.addColorStop(0, "#fde68a");
    satGrad.addColorStop(1, "#92400e");
    ctx.fillStyle = satGrad;
    ctx.beginPath();
    ctx.arc(0, 0, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    /* 4. Shooting Stars */
    if (!shootingStar && Math.random() < 0.008) {
      spawnShootingStar();
    }
    if (shootingStar) {
      ctx.strokeStyle = `rgba(255, 255, 255, ${shootingStar.life})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(shootingStar.x, shootingStar.y);
      ctx.lineTo(shootingStar.x - shootingStar.len, shootingStar.y - shootingStar.len * 0.45);
      ctx.stroke();
      shootingStar.x += shootingStar.vx;
      shootingStar.y += shootingStar.vy;
      shootingStar.life -= 0.022;
      if (shootingStar.life <= 0) shootingStar = null;
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* =========================================================================
   INITIALIZATION ON DOM LOAD
   ========================================================================= */
window.addEventListener("DOMContentLoaded", () => {
  initCosmosCanvas();
  updateTopHud();
  renderSolarSystemMap();
  /* Captain Nova automatically introduces himself on startup */
  setTimeout(() => {
    speakNova(CAPTAIN_NOVA_OPENING);
  }, 600);
});