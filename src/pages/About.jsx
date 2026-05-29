import { useTranslation } from "react-i18next";
import styles from "../Styles/About.module.css";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="screen active">
      <div className="eyebrow">{t("about.eyebrow")}</div>
      <h2>{t("about.title")}</h2>
      <h3 className={styles.h3}>{t("about.text1")}</h3>
      <h3 className={styles.h3}>{t("about.text2")}</h3>
    </div>
  );
}

