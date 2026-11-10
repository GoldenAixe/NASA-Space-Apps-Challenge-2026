/****************************************************************************
 * FILE 3 OF 3 (JAVASCRIPT): app.js
 ****************************************************************************/

export const MISSIONS_CONFIG = [
  {
    id: "level-1-moon",
    order: 1,
    title: "Chapter 1: The Moon — Moon Explorer",
    shortName: "The Moon",
    sectorName: "Chapter 1 • Earth's Moon",
    mapCoords: { x: 18, y: 65 },
    themeColor: "#38BDF8",
    iconClass: "fa-solid fa-moon",
    hardwareName: "Lunar Reconnaissance Orbiter (LRO) & Apollo Surface Relics",
    missionStatus: "Still Active in Orbit!",
    statusType: "operational",
    launchYear: "2009 (LRO) / 1969–1972 (Apollo)",
    summary:
      "Discover how NASA's Lunar Reconnaissance Orbiter maps the Moon in 3D and takes photos of footprints and rovers left behind by Apollo astronauts!",
    robotIntro:
      "BEEP-BOOP! First stop: Earth's Moon! Did you know there are still rovers, mirrors, and spacecraft working on and around the Moon right now?",
    lessons: [
      {
        slideTitle: "Meet the Lunar Reconnaissance Orbiter (LRO)",
        content:
          "Launched in 2009, the Lunar Reconnaissance Orbiter (LRO) is a robotic spacecraft that orbits the Moon from pole to pole. Its main purpose is to create a high-resolution 3D map of the lunar surface and find safe landing sites for future astronauts.",
        highlightFact:
          "LRO's cameras are so sharp they can see the footprints and rover tracks left by Apollo astronauts over 50 years ago!",
        assetPlaceholderLabel:
          "[PLACEHOLDER: Insert Official NASA LRO Spacecraft Illustration / Photo - Asset ID: MOON_LRO_01]",
        assetUrl: "",
        svgType: "orbiter",
      },
      {
        slideTitle: "Searching for Water Ice in Shadowed Craters",
        content:
          "Some deep craters near the Moon's South Pole never receive sunlight. They are among the coldest places in the solar system! LRO carries instruments that discovered frozen water ice hidden inside these permanently shadowed craters.",
        highlightFact:
          "Future lunar explorers could melt and filter this lunar ice for drinking water, breathable oxygen, and even rocket fuel!",
        assetPlaceholderLabel:
          "[PLACEHOLDER: Insert NASA South Pole Crater Map Image - Asset ID: MOON_CRATER_02]",
        assetUrl: "",
        svgType: "crater",
      },
      {
        slideTitle: "Apollo Hardware Still Working on the Moon",
        content:
          "Even after astronauts returned home, they left behind laser mirrors called 'Retroreflectors'. Scientists on Earth still bounce laser beams off these mirrors today to measure the exact distance to the Moon within millimeters!",
        highlightFact:
          "Thanks to Apollo retroreflectors, we discovered the Moon is slowly drifting away from Earth by about 3.8 centimeters every year.",
        assetPlaceholderLabel:
          "[PLACEHOLDER: Insert Apollo 11 Laser Retroreflector Photo - Asset ID: MOON_APOLLO_03]",
        assetUrl: "",
        svgType: "reflector",
      },
    ],
    questions: [
      {
        id: "q1-moon",
        type: "multiple-choice",
        prompt:
          "What is the primary job of NASA's Lunar Reconnaissance Orbiter (LRO)?",
        options: [
          "To bring lunar rocks back to Earth inside a capsule",
          "To orbit the Moon, create detailed 3D maps, and locate resources like water ice",
          "To drill deep tunnels underneath the Moon's volcanoes",
          "To push asteroids away from Earth's orbit",
        ],
        correctIndex: 1,
        hint: "Think about its name: 'Reconnaissance Orbiter'—it scouts and maps the surface from orbit!",
        explanation:
          "Correct! LRO orbits the Moon to map its surface in 3D, spot water ice in shadowed craters, and scout safe landing zones.",
      },
      {
        id: "q2-moon",
        type: "true-false",
        prompt:
          "True or False: The Lunar Reconnaissance Orbiter is still operational and sending scientific data back to Earth today.",
        options: ["True", "False"],
        correctIndex: 0,
        hint: "Check the Verified Mission Status badge at the top of this mission briefing!",
        explanation:
          "Spot on! Launched in 2009, LRO continues to operate in lunar orbit, making it one of NASA's longest-serving lunar scouts.",
      },
      {
        id: "q3-moon",
        type: "multiple-choice",
        prompt:
          "How do Apollo laser retroreflectors left on the Moon still help scientists today?",
        options: [
          "They charge solar batteries for passing satellites",
          "They broadcast radio music to deep space",
          "Scientists bounce laser beams off them to measure the exact distance to the Moon",
          "They predict lunar weather storms",
        ],
        correctIndex: 2,
        hint: "A reflector bounces light back to where it came from!",
        explanation:
          "Awesome job! By timing how long a laser pulse takes to bounce back from the Moon, scientists found the Moon moves 3.8 cm away each year.",
      },
    ],
    badge: {
      id: "badge-moon-explorer",
      name: "Moon Explorer",
      icon: "fa-solid fa-moon",
      color: "from-sky-400 to-blue-600",
      description:
        "Mastered how NASA orbiters and Apollo surface instruments study Earth's Moon.",
    },
    factCard: {
      id: "fact-moon-01",
      title: "Footprints That Last Millions of Years",
      category: "Lunar Science",
      summary:
        "Because the Moon has no wind or rain, the rover tracks and astronaut bootprints photographed by LRO will stay preserved for millions of years!",
      sourceLabel: "NASA Lunar Reconnaissance Orbiter Mission Archive",
      placeholderAsset:
        "[PLACEHOLDER: Insert LRO Apollo Landing Site Overhead Photo - Asset ID: FACT_MOON_IMG]",
    },
  },
  {
    id: "level-2-mars",
    order: 2,
    title: "Chapter 2: Mars — Mars Detective",
    shortName: "Mars",
    sectorName: "Chapter 2 • The Red Planet",
    mapCoords: { x: 42, y: 35 },
    themeColor: "#FB7185",
    iconClass: "fa-solid fa-truck-monster",
    hardwareName: "Opportunity Rover (MER-B)",
    missionStatus: "Mission Completed (2004–2018)",
    statusType: "lost-contact",
    launchYear: "2003 (Landed Jan 2004)",
    summary:
      "Investigate how a golf-cart-sized Mars rover built to last just 90 days explored the Red Planet for almost 15 years!",
    robotIntro:
      "WHEELS ENGAGED! Welcome to Mars! My robotic cousin, the Opportunity rover, holds one of the greatest adventure records in space history!",
    lessons: [
      {
        slideTitle: "The 90-Day Rover That Explored for 15 Years",
        content:
          "When NASA landed the Opportunity rover on Mars in January 2004, engineers planned its primary mission for 90 Martian days (sols). They worried Martian dust would quickly cover its solar panels. Instead, helpful Martian wind gusts cleaned the panels off again and again!",
        highlightFact:
          "Opportunity operated for 5,111 Martian days—almost 15 Earth years—and drove a marathon distance of 45.16 kilometers (28 miles)!",
        assetPlaceholderLabel:
          "[PLACEHOLDER: Insert NASA Opportunity Rover Self-Portrait / Illustration - Asset ID: MARS_OPPY_01]",
        assetUrl: "",
        svgType: "rover",
      },
      {
        slideTitle: "Clues in the Rocks: 'Blueberries' on Mars",
        content:
          "Like a robotic geologist, Opportunity used its panoramic cameras and robotic arm to inspect Martian rocks. It discovered thousands of tiny, round mineral spheres nicknamed 'blueberries' made of hematite.",
        highlightFact:
          "On Earth, hematite spheres like these form in wet environments—proving that liquid water once soaked the Martian surface and flowed across ancient Mars!",
        assetPlaceholderLabel:
          "[PLACEHOLDER: Insert Opportunity 'Martian Blueberries' Microscopic Image - Asset ID: MARS_ROCKS_02]",
        assetUrl: "",
        svgType: "rocks",
      },
      {
        slideTitle: "The Final Dust Storm & Lasting Legacy",
        content:
          "In June 2018, a gigantic planet-wide dust storm blanketed Mars and blocked out the Sun above Perseverance Valley. Opportunity went into low-power sleep mode and never woke up. NASA officially declared its mission complete in February 2019.",
        highlightFact:
          "Even though Opportunity is now silent on Mars, its discovery of ancient water paved the way for Curiosity and Perseverance to search for signs of ancient microbial life!",
        assetPlaceholderLabel:
          "[PLACEHOLDER: Insert Opportunity Perseverance Valley Panorama - Asset ID: MARS_VALLEY_03]",
        assetUrl: "",
        svgType: "storm",
      },
    ],
    questions: [
      {
        id: "q1-mars",
        type: "multiple-choice",
        prompt:
          "How long was Opportunity originally designed to operate on Mars, and how long did it actually last?",
        options: [
          "Designed for 10 years, lasted 1 year",
          "Designed for 90 Martian days, lasted nearly 15 years",
          "Designed for 2 days, lasted 2 weeks",
          "It is still driving around on Mars today",
        ],
        correctIndex: 1,
        hint: "Martian wind helped clean off its solar panels so it could outlive its 90-day warranty by many years!",
        explanation:
          "Incredible, right? Opportunity turned a 90-day mission into a 15-year marathon across the Martian plains!",
      },
      {
        id: "q2-mars",
        type: "multiple-choice",
        prompt:
          "What major scientific discovery did Opportunity make by studying mineral 'blueberries' and rock layers?",
        options: [
          "That Mars once had liquid water on its surface",
          "That Mars has active jungles hidden underground",
          "That Mars is made entirely of solid gold",
          "That Mars has thicker air than Earth",
        ],
        correctIndex: 0,
        hint: "Hematite spheres usually form where minerals are soaked in something wet!",
        explanation:
          "Correct! Opportunity proved that ancient Mars had liquid water that could have supported habitable environments.",
      },
      {
        id: "q3-mars",
        type: "true-false",
        prompt:
          "True or False: Opportunity stopped communicating with Earth in 2018 after a massive global dust storm blocked sunlight from reaching its solar panels.",
        options: ["True", "False"],
        correctIndex: 0,
        hint: "Remember how Opportunity generated its electricity!",
        explanation:
          "True! Without sunlight to recharge its batteries during the historic 2018 dust storm, Opportunity's mission came to a heroic rest.",
      },
    ],
    badge: {
      id: "badge-mars-detective",
      name: "Mars Detective",
      icon: "fa-solid fa-magnifying-glass-location",
      color: "from-rose-500 to-amber-500",
      description:
        "Uncovered the geological clues left by water on Mars with the Opportunity rover.",
    },
    factCard: {
      id: "fact-mars-02",
      title: "First Marathon Runner on Another Planet",
      category: "Martian Exploration",
      summary:
        "Opportunity drove 45.16 km (28.06 miles) across Mars—farther than any off-Earth wheeled vehicle in history!",
      sourceLabel: "NASA Mars Exploration Rover Archive",
      placeholderAsset:
        "[PLACEHOLDER: Insert Opportunity Odyssey Crater Track Map - Asset ID: FACT_MARS_IMG]",
    },
  },
  {
    id: "level-3-voyager",
    order: 3,
    title: "Chapter 3: Deep Space — Deep Space Traveler",
    shortName: "Deep Space",
    sectorName: "Chapter 3 • Beyond the Planets",
    mapCoords: { x: 68, y: 62 },
    themeColor: "#A855F7",
    iconClass: "fa-solid fa-satellite-dish",
    hardwareName: "Voyager 1 Interstellar Probe",
    missionStatus: "Active in Interstellar Space!",
    statusType: "operational",
    launchYear: "1977",
    summary:
      "Travel past Jupiter and Saturn with Voyager 1, the farthest human-made spacecraft in the universe!",
    robotIntro:
      "LONG-RANGE ANTENNA LOCKED! We are now over 24 billion kilometers from Earth! Out here between the stars flies Voyager 1—still sending messages home!",
    lessons: [
      {
        slideTitle: "The Grand Tour of the Giant Planets",
        content:
          "Launched in September 1977, Voyager 1 flew past Jupiter and Saturn using gravity-assist slingshots. It revealed active volcanoes on Jupiter's moon Io and studied the thick orange atmosphere of Saturn's moon Titan.",
        highlightFact:
          "In 1990, from 6 billion kilometers away, Voyager 1 turned its camera around and took the famous 'Pale Blue Dot' photo showing Earth as a tiny speck in a sunbeam!",
        assetPlaceholderLabel:
          "[PLACEHOLDER: Insert Voyager 1 Spacecraft & Pale Blue Dot Photo - Asset ID: DEEP_VOYAGER_01]",
        assetUrl: "",
        svgType: "voyager",
      },
      {
        slideTitle: "Crossing into Interstellar Space",
        content:
          "In August 2012, Voyager 1 made history by crossing the heliopause—the boundary where the Sun's solar wind gives way to the space between the stars. Because sunlight is way too faint out there, Voyager runs on nuclear heat generators (RTGs).",
        highlightFact:
          "Voyager 1 is so far away that its radio signals—traveling at the speed of light—take more than 22 hours just to reach NASA's Deep Space Network dishes on Earth!",
        assetPlaceholderLabel:
          "[PLACEHOLDER: Insert Heliopause / Interstellar Boundary Diagram - Asset ID: DEEP_HELIO_02]",
        assetUrl: "",
        svgType: "interstellar",
      },
      {
        slideTitle: "The Golden Record: A Time Capsule from Earth",
        content:
          "Bolted to Voyager 1's side is a 12-inch gold-plated copper phonograph record called the Golden Record. Chosen by a team led by Carl Sagan, it contains sounds of Earth (rain, whales, laughter), music, 115 images, and greetings in 55 languages.",
        highlightFact:
          "Long after Voyager's power runs out in the late 2020s or 2030s, the Golden Record will survive for over a billion years as a message from humanity!",
        assetPlaceholderLabel:
          "[PLACEHOLDER: Insert NASA Golden Record Cover Diagram - Asset ID: DEEP_RECORD_03]",
        assetUrl: "",
        svgType: "record",
      },
    ],
    questions: [
      {
        id: "q1-voyager",
        type: "multiple-choice",
        prompt:
          "What milestone made Voyager 1 the first spacecraft of its kind in 2012?",
        options: [
          "It landed on the surface of Pluto",
          "It crossed the heliopause into interstellar space (the space between stars)",
          "It flew directly into the Sun's corona",
          "It returned to Earth and landed in the ocean",
        ],
        correctIndex: 1,
        hint: "It traveled past all the planets and exited the Sun's magnetic bubble!",
        explanation:
          "Yes! Voyager 1 became the first human-made spacecraft to enter interstellar space in 2012.",
      },
      {
        id: "q2-voyager",
        type: "multiple-choice",
        prompt: "What is the 'Golden Record' carried aboard Voyager 1?",
        options: [
          "A trophy for driving the fastest on Mars",
          "A gold solar panel that reflects sunlight back to Earth",
          "A time capsule containing sounds, music, images, and greetings from Earth",
          "A spare computer hard drive for the International Space Station",
        ],
        correctIndex: 2,
        hint: "It was designed as a message about life and culture on Earth for any future spacefarers!",
        explanation:
          "Correct! The Golden Record carries greetings in 55 languages, music, and images of Earth across the Milky Way.",
      },
      {
        id: "q3-voyager",
        type: "true-false",
        prompt:
          "True or False: Even though Voyager 1 was launched in 1977, it still communicates with NASA through the Deep Space Network.",
        options: ["True", "False"],
        correctIndex: 0,
        hint: "Look at Voyager 1's Verified Mission Status!",
        explanation:
          "True! Despite being nearly half a century old and over 24 billion km away, Voyager 1 still sends data back to Earth!",
      },
    ],
    badge: {
      id: "badge-deep-space",
      name: "Deep Space Traveler",
      icon: "fa-solid fa-compass",
      color: "from-purple-500 to-indigo-600",
      description:
        "Journeyed beyond the planets with Voyager 1 into interstellar space.",
    },
    factCard: {
      id: "fact-voyager-03",
      title: "22+ Hours for a Single 'Hello'",
      category: "Deep Space Communications",
      summary:
        "Radio waves travel at 300,000 km per second, yet Voyager 1 is so distant that a one-way message takes over 22 hours to arrive on Earth!",
      sourceLabel: "NASA Jet Propulsion Laboratory (JPL) Voyager Status",
      placeholderAsset:
        "[PLACEHOLDER: Insert Deep Space Network Antenna Dish Photo - Asset ID: FACT_VOYAGER_IMG]",
    },
  },
  {
    id: "level-4-legacy",
    order: 4,
    title: "Chapter 4: The Legacy — Science Keeper",
    shortName: "The Legacy",
    sectorName: "Chapter 4 • Space Science Archive",
    mapCoords: { x: 88, y: 28 },
    themeColor: "#FBBF24",
    iconClass: "fa-solid fa-award",
    hardwareName: "LRO, Opportunity & Voyager 1 — Combined Legacy",
    missionStatus: "Forever in NASA's Science Archive",
    statusType: "completed",
    launchYear: "1969 – Present",
    summary:
      "Connect all the machines we explored to see why scientific discoveries stay valuable even after a spacecraft stops working!",
    robotIntro:
      "ARCHIVE CORE UNLOCKED! You visited the Moon, Mars, and Deep Space! Now let's see why a spacecraft's discoveries never truly end!",
    lessons: [
      {
        slideTitle: "Hardware Ages, But Data Lives Forever",
        content:
          "Every spacecraft eventually runs out of fuel, loses battery power, or faces harsh space weather—like Opportunity in the 2018 Mars dust storm. However, the terabytes of photographs, chemical readings, and maps they transmitted back to Earth are stored in public NASA archives forever.",
        highlightFact:
          "Students and scientists today regularly make brand-new discoveries by re-analyzing decades-old data from Apollo, Opportunity, and Voyager!",
        assetPlaceholderLabel:
          "[PLACEHOLDER: Insert NASA Planetary Data System Archive Graphic - Asset ID: LEGACY_DATA_01]",
        assetUrl: "",
        svgType: "archive",
      },
      {
        slideTitle: "Stepping Stones of Exploration",
        content:
          "Each generation of NASA hardware builds on the lessons of the machines before it: LRO's water-ice maps guide future Artemis Moon landings; Opportunity's water discoveries guided Perseverance's search for ancient Martian life; and Voyager mapped the outer planets for specialized missions like Juno and Cassini.",
        highlightFact:
          "No spacecraft works alone—every mission is a stepping stone that makes the next giant leap possible!",
        assetPlaceholderLabel:
          "[PLACEHOLDER: Insert Stepping Stones of NASA Exploration Timeline - Asset ID: LEGACY_TIMELINE_02]",
        assetUrl: "",
        svgType: "stepping",
      },
    ],
    questions: [
      {
        id: "q1-legacy",
        type: "multiple-choice",
        prompt:
          "Which statement correctly matches each NASA machine with its major scientific contribution?",
        options: [
          "LRO drove on Mars; Opportunity entered interstellar space; Voyager mapped the Moon",
          "LRO maps the Moon & water ice; Opportunity proved ancient water existed on Mars; Voyager 1 explores interstellar space",
          "All three spacecraft landed on Venus and returned rock samples",
          "None of the spacecraft ever sent pictures back to Earth",
        ],
        correctIndex: 1,
        hint: "Review your journey across Levels 1, 2, and 3!",
        explanation:
          "Bullseye! You accurately connected LRO (Moon), Opportunity (Mars), and Voyager 1 (Interstellar Space) to their discoveries.",
      },
      {
        id: "q2-legacy",
        type: "multiple-choice",
        prompt:
          "Why is a NASA spacecraft still scientifically valuable even after it stops communicating with Earth?",
        options: [
          "Because its collected data, photos, and discoveries remain in archives and guide future missions",
          "It isn't valuable anymore—scientists delete all the data when a rover stops moving",
          "Because astronauts immediately fly out to repair every deep space probe",
          "Because silent rovers turn into communication satellites",
        ],
        correctIndex: 0,
        hint: "Think about how Opportunity's discoveries helped design the newer Perseverance rover!",
        explanation:
          "Exactly! Hardware may stop working, but the scientific knowledge it gathered continues to answer questions and inspire new missions.",
      },
      {
        id: "q3-legacy",
        type: "true-false",
        prompt:
          "True or False: Today, both LRO (at the Moon) and Voyager 1 (in interstellar space) are still operational, while Opportunity completed its mission on Mars in 2018.",
        options: ["True", "False"],
        correctIndex: 0,
        hint: "Compare which two spacecraft are still transmitting today versus the rover that rested in the 2018 dust storm.",
        explanation:
          "True! Distinguishing between active spacecraft and completed missions is the mark of a true NASA Science Keeper!",
      },
    ],
    badge: {
      id: "badge-science-keeper",
      name: "Science Keeper",
      icon: "fa-solid fa-book-journal-whills",
      color: "from-amber-400 to-orange-500",
      description:
        "Connected NASA hardware across the solar system to humanity's permanent scientific archive.",
    },
    factCard: {
      id: "fact-legacy-04",
      title: "Open Science for Everyone on Earth",
      category: "NASA Legacy",
      summary:
        "All NASA mission data and images are placed in the public domain so students, teachers, and researchers worldwide can explore the universe together!",
      sourceLabel: "NASA Open Data & Planetary Data System",
      placeholderAsset:
        "[PLACEHOLDER: Insert NASA Solar System Fleet Family Portrait - Asset ID: FACT_LEGACY_IMG]",
    },
  },
];

