import { socialLinks } from "../data/socialLinks";

export const MENU_ITEMS = [
  { key: "about", path: "/about", aliases: ["/about"] },
  { key: "likes", path: "/interesed", aliases: ["/interesed", "/likes", "/gustos"] },
  { key: "gallery", path: "/gallery", aliases: ["/gallery", "/galeria"] },
  { key: "now", path: "/now", aliases: ["/now"] },
  { key: "links", path: "/links", aliases: ["/links", "/redes"] }
];

export const SOCIAL_ITEMS = socialLinks.map((item) => ({
  ...item,
  key: item.id,
  label: item.title
}));
