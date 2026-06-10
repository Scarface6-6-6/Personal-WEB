import { afterEach, describe, expect, it, vi } from "vitest";
import { act } from "react";
import { createRoot } from "react-dom/client";
import RenataInvite from "../../pages/RenataInvite";

const renderInvite = () => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);

  act(() => {
    root.render(<RenataInvite />);
  });

  return { container, root };
};

const clickByText = (container, text) => {
  const button = [...container.querySelectorAll("button, a")].find((element) =>
    element.textContent.includes(text)
  );

  expect(button).toBeTruthy();

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  return button;
};

const finishInviteLoading = (container) => {
  const button = [...container.querySelectorAll("button")].find((element) =>
    element.textContent.includes("Ver propuesta formal")
  );

  expect(button).toBeTruthy();
  expect(button.disabled).toBe(true);
  expect(container.textContent).toContain("0%");
  expect(container.textContent).not.toContain("Vamos al cine");

  act(() => {
    vi.advanceTimersByTime(1800);
  });

  expect(button.disabled).toBe(false);
  expect(container.textContent).toContain("100%");

  clickByText(container, "Ver propuesta formal");
};

afterEach(() => {
  vi.useRealTimers();
});

describe("Renata invite flow", () => {
  it("reveals the invitation and accepts it", () => {
    vi.useFakeTimers();
    const { container } = renderInvite();

    expect(container.textContent).toContain("Hola, Ollin.");
    expect(container.textContent).toContain("Inicio");

    clickByText(container, "Iniciar encuesta");
    expect(container.textContent).toContain("¿Tienes unos minutos");

    clickByText(container, "Sí, tengo curiosidad");
    expect(container.textContent).toContain("Curiosidad detectada");
    expect(container.textContent).toContain("Scary Movie: Terroríficamente Incorrecta");

    clickByText(container, "Mucho");
    expect(container.textContent).toContain("me ahorraste trabajo");
    expect(container.textContent).toContain("Invitación desbloqueada");

    finishInviteLoading(container);
    expect(container.textContent).toContain("Vamos al cine");

    clickByText(container, "Suena como un buen plan");
    expect(container.textContent).toContain("INVITACIÓN ACEPTADA");
    expect(container.textContent).toContain("Estadísticas innecesarias");
    expect(container.querySelector(".renata-whatsapp")?.getAttribute("href")).toContain("wa.me");
  });

  it("keeps a reschedule preference as plan B", () => {
    vi.useFakeTimers();
    const { container } = renderInvite();

    clickByText(container, "Iniciar encuesta");
    clickByText(container, "No, pero igual ya estoy aquí");
    expect(container.textContent).toContain("El sistema promete ser breve");

    clickByText(container, "No sé, convénceme");
    expect(container.textContent).toContain("Modo negociación activado");

    finishInviteLoading(container);
    clickByText(container, "me gana la agenda");
    expect(container.textContent).toContain("La invitación sigue vigente");

    clickByText(container, "El siguiente fin de semana");
    expect(container.textContent).toContain("sin convertir esto en una junta de Scrum");
    expect(container.querySelector(".renata-option--selected")?.textContent).toContain(
      "El siguiente fin de semana"
    );
  });

  it("supports the pending review ending", () => {
    vi.useFakeTimers();
    const { container } = renderInvite();

    clickByText(container, "Iniciar encuesta");
    clickByText(container, "Sí, tengo curiosidad");
    clickByText(container, "No la conozco");
    expect(container.textContent).toContain("La invitación no tanto");

    finishInviteLoading(container);
    clickByText(container, "deliberarlo como adulta responsable");
    expect(container.textContent).toContain("pending_review");
    expect(container.querySelector(".renata-whatsapp")?.textContent).toContain("Te respondo por WhatsApp");
  });

  it("shows the logo achievement after five clicks", () => {
    const { container } = renderInvite();

    for (let clickCount = 0; clickCount < 5; clickCount += 1) {
      clickByText(container, "Scarface_666");
    }

    expect(container.textContent).toContain("Achievement unlocked: Curiosity Level: High");
  });
});
