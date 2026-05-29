import { describe, expect, it, vi } from "vitest";
import { act } from "react";
import { createRoot } from "react-dom/client";
import Home from "../../pages/Home";
import SectionCard from "../../components/SectionCard/SectionCard";
import RightMenu from "../../components/RightMenu/RightMenu";
import SocialRail from "../../components/SocialRail/SocialRail";
import TopBar from "../../components/TopBar/TopBar";
import ProfileHero from "../../components/ProfileHero/ProfileHero";

vi.mock("../../assets/Profile_Car.png", () => ({ default: "car.png" }));

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
  it("renders home with ordered central cards", () => {
    const { container } = render(<Home />);

    const cards = container.querySelectorAll(".home__content > *");
    expect(cards.length).toBe(5);
    expect(cards[0].querySelector("img")).toBeTruthy();
    expect(cards[1].textContent).toContain("Scarface_666");
    expect(cards[2].textContent).toContain("Rollo de fotos");
    expect(cards[3].textContent).toContain("Hola, Soy Andres Pantoja");
    expect(cards[4].textContent).toContain("Apartado de Cancion de la Semana");
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
    const { container } = render(<TopBar />);

    expect(container.textContent).toContain("ES");
    expect(container.textContent).toContain("EN");
    expect(container.textContent).toContain("☰");
  });

  it("renders SocialRail icons", () => {
    const { container } = render(<SocialRail />);

    expect(container.textContent).toContain("◎");
    expect(container.textContent).toContain("♬");
    expect(container.textContent).toContain("⌘");
    expect(container.textContent).toContain("in");
  });

  it("renders RightMenu with active item", () => {
    const { container } = render(<RightMenu />);

    expect(container.querySelector(".menu-item.active")?.textContent).toContain("Ahora");
    expect(container.textContent).toContain("About Me");
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
