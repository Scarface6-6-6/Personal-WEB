import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./TopBar.css";

export default function TopBar({ menuOpen, onMenuEnter, onMenuLeave, onMenuToggle }) {
  const { i18n, t } = useTranslation();

  const setLanguage = (language) => {
    i18n.changeLanguage(language).catch(() => {});
    globalThis.localStorage.setItem("language", language);
  };

  return (
    <header className="topbar">
      <div className="topbar__lang" aria-label="language-switcher">
        <button
          type="button"
          className={i18n.language === "es" ? "topbar__lang-active" : "topbar__lang-btn"}
          onClick={() => setLanguage("es")}
        >
          {t("language.es")}
        </button>
        <button
          type="button"
          className={i18n.language === "en" ? "topbar__lang-active" : "topbar__lang-btn"}
          onClick={() => setLanguage("en")}
        >
          {t("language.en")}
        </button>
      </div>

      <Link to="/" className="topbar__brand" aria-label="go home">
        {t("brand")}
      </Link>

      <button
        type="button"
        className={`topbar__menu ${menuOpen ? "topbar__menu--open" : ""}`}
        aria-label="toggle menu"
        onMouseEnter={onMenuEnter}
        onMouseLeave={onMenuLeave}
        onClick={onMenuToggle}
      >
        ☰
      </button>
    </header>
  );
}

TopBar.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  onMenuEnter: PropTypes.func.isRequired,
  onMenuLeave: PropTypes.func.isRequired,
  onMenuToggle: PropTypes.func.isRequired
};
