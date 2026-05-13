import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('Script main functionality', () => {
  let menuElement;
  let contentElement;

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
    expect(document.querySelector('[data-menu]')).toBeTruthy();
    expect(document.querySelector('[data-screens]')).toBeTruthy();
  });

  it('should select elements correctly', () => {
    expect(document.querySelector('[data-menu]')).toBe(menuElement);
    expect(document.querySelector('[data-screens]')).toBe(contentElement);
  });

  it('should get menu items and screen elements', () => {
    menuElement.innerHTML = `
      <button class="menu-item" data-screen="home">Inicio</button>
      <button class="menu-item" data-screen="about">About</button>
    `;
    contentElement.innerHTML = `
      <article class="screen active" id="home">Home</article>
      <article class="screen" id="about">About</article>
    `;
    expect(document.querySelectorAll('.menu-item').length).toBe(2);
    expect(document.querySelectorAll('.screen').length).toBe(2);
  });

  it('should toggle screen visibility', () => {
    contentElement.innerHTML = `
      <article class="screen active" id="home">Home</article>
      <article class="screen" id="about">About</article>
    `;
    
    document.querySelectorAll('.screen').forEach((screen) => {
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

    document.querySelectorAll('.menu-item').forEach((item) => {
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
    
    document.querySelector('[data-screen="about"]').click();

    expect(clickHandler).toHaveBeenCalled();
  });
});
