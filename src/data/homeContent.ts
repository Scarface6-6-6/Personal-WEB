import type { SupportedLanguage } from "./language";

export const homeContent = {
  en: {
    bootLines: [
      { text: "Loading production profile...", delay: 420 },
      { text: "[OK] README", delay: 260 },
      { text: "[OK] interests", delay: 260 },
      { text: "[OK] gallery", delay: 260 },
      { text: "[WAIT] syncing roadtrip cache...", delay: 1500 },
      { text: "[OK] current_status", delay: 260 },
      { text: "[OK] music_of_the_week", delay: 260 },
      { text: "[OK] social_links", delay: 260 },
      { text: "[OK] known_bugs", delay: 260 },
      { text: "Checking runtime: human", delay: 700 },
      { text: "Mounting curiosity.service", delay: 360 },
      { text: "Loading backend modules", delay: 360 },
      { text: "System ready.", delay: 260 }
    ],
    loading: "initializing production profile...",
    profile: {
      name: "Andrez",
      version: "27.0",
      class: "Backend Developer",
      status: "Running",
      current_mood: "Curious"
    },
    nowPlaying: [
      "music_of_the_week:",
      "  track: Dogs",
      "  artist: Pink Floyd",
      "  reason: because some weeks need long songs"
    ],
    photoRollIntro: "A rotating visual roll: Maniaca, city nights, quiet routes and music-heavy scenes with a calm, intentional presence.",
    bars: [
      { label: "Curiosity", value: 100 },
      { label: "Backend", value: 85 },
      { label: "Coffee", value: 70 }
    ]
  },
  es: {
    bootLines: [
      { text: "Cargando perfil de producción...", delay: 420 },
      { text: "[OK] README", delay: 260 },
      { text: "[OK] interests", delay: 260 },
      { text: "[OK] gallery", delay: 260 },
      { text: "[WAIT] syncing roadtrip cache...", delay: 1500 },
      { text: "[OK] current_status", delay: 260 },
      { text: "[OK] music_of_the_week", delay: 260 },
      { text: "[OK] social_links", delay: 260 },
      { text: "[OK] known_bugs", delay: 260 },
      { text: "Checking runtime: human", delay: 700 },
      { text: "Mounting curiosity.service", delay: 360 },
      { text: "Loading backend modules", delay: 360 },
      { text: "System ready.", delay: 260 }
    ],
    loading: "inicializando perfil de producción...",
    profile: {
      name: "Andrez",
      version: "27.0",
      class: "Backend Developer",
      status: "Running",
      current_mood: "Curioso"
    },
    nowPlaying: [
      "music_of_the_week:",
      "  track: Dogs",
      "  artist: Pink Floyd",
      "  reason: porque algunas semanas necesitan canciones largas"
    ],
    photoRollIntro: "Un rollo visual en rotacion: Maniaca, noches de ciudad, rutas tranquilas y escenas cargadas de musica con presencia calmada e intencional.",
    bars: [
      { label: "Curiosidad", value: 100 },
      { label: "Backend", value: 85 },
      { label: "Café", value: 70 }
    ]
  }
} satisfies Record<SupportedLanguage, unknown>;
