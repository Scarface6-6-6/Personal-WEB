import { Link, useLocation } from "react-router-dom";
import { MENU_ITEMS } from "../utils/constants";
import profileImage from "../assets/profile.jpeg";
import styles from "../Styles/Sidebar.module.css";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = MENU_ITEMS;

  const isActive = (path) => location.pathname === path;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <img src={profileImage} alt="Scarface_666" />
        </div>
        <div>
          <div className={styles.profileText}>PROFILE</div>
          <h1>Scarface_666</h1>
          <p className={styles.profileDescription}>
            Un espacio personal para contar lo que soy, lo que me gusta y lo que voy descubriendo.
          </p>
        </div>
      </div>

      <nav className={styles.menu}>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`${styles.menuItem} ${isActive(item.path) ? styles.active : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
