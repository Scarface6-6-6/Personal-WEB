import { Link, useLocation } from "react-router-dom";
import { MENU_ITEMS } from "../utils/constants";
import profileImage from "../assets/profile.jpeg";
import styles from "../Styles/Sidebar.module.css";

const copy = {
  es: {
    profile: "PROFILE",
    description: "Un espacio personal para contar lo que soy, lo que me gusta y lo que voy descubriendo.",
    progress: "Editando poco a poco"
  },
  en: {
    profile: "PROFILE",
    description: "A personal space to share who I am, what I like, and what I keep discovering.",
    progress: "Editing little by little"
  }
};

const icons = ["?", "?", "?", "?", "?"];

export default function Sidebar({ language = "es", menuOpen = true, onToggleMenu, isHome = false }) {
  const location = useLocation();
  const text = copy[language] || copy.es;
  const isActive = (path) => location.pathname === path;

  return (
    <aside className={`${styles.sidebar} ${menuOpen ? styles.open : styles.closed} ${!isHome ? styles.compact : ""}`}>
      <button className={styles.closeButton} aria-label="toggle menu" type="button" onClick={onToggleMenu}>
        {menuOpen ? "?" : "?"}
      </button>

      <div className={styles.profileCard}>
        <img src={profileImage} alt="Scarface_666" className={styles.profileImage} />
        <div>
          <div className={styles.profileTag}>{text.profile}</div>
          <h3>Scarface_666</h3>
          <p>{text.description}</p>
        </div>
      </div>

      <nav className={styles.menu}>
        {MENU_ITEMS.map((item, index) => (
          <Link
            key={item.path}
            to={item.path}
            className={`${styles.menuItem} ${isActive(item.path) ? styles.active : ""}`}
          >
            <span className={styles.itemIcon}>{icons[index]}</span>
            <span>{language === "en" ? item.labelEn : item.label}</span>
          </Link>
        ))}
      </nav>

      <div className={styles.progressTag}>
        <span className={styles.progressDot}></span>
        <span>{text.progress}</span>
      </div>
    </aside>
  );
}
