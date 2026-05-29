# Personal Web

Portafolio personal construido con React, Vite y React Router.

## Stack

- React 18
- Vite 8
- React Router DOM 7
- Vitest 4 + jsdom
- SonarCloud (GitHub Actions)
- GitHub Pages (deploy automatico desde `main`)

## Estructura

```text
Personal-WEB/
+-- .github/workflows/
¦   +-- pages.yml
¦   +-- sonar.yml
+-- src/
¦   +-- assets/
¦   +-- components/
¦   +-- data/
¦   +-- pages/
¦   +-- Styles/
¦   +-- tests/
¦   +-- utils/
¦   +-- App.jsx
¦   +-- main.jsx
+-- CNAME
+-- index.html
+-- package.json
+-- sonar-project.properties
+-- vite.config.js
+-- vitest.config.js
```

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
npm test
npm run test:coverage
```

## Deploy (GitHub Pages)

El workflow `pages.yml`:

1. instala dependencias (`npm ci`)
2. genera build (`npm run build`)
3. publica `dist/` en GitHub Pages

Tambien copia `CNAME` y `.nojekyll` a `dist/` antes de publicar.

## Calidad (SonarCloud)

El workflow `sonar.yml` usa:

- `SONAR_TOKEN` (secret)
- `SONAR_PROJECT_KEY` (repository variable)
- `SONAR_ORGANIZATION` (repository variable)
- `SONAR_HOST_URL` opcional (default: `https://sonarcloud.io`)

## Notas

- No edites `dist/` ni `coverage/`: son artefactos generados.
- En imports, respeta mayusculas/minusculas exactas de carpetas y archivos (importante para Linux/CI).
