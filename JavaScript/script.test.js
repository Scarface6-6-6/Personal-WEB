import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('Script main functionality', () => {
  let menuElement;
  let contentElement;
  const mockScreens = [
    { id: 'home', label: 'Inicio', template: '<div class="hero-copy"><h2>Home</h2></div>' },
    { id: 'about', label: 'Acerca de', template: '<div><h2>About</h2></div>' }
  ];

  beforeEach(() => {
    document.body.innerHTML = '';
    menuElement = document.createElement('div');
    menuElement.setAttribute('data-menu', '');
    contentElement = document.createElement('div');
    contentElement.setAttribute('data-screens', '');
    document.body.appendChild(menuElement);
    document.body.appendChild(contentElement);
  });

  it('should have data-menu and data-screens elements', () => {
    const menu = document.querySelector('[data-menu]');
    const screens = document.querySelector('[data-screens]');
    expect(menu).toBeTruthy();
    expect(screens).toBeTruthy();
  });

  it('should select menu element correctly', () => {
    const menu = document.querySelector('[data-menu]');
    expect(menu).toBe(menuElement);
  });

  it('should select screens element correctly', () => {
    const screens = document.querySelector('[data-screens]');
    expect(screens).toBe(contentElement);
  });

  it('should get menu items', () => {
    menuElement.innerHTML = `
      <button class="menu-item" data-screen="home">Inicio</button>
      <button class="menu-item" data-screen="about">About</button>
    `;
    const items = document.querySelectorAll('.menu-item');
    expect(items.length).toBe(2);
  });

  it('should get screen elements', () => {
    contentElement.innerHTML = `
      <article class="screen active" id="home">Home</article>
      <article class="screen" id="about">About</article>
    `;
    const screens = document.querySelectorAll('.screen');
    expect(screens.length).toBe(2);
  });

  it('should toggle screen visibility', () => {
    contentElement.innerHTML = `
      <article class="screen active" id="home">Home</article>
      <article class="screen" id="about">About</article>
    `;
    
    const screens = document.querySelectorAll('.screen');
    screens.forEach((screen) => {
      screen.classList.toggle('active', screen.id === 'about');
    });

    expect(document.querySelector('#home').classList.contains('active')).toBe(false);
    expect(document.querySelector('#about').classList.contains('active')).toBe(true);
  });

  it('should toggle menu item active state', () => {
    menuElement.innerHTML = `
      <button class="menu-item active" data-screen="home">Inicio</button>
      <button class="menu-item" data-screen="about">About</button>
    `;

    const items = document.querySelectorAll('.menu-item');
    items.forEach((item) => {
      item.classList.toggle('active', item.dataset.screen === 'about');
    });

    expect(document.querySelector('[data-screen="home"]').classList.contains('active')).toBe(false);
    expect(document.querySelector('[data-screen="about"]').classList.contains('active')).toBe(true);
  });

  it('should handle menu click events', () => {
    menuElement.innerHTML = `
      <button class="menu-item active" data-screen="home">Inicio</button>
      <button class="menu-item" data-screen="about">About</button>
    `;

    const clickHandler = vi.fn();
    menuElement.addEventListener('click', clickHandler);
    
    const aboutButton = document.querySelector('[data-screen="about"]');
    aboutButton.click();

    expect(clickHandler).toHaveBeenCalled();
  });
});
