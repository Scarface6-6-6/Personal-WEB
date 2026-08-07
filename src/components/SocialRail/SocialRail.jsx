import { SOCIAL_ITEMS } from "../../utils/constants";
import "./SocialRail.css";

export default function SocialRail() {
  const copyUsername = (item) => {
    globalThis.navigator?.clipboard?.writeText(item.username);
  };

  return (
    <aside className="social-rail">
      <div className="social-line" />

      <div className="social-icons">
        {SOCIAL_ITEMS.map((item) =>
          item.username ? (
            <button
              key={item.key}
              type="button"
              aria-label={`Copiar ${item.label}: ${item.username}`}
              className="social-link"
              onClick={() => copyUsername(item)}
            >
              <img src={item.icon} alt={item.label} />
            </button>
          ) : (
            <a
              key={item.key}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="social-link"
            >
              <img src={item.icon} alt={item.label} />
            </a>
          )
        )}
      </div>
    </aside>
  );
}