export const FINAL_MISSION_CONFIG = {
  title: "Final Mission: Restore the Solar System Telemetry Core",
  subtitle:
    "Match the incoming deep-space telemetry transmissions to the correct NASA hardware to complete your certification!",
  robotCelebration:
    "ALL SECTORS ILLUMINATED! You have restored the entire Solar System Archive! Complete this final transmission check to earn your official NASA Explorer Commendation!",
  challenges: [
    {
      transmission:
        "SIGNAL #01: 'High-resolution 3D laser altimeter scan complete. Permanent shadow crater at Lunar South Pole confirmed to hold water ice.'",
      options: [
        "Opportunity Rover (Mars)",
        "Lunar Reconnaissance Orbiter (The Moon)",
        "Voyager 1 (Interstellar Space)",
      ],
      correctIndex: 1,
    },
    {
      transmission:
        "SIGNAL #02: 'Microscopic imager detected spherical hematite concretions ('blueberries') in Meridiani Planum, confirming ancient liquid water.'",
      options: [
        "Opportunity Rover (Mars)",
        "Apollo 11 Laser Retroreflector (The Moon)",
        "Voyager 1 (Interstellar Space)",
      ],
      correctIndex: 0,
    },
    {
      transmission:
        "SIGNAL #03: 'Plasma wave instrument confirms spacecraft has crossed the heliopause. Carrying the Golden Record over 24 billion km from Earth.'",
      options: [
        "Lunar Reconnaissance Orbiter (The Moon)",
        "Opportunity Rover (Mars)",
        "Voyager 1 (Interstellar Space)",
      ],
      correctIndex: 2,
    },
  ],
};

