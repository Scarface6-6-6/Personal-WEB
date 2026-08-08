import discord from "../assets/discord_line_black.png";
import instagram from "../assets/instagram_line_black.png";
import twitch from "../assets/twitch.png";
import { getSupportedLanguage } from "./language";

const socialLinksByLanguage = {
  en: [
    {
      id: "discord",
      command: "> copy discord",
      title: "Discord",
      description: "Direct profile links are weird here. Copy the nickname instead.",
      action: "Copy",
      username: "scarface.666",
      icon: discord
    },
    {
      id: "instagram",
      command: "> open instagram",
      title: "Instagram",
      description: "Visual logs. Cars, music, sunsets and random ideas.",
      action: "Open",
      url: "https://www.instagram.com/andrez.pantoja/",
      icon: instagram
    },
    {
      id: "twitch",
      command: "> open twitch",
      title: "Twitch",
      description: "Occasional streams, games and digital noise.",
      action: "Open",
      url: "https://www.twitch.tv/scarface6_6_6",
      icon: twitch
    }
  ],
  es: [
    {
      id: "discord",
      command: "> copy discord",
      title: "Discord",
      description: "Discord no maneja links públicos limpios al perfil. Mejor copia el nickname.",
      action: "Copiar",
      username: "scarface.666",
      icon: discord
    },
    {
      id: "instagram",
      command: "> open instagram",
      title: "Instagram",
      description: "Logs visuales. Carros, música, atardeceres e ideas random.",
      action: "Abrir",
      url: "https://www.instagram.com/andrez.pantoja/",
      icon: instagram
    },
    {
      id: "twitch",
      command: "> open twitch",
      title: "Twitch",
      description: "Streams ocasionales, videojuegos y ruido digital.",
      action: "Abrir",
      url: "https://www.twitch.tv/scarface6_6_6",
      icon: twitch
    }
  ]
};

export const socialLinks = socialLinksByLanguage.en;

export function getSocialLinks(language?: string) {
  return socialLinksByLanguage[getSupportedLanguage(language)];
}
