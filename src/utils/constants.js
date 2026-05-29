import gitHub from "../assets/git_red_white.png";
import instagram from "../assets/instagram_line_black.png";
import twitch from "../assets/twitch.png";
import steam from "../assets/steam.png";
import discord from "../assets/discord_line_black.png";
import playstation from "../assets/play_vintage.png";

export const MENU_ITEMS = [
  { label: "About Me", labelEn: "About Me", path: "/about" },
  { label: "Gustos", labelEn: "Tastes", path: "/gustos" },
  { label: "Galeria", labelEn: "Gallery", path: "/galeria" },
  { label: "Ahora", labelEn: "Now", path: "/" },
  { label: "Links", labelEn: "Links", path: "/redes" }
];

export const SOCIAL_ITEMS = [
  { label: "GitHub", url: "https://github.com", icono: gitHub },
  { label: "Instagram", url: "https://instagram.com", icono: instagram },
  { label: "Twitch", url: "https://twitch.tv", icono: twitch },
  { label: "Steam", url: "https://steamcommunity.com", icono: steam },
  { label: "Discord", url: "https://discord.com", icono: discord },
  { label: "PlayStation", url: "https://playstation.com", icono: playstation }
];