const STORAGE_KEYS = Object.freeze({
  USER_ACCOUNT: "nasa_lost_user_account_v1",
  SAVED_PROGRESS: "nasa_lost_saved_progress_v1",
  USERS_DB: "nasa_lost_registered_users_db_v1",
});

const ROBOT_TIPS = Object.freeze([
  "Space Tip: Each Chapter has fun Lesson Cards and a quick Quiz! Read the cards first so you know all the answers!",
  "Space Tip: You can play Chapter 1 right now as a Guest! After you finish it, you can make a username and password to save your badges!",
  "Fun Fact: The footprints left by astronauts on the Moon will stay there for millions of years because the Moon has no wind or rain!",
  "Science Tip: Even when an older rover stops moving, the photos and discoveries it sent home help NASA build the next generation of spacecraft!",
]);

const SPLASH_MESSAGES = Object.freeze([
  "Calibrating Lunar Orbiter cameras...",
  "Warming up Mars Rover wheels...",
  "Tuning Voyager 1 deep space antenna...",
  "Ready for Launch!",
]);

function createFreshProgress() {
  return {
    completedMissionIds: [],
    earnedBadgeIds: [],
    unlockedFactIds: [],
    finalMissionCompleted: false,
    explorerRank: "Space Cadet",
  };
}

const DomUtils = {
  escapeHtml(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  },

  showToast(message, color = "sky") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const borderColors = {
      sky: "border-sky-400 text-sky-200",
      emerald: "border-emerald-400 text-emerald-200",
      amber: "border-amber-400 text-amber-200",
      rose: "border-rose-400 text-rose-200",
    };

    const toast = document.createElement("div");
    toast.className = `glass-panel px-4 py-3 rounded-xl border-l-4 ${borderColors[color] || borderColors.sky} text-xs font-medium shadow-xl pointer-events-auto transition-all duration-300`;
    toast.innerHTML = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 300);
    }, 3600);
  },
};

const SvgAssets = {
  getRobotSVG(mood = "normal") {
    const eyeColor =
      mood === "happy" ? "#34D399" : mood === "hint" ? "#FBBF24" : "#38BDF8";
    const mouthPath =
      mood === "happy"
        ? "M 22 40 Q 32 48 42 40"
        : mood === "hint"
          ? "M 24 42 L 40 42"
          : "M 23 41 Q 32 45 41 41";

    return `
            <svg viewBox="0 0 64 64" class="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="32" y1="6" x2="32" y2="14" stroke="${eyeColor}" stroke-width="3" stroke-linecap="round"/>
                <circle cx="32" cy="5" r="3.5" fill="${eyeColor}"/>
                <rect x="12" y="14" width="40" height="36" rx="10" fill="#0F172A" stroke="${eyeColor}" stroke-width="2.5"/>
                <rect x="17" y="20" width="30" height="14" rx="5" fill="#020617" stroke="#1E293B" stroke-width="1.5"/>
                <circle cx="25" cy="27" r="3.5" fill="${eyeColor}"/>
                <circle cx="39" cy="27" r="3.5" fill="${eyeColor}"/>
                <path d="${mouthPath}" stroke="${eyeColor}" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                <rect x="8" y="26" width="4" height="12" rx="2" fill="${eyeColor}"/>
                <rect x="52" y="26" width="4" height="12" rx="2" fill="${eyeColor}"/>
            </svg>
        `;
  },

  getHardwarePlaceholderSVG(svgType = "spacecraft", color = "#38BDF8") {
    return `
            <svg viewBox="0 0 400 180" class="w-full h-44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="180" rx="12" fill="#090D16"/>
                <circle cx="60" cy="40" r="1.5" fill="#94A3B8"/>
                <circle cx="340" cy="30" r="2" fill="#E2E8F0"/>
                <circle cx="310" cy="140" r="1.5" fill="#64748B"/>
                <circle cx="90" cy="135" r="1" fill="#94A3B8"/>
                <circle cx="200" cy="90" r="62" stroke="${color}" stroke-opacity="0.25" stroke-width="1.5" stroke-dasharray="6 4"/>
                <circle cx="200" cy="90" r="42" fill="${color}" fill-opacity="0.1" stroke="${color}" stroke-width="2"/>
                <rect x="140" y="80" width="38" height="20" rx="3" fill="#1E293B" stroke="${color}" stroke-width="1.5"/>
                <rect x="222" y="80" width="38" height="20" rx="3" fill="#1E293B" stroke="${color}" stroke-width="1.5"/>
                <rect x="184" y="74" width="32" height="32" rx="6" fill="#0F172A" stroke="#F8FAFC" stroke-width="2"/>
                <circle cx="200" cy="90" r="6" fill="${color}"/>
                <text x="200" y="166" text-anchor="middle" fill="#94A3B8" font-size="11" font-family="monospace">
                    DEV ASSET SLOT [${svgType.toUpperCase()}]
                </text>
            </svg>
        `;
  },
};

const StorageService = {
  getUsersDatabase() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.USERS_DB);
      return raw ? JSON.parse(raw) : {};
    } catch (err) {
      return {};
    }
  },

  saveUsersDatabase(db) {
    try {
      localStorage.setItem(STORAGE_KEYS.USERS_DB, JSON.stringify(db));
    } catch (err) {}
  },

  getActiveUser() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.USER_ACCOUNT);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      return null;
    }
  },

  setActiveUser(user) {
    try {
      if (!user) localStorage.removeItem(STORAGE_KEYS.USER_ACCOUNT);
      else
        localStorage.setItem(STORAGE_KEYS.USER_ACCOUNT, JSON.stringify(user));
    } catch (err) {}
  },

  getUserProgress(username) {
    if (!username) return null;
    try {
      const key = `${STORAGE_KEYS.SAVED_PROGRESS}_${username.toLowerCase()}`;
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      return null;
    }
  },

  saveUserProgress(username, progress) {
    if (!username) return;
    try {
      const key = `${STORAGE_KEYS.SAVED_PROGRESS}_${username.toLowerCase()}`;
      localStorage.setItem(key, JSON.stringify(progress));
    } catch (err) {}
  },

  mergeProgress(existingProgress, guestProgress) {
    if (!existingProgress) return { ...guestProgress };
    return {
      completedMissionIds: Array.from(
        new Set([
          ...(existingProgress.completedMissionIds || []),
          ...(guestProgress.completedMissionIds || []),
        ]),
      ),
      earnedBadgeIds: Array.from(
        new Set([
          ...(existingProgress.earnedBadgeIds || []),
          ...(guestProgress.earnedBadgeIds || []),
        ]),
      ),
      unlockedFactIds: Array.from(
        new Set([
          ...(existingProgress.unlockedFactIds || []),
          ...(guestProgress.unlockedFactIds || []),
        ]),
      ),
      finalMissionCompleted: Boolean(
        existingProgress.finalMissionCompleted ||
        guestProgress.finalMissionCompleted,
      ),
      explorerRank:
        guestProgress.explorerRank ||
        existingProgress.explorerRank ||
        "Space Cadet",
    };
  },

  calculateRank(progress) {
    const count = progress.completedMissionIds.length;
    if (progress.finalMissionCompleted) return "Chief NASA Science Keeper";
    if (count >= 3) return "Deep Space Navigator";
    if (count >= 2) return "Mars Rover Detective";
    if (count >= 1) return "Moon Explorer";
    return "Space Cadet";
  },
};

const AuthService = {
  validateCredentials(username, password) {
    const cleanUsername = String(username || "").trim();
    const cleanPassword = String(password || "").trim();
    if (cleanUsername.length < 3)
      return {
        valid: false,
        error: "Please pick a username with at least 3 letters or numbers!",
      };
    if (cleanPassword.length < 4)
      return {
        valid: false,
        error: "Please pick a password with at least 4 characters!",
      };
    return { valid: true, cleanUsername, cleanPassword };
  },

  register(username, password) {
    const validation = this.validateCredentials(username, password);
    if (!validation.valid) return validation;
    const { cleanUsername, cleanPassword } = validation;
    const db = StorageService.getUsersDatabase();
    const userKey = cleanUsername.toLowerCase();

    if (db[userKey])
      return {
        valid: false,
        error:
          "That username is already taken! Try logging in or pick a different username.",
      };

    db[userKey] = {
      username: cleanUsername,
      password: cleanPassword,
      createdAt: new Date().toISOString(),
    };
    StorageService.saveUsersDatabase(db);
    return { valid: true, username: cleanUsername, isNewAccount: true };
  },

  login(username, password) {
    const cleanUsername = String(username || "").trim();
    const cleanPassword = String(password || "").trim();
    const db = StorageService.getUsersDatabase();
    const userKey = cleanUsername.toLowerCase();
    const record = db[userKey];

    if (!record || record.password !== cleanPassword) {
      return {
        valid: false,
        error:
          "Hmm, that username or password didn't match. Try again or create a new account!",
      };
    }
    return { valid: true, username: record.username, isNewAccount: false };
  },
};

