import type { InterestModule } from "../types/interests";

export const interestModules: InterestModule[] = [
  {
    id: "music",
    command: "> music.module",
    title: "Music",
    description:
      "La capa de audio del sistema. No es ruido de fondo: define el mood para manejar, cocinar, programar y pensar de más.",
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
          "Pink Floyd debería escucharse con atención, no de relleno.",
          "Metallica quedó marcado como concierto completado.",
          "Streaming gana por practicidad.",
          "Vinilo sigue como pendiente con un buen sistema de audio."
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
      "Backend como base, sistemas como obsesión y audio como rabbit hole. La curiosidad normalmente termina en una terminal abierta.",
    groups: [
      {
        title: "Origin Story",
        items: [
          "Primeros lenguajes: C# y C++",
          "Java y Spring como herramientas de batalla",
          "Backend como ruta principal",
          "Struts apareció como sistema legado inesperado"
        ]
      },
      {
        title: "Tooling",
        items: [
          "VS Code para construir rápido",
          "IntelliJ para trabajo serio",
          "Linux como favorito",
          "Windows por practicidad"
        ]
      },
      {
        title: "Learning Queue",
        items: [
          "Microservicios con .NET",
          "Angular",
          "Arquitectura de sistemas",
          "Audiofilia",
          "Albañilería aplicada al mundo real"
        ]
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
      "Pausa mental, competencia y una manera muy eficiente de perder la noción del tiempo si nadie detiene el proceso.",
    groups: [
      {
        title: "Core Library",
        items: ["GTA", "Call of Duty", "God of War", "Need for Speed", "SOCOM", "Guitar Hero"]
      },
      {
        title: "Save Files",
        items: [
          "Más horas: Call of Duty y Guitar Hero",
          "Juego que marcó el sistema: God of War",
          "Mejor campaña: God of War",
          "Mejor multiplayer: Call of Duty",
          "Género favorito: shooters"
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
      "Carros, carretera, audio y modificaciones innecesariamente necesarias. El gasto nunca se destruye, solo cambia de forma.",
    groups: [
      {
        title: "Current Build",
        items: ["Seat Ibiza 2016 FR"]
      },
      {
        title: "Dream Garage",
        items: [
          "Un clásico bien cuidado",
          "Mustang Shelby",
          "Maverick",
          "Valiant Duster",
          "Mercedes-Maybach GLS 600"
        ]
      },
      {
        title: "Preferences",
        items: [
          "Manual sobre automático",
          "Turbo sobre aspirado",
          "Marcas favoritas: BMW y Mercedes",
          "Mods favoritos: repro, rines y audio",
          "Ruta pendiente: La Baja en auto"
        ]
      }
    ],
    scenes: [
      {
        title: "roadtrip.log",
        data: [
          { label: "best_trip", value: "Ocuituco, Morelos" },
          { label: "return_status", value: "Magnífico" },
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
      "Cocinar es debugging con hambre: cambias variables, pruebas fuego, corriges y esperas que el resultado compile.",
    groups: [
      {
        title: "Always Works",
        items: ["Birria", "Mole", "Ramen", "Garnachas mexicanas"]
      },
      {
        title: "Snack Layer",
        items: ["Alitas bien hechas", "Plátanos con crema, lechera y cajeta", "Gomitas de cereza"]
      },
      {
        title: "Drinks And Rules",
        items: ["Agua de horchata", "Agua de nuez", "Mezcal", "Cocinar > pedir comida", "Brócoli queda fuera del release"]
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
      "Configuración personal del sistema: introvertido, observador y analítico, con curiosidad peligrosa por los detalles.",
    groups: [
      {
        title: "Defaults",
        items: [
          "Introvertido",
          "Madrugador",
          "Naturaleza sobre ciudad",
          "Aventura sobre plan tranquilo",
          "Planea la base y deja espacio para improvisar"
        ]
      },
      {
        title: "Trust Rules",
        items: [
          "Admira conocimiento real en cualquier tema.",
          "Confía cuando lo observado coincide con lo dicho.",
          "Se aleja de mentiras y conversaciones vacías repetidas."
        ]
      },
      {
        title: "Known Bugs",
        items: [
          "Escucha música demasiado.",
          "Observa y analiza más de lo normal.",
          "Puede perder horas con el celular.",
          "Deja trastes para después.",
          "Amazon y Mercado Libre pueden abrir pestañas innecesarias."
        ]
      }
    ],
    scenes: [
      {
        title: "personality.config",
        data: [
          { label: "curiosity", value: "El límite humano" },
          { label: "bad_mood_trigger", value: "Repetir algo mil veces" },
          { label: "trust_signal", value: "Coherencia" },
          { label: "time_loss", value: "Programar / jugar / celular" }
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
      "Ideas base del sistema. Algunas están estables; otras siguen en beta, como casi todo lo humano.",
    groups: [
      {
        title: "Core Values",
        items: ["Conocimiento", "Aventura", "Libertad", "Dinero", "Creatividad", "Impacto"]
      },
      {
        title: "Definitions",
        items: [
          "Éxito: tener suficiente y un poco más para disfrutar el tiempo.",
          "Libertad: hacer lo que quieres con conciencia de las consecuencias.",
          "Felicidad: dejar de medir el tiempo mientras haces algo."
        ]
      },
      {
        title: "Quest Log",
        items: [
          "Completed: vivir solo",
          "Completed: tener mi carro",
          "In progress: construir patrimonio",
          "In progress: casa de retiro en un pueblo alejado",
          "Lesson: da porque quisiste hacerlo, no por expectativa"
        ]
      }
    ],
    scenes: [
      {
        title: "andrez_lore.md",
        data: [
          { label: "phrase", value: "Lucha, vive y disfruta" },
          { label: "biggest_lesson", value: "Atención al detalle" },
          { label: "remembered_by", value: "La música que escuchaba" },
          { label: "current_arc", value: "Build cool things" }
        ]
      }
    ],
    status: "THINKING..."
  }
];
