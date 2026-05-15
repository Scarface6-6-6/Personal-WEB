import { gustos } from "../data/gustos";
import styles from "../Styles/Gustos.module.css";

export default function Gustos() {
  return (
    <div className="screen active">
      <div className="eyebrow">MIS GUSTOS</div>
      <h2>Música y Comida</h2>
      <h3>Las cosas que me hacen feliz</h3>

      <div className={styles.gustosContainer}>
        <div className={styles.gustosSection}>
          <div className="eyebrow">Música Favorita</div>
          <div className={styles.gustosList}>
            {gustos.musica?.map((item) => (
              <p key={item}>♫ {item}</p>
            ))}
          </div>
        </div>

        {gustos.comida && (
          <div className={styles.gustosSection}>
            <div className="eyebrow">Comida Favorita</div>
            <div className={styles.gustosList}>
              {gustos.comida.map((item) => (
                <p key={item}>🍽️ {item}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}