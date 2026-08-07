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
vi.mock("../../assets/gallery/personal-red-car.jpg", () => ({ default: "personal-red-car.jpg" }));
vi.mock("../../assets/gallery/places-agave.jpg", () => ({ default: "places-agave.jpg" }));
vi.mock("../../assets/gallery/places-forest.jpg", () => ({ default: "places-forest.jpg" }));
vi.mock("../../assets/gallery/places-tequila.jpg", () => ({ default: "places-tequila.jpg" }));
vi.mock("../../assets/gallery/places-torii.jpg", () => ({ default: "places-torii.jpg" }));
vi.mock("../../assets/gallery/sunset-ember.jpg", () => ({ default: "sunset-ember.jpg" }));
vi.mock("../../assets/gallery/sunset-reforma.jpg", () => ({ default: "sunset-reforma.jpg" }));
vi.mock("../../assets/gallery/sunset-rooftop.jpg", () => ({ default: "sunset-rooftop.jpg" }));
vi.mock("../../assets/gallery/ibiza-bebe-hidden-road.jpg", () => ({ default: "ibiza-bebe-hidden-road.jpg" }));
vi.mock("../../assets/gallery/ibiza-maniaca-low-angle.jpg", () => ({ default: "ibiza-maniaca-low-angle.jpg" }));
vi.mock("../../assets/gallery/nature-aloe.jpg", () => ({ default: "nature-aloe.jpg" }));
vi.mock("../../assets/gallery/nature-red-flower.jpg", () => ({ default: "nature-red-flower.jpg" }));
vi.mock("../../assets/gallery/nature-red-tree.jpg", () => ({ default: "nature-red-tree.jpg" }));
vi.mock("../../assets/gallery/places-cathedral.jpg", () => ({ default: "places-cathedral.jpg" }));
vi.mock("../../assets/gallery/places-reflection-pond.jpg", () => ({ default: "places-reflection-pond.jpg" }));
vi.mock("../../assets/gallery/places-tequila-sign.jpg", () => ({ default: "places-tequila-sign.jpg" }));
vi.mock("../../assets/gallery/sunset-cloud-ribbon.jpg", () => ({ default: "sunset-cloud-ribbon.jpg" }));
vi.mock("../../assets/gallery/sunset-orange-window.jpg", () => ({ default: "sunset-orange-window.jpg" }));
vi.mock("../../assets/gallery/sunset-storm-sun.jpg", () => ({ default: "sunset-storm-sun.jpg" }));
vi.mock("../../assets/gallery/concert-babymetal-arena-lasers.jpg", () => ({ default: "concert-babymetal-arena-lasers.jpg" }));
vi.mock("../../assets/gallery/concert-babymetal-dark-red.jpg", () => ({ default: "concert-babymetal-dark-red.jpg" }));
vi.mock("../../assets/gallery/concert-babymetal-light-beam.jpg", () => ({ default: "concert-babymetal-light-beam.jpg" }));
vi.mock("../../assets/gallery/concert-babymetal-red-arena.jpg", () => ({ default: "concert-babymetal-red-arena.jpg" }));
vi.mock("../../assets/gallery/concert-epica-blue-arena.jpg", () => ({ default: "concert-epica-blue-arena.jpg" }));
vi.mock("../../assets/gallery/concert-epica-purple-stage.jpg", () => ({ default: "concert-epica-purple-stage.jpg" }));
vi.mock("../../assets/gallery/concert-epica-red-smoke.jpg", () => ({ default: "concert-epica-red-smoke.jpg" }));
vi.mock("../../assets/gallery/concert-epica-red-wide.jpg", () => ({ default: "concert-epica-red-wide.jpg" }));
vi.mock("../../assets/gallery/concert-epica-symphonic-wide.jpg", () => ({ default: "concert-epica-symphonic-wide.jpg" }));
vi.mock("../../assets/gallery/concert-megadeth-lights-wide.jpg", () => ({ default: "concert-megadeth-lights-wide.jpg" }));
vi.mock("../../assets/gallery/concert-megadeth-red-wide.jpg", () => ({ default: "concert-megadeth-red-wide.jpg" }));
vi.mock("../../assets/gallery/concert-metallica-crowd-rig.jpg", () => ({ default: "concert-metallica-crowd-rig.jpg" }));
vi.mock("../../assets/gallery/concert-metallica-poster.jpg", () => ({ default: "concert-metallica-poster.jpg" }));
vi.mock("../../assets/gallery/concert-metallica-red-stage.jpg", () => ({ default: "concert-metallica-red-stage.jpg" }));
vi.mock("../../assets/gallery/concert-metallica-stadium-open.jpg", () => ({ default: "concert-metallica-stadium-open.jpg" }));
vi.mock("../../assets/gallery/concert-metallica-tower.jpg", () => ({ default: "concert-metallica-tower.jpg" }));
vi.mock("../../assets/gallery/concert-slipknot-blue-mask.jpg", () => ({ default: "concert-slipknot-blue-mask.jpg" }));
vi.mock("../../assets/gallery/concert-slipknot-blue-wide.jpg", () => ({ default: "concert-slipknot-blue-wide.jpg" }));
vi.mock("../../assets/gallery/concert-slipknot-red-stage.jpg", () => ({ default: "concert-slipknot-red-stage.jpg" }));
vi.mock("../../assets/gallery/concert-slipknot-red-wall.jpg", () => ({ default: "concert-slipknot-red-wall.jpg" }));

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




