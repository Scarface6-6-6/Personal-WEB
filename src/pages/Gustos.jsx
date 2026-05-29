import { useTranslation } from "react-i18next";
import { gustos } from "../data/gustos";
import styles from "../Styles/Gustos.module.css";

export default function Gustos() {
  const { t } = useTranslation();

  return (
    <div className="screen active">
      <div className="eyebrow">{t("likes.eyebrow")}</div>
      <h2>{t("likes.title")}</h2>
      <h3>{t("likes.subtitle")}</h3>

      <div className={styles.gustosContainer}>
        <div className={styles.gustosSection}>
          <div className="eyebrow">{t("likes.music")}</div>
          <div className={styles.gustosList}>
            {gustos.musica?.map((item) => (
              <p key={item}>{t("likes.musicItem")}: {item}</p>
            ))}
          </div>
        </div>

        {gustos.comida && (
          <div className={styles.gustosSection}>
            <div className="eyebrow">{t("likes.food")}</div>
            <div className={styles.gustosList}>
              {gustos.comida.map((item) => (
                <p key={item}>{t("likes.foodItem")}: {item}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

