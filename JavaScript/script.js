import { renderMenu } from "./components/menu.js";
import { renderScreens } from "./components/screens.js";
import { screens } from "./data/screens.js";

const menu = document.querySelector("[data-menu]");
const content = document.querySelector("[data-screens]");
const defaultScreenId = screens[0].id;

function getMenuItems() {
  return document.querySelectorAll(".menu-item");
}

function getScreenElements() {
  return document.querySelectorAll(".screen");
}

function showScreen(screenId) {
  getScreenElements().forEach((screen) => {
    screen.classList.toggle("active", screen.id === screenId);
  });

  getMenuItems().forEach((item) => {
    item.classList.toggle("active", item.dataset.screen === screenId);
  });
}

renderMenu(menu, screens, defaultScreenId);
renderScreens(content, screens, defaultScreenId);

menu.addEventListener("click", (event) => {
  const menuItem = event.target.closest(".menu-item");

  if (!menuItem) {
    return;
  }

  showScreen(menuItem.dataset.screen);
});
