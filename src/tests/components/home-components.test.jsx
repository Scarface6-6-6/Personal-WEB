import { describe, expect, it, vi } from "vitest";
import { act } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import SectionCard from "../../components/SectionCard/SectionCard";
import RightMenu from "../../components/RightMenu/RightMenu";
import SocialRail from "../../components/SocialRail/SocialRail";
import TopBar from "../../components/TopBar/TopBar";
import ProfileHero from "../../components/ProfileHero/ProfileHero";

vi.mock("../../assets/Profile_Car.png", () => ({ default: "car.png" }));
vi.mock("../../assets/instagram_line_black.png", () => ({ default: "instagram.png" }));
vi.mock("../../assets/twitch.png", () => ({ default: "twitch.png" }));
vi.mock("../../assets/discord_line_black.png", () => ({ default: "discord.png" }));

const render = (node) => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);

  act(() => {
    root.render(node);
  });

  return { container, root };
};

describe("Home and component rendering", () => {
  it("renders home cards", () => {
    const { container } = render(<Home />);

    const cards = container.querySelectorAll(".home > *");
    expect(cards.length).toBe(5);
    expect(cards[1].textContent).toContain("Scarface_666");
    expect(cards[2].textContent).toContain("Rollo de fotos");
    expect(cards[3].textContent).toContain("Hola, Soy Andres Pantoja");
  });

  it("updates random gallery image over time and cleans interval", () => {
    vi.useFakeTimers();
    const clearSpy = vi.spyOn(window, "clearInterval");

    const { container, root } = render(<Home />);
    const gallery = container.querySelector(".home__gallery-preview");
    const initial = gallery?.getAttribute("style");

    act(() => {
      vi.advanceTimersByTime(2600);
    });

    const updated = gallery?.getAttribute("style");
    expect(updated).not.toBe(initial);

    act(() => {
      root.unmount();
    });

    expect(clearSpy).toHaveBeenCalled();
    clearSpy.mockRestore();
    vi.useRealTimers();
  });

  it("renders TopBar", () => {
    const { container } = render(
      <BrowserRouter>
        <TopBar menuOpen={false} onMenuEnter={() => {}} onMenuLeave={() => {}} onMenuToggle={() => {}} />
      </BrowserRouter>
    );

    expect(container.textContent).toContain("ES");
    expect(container.textContent).toContain("EN");
    expect(container.textContent).toContain("☰");
  });

  it("renders SocialRail links", () => {
    const { container } = render(<SocialRail />);

    expect(container.querySelectorAll("a").length).toBe(3);
  });

  it("renders RightMenu without close button", () => {
    window.history.pushState({}, "", "/now");

    const { container } = render(
      <BrowserRouter>
        <RightMenu open onHoverStart={() => {}} onHoverEnd={() => {}} />
      </BrowserRouter>
    );

    expect(container.textContent).toContain("About Me");
    expect(container.textContent).not.toContain("×");
    expect(container.querySelector(".menu-item.active")?.textContent).toContain("Ahora");
  });

  it("renders ProfileHero image", () => {
    const { container } = render(<ProfileHero />);

    const img = container.querySelector("img");
    expect(img).toBeTruthy();
    expect(img?.getAttribute("alt")).toBe("Foto de presentacion");
  });

  it("renders SectionCard with and without className", () => {
    const withClass = render(
      <SectionCard label="README" title="Titulo" className="extra">
        Body
      </SectionCard>
    );

    expect(withClass.container.querySelector(".section-card.extra")).toBeTruthy();

    const withoutClass = render(
      <SectionCard label="README" title="Otro titulo">
        Body 2
      </SectionCard>
    );

    expect(withoutClass.container.querySelector(".section-card")?.textContent).toContain("Otro titulo");
  });
});

