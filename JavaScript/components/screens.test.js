import { describe, it, expect, beforeEach } from 'vitest';
import { renderScreens } from '../components/screens.js';

describe('renderScreens', () => {
  let contentElement;
  const mockScreens = [
    { id: 'home', label: 'Inicio', template: '<p class="eyebrow">README</p><h2>Home</h2>' },
    { id: 'about', label: 'Acerca de', template: '<p class="eyebrow">About</p><h2>About</h2>' },
    { id: 'links', label: 'Links', template: '<p class="eyebrow">Links</p><h2>Links</h2>' }
  ];

  beforeEach(() => {
    contentElement = document.createElement('div');
  });

  it('should render screen articles', () => {
    renderScreens(contentElement, mockScreens, 'home');
    expect(contentElement.innerHTML).toContain('article');
    expect(contentElement.innerHTML).toContain('class="screen');
  });

  it('should set active class on current screen', () => {
    renderScreens(contentElement, mockScreens, 'home');
    expect(contentElement.innerHTML).toContain('id="home"');
    expect(contentElement.innerHTML).toContain('class="screen active"');
  });

  it('should render correct number of articles', () => {
    renderScreens(contentElement, mockScreens, 'home');
    const articles = contentElement.querySelectorAll('article');
    expect(articles.length).toBe(3);
  });

  it('should include template content', () => {
    renderScreens(contentElement, mockScreens, 'home');
    expect(contentElement.innerHTML).toContain('README');
    expect(contentElement.innerHTML).toContain('About');
    expect(contentElement.innerHTML).toContain('Links');
  });

  it('should set correct id attributes', () => {
    renderScreens(contentElement, mockScreens, 'home');
    expect(contentElement.querySelector('#home')).toBeTruthy();
    expect(contentElement.querySelector('#about')).toBeTruthy();
    expect(contentElement.querySelector('#links')).toBeTruthy();
  });

  it('should handle empty screens array', () => {
    renderScreens(contentElement, [], 'home');
    expect(contentElement.innerHTML).toBe('');
  });

  it('should filter invalid screens', () => {
    const mixedScreens = [
      { id: 'home', label: 'Inicio', template: '<p>Home</p>' },
      { id: '', label: 'Invalid', template: '<p></p>' },
      { id: 'about', label: 'About', template: '<p>About</p>' }
    ];
    renderScreens(contentElement, mixedScreens, 'home');
    const articles = contentElement.querySelectorAll('article');
    expect(articles.length).toBe(2);
  });

  it('should sanitize screen ids', () => {
    const maliciousScreens = [
      { id: 'onclick="alert(1)"', label: 'Malicious', template: '<p>Content</p>' }
    ];
    renderScreens(contentElement, maliciousScreens, 'home');
    expect(contentElement.innerHTML).not.toContain('onclick=');
  });

  it('should not sanitize template content', () => {
    const screen = {
      id: 'home',
      label: 'Home',
      template: '<p class="eyebrow">README</p><h2>Home</h2>'
    };
    renderScreens(contentElement, [screen], 'home');
    expect(contentElement.innerHTML).toContain('class="eyebrow"');
    expect(contentElement.innerHTML).toContain('<h2>Home</h2>');
  });

  it('should handle screen without active screen id', () => {
    renderScreens(contentElement, mockScreens, 'non-existent');
    const activeScreen = contentElement.querySelector('.screen.active');
    expect(activeScreen).toBeFalsy();
  });
});
