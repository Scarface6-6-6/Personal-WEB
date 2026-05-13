import { sanitizeHTML, validateScreen } from '../utils/sanitize.js';

export function renderMenu(menuElement, screens, activeScreenId) {
  const validScreens = screens.filter(validateScreen);

  menuElement.innerHTML = validScreens
    .map(
      (screen) => `
        <button class="menu-item${screen.id === activeScreenId ? " active" : ""}" data-screen="${sanitizeHTML(screen.id)}" type="button">
          <span>${sanitizeHTML(screen.label)}</span>
        </button>
      `,
    )
    .join("");
}
