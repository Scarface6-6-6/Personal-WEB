import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SOCIAL_ITEMS } from "../utils/constants";
import styles from "../Styles/Redes.module.css";

export default function Redes() {
  const { t } = useTranslation();
  const [copiedKey, setCopiedKey] = useState("");

  const copyUsername = async (red) => {
    await globalThis.navigator.clipboard.writeText(red.username);
    setCopiedKey(red.key);
  };

  return (
    <div className="screen active">
      <div className="eyebrow">{t("links.eyebrow")}</div>
      <h2>{t("links.title")}</h2>
      <h3>{t("links.subtitle")}</h3>

      <div className={styles.redesGrid}>
        {SOCIAL_ITEMS.map((red) =>
          red.action === "copy" ? (
            <button
              key={red.label}
              type="button"
              className={styles.redesCard}
              onClick={() => copyUsername(red)}
            >
              <img src={red.icon} alt={red.label} />
              <span>{red.label}</span>
              <strong>{red.username}</strong>
              <small>{copiedKey === red.key ? "Copiado" : "Copiar nickname"}</small>
            </button>
          ) : (
            <a
              key={red.label}
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.redesCard}
            >
              <img src={red.icon} alt={red.label} />
              <span>{red.label}</span>
            </a>
          )
        )}
      </div>
    </div>
  );
}
