import { SOCIAL_ITEMS } from "../utils/constants";
import styles from "../Styles/Redes.module.css";

export default function Redes() {
  return (
    <div className="screen active">
      <div className="eyebrow">LINKS</div>
      <h2>Mis Redes</h2>
      <h3>Sígueme en mis redes sociales</h3>

      <div className={styles.redesGrid}>
        {SOCIAL_ITEMS.map((red) => (
          <a
            key={red.label}
            href={red.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.redesCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(155, 110, 232, 0.42)";
              e.currentTarget.style.background = "rgba(244, 240, 232, 0.06)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(244, 240, 232, 0.12)";
              e.currentTarget.style.background = "rgba(244, 240, 232, 0.03)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img src={red.icono} alt={red.label} />
            <span>{red.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}