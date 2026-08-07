export type SupportedLanguage = "en" | "es";

export function getSupportedLanguage(language?: string): SupportedLanguage {
  return language?.startsWith("es") ? "es" : "en";
}
