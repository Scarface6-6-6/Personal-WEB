import { describe, it, expect, vi } from 'vitest';
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

// Mock the image imports
vi.mock('../../assets/profile.jpeg', () => ({
  default: 'profile.jpeg'
}));

vi.mock('../../Styles/Sidebar.module.css', () => ({
  default: {
    sidebar: 'sidebar',
    profile: 'profile',
    avatar: 'avatar',
    profileText: 'profileText',
    profileDescription: 'profileDescription',
    menu: 'menu',
    menuItem: 'menuItem',
    active: 'active'
  }
}));

describe('Sidebar Component', () => {
  const renderSidebar = () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);

    act(() => {
      root.render(
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      );
    });

    return { container, root };
  };

  const getByText = (text) => {
    const element = [...document.body.querySelectorAll('*')].find(
      (node) => node.textContent === text
    );

    if (!element) {
      throw new Error(`Unable to find text: ${text}`);
    }

    return element;
  };

  const getLinkByName = (name) => {
    const link = [...document.body.querySelectorAll('a')].find((element) =>
      name.test(element.textContent)
    );

    if (!link) {
      throw new Error(`Unable to find link: ${name}`);
    }

    return link;
  };

  it('should render the sidebar component', () => {
    renderSidebar();
    const aside = document.querySelector('aside');
    expect(aside).toBeTruthy();
  });

  it('should display the profile username', () => {
    renderSidebar();
    expect(getByText('Scarface_666')).toBeTruthy();
  });

  it('should display the PROFILE label', () => {
    renderSidebar();
    expect(getByText('PROFILE')).toBeTruthy();
  });

  it('should display the profile description', () => {
    renderSidebar();
    expect(
      getByText(
        'Un espacio personal para contar lo que soy, lo que me gusta y lo que voy descubriendo.'
      )
    ).toBeTruthy();
  });

  it('should render profile image with correct alt text', () => {
    renderSidebar();
    const img = document.querySelector('img[alt="Scarface_666"]');
    expect(img).toBeTruthy();
  });

  it('should render all menu items', () => {
    renderSidebar();
    expect(getByText('About Me')).toBeTruthy();
    expect(getByText('Gustos')).toBeTruthy();
    expect(getByText('Galeria')).toBeTruthy();
    expect(getByText('Ahora')).toBeTruthy();
    expect(getByText('Links')).toBeTruthy();
  });

  it('should render menu links with correct paths', () => {
    renderSidebar();
    const aboutLink = getLinkByName(/About Me/i);
    const gustosLink = getLinkByName(/Gustos/i);
    const galeriaLink = getLinkByName(/Galeria/i);
    const ahoraLink = getLinkByName(/Ahora/i);
    const linksLink = getLinkByName(/Links/i);

    expect(aboutLink.getAttribute('href')).toBe('/about');
    expect(gustosLink.getAttribute('href')).toBe('/gustos');
    expect(galeriaLink.getAttribute('href')).toBe('/galeria');
    expect(ahoraLink.getAttribute('href')).toBe('/');
    expect(linksLink.getAttribute('href')).toBe('/redes');
  });

  it('should have 5 menu items', () => {
    renderSidebar();
    const links = document.body.querySelectorAll('a');
    expect(links).toHaveLength(5);
  });

  it('should render sidebar with correct structure', () => {
    renderSidebar();
    const aside = document.querySelector('aside');
    const profileDiv = aside?.querySelector('[class*="profile"]');
    const navElement = aside?.querySelector('nav');

    expect(profileDiv).toBeTruthy();
    expect(navElement).toBeTruthy();
  });
});