const ViewRenderer = {
  renderLanding(app) {
    const hasProgress = app.progress.completedMissionIds.length > 0;
    return `
            <div class="space-y-8">
                <div class="glass-panel rounded-3xl p-6 sm:p-10 border-2 border-sky-400/35 relative overflow-hidden">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div class="lg:col-span-7 space-y-5">
                            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-200 text-xs sm:text-sm font-display font-bold">
                                <i class="fa-solid fa-star text-amber-300"></i> Official Space Explorer Adventure
                            </div>
                            <h1 class="font-display font-bold text-3xl sm:text-5xl text-white tracking-wide leading-tight">
                                Discover Real <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-amber-300">NASA Spacecraft</span> Across the Solar System!
                            </h1>
                            <p class="text-slate-200 text-base sm:text-lg leading-relaxed">
                                Team up with your friendly robot guide <strong>A.R.I.</strong> to travel from Earth's Moon to Mars and deep space! Uncover how NASA rovers and probes work, answer fun space challenges, and collect shiny mission badges.
                            </p>
                            <div class="flex flex-wrap items-center gap-3.5 pt-2">
                                <button onclick="window.app.navigate('map')" class="btn-tactile px-7 py-4 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 font-display font-bold text-base sm:text-lg flex items-center gap-2.5">
                                    <i class="fa-solid fa-rocket text-xl"></i>
                                    <span>${hasProgress ? "Continue My Space Adventure!" : "Start Exploring! (Chapter 1)"}</span>
                                </button>
                                ${
                                  !app.user
                                    ? `
                                    <button onclick="window.app.openAuthModal('login')" class="btn-tactile px-5 py-4 rounded-2xl bg-slate-800/95 hover:bg-slate-700 text-white border-2 border-slate-600 font-display font-bold text-sm sm:text-base flex items-center gap-2">
                                        <i class="fa-solid fa-key text-amber-300"></i>
                                        <span>Log In / Create Account</span>
                                    </button>
                                `
                                    : `
                                    <div class="px-4 py-3 rounded-2xl bg-emerald-500/15 border-2 border-emerald-400/40 text-emerald-200 text-xs sm:text-sm font-bold flex items-center gap-2">
                                        <i class="fa-solid fa-circle-check text-emerald-400 text-base"></i>
                                        <span>Logged in as <strong>${DomUtils.escapeHtml(app.user.name)}</strong> — Progress Saved!</span>
                                    </div>
                                `
                                }
                            </div>
                        </div>

                        <div class="lg:col-span-5">
                            <div class="bg-slate-950/90 rounded-3xl p-5 sm:p-6 border-2 border-slate-800 space-y-4 shadow-inner">
                                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-map-signs text-sky-400"></i>
                                        <span class="font-display font-bold text-sm text-white">Your Space Chapters</span>
                                    </div>
                                    <span class="text-xs font-display font-bold px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300">${app.progress.completedMissionIds.length} of ${MISSIONS_CONFIG.length} Done</span>
                                </div>
                                <div class="space-y-2.5">
                                    ${MISSIONS_CONFIG.map((m, idx) => {
                                      const isDone =
                                        app.progress.completedMissionIds.includes(
                                          m.id,
                                        );
                                      const isUnlocked =
                                        idx === 0 ||
                                        app.progress.completedMissionIds.includes(
                                          MISSIONS_CONFIG[idx - 1].id,
                                        );
                                      return `
                                            <div onclick="window.app.selectMapNode('${m.id}', ${isUnlocked})"
                                                 class="cursor-pointer flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/90 border-2 transition ${
                                                   isDone
                                                     ? "border-emerald-400/50 hover:border-emerald-400"
                                                     : isUnlocked
                                                       ? "border-sky-400/50 hover:border-sky-300"
                                                       : "border-slate-800 opacity-60"
                                                 }">
                                                <div class="flex items-center gap-3">
                                                    <div class="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-800 text-lg" style="color:${m.themeColor}">
                                                        <i class="${m.iconClass}"></i>
                                                    </div>
                                                    <div>
                                                        <div class="text-sm font-display font-bold text-white">Chapter ${m.order}: ${m.shortName}</div>
                                                        <div class="text-xs text-slate-400">${m.badge.name} Badge</div>
                                                    </div>
                                                </div>
                                                <span class="text-xs font-display font-bold px-2.5 py-1 rounded-xl ${
                                                  isDone
                                                    ? "bg-emerald-400 text-slate-950"
                                                    : isUnlocked
                                                      ? "bg-sky-400 text-slate-950"
                                                      : "bg-slate-800 text-slate-400"
                                                }">
                                                    ${isDone ? '<i class="fa-solid fa-check mr-1"></i>Done!' : isUnlocked ? "Play!" : '<i class="fa-solid fa-lock"></i>'}
                                                </span>
                                            </div>
                                        `;
                                    }).join("")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div class="glass-panel rounded-3xl p-6 border-2 border-sky-500/25">
                        <div class="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-300 flex items-center justify-center mb-3 text-xl font-display font-bold">1</div>
                        <h3 class="font-display font-bold text-white text-lg mb-1">Pick a Planet on the Map</h3>
                        <p class="text-sm text-slate-300 leading-relaxed">Start at Chapter 1 on the Moon! Each time you finish a chapter, the next destination in space lights up.</p>
                    </div>
                    <div class="glass-panel rounded-3xl p-6 border-2 border-purple-500/25">
                        <div class="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-300 flex items-center justify-center mb-3 text-xl font-display font-bold">2</div>
                        <h3 class="font-display font-bold text-white text-lg mb-1">Read Fun Facts & Quiz</h3>
                        <p class="text-sm text-slate-300 leading-relaxed">Flip through the picture cards to learn about NASA's machines, then answer 3 fun questions. A.R.I. always has hints!</p>
                    </div>
                    <div class="glass-panel rounded-3xl p-6 border-2 border-amber-500/25">
                        <div class="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-300 flex items-center justify-center mb-3 text-xl font-display font-bold">3</div>
                        <h3 class="font-display font-bold text-white text-lg mb-1">Earn Badges & Save</h3>
                        <p class="text-sm text-slate-300 leading-relaxed">Collect mission badges and fact cards! Create a simple username and password after Chapter 1 to save your collection.</p>
                    </div>
                </div>
            </div>
        `;
  },

  renderMap(app) {
    const totalLevels = MISSIONS_CONFIG.length;
    const completedCount = app.progress.completedMissionIds.length;
    const progressPct = Math.round((completedCount / totalLevels) * 100);
    const allCompleted = completedCount === totalLevels;

    let svgLines = "";
    for (let i = 0; i < MISSIONS_CONFIG.length - 1; i++) {
      const curr = MISSIONS_CONFIG[i];
      const next = MISSIONS_CONFIG[i + 1];
      const isRestored = app.progress.completedMissionIds.includes(curr.id);
      svgLines += `
                <line x1="${curr.mapCoords.x}%" y1="${curr.mapCoords.y}%"
                      x2="${next.mapCoords.x}%" y2="${next.mapCoords.y}%"
                      stroke="${isRestored ? "#38BDF8" : "#334155"}"
                      stroke-width="${isRestored ? "3" : "2"}"
                      class="${isRestored ? "map-path-active" : ""}" />
            `;
    }

    return `
            <div class="space-y-6">
                <div class="glass-panel rounded-2xl p-5 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <div class="flex items-center gap-2">
                            <h2 class="font-display font-bold text-xl text-white">Interactive Solar System Map</h2>
                            <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                                Rank: ${app.progress.explorerRank}
                            </span>
                        </div>
                        <p class="text-xs text-slate-400 mt-1">Select an unlocked chapter below to explore NASA hardware and earn your badge.</p>
                    </div>
                    <div class="w-full md:w-72 space-y-1.5">
                        <div class="flex justify-between text-xs">
                            <span class="text-slate-300 font-medium">Solar System Map Restored</span>
                            <span class="text-sky-400 font-bold">${progressPct}% (${completedCount}/${totalLevels})</span>
                        </div>
                        <div class="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                            <div class="h-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-all duration-500" style="width: ${progressPct}%"></div>
                        </div>
                    </div>
                </div>

                <div class="glass-panel rounded-3xl p-4 sm:p-6 border border-sky-500/30 relative overflow-hidden">
                    <div class="relative w-full h-[360px] sm:h-[420px] rounded-2xl bg-slate-950/90 border border-slate-800/90 overflow-hidden">
                        <div class="absolute -left-16 top-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-amber-400/20 blur-2xl pointer-events-none"></div>
                        <svg class="absolute inset-0 w-full h-full pointer-events-none">${svgLines}</svg>
                        ${MISSIONS_CONFIG.map((mission, idx) => {
                          const isCompleted =
                            app.progress.completedMissionIds.includes(
                              mission.id,
                            );
                          const isUnlocked =
                            idx === 0 ||
                            app.progress.completedMissionIds.includes(
                              MISSIONS_CONFIG[idx - 1].id,
                            );
                          const statusBadge = isCompleted
                            ? '<span class="px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-bold"><i class="fa-solid fa-check mr-1"></i>COMPLETED</span>'
                            : isUnlocked
                              ? '<span class="px-2 py-0.5 rounded-full bg-sky-400 text-slate-950 text-[10px] font-bold animate-pulse">OPEN</span>'
                              : '<span class="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[10px] font-bold"><i class="fa-solid fa-lock mr-1"></i>LOCKED</span>';

                          return `
                                <div style="left: ${mission.mapCoords.x}%; top: ${mission.mapCoords.y}%;"
                                     class="absolute -translate-x-1/2 -translate-y-1/2 z-10 text-center group">
                                    <button onclick="window.app.selectMapNode('${mission.id}', ${isUnlocked})"
                                            class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex flex-col items-center justify-center transition transform group-hover:scale-110 shadow-xl border-2 ${
                                              isCompleted
                                                ? "bg-emerald-950/90 border-emerald-400 text-emerald-300 shadow-emerald-500/20"
                                                : isUnlocked
                                                  ? "bg-slate-900/95 border-sky-400 text-sky-300 shadow-sky-500/30"
                                                  : "bg-slate-900/60 border-slate-700 text-slate-500 cursor-not-allowed"
                                            }">
                                        <i class="${mission.iconClass} text-xl sm:text-2xl mb-1"></i>
                                        <span class="text-[10px] font-bold">Chapter ${mission.order}</span>
                                    </button>
                                    <div class="mt-2 flex flex-col items-center">
                                        <span class="text-xs font-display font-bold text-white whitespace-nowrap bg-slate-950/90 px-2 py-0.5 rounded border border-slate-800">${mission.shortName}</span>
                                        <div class="mt-1">${statusBadge}</div>
                                    </div>
                                </div>
                            `;
                        }).join("")}
                    </div>
                </div>

                <div class="glass-panel rounded-2xl p-5 border ${allCompleted ? "border-amber-400/60 bg-amber-500/10" : "border-slate-800 opacity-75"} flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${allCompleted ? "bg-amber-400 text-slate-950" : "bg-slate-800 text-slate-500"}">
                            <i class="fa-solid ${allCompleted ? "fa-trophy" : "fa-lock"}"></i>
                        </div>
                        <div>
                            <h3 class="font-display font-bold text-base sm:text-lg text-white">Final Mission: Restore the Solar System Telemetry Core</h3>
                            <p class="text-xs text-slate-300">
                                ${
                                  allCompleted
                                    ? "All chapters complete! Launch the Final Mission to earn your official NASA Explorer Certificate!"
                                    : `Finish all ${totalLevels} chapters above (${completedCount}/${totalLevels} completed) to unlock the Final Mission.`
                                }
                            </p>
                        </div>
                    </div>
                    <button ${allCompleted ? `onclick="window.app.navigate('final')"` : "disabled"}
                            class="btn-tactile px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition flex-shrink-0 ${
                              allCompleted
                                ? "bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg shadow-amber-500/20"
                                : "bg-slate-800 text-slate-500 cursor-not-allowed"
                            }">
                        ${allCompleted ? '<i class="fa-solid fa-play mr-1.5"></i>Launch Final Mission' : '<i class="fa-solid fa-lock mr-1.5"></i>Locked'}
                    </button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${MISSIONS_CONFIG.map((mission, idx) => {
                      const isCompleted =
                        app.progress.completedMissionIds.includes(mission.id);
                      const isUnlocked =
                        idx === 0 ||
                        app.progress.completedMissionIds.includes(
                          MISSIONS_CONFIG[idx - 1].id,
                        );
                      return `
                            <div class="glass-panel rounded-2xl p-5 border ${isCompleted ? "border-emerald-500/40" : isUnlocked ? "border-sky-500/30" : "border-slate-800 opacity-65"} flex flex-col justify-between gap-4">
                                <div class="space-y-2">
                                    <div class="flex items-center justify-between gap-2">
                                        <span class="text-xs font-bold uppercase tracking-wider" style="color:${mission.themeColor}">${mission.sectorName}</span>
                                        <span class="text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300">
                                            ${mission.lessons.length} Lessons • ${mission.questions.length} Questions
                                        </span>
                                    </div>
                                    <h3 class="font-display font-bold text-lg text-white">${mission.title}</h3>
                                    <p class="text-xs text-slate-300 leading-relaxed">${mission.summary}</p>
                                    <div class="text-[11px] text-slate-400 pt-1">
                                        <strong>Featured Hardware:</strong> ${mission.hardwareName}
                                    </div>
                                </div>
                                <div class="flex items-center justify-between pt-2 border-t border-slate-800/80">
                                    <span class="text-xs ${isCompleted ? "text-emerald-400" : "text-slate-400"}">
                                        <i class="fa-solid fa-medal mr-1"></i>Reward: <strong>${mission.badge.name}</strong>
                                    </span>
                                    <button onclick="window.app.selectMapNode('${mission.id}', ${isUnlocked})"
                                            class="btn-tactile px-4 py-2 rounded-xl text-xs font-display font-bold transition ${
                                              isUnlocked
                                                ? "bg-sky-400 hover:bg-sky-300 text-slate-950"
                                                : "bg-slate-800 text-slate-500 cursor-not-allowed"
                                            }">
                                        ${isCompleted ? "Replay Chapter" : isUnlocked ? "Start Chapter" : "Locked"}
                                    </button>
                                </div>
                            </div>
                        `;
                    }).join("")}
                </div>
            </div>
        `;
  },

  renderMission(app) {
    const mission =
      MISSIONS_CONFIG.find((m) => m.id === app.activeMissionId) ||
      MISSIONS_CONFIG[0];
    const lesson = mission.lessons[app.activeLessonIdx] || mission.lessons[0];
    const allQuestionsAnsweredCorrectly = mission.questions.every(
      (q) => app.quizAnswers[q.id]?.isCorrect,
    );
    const statusColor =
      mission.statusType === "operational"
        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        : "bg-amber-500/20 text-amber-300 border-amber-500/40";

    return `
            <div class="space-y-6">
                <div class="glass-panel rounded-2xl p-5 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div class="space-y-1">
                        <div class="flex flex-wrap items-center gap-2">
                            <button onclick="window.app.navigate('map')" class="text-xs text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1 mr-2">
                                <i class="fa-solid fa-arrow-left"></i> Back to Space Map
                            </button>
                            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${statusColor}">
                                <i class="fa-solid fa-satellite-dish mr-1"></i>Status: ${mission.missionStatus}
                            </span>
                        </div>
                        <h2 class="font-display font-bold text-2xl text-white">${mission.title}</h2>
                        <p class="text-xs text-slate-400">Featured NASA Hardware: <strong class="text-slate-200">${mission.hardwareName}</strong> • Launched: ${mission.launchYear}</p>
                    </div>

                    <div class="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 self-start lg:self-auto">
                        <button onclick="window.app.switchMissionTab('lessons')"
                                class="px-4 py-2 rounded-lg text-xs font-display font-bold transition ${
                                  app.activeTab === "lessons"
                                    ? "bg-sky-400 text-slate-950 shadow"
                                    : "text-slate-300 hover:text-white"
                                }">
                            <i class="fa-solid fa-book-open mr-1.5"></i>1. Learn (${mission.lessons.length})
                        </button>
                        <button onclick="window.app.switchMissionTab('quiz')"
                                class="px-4 py-2 rounded-lg text-xs font-display font-bold transition ${
                                  app.activeTab === "quiz"
                                    ? "bg-sky-400 text-slate-950 shadow"
                                    : "text-slate-300 hover:text-white"
                                }">
                            <i class="fa-solid fa-circle-question mr-1.5"></i>2. Quiz Challenge (${mission.questions.length})
                        </button>
                    </div>
                </div>

                ${
                  app.activeTab === "lessons"
                    ? `
                    <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-sky-500/30 space-y-6">
                        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                            <span class="text-xs font-display font-bold uppercase tracking-wider text-sky-400">
                                Lesson Card ${app.activeLessonIdx + 1} of ${mission.lessons.length}
                            </span>
                            <div class="flex gap-1.5">
                                ${mission.lessons
                                  .map(
                                    (_, idx) => `
                                    <button onclick="window.app.goToLesson(${idx})"
                                            class="w-7 h-2 rounded-full transition ${idx === app.activeLessonIdx ? "bg-sky-400" : "bg-slate-700 hover:bg-slate-600"}"></button>
                                `,
                                  )
                                  .join("")}
                            </div>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                            <div class="lg:col-span-5 bg-slate-950/90 rounded-2xl p-4 border border-dashed border-slate-700 text-center space-y-3">
                                ${
                                  lesson.assetUrl
                                    ? `<img src="${lesson.assetUrl}" alt="${DomUtils.escapeHtml(lesson.slideTitle)}" class="w-full h-48 object-cover rounded-xl">`
                                    : SvgAssets.getHardwarePlaceholderSVG(
                                        lesson.svgType || "spacecraft",
                                        mission.themeColor,
                                      )
                                }
                                <div class="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-amber-300">
                                    ${lesson.assetPlaceholderLabel}
                                </div>
                            </div>

                            <div class="lg:col-span-7 space-y-4">
                                <h3 class="font-display font-bold text-xl sm:text-2xl text-white">${lesson.slideTitle}</h3>
                                <p class="text-slate-200 text-sm sm:text-base leading-relaxed">${lesson.content}</p>
                                <div class="p-4 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-start gap-3">
                                    <i class="fa-solid fa-lightbulb text-amber-400 text-lg mt-0.5"></i>
                                    <div>
                                        <div class="text-xs font-display font-bold uppercase tracking-wider text-sky-300 mb-0.5">Cool Space Fact!</div>
                                        <p class="text-xs sm:text-sm text-slate-200">${lesson.highlightFact}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center justify-between pt-4 border-t border-slate-800">
                            <button onclick="window.app.prevLesson()"
                                    ${app.activeLessonIdx === 0 ? "disabled" : ""}
                                    class="px-4 py-2.5 rounded-xl text-xs font-display font-bold border border-slate-700 ${
                                      app.activeLessonIdx === 0
                                        ? "text-slate-600 cursor-not-allowed"
                                        : "text-slate-200 hover:bg-slate-800"
                                    }">
                                <i class="fa-solid fa-chevron-left mr-1"></i> Back
                            </button>
                            ${
                              app.activeLessonIdx < mission.lessons.length - 1
                                ? `
                                <button onclick="window.app.nextLesson()" class="btn-tactile px-5 py-2.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-display font-bold text-xs sm:text-sm transition">
                                    Next Card <i class="fa-solid fa-chevron-right ml-1"></i>
                                </button>
                            `
                                : `
                                <button onclick="window.app.switchMissionTab('quiz')" class="btn-tactile px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-sky-400 text-slate-950 font-display font-bold text-xs sm:text-sm shadow-lg transition">
                                    Play Chapter Quiz! <i class="fa-solid fa-bolt ml-1"></i>
                                </button>
                            `
                            }
                        </div>
                    </div>
                `
                    : `
                    <div class="space-y-4">
                        ${mission.questions
                          .map((q, qIdx) => {
                            const state = app.quizAnswers[q.id] || {};
                            return `
                                <div class="glass-panel rounded-2xl p-5 sm:p-6 border ${
                                  state.isCorrect
                                    ? "border-emerald-500/50"
                                    : state.selectedIdx !== undefined
                                      ? "border-rose-500/50"
                                      : "border-slate-800"
                                } space-y-4">
                                    <div class="flex items-start justify-between gap-4">
                                        <div class="space-y-1">
                                            <span class="text-[11px] font-display font-bold uppercase text-sky-400">Question ${qIdx + 1} of ${mission.questions.length}</span>
                                            <h4 class="font-display font-bold text-base sm:text-lg text-white">${q.prompt}</h4>
                                        </div>
                                        <button onclick="window.app.toggleHint('${mission.id}', '${q.id}')"
                                                class="btn-tactile px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/30 text-xs font-display font-bold flex-shrink-0 transition">
                                            <i class="fa-regular fa-lightbulb mr-1"></i> Ask A.R.I. for a Hint
                                        </button>
                                    </div>
                                    ${
                                      state.hintShown
                                        ? `
                                        <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-400/30 text-xs text-amber-200 flex items-center gap-2">
                                            <i class="fa-solid fa-robot text-amber-400"></i>
                                            <span><strong>A.R.I. Hint:</strong> ${q.hint}</span>
                                        </div>
                                    `
                                        : ""
                                    }
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                        ${q.options
                                          .map((opt, optIdx) => {
                                            const isSelected =
                                              state.selectedIdx === optIdx;
                                            let btnStyle =
                                              "bg-slate-900/90 hover:bg-slate-800 border-slate-700 text-slate-200";
                                            if (isSelected && state.isCorrect)
                                              btnStyle =
                                                "bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold";
                                            else if (
                                              isSelected &&
                                              !state.isCorrect
                                            )
                                              btnStyle =
                                                "bg-rose-500/20 border-rose-400 text-rose-200";
                                            return `
                                                <button onclick="window.app.submitAnswer('${mission.id}', '${q.id}', ${optIdx})"
                                                        class="p-3.5 rounded-xl border text-left text-xs sm:text-sm transition flex items-center justify-between gap-2 ${btnStyle}">
                                                    <span>${opt}</span>
                                                    ${isSelected ? (state.isCorrect ? '<i class="fa-solid fa-circle-check text-emerald-400"></i>' : '<i class="fa-solid fa-circle-xmark text-rose-400"></i>') : ""}
                                                </button>
                                            `;
                                          })
                                          .join("")}
                                    </div>
                                    ${
                                      state.selectedIdx !== undefined
                                        ? `
                                        <div class="p-3.5 rounded-xl text-xs sm:text-sm ${
                                          state.isCorrect
                                            ? "bg-emerald-500/15 text-emerald-200 border border-emerald-500/30"
                                            : "bg-rose-500/15 text-rose-200 border border-rose-500/30"
                                        }">
                                            ${state.isCorrect ? `<i class="fa-solid fa-check mr-1.5"></i>${q.explanation}` : `<i class="fa-solid fa-rotate-right mr-1.5"></i>Not quite! Try another choice or click the Hint button above for help from A.R.I.!`}
                                        </div>
                                    `
                                        : ""
                                    }
                                </div>
                            `;
                          })
                          .join("")}

                        ${
                          allQuestionsAnsweredCorrectly
                            ? `
                            <div class="glass-panel rounded-2xl p-6 border-2 border-emerald-400 bg-emerald-950/20 text-center space-y-4">
                                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br ${mission.badge.color} mx-auto flex items-center justify-center text-white text-2xl shadow-lg">
                                    <i class="${mission.badge.icon}"></i>
                                </div>
                                <h3 class="font-display font-bold text-2xl text-white">Awesome Job! You Earned the "${mission.badge.name}" Badge!</h3>
                                <p class="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
                                    You also unlocked the <strong>"${mission.factCard.title}"</strong> Fact Card and lit up the next destination on the Space Map!
                                </p>
                                <div class="flex flex-wrap justify-center gap-3 pt-2">
                                    <button onclick="window.app.navigate('map')" class="btn-tactile px-6 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-display font-bold text-xs sm:text-sm transition shadow-lg">
                                        <i class="fa-solid fa-earth-americas mr-1.5"></i>Continue on Space Map
                                    </button>
                                    <button onclick="window.app.navigate('archive')" class="btn-tactile px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-display font-bold transition">
                                        <i class="fa-solid fa-layer-group mr-1.5"></i>See My Fact Cards
                                    </button>
                                </div>
                            </div>
                        `
                            : ""
                        }
                    </div>
                `
                }
            </div>
        `;
  },

  renderArchive(app) {
    const unlockedCount = app.progress.unlockedFactIds.length;
    const totalCount = MISSIONS_CONFIG.length;

    return `
            <div class="space-y-6">
                <div class="glass-panel rounded-2xl p-5 sm:p-6 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h2 class="font-display font-bold text-2xl text-white flex items-center gap-2">
                            <i class="fa-solid fa-layer-group text-sky-400"></i> Collectible Space Fact Cards
                        </h2>
                        <p class="text-xs sm:text-sm text-slate-300 mt-1">Complete each chapter on the Space Map to unlock secret NASA fact cards!</p>
                    </div>
                    <span class="px-4 py-2 rounded-2xl bg-sky-500/20 border border-sky-400/40 text-sky-300 font-display font-bold text-sm">
                        Collected: ${unlockedCount} / ${totalCount}
                    </span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    ${MISSIONS_CONFIG.map((mission) => {
                      const card = mission.factCard;
                      const isUnlocked = app.progress.unlockedFactIds.includes(
                        card.id,
                      );
                      if (!isUnlocked) {
                        return `
                                <div class="glass-panel rounded-3xl p-6 border-2 border-dashed border-slate-800 flex flex-col items-center justify-center text-center min-h-[240px] opacity-70 space-y-3">
                                    <div class="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-500 text-2xl">
                                        <i class="fa-solid fa-lock"></i>
                                    </div>
                                    <div class="font-display font-bold text-base text-slate-300">Mystery Space Fact Card</div>
                                    <p class="text-xs text-slate-400 max-w-xs">Finish <strong>${mission.title}</strong> to unlock this collectible NASA discovery card!</p>
                                    <button onclick="window.app.navigate('map')" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-300 text-xs font-display font-bold transition">Go to Space Map</button>
                                </div>
                            `;
                      }
                      return `
                            <div class="glass-panel rounded-3xl p-6 border-2 border-sky-400/40 flex flex-col justify-between space-y-4">
                                <div class="space-y-3">
                                    <div class="flex items-center justify-between gap-2">
                                        <span class="px-3 py-1 rounded-full text-xs font-display font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30">${card.category}</span>
                                        <span class="text-xs font-display font-bold text-emerald-400"><i class="fa-solid fa-check-circle mr-1"></i>Unlocked!</span>
                                    </div>
                                    <div class="bg-slate-950/90 rounded-2xl p-3 border border-slate-800 text-center">
                                        ${SvgAssets.getHardwarePlaceholderSVG(mission.lessons[0]?.svgType || "spacecraft", mission.themeColor)}
                                        <div class="text-[10px] font-mono text-amber-300 mt-1">${card.placeholderAsset}</div>
                                    </div>
                                    <h3 class="font-display font-bold text-xl text-white">${card.title}</h3>
                                    <p class="text-sm text-slate-200 leading-relaxed">${card.summary}</p>
                                </div>
                                <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                                    <span><i class="fa-solid fa-book-bookmark mr-1 text-sky-400"></i>${card.sourceLabel}</span>
                                    <button onclick="window.app.selectMapNode('${mission.id}', true)" class="text-sky-300 hover:underline font-bold">Review Chapter</button>
                                </div>
                            </div>
                        `;
                    }).join("")}
                </div>
            </div>
        `;
  },

  renderBadges(app) {
    const earnedCount = app.progress.earnedBadgeIds.length;
    const totalCount = MISSIONS_CONFIG.length;

    return `
            <div class="space-y-6">
                <div class="glass-panel rounded-2xl p-5 sm:p-6 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h2 class="font-display font-bold text-2xl text-white flex items-center gap-2">
                            <i class="fa-solid fa-medal text-amber-400"></i> My NASA Explorer Badges
                        </h2>
                        <p class="text-xs sm:text-sm text-slate-300 mt-1">Earn all ${totalCount} mission badges to unlock the Final Synthesis Mission!</p>
                    </div>
                    <span class="px-4 py-2 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-300 font-display font-bold text-sm">
                        Badges Earned: ${earnedCount} / ${totalCount}
                    </span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    ${MISSIONS_CONFIG.map((mission) => {
                      const badge = mission.badge;
                      const isEarned = app.progress.earnedBadgeIds.includes(
                        badge.id,
                      );
                      return `
                            <div class="glass-panel rounded-3xl p-6 border-2 ${
                              isEarned
                                ? "border-amber-400/50 bg-slate-900/90"
                                : "border-slate-800 opacity-65"
                            } flex flex-col items-center text-center justify-between space-y-4">
                                <div class="space-y-3 flex flex-col items-center">
                                    <div class="w-20 h-20 rounded-3xl flex items-center justify-center text-3xl shadow-xl ${
                                      isEarned
                                        ? `bg-gradient-to-br ${badge.color} text-white`
                                        : "bg-slate-900 border-2 border-slate-700 text-slate-600"
                                    }">
                                        <i class="${isEarned ? badge.icon : "fa-solid fa-lock"}"></i>
                                    </div>
                                    <span class="px-2.5 py-0.5 rounded-full text-[11px] font-display font-bold ${
                                      isEarned
                                        ? "bg-emerald-400/20 text-emerald-300"
                                        : "bg-slate-800 text-slate-400"
                                    }">
                                        ${isEarned ? "EARNED!" : `Chapter ${mission.order}`}
                                    </span>
                                    <h3 class="font-display font-bold text-lg text-white">${badge.name}</h3>
                                    <p class="text-xs text-slate-300 leading-relaxed">${badge.description}</p>
                                </div>
                                <div class="w-full pt-3 border-t border-slate-800/80">
                                    ${
                                      isEarned
                                        ? `
                                        <span class="text-xs font-display font-bold text-amber-300"><i class="fa-solid fa-star mr-1"></i>${mission.shortName} Mastered</span>
                                    `
                                        : `
                                        <button onclick="window.app.navigate('map')" class="text-xs text-sky-400 hover:underline font-display font-bold">Unlock on Map <i class="fa-solid fa-arrow-right ml-1"></i></button>
                                    `
                                    }
                                </div>
                            </div>
                        `;
                    }).join("")}
                </div>
            </div>
        `;
  },

  renderFinalMission(app) {
    const challenges = FINAL_MISSION_CONFIG.challenges;
    const allCorrect = challenges.every(
      (c, idx) => app.finalQuizAnswers[idx] === c.correctIndex,
    );

    return `
            <div class="space-y-6">
                <div class="glass-panel rounded-3xl p-6 sm:p-8 border-2 border-amber-400/50 space-y-4">
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <span class="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 font-display font-bold text-xs uppercase">
                            <i class="fa-solid fa-satellite-dish mr-1"></i> Final Mission Challenge
                        </span>
                        <button onclick="window.app.navigate('map')" class="text-xs text-sky-400 hover:underline font-bold"><i class="fa-solid fa-arrow-left mr-1"></i> Back to Space Map</button>
                    </div>
                    <h2 class="font-display font-bold text-2xl sm:text-3xl text-white">${FINAL_MISSION_CONFIG.title}</h2>
                    <p class="text-sm sm:text-base text-slate-200">${FINAL_MISSION_CONFIG.subtitle}</p>
                </div>

                <div class="space-y-4">
                    ${challenges
                      .map((item, idx) => {
                        const selected = app.finalQuizAnswers[idx];
                        const isCorrect = selected === item.correctIndex;
                        return `
                            <div class="glass-panel rounded-2xl p-5 sm:p-6 border ${
                              isCorrect
                                ? "border-emerald-400/60"
                                : selected !== undefined
                                  ? "border-rose-400/60"
                                  : "border-slate-800"
                            } space-y-4">
                                <p class="font-mono text-xs sm:text-sm text-sky-300 bg-slate-950/90 p-3.5 rounded-xl border border-slate-800">${item.transmission}</p>
                                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                                    ${item.options
                                      .map((opt, optIdx) => {
                                        const isChosen = selected === optIdx;
                                        let style =
                                          "bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-200";
                                        if (isChosen && isCorrect)
                                          style =
                                            "bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold";
                                        else if (isChosen && !isCorrect)
                                          style =
                                            "bg-rose-500/20 border-rose-400 text-rose-200";
                                        return `
                                            <button onclick="window.app.submitFinalMissionAnswer(${idx}, ${optIdx})"
                                                    class="p-3.5 rounded-xl border text-xs sm:text-sm text-left transition flex items-center justify-between ${style}">
                                                <span>${opt}</span>
                                                ${isChosen ? (isCorrect ? '<i class="fa-solid fa-check text-emerald-400"></i>' : '<i class="fa-solid fa-xmark text-rose-400"></i>') : ""}
                                            </button>
                                        `;
                                      })
                                      .join("")}
                                </div>
                            </div>
                        `;
                      })
                      .join("")}
                </div>

                ${
                  allCorrect
                    ? `
                    <div class="glass-panel rounded-3xl p-6 sm:p-10 border-2 border-amber-400 bg-gradient-to-b from-slate-900/95 to-indigo-950/90 text-center space-y-6">
                        <div class="w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 mx-auto flex items-center justify-center text-slate-950 text-4xl shadow-2xl">
                            <i class="fa-solid fa-trophy"></i>
                        </div>
                        <div class="space-y-2">
                            <span class="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 font-display font-bold text-xs uppercase">Official NASA Solar System Commendation</span>
                            <h3 class="font-display font-bold text-2xl sm:text-4xl text-white">Congratulations, ${DomUtils.escapeHtml(app.user ? app.user.name : "Star Explorer")}!</h3>
                            <p class="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto">You have completed every chapter, restored the Solar System Map, and connected NASA's greatest spacecraft to humanity's permanent science archive!</p>
                        </div>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
                            ${MISSIONS_CONFIG.map(
                              (m) => `
                                <div class="p-3 rounded-2xl bg-slate-950/80 border border-amber-400/40 flex flex-col items-center">
                                    <i class="${m.badge.icon} text-amber-300 text-xl mb-1"></i>
                                    <span class="text-xs font-display font-bold text-white">${m.badge.name}</span>
                                </div>
                            `,
                            ).join("")}
                        </div>
                        <div class="flex flex-wrap justify-center gap-3 pt-2">
                            <button onclick="window.print()" class="btn-tactile px-6 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-display font-bold text-sm flex items-center gap-2">
                                <i class="fa-solid fa-print"></i> Print My Space Certificate
                            </button>
                            <button onclick="window.app.navigate('landing')" class="btn-tactile px-6 py-3 rounded-2xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-display font-bold text-sm flex items-center gap-2">
                                <i class="fa-solid fa-house"></i> Back to Home
                            </button>
                        </div>
                    </div>
                `
                    : ""
                }
            </div>
        `;
  },
};

