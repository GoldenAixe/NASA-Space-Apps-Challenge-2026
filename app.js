/* ============================================================================
 * FILE 3 OF 3 (JAVASCRIPT): app.js — IMPROVED
 * NASA: Lost in the Solar System — with Captain Nova
 * ==========================================================================*/

/* ------------------------------------------------------------------ */
/* 1. STORY DATA — 6-chapter storyline                                  */
/* ------------------------------------------------------------------ */

export const CHAPTERS = [
  {
    id: "ch1",
    order: 1,
    title: "The Moon: The First Footprints",
    shortName: "The Moon",
    sectorName: "Chapter 1 • Earth's Moon",
    mapCoords: { x: 16, y: 68 },
    themeColor: "#38BDF8",
    iconClass: "fa-solid fa-moon",
    hardwareName: "Surveyor 1 & Apollo 11 Lunar Module",
    script: `I remember the first time I looked at the Moon up close. It was quiet, dusty, and completely unfamiliar. There were no roads, no buildings, and definitely no place to land safely. Back in 1966, NASA faced a big question: Could a spacecraft actually land on the Moon without crashing? That's when I first learned about Surveyor 1. It wasn't carrying astronauts. It was a robotic lander sent ahead of them. Its job was to take pictures and examine the lunar surface. Imagine being the first machine to touch down on a world that humans had only seen from far away! Surveyor 1 successfully landed and sent valuable information back to Earth. Its findings helped scientists understand the conditions astronauts would face. A few years later, in 1969, I witnessed another historic machine arrive. It was the Apollo 11 Lunar Module. Inside it were Neil Armstrong and Buzz Aldrin. This machine carried them down to the Moon, allowing humans to walk on its surface for the first time. After the astronauts returned to their command module, the Lunar Module's descent stage remained behind. I looked at it and thought: this machine may never fly again, but it helped make history. And that, explorer, was only the beginning.`,
    facts: [
      {
        icon: "fa-solid fa-satellite",
        title: "Surveyor 1 (1966)",
        text: "A robotic lander sent to the Moon in 1966. It photographed and examined the lunar surface so scientists could know whether the Moon could support a spacecraft landing. Its mission ended in 1967.",
      },
      {
        icon: "fa-solid fa-rocket",
        title: "Apollo 11 Lunar Module (1969)",
        text: "The spacecraft that carried Neil Armstrong and Buzz Aldrin to the lunar surface. After the astronauts returned to their command module, the Lunar Module's descent stage was left behind on the Moon — a machine that helped humans make history, still sitting there today.",
      },
    ],
    challenge: {
      prompt: "What was Surveyor 1's main purpose?",
      options: [
        "Carry astronauts to the Moon",
        "Study the lunar surface",
        "Explore Mars",
      ],
      correctIndex: 1,
      explanation:
        "Correct! Surveyor 1 was a robotic scout sent to study the lunar surface before astronauts ever landed.",
    },
    transition:
      "Humanity had finally reached the Moon. But walking around the landing site wasn't enough. We needed to explore farther. And that's where our next machines come in.",
    badge: {
      id: "badge-ch1",
      name: "First Footprints",
      icon: "fa-solid fa-moon",
      grad: "from-sky-400 to-blue-600",
      description:
        "Discovered how Surveyor 1 and the Apollo 11 Lunar Module made the first Moon landing possible.",
    },
  },
  {
    id: "ch2",
    order: 2,
    title: "The Moon: Machines That Never Came Home",
    shortName: "Moon Machines",
    sectorName: "Chapter 2 • Earth's Moon",
    mapCoords: { x: 30, y: 38 },
    themeColor: "#60A5FA",
    iconClass: "fa-solid fa-user-astronaut",
    hardwareName: "Lunar Roving Vehicle, ALSEP & Laser Retroreflector",
    script: `Come on, explorer! Let's travel a little farther across the lunar surface. You see those tracks in the dust? Those were made by the Lunar Roving Vehicle, or what astronauts simply called the Moon Buggy! Before this vehicle existed, astronauts could only walk around their landing sites. But during Apollo 15 in 1971, NASA introduced this electric rover to help them travel longer distances and collect more samples. Imagine driving a vehicle where there's no road, no gas station, and no mechanic nearby! But while astronauts were busy exploring, NASA had another plan. Scientists wanted to study what was happening on the Moon even after the astronauts went home. That's why they left behind something called ALSEP. It was a collection of scientific instruments that measured moonquakes and other conditions on the lunar surface. And look over there! See that small instrument? That's a Laser Retroreflector. Scientists on Earth send laser beams toward it, and it reflects those beams back. By measuring the travel time, they can calculate the distance between Earth and the Moon. Isn't that amazing? Some of the machines we left behind are still helping scientists today! The astronauts eventually went home, and many instruments stopped operating. But their discoveries remained. I guess not everything left behind is forgotten.`,
    facts: [
      {
        icon: "fa-solid fa-car-side",
        title: "Lunar Roving Vehicle (1971)",
        text: "NASA's electric vehicle introduced during the Apollo 15 mission in 1971. It allowed astronauts to travel across the Moon and collect rock samples without walking everywhere.",
      },
      {
        icon: "fa-solid fa-wave-square",
        title: "ALSEP (1969–1977)",
        text: "A collection of scientific instruments placed on the Moon by Apollo astronauts. These instruments measured things like moonquakes and the lunar environment. Most of the experiments stopped operating in 1977.",
      },
      {
        icon: "fa-solid fa-arrows-left-right-to-line",
        title: "Laser Retroreflector",
        text: "Special instruments that reflect laser beams sent from Earth. Scientists still use them to measure the distance between Earth and the Moon — lunar ranging experiments continue today!",
      },
    ],
    challenge: {
      prompt: "Which equipment helped astronauts travel across the Moon?",
      options: [
        "Lunar Roving Vehicle",
        "ALSEP",
        "Laser Retroreflector",
      ],
      correctIndex: 0,
      explanation:
        "Correct! The Lunar Roving Vehicle was the electric car that drove astronauts across the lunar surface.",
    },
    transition:
      "Well, explorer, it's time to leave the Moon. Our next destination is a planet that has fascinated humans for centuries. It's red, dusty, and full of mysteries. Welcome to Mars!",
    badge: {
      id: "badge-ch2",
      name: "Moon Ranger",
      icon: "fa-solid fa-user-astronaut",
      grad: "from-blue-400 to-indigo-600",
      description:
        "Learned how the Moon Rover, ALSEP, and retroreflectors explored the lunar surface — some still working today!",
    },
  },
  {
    id: "ch3",
    order: 3,
    title: "Mars: A Robot's First Steps",
    shortName: "First Mars Robots",
    sectorName: "Chapter 3 • The Red Planet",
    mapCoords: { x: 44, y: 64 },
    themeColor: "#FB7185",
    iconClass: "fa-solid fa-robot",
    hardwareName: "Viking 1 Lander & Sojourner Rover",
    script: `Look at that! The Red Planet! When I first arrived on Mars, I wondered whether anything had ever lived here. Was there water? Could there have been life? Scientists had the same questions, but they couldn't simply walk onto Mars and investigate. They needed machines to do the exploring. One of the first important visitors was Viking 1. It landed on Mars in 1976. Unlike the spacecraft that only flew past a planet, Viking 1 actually stayed on the surface. It had cameras to take pictures, instruments to examine the soil, and experiments designed to search for signs of life. I remember looking at its photographs. They showed a world that was both familiar and strange. There were rocks, dusty plains, and a sky unlike anything on Earth. But NASA wanted to explore beyond one landing spot. Years later, in 1997, a little robot named Sojourner arrived. At first, I almost mistook it for a toy car! But this tiny machine was a real explorer. It had six wheels that allowed it to move around, cameras to see its surroundings, and instruments to examine rocks and soil. As it moved across the Martian surface, it helped scientists learn more about the planet's composition. It may have been small, but Sojourner proved that robots could explore other worlds one step at a time. And I began to realize something: sometimes, the smallest explorers can make the biggest discoveries.`,
    facts: [
      {
        icon: "fa-solid fa-camera",
        title: "Viking 1 Lander (1976)",
        text: "A robotic lander that photographed Mars, studied its soil, and conducted experiments searching for signs of life. It stopped operating in 1982.",
      },
      {
        icon: "fa-solid fa-robot",
        title: "Sojourner Rover (1997)",
        text: "Unlike Viking 1, Sojourner could actually move around! It had six wheels, cameras, and scientific instruments that allowed it to examine Martian rocks and soil. It was small, but it proved something important: robots could drive around and explore another planet!",
      },
    ],
    challenge: {
      prompt: "What made Sojourner different from Viking 1?",
      options: [
        "It could fly",
        "It could move around the Martian surface",
        "It carried astronauts",
      ],
      correctIndex: 1,
      explanation:
        "Correct! Sojourner was the first rover to drive around and explore the surface of another planet.",
    },
    transition:
      "Now that we know robots can explore Mars, what if they could travel for years? What if they could even fly? Let's meet the machines that took Martian exploration to another level.",
    badge: {
      id: "badge-ch3",
      name: "Red Planet Pioneer",
      icon: "fa-solid fa-robot",
      grad: "from-rose-500 to-red-600",
      description:
        "Met Viking 1 and Sojourner — the first machines to land on and drive across Mars.",
    },
  },
  {
    id: "ch4",
    order: 4,
    title: "Mars: The Red Planet's Detectives",
    shortName: "Mars Detectives",
    sectorName: "Chapter 4 • The Red Planet",
    mapCoords: { x: 57, y: 34 },
    themeColor: "#F97316",
    iconClass: "fa-solid fa-helicopter",
    hardwareName: "Spirit, Opportunity & Ingenuity",
    script: `Explorer, I need your help with something. Look at these rocks. Do you think this planet was always dry? For years, scientists wanted to know whether liquid water had ever existed on Mars. To find answers, NASA sent two robotic detectives: Spirit and Opportunity. They arrived in 2004, on opposite sides of the planet. Spirit traveled across the surface, examining rocks and searching for clues about Mars' past. Opportunity did the same, and it discovered evidence that liquid water had once affected the Martian environment. Can you imagine that? A planet that looks like a giant desert today may once have had water! Both rovers worked much longer than their original planned missions. Eventually, Spirit stopped communicating in 2010, and Opportunity's mission ended in 2018. But NASA wasn't done surprising us. In 2021, I heard a strange buzzing sound above the Martian ground. I looked up and saw something I never expected to see on another planet: a helicopter! Its name was Ingenuity. It traveled to Mars with the Perseverance rover to test whether powered flight was possible in the planet's extremely thin atmosphere. And it worked! Ingenuity became the first aircraft to achieve powered, controlled flight on another planet. After completing many flights, it suffered rotor damage in 2024, ending its flying mission. From rolling across the ground to flying above it, these machines showed us that exploring Mars doesn't have to happen in just one way. I wonder where we'll explore next.`,
    facts: [
      {
        icon: "fa-solid fa-binoculars",
        title: "Spirit & Opportunity (2004)",
        text: "These two rovers arrived on Mars in 2004 to examine rocks and soil for clues about the planet's past. They discovered evidence that liquid water once existed on Mars! Spirit's last communication was in 2010; Opportunity's mission ended in 2018.",
      },
      {
        icon: "fa-solid fa-helicopter",
        title: "Ingenuity Helicopter (2021–2024)",
        text: "A small helicopter that arrived with the Perseverance rover to test whether powered flight was possible in Mars' extremely thin atmosphere. It succeeded — becoming the first aircraft to achieve powered, controlled flight on another planet! Its flight mission ended in 2024 after rotor damage.",
      },
    ],
    challenge: {
      prompt: "What was Ingenuity designed to test?",
      options: [
        "Driving underwater",
        "Powered flight on Mars",
        "Carrying astronauts",
      ],
      correctIndex: 1,
      explanation:
        "Correct! Ingenuity proved that powered, controlled flight is possible on another planet.",
    },
    transition:
      "That was incredible! But we've only explored two worlds. There are machines that have traveled much farther than Mars. Let's leave the planets behind and head into deep space!",
    badge: {
      id: "badge-ch4",
      name: "Mars Detective",
      icon: "fa-solid fa-helicopter",
      grad: "from-orange-400 to-amber-500",
      description:
        "Followed Spirit, Opportunity, and Ingenuity as they uncovered water clues and flew above Mars.",
    },
  },
  {
    id: "ch5",
    order: 5,
    title: "Deep Space: Messages from the Unknown",
    shortName: "Deep Space",
    sectorName: "Chapter 5 • Beyond the Planets",
    mapCoords: { x: 71, y: 60 },
    themeColor: "#A855F7",
    iconClass: "fa-solid fa-satellite-dish",
    hardwareName: "Pioneer 10, Voyager 1 & Voyager 2",
    script: `Look around, explorer. There are no roads here, no landing sites, and no planets nearby. Just endless darkness and distant stars. Traveling through deep space is not easy. Spacecraft need to survive extreme conditions, travel enormous distances, and communicate with Earth from millions or even billions of kilometers away. One of NASA's early explorers was Pioneer 10, launched in 1972. It traveled through the asteroid belt and became the first spacecraft to make close-up observations of Jupiter. It helped scientists study the giant planet and its environment. But then came two spacecraft that would change space exploration forever. Voyager 1 and Voyager 2. Launched in 1977, they were designed to explore the outer planets. Voyager 1 studied Jupiter and Saturn, while Voyager 2 visited Jupiter, Saturn, Uranus, and Neptune. They carried cameras, scientific instruments, antennas, and something rather unusual: a Golden Record. It's a special message from Earth containing sounds, music, and greetings that represent life on our planet. Eventually, both spacecraft traveled beyond the planets and entered interstellar space. Even after decades of traveling, they continued sending scientific information back to Earth. Think about that for a moment. Somewhere out there, machines built by humans are still traveling through space, carrying our messages into the unknown. And we're not finished yet.`,
    facts: [
      {
        icon: "fa-solid fa-star",
        title: "Pioneer 10 (1972)",
        text: "The first spacecraft to make close-up observations of Jupiter. It studied the planet and helped scientists learn more about its environment. NASA's last communication with it was received in 2003.",
      },
      {
        icon: "fa-solid fa-satellite-dish",
        title: "Voyager 1 & Voyager 2 (1977)",
        text: "These spacecraft explored the giant planets of our solar system. Voyager 1 studied Jupiter and Saturn, while Voyager 2 visited Jupiter, Saturn, Uranus, and Neptune! Both eventually entered interstellar space, where they continue sending scientific information back to Earth. They even carry a Golden Record with sounds, music, and greetings from Earth!",
      },
    ],
    challenge: {
      prompt: "Which spacecraft explored Uranus and Neptune?",
      options: ["Pioneer 10", "Voyager 2", "Voyager 1"],
      correctIndex: 1,
      explanation:
        "Correct! Voyager 2 is the only spacecraft to have visited Uranus and Neptune.",
    },
    transition:
      "There's one more place I want to show you. A world surrounded by beautiful rings, with moons that hold secrets of their own. Come on, explorer. Our final destination awaits!",
    badge: {
      id: "badge-ch5",
      name: "Interstellar Voyager",
      icon: "fa-solid fa-satellite-dish",
      grad: "from-purple-500 to-violet-600",
      description:
        "Traveled beyond the planets with Pioneer 10 and the Voyagers into interstellar space.",
    },
  },
  {
    id: "ch6",
    order: 6,
    title: "Deep Space: The Last Journey",
    shortName: "Final Transmission",
    sectorName: "Chapter 6 • Saturn & Beyond",
    mapCoords: { x: 86, y: 36 },
    themeColor: "#FBBF24",
    iconClass: "fa-solid fa-shuttle-space",
    hardwareName: "Cassini, Huygens Probe & New Horizons",
    script: `Welcome to Saturn! I've always loved this planet. Just look at those rings! But there's more to Saturn than its beautiful appearance. In 2004, a spacecraft named Cassini arrived to study the planet, its rings, and its many moons. It carried cameras, radar equipment, and scientific instruments that allowed scientists to investigate Saturn in incredible detail. But Cassini had a little companion: the Huygens Probe. In 2005, Huygens separated from Cassini and began descending toward Titan, Saturn's largest moon. It traveled through Titan's thick atmosphere, collected information, and eventually landed on its surface. For the first time, humans received images from the surface of Titan! Cassini continued its mission for years, discovering more about Saturn and its moons. But in 2017, its fuel was running low. NASA made an important decision: instead of allowing Cassini to drift uncontrollably, they deliberately sent it into Saturn's atmosphere. Its final mission helped protect Saturn's moons from possible contamination by Earth organisms. But wait! Our journey isn't quite over. There's another explorer I want you to meet. Its name is New Horizons. It was launched in 2006 and traveled all the way to Pluto. In 2015, it made a historic flyby, giving humanity its first close-up images of this distant world. It later continued into the Kuiper Belt to study another icy object. And now, here we are, at the end of our journey. We've seen machines land, drive, fly, orbit, and travel beyond the planets. Each one had a different purpose, but they all shared one thing: they helped humanity discover something new.`,
    facts: [
      {
        icon: "fa-solid fa-ring",
        title: "Cassini (1997–2017)",
        text: "Spent years studying Saturn, its beautiful rings, and its many moons. In 2017, NASA deliberately sent it into Saturn's atmosphere to protect the planet's moons from possible contamination.",
      },
      {
        icon: "fa-solid fa-parachute-box",
        title: "Huygens Probe (2005)",
        text: "A smaller machine carried by Cassini. In 2005, it separated from Cassini and descended through the atmosphere of Titan, Saturn's largest moon. It successfully landed on the surface and sent back pictures and scientific information!",
      },
      {
        icon: "fa-solid fa-shuttle-space",
        title: "New Horizons (2006– )",
        text: "Traveled all the way to Pluto and made its historic flyby in 2015, giving scientists their first close-up images of this distant world. After Pluto, it continued traveling and explored another object in the Kuiper Belt — and it's still going!",
      },
    ],
    challenge: {
      prompt: "Which spacecraft carried the Huygens Probe?",
      options: ["Voyager 1", "Cassini", "New Horizons"],
      correctIndex: 1,
      explanation:
        "Correct! The Huygens Probe rode along with Cassini all the way to Saturn before landing on Titan.",
    },
    transition:
      "We've seen machines land, drive, fly, orbit, and travel beyond the planets. And now, explorer, one last thing is waiting for you — the Final Mission!",
    badge: {
      id: "badge-ch6",
      name: "Legacy Keeper",
      icon: "fa-solid fa-shuttle-space",
      grad: "from-amber-400 to-yellow-500",
      description:
        "Witnessed the final transmissions of Cassini, Huygens, and New Horizons — the legacy of space exploration.",
    },
  },
];

