"use strict";
const CHAPTERS = [
  "A Dream Among the Stars",
  "An Unexpected Landing",
  "Friends from the Moon",
  "Ready for Mars!",
  "Welcome to Mars!",
  "Kite’s Own Adventure",
];
const STORY = [
  {
    id: 1,
    chapter: 1,
    title: "A Dream Among the Stars",
    env: "earth",
    hardware: null,
    f: 0,
    lines: [
      {
        speaker: "narrator",
        text: "Once upon a time, there was a little robot named Kite.",
        sourceLine: 0,
      },
      {
        speaker: "narrator",
        text: "He was curious, cheerful, and always dreaming of exploring distant planets.",
        sourceLine: 1,
      },
    ],
  },
  {
    id: 2,
    chapter: 1,
    title: "A Dream Among the Stars",
    env: "earth",
    hardware: null,
    f: 0,
    lines: [
      {
        speaker: "kite",
        text: "I want to visit Mars, just like the amazing robots who explored it before me!",
        sourceLine: 2,
      },
    ],
  },
  {
    id: 3,
    chapter: 1,
    title: "A Dream Among the Stars",
    env: "earth",
    hardware: null,
    f: 0.8,
    lines: [
      {
        speaker: "narrator",
        text: "With his spaceship ready, Kite waved goodbye to Earth and began his adventure.",
        sourceLine: 3,
      },
    ],
  },
  {
    id: 4,
    chapter: 2,
    title: "An Unexpected Landing",
    env: "e2m",
    hardware: null,
    f: 0,
    lines: [
      {
        speaker: "narrator",
        text: "WHOOSH!",
        sourceLine: 5,
      },
      {
        speaker: "narrator",
        text: "Kite's spaceship zoomed through space until suddenly...",
        sourceLine: 6,
      },
      {
        speaker: "narrator",
        text: "BEEP! BEEP! BEEP!",
        sourceLine: 7,
      },
      {
        speaker: "kite",
        text: "Oh, no! What's happening?!",
        sourceLine: 8,
      },
      {
        speaker: "narrator",
        text: "An electrical disturbance damaged his spaceship's power distribution system. His navigation sensors and mechanical controls began malfunctioning.",
        sourceLine: 9,
      },
      {
        speaker: "narrator",
        text: "With his spaceship becoming difficult to control, Kite activated its emergency landing system.",
        sourceLine: 10,
      },
    ],
  },
  {
    id: 5,
    chapter: 2,
    title: "An Unexpected Landing",
    env: "moon",
    hardware: null,
    f: 0,
    lines: [
      {
        speaker: "narrator",
        text: "He landed safely on the Moon, but the landing damaged some of his spaceship's supports and external components.",
        sourceLine: 12,
      },
    ],
  },
  {
    id: 6,
    chapter: 2,
    title: "An Unexpected Landing",
    env: "moon",
    hardware: null,
    f: 0,
    lines: [
      {
        speaker: "kite",
        text: "Oh, dear! My Mars adventure will have to wait. I need to fix my spaceship first!",
        sourceLine: 13,
      },
      {
        speaker: "narrator",
        text: "As Kite inspected the damage, he spotted some abandoned lunar exploration hardware nearby.",
        sourceLine: 14,
      },
      {
        speaker: "narrator",
        text: "Perhaps they could help!",
        sourceLine: 15,
      },
    ],
  },
  {
    id: 7,
    chapter: 3,
    title: "Friends from the Moon",
    env: "moon",
    hardware: "lmod",
    f: 0.23,
    lines: [
      {
        speaker: "lmod",
        text: "Hello, little explorer! What's wrong?",
        sourceLine: 18,
      },
      {
        speaker: "narrator",
        text: "asked a machine with four sturdy landing legs.",
        sourceLine: 18,
      },
      {
        speaker: "kite",
        text: "My spaceship's landing supports are damaged. Can you help?",
        sourceLine: 19,
      },
      {
        speaker: "lmod",
        text: "I'm the Apollo Lunar Module! I helped astronauts travel from lunar orbit to the Moon's surface and back again. My descent stage helped them land safely.",
        sourceLine: 20,
      },
      {
        speaker: "kite",
        text: "That's amazing!",
        sourceLine: 21,
      },
      {
        speaker: "lmod",
        text: "I can share some suitable structural brackets and fasteners to help reinforce your spaceship's landing supports.",
        sourceLine: 22,
      },
      {
        speaker: "kite",
        text: "Thank you, Apollo! One problem solved!",
        sourceLine: 23,
      },
    ],
  },
  {
    id: 8,
    chapter: 3,
    title: "Friends from the Moon",
    env: "moon",
    hardware: "lrv",
    f: 0.43,
    lines: [
      {
        speaker: "narrator",
        text: "Further ahead, Kite spotted a four-wheeled vehicle.",
        sourceLine: 25,
      },
      {
        speaker: "lrv",
        text: "I'm the Lunar Roving Vehicle! I helped Apollo astronauts travel across the Moon and explore farther from their landing sites.",
        sourceLine: 26,
      },
      {
        speaker: "kite",
        text: "That's so cool! My spaceship's electric motors and mechanical controls are damaged. Can you help?",
        sourceLine: 27,
      },
      {
        speaker: "lrv",
        text: "Of course! My wheels were powered by electric motors. You can use a compatible motor component to help restore your spaceship's mechanical system.",
        sourceLine: 28,
      },
      {
        speaker: "kite",
        text: "Thank you! I'm one step closer to Mars!",
        sourceLine: 29,
      },
    ],
  },
  {
    id: 9,
    chapter: 3,
    title: "Friends from the Moon",
    env: "moon",
    hardware: "als",
    f: 0.64,
    lines: [
      {
        speaker: "narrator",
        text: "Kite continued until he found a collection of scientific instruments.",
        sourceLine: 31,
      },
      {
        speaker: "als",
        text: "Hello! I'm ALSEP, the Apollo Lunar Surface Experiments Package. I was a collection of instruments that studied the Moon, including its moonquakes and magnetic field.",
        sourceLine: 32,
      },
      {
        speaker: "kite",
        text: "Wow! My spaceship's monitoring system is damaged. I can't properly check its electrical condition!",
        sourceLine: 33,
      },
      {
        speaker: "als",
        text: "I used electronic instruments, cables, and equipment to collect and transmit scientific information. Some compatible electronic components and cables may help restore your monitoring system.",
        sourceLine: 34,
      },
      {
        speaker: "kite",
        text: "Thank you, ALSEP! Now I can check on my spaceship's condition!",
        sourceLine: 35,
      },
    ],
  },
  {
    id: 10,
    chapter: 3,
    title: "Friends from the Moon",
    env: "moon",
    hardware: "surv",
    f: 0.84,
    lines: [
      {
        speaker: "narrator",
        text: "Nearby, Kite discovered an old robotic lander.",
        sourceLine: 37,
      },
      {
        speaker: "surv",
        text: "I'm Surveyor! I helped demonstrate that spacecraft could land safely on the Moon and studied its surface.",
        sourceLine: 38,
      },
      {
        speaker: "kite",
        text: "That's incredible! I can't properly inspect the damaged parts of my spaceship. They're difficult to reach!",
        sourceLine: 39,
      },
      {
        speaker: "surv",
        text: "My cameras helped scientists observe the lunar surface, and my scoop collected and examined lunar soil.",
        sourceLine: 40,
      },
      {
        speaker: "surv",
        text: "You can use a compatible camera component to inspect your spaceship and a scoop attachment to clear loose lunar dust.",
        sourceLine: 40,
      },
      {
        speaker: "kite",
        text: "Perfect! Thank you, Surveyor!",
        sourceLine: 41,
      },
    ],
  },
  {
    id: 11,
    chapter: 4,
    title: "Ready for Mars!",
    env: "moon",
    hardware: null,
    f: 0.98,
    lines: [
      {
        speaker: "narrator",
        text: "With all four components collected, Kite returned to his spaceship.",
        sourceLine: 43,
      },
      {
        speaker: "narrator",
        text: "He reinforced his landing supports using Apollo's structural materials,",
        sourceLine: 44,
      },
      {
        speaker: "narrator",
        text: "restored his mechanical controls with the Lunar Rover's motor components,",
        sourceLine: 44,
      },
      {
        speaker: "narrator",
        text: "and repaired his monitoring circuits using ALSEP's compatible electronic components.",
        sourceLine: 44,
      },
      {
        speaker: "narrator",
        text: "Finally, he used Surveyor's camera and scoop attachment to inspect his spaceship and clear loose debris.",
        sourceLine: 45,
      },
    ],
  },
  {
    id: 12,
    chapter: 4,
    title: "Ready for Mars!",
    env: "moon",
    hardware: null,
    f: 0.98,
    lines: [
      {
        speaker: "kite",
        text: "Time for a final system check!",
        sourceLine: 46,
      },
      {
        speaker: "narrator",
        text: "BEEP! BEEP! BEEP!",
        sourceLine: 47,
      },
      {
        speaker: "narrator",
        text: "His power, navigation, communication, maneuvering, and landing systems were working again!",
        sourceLine: 48,
      },
      {
        speaker: "kite",
        text: "HOORAY! I'm ready for Mars!",
        sourceLine: 49,
      },
    ],
  },
  {
    id: 13,
    chapter: 4,
    title: "Ready for Mars!",
    env: "moon",
    hardware: null,
    f: 0.98,
    lines: [
      {
        speaker: "narrator",
        text: "Kite waved goodbye to his Moon friends.",
        sourceLine: 50,
      },
      {
        speaker: "kite",
        text: "Thank you for helping me. I couldn't have done it without you!",
        sourceLine: 51,
      },
      {
        speaker: "narrator",
        text: "THREE! TWO! ONE!",
        sourceLine: 52,
      },
      {
        speaker: "narrator",
        text: "WHOOSH!",
        sourceLine: 53,
      },
    ],
  },
  {
    id: 14,
    chapter: 5,
    title: "Welcome to Mars!",
    env: "mars",
    hardware: null,
    f: 0,
    lines: [
      {
        speaker: "narrator",
        text: "After a long journey, Kite finally arrived at the Red Planet.",
        sourceLine: 55,
      },
      {
        speaker: "kite",
        text: "MARS! I MADE IT!",
        sourceLine: 56,
      },
      {
        speaker: "narrator",
        text: "As he explored, he encountered the legendary robots he had always admired.",
        sourceLine: 57,
      },
    ],
  },
  {
    id: 15,
    chapter: 5,
    title: "Welcome to Mars!",
    env: "mars",
    hardware: "soj",
    f: 0.16,
    lines: [
      {
        speaker: "soj",
        text: "Hello! I'm Sojourner, the first successful wheeled rover to operate on Mars. I explored Martian rocks and soil to help scientists understand this planet.",
        sourceLine: 59,
      },
      {
        speaker: "kite",
        text: "Wow! You helped start the journey for future Mars rovers!",
        sourceLine: 60,
      },
      {
        speaker: "soj",
        text: "That's right! Never stop being curious, Kite!",
        sourceLine: 61,
      },
    ],
  },
  {
    id: 16,
    chapter: 5,
    title: "Welcome to Mars!",
    env: "mars",
    hardware: "spir",
    f: 0.3,
    lines: [
      {
        speaker: "spir",
        text: "Hello! I'm Spirit!",
        sourceLine: 63,
      },
      {
        speaker: "opp",
        text: "And I'm Opportunity!",
        sourceLine: 64,
      },
      {
        speaker: "kite",
        text: "Are you twins?!",
        sourceLine: 65,
      },
      {
        speaker: "narrator",
        text: "Kite asked.",
        sourceLine: 65,
      },
      {
        speaker: "spir",
        text: "Yes! We explored Mars for many years, studying its rocks and soil. We found evidence that liquid water once existed on ancient Mars.",
        sourceLine: 66,
      },
      {
        speaker: "kite",
        text: "That's twice the adventure!",
        sourceLine: 67,
      },
      {
        speaker: "narrator",
        text: "The twins laughed.",
        sourceLine: 68,
      },
    ],
  },
  {
    id: 17,
    chapter: 5,
    title: "Welcome to Mars!",
    env: "mars",
    hardware: "vik1",
    f: 0.48,
    lines: [
      {
        speaker: "vik1",
        text: "We are Viking 1 and Viking 2,",
        sourceLine: 70,
      },
      {
        speaker: "narrator",
        text: "said the two landers.",
        sourceLine: 70,
      },
      {
        speaker: "vik2",
        text: "We were among the first spacecraft to successfully operate on Mars. We studied the Martian environment and conducted experiments to investigate the possibility of life.",
        sourceLine: 71,
      },
      {
        speaker: "kite",
        text: "Did you find aliens?",
        sourceLine: 72,
      },
      {
        speaker: "vik1",
        text: "Not quite! Our experiments did not confirm the presence of life.",
        sourceLine: 73,
      },
      {
        speaker: "kite",
        text: "That's okay! Every experiment teaches us something!",
        sourceLine: 74,
      },
    ],
  },
  {
    id: 18,
    chapter: 5,
    title: "Welcome to Mars!",
    env: "mars",
    hardware: "phx",
    f: 0.65,
    lines: [
      {
        speaker: "phx",
        text: "Hello! I'm Phoenix. I studied Martian soil and discovered water ice beneath the surface!",
        sourceLine: 76,
      },
      {
        speaker: "kite",
        text: "There's water on Mars?!",
        sourceLine: 77,
      },
      {
        speaker: "phx",
        text: "Yes! Frozen water ice!",
        sourceLine: 78,
      },
      {
        speaker: "kite",
        text: "That's the coolest discovery ever!",
        sourceLine: 79,
      },
    ],
  },
  {
    id: 19,
    chapter: 5,
    title: "Welcome to Mars!",
    env: "mars",
    hardware: "ins",
    f: 0.77,
    lines: [
      {
        speaker: "ins",
        text: "Hello, Kite. I'm InSight. I studied the inside of Mars by measuring marsquakes and other vibrations.",
        sourceLine: 81,
      },
      {
        speaker: "kite",
        text: "So you listen to the planet?",
        sourceLine: 82,
      },
      {
        speaker: "ins",
        text: "Exactly! Sometimes, the best way to learn is to listen carefully.",
        sourceLine: 83,
      },
      {
        speaker: "kite",
        text: "I'll remember that!",
        sourceLine: 84,
      },
    ],
  },
  {
    id: 20,
    chapter: 5,
    title: "Welcome to Mars!",
    env: "mars",
    hardware: "ing",
    f: 0.89,
    lines: [
      {
        speaker: "ing",
        text: "Bzzzz... Hello down there!",
        sourceLine: 86,
      },
      {
        speaker: "narrator",
        text: "called a little helicopter.",
        sourceLine: 86,
      },
      {
        speaker: "kite",
        text: "Whoa! You can fly?!",
        sourceLine: 87,
      },
      {
        speaker: "ing",
        text: "I'm Ingenuity, the first aircraft to achieve powered, controlled flight on another planet.",
        sourceLine: 88,
      },
      {
        speaker: "kite",
        text: "That's incredible!",
        sourceLine: 89,
      },
      {
        speaker: "ing",
        text: "My rotor blades were damaged, so I can no longer fly. But I showed the world that powered flight on Mars was possible!",
        sourceLine: 90,
      },
      {
        speaker: "kite",
        text: "You're still an amazing explorer!",
        sourceLine: 91,
      },
    ],
  },
  {
    id: 21,
    chapter: 6,
    title: "Kite’s Own Adventure",
    env: "mars",
    hardware: null,
    f: 0.95,
    lines: [
      {
        speaker: "narrator",
        text: "After meeting the legendary explorers, Kite looked across the Martian landscape.",
        sourceLine: 93,
      },
      {
        speaker: "kite",
        text: "I finally understand! Every explorer has something special to contribute. Some travel on wheels, some study the ground, and others even fly!",
        sourceLine: 94,
      },
      {
        speaker: "narrator",
        text: "He turned toward his camera and smiled.",
        sourceLine: 95,
      },
      {
        speaker: "kite",
        text: "Thank you for joining me on this adventure and helping me learn about these amazing explorers!",
        sourceLine: 96,
      },
      {
        speaker: "narrator",
        text: "Kite stood tall, ready to begin his own mission.",
        sourceLine: 97,
      },
      {
        speaker: "kite",
        text: "And remember, little explorers: Sometimes things don't go as planned. You might make mistakes or even fail, but that doesn't mean your adventure is over!",
        sourceLine: 98,
      },
      {
        speaker: "kite",
        text: "Whenever you fall, believe in yourself, get back up on your own two feet, and try again!",
        sourceLine: 99,
      },
      {
        speaker: "narrator",
        text: "Kite gave a cheerful salute.",
        sourceLine: 100,
      },
      {
        speaker: "kite",
        text: "Now, it's my turn to explore Mars!",
        sourceLine: 101,
      },
    ],
  },
  {
    id: 22,
    chapter: 6,
    title: "Kite’s Own Adventure",
    env: "mars",
    hardware: null,
    f: 1,
    lines: [
      {
        speaker: "narrator",
        text: "And with a happy beep, he walked toward the horizon.",
        sourceLine: 102,
      },
      {
        speaker: "narrator",
        text: "THE END.",
        sourceLine: 103,
      },
    ],
  },
];
const HW = {
  lmod: {
    nm: "Apollo Lunar Module",
    full: "Apollo Lunar Module",
    intro: "A two-stage spacecraft that carried astronauts to the Moon.",
    stt: "Inactive; descent stages left on the lunar surface.",
    loc: "Descent stages remain at the Apollo landing sites on the Moon.",
    source: "https://science.nasa.gov/mission/apollo-11/",
    note: "The ascent stage departed; only the descent stage is shown resting here. The repair exchange is part of Kite’s fictional story.",
    rows: [
      [
        "Mission",
        "Transported astronauts between lunar orbit and the lunar surface.",
      ],
      ["Launch / mission dates", "Apollo 11 launch: July 16, 1969."],
      [
        "Main components",
        "Descent stage, landing legs, rocket engine, and ascent stage.",
      ],
      [
        "Final resting place",
        "Descent stages remain at the Apollo landing sites on the Moon.",
      ],
      [
        "Operational status",
        "Inactive; descent stages left on the lunar surface.",
      ],
      [
        "Historical contribution",
        "Helped astronauts land safely and return to lunar orbit.",
      ],
    ],
  },
  lrv: {
    nm: "Lunar Roving Vehicle",
    full: "Lunar Roving Vehicle",
    intro: "The four-wheeled vehicle driven by Apollo astronauts.",
    stt: "Inactive; three rovers remain permanently parked.",
    loc: "Apollo 15, 16, and 17 landing sites on the Moon.",
    source: "https://science.nasa.gov/mission/apollo-15/",
    note: "",
    rows: [
      ["Mission", "Helped astronauts travel across the lunar surface."],
      ["Launch / mission dates", "First use: Apollo 15, July 1971."],
      [
        "Main components",
        "Four wheels, electric drive motors, batteries, steering, and navigation equipment.",
      ],
      [
        "Final resting place",
        "Apollo 15, 16, and 17 landing sites on the Moon.",
      ],
      [
        "Operational status",
        "Inactive; three rovers remain permanently parked.",
      ],
      [
        "Historical contribution",
        "Allowed astronauts to explore farther from their landing sites.",
      ],
    ],
  },
  als: {
    nm: "ALSEP",
    full: "ALSEP",
    intro: "Apollo Lunar Surface Experiments Package.",
    stt: "Deactivated September 30, 1977.",
    loc: "Several Apollo landing sites on the Moon.",
    source:
      "https://history.nasa.gov/wp-content/uploads/static/history/alsj/HamishALSEP.html",
    note: "",
    rows: [
      ["Mission", "Studied lunar activity and the lunar environment."],
      [
        "Launch / mission dates",
        "First deployment: Apollo 12, November 1969; later Apollo missions followed.",
      ],
      [
        "Main components",
        "Seismometers, magnetometers, cables, antennas, and power systems; instruments varied by mission.",
      ],
      [
        "Final resting place",
        "Several Apollo landing sites on the Moon.",
      ],
      ["Operational status", "Deactivated September 30, 1977."],
      [
        "Historical contribution",
        "Measured moonquakes and other properties of the lunar environment.",
      ],
    ],
  },
  surv: {
    nm: "Surveyor Lander",
    full: "Surveyor Lander",
    intro: "A robotic pioneer of soft lunar landings.",
    stt: "Inactive; all Surveyor missions have ended.",
    loc: "Surveyor landing sites on the Moon.",
    source: "https://nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html",
    note: "The story represents the Surveyor family. Surveyor 1 did not carry a scoop; Surveyors 3 and 7 did.",
    rows: [
      [
        "Mission",
        "Tested soft lunar landings and examined the lunar surface.",
      ],
      [
        "Launch / mission dates",
        "First landing: Surveyor 1, June 2, 1966.",
      ],
      [
        "Main components",
        "Cameras, landing legs, antennas; soil-sampling scoops on Surveyors 3 and 7.",
      ],
      ["Final resting place", "Surveyor landing sites on the Moon."],
      [
        "Operational status",
        "Inactive; all Surveyor missions have ended.",
      ],
      [
        "Historical contribution",
        "Demonstrated safe landing techniques and examined lunar soil.",
      ],
    ],
  },
  soj: {
    nm: "Sojourner",
    full: "Sojourner",
    intro: "The Little Pioneer.",
    stt: "Inactive; last data transmission September 27, 1997.",
    loc: "Ares Vallis, Mars, near the Pathfinder lander.",
    source: "https://science.nasa.gov/mission/mars-pathfinder/",
    note: "",
    rows: [
      ["Mission", "Explored Martian rocks and soil."],
      [
        "Launch / mission dates",
        "Launch: December 4, 1996. Landing: July 4, 1997.",
      ],
      [
        "Main components",
        "Six wheels, solar panels, cameras, and Alpha Proton X-ray Spectrometer (APXS).",
      ],
      [
        "Final resting place",
        "Ares Vallis, Mars, near the Pathfinder lander.",
      ],
      [
        "Operational status",
        "Inactive; last data transmission September 27, 1997.",
      ],
      [
        "Historical contribution",
        "First successful wheeled rover to operate on Mars.",
      ],
    ],
  },
  spir: {
    nm: "Spirit",
    full: "Spirit",
    intro: "One of the Twin Explorers.",
    stt: "Inactive; mission ended in 2011.",
    loc: "Gusev Crater, Mars.",
    source:
      "https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/",
    note: "",
    rows: [
      [
        "Mission",
        "Studied Martian rocks, soil, and evidence of ancient water.",
      ],
      [
        "Launch / mission dates",
        "Launch: June 10, 2003. Landing: January 2004.",
      ],
      [
        "Main components",
        "Six wheels, solar panels, robotic arms, cameras, and scientific instruments.",
      ],
      ["Final resting place", "Gusev Crater, Mars."],
      ["Operational status", "Inactive; mission ended in 2011."],
      [
        "Historical contribution",
        "Found evidence that liquid water existed on ancient Mars.",
      ],
    ],
  },
  opp: {
    nm: "Opportunity",
    full: "Opportunity",
    intro: "One of the Twin Explorers.",
    stt: "Inactive; mission ended in 2019.",
    loc: "Perseverance Valley, Endeavour Crater, Mars.",
    source:
      "https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/",
    note: "",
    rows: [
      [
        "Mission",
        "Studied Martian rocks, soil, and evidence of ancient water.",
      ],
      [
        "Launch / mission dates",
        "Launch: July 7, 2003. Landing: January 2004.",
      ],
      [
        "Main components",
        "Six wheels, solar panels, robotic arms, cameras, and scientific instruments.",
      ],
      [
        "Final resting place",
        "Perseverance Valley, Endeavour Crater, Mars.",
      ],
      ["Operational status", "Inactive; mission ended in 2019."],
      [
        "Historical contribution",
        "Found evidence that liquid water existed on ancient Mars.",
      ],
    ],
  },
  vik1: {
    nm: "Viking 1",
    full: "Viking 1",
    intro: "One of the Life Detectives.",
    stt: "Inactive; lander stopped communicating in 1982.",
    loc: "Chryse Planitia, Mars.",
    source: "https://science.nasa.gov/mission/viking-1/",
    note: "",
    rows: [
      [
        "Mission",
        "Studied the Martian atmosphere, soil, and possible signs of life.",
      ],
      [
        "Launch / mission dates",
        "Launch: August 20, 1975. Landing: July 20, 1976.",
      ],
      [
        "Main components",
        "Cameras, robotic sampling arms, biological laboratories, and weather instruments.",
      ],
      ["Final resting place", "Chryse Planitia, Mars."],
      [
        "Operational status",
        "Inactive; lander stopped communicating in 1982.",
      ],
      [
        "Historical contribution",
        "Conducted life-detection experiments; the experiments did not confirm life.",
      ],
    ],
  },
  vik2: {
    nm: "Viking 2",
    full: "Viking 2",
    intro: "One of the Life Detectives.",
    stt: "Inactive; lander stopped communicating in 1980.",
    loc: "Utopia Planitia, Mars.",
    source: "https://science.nasa.gov/mission/viking-2/",
    note: "",
    rows: [
      [
        "Mission",
        "Studied the Martian atmosphere, soil, and possible signs of life.",
      ],
      [
        "Launch / mission dates",
        "Launch: September 9, 1975. Landing: September 3, 1976.",
      ],
      [
        "Main components",
        "Cameras, robotic sampling arms, biological laboratories, and weather instruments.",
      ],
      ["Final resting place", "Utopia Planitia, Mars."],
      [
        "Operational status",
        "Inactive; lander stopped communicating in 1980.",
      ],
      [
        "Historical contribution",
        "Conducted life-detection experiments; the experiments did not confirm life.",
      ],
    ],
  },
  phx: {
    nm: "Phoenix",
    full: "Phoenix",
    intro: "The Ice Detective.",
    stt: "Inactive; last communication November 2, 2008. Mission end announced November 10, 2008.",
    loc: "Vastitas Borealis, northern polar region of Mars.",
    source: "https://science.nasa.gov/mission/mars-phoenix/",
    note: "The supplied November 2 date is the last communication date.",
    rows: [
      [
        "Mission",
        "Studied Martian soil and searched for underground water ice.",
      ],
      [
        "Launch / mission dates",
        "Launch: August 4, 2007. Landing: May 25, 2008.",
      ],
      [
        "Main components",
        "Robotic arm, cameras, soil-analysis instruments, miniature ovens, and solar panels.",
      ],
      [
        "Final resting place",
        "Vastitas Borealis, northern polar region of Mars.",
      ],
      [
        "Operational status",
        "Inactive; last communication November 2, 2008. Mission end announced November 10, 2008.",
      ],
      [
        "Historical contribution",
        "Confirmed water ice beneath the surface.",
      ],
    ],
  },
  ins: {
    nm: "InSight",
    full: "InSight",
    intro: "The Planet Listener.",
    stt: "Inactive; last contact December 15, 2022. NASA announced retirement December 21, 2022, after power loss.",
    loc: "Elysium Planitia, Mars.",
    source:
      "https://www.nasa.gov/missions/insight/nasa-retires-insight-mars-lander-mission-after-years-of-science/",
    note: "The supplied December 15 date is the last contact date, distinct from the retirement announcement.",
    rows: [
      [
        "Mission",
        "Studied the internal structure of Mars and detected marsquakes.",
      ],
      [
        "Launch / mission dates",
        "Launch: May 5, 2018. Landing: November 26, 2018.",
      ],
      [
        "Main components",
        "Seismometer, heat-flow probe, robotic arm, and solar panels.",
      ],
      ["Final resting place", "Elysium Planitia, Mars."],
      [
        "Operational status",
        "Inactive; last contact December 15, 2022. NASA announced retirement December 21, 2022, after power loss.",
      ],
      [
        "Historical contribution",
        "Measured marsquakes and vibrations to study the Martian interior.",
      ],
    ],
  },
  ing: {
    nm: "Ingenuity",
    full: "Ingenuity",
    intro: "The Flying Explorer.",
    stt: "Flight mission ended January 25, 2024, after rotor damage during flight 72 on January 18. It can no longer fly.",
    loc: "Neretva Vallis, Jezero Crater, Mars.",
    source:
      "https://www.nasa.gov/news-release/after-three-years-on-mars-nasas-ingenuity-helicopter-mission-ends/",
    note: "Any rotating-rotor demonstration is a labeled historical illustration; the resting helicopter stays grounded.",
    rows: [
      [
        "Mission",
        "Demonstrated powered, controlled flight on another planet.",
      ],
      [
        "Launch / mission dates",
        "Launch: July 30, 2020, aboard Mars 2020. Landing: February 18, 2021, with Perseverance.",
      ],
      [
        "Main components",
        "Four carbon-fiber rotor blades, electric motors, solar panel, batteries, and cameras.",
      ],
      ["Final resting place", "Neretva Vallis, Jezero Crater, Mars."],
      [
        "Operational status",
        "Flight mission ended January 25, 2024, after rotor damage during flight 72 on January 18. It can no longer fly.",
      ],
      [
        "Historical contribution",
        "First aircraft to achieve powered, controlled flight on another planet.",
      ],
    ],
  },
};
const VOICES = {
  narrator: {
    name: "Narrator",
    g: "f",
    p: 1.03,
    r: 1.02,
    vi: 0,
    hue: 0,
  },
  kite: {
    name: "Kite",
    g: "f",
    p: 1.35,
    r: 1.08,
    vi: 1,
    hue: 27,
  },
  lmod: {
    name: "Apollo Lunar Module",
    g: "m",
    p: 0.82,
    r: 0.94,
    vi: 2,
    hue: 54,
  },
  lrv: {
    name: "Lunar Roving Vehicle",
    g: "m",
    p: 1.08,
    r: 1.03,
    vi: 3,
    hue: 81,
  },
  als: {
    name: "ALSEP",
    g: "f",
    p: 1.06,
    r: 0.96,
    vi: 4,
    hue: 108,
  },
  surv: {
    name: "Surveyor",
    g: "m",
    p: 1.15,
    r: 0.97,
    vi: 5,
    hue: 135,
  },
  soj: {
    name: "Sojourner",
    g: "f",
    p: 1.43,
    r: 1.06,
    vi: 6,
    hue: 162,
  },
  spir: {
    name: "Spirit",
    g: "m",
    p: 1.18,
    r: 1.1,
    vi: 7,
    hue: 189,
  },
  opp: {
    name: "Opportunity",
    g: "f",
    p: 1.24,
    r: 1.04,
    vi: 8,
    hue: 216,
  },
  vik1: {
    name: "Viking 1",
    g: "m",
    p: 0.9,
    r: 0.95,
    vi: 9,
    hue: 243,
  },
  vik2: {
    name: "Viking 2",
    g: "m",
    p: 1.02,
    r: 1.0,
    vi: 10,
    hue: 270,
  },
  phx: {
    name: "Phoenix",
    g: "f",
    p: 1.3,
    r: 1.07,
    vi: 11,
    hue: 297,
  },
  ins: {
    name: "InSight",
    g: "m",
    p: 0.94,
    r: 0.92,
    vi: 12,
    hue: 324,
  },
  ing: {
    name: "Ingenuity",
    g: "f",
    p: 1.5,
    r: 1.12,
    vi: 13,
    hue: 351,
  },
};
const CH = [
  {
    id: "earth",
    n: "EARTH",
    h: "PROLOGUE : EARTH",
    d: "EARTH",
    q: "One little robot. One big dream.",
    k: "earth",
    launch: 1,
    km: 0,
    bg: 12181759,
    sky: [
      [0, "#2f86e8"],
      [0.28, "#6fb8ff"],
      [0.5, "#cfeaff"],
      [1, "#cfeaff"],
    ],
    gr: [5814336, 5221944],
    amp: 0.3,
    cr: [],
    mh: 0,
    lt: 1.35,
    hs: 14676223,
    hg: 4880954,
    sc: 16773328,
    fg: [90, 320],
    tc: 3824170,
    pts: [
      [0, 0, 5],
      [0, 0, -12],
    ],
    chat: [],
    subs: [],
  },
  {
    id: "e2m",
    n: "EARTH \u2192 MOON",
    h: "CHAPTER 1 : EARTH \u2192 MOON",
    d: "THE MOON",
    q: "A dream of Mars... with a bump on the way.",
    sp: 1,
    k: "space",
    bg: 132111,
    dm: [
      [0, 400],
      [1, 384400],
    ],
    pts: [
      [0, 0, 0],
      [5, 2, -20],
      [0, 0, -50],
    ],
    chat: [],
    subs: [],
  },
  {
    id: "moon",
    n: "THE MOON",
    h: "CHAPTER 1 : THE MOON",
    d: "THE MOON",
    q: "Crash landing! Time to fix the ship.",
    k: "ground",
    km: 384400,
    bg: 659504,
    gr: [11843792, 10988484],
    mt: 8949932,
    rk: 9080488,
    hs: 11059455,
    hg: 3818600,
    sc: 15134975,
    lt: 1.15,
    amp: 0.3,
    mh: 1,
    fg: [50, 230],
    tc: 5921392,
    dust: 11842756,
    cr: [
      [-30, -20, 8],
      [30, -40, 7],
      [0, 40, 6],
      [-45, 35, 6],
    ],
    pts: [
      [0, 0, 70],
      [16, 0, 40],
      [-8, 0, 12],
      [-36, 0, -12],
      [-24, 0, -44],
      [6, 0, -62],
      [38, 0, -48],
      [48, 0, -14],
    ],
    chat: [],
    subs: [
      {
        id: "lmod",
        hw: "lmod",
        f: 0.23,
      },
      {
        id: "lrv",
        hw: "lrv",
        f: 0.43,
      },
      {
        id: "als",
        hw: "als",
        f: 0.64,
      },
      {
        id: "surv",
        hw: "surv",
        f: 0.84,
      },
    ],
    board: 1,
  },
  {
    id: "m2m",
    n: "MOON \u2192 MARS",
    h: "CHAPTER 2 : MOON \u2192 MARS",
    d: "MARS",
    q: "The long-awaited journey.",
    sp: 1,
    k: "space",
    bg: 262927,
    dm: [
      [0, 384400],
      [1, 225000000],
    ],
    pts: [
      [0, 0, 0],
      [40, 10, -210],
      [-30, -8, -430],
      [26, 10, -650],
      [0, 0, -830],
    ],
    chat: [],
    subs: [],
  },
  {
    id: "mars",
    n: "MARS",
    h: "CHAPTER 2 : MARS",
    d: "MARS",
    q: "Welcome to Mars, Kite. You made it!",
    k: "ground",
    km: 225000000,
    bg: 15238218,
    sky: [
      [0, "#7a2a2a"],
      [0.3, "#e0602c"],
      [0.5, "#ffa850"],
      [1, "#ffa850"],
    ],
    sunc: 16769162,
    gr: [12866858, 12143910],
    mt: 10109472,
    rk: 9058844,
    hs: 16765088,
    hg: 6958616,
    sc: 16763024,
    lt: 1.4,
    amp: 0.8,
    mh: 2,
    fg: [40, 210],
    cloud: 15769712,
    tc: 6957588,
    dust: 13666906,
    cr: [
      [-30, -20, 6],
      [35, -45, 5],
      [10, 45, 6],
    ],
    pts: [
      [0, 0, 70],
      [-14, 0, 38],
      [10, 0, 8],
      [38, 0, -14],
      [20, 0, -46],
      [-18, 0, -58],
      [-44, 0, -30],
      [-40, 0, 8],
    ],
    chat: [],
    subs: [
      {
        id: "soj",
        hw: "soj",
        f: 0.16,
      },
      {
        id: "spir",
        hw: "spir",
        f: 0.3,
      },
      {
        id: "opp",
        hw: "opp",
        f: 0.33,
      },
      {
        id: "vik1",
        hw: "vik1",
        f: 0.48,
      },
      {
        id: "vik2",
        hw: "vik2",
        f: 0.51,
      },
      {
        id: "phx",
        hw: "phx",
        f: 0.65,
      },
      {
        id: "ins",
        hw: "ins",
        f: 0.77,
      },
      {
        id: "ing",
        hw: "ing",
        f: 0.89,
      },
    ],
  },
];
CH[1].pts = [
  [0, 0, 0],
  [44, 12, -230],
  [-34, -9, -470],
  [24, 10, -690],
  [0, 0, -880],
];
// The lunar route loops back to the original landing site.
CH[2].pts.push([45, 0, 26], [24, 0, 54], [0, 0, 70]);
for (const s of STORY) if (s.env === "moon" && s.id >= 11) s.f = 1;
CH.forEach((c) => {
  c.cv = new THREE.CatmullRomCurve3(
    c.pts.map((p) => new THREE.Vector3(...p)),
  );
  c.L = c.cv.getLength();
});
