import type { InterestModule } from "../types/interests";

export const interests: InterestModule[] = [
  {
    id: "music",
    command: "> music.module",
    title: "Music",
    description:
      "La música rara vez está de fondo. Normalmente es el sistema operativo que corre detrás de casi todo: manejar, cocinar, programar, pensar o simplemente perderse un rato.",
    groups: [
      {
        title: "Primary Genres",
        items: [
          "Progressive Rock",
          "Heavy Metal",
          "Rock Clásico",
          "Rock en Español",
          "80's",
          "90's"
        ]
      },
      {
        title: "Essential Artists",
        items: [
          "Pink Floyd",
          "Tool",
          "Metallica",
          "Dire Straits",
          "Fleetwood Mac",
          "Heart",
          "Steven Wilson",
          "Led Zeppelin",
          "The Beatles",
          "José José"
        ]
      },
      {
        title: "Core Tracks",
        items: [
          "Animals - Pink Floyd",
          "Dogs - Pink Floyd",
          "Right Down the Line - Gerry Rafferty",
          "A tientas - Duncan Dhu",
          "What About Love - Heart"
        ]
      }
    ],
    scenes: [
      {
        title: "Favorite Scene",
        data: [
          { label: "Time", value: "22:30" },
          { label: "Place", value: "Highway" },
          { label: "Weather", value: "Light Rain" },
          { label: "Music", value: "Animals - Pink Floyd" },
          { label: "Volume", value: "High" },
          { label: "Destination", value: "Unknown" }
        ]
      }
    ],
    status: "LISTENING..."
  },
  {
    id: "food",
    command: "> food.module",
    title: "Food",
    description:
      "Cocinar es probablemente el hobby que más se parece a programar: cambias variables, pruebas, rompes cosas, ajustas y vuelves a probar. Solo que aquí el compilador es tu estómago.",
    groups: [
      {
        title: "Favorite Dishes",
        items: ["Birria", "Mole", "Ramen", "Garnachas mexicanas"]
      },
      {
        title: "Always Welcome",
        items: ["Mole", "Alitas bien hechas", "Agua de horchata", "Mezcal"]
      },
      {
        title: "Munchie Mode",
        items: ["Plátanos", "Crema", "Lechera", "Cajeta"]
      }
    ],
    scenes: [
      {
        title: "Favorite Scene",
        data: [
          { label: "Kitchen", value: "Home" },
          { label: "Recipe", value: "Unknown" },
          { label: "Music", value: "Classic Rock" },
          { label: "Cooking Time", value: "No Rush" },
          { label: "Result", value: "Worth It" }
        ]
      }
    ],
    status: "COOKING..."
  },
  {
    id: "automotive",
    command: "> automotive.module",
    title: "Automotive",
    description:
      "Carros, carretera, audio y modificaciones innecesariamente necesarias. El gasto nunca se destruye, solo se transforma en piezas.",
    groups: [
      {
        title: "Current Vehicle",
        items: ["Seat Ibiza FR 2016"]
      },
      {
        title: "Dream Garage",
        items: [
          "Mustang Shelby",
          "Maverick",
          "Valiant Duster",
          "Mercedes-Maybach GLS 600"
        ]
      },
      {
        title: "Favorite Mods",
        items: ["Repro", "Rines", "Audio"]
      },
      {
        title: "Roadtrip Goals",
        items: ["La Baja en auto", "Ocuituco, Morelos"]
      }
    ],
    scenes: [
      {
        title: "Favorite Scene",
        data: [
          { label: "Road", value: "Mountain" },
          { label: "Transmission", value: "Manual" },
          { label: "Windows", value: "Down" },
          { label: "Music", value: "Pink Floyd" },
          { label: "Fuel", value: "Enough" },
          { label: "Status", value: "Lost on purpose" }
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
      "Videojuegos como pausa mental, campo de batalla y excusa perfecta para perder la noción del tiempo. Una tradición humana bastante eficiente para destruir horarios de sueño.",
    groups: [
      {
        title: "Top Games",
        items: [
          "GTA",
          "Call of Duty",
          "God of War",
          "Need for Speed",
          "SOCOM",
          "Guitar Hero"
        ]
      },
      {
        title: "Most Played",
        items: ["Call of Duty", "Guitar Hero"]
      },
      {
        title: "Currently Installed",
        items: ["Warzone", "GTA V", "Cuphead", "Batman Trilogy"]
      }
    ],
    scenes: [
      {
        title: "Favorite Scene",
        data: [
          { label: "Platform", value: "PC" },
          { label: "Genre", value: "Shooters" },
          { label: "Friends", value: "Online" },
          { label: "Discord", value: "Connected" },
          { label: "Tomorrow", value: "Probably regret sleeping late" }
        ]
      }
    ],
    status: "AFK..."
  },
  {
    id: "philosophy",
    command: "> philosophy.module",
    title: "Philosophy",
    description:
      "Ideas base del sistema. Algunas funcionan, otras siguen en beta, como casi todo lo humano.",
    groups: [
      {
        title: "Core Values",
        items: [
          "Conocimiento",
          "Aventura",
          "Libertad",
          "Dinero",
          "Creatividad",
          "Impacto"
        ]
      },
      {
        title: "Definitions",
        items: [
          "Éxito: tener lo suficiente y un poco más para disfrutar el tiempo.",
          "Libertad: elegir tu camino aceptando las consecuencias.",
          "Felicidad: cuando dejas de medir el tiempo."
        ]
      },
      {
        title: "Future Build",
        items: [
          "Construir patrimonio",
          "Casa de retiro en un pueblo alejado de la gente",
          "Una vida tranquila, pero no aburrida"
        ]
      }
    ],
    scenes: [
      {
        title: "Favorite Scene",
        data: [
          { label: "Place", value: "Anywhere" },
          { label: "Activity", value: "Thinking" },
          { label: "Topic", value: "Something unnecessary" },
          { label: "Result", value: "Three new project ideas" }
        ]
      }
    ],
    status: "THINKING..."
  }
];