/* Final scene — Captain Nova's last message + final transmission check */
export const FINAL_MISSION = {
  title: "Final Mission: The Legacy of Space Exploration",
  script: `Well, explorer... we've finally made it home. Do you remember the machines we met along the way? Surveyor helped prepare humans for the Moon. The Lunar Rover allowed astronauts to travel across its surface. Viking and Sojourner helped us investigate Mars. Spirit and Opportunity uncovered clues about ancient water. Voyager carried our story beyond the planets. And Cassini and New Horizons revealed worlds we had never truly seen before. Some of these machines are now silent. Some remain exactly where their missions ended. And some are still traveling through space. But none of their stories are meaningless. You see, when NASA sends a machine into space, it doesn't just send metal, wires, and instruments. It sends human curiosity. It sends questions that we want answered. And even when those machines can no longer move or communicate, the knowledge they leave behind continues to help us understand the universe. So, explorer, the next time you look up at the night sky, remember this: somewhere out there, a machine is carrying a piece of our history. This is Captain Nova, signing off. Until our next adventure... keep looking up!`,
  subtitle:
    "One last check, explorer! Match each final transmission to the correct NASA machine to earn your official NASA Explorer Commendation!",
  challenges: [
    {
      transmission:
        "TRANSMISSION #01: 'High-resolution images of the lunar surface received. This robotic scout examined where astronauts could land.'",
      options: ["Surveyor 1 (The Moon)", "Sojourner (Mars)", "Cassini (Saturn)"],
      correctIndex: 0,
    },
    {
      transmission:
        "TRANSMISSION #02: 'Six wheels rolling! This small rover proved robots could drive around and explore another planet.'",
      options: ["Spirit (Mars)", "Sojourner (Mars)", "Pioneer 10 (Deep Space)"],
      correctIndex: 1,
    },
    {
      transmission:
        "TRANSMISSION #03: 'Rotor check complete. This little helicopter tested powered flight in the thin Martian atmosphere.'",
      options: ["Voyager 2", "New Horizons", "Ingenuity (Mars)"],
      correctIndex: 2,
    },
    {
      transmission:
        "TRANSMISSION #04: 'Probe separation confirmed. I carried the Huygens Probe all the way to Saturn.'",
      options: ["Cassini", "Apollo 11 Lunar Module", "Voyager 1"],
      correctIndex: 0,
    },
  ],
};

const NOVA_TIPS = [
  "Space Tip: Finish all the Learn cards in a chapter to unlock its Challenge quiz!",
  "Space Tip: You can play Chapter 1 as a Guest! Create an account anytime and your badges will be saved automatically.",
  "Fun Fact: The footprints left by astronauts on the Moon will stay there for millions of years — the Moon has no wind or rain!",
  "Fun Fact: Voyager 1 is so far away that its radio signals take more than 22 hours to reach Earth!",
  "Fun Fact: Scientists still bounce laser beams off reflectors left on the Moon by Apollo astronauts!",
  "Science Tip: Even when an old rover stops moving, the discoveries it sent home help NASA build the next generation of spacecraft!",
];

const SPLASH_MESSAGES = [
  "Calibrating lunar cameras...",
  "Warming up Mars rover wheels...",
  "Tuning deep space antenna...",
  "Waking up Captain Nova...",
  "Ready for Launch!",
];

