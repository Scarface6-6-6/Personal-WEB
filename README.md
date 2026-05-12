# Mi Proyecto Web Personal

Sitio web personal estatico creado con HTML, CSS y JavaScript.

## Estructura

- `index.html`: pagina principal del sitio.
- `Styles/styles.css`: estilos visuales.
- `JavaScript/script.js`: interacciones de navegacion.
- `.github/workflows/pages.yml`: despliegue automatico a GitHub Pages.

## Uso local

Abre `index.html` en el navegador.

## GitHub Pages

El sitio se publica automaticamente con GitHub Actions cuando haces push a `main` o `Feature/Develop`. Tambien se puede ejecutar manualmente desde la pestana Actions en GitHub.

Antes del primer despliegue, activa Pages en GitHub:

1. Entra a `Settings`.
2. Abre `Pages`.
3. En `Build and deployment`, selecciona `GitHub Actions` como fuente.
4. Vuelve a ejecutar el workflow `Deploy GitHub Pages`.

Si Pages no esta habilitado, el workflow falla con `Get Pages site failed`. Eso se corrige activando Pages una sola vez desde la configuracion del repositorio.

## Sonar

El analisis de codigo corre con GitHub Actions en cada push o pull request.

Configura estos valores en GitHub antes de ejecutar el workflow:

- `SONAR_TOKEN`: secret del repositorio con el token de Sonar.
- `SONAR_PROJECT_KEY`: variable del repositorio con la key del proyecto en Sonar.
- `SONAR_ORGANIZATION`: variable del repositorio con la organization key exacta de SonarCloud. Prueba primero `scarface6-6-6`; el nombre visible puede aparecer como `Scarface6-6-6`, pero la key suele ir en minusculas.
- `SONAR_HOST_URL`: variable opcional. Si no existe, usa `https://sonarcloud.io`.

Si el analisis falla con `Organization key does not exist`, revisa la organization key en la URL de SonarCloud. En una URL como `https://sonarcloud.io/project/overview?id=...&organization=...`, el valor despues de `organization=` es el que debe ir en `SONAR_ORGANIZATION`.
