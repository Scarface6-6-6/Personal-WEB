import instagram from "../assets/instagram_line_black.png";
import twitch from "../assets/twitch.png";
import discord from "../assets/discord_line_black.png";

export const MENU_ITEMS = [
  { key: "about", path: "/about", aliases: ["/about"] },
  { key: "likes", path: "/interesed", aliases: ["/interesed", "/likes", "/gustos"] },
  { key: "gallery", path: "/gallery", aliases: ["/gallery", "/galeria"] },
  { key: "now", path: "/now", aliases: ["/now"] },
  { key: "links", path: "/links", aliases: ["/links", "/redes"] }
];

export const SOCIAL_ITEMS = [
  { key: "discord", label: "Discord", url: "https://discord.com", icon: discord },
  { key: "instagram", label: "Instagram", url: "https://instagram.com", icon: instagram },
  { key: "twitch", label: "Twitch", url: "https://twitch.tv", icon: twitch }
];