/* Captain Nova's opening message when the adventure begins */
const NOVA_INTRO = [
  `Hello? Can anyone hear me? Oh! Finally, someone! I've been waiting for a new explorer to join my journey. My name is Captain Nova. I've traveled across the Moon, Mars, and places far beyond the planets. During my travels, I discovered something unusual. Everywhere I went, I found machines left behind by humans. Some were small robots. Others were enormous spacecraft. Some had stopped working, while others were still exploring the darkness of space.`,
  `I started wondering... Why were they left behind? What were they made for? And what happened during their missions? I've decided to collect their stories in my mission log. But I can't explore everything alone. So, what do you say? Will you join me? Great! Let's start with the place where humanity first left its footprints beyond Earth: the Moon.`,
];

/* ------------------------------------------------------------------ */
/* 2. STORAGE KEYS + HELPERS                                            */
/* ------------------------------------------------------------------ */

const KEYS = Object.freeze({
  USERS_DB: "nova_users_db_v2",
  SESSION: "nova_session_v2",
  GUEST_PROGRESS: "nova_guest_progress_v2",
});

const progressKeyFor = (username) =>
  `nova_progress_v2_${String(username).toLowerCase()}`;

const esc = (str) =>
  String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

function freshProgress() {
  return {
    learnedChapterIds: [], // chapters where Learn was completed
    completedChapterIds: [], // chapters where the Challenge was passed
    earnedBadgeIds: [],
    finalMissionCompleted: false,
  };
}

function toast(message, color = "sky") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const colors = {
    sky: "border-sky-400 text-sky-200",
    emerald: "border-emerald-400 text-emerald-200",
    amber: "border-amber-400 text-amber-200",
    rose: "border-rose-400 text-rose-200",
  };
  const el = document.createElement("div");
  el.className = `glass-panel px-4 py-3 rounded-xl border-l-4 ${colors[color] || colors.sky} text-xs font-medium shadow-xl pointer-events-auto transition-all duration-300`;
  el.innerHTML = message;
  container.appendChild(el);
  setTimeout(() => {
    el.style.opacity = "0";
    setTimeout(() => el.remove(), 300);
  }, 3800);
}

/* ------------------------------------------------------------------ */
/* 3. AUTH — username & password validation rules                       */
/* ------------------------------------------------------------------ */

const Auth = {
  /* Username: 1–20 chars, letters / numbers / _ / - only */
  validateUsername(username) {
    const u = String(username || "").trim();
    if (u.length < 1 || u.length > 20)
      return { ok: false, error: "Username must be 1–20 characters long." };
    if (!/^[A-Za-z0-9_-]+$/.test(u))
      return {
        ok: false,
        error: "Username can only use letters, numbers, underscore (_) and dash (-).",
      };
    return { ok: true, username: u };
  },

  /* Password: 8–20 chars, at least 1 uppercase, 1 number, 1 symbol */
  validatePassword(password) {
    const p = String(password || "");
    const checks = [
      { ok: p.length >= 8 && p.length <= 20, label: "8–20 characters long" },
      { ok: /[A-Z]/.test(p), label: "At least 1 UPPERCASE letter" },
      { ok: /[0-9]/.test(p), label: "At least 1 number (0–9)" },
      { ok: /[^A-Za-z0-9]/.test(p), label: "At least 1 symbol (!@#$…)" },
    ];
    if (checks.every((c) => c.ok)) return { ok: true, password: p, checks };
    return {
      ok: false,
      error: "Password must be 8–20 characters with at least 1 uppercase letter, 1 number, and 1 symbol.",
      checks,
    };
  },

  getUsersDb() {
    try {
      return JSON.parse(localStorage.getItem(KEYS.USERS_DB)) || {};
    } catch {
      return {};
    }
  },
  saveUsersDb(db) {
    try {
      localStorage.setItem(KEYS.USERS_DB, JSON.stringify(db));
    } catch {}
  },
  usernameTaken(username) {
    return Boolean(this.getUsersDb()[username.toLowerCase()]);
  },
  suggestUsernames(username) {
    const base = username.replace(/[^A-Za-z0-9_-]/g, "").slice(0, 14) || "Explorer";
    const suggestions = [];
    let n = 0;
    while (suggestions.length < 3 && n < 50) {
      n++;
      const candidate = `${base}${Math.floor(Math.random() * 900 + 100)}`;
      if (!this.usernameTaken(candidate)) suggestions.push(candidate);
    }
    return suggestions;
  },
  register(username, password) {
    const u = this.validateUsername(username);
    if (!u.ok) return u;
    if (this.usernameTaken(u.username)) {
      return {
        ok: false,
        taken: true,
        username: u.username,
        error: `The username "${u.username}" is already taken. Please try a new one — here are some ideas!`,
        suggestions: this.suggestUsernames(u.username),
      };
    }
    const p = this.validatePassword(password);
    if (!p.ok) return p;
    const db = this.getUsersDb();
    db[u.username.toLowerCase()] = {
      username: u.username,
      password: p.password,
      createdAt: new Date().toISOString(),
    };
    this.saveUsersDb(db);
    return { ok: true, username: u.username };
  },
  login(username, password) {
    const u = String(username || "").trim();
    const record = this.getUsersDb()[u.toLowerCase()];
    if (!record || record.password !== String(password || ""))
      return { ok: false };
    return { ok: true, username: record.username };
  },
};

const Storage = {
  getSessionUser() {
    try {
      return JSON.parse(localStorage.getItem(KEYS.SESSION));
    } catch {
      return null;
    }
  },
  setSessionUser(user) {
    try {
      if (!user) localStorage.removeItem(KEYS.SESSION);
      else localStorage.setItem(KEYS.SESSION, JSON.stringify(user));
    } catch {}
  },
  loadProgress(username) {
    try {
      const raw = localStorage.getItem(
        username ? progressKeyFor(username) : KEYS.GUEST_PROGRESS,
      );
      return raw ? { ...freshProgress(), ...JSON.parse(raw) } : freshProgress();
    } catch {
      return freshProgress();
    }
  },
  saveProgress(username, progress) {
    try {
      localStorage.setItem(
        username ? progressKeyFor(username) : KEYS.GUEST_PROGRESS,
        JSON.stringify(progress),
      );
    } catch {}
  },
  mergeProgress(a, b) {
    return {
      learnedChapterIds: [...new Set([...(a.learnedChapterIds || []), ...(b.learnedChapterIds || [])])],
      completedChapterIds: [...new Set([...(a.completedChapterIds || []), ...(b.completedChapterIds || [])])],
      earnedBadgeIds: [...new Set([...(a.earnedBadgeIds || []), ...(b.earnedBadgeIds || [])])],
      finalMissionCompleted: Boolean(a.finalMissionCompleted || b.finalMissionCompleted),
    };
  },
};

/* ------------------------------------------------------------------ */
/* 3b. CAPTAIN NOVA'S VOICE — Web Speech API narrator                   */
/* ------------------------------------------------------------------ */