class NasaSolarApp {
  constructor() {
    this.currentView = "landing";
    this.user = null;
    this.progress = createFreshProgress();
    this.chapter1PromptShown = false;
    this.activeMissionId = null;
    this.activeLessonIdx = 0;
    this.activeTab = "lessons";
    this.quizAnswers = {};
    this.finalQuizAnswers = {};

    this.loadSavedUserAndProgress();
    this.initUI();
    this.startSplashSequence();
  }

  startSplashSequence() {
    const splash = document.getElementById("nasa-splash-screen");
    const bar = document.getElementById("splash-progress-bar");
    const status = document.getElementById("splash-status-text");
    if (!splash || !bar) return;

    splash.classList.remove("hidden", "splash-fade-out");
    let pct = 10;
    if (this.splashInterval) clearInterval(this.splashInterval);

    this.splashInterval = setInterval(() => {
      pct = Math.min(pct + 30, 100);
      bar.style.width = `${pct}%`;
      const msgIdx = Math.min(Math.floor(pct / 30), SPLASH_MESSAGES.length - 1);
      if (status) status.textContent = SPLASH_MESSAGES[msgIdx];

      if (pct >= 100) {
        clearInterval(this.splashInterval);
        setTimeout(() => this.finishSplashScreen(), 350);
      }
    }, 650);
  }

