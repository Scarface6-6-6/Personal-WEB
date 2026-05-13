import { describe, it, expect, beforeEach } from 'vitest';
import { renderScreens } from '../../JavaScript/components/screens.js';
import { mockScreens, invalidScreens, maliciousScreens } from '../fixtures.js';

describe('renderScreens', () => {
  let contentElement;

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
    expect(contentElement.querySelectorAll('article').length).toBe(3);
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
    renderScreens(contentElement, invalidScreens, 'home');
    expect(contentElement.querySelectorAll('article').length).toBe(2);
  });

  it('should sanitize screen ids', () => {
    renderScreens(contentElement, maliciousScreens, 'home');
    const article = contentElement.querySelector('article');
    expect(article.id).not.toBe('onclick="alert(1)"');
    expect(article.innerHTML).not.toContain('onclick=');
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
    expect(contentElement.querySelector('.screen.active')).toBeFalsy();
  });
});