const NovaVoice = {
  enabled: true,
  supported: typeof window !== "undefined" && "speechSynthesis" in window,
  voice: null,

  init() {
    if (!this.supported) {
      const btn = document.getElementById("nova-audio-btn");
      if (btn) btn.style.display = "none";
      return;
    }
    const pickVoice = () => {
      const voices = speechSynthesis.getVoices().filter((v) => v.lang.startsWith("en"));
      this.voice =
        voices.find((v) => /female|zira|samantha|google us english/i.test(v.name)) ||
        voices.find((v) => /child|kid|junior/i.test(v.name)) ||
        voices[0] || null;
    };
    pickVoice();
    speechSynthesis.onvoiceschanged = pickVoice;
  },

  speak(text) {
    if (!this.enabled || !this.supported || !text) return;
    try {
      speechSynthesis.cancel();
      const clean = String(text).replace(/["'“”‘’]/g, "");
      const u = new SpeechSynthesisUtterance(clean);
      u.rate = 0.95;
      u.pitch = 1.35;
      u.volume = 1;
      if (this.voice) u.voice = this.voice;
      u.onstart = () => this._setSpeaking(true);
      u.onend = () => this._setSpeaking(false);
      u.onerror = () => this._setSpeaking(false);
      speechSynthesis.speak(u);
    } catch {}
  },

  stop() {
    if (!this.supported) return;
    try { speechSynthesis.cancel(); } catch {}
    this._setSpeaking(false);
  },

  toggle() {
    this.enabled = !this.enabled;
    if (!this.enabled) this.stop();
    return this.enabled;
  },

  _setSpeaking(on) {
    document.getElementById("nova-companion")?.classList.toggle("nova-speaking", on);
    const btn = document.getElementById("nova-audio-btn");
    if (btn) btn.classList.toggle("nova-speaking-btn", on);
  },
};

/* ------------------------------------------------------------------ */
/* 4. CAPTAIN NOVA — animated astronaut speech engine                   */
/* ------------------------------------------------------------------ */

const Nova = {
  queue: [],
  typing: false,
  timer: null,

  say(text) {
    this.queue.push(text);
    if (!this.typing) this._next();
  },

  sayNow(text) {
    this.queue = [];
    clearInterval(this.timer);
    this.typing = false;
    NovaVoice.stop();
    this.queue.push(text);
    this._next();
  },

  _next() {
    const text = this.queue.shift();
    if (text === undefined) return;
    this.typing = true;
    const bubble = document.getElementById("nova-bubble");
    const el = document.getElementById("nova-text");
    if (!bubble || !el) {
      this.typing = false;
      return;
    }
    bubble.classList.remove("hidden");
    el.textContent = "";
    NovaVoice.speak(text); /* Captain Nova says it out loud */
    let i = 0;
    this.timer = setInterval(() => {
      i += 2;
      el.textContent = text.slice(0, i);
      if (i >= text.length) {
        clearInterval(this.timer);
        this.typing = false;
        if (this.queue.length) setTimeout(() => this._next(), 650);
      }
    }, 18);
  },

  hide() {
    this.queue = [];
    clearInterval(this.timer);
    this.typing = false;
    NovaVoice.stop();
    document.getElementById("nova-bubble")?.classList.add("hidden");
  },

  toggle() {
    const bubble = document.getElementById("nova-bubble");
    if (!bubble) return;
    if (bubble.classList.contains("hidden")) {
      this.sayNow(
        "Hey! I'm right here, explorer! Tap the speech bubble button if you want a space tip!",
      );
    } else this.hide();
  },

  tip() {
    const t = NOVA_TIPS[Math.floor(Math.random() * NOVA_TIPS.length)];
    this.sayNow(t);
  },
};

/* ------------------------------------------------------------------ */
/* 5. VIEW RENDERERS                                                    */
/* ------------------------------------------------------------------ */

const Render = {
  /* ---------- HOME (non-scrollable on large screens) ---------- */
  home(app) {
    const done = app.progress.completedChapterIds.length;
    const started = done > 0 || app.progress.learnedChapterIds.length > 0;
    return `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div class="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border-2 border-sky-400/35 relative overflow-hidden flex flex-col justify-center">
          <div class="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-sky-500/10 blur-3xl pointer-events-none"></div>
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-200 text-xs font-display font-bold w-fit mb-4">
            <i class="fa-solid fa-star text-amber-300"></i> An Interactive Space Adventure
          </div>
          <h1 class="font-display font-bold text-3xl sm:text-4xl xl:text-5xl text-white tracking-wide leading-tight mb-4">
            NASA: <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-amber-300">Lost in the Solar System</span>
          </h1>
          <p class="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
            NASA has left behind hundreds of machines, instruments, and spacecraft in space — and <strong>Captain Nova</strong> knows their stories! Travel from the Moon to Mars and beyond. Are they still working? Have they gone silent? There's only one way to find out. Ready? Let's go!
          </p>
          <div class="flex flex-wrap items-center gap-3">
            <button onclick="window.app.navigate('map')" class="btn-tactile px-7 py-4 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 font-display font-bold text-base flex items-center gap-2.5">
              <i class="fa-solid fa-rocket text-xl"></i>
              <span>${started ? "Continue My Adventure!" : "Start Exploring! (Chapter 1)"}</span>
            </button>
            ${
              !app.user
                ? `<button onclick="window.app.openAuthModal('login')" class="btn-tactile px-5 py-4 rounded-2xl bg-slate-800/95 hover:bg-slate-700 text-white border-2 border-slate-600 font-display font-bold text-sm flex items-center gap-2">
                     <i class="fa-solid fa-key text-amber-300"></i><span>Log In / Sign Up</span>
                   </button>`
                : `<div class="px-4 py-3 rounded-2xl bg-emerald-500/15 border-2 border-emerald-400/40 text-emerald-200 text-xs font-bold flex items-center gap-2">
                     <i class="fa-solid fa-circle-check text-emerald-400 text-base"></i>
                     <span>Logged in as <strong>${esc(app.user.name)}</strong> — progress auto-saves!</span>
                   </div>`
            }
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="glass-panel rounded-3xl p-5 border-2 border-slate-700/60 h-full flex flex-col justify-center">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-map-signs text-sky-400"></i>
                <span class="font-display font-bold text-sm text-white">Your 6-Chapter Journey</span>
              </div>
              <span class="text-xs font-display font-bold px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300">${done} of ${CHAPTERS.length} Done</span>
            </div>
            <div class="space-y-2">
              ${CHAPTERS.map((ch, idx) => {
                const isDone = app.progress.completedChapterIds.includes(ch.id);
                const isUnlocked =
                  idx === 0 ||
                  app.progress.completedChapterIds.includes(CHAPTERS[idx - 1].id);
                return `
                  <div onclick="window.app.openChapter('${ch.id}')"
                       class="cursor-pointer flex items-center justify-between p-3 rounded-2xl bg-slate-900/90 border-2 transition hover:scale-[1.015] ${
                         isDone
                           ? "border-emerald-400/50 hover:border-emerald-400"
                           : isUnlocked
                             ? "border-sky-400/50 hover:border-sky-300"
                             : "border-slate-800 opacity-60"
                       }">
                    <div class="flex items-center gap-3">
                      <div class="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-800" style="color:${ch.themeColor}">
                        <i class="${ch.iconClass}"></i>
                      </div>
                      <div>
                        <div class="text-sm font-display font-bold text-white">${ch.order}. ${ch.shortName}</div>
                        <div class="text-[11px] text-slate-400">${ch.badge.name} Badge</div>
                      </div>
                    </div>
                    <span class="text-[11px] font-display font-bold px-2.5 py-1 rounded-xl ${
                      isDone
                        ? "bg-emerald-400 text-slate-950"
                        : isUnlocked
                          ? "bg-sky-400 text-slate-950"
                          : "bg-slate-800 text-slate-400"
                    }">
                      ${isDone ? '<i class="fa-solid fa-check mr-1"></i>Done!' : isUnlocked ? "Play!" : '<i class="fa-solid fa-lock"></i>'}
                    </span>
                  </div>`;
              }).join("")}
            </div>
          </div>
        </div>
      </div>`;
  },

  /* ---------- SPACE MAP (improved design) ---------- */
  map(app) {
    const total = CHAPTERS.length;
    const doneCount = app.progress.completedChapterIds.length;
    const pct = Math.round((doneCount / total) * 100);
    const allDone = doneCount === total;

    /* decorative twinkling stars (deterministic positions) */
    const stars = [
      [8, 15, 2], [24, 10, 1.5], [40, 22, 1.5], [55, 8, 2], [70, 18, 1.5],
      [88, 10, 2], [95, 30, 1.5], [12, 45, 1.5], [90, 70, 2], [5, 80, 1.5],
      [35, 85, 2], [62, 82, 1.5], [80, 90, 1.5], [48, 48, 1.5], [20, 28, 1],
    ];

    /* route segments between consecutive nodes */
    let routeSvg = "";
    for (let i = 0; i < CHAPTERS.length - 1; i++) {
      const a = CHAPTERS[i];
      const b = CHAPTERS[i + 1];
      const lit = app.progress.completedChapterIds.includes(a.id);
      routeSvg += `
        <line x1="${a.mapCoords.x}" y1="${a.mapCoords.y}"
              x2="${b.mapCoords.x}" y2="${b.mapCoords.y}"
              stroke="${lit ? a.themeColor : "#334155"}"
              stroke-width="${lit ? 0.9 : 0.6}"
              stroke-linecap="round"
              class="${lit ? "map-path-active" : ""}" />`;
    }

    return `
      <div class="space-y-6">
        <div class="glass-panel rounded-2xl p-5 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 class="font-display font-bold text-xl text-white flex items-center gap-2">
              <i class="fa-solid fa-earth-americas text-sky-400"></i> Interactive Solar System Map
            </h2>
            <p class="text-xs text-slate-400 mt-1">Select an unlocked destination and Captain Nova will fly you there!</p>
          </div>
          <div class="w-full md:w-72 space-y-1.5">
            <div class="flex justify-between text-xs">
              <span class="text-slate-300 font-medium">Journey Progress</span>
              <span class="text-sky-400 font-bold">${pct}% (${doneCount}/${total})</span>
            </div>
            <div class="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <div class="h-full bg-gradient-to-r from-sky-500 via-indigo-400 to-amber-400 transition-all duration-500" style="width:${pct}%"></div>
            </div>
          </div>
        </div>

        <div class="glass-panel rounded-3xl p-3 sm:p-5 border border-sky-500/30 relative overflow-hidden">
          <div class="relative w-full h-[400px] sm:h-[440px] rounded-2xl overflow-hidden border border-slate-800/90 map-canvas">
            <!-- nebula glows -->
            <div class="absolute -left-24 top-1/3 w-72 h-72 rounded-full bg-nasa-blue/30 blur-3xl pointer-events-none"></div>
            <div class="absolute right-0 bottom-0 w-80 h-60 rounded-full bg-purple-600/15 blur-3xl pointer-events-none"></div>
            <div class="absolute left-1/3 -top-16 w-72 h-48 rounded-full bg-nasa-red/10 blur-3xl pointer-events-none"></div>

            <!-- twinkling stars -->
            ${stars
              .map(
                ([x, y, r], i) =>
                  `<span class="map-star absolute rounded-full bg-white pointer-events-none" style="left:${x}%; top:${y}%; width:${r * 2}px; height:${r * 2}px; animation-delay:${(i % 5) * 0.6}s"></span>`,
              )
              .join("")}

            <!-- the Sun -->
            <div class="absolute -left-14 top-[38%] pointer-events-none">
              <div class="w-36 h-36 rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-orange-500 shadow-[0_0_70px_20px_rgba(251,191,36,0.35)]"></div>
            </div>

            <!-- route -->
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="absolute inset-0 w-full h-full pointer-events-none">${routeSvg}</svg>

            <!-- chapter nodes -->
            ${CHAPTERS.map((ch, idx) => {
              const isDone = app.progress.completedChapterIds.includes(ch.id);
              const isUnlocked =
                idx === 0 ||
                app.progress.completedChapterIds.includes(CHAPTERS[idx - 1].id);
              const badge = isDone
                ? '<span class="px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-bold whitespace-nowrap"><i class="fa-solid fa-check mr-1"></i>DONE</span>'
                : isUnlocked
                  ? '<span class="px-2 py-0.5 rounded-full bg-sky-400 text-slate-950 text-[10px] font-bold whitespace-nowrap animate-pulse">OPEN</span>'
                  : '<span class="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[10px] font-bold whitespace-nowrap"><i class="fa-solid fa-lock mr-1"></i>LOCKED</span>';
              return `
                <div style="left:${ch.mapCoords.x}%; top:${ch.mapCoords.y}%;"
                     class="absolute -translate-x-1/2 -translate-y-1/2 z-10 text-center group">
                  <button onclick="window.app.openChapter('${ch.id}')"
                          class="w-14 h-14 sm:w-[4.2rem] sm:h-[4.2rem] rounded-2xl flex flex-col items-center justify-center transition transform group-hover:scale-110 border-2 ${
                            isDone
                              ? "bg-emerald-950/90 border-emerald-400 text-emerald-300"
                              : isUnlocked
                                ? `bg-slate-900/95 border-sky-400 text-sky-300 map-node-open`
                                : "bg-slate-900/70 border-slate-700 text-slate-500 cursor-not-allowed"
                          }">
                    <i class="${ch.iconClass} text-lg sm:text-xl mb-0.5"></i>
                    <span class="text-[9px] font-bold">CH. ${ch.order}</span>
                  </button>
                  <div class="mt-1.5 flex flex-col items-center gap-1">
                    <span class="text-[11px] font-display font-bold text-white whitespace-nowrap bg-slate-950/90 px-2 py-0.5 rounded border border-slate-800">${ch.shortName}</span>
                    ${badge}
                  </div>
                </div>`;
            }).join("")}
          </div>
        </div>

        <!-- FINAL MISSION bar -->
        <div class="glass-panel rounded-2xl p-5 border ${allDone ? "border-amber-400/60 bg-amber-500/10" : "border-slate-800 opacity-80"} flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${allDone ? "bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/30" : "bg-slate-800 text-slate-500"}">
              <i class="fa-solid ${allDone ? "fa-trophy" : "fa-lock"}"></i>
            </div>
            <div>
              <h3 class="font-display font-bold text-base sm:text-lg text-white">Final Mission: The Legacy of Space Exploration</h3>
              <p class="text-xs text-slate-300">
                ${allDone
                  ? "All 6 chapters complete! Launch the Final Mission to earn your official NASA Explorer Commendation!"
                  : `Finish all ${total} chapters (${doneCount}/${total} done) to unlock the Final Mission.`}
              </p>
            </div>
          </div>
          ${
            allDone
              ? `<button onclick="window.app.navigate('final')"
                    class="btn-tactile px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-display font-bold text-sm shadow-lg shadow-amber-500/25 flex-shrink-0">
                    <i class="fa-solid fa-play mr-1.5"></i>Launch Final Mission
                  </button>`
              : `<button disabled
                    class="px-6 py-3 rounded-xl bg-slate-800 text-slate-500 font-display font-bold text-sm cursor-not-allowed flex-shrink-0">
                    <i class="fa-solid fa-lock mr-1.5"></i>Locked
                  </button>`
          }
        </div>

        <!-- chapter cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          ${CHAPTERS.map((ch, idx) => {
            const isDone = app.progress.completedChapterIds.includes(ch.id);
            const isUnlocked =
              idx === 0 ||
              app.progress.completedChapterIds.includes(CHAPTERS[idx - 1].id);
            return `
              <div class="glass-panel rounded-2xl p-5 border ${isDone ? "border-emerald-500/40" : isUnlocked ? "border-sky-500/30" : "border-slate-800 opacity-65"} flex flex-col justify-between gap-4">
                <div class="space-y-2">
                  <div class="flex items-center justify-between gap-2">
                    <span class="text-[11px] font-bold uppercase tracking-wider" style="color:${ch.themeColor}">${ch.sectorName}</span>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300">${ch.facts.length} Learn Cards • 1 Challenge</span>
                  </div>
                  <h3 class="font-display font-bold text-base text-white">${ch.order}. ${ch.title}</h3>
                  <div class="text-[11px] text-slate-400"><strong>Featured:</strong> ${ch.hardwareName}</div>
                </div>
                <div class="flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <span class="text-xs ${isDone ? "text-emerald-400" : "text-slate-400"}">
                    <i class="fa-solid fa-medal mr-1"></i>${ch.badge.name}
                  </span>
                  <button onclick="window.app.openChapter('${ch.id}')"
                          class="btn-tactile px-4 py-2 rounded-xl text-xs font-display font-bold transition ${
                            isUnlocked
                              ? "bg-sky-400 hover:bg-sky-300 text-slate-950"
                              : "bg-slate-800 text-slate-500 cursor-not-allowed"
                          }">
                    ${isDone ? "Replay" : isUnlocked ? "Start" : "Locked"}
                  </button>
                </div>
              </div>`;
          }).join("")}
        </div>
      </div>`;
  },

  /* ---------- CHAPTER (Learn + Challenge tabs) ---------- */
  chapter(app, ch) {
    const learned = app.progress.learnedChapterIds.includes(ch.id);
    const done = app.progress.completedChapterIds.includes(ch.id);
    const tab = app.chapterTab;
    const factIdx = Math.min(app.factIdx, ch.facts.length - 1);
    const fact = ch.facts[factIdx];
    const answer = app.chapterAnswers[ch.id] || {};
    const nextCh = CHAPTERS[ch.order]; // chapter at index `order` = next one

    const stepper = (label, idx) => `
      <div class="flex items-center gap-2">
        <span class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-display font-bold ${
          idx === 0
            ? tab === "learn"
              ? "bg-sky-400 text-slate-950"
              : "bg-emerald-400 text-slate-950"
            : learned
              ? tab === "challenge"
                ? "bg-sky-400 text-slate-950"
                : "bg-emerald-400 text-slate-950"
              : "bg-slate-800 text-slate-400 border border-slate-700"
        }">
          ${idx === 0 ? (tab === "learn" ? "1" : '<i class="fa-solid fa-check"></i>') : learned ? (tab === "challenge" ? "2" : '<i class="fa-solid fa-check"></i>') : '<i class="fa-solid fa-lock"></i>'}
        </span>
        <span class="text-xs font-display font-bold ${tab === label ? "text-white" : "text-slate-400"}">${label === "learn" ? "Learn" : "Challenge"}</span>
      </div>`;

    let body = "";
    if (tab === "learn") {
      body = `
        <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-sky-500/30 space-y-6">
          <div class="flex items-center justify-between border-b border-slate-800 pb-3">
            <span class="text-xs font-display font-bold uppercase tracking-wider text-sky-400">
              Learn Card ${factIdx + 1} of ${ch.facts.length}
            </span>
            <div class="flex gap-1.5">
              ${ch.facts
                .map(
                  (_, i) =>
                    `<button onclick="window.app.goToFact(${i})" class="h-2 rounded-full transition ${i === factIdx ? "w-7 bg-sky-400" : "w-3 bg-slate-700 hover:bg-slate-600"}"></button>`,
                )
                .join("")}
            </div>
          </div>

          <div class="card-enter grid grid-cols-1 lg:grid-cols-12 gap-6 items-center" key="${factIdx}">
            <div class="lg:col-span-4">
              <div class="w-full aspect-square max-w-[220px] mx-auto rounded-3xl bg-slate-950/90 border-2 flex flex-col items-center justify-center gap-4"
                   style="border-color:${ch.themeColor}55; box-shadow:0 0 44px -8px ${ch.themeColor}44;">
                <i class="${fact.icon} text-6xl" style="color:${ch.themeColor}"></i>
                <span class="text-[10px] font-mono text-slate-500 uppercase tracking-widest">NASA Hardware</span>
              </div>
            </div>
            <div class="lg:col-span-8 space-y-4">
              <h3 class="font-display font-bold text-xl sm:text-2xl text-white">${fact.title}</h3>
              <p class="text-slate-200 text-sm sm:text-base leading-relaxed">${fact.text}</p>
            </div>
          </div>

          <div class="flex items-center justify-between pt-4 border-t border-slate-800">
            <button onclick="window.app.prevFact()" ${factIdx === 0 ? "disabled" : ""}
                    class="px-4 py-2.5 rounded-xl text-xs font-display font-bold border border-slate-700 ${factIdx === 0 ? "text-slate-600 cursor-not-allowed" : "text-slate-200 hover:bg-slate-800"}">
              <i class="fa-solid fa-chevron-left mr-1"></i> Back
            </button>
            ${
              factIdx < ch.facts.length - 1
                ? `<button onclick="window.app.nextFact()" class="btn-tactile px-5 py-2.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-display font-bold text-xs sm:text-sm">
                     Next Card <i class="fa-solid fa-chevron-right ml-1"></i>
                   </button>`
                : learned
                  ? `<button onclick="window.app.switchTab('challenge')" class="btn-tactile px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-sky-400 text-slate-950 font-display font-bold text-xs sm:text-sm shadow-lg">
                       Go to Challenge! <i class="fa-solid fa-bolt ml-1"></i>
                     </button>`
                  : `<button onclick="window.app.completeLearning()" class="btn-tactile px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-sky-400 text-slate-950 font-display font-bold text-xs sm:text-sm shadow-lg">
                       Complete Learning <i class="fa-solid fa-graduation-cap ml-1"></i>
                     </button>`
            }
          </div>
        </div>`;
    } else if (!learned) {
      /* Challenge locked until Learn is completed */
      body = `
        <div class="glass-panel rounded-3xl p-10 border-2 border-dashed border-slate-700 text-center space-y-4">
          <div class="w-16 h-16 mx-auto rounded-2xl bg-slate-900 border-2 border-slate-700 flex items-center justify-center text-slate-500 text-2xl">
            <i class="fa-solid fa-lock"></i>
          </div>
          <h3 class="font-display font-bold text-xl text-white">Challenge Locked!</h3>
          <p class="text-sm text-slate-300 max-w-md mx-auto">
            Captain Nova says: finish all <strong>${ch.facts.length} Learn cards</strong> in this chapter first — then the Challenge quiz will unlock!
          </p>
          <button onclick="window.app.switchTab('learn')" class="btn-tactile px-6 py-3 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-display font-bold text-sm">
            <i class="fa-solid fa-book-open mr-1.5"></i>Go to Learn
          </button>
        </div>`;
    } else if (!answer.correct) {
      body = `
        <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-sky-500/30 space-y-5">
          <div class="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <span class="text-[11px] font-display font-bold uppercase text-sky-400">Chapter Challenge</span>
              <h3 class="font-display font-bold text-lg sm:text-xl text-white">${ch.challenge.prompt}</h3>
            </div>
            <span class="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold h-fit">
              <i class="fa-solid fa-bolt mr-1"></i>Win the ${ch.badge.name} Badge!
            </span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            ${ch.challenge.options
              .map((opt, i) => {
                const chosen = answer.selected === i;
                const style = chosen
                  ? "bg-rose-500/20 border-rose-400 text-rose-200"
                  : "bg-slate-900/90 hover:bg-slate-800 border-slate-700 text-slate-200";
                return `
                  <button onclick="window.app.answerChapter(${i})"
                          class="p-4 rounded-2xl border-2 text-left text-sm transition flex items-center justify-between gap-2 ${style}">
                    <span><span class="font-display font-bold mr-1.5" style="color:${ch.themeColor}">${"ABC"[i]}.</span>${opt}</span>
                    ${chosen ? '<i class="fa-solid fa-circle-xmark text-rose-400"></i>' : ""}
                  </button>`;
              })
              .join("")}
          </div>
          ${
            answer.selected !== undefined
              ? `<div class="p-4 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-sm text-rose-200">
                   <i class="fa-solid fa-rotate-right mr-1.5"></i>Not quite, explorer! Give it another try — you can do it!
                 </div>`
              : ""
          }
        </div>`;
    } else {
      body = `
        <div class="glass-panel rounded-3xl p-8 border-2 border-emerald-400/60 bg-emerald-950/20 text-center space-y-5">
          <div class="w-20 h-20 rounded-3xl bg-gradient-to-br ${ch.badge.grad} mx-auto flex items-center justify-center text-white text-3xl shadow-xl">
            <i class="${ch.badge.icon}"></i>
          </div>
          <div class="space-y-2">
            <span class="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 font-display font-bold text-xs uppercase">Chapter ${ch.order} Complete!</span>
            <h3 class="font-display font-bold text-2xl text-white">You earned the "${ch.badge.name}" Badge!</h3>
            <p class="text-xs sm:text-sm text-slate-300">${ch.challenge.explanation}</p>
          </div>
          <div class="flex flex-wrap justify-center gap-3 pt-1">
            <button onclick="window.app.navigate('map')" class="btn-tactile px-6 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-display font-bold text-sm">
              <i class="fa-solid fa-earth-americas mr-1.5"></i>Back to Space Map
            </button>
            ${
              nextCh
                ? `<button onclick="window.app.openChapter('${nextCh.id}')" class="btn-tactile px-6 py-3 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-display font-bold text-sm">
                     Next: ${nextCh.shortName} <i class="fa-solid fa-arrow-right ml-1"></i>
                   </button>`
                : `<button onclick="window.app.navigate('final')" class="btn-tactile px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-display font-bold text-sm">
                     <i class="fa-solid fa-trophy mr-1.5"></i>Final Mission
                   </button>`
            }
          </div>
        </div>`;
    }

    return `
      <div class="space-y-6">
        <div class="glass-panel rounded-2xl p-5 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div class="space-y-1">
            <button onclick="window.app.navigate('map')" class="text-xs text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1">
              <i class="fa-solid fa-arrow-left"></i> Back to Space Map
            </button>
            <h2 class="font-display font-bold text-xl sm:text-2xl text-white">${ch.order}. ${ch.title}</h2>
            <p class="text-xs text-slate-400">Featured NASA Hardware: <strong class="text-slate-200">${ch.hardwareName}</strong></p>
          </div>
          <div class="flex items-center gap-5 bg-slate-950 px-4 py-2.5 rounded-2xl border border-slate-800">
            ${stepper("learn", 0)}
            <div class="w-6 h-px bg-slate-700"></div>
            ${stepper("challenge", 1)}
          </div>
        </div>
        ${body}
      </div>`;
  },

  /* ---------- MY BADGES (dedicated page) ---------- */
  badges(app) {
    const earned = app.progress.earnedBadgeIds.length;
    return `
      <div class="space-y-6">
        <div class="glass-panel rounded-2xl p-5 sm:p-6 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 class="font-display font-bold text-2xl text-white flex items-center gap-2">
              <i class="fa-solid fa-medal text-amber-400"></i> My NASA Explorer Badges
            </h2>
            <p class="text-xs sm:text-sm text-slate-300 mt-1">Every badge tells a story of a machine left behind in space. Earn all ${CHAPTERS.length} + finish the Final Mission to become a Chief NASA Explorer!</p>
          </div>
          <div class="flex items-center gap-2">
            <span class="px-4 py-2 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-300 font-display font-bold text-sm">
              ${earned} / ${CHAPTERS.length}
            </span>
            ${
              app.progress.finalMissionCompleted
                ? `<span class="px-4 py-2 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-display font-bold text-sm">
                     <i class="fa-solid fa-trophy mr-1"></i>Certified!
                   </span>`
                : ""
            }
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          ${CHAPTERS.map((ch) => {
            const isEarned = app.progress.earnedBadgeIds.includes(ch.badge.id);
            return `
              <div onclick="${isEarned ? `window.app.showBadgeDetail('${ch.id}')` : "window.app.navigate('map')"}"
                   class="cursor-pointer glass-panel rounded-3xl p-6 border-2 ${isEarned ? "border-amber-400/50 hover:border-amber-300" : "border-slate-800 opacity-65 hover:opacity-90"} flex flex-col items-center text-center space-y-4 transition hover:-translate-y-1">
                <div class="relative">
                  <div class="w-24 h-24 rounded-full flex items-center justify-center text-4xl shadow-xl ${
                    isEarned
                      ? `bg-gradient-to-br ${ch.badge.grad} text-white`
                      : "bg-slate-900 border-2 border-dashed border-slate-700 text-slate-600"
                  }">
                    <i class="${isEarned ? ch.badge.icon : "fa-solid fa-lock"}"></i>
                  </div>
                  ${
                    isEarned
                      ? `<span class="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-emerald-400 text-slate-950 border-2 border-slate-900 flex items-center justify-center text-sm"><i class="fa-solid fa-check"></i></span>`
                      : ""
                  }
                </div>
                <div class="space-y-1.5">
                  <span class="px-2.5 py-0.5 rounded-full text-[11px] font-display font-bold ${isEarned ? "bg-emerald-400/20 text-emerald-300" : "bg-slate-800 text-slate-400"}">
                    ${isEarned ? "EARNED" : `Chapter ${ch.order}`}
                  </span>
                  <h3 class="font-display font-bold text-lg text-white">${ch.badge.name}</h3>
                  <p class="text-xs text-slate-300 leading-relaxed">${ch.badge.description}</p>
                </div>
                <div class="w-full pt-3 border-t border-slate-800/80">
                  <span class="text-xs font-display font-bold ${isEarned ? "text-amber-300" : "text-sky-400"}">
                    ${isEarned ? `<i class="fa-solid fa-star mr-1"></i>${ch.shortName} Mastered` : `Unlock in Chapter ${ch.order} <i class="fa-solid fa-arrow-right ml-1"></i>`}
                  </span>
                </div>
              </div>`;
          }).join("")}

          <!-- Final commendation slot -->
          <div class="glass-panel rounded-3xl p-6 border-2 ${app.progress.finalMissionCompleted ? "border-amber-400/60 bg-amber-500/10" : "border-dashed border-slate-700 opacity-65"} flex flex-col items-center text-center space-y-4">
            <div class="w-24 h-24 rounded-full flex items-center justify-center text-4xl shadow-xl ${
              app.progress.finalMissionCompleted
                ? "bg-gradient-to-br from-amber-300 to-orange-500 text-slate-950"
                : "bg-slate-900 border-2 border-dashed border-slate-700 text-slate-600"
            }">
              <i class="${app.progress.finalMissionCompleted ? "fa-solid fa-trophy" : "fa-solid fa-lock"}"></i>
            </div>
            <div class="space-y-1.5">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-display font-bold ${app.progress.finalMissionCompleted ? "bg-amber-400/25 text-amber-300" : "bg-slate-800 text-slate-400"}">FINAL</span>
              <h3 class="font-display font-bold text-lg text-white">NASA Explorer Commendation</h3>
              <p class="text-xs text-slate-300 leading-relaxed">Complete all 6 chapters and pass the Final Mission transmission check.</p>
            </div>
            <div class="w-full pt-3 border-t border-slate-800/80">
              ${
                app.progress.finalMissionCompleted
                  ? `<span class="text-xs font-display font-bold text-amber-300"><i class="fa-solid fa-award mr-1"></i>Officially Certified!</span>`
                  : `<button onclick="window.app.navigate('map')" class="text-xs text-sky-400 hover:underline font-display font-bold">Unlock via Final Mission <i class="fa-solid fa-arrow-right ml-1"></i></button>`
              }
            </div>
          </div>
        </div>
      </div>`;
  },

  /* ---------- FINAL MISSION ---------- */
  final(app) {
    const allCorrect = FINAL_MISSION.challenges.every(
      (c, i) => app.finalAnswers[i] === c.correctIndex,
    );
    return `
      <div class="space-y-6">
        <div class="glass-panel rounded-3xl p-6 sm:p-8 border-2 border-amber-400/50 space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 font-display font-bold text-xs uppercase">
              <i class="fa-solid fa-satellite-dish mr-1"></i> Final Mission
            </span>
            <button onclick="window.app.navigate('map')" class="text-xs text-sky-400 hover:underline font-bold">
              <i class="fa-solid fa-arrow-left mr-1"></i> Back to Space Map
            </button>
          </div>
          <h2 class="font-display font-bold text-2xl sm:text-3xl text-white">${FINAL_MISSION.title}</h2>
          <p class="text-sm sm:text-base text-slate-200">${FINAL_MISSION.subtitle}</p>
        </div>

        ${FINAL_MISSION.challenges
          .map((item, i) => {
            const selected = app.finalAnswers[i];
            const correct = selected === item.correctIndex;
            return `
              <div class="glass-panel rounded-2xl p-5 sm:p-6 border ${
                correct ? "border-emerald-400/60" : selected !== undefined ? "border-rose-400/60" : "border-slate-800"
              } space-y-4">
                <p class="font-mono text-xs sm:text-sm text-sky-300 bg-slate-950/90 p-3.5 rounded-xl border border-slate-800">${item.transmission}</p>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  ${item.options
                    .map((opt, optIdx) => {
                      const chosen = selected === optIdx;
                      const style = chosen
                        ? correct
                          ? "bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold"
                          : "bg-rose-500/20 border-rose-400 text-rose-200"
                        : "bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-200";
                      return `
                        <button onclick="window.app.answerFinal(${i}, ${optIdx})"
                                class="p-3.5 rounded-xl border-2 text-xs sm:text-sm text-left transition flex items-center justify-between gap-2 ${style}">
                          <span>${opt}</span>
                          ${chosen ? (correct ? '<i class="fa-solid fa-check text-emerald-400"></i>' : '<i class="fa-solid fa-xmark text-rose-400"></i>') : ""}
                        </button>`;
                    })
                    .join("")}
                </div>
              </div>`;
          })
          .join("")}

        ${
          allCorrect
            ? `
            <div class="glass-panel rounded-3xl p-6 sm:p-10 border-2 border-amber-400 bg-gradient-to-b from-slate-900/95 to-indigo-950/90 text-center space-y-6">
              <div class="w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 mx-auto flex items-center justify-center text-slate-950 text-4xl shadow-2xl">
                <i class="fa-solid fa-trophy"></i>
              </div>
              <div class="space-y-2">
                <span class="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 font-display font-bold text-xs uppercase">Official NASA Explorer Commendation</span>
                <h3 class="font-display font-bold text-2xl sm:text-4xl text-white">Congratulations, ${esc(app.user ? app.user.name : "Star Explorer")}!</h3>
                <p class="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto">
                  You completed all six chapters and passed the final transmission check. Somewhere out there, our explorers are still telling their stories — and now you know them all!
                </p>
              </div>
              <div class="flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto">
                ${CHAPTERS.map(
                  (ch) => `
                    <div class="p-3 rounded-2xl bg-slate-950/80 border border-amber-400/40 flex flex-col items-center min-w-[110px]">
                      <i class="${ch.badge.icon} text-amber-300 text-xl mb-1"></i>
                      <span class="text-[11px] font-display font-bold text-white">${ch.badge.name}</span>
                    </div>`,
                ).join("")}
              </div>
              <div class="flex flex-wrap justify-center gap-3 pt-2">
                <button onclick="window.print()" class="btn-tactile px-6 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-display font-bold text-sm flex items-center gap-2">
                  <i class="fa-solid fa-print"></i> Print My Certificate
                </button>
                <button onclick="window.app.navigate('badges')" class="btn-tactile px-6 py-3 rounded-2xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-display font-bold text-sm flex items-center gap-2">
                  <i class="fa-solid fa-medal"></i> View My Badges
                </button>
              </div>
            </div>`
            : ""
        }
      </div>`;
  },
};

