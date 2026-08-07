import { TerminalCard } from "../components/terminal/TerminalCard";
import { TerminalCommand } from "../components/terminal/TerminalCommand";
import { TerminalShell } from "../components/terminal/TerminalShell";
import styles from "../Styles/About.module.css";

const metadata = {
  version: "27.0",
  status: "stable",
  runtime: "human",
  last_update: "today"
};

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
  return (
    <TerminalShell>
      <TerminalCommand typing>$ cat README.md</TerminalCommand>

      <TerminalCard>
        <pre>{Object.entries(metadata).map(([key, value]) => `${key}: ${value}`).join("\n")}</pre>
      </TerminalCard>

      <article className={styles.readme}>
        <section className={styles.section}>
          <h3>Proyecto: Andrez Pantoja</h3>
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

        <ReadmeList title="Características" items={features} />

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

        <ReadmeList title="Bugs conocidos" items={bugs} />

        <section className={styles.section}>
          <h3>Filosofía</h3>
          <p>Cada error es una oportunidad de aprendizaje.</p>
          <p>Si algo falla, se corrige.</p>
          <p>Si algo funciona, se mejora.</p>
          <p>Si algo no existe, se construye.</p>
        </section>

        <ReadmeList title="Roadmap" items={roadmap} />

        <section className={styles.section}>
          <h3>Estado</h3>
          <pre className={styles.codeBlock}>
            <code>Status: Running...</code>
          </pre>
        </section>
      </article>
    </TerminalShell>
  );
}

function ReadmeList({ title, items }) {
  return (
    <section className={styles.section}>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
