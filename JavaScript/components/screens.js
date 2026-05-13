export function renderScreens(contentElement, screens, activeScreenId) {
  contentElement.innerHTML = screens
    .map(
      (screen) => `
        <article class="screen${screen.id === activeScreenId ? " active" : ""}" id="${screen.id}">
          ${screen.template}
        </article>
      `,
    )
    .join("");
}