/* ------------------------------------------------------------------ */
/* 6. APP CONTROLLER                                                    */
/* ------------------------------------------------------------------ */

class NasaApp {
  constructor() {
    this.view = "landing";
    this.user = null;
    this.progress = freshProgress();
    this.activeChapterId = null;
    this.chapterTab = "learn";
    this.factIdx = 0;
    this.chapterAnswers = {};
    this.finalAnswers = {};
    this._finalIntroduced = false;

    this.loadSession();
    this.bindNav();
    this.render();
    this.startSplash();
  }

  /* ---------- session & autosave ---------- */
  loadSession() {
    const session = Storage.getSessionUser();
    if (session && session.username && Auth.usernameTaken(session.username)) {
      this.user = session;
      this.progress = Storage.loadProgress(session.username);
    } else {
      Storage.setSessionUser(null);
      this.user = null;
      this.progress = Storage.loadProgress(null); // guest progress
    }
  }

  /* Autosaves on every change — guest progress AND logged-in progress */
  save() {
    Storage.saveProgress(this.user ? this.user.username : null, this.progress);
    this.updateAuthUI();
  }

  updateAuthUI() {
    const banner = document.getElementById("guest-banner");
    const area = document.getElementById("auth-header-area");
    const badgeCount = document.getElementById("nav-badges-count");
    if (badgeCount)
      badgeCount.textContent = `${this.progress.earnedBadgeIds.length}/${CHAPTERS.length}`;

    if (!banner || !area) return;
    if (!this.user) {
      banner.classList.remove("hidden");
      area.innerHTML = `
        <span class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-sky-200 border border-slate-700 text-xs font-bold">
          <i class="fa-solid fa-user-astronaut text-sky-400"></i> Guest Explorer
        </span>
        <button onclick="window.app.openAuthModal('login')" class="btn-tactile px-3.5 py-2 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-display font-bold text-xs sm:text-sm transition">
          <i class="fa-solid fa-key mr-1"></i> Log In / Sign Up
        </button>`;
    } else {
      banner.classList.add("hidden");
      area.innerHTML = `
        <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-slate-900 border-2 border-emerald-400/40 text-xs sm:text-sm">
          <i class="fa-solid fa-user-check text-emerald-400"></i>
          <span class="font-display font-bold text-white truncate max-w-[120px]">${esc(this.user.name)}</span>
          <span class="hidden md:inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">Auto-Save On</span>
          <button onclick="window.app.logout()" title="Log Out" class="text-slate-400 hover:text-rose-400 ml-1 transition">
            <i class="fa-solid fa-right-from-bracket"></i>
          </button>
        </div>`;
    }
  }

