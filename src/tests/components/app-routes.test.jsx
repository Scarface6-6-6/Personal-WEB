import { describe, expect, it, vi } from "vitest";
import { act } from "react";
import { createRoot } from "react-dom/client";
import App from "../../App";

vi.mock("../../assets/Profile_Car.png", () => ({ default: "car.png" }));
vi.mock("../../assets/profile.jpeg", () => ({ default: "profile.jpeg" }));
vi.mock("../../assets/instagram_line_black.png", () => ({ default: "instagram.png" }));
vi.mock("../../assets/play_vintage.png", () => ({ default: "play.png" }));
vi.mock("../../assets/git_red_white.png", () => ({ default: "git.png" }));
vi.mock("../../assets/twitch.png", () => ({ default: "twitch.png" }));
vi.mock("../../assets/steam.png", () => ({ default: "steam.png" }));
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

describe("App routes", () => {
  it("renders Home route", () => {
    const container = renderAt("/");

    expect(container.textContent).toContain("Rollo de fotos");
    expect(container.textContent).toContain("Apartado de Cancion de la Semana");
  });

  it("renders About route", () => {
    const container = renderAt("/about");

    expect(container.textContent).toContain("Sobre mi");
  });

  it("renders Gustos route", () => {
    const container = renderAt("/gustos");

    expect(container.textContent).toContain("Musica y Comida");
    expect(container.textContent).toContain("Tame Impala");
  });

  it("renders Galeria route", () => {
    const container = renderAt("/galeria");

    expect(container.textContent).toContain("Mis Fotos");
    expect(container.querySelectorAll("img").length).toBe(3);
  });

  it("renders Redes route", () => {
    const container = renderAt("/redes");

    expect(container.textContent).toContain("Mis Redes");
    expect(container.querySelectorAll("a").length).toBeGreaterThanOrEqual(6);
  });
});
