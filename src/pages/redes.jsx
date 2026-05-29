import { SOCIAL_ITEMS } from "../utils/constants";
import styles from "../Styles/Redes.module.css";

export default function Redes() {
  return (
    <div className="screen active">
      <div className="eyebrow">LINKS</div>
      <h2>Mis Redes</h2>
      <h3>Sigueme en mis redes sociales</h3>

      <div className={styles.redesGrid}>
        {SOCIAL_ITEMS.map((red) => (
          <a
            key={red.label}
            href={red.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.redesCard}
          >
            <img src={red.icono} alt={red.label} />
            <span>{red.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