  /* ---------- navigation ---------- */
  bindNav() {
    ["landing", "map", "badges"].forEach((tab) => {
      const d = document.getElementById(`nav-${tab}`);
      const m = document.getElementById(`mob-nav-${tab}`);
      const set = (btn, active) => {
        if (!btn) return;
        btn.className =
          btn.id.startsWith("mob-")
            ? `px-3 py-1.5 rounded-xl text-xs font-display font-bold flex items-center gap-1.5 ${active ? "bg-sky-400 text-slate-950 shadow" : "text-slate-400"}`
            : `nav-tab px-4 py-2 rounded-xl text-sm font-display font-semibold transition ${active ? "bg-sky-400 text-slate-950 font-bold shadow" : "text-slate-300 hover:text-white hover:bg-slate-800/60"}`;
      };
      this._navSetters = this._navSetters || {};
      this._navSetters[tab] = { d, m, set };
    });
  }

  navigate(view) {
    /* safety guard for the Final Mission button */
    if (view === "final" && this.progress.completedChapterIds.length !== CHAPTERS.length) {
      toast("Finish all 6 chapters first to unlock the Final Mission!", "amber");
      view = "map";
    }
    this.view = view;
    /* Captain Nova narrates his final sign-off the first time you enter */
    if (view === "final" && !this._finalIntroduced) {
      this._finalIntroduced = true;
      Nova.say(FINAL_MISSION.script);
    }
    this.render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    const vp = document.getElementById("app-viewport");
    if (!vp) return;
    const ch =
      CHAPTERS.find((c) => c.id === this.activeChapterId) || CHAPTERS[0];

    let html = "";
    if (this.view === "landing") html = Render.home(this);
    else if (this.view === "map") html = Render.map(this);
    else if (this.view === "chapter") html = Render.chapter(this, ch);
    else if (this.view === "badges") html = Render.badges(this);
    else if (this.view === "final") html = Render.final(this);
    else html = Render.home(this);
    vp.innerHTML = html;

    /* lock home to viewport height (non-scrollable home) */
    vp.classList.toggle("viewport-locked", this.view === "landing");
    document.getElementById("app-footer")?.classList.toggle("hidden", this.view === "landing");

    /* Chapter-themed background follows the current destination */
    document.body.setAttribute(
      "data-chapter",
      this.view === "chapter" ? this.activeChapterId : this.view,
    );

    /* Captain Nova grows big while he narrates a chapter or the finale */
    document
      .getElementById("nova-companion")
      ?.classList.toggle("nova-narrating", this.view === "chapter" || this.view === "final");

    const isMapView = this.view === "chapter" || this.view === "final";
    Object.entries(this._navSetters || {}).forEach(([tab, { d, m, set }]) => {
      const active = this.view === tab || (isMapView && tab === "map");
      set(d, active);
      set(m, active);
    });
    this.updateAuthUI();
  }

