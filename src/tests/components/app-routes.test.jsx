import { describe, expect, it, vi } from "vitest";
import { act } from "react";
import { createRoot } from "react-dom/client";
import App from "../../App";

vi.mock("../../assets/Profile_Car.png", () => ({ default: "car.png" }));
vi.mock("../../assets/profile.jpeg", () => ({ default: "profile.jpeg" }));
vi.mock("../../assets/instagram_line_black.png", () => ({ default: "instagram.png" }));
vi.mock("../../assets/play_vintage.png", () => ({ default: "play.png" }));
vi.mock("../../assets/twitch.png", () => ({ default: "twitch.png" }));
vi.mock("../../assets/discord_line_black.png", () => ({ default: "discord.png" }));

const renderAt = (path) => {
  window.history.pushState({}, "", path);
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);

  act(() => {
    root.render(<App />);
  });

  return container;
};

const finishInterestLoading = async () => {
  for (let timerCount = 0; timerCount < 10; timerCount += 1) {
    await act(async () => {
      vi.runOnlyPendingTimers();
    });
  }
};

const finishHomeLoading = async () => {
  for (let timerCount = 0; timerCount < 16; timerCount += 1) {
    await act(async () => {
      vi.runOnlyPendingTimers();
    });
  }
};

describe("App routes", () => {
  it("renders Home route with shell", async () => {
    vi.useFakeTimers();
    const container = renderAt("/");
    await finishHomeLoading();

    expect(container.textContent).toContain("Scarface_666");
    expect(container.textContent).toContain("$ boot scarface.service");
    expect(container.textContent).toContain("music_of_the_week");
    vi.useRealTimers();
  });

  it("renders About route", () => {
    const container = renderAt("/about");

    expect(container.textContent).toContain("Proyecto: Andrez Pantoja");
    expect(container.textContent).toContain("Scarface_666");
  });

  it("renders interests route aliases", async () => {
    vi.useFakeTimers();
    const interesed = renderAt("/interesed");
    await finishInterestLoading();
    const gustos = renderAt("/gustos");
    await finishInterestLoading();
    const likes = renderAt("/likes");
    await finishInterestLoading();

    expect(interesed.textContent).toContain("$ load interests");
    expect(interesed.textContent).toContain("System ready.");
    expect(interesed.textContent).toContain("Music");
    expect(gustos.textContent).toContain("$ load interests");
    expect(gustos.textContent).toContain("System ready.");
    expect(gustos.textContent).toContain("Music");
    expect(likes.textContent).toContain("$ load interests");
    expect(likes.textContent).toContain("System ready.");
    expect(likes.textContent).toContain("food.module");
    vi.useRealTimers();
  });

  it("renders Galeria route aliases", () => {
    const galeria = renderAt("/galeria");
    const gallery = renderAt("/gallery");

    expect(galeria.textContent).toContain("$ open gallery");
    expect(galeria.textContent).toContain("best_moments");
    expect(gallery.textContent).toContain("$ open gallery");
  });

  it("renders Links route aliases", () => {
    const redes = renderAt("/redes");
    const links = renderAt("/links");

    expect(redes.textContent).toContain("$ establish_connection");
    expect(redes.textContent).toContain("scarface.666");
    expect(links.textContent).toContain("$ establish_connection");
    expect(links.textContent).toContain("scarface.666");
  });

  it("renders Now route", () => {
    const container = renderAt("/now");

    expect(container.textContent).toContain("$ current_status");
    expect(container.textContent).toContain("building");
  });

  it("does not render Renata route in the app", () => {
    const container = renderAt("/renata");

    expect(container.textContent).not.toContain("Scarface_666");
    expect(container.textContent).not.toContain("Hola, Ollin.");
    expect(window.location.pathname).toBe("/renata");
  });
});




