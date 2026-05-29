import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MENU_ITEMS } from "../../utils/constants";
import "./RightMenu.css";

export default function RightMenu({ open, onHoverStart, onHoverEnd }) {
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (aliases) => aliases.includes(location.pathname);

  return (
    <aside
      className={`right-menu card ${open ? "right-menu--open" : ""}`}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <div className="menu-list">
        {MENU_ITEMS.map((item) => (
          <NavLink
            key={item.key}
            to={item.path}
            className={`menu-item ${isActive(item.aliases) ? "active" : ""}`}
          >
            <span className="menu-item-left">
              <span className="menu-item-icon">•</span>
              <span>{t(`menu.${item.key}`)}</span>
            </span>
            <span className="menu-item-dot">●</span>
          </NavLink>
        ))}
      </div>

      <div className="menu-footer">
        <span className="menu-footer__dot" aria-hidden="true" />
        <span>Editando poco a poco</span>
      </div>
    </aside>
  );
}

RightMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onHoverStart: PropTypes.func.isRequired,
  onHoverEnd: PropTypes.func.isRequired
};