  /* ---------- chapter flow ---------- */
  chapterUnlocked(chId) {
    const idx = CHAPTERS.findIndex((c) => c.id === chId);
    return idx === 0 || this.progress.completedChapterIds.includes(CHAPTERS[idx - 1].id);
  }

  openChapter(chId) {
    if (!this.chapterUnlocked(chId)) {
      Nova.sayNow("Hold on, explorer! Finish the previous chapter first to unlock this destination!");
      toast("Finish the previous chapter to unlock this destination!", "amber");
      return;
    }
    const ch = CHAPTERS.find((c) => c.id === chId);
    if (!ch) return;
    this.activeChapterId = chId;
    this.chapterTab = this.progress.completedChapterIds.includes(chId) ? "challenge" : "learn";
    this.factIdx = 0;
    this.view = "chapter";
    Nova.sayNow(ch.script);
    this.render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  switchTab(tab) {
    const ch = CHAPTERS.find((c) => c.id === this.activeChapterId);
    if (tab === "challenge" && ch && !this.progress.learnedChapterIds.includes(ch.id)) {
      Nova.sayNow("The Challenge unlocks after you finish all the Learn cards, explorer!");
      toast("Finish the Learn cards to unlock the Challenge!", "amber");
      return;
    }
    this.chapterTab = tab;
    this.render();
  }

  goToFact(i) {
    this.factIdx = i;
    this.render();
  }
  prevFact() {
    if (this.factIdx > 0) {
      this.factIdx--;
      this.render();
    }
  }
  nextFact() {
    const ch = CHAPTERS.find((c) => c.id === this.activeChapterId);
    if (ch && this.factIdx < ch.facts.length - 1) {
      this.factIdx++;
      this.render();
    }
  }

  completeLearning() {
    const ch = CHAPTERS.find((c) => c.id === this.activeChapterId);
    if (!ch) return;
    if (!this.progress.learnedChapterIds.includes(ch.id)) {
      this.progress.learnedChapterIds.push(ch.id);
      this.save(); // autosave
    }
    this.chapterTab = "challenge";
    Nova.sayNow(`Great job finishing the Learn cards! Now take the Chapter Challenge — earn your ${ch.badge.name} badge!`);
    toast("Challenge unlocked!", "emerald");
    this.render();
  }

  answerChapter(optIdx) {
    const ch = CHAPTERS.find((c) => c.id === this.activeChapterId);
    if (!ch) return;
    const correct = optIdx === ch.challenge.correctIndex;
    this.chapterAnswers[ch.id] = { selected: optIdx, correct };
    if (correct) {
      const firstTime = !this.progress.completedChapterIds.includes(ch.id);
      if (firstTime) {
        this.progress.completedChapterIds.push(ch.id);
        this.progress.earnedBadgeIds.push(ch.badge.id);
        this.save(); // autosave
        toast(`"${ch.badge.name}" badge earned!`, "emerald");
        const allDone = this.progress.completedChapterIds.length === CHAPTERS.length;
        Nova.sayNow(
          allDone
            ? `${ch.transition} And that's all six chapters — the FINAL MISSION is now unlocked on the Space Map!`
            : ch.transition,
        );
      } else {
        Nova.sayNow(ch.challenge.explanation);
      }
    } else {
      Nova.sayNow("Almost, explorer! Read the clue in the question and try again!");
    }
    this.render();
  }

  answerFinal(idx, optIdx) {
    this.finalAnswers[idx] = optIdx;
    const item = FINAL_MISSION.challenges[idx];
    if (optIdx === item.correctIndex) {
      Nova.sayNow("Transmission matched! That's the right machine!");
    } else {
      Nova.sayNow("Signal mismatch! Think back to which chapter that machine appeared in!");
    }
    const allCorrect = FINAL_MISSION.challenges.every(
      (c, i) => this.finalAnswers[i] === c.correctIndex,
    );
    if (allCorrect && !this.progress.finalMissionCompleted) {
      this.progress.finalMissionCompleted = true;
      this.save();
      Nova.sayNow("ALL TRANSMISSIONS RESTORED! You are now an officially certified NASA Explorer!");
      toast("Final Mission complete — you're certified!", "emerald");
    }
    this.render();
  }

  /* ---------- badges ---------- */
  showBadgeDetail(chId) {
    const ch = CHAPTERS.find((c) => c.id === chId);
    if (!ch) return;
    this.openModal(`
      <div class="space-y-5 text-center">
        <div class="w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${ch.badge.grad} flex items-center justify-center text-white text-4xl shadow-xl">
          <i class="${ch.badge.icon}"></i>
        </div>
        <div>
          <span class="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 font-display font-bold text-xs uppercase">${ch.badge.name}</span>
          <h3 class="font-display font-bold text-xl text-white mt-2">Chapter ${ch.order}: ${ch.title}</h3>
        </div>
        <p class="text-sm text-slate-300 leading-relaxed">${ch.badge.description}</p>
        <div class="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-left">
          <div class="text-[10px] font-display font-bold uppercase tracking-widest text-sky-400 mb-1.5">Featured Hardware</div>
          <p class="text-xs text-slate-300">${ch.hardwareName}</p>
        </div>
        <button onclick="window.app.closeModal()" class="btn-tactile px-6 py-2.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-display font-bold text-sm">Close</button>
      </div>`);
  }

  /* ---------- auth ---------- */
  openAuthModal(mode = "register") {
    const isRegister = mode !== "login";
    this.openModal(`
      <div class="space-y-5">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-sky-500/20 text-sky-300 flex items-center justify-center text-lg"><i class="fa-solid fa-user-astronaut"></i></div>
            <div>
              <h3 class="font-display font-bold text-lg sm:text-xl text-white">${isRegister ? "Create Your Explorer Account" : "Welcome Back, Explorer!"}</h3>
              <p class="text-xs text-slate-300">${isRegister ? "Your progress will auto-save from now on!" : "Enter your username and password."}</p>
            </div>
          </div>
          <button onclick="window.app.closeModal()" class="text-slate-400 hover:text-white text-lg"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div class="grid grid-cols-2 gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
          <button onclick="window.app.openAuthModal('register')" class="py-2 rounded-xl font-display font-bold text-xs sm:text-sm transition ${isRegister ? "bg-sky-400 text-slate-950 shadow" : "text-slate-400 hover:text-white"}">
            <i class="fa-solid fa-user-plus mr-1"></i> Sign Up
          </button>
          <button onclick="window.app.openAuthModal('login')" class="py-2 rounded-xl font-display font-bold text-xs sm:text-sm transition ${!isRegister ? "bg-sky-400 text-slate-950 shadow" : "text-slate-400 hover:text-white"}">
            <i class="fa-solid fa-right-to-bracket mr-1"></i> Log In
          </button>
        </div>

        <div id="auth-error-box" class="hidden p-3 rounded-xl bg-rose-500/20 border border-rose-400/40 text-rose-200 text-xs font-bold"></div>
        <div id="auth-suggest-box" class="hidden p-3 rounded-xl bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs space-y-2">
          <div class="font-bold"><i class="fa-solid fa-lightbulb mr-1"></i>Try one of these instead:</div>
          <div id="auth-suggestions" class="flex flex-wrap gap-2"></div>
        </div>

        <form onsubmit="window.app.handleAuthSubmit(event, '${isRegister ? "register" : "login"}')" class="space-y-4">
          <div>
            <label class="block text-xs sm:text-sm font-display font-bold text-sky-200 mb-1.5">
              <i class="fa-solid fa-id-badge mr-1 text-sky-400"></i> Explorer Username
              <span class="text-slate-500 font-semibold">(1–20 characters)</span>
            </label>
            <input id="auth-username" type="text" required maxlength="20" autocomplete="username" placeholder="e.g., StarCadet99"
              class="w-full px-4 py-3 rounded-2xl bg-slate-900 border-2 border-slate-700 text-sm text-white focus:outline-none focus:border-sky-400">
          </div>
          <div>
            <label class="block text-xs sm:text-sm font-display font-bold text-sky-200 mb-1.5">
              <i class="fa-solid fa-lock mr-1 text-amber-300"></i> Secret Password
              <span class="text-slate-500 font-semibold">(8–20 characters)</span>
            </label>
            <input id="auth-password" type="password" required maxlength="20" autocomplete="current-password" placeholder="At least 1 uppercase, 1 number, 1 symbol"
              oninput="window.app.updatePasswordChecklist()"
              class="w-full px-4 py-3 rounded-2xl bg-slate-900 border-2 border-slate-700 text-sm text-white focus:outline-none focus:border-sky-400">
            <div id="password-checklist" class="${isRegister ? "" : "hidden"} mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px]">
              ${[
                ["pc-len", "8–20 characters long"],
                ["pc-upper", "At least 1 UPPERCASE letter"],
                ["pc-num", "At least 1 number (0–9)"],
                ["pc-sym", "At least 1 symbol (!@#$…)"],
              ]
                .map(
                  ([id, label]) =>
                    `<span id="${id}" data-label="${label}" class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 transition">
                      <i class="fa-solid fa-circle-xmark text-rose-400"></i>${label}
                    </span>`,
                )
                .join("")}
            </div>
          </div>
          <button type="submit" class="btn-tactile w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 to-sky-400 text-slate-950 font-display font-bold text-base transition">
            <i class="fa-solid ${isRegister ? "fa-floppy-disk" : "fa-rocket"} mr-1.5"></i>
            ${isRegister ? "Create Account & Auto-Save!" : "Log In & Continue!"}
          </button>
        </form>

        <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs sm:text-sm text-slate-300">
          <span>Just want to explore first?</span>
          <button onclick="window.app.continueAsGuest()" class="text-amber-300 hover:underline font-display font-bold">
            Continue as Guest <i class="fa-solid fa-arrow-right ml-1"></i>
          </button>
        </div>
      </div>`);
  }

  updatePasswordChecklist() {
    const p = document.getElementById("auth-password")?.value || "";
    const set = (id, ok) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.className = `flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border transition ${
        ok ? "bg-emerald-500/15 border-emerald-400/50 text-emerald-200" : "bg-slate-900 border-slate-700 text-slate-400"
      }`;
      el.innerHTML = `<i class="fa-solid ${ok ? "fa-circle-check text-emerald-400" : "fa-circle-xmark text-rose-400"}"></i>${el.dataset.label || ""}`;
    };
    set("pc-len", p.length >= 8 && p.length <= 20);
    set("pc-upper", /[A-Z]/.test(p));
    set("pc-num", /[0-9]/.test(p));
    set("pc-sym", /[^A-Za-z0-9]/.test(p));
  }

