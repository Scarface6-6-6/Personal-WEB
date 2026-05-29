import { describe, expect, it } from "vitest";
import { sanitizeHTML, validateScreen } from "../../utils/sanitize";

describe("sanitize utilities", () => {
  it("sanitizeHTML escapes html", () => {
    expect(sanitizeHTML("<script>alert(1)</script>")).toContain("&lt;script&gt;");
  });

  it("sanitizeHTML returns empty string for non string input", () => {
    expect(sanitizeHTML(123)).toBe("");
    expect(sanitizeHTML(null)).toBe("");
  });

  it("validateScreen rejects invalid inputs", () => {
    expect(validateScreen(null)).toBe(false);
    expect(validateScreen("foo")).toBe(false);
    expect(validateScreen({})).toBe(false);
  });

  it("validateScreen validates expected object", () => {
    expect(validateScreen({ id: "home", label: "Home", template: "main" })).toBe(true);
  });
});
