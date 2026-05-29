import styles from "../Styles/Galeria.module.css";
import profileImage from "../assets/profile.jpeg";
import instagramIcon from "../assets/instagram_line_black.png";
import playstationIcon from "../assets/play_vintage.png";

const images = [
  { id: 1, title: "Foto de perfil", src: profileImage },
  { id: 2, title: "Instagram", src: instagramIcon },
  { id: 3, title: "PlayStation", src: playstationIcon }
];

export default function Galeria() {
  return (
    <div className="screen active">
      <div className="eyebrow">GALERIA</div>
      <h2>Mis Fotos</h2>
      <h3>Una coleccion de momentos especiales</h3>

      <div className={styles.galeriaGrid}>
        {images.map((image) => (
          <div key={image.id} className={styles.galeriaItem}>
            <img src={image.src} alt={image.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