  finishSplashScreen() {
    if (this.splashInterval) clearInterval(this.splashInterval);
    const splash = document.getElementById("nasa-splash-screen");
    if (splash && !splash.classList.contains("splash-fade-out")) {
      splash.classList.add("splash-fade-out");
      setTimeout(() => splash.classList.add("hidden"), 650);
    }
  }

  loadSavedUserAndProgress() {
    const savedUser = StorageService.getActiveUser();
    if (savedUser && savedUser.username) {
      this.user = savedUser;
      const savedProg = StorageService.getUserProgress(this.user.username);
      this.progress = savedProg || createFreshProgress();
    } else {
      this.user = null;
      this.progress = createFreshProgress();
    }
    this.progress.explorerRank = StorageService.calculateRank(this.progress);
  }

  saveProgressIfRegistered() {
    this.progress.explorerRank = StorageService.calculateRank(this.progress);
    if (this.user && this.user.username) {
      StorageService.saveUserProgress(this.user.username, this.progress);
    }
    this.updateTopCounters();
  }

  continueAsGuest() {
    this.user = null;
    this.closeModal();
    this.updateAuthUI();
    DomUtils.showToast("Exploring in Guest Mode! Have fun!", "sky");
  }

  registerWithUsernamePassword(username, password) {
    const result = AuthService.register(username, password);
    if (!result.valid) {
      this.showAuthError(result.error);
      return;
    }
    this.activateUserSession(result.username, true);
  }

