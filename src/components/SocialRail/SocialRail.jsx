import { SOCIAL_ITEMS } from "../../utils/constants";
import "./SocialRail.css";

export default function SocialRail() {
  return (
    <aside className="social-rail">
      <div className="social-line" />

      <div className="social-icons">
        {SOCIAL_ITEMS.map((item) => (
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
        ))}
      </div>
    </aside>
  );
}

