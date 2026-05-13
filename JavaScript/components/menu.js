export function renderMenu(menuElement, screens, activeScreenId) {
  menuElement.innerHTML = screens
    .map(
      (screen) => `
        <button class="menu-item${screen.id === activeScreenId ? " active" : ""}" data-screen="${screen.id}" type="button">
          <span>${screen.label}</span>
        </button>
      `,
    )
    .join("");
}
