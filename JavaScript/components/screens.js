import { sanitizeHTML, validateScreen } from '../utils/sanitize.js';

export function renderScreens(contentElement, screens, activeScreenId) {
  const validScreens = screens.filter(validateScreen);

  contentElement.innerHTML = validScreens
    .map(
      (screen) => `
        <article class="screen${screen.id === activeScreenId ? " active" : ""}" id="${sanitizeHTML(screen.id)}">
          ${screen.template}
        </article>
      `,
    )
    .join("");
}
