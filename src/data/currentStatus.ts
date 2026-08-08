import { getSupportedLanguage } from "./language";

const currentStatusByLanguage = {
  en: {
    learning: ["audiophilia", "web development", "masonry", "system architecture"],
    building: ["scarface-666.pw", "better physique", "SWIFT payments", "personal growth", "self-care"],
    listening: [
      "Pink Floyd",
      "Milo Mae",
      "Dire Straits",
      "Blondie",
      "Heart",
      "Tool",
      "Steven Wilson",
      "Led Zeppelin",
      "The Beatles"
    ],
    playing: ["Warzone", "GTA V", "Cuphead", "Batman Trilogy"],
    thinking_about: ["business", "trips", "home conditioning", "work"]
  },
  es: {
    learning: ["audiofilia", "desarrollo web", "albañilería", "arquitectura de sistemas"],
    building: ["scarface-666.pw", "mejorar mi físico", "pagos SWIFT", "crecimiento personal", "autocuidado"],
    listening: [
      "Pink Floyd",
      "Milo Mae",
      "Dire Straits",
      "Blondie",
      "Heart",
      "Tool",
      "Steven Wilson",
      "Led Zeppelin",
      "The Beatles"
    ],
    playing: ["Warzone", "GTA V", "Cuphead", "Batman Trilogy"],
    thinking_about: ["negocios", "viajes", "acondicionamientos de casa", "trabajo"]
  }
};

export function getCurrentStatus(language?: string) {
  return currentStatusByLanguage[getSupportedLanguage(language)];
}

export const statusBars = [
  { label: "Focus", value: 80 },
  { label: "Energy", value: 60 },
  { label: "Coffee", value: 50 },
  { label: "Debugging", value: 90 },
  { label: "Patience", value: 80 }
];
