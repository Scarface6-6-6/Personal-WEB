import { describe, expect, it } from "vitest";
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

describe("Renata invite flow", () => {
  it("reveals the invitation and accepts it", () => {
    const { container } = renderInvite();

    expect(container.textContent).toContain("Hola, Ollin.");
    expect(container.textContent).toContain("Inicio");

    clickByText(container, "Iniciar encuesta");
    expect(container.textContent).toContain("¿Tienes unos minutos");

    clickByText(container, "Sí, tengo curiosidad");
    expect(container.textContent).toContain("Curiosidad detectada");
    expect(container.textContent).toContain("Scary Movie: Terroríficamente Incorrecta");

    clickByText(container, "Mucho");
    expect(container.textContent).toContain("coincidencia sospechosamente conveniente");
    expect(container.textContent).toContain("Invitación desbloqueada");

    clickByText(container, "Ver invitación formal");
    expect(container.textContent).toContain("Me gustaría invitarte al cine");

    clickByText(container, "Sí, jalo");
    expect(container.textContent).toContain("Invitación aceptada");
    expect(container.querySelector(".renata-whatsapp")?.getAttribute("href")).toContain("wa.me");
  });

  it("keeps a reschedule preference as plan B", () => {
    const { container } = renderInvite();

    clickByText(container, "Iniciar encuesta");
    clickByText(container, "No, pero igual ya estoy aquí");
    expect(container.textContent).toContain("El sistema promete ser breve");

    clickByText(container, "No sé, convénceme");
    expect(container.textContent).toContain("Prometo una defensa breve");

    clickByText(container, "Ver invitación formal");
    clickByText(container, "ese día no puedo");
    expect(container.textContent).toContain("El sistema tiene plan B");

    clickByText(container, "Fin de semana");
    expect(container.textContent).toContain("sin convertir esto en junta de Scrum");
    expect(container.querySelector(".renata-option--selected")?.textContent).toContain("Fin de semana");
  });

  it("supports the pending review ending", () => {
    const { container } = renderInvite();

    clickByText(container, "Iniciar encuesta");
    clickByText(container, "Sí, tengo curiosidad");
    clickByText(container, "No la conozco");
    expect(container.textContent).toContain("investigación de campo");

    clickByText(container, "Ver invitación formal");
    clickByText(container, "Déjame pensarlo");
    expect(container.textContent).toContain("pending_review");
    expect(container.querySelector(".renata-whatsapp")?.textContent).toContain("Responder después");
  });
});
