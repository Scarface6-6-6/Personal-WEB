import styles from "../Styles/Galeria.module.css";

export default function Galeria() {
  const imagenes = [
    { id: 1, titulo: "Imagen 1", src: "../assets/social.png" },
    { id: 2, titulo: "Imagen 2", src: "../assets/social.png" },
    { id: 3, titulo: "Imagen 3", src: "../assets/social.png" },
  ];

  return (
    <div className="screen active">
      <div className="eyebrow">GALERÍA</div>
      <h2>Mis Fotos</h2>
      <h3>Una colección de momentos especiales</h3>

      <div className={styles.galeriaGrid}>
        {imagenes.map((imagen) => (
          <div key={imagen.id} className={styles.galeriaItem}>
            <img src={imagen.src} alt={imagen.titulo} />
          </div>
        ))}
      </div>
    </div>
  );
}