const menuItems = document.querySelectorAll(".menu-item");
const screens = document.querySelectorAll(".screen");

function showScreen(screenId) {
  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === screenId);
  });

  menuItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.screen === screenId);
  });
}

menuItems.forEach((item) => {
  item.addEventListener("click", () => showScreen(item.dataset.screen));
});
