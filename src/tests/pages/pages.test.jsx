import { describe, expect, it, vi } from 'vitest';
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import About from '../../pages/About';
import Galeria from '../../pages/Galeria';
import Gustos from '../../pages/Gustos';
import Home from '../../pages/Home';
import Redes from '../../pages/redes';
import { SOCIAL_ITEMS } from '../../utils/constants';

vi.mock('../../assets/git_red_white.png', () => ({ default: 'github.png' }));
vi.mock('../../assets/instagram_line_black.png', () => ({ default: 'instagram.png' }));
vi.mock('../../assets/twitch.png', () => ({ default: 'twitch.png' }));
vi.mock('../../assets/steam.png', () => ({ default: 'steam.png' }));
vi.mock('../../assets/discord_line_black.png', () => ({ default: 'discord.png' }));
vi.mock('../../assets/play_vintage.png', () => ({ default: 'playstation.png' }));

const renderPage = (component) => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);

  act(() => {
    root.render(component);
  });

  return { container, root };
};

describe('Pages', () => {
  it('renders the home page hero and floating labels', () => {
    renderPage(<Home />);

    expect(document.querySelector('#home')).toBeTruthy();
    expect(document.body.textContent).toContain('Hola, Soy');
    expect(document.body.textContent).toContain('MUSICA');
    expect(document.body.textContent).toContain('IDEAS');
    expect(document.body.textContent).toContain('FOTOS');
  });

  it('renders the about page copy', () => {
    renderPage(<About />);

    expect(document.body.textContent).toContain('Sobre');
    expect(document.body.textContent).toContain('tecnolog');
    expect(document.body.textContent).toContain('full-stack');
  });

  it('renders music and food preferences', () => {
    renderPage(<Gustos />);

    expect(document.body.textContent).toContain('Tame Impala');
    expect(document.body.textContent).toContain('Arctic Monkeys');
    expect(document.body.textContent).toContain('Pizza');
    expect(document.body.textContent).toContain('Sushi');
  });

  it('renders gallery images with accessible labels', () => {
    renderPage(<Galeria />);

    const images = document.querySelectorAll('img');

    expect(document.body.textContent).toContain('Mis Fotos');
    expect(images).toHaveLength(3);
    expect([...images].map((image) => image.getAttribute('alt'))).toEqual([
      'Foto de perfil',
      'Instagram',
      'PlayStation'
    ]);
  });

  it('renders social links', () => {
    renderPage(<Redes />);

    const links = document.querySelectorAll('a');

    expect(links).toHaveLength(SOCIAL_ITEMS.length);
    SOCIAL_ITEMS.forEach((item) => {
      const link = [...links].find((element) => element.textContent === item.label);
      expect(link).toBeTruthy();
      expect(link.getAttribute('href')).toBe(item.url);
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('rel')).toBe('noopener noreferrer');
    });
  });
});
