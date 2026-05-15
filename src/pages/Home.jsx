import styles from "../Styles/Home.module.css";

export default function Home() {
  return (
    <div id="home" className="screen active">
      <div className={styles.heroCopy}>
        <div className="eyebrow">README</div>
        <h2>
          Hola, Soy Andrés Pantoja <br />
          ingeniero en software buscando compartir un poco de mi en este espacio
        </h2>
        <h3>
          En este lugar compartir fotos, gustos musicales, links y lo que se me ocurra que pueda contar un poco mas de mi. Espero que te guste y puedas conocerme un poco mas.
        </h3>
      </div>
      <div className={styles.motionPanel}>
        <div className={styles.pulseCore}></div>
        <div className={`${styles.floatingCard} ${styles.cardOne}`}>MÚSICA</div>
        <div className={`${styles.floatingCard} ${styles.cardTwo}`}>IDEAS</div>
        <div className={`${styles.floatingCard} ${styles.cardThree}`}>FOTOS</div>
      </div>
    </div>
  );
}