  loginWithUsernamePassword(username, password) {
    const result = AuthService.login(username, password);
    if (!result.valid) {
      this.showAuthError(result.error);
      return;
    }
    this.activateUserSession(result.username, false);
  }

  activateUserSession(username, isNewAccount) {
    this.user = {
      name: username,
      username,
      joinedAt: new Date().toISOString(),
    };
    StorageService.setActiveUser(this.user);
    const existingSaved = StorageService.getUserProgress(username);
    this.progress = StorageService.mergeProgress(existingSaved, this.progress);
    this.saveProgressIfRegistered();

    this.closeModal();
    this.updateAuthUI();
    this.renderCurrentView();
    this.setRobotDialogue(
      isNewAccount
        ? `Awesome, ${this.user.name}! Your Explorer Account is ready and your badges are saved!`
        : `Welcome back, Commander ${this.user.name}!`,
      "happy",
    );
    DomUtils.showToast(
      isNewAccount
        ? `Account created! Welcome, ${this.user.name}!`
        : `Welcome back, ${this.user.name}!`,
      "emerald",
    );
  }

  showAuthError(msg) {
    const errBox = document.getElementById("auth-error-box");
    if (errBox) {
      errBox.textContent = msg;
      errBox.classList.remove("hidden");
    }
  }

  logoutUser() {
    StorageService.setActiveUser(null);
    this.user = null;
    this.progress = createFreshProgress();
    this.chapter1PromptShown = false;
    this.updateAuthUI();
    this.updateTopCounters();
    this.navigate("landing");
    DomUtils.showToast("Logged out! You are now in Guest Mode.", "sky");
  }

  initUI() {
    this.updateAuthUI();
    this.updateTopCounters();
    this.setRobotDialogue(
      "Hi Explorer! I'm A.R.I., your robot mission buddy. Click 'Start Exploring' to visit the Moon in Chapter 1!",
      "normal",
    );
    this.navigate("landing");
  }

  updateAuthUI() {
    const guestBanner = document.getElementById("guest-banner");
    const authArea = document.getElementById("auth-header-area");
    if (!guestBanner || !authArea) return;

    if (!this.user) {
      guestBanner.classList.remove("hidden");
      authArea.innerHTML = `
                <span class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-sky-200 border border-slate-700 text-xs font-bold">
                    <i class="fa-solid fa-user-astronaut text-sky-400"></i> Guest Explorer
                </span>
                <button onclick="window.app.openAuthModal('login')" class="btn-tactile px-3.5 py-2 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-display font-bold text-xs sm:text-sm transition">
                    <i class="fa-solid fa-key mr-1"></i> Log In / Sign Up
                </button>
            `;
    } else {
      guestBanner.classList.add("hidden");
      authArea.innerHTML = `
                <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-slate-900 border-2 border-emerald-400/40 text-xs sm:text-sm">
                    <i class="fa-solid fa-user-check text-emerald-400"></i>
                    <span class="font-display font-bold text-white truncate max-w-[130px]">${DomUtils.escapeHtml(this.user.name)}</span>
                    <span class="hidden md:inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">Saved</span>
                    <button onclick="window.app.logoutUser()" title="Log Out" class="text-slate-400 hover:text-rose-400 ml-1 transition">
                        <i class="fa-solid fa-right-from-bracket"></i>
                    </button>
                </div>
            `;
    }
  }

  updateTopCounters() {
    const factsEl = document.getElementById("nav-facts-count");
    const badgesEl = document.getElementById("nav-badges-count");
    if (factsEl)
      factsEl.textContent = `${this.progress.unlockedFactIds.length}/${MISSIONS_CONFIG.length}`;
    if (badgesEl)
      badgesEl.textContent = `${this.progress.earnedBadgeIds.length}/${MISSIONS_CONFIG.length}`;
  }

  setRobotDialogue(text, mood = "normal") {
    const avatarBox = document.getElementById("robot-avatar-box");
    const textEl = document.getElementById("robot-dialogue-text");
    const badgeEl = document.getElementById("robot-mood-badge");

    if (avatarBox) avatarBox.innerHTML = SvgAssets.getRobotSVG(mood);
    if (textEl) textEl.textContent = text;
    if (badgeEl) {
      badgeEl.textContent =
        mood === "happy" ? "YAY!" : mood === "hint" ? "TIP!" : "BUDDY";
      badgeEl.className = `absolute -bottom-1 -right-1 px-2 py-0.5 text-[10px] font-display font-bold uppercase rounded-full shadow ${
        mood === "happy"
          ? "bg-emerald-400 text-slate-950"
          : mood === "hint"
            ? "bg-amber-400 text-slate-950"
            : "bg-sky-400 text-slate-950"
      }`;
    }
  }

  triggerRobotTip() {
    const randomTip = ROBOT_TIPS[Math.floor(Math.random() * ROBOT_TIPS.length)];
    this.setRobotDialogue(randomTip, "hint");
  }

