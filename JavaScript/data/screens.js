export const screens = [
  {
    id: "home",
    label: "About Me",
    template: `
      <div class="hero-copy">
        <p class="eyebrow">README</p>
        <h3>Hola, Soy Andrés Pantoja ingeniero en software buscando compartir un poco de mi en este espacio</h3>
        <p>
          En este lugar compartire fotos, gustos musicales, links y lo que se me ocurra que pueda contar un poco más de mi. Espero que te guste y puedas conocerme un poco más.
        </p>
      </div>

      <div class="motion-panel" aria-hidden="true">
        <span class="floating-card card-one">música</span>
        <span class="floating-card card-two">ideas</span>
        <span class="floating-card card-three">fotos</span>
        <div class="pulse-core"></div>
      </div>
    `,
  },
  {
    id: "favorites",
    label: "Gustos",
    template: `
      <p class="eyebrow">Gustos</p>
      <h2>Cosas que me gustan.</h2>
      <div class="tile-grid">
        <div class="tile">Música</div>
        <div class="tile">Películas</div>
        <div class="tile">Lugares</div>
        <div class="tile">Libros</div>
      </div>
    `,
  },
  {
    id: "gallery",
    label: "Galería",
    template: `
      <p class="eyebrow">Galería</p>
      <h2>Momentos, fotos o recuerdos.</h2>
      <div class="photo-grid">
        <div></div>
        <div></div>
        <div></div>
      </div>
    `,
  },
  {
    id: "now",
    label: "Ahora",
    template: `
      <p class="eyebrow">Ahora</p>
      <h2>Lo que estoy viviendo o explorando.</h2>
      <p>
        Este puede ser un apartado cambiante: que estas escuchando, pensando,
        aprendiendo o intentando últimamente.
      </p>
    `,
  },
  {
    id: "links",
    label: "Links",
    template: `
      <p class="eyebrow">Links</p>
      <h2>Dónde encontrarme.</h2>
      <div class="link-list">
        <a href="#" aria-label="Instagram">Instagram</a>
        <a href="#" aria-label="Spotify">Spotify</a>
        <a href="#" aria-label="Correo">Correo</a>
      </div>
    `,
  },
];
