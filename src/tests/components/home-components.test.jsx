import { describe, expect, it, vi } from "vitest";
import { act } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import AppLayout from "../../components/AppLayout/AppLayout";
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

const finishHomeLoading = async () => {
  for (let timerCount = 0; timerCount < 16; timerCount += 1) {
    await act(async () => {
      vi.runOnlyPendingTimers();
    });
  }
};

describe("Home and component rendering", () => {
  it("renders terminal home modules", async () => {
    vi.useFakeTimers();
    const { container } = render(<Home />);

    expect(container.textContent).toContain("$ boot scarface.service");
    expect(container.textContent).not.toContain("name: Andrez");
    await finishHomeLoading();

    expect(container.textContent).toContain("$ boot scarface.service");
    expect(container.textContent).toContain("name: Andrez");
    expect(container.textContent).toContain("music_of_the_week");
    vi.useRealTimers();
  });

  it("renders home loading bars", async () => {
    vi.useFakeTimers();
    const { container } = render(<Home />);
    await finishHomeLoading();

    expect(container.textContent).toContain("Curiosity:");
    expect(container.querySelectorAll(".loading-bar").length).toBe(6);
    vi.useRealTimers();
  });

  it("renders TopBar", () => {
    const { container } = render(
      <BrowserRouter>
        <TopBar isHome menuOpen={false} onMenuEnter={() => {}} onMenuLeave={() => {}} onMenuToggle={() => {}} />
      </BrowserRouter>
    );

    expect(container.textContent).toContain("ES");
    expect(container.textContent).toContain("EN");
    expect(container.textContent).toContain("☰");
  });

  it("updates localStorage when switching language in TopBar", () => {
    const { container } = render(
      <BrowserRouter>
        <TopBar isHome menuOpen={false} onMenuEnter={() => {}} onMenuLeave={() => {}} onMenuToggle={() => {}} />
      </BrowserRouter>
    );

    const buttons = container.querySelectorAll(".topbar__lang button");
    act(() => {
      buttons[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(globalThis.localStorage.getItem("language")).toBe("en");
  });

  it("shows a back button in TopBar outside the home route", () => {
    const { container } = render(
      <BrowserRouter>
        <TopBar isHome={false} menuOpen={false} onMenuEnter={() => {}} onMenuLeave={() => {}} onMenuToggle={() => {}} />
      </BrowserRouter>
    );

    expect(container.querySelector(".topbar__back")?.getAttribute("href")).toBe("/");
  });

  it("renders SocialRail links", () => {
    const { container } = render(<SocialRail />);

    expect(container.querySelectorAll("a").length).toBe(2);
    expect(container.querySelectorAll("button").length).toBe(1);
  });

  it("renders RightMenu without close button", () => {
    globalThis.history.pushState({}, "", "/now");

    const { container } = render(
      <BrowserRouter>
        <RightMenu open onHoverStart={() => {}} onHoverEnd={() => {}} />
      </BrowserRouter>
    );

    expect(container.textContent).toContain("README");
    expect(container.textContent).not.toContain("×");
    expect(container.querySelector(".menu-item.active")?.textContent).toContain("Now");
  });

  it("keeps side rails on home route and hides social rail on secondary route", () => {
    const homeRender = render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<div>HOME SLOT</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(homeRender.container.querySelector(".social-rail")).toBeTruthy();
    expect(homeRender.container.querySelector(".right-menu--open")).toBeTruthy();

    const secondaryRender = render(
      <MemoryRouter initialEntries={["/about"]}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/about" element={<div>ABOUT SLOT</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(secondaryRender.container.querySelector(".social-rail")).toBeFalsy();
    expect(secondaryRender.container.querySelector(".right-menu--open")).toBeFalsy();
  });

  it("opens and closes menu in secondary routes using topbar events", () => {
    vi.useFakeTimers();

    const { container } = render(
      <MemoryRouter initialEntries={["/about"]}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/about" element={<div>ABOUT SLOT</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const menuButton = container.querySelector(".topbar__menu");
    const rightMenu = container.querySelector(".right-menu");

    act(() => {
      menuButton?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(rightMenu?.className).toContain("right-menu--open");

    act(() => {
      menuButton?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      vi.advanceTimersByTime(10);
    });

    expect(rightMenu?.className).not.toContain("right-menu--open");
    vi.useRealTimers();
  });

  it("renders ProfileHero image", () => {
    const { container } = render(<ProfileHero />);

    const img = container.querySelector("img");
    expect(img).toBeTruthy();
    expect(img?.getAttribute("alt")).toBe("Ibiza Maniaca red profile");
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



