import { describe, expect, it } from "vitest";
import { MENU_ITEMS, SOCIAL_ITEMS } from "../../utils/constants";

describe("constants", () => {
  it("has expected menu structure", () => {
    expect(MENU_ITEMS).toHaveLength(5);
    expect(MENU_ITEMS[0]).toEqual({ key: "about", path: "/about", aliases: ["/about"] });
    expect(MENU_ITEMS[1].path).toBe("/interesed");
    expect(MENU_ITEMS[1].aliases).toContain("/interesed");
    expect(MENU_ITEMS[1].aliases).toContain("/likes");
    expect(MENU_ITEMS[1].aliases).toContain("/gustos");
    expect(MENU_ITEMS[2].aliases).toContain("/galeria");
    expect(MENU_ITEMS[4].aliases).toContain("/redes");
  });

  it("has expected social structure", () => {
    expect(SOCIAL_ITEMS).toHaveLength(3);
    expect(SOCIAL_ITEMS.find((item) => item.key === "discord")).toMatchObject({
      action: "copy",
      username: "scarface.666"
    });
    expect(SOCIAL_ITEMS.find((item) => item.key === "instagram")?.url).toBe(
      "https://www.instagram.com/andrez.pantoja/"
    );
    expect(SOCIAL_ITEMS.find((item) => item.key === "twitch")?.url).toBe(
      "https://www.twitch.tv/scarface6_6_6"
    );
    SOCIAL_ITEMS.forEach((item) => {
      expect(item.label.length).toBeGreaterThan(0);
      expect(item.icon).toBeTruthy();
      if (item.url) {
        expect(item.url.startsWith("https://")).toBe(true);
      }
    });
  });
});

