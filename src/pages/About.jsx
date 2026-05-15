import styles from "../Styles/About.module.css";

export default function About() {
  return (
    <div className="screen active">
      <div className="eyebrow">README</div>
      <h2>Sobre mí</h2>
      <h3 className={styles.h3}>
        Soy una persona apasionada por la tecnología y el desarrollo web. Me encanta aprender cosas nuevas y compartir mis conocimientos con otros.
      </h3>
      <h3 className={styles.h3}>
        Con experiencia en desarrollo full-stack, me especializó en crear soluciones innovadoras y eficientes. Siempre busco mejorar mis habilidades y explorar nuevas tecnologías.
      </h3>
    </div>
  );
}