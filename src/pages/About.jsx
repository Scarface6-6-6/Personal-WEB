import { useTranslation } from "react-i18next";
import styles from "../Styles/About.module.css";

const features = [
  "Backend Developer",
  "Aprendiz permanente",
  "Buena memoria para detalles",
  "Capacidad de analizar entornos antes de actuar",
  "Fanático del rock psicodélico",
  "Cocinero ocasional",
  "Entusiasta de la tecnología y la electrónica"
];

const bugs = [
  "Sobreanaliza algunas situaciones.",
  "Puede desaparecer varias horas mientras investiga algo que le llamó la atención.",
  "Tiende a convertir conversaciones simples en debates filosóficos.",
  "Compra más proyectos de los que termina."
];

const roadmap = [
  "Profundizar conocimientos de arquitectura backend.",
  "Retomar proyectos de electrónica.",
  "Seguir construyendo cosas interesantes.",
  "Mantener viva la curiosidad."
];

const stack = `Backend:
  - Java
  - Spring Boot
  - REST APIs

Intereses:
  - Arquitectura de Software
  - Electrónica
  - Sistemas Distribuidos
  - Automatización

Combustible:
  - Café
  - Música
  - Curiosidad`;

export default function About() {
  const { t } = useTranslation();

  return (
    <article className={`screen active ${styles.readme}`}>
      <div className="eyebrow">{t("about.eyebrow")}</div>
      <h2>{t("about.title")}</h2>

      <section className={styles.section}>
        <h3>Descripcion</h3>
        <p>Humano versión 27.0.</p>
        <p>
          Construido originalmente con curiosidad, múltiples errores de compilación y una necesidad
          constante de entender cómo funcionan las cosas.
        </p>
        <p>Especializado en desarrollo backend utilizando Java y Spring bajo arquitecturas REST.</p>
        <p>
          Compatible con café, música, videojuegos, basquetbol, autos y conversaciones profundas
          después de medianoche.
        </p>
      </section>

      <section className={styles.section}>
        <h3>Caracteristicas</h3>
        <ul>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h3>Stack principal</h3>
        <pre className={styles.codeBlock}>
          <code>{stack}</code>
        </pre>
      </section>

      <section className={styles.section}>
        <h3>Comportamiento esperado</h3>
        <p>Normalmente tranquilo.</p>
        <p>Puede pasar largos periodos observando sin hablar demasiado.</p>
        <p>No significa que esté distraído.</p>
        <p>Probablemente ya analizó la situación completa.</p>
      </section>

      <section className={styles.section}>
        <h3>Bugs conocidos</h3>
        <ul>
          {bugs.map((bug) => (
            <li key={bug}>{bug}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h3>Filosofia</h3>
        <p>Cada error es una oportunidad de aprendizaje.</p>
        <p>Si algo falla, se corrige.</p>
        <p>Si algo funciona, se mejora.</p>
        <p>Si algo no existe, se construye.</p>
      </section>

      <section className={styles.section}>
        <h3>Roadmap</h3>
        <ul>
          {roadmap.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h3>Estado</h3>
        <pre className={styles.codeBlock}>
          <code>Status: Running...</code>
        </pre>
      </section>
    </article>
  );
}