  showAuthError(msg, suggestions = []) {
    const box = document.getElementById("auth-error-box");
    const sugBox = document.getElementById("auth-suggest-box");
    const sugWrap = document.getElementById("auth-suggestions");
    if (box) {
      box.textContent = msg;
      box.classList.remove("hidden");
    }
    if (sugBox && sugWrap) {
      if (suggestions.length) {
        sugWrap.innerHTML = suggestions
          .map(
            (s) =>
              `<button type="button" onclick="window.app.fillUsername('${esc(s)}')" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-sky-500 hover:text-slate-950 border border-slate-600 font-display font-bold transition">${esc(s)}</button>`,
          )
          .join("");
        sugBox.classList.remove("hidden");
      } else sugBox.classList.add("hidden");
    }
  }

  fillUsername(name) {
    const input = document.getElementById("auth-username");
    if (input) input.value = name;
    document.getElementById("auth-suggest-box")?.classList.add("hidden");
    document.getElementById("auth-error-box")?.classList.add("hidden");
  }

  handleAuthSubmit(e, mode) {
    e.preventDefault(); /* FIX: never let the form navigate away ("site can't be reached") */
    const username = document.getElementById("auth-username")?.value;
    const password = document.getElementById("auth-password")?.value;

    if (mode === "register") {
      const result = Auth.register(username, password);
      if (!result.ok) {
        this.showAuthError(result.error, result.suggestions || []);
        return;
      }
      this.activateUser(result.username, true);
    } else {
      const result = Auth.login(username, password);
      if (!result.ok) {
        /* FIX: fake/unknown account -> go Home as Guest, no error modal */
        this.closeModal();
        this.navigate("landing");
        Nova.sayNow("Hmm, I couldn't find that account, explorer! No worries — you're on the Home page as a Guest. Try signing up to save your badges!");
        toast("Account not found — continuing as Guest.", "amber");
        return;
      }
      this.activateUser(result.username, false);
    }
  }

  activateUser(username, isNew) {
    /* merge any guest progress into the account, then AUTOSAVE */
    const saved = Storage.loadProgress(username);
    this.progress = Storage.mergeProgress(saved, this.progress);
    this.user = { name: username, username };
    Storage.setSessionUser(this.user);
    this.save();
    this.closeModal();
    this.render();
    Nova.sayNow(
      isNew
        ? `Welcome aboard, ${username}! Your account is ready — every badge you earn from now on will save automatically!`
        : `Welcome back, Commander ${username}! I've kept your adventure safe. Let's keep exploring!`,
    );
    toast(isNew ? `Account created! Welcome, ${username}!` : `Welcome back, ${username}!`, "emerald");
  }

  continueAsGuest() {
    this.closeModal();
    this.render();
    Nova.sayNow("Guest mode it is! Have fun exploring — you can create an account anytime to save your badges.");
  }

  logout() {
    Storage.setSessionUser(null);
    this.user = null;
    this.progress = Storage.loadProgress(null);
    this.chapterAnswers = {};
    this.finalAnswers = {};
    this.render();
    this.navigate("landing");
    Nova.sayNow("Logged out, explorer! Your guest progress is still here — see you out there!");
    toast("Logged out — now exploring as Guest.", "sky");
  }

  /* ---------- modal helpers ---------- */
  openModal(html) {
    const modal = document.getElementById("modal-backdrop");
    const content = document.getElementById("modal-content");
    if (!modal || !content) return;
    content.innerHTML = html;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
  closeModal() {
    const modal = document.getElementById("modal-backdrop");
    if (!modal) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }

  openHowToPlayModal() {
    this.openModal(`
      <div class="space-y-4">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 class="font-display font-bold text-lg text-white"><i class="fa-regular fa-circle-question text-sky-400 mr-2"></i>How to Play</h3>
          <button onclick="window.app.closeModal()" class="text-slate-400 hover:text-white"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <ol class="list-decimal list-inside space-y-2.5 text-xs sm:text-sm text-slate-200">
          <li>Open the <strong>Space Map</strong> and pick an unlocked destination — start with <strong>Chapter 1: The Moon</strong>!</li>
          <li>Each chapter has two parts: <strong>Learn</strong> (read all the fact cards with Captain Nova) and the <strong>Challenge</strong> quiz.</li>
          <li>The Challenge stays <strong>locked</strong> until you finish every Learn card in that chapter.</li>
          <li>Pass the Challenge to earn that chapter's <strong>badge</strong> and unlock the next destination.</li>
          <li>Finish all 6 chapters to unlock the <strong>Final Mission</strong> and your official NASA Explorer Commendation!</li>
        </ol>
        <div class="flex justify-end">
          <button onclick="window.app.closeModal()" class="btn-tactile px-5 py-2 rounded-xl bg-sky-400 text-slate-950 font-display font-bold text-xs">Let's Play!</button>
        </div>
      </div>`);
  }

  resetCurrentProgressPrompt() {
    this.openModal(`
      <div class="space-y-4">
        <h3 class="font-display font-bold text-lg text-white">Start Over from Chapter 1?</h3>
        <p class="text-xs sm:text-sm text-slate-300">This resets your badges, learned chapters, and Final Mission progress so you can replay the whole adventure.</p>
        <div class="flex justify-end gap-2">
          <button onclick="window.app.closeModal()" class="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold">Cancel</button>
          <button onclick="window.app.confirmReset()" class="btn-tactile px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-400 text-white font-display font-bold text-xs">Yes, Start Over</button>
        </div>
      </div>`);
  }

  confirmReset() {
    this.progress = freshProgress();
    this.chapterAnswers = {};
    this.finalAnswers = {};
    this.activeChapterId = null;
    this._finalIntroduced = false;
    this.save();
    this.closeModal();
    this.navigate("landing");
    Nova.sayNow("Fresh start! Ready for another run through the solar system? Chapter 1 is waiting!");
    toast("Adventure reset! Chapter 1 awaits!", "rose");
  }

  /* ---------- nova companion ---------- */
  novaTip() {
    Nova.tip();
  }
  novaToggle() {
    Nova.toggle();
  }
  novaHide() {
    Nova.hide();
  }

  /* Toggle Captain Nova's voice on/off */
  novaAudioToggle() {
    const on = NovaVoice.toggle();
    const icon = document.getElementById("nova-audio-icon");
    if (icon) icon.className = on ? "fa-solid fa-volume-high" : "fa-solid fa-volume-xmark";
    document.getElementById("nova-audio-btn")?.classList.toggle("nova-muted", !on);
    if (on) Nova.sayNow("Voice back on! I love telling these space stories out loud!");
  }

  /* ---------- splash ---------- */
  startSplash() {
    const splash = document.getElementById("nasa-splash-screen");
    const bar = document.getElementById("splash-progress-bar");
    const status = document.getElementById("splash-status-text");
    if (!splash || !bar) return;
    let pct = 10;
    const interval = setInterval(() => {
      pct = Math.min(pct + 22, 100);
      bar.style.width = `${pct}%`;
      if (status)
        status.textContent = SPLASH_MESSAGES[Math.min(Math.floor(pct / 22), SPLASH_MESSAGES.length - 1)];
      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          splash.classList.add("splash-fade-out");
          setTimeout(() => splash.classList.add("hidden"), 650);
          /* Captain Nova introduces himself once the adventure begins */
          NOVA_INTRO.forEach((line) => Nova.say(line));
        }, 350);
      }
    }, 520);
  }
}

/* ------------------------------------------------------------------ */
/* 7. BOOT                                                              */
/* ------------------------------------------------------------------ */
window.addEventListener("DOMContentLoaded", () => {
  NovaVoice.init(); /* load the best English voice for Captain Nova */
  window.app = new NasaApp();
});