  navigate(viewName, missionId = null) {
    this.currentView = viewName;
    if (missionId) {
      this.activeMissionId = missionId;
      this.activeLessonIdx = 0;
      this.activeTab = "lessons";
      this.quizAnswers = {};
    }

    ["landing", "map", "archive", "badges"].forEach((tab) => {
      const desktopBtn = document.getElementById(`nav-${tab}`);
      const mobileBtn = document.getElementById(`mob-nav-${tab}`);
      const isActive =
        viewName === tab ||
        ((viewName === "mission" || viewName === "final") && tab === "map");
      if (desktopBtn) {
        desktopBtn.className = `nav-tab px-4 py-2 rounded-xl text-sm font-display font-semibold transition ${
          isActive
            ? "bg-sky-400 text-slate-950 font-bold shadow"
            : "text-slate-300 hover:text-white hover:bg-slate-800/60"
        }`;
      }
      if (mobileBtn) {
        mobileBtn.className = `px-3 py-1.5 rounded-xl text-xs font-display font-bold flex items-center gap-1.5 ${
          isActive ? "bg-sky-400 text-slate-950 shadow" : "text-slate-400"
        }`;
      }
    });

    this.renderCurrentView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  renderCurrentView() {
    const viewport = document.getElementById("app-viewport");
    if (!viewport) return;

    switch (this.currentView) {
      case "landing":
        viewport.innerHTML = ViewRenderer.renderLanding(this);
        break;
      case "map":
        viewport.innerHTML = ViewRenderer.renderMap(this);
        break;
      case "mission":
        viewport.innerHTML = ViewRenderer.renderMission(this);
        break;
      case "archive":
        viewport.innerHTML = ViewRenderer.renderArchive(this);
        break;
      case "badges":
        viewport.innerHTML = ViewRenderer.renderBadges(this);
        break;
      case "final":
        viewport.innerHTML = ViewRenderer.renderFinalMission(this);
        break;
      default:
        viewport.innerHTML = ViewRenderer.renderLanding(this);
    }
  }

  selectMapNode(missionId, isUnlocked) {
    if (!isUnlocked) {
      this.setRobotDialogue(
        "Hold on, Explorer! Finish the previous chapter first to unlock this destination!",
        "hint",
      );
      DomUtils.showToast(
        "Finish the previous chapter to unlock this destination!",
        "amber",
      );
      return;
    }
    const mission = MISSIONS_CONFIG.find((m) => m.id === missionId);
    if (mission) {
      this.setRobotDialogue(mission.robotIntro, "normal");
      this.navigate("mission", missionId);
    }
  }

  switchMissionTab(tab) {
    this.activeTab = tab;
    if (tab === "quiz") {
      this.setRobotDialogue(
        "Quiz Challenge time! Answer each question below. Click 'Ask A.R.I. for a Hint' if you need help!",
        "normal",
      );
    }
    this.renderCurrentView();
  }

  goToLesson(idx) {
    this.activeLessonIdx = idx;
    this.renderCurrentView();
  }

  prevLesson() {
    if (this.activeLessonIdx > 0) {
      this.activeLessonIdx--;
      this.renderCurrentView();
    }
  }

  nextLesson() {
    const mission = MISSIONS_CONFIG.find((m) => m.id === this.activeMissionId);
    if (mission && this.activeLessonIdx < mission.lessons.length - 1) {
      this.activeLessonIdx++;
      this.renderCurrentView();
    }
  }

  toggleHint(missionId, questionId) {
    const mission = MISSIONS_CONFIG.find((m) => m.id === missionId);
    const question = mission?.questions.find((q) => q.id === questionId);
    if (!question) return;

    this.quizAnswers[questionId] = {
      ...(this.quizAnswers[questionId] || {}),
      hintShown: true,
    };
    this.setRobotDialogue(`HINT: ${question.hint}`, "hint");
    this.renderCurrentView();
  }

  submitAnswer(missionId, questionId, selectedIdx) {
    const mission = MISSIONS_CONFIG.find((m) => m.id === missionId);
    const question = mission?.questions.find((q) => q.id === questionId);
    if (!question) return;

    const isCorrect = selectedIdx === question.correctIndex;
    this.quizAnswers[questionId] = {
      ...(this.quizAnswers[questionId] || {}),
      selectedIdx,
      isCorrect,
    };

    if (isCorrect) {
      this.setRobotDialogue(`AWESOME! ${question.explanation}`, "happy");
    } else {
      this.setRobotDialogue(
        "Almost! Give it another try or click the yellow Hint button!",
        "hint",
      );
    }

    const allCorrect = mission.questions.every(
      (q) => this.quizAnswers[q.id]?.isCorrect,
    );
    if (allCorrect) {
      const isFirstTime = !this.progress.completedMissionIds.includes(
        mission.id,
      );
      if (isFirstTime) this.progress.completedMissionIds.push(mission.id);
      if (!this.progress.earnedBadgeIds.includes(mission.badge.id))
        this.progress.earnedBadgeIds.push(mission.badge.id);
      if (!this.progress.unlockedFactIds.includes(mission.factCard.id))
        this.progress.unlockedFactIds.push(mission.factCard.id);

      this.saveProgressIfRegistered();

      if (isFirstTime) {
        DomUtils.showToast(
          `Unlocked "${mission.badge.name}" Badge & Fact Card!`,
          "emerald",
        );
        this.setRobotDialogue(
          `YAY! You finished ${mission.title} and earned the ${mission.badge.name} badge!`,
          "happy",
        );

        if (!this.user && mission.order === 1 && !this.chapter1PromptShown) {
          this.chapter1PromptShown = true;
          setTimeout(() => this.openChapter1SavePromptModal(mission), 650);
        }
      }
    }
    this.renderCurrentView();
  }

  submitFinalMissionAnswer(challengeIdx, selectedIdx) {
    const challenge = FINAL_MISSION_CONFIG.challenges[challengeIdx];
    if (!challenge) return;

    this.finalQuizAnswers[challengeIdx] = selectedIdx;
    const isCorrect = selectedIdx === challenge.correctIndex;

    if (isCorrect)
      this.setRobotDialogue(
        "Telemetry signal locked! That matches the right NASA spacecraft!",
        "happy",
      );
    else
      this.setRobotDialogue(
        "Signal mismatch! Think about which planet or region that transmission came from!",
        "hint",
      );

    const allCorrect = FINAL_MISSION_CONFIG.challenges.every(
      (c, idx) => this.finalQuizAnswers[idx] === c.correctIndex,
    );
    if (allCorrect && !this.progress.finalMissionCompleted) {
      this.progress.finalMissionCompleted = true;
      this.saveProgressIfRegistered();
      this.setRobotDialogue(FINAL_MISSION_CONFIG.robotCelebration, "happy");
      DomUtils.showToast(
        "Congratulations! You completed the entire Solar System Adventure!",
        "emerald",
      );
    }
    this.renderCurrentView();
  }

  openChapter1SavePromptModal(mission) {
    const modal = document.getElementById("modal-backdrop");
    const content = document.getElementById("modal-content");
    if (!modal || !content) return;
    modal.classList.remove("hidden");
    modal.classList.add("flex");

    content.innerHTML = `
            <div class="space-y-5 text-center sm:text-left">
                <div class="flex flex-col sm:flex-row items-center gap-4 border-b border-slate-800 pb-4">
                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br ${mission.badge.color} flex items-center justify-center text-white text-3xl shadow-lg flex-shrink-0">
                        <i class="${mission.badge.icon}"></i>
                    </div>
                    <div>
                        <span class="px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-display font-bold uppercase">Chapter 1 Complete!</span>
                        <h3 class="font-display font-bold text-xl sm:text-2xl text-white mt-1">Great Job, Moon Explorer! Want to Save Your Progress?</h3>
                    </div>
                </div>
                <div class="p-4 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-center gap-3 text-left">
                    <div class="w-12 h-12 flex-shrink-0">${SvgAssets.getRobotSVG("happy")}</div>
                    <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        <strong>A.R.I. says:</strong> "You just earned the <strong>${mission.badge.name}</strong> badge and unlocked <strong>Chapter 2: Mars</strong>! Create a quick username and password so you don't lose your badges!"
                    </p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <button onclick="window.app.openAuthModal('register')" class="btn-tactile w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 font-display font-bold text-sm sm:text-base flex items-center justify-center gap-2">
                        <i class="fa-solid fa-user-plus"></i><span>Create Account to Save</span>
                    </button>
                    <button onclick="window.app.openAuthModal('login')" class="btn-tactile w-full py-3.5 px-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-display font-bold text-sm sm:text-base flex items-center justify-center gap-2">
                        <i class="fa-solid fa-key text-amber-300"></i><span>Log In to Existing Account</span>
                    </button>
                </div>
                <div class="text-center pt-2 border-t border-slate-800/80">
                    <button onclick="window.app.closeModal()" class="text-xs sm:text-sm text-slate-400 hover:text-white font-bold underline">Keep Exploring as Guest for Now</button>
                </div>
            </div>
        `;
  }

  openAuthModal(mode = "register") {
    const modal = document.getElementById("modal-backdrop");
    const content = document.getElementById("modal-content");
    if (!modal || !content) return;
    modal.classList.remove("hidden");
    modal.classList.add("flex");

    const isRegister = mode !== "login";
    content.innerHTML = `
            <div class="space-y-5">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-2xl bg-sky-500/20 text-sky-300 flex items-center justify-center text-lg"><i class="fa-solid fa-user-astronaut"></i></div>
                        <div>
                            <h3 class="font-display font-bold text-xl text-white">${isRegister ? "Create Your Space Explorer Account" : "Welcome Back, Explorer!"}</h3>
                            <p class="text-xs text-slate-300">${isRegister ? "Pick a username and password to save your badges!" : "Enter your username and password."}</p>
                        </div>
                    </div>
                    <button onclick="window.app.closeModal()" class="text-slate-400 hover:text-white text-lg"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div class="grid grid-cols-2 gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
                    <button onclick="window.app.openAuthModal('register')" class="py-2 rounded-xl font-display font-bold text-xs sm:text-sm transition ${isRegister ? "bg-sky-400 text-slate-950 shadow" : "text-slate-400 hover:text-white"}"><i class="fa-solid fa-user-plus mr-1"></i> Create Account</button>
                    <button onclick="window.app.openAuthModal('login')" class="py-2 rounded-xl font-display font-bold text-xs sm:text-sm transition ${!isRegister ? "bg-sky-400 text-slate-950 shadow" : "text-slate-400 hover:text-white"}"><i class="fa-solid fa-right-to-bracket mr-1"></i> Log In</button>
                </div>
                <div id="auth-error-box" class="hidden p-3 rounded-xl bg-rose-500/20 border border-rose-400/40 text-rose-200 text-xs font-bold"></div>
                <form onsubmit="window.app.handleUsernamePasswordSubmit(event, '${isRegister ? "register" : "login"})" class="space-y-4">
                    <div>
                        <label class="block text-xs sm:text-sm font-display font-bold text-sky-200 mb-1.5"><i class="fa-solid fa-id-badge mr-1 text-sky-400"></i> Explorer Username</label>
                        <input id="auth-username" type="text" required autocomplete="username" placeholder="e.g., StarCadet99" class="w-full px-4 py-3 rounded-2xl bg-slate-900 border-2 border-slate-700 text-sm text-white focus:outline-none focus:border-sky-400">
                    </div>
                    <div>
                        <label class="block text-xs sm:text-sm font-display font-bold text-sky-200 mb-1.5"><i class="fa-solid fa-lock mr-1 text-amber-300"></i> Secret Password</label>
                        <input id="auth-password" type="password" required autocomplete="current-password" placeholder="At least 4 characters" class="w-full px-4 py-3 rounded-2xl bg-slate-900 border-2 border-slate-700 text-sm text-white focus:outline-none focus:border-sky-400">
                    </div>
                    <button type="submit" class="btn-tactile w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 to-sky-400 text-slate-950 font-display font-bold text-base transition">
                        <i class="fa-solid ${isRegister ? "fa-floppy-disk" : "fa-rocket"} mr-1.5"></i> ${isRegister ? "Save My Account & Progress!" : "Log In & Load My Progress!"}
                    </button>
                </form>
                <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs sm:text-sm text-slate-300">
                    <span>Just want to explore first?</span>
                    <button onclick="window.app.continueAsGuest()" class="text-amber-300 hover:underline font-display font-bold">Continue as Guest <i class="fa-solid fa-arrow-right ml-1"></i></button>
                </div>
            </div>
        `;
  }

  handleUsernamePasswordSubmit(e, mode) {
    e.preventDefault();
    const username = document.getElementById("auth-username")?.value;
    const password = document.getElementById("auth-password")?.value;
    if (mode === "register")
      this.registerWithUsernamePassword(username, password);
    else this.loginWithUsernamePassword(username, password);
  }

  openHowToPlayModal() {
    const modal = document.getElementById("modal-backdrop");
    const content = document.getElementById("modal-content");
    if (!modal || !content) return;
    modal.classList.remove("hidden");
    modal.classList.add("flex");

    content.innerHTML = `
            <div class="space-y-4">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h3 class="font-display font-bold text-lg text-white"><i class="fa-regular fa-circle-question text-sky-400 mr-2"></i>How to Play</h3>
                    <button onclick="window.app.closeModal()" class="text-slate-400 hover:text-white"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <ol class="list-decimal list-inside space-y-2.5 text-xs sm:text-sm text-slate-200">
                    <li>Open the <strong>Space Map</strong> and select an unlocked destination starting with <strong>Chapter 1: The Moon</strong>.</li>
                    <li>Read the fun <strong>Lesson Cards</strong> with your robot buddy <strong>A.R.I.</strong></li>
                    <li>Switch to the <strong>Quiz Challenge</strong> tab and answer the 3 questions. Click <strong>Ask A.R.I. for a Hint</strong> anytime!</li>
                    <li>Earn your <strong>Mission Badge</strong> and <strong>Fact Card</strong> to light up the next planet on the map.</li>
                    <li>After finishing Chapter 1, create a simple <strong>Username and Password</strong> account to save all your badges!</li>
                </ol>
                <div class="flex justify-end">
                    <button onclick="window.app.closeModal()" class="btn-tactile px-5 py-2 rounded-xl bg-sky-400 text-slate-950 font-display font-bold text-xs">Let's Play!</button>
                </div>
            </div>
        `;
  }

  resetCurrentProgressPrompt() {
    const modal = document.getElementById("modal-backdrop");
    const content = document.getElementById("modal-content");
    if (!modal || !content) return;
    modal.classList.remove("hidden");
    modal.classList.add("flex");

    content.innerHTML = `
            <div class="space-y-4">
                <h3 class="font-display font-bold text-lg text-white">Start Over from Chapter 1?</h3>
                <p class="text-xs sm:text-sm text-slate-300">This will reset your current badges, unlocked chapters, and fact cards so you can replay the whole adventure from the beginning.</p>
                <div class="flex justify-end gap-2">
                    <button onclick="window.app.closeModal()" class="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold">Cancel</button>
                    <button onclick="window.app.confirmResetProgress()" class="btn-tactile px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-400 text-white font-display font-bold text-xs">Yes, Start Over</button>
                </div>
            </div>
        `;
  }

  confirmResetProgress() {
    this.progress = createFreshProgress();
    this.quizAnswers = {};
    this.finalQuizAnswers = {};
    this.chapter1PromptShown = false;
    this.saveProgressIfRegistered();
    this.closeModal();
    this.navigate("landing");
    DomUtils.showToast("Adventure reset! Ready for Chapter 1!", "rose");
  }

  closeModal() {
    const modal = document.getElementById("modal-backdrop");
    if (!modal) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  window.app = new NasaSolarApp();
});
