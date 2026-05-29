import { describe, expect, it } from "vitest";
import { MENU_ITEMS, SOCIAL_ITEMS } from "../../utils/constants";

describe("constants", () => {
  it("has expected menu structure", () => {
    expect(MENU_ITEMS).toHaveLength(5);
    expect(MENU_ITEMS[0]).toEqual({ label: "About Me", labelEn: "About Me", path: "/about" });
    expect(MENU_ITEMS[3].path).toBe("/");
  });

  it("has expected social structure", () => {
    expect(SOCIAL_ITEMS).toHaveLength(6);
    SOCIAL_ITEMS.forEach((item) => {
      expect(item.label.length).toBeGreaterThan(0);
      expect(item.url.startsWith("https://")).toBe(true);
      expect(item.icono).toBeTruthy();
    });
  });
});
