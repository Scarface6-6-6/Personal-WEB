import { useTranslation } from "react-i18next";

export default function Now() {
  const { t } = useTranslation();

  return (
    <div className="screen active">
      <div className="eyebrow">{t("now.eyebrow")}</div>
      <h2>{t("now.title")}</h2>
      <h3>{t("now.subtitle")}</h3>
    </div>
  );
}

