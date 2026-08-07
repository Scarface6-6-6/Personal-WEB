import type { InterestModule } from "../types/interests";
import { getSupportedLanguage, type SupportedLanguage } from "./language";
import { interestModules as spanishInterestModules } from "./interestModules";

const englishInterestModules: InterestModule[] = [
  {
    id: "music",
    command: "> music.module",
    title: "Music",
    description:
      "The system audio layer. It is not background noise: it defines the mood for driving, cooking, coding and overthinking.",
    groups: [
      {
        title: "Essential Artists",
        items: [
          "Pink Floyd",
          "Metallica",
          "Rammstein",
          "Fleetwood Mac",
          "Tool",
          "Pantera",
          "Megadeth",
          "José José",
          "Inspector",
          "Camilo Séptimo",
          "Scorpions",
          "Dire Straits",
          "Blondie",
          "Heart",
          "Steven Wilson",
          "Led Zeppelin",
          "The Beatles"
        ]
      },
      {
        title: "Needle Drops",
        items: [
          "Full album loop: Animals - Pink Floyd",
          "Personal anthem: What About Love - Heart",
          "Night drive: Right Down the Line - Gerry Rafferty",
          "Roadtrip: A tientas - Duncan Dhu",
          "Smoke session: Dogs - Pink Floyd"
        ]
      },
      {
        title: "Audio Philosophy",
        items: [
          "Pink Floyd should be listened to with attention, not as filler.",
          "Metallica is marked as concert completed.",
          "Streaming wins by practicality.",
          "Vinyl is still pending with a proper audio system."
        ]
      }
    ],
    scenes: [
      {
        title: "currently_playing.log",
        data: [
          { label: "primary", value: "Pink Floyd" },
          { label: "drive_mode", value: "Dire Straits" },
          { label: "heavy_rotation", value: "Tool / Metallica" },
          { label: "soft_spot", value: "José José" }
        ]
      }
    ],
    status: "LISTENING..."
  },
  {
    id: "technology",
    command: "> technology.module",
    title: "Technology",
    description:
      "Backend as foundation, systems as obsession and audio as a rabbit hole. Curiosity usually ends with an open terminal.",
    groups: [
      {
        title: "Origin Story",
        items: [
          "First languages: C# and C++",
          "Java and Spring as battle tools",
          "Backend as main path",
          "Struts appeared as an unexpected legacy system"
        ]
      },
      {
        title: "Tooling",
        items: ["VS Code for quick builds", "IntelliJ for serious work", "Linux as favorite", "Windows by practicality"]
      },
      {
        title: "Learning Queue",
        items: [".NET microservices", "Angular", "System architecture", "Audiophilia", "Real-world masonry"]
      }
    ],
    scenes: [
      {
        title: "stats.yml",
        data: [
          { label: "Java", value: "80%" },
          { label: "Spring", value: "70%" },
          { label: "SQL", value: "80%" },
          { label: "Debugging", value: "90%" },
          { label: "Architecture", value: "50%" }
        ]
      }
    ],
    status: "BUILDING..."
  },
  {
    id: "gaming",
    command: "> gaming.module",
    title: "Gaming",
    description:
      "Mental pause, competition and a very efficient way to lose track of time if nobody stops the process.",
    groups: [
      {
        title: "Core Library",
        items: ["GTA", "Call of Duty", "God of War", "Need for Speed", "SOCOM", "Guitar Hero"]
      },
      {
        title: "Save Files",
        items: [
          "Most hours: Call of Duty and Guitar Hero",
          "System-marking game: God of War",
          "Best campaign: God of War",
          "Best multiplayer: Call of Duty",
          "Favorite genre: shooters"
        ]
      },
      {
        title: "Current Backlog",
        items: ["Warzone", "GTA V", "Cuphead", "Batman Trilogy"]
      }
    ],
    scenes: [
      {
        title: "platform_state.yml",
        data: [
          { label: "current_platform", value: "PC" },
          { label: "old_main", value: "Xbox" },
          { label: "current_console", value: "PlayStation" },
          { label: "nostalgia_device", value: "PSP" }
        ]
      }
    ],
    status: "AFK..."
  },
  {
    id: "automotive",
    command: "> automotive.module",
    title: "Automotive",
    description:
      "Cars, road, audio and unnecessarily necessary modifications. Spending is never destroyed, it only changes shape.",
    groups: [
      { title: "Current Build", items: ["Seat Ibiza 2016 FR"] },
      {
        title: "Dream Garage",
        items: ["A well-kept classic", "Mustang Shelby", "Maverick", "Valiant Duster", "Mercedes-Maybach GLS 600"]
      },
      {
        title: "Preferences",
        items: [
          "Manual over automatic",
          "Turbo over naturally aspirated",
          "Favorite brands: BMW and Mercedes",
          "Favorite mods: tune, wheels and audio",
          "Pending route: Baja by car"
        ]
      }
    ],
    scenes: [
      {
        title: "roadtrip.log",
        data: [
          { label: "best_trip", value: "Ocuituco, Morelos" },
          { label: "return_status", value: "Magnificent" },
          { label: "music", value: "Pink Floyd" },
          { label: "windows", value: "Down" }
        ]
      }
    ],
    status: "TUNING..."
  },
  {
    id: "food",
    command: "> food.module",
    title: "Food",
    description:
      "Cooking is debugging with hunger: change variables, test fire, patch mistakes and hope the result compiles.",
    groups: [
      { title: "Always Works", items: ["Birria", "Mole", "Ramen", "Mexican street food"] },
      { title: "Snack Layer", items: ["Well-made wings", "Plantains with cream, condensed milk and cajeta", "Cherry gummies"] },
      {
        title: "Drinks And Rules",
        items: ["Horchata water", "Walnut water", "Mezcal", "Cooking > ordering food", "Broccoli stays out of the release"]
      }
    ],
    scenes: [
      {
        title: "kitchen.yml",
        data: [
          { label: "mode", value: "No rush" },
          { label: "music", value: "Classic rock" },
          { label: "compiler", value: "Stomach" },
          { label: "result", value: "Worth it" }
        ]
      }
    ],
    status: "COOKING..."
  },
  {
    id: "personality",
    command: "> personality.config",
    title: "Personality",
    description:
      "Personal system configuration: introverted, observant and analytical, with dangerous curiosity for details.",
    groups: [
      {
        title: "Defaults",
        items: ["Introverted", "Morning person", "Nature over city", "Adventure over quiet plan", "Plans the base, leaves room to improvise"]
      },
      {
        title: "Trust Rules",
        items: ["Admires real knowledge", "Trusts when observed behavior matches words", "Moves away from lies and repeated empty conversations"]
      },
      {
        title: "Known Bugs",
        items: ["Listens to too much music", "Observes and analyzes more than normal", "Can lose hours on the phone", "Leaves dishes for later"]
      }
    ],
    scenes: [
      {
        title: "personality.config",
        data: [
          { label: "curiosity", value: "Human limits" },
          { label: "bad_mood_trigger", value: "Repeating something a thousand times" },
          { label: "trust_signal", value: "Coherence" },
          { label: "time_loss", value: "Coding / gaming / phone" }
        ]
      }
    ],
    status: "OBSERVING..."
  },
  {
    id: "philosophy",
    command: "> philosophy.module",
    title: "Philosophy",
    description:
      "Base ideas of the system. Some are stable; others are still in beta, like almost everything human.",
    groups: [
      { title: "Core Values", items: ["Knowledge", "Adventure", "Freedom", "Money", "Creativity", "Impact"] },
      {
        title: "Definitions",
        items: [
          "Success: having enough and a little more to enjoy time.",
          "Freedom: doing what you want while accepting consequences.",
          "Happiness: stopping measuring time while doing something."
        ]
      },
      {
        title: "Quest Log",
        items: [
          "Completed: living alone",
          "Completed: owning my car",
          "In progress: building assets",
          "In progress: retirement house in a quiet town",
          "Lesson: give because you wanted to, not because of expectation"
        ]
      }
    ],
    scenes: [
      {
        title: "andrez_lore.md",
        data: [
          { label: "phrase", value: "Fight, live and enjoy" },
          { label: "biggest_lesson", value: "Attention to detail" },
          { label: "remembered_by", value: "The music he listened to" },
          { label: "current_arc", value: "Build cool things" }
        ]
      }
    ],
    status: "THINKING..."
  }
];

export function getInterestModules(language?: string) {
  return getSupportedLanguage(language) === "es" ? spanishInterestModules : englishInterestModules;
}
