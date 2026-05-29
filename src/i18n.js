import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locales/es.json";
import en from "./locales/en.json";

const savedLanguage = globalThis.localStorage.getItem("language");

await i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en }
  },
  lng: savedLanguage || "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
