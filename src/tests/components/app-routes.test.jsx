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

describe("App routes", () => {
  it("renders Home route with shell", () => {
    const container = renderAt("/");

    expect(container.textContent).toContain("Scarface_666");
    expect(container.textContent).toContain("Rollo de fotos");
    expect(container.textContent).toContain("Apartado de Cancion de la Semana");
  });

  it("renders About route", () => {
    const container = renderAt("/about");

    expect(container.textContent).toContain("Sobre mi");
    expect(container.textContent).toContain("Scarface_666");
  });

  it("renders Gustos route aliases", () => {
    const gustos = renderAt("/gustos");
    const likes = renderAt("/likes");

    expect(gustos.textContent).toContain("Musica y Comida");
    expect(likes.textContent).toContain("Musica y Comida");
  });

  it("renders Galeria route aliases", () => {
    const galeria = renderAt("/galeria");
    const gallery = renderAt("/gallery");

    expect(galeria.textContent).toContain("Mis Fotos");
    expect(gallery.textContent).toContain("Mis Fotos");
  });

  it("renders Links route aliases", () => {
    const redes = renderAt("/redes");
    const links = renderAt("/links");

    expect(redes.textContent).toContain("Mis Redes");
    expect(links.textContent).toContain("Mis Redes");
  });

  it("renders Now route", () => {
    const container = renderAt("/now");

    expect(container.textContent).toContain("Que estoy haciendo");
  });
});

