import "./RightMenu.css";

export default function RightMenu() {
  const items = [
    { label: "About Me", icon: "◌" },
    { label: "Gustos", icon: "♡" },
    { label: "Galeria", icon: "▣" },
    { label: "Ahora", icon: "⌘" },
    { label: "Links", icon: "⌁" }
  ];

  return (
    <aside className="right-menu card">
      <div className="menu-close">×</div>

      <div className="menu-list">
        {items.map((item) => (
          <div className={`menu-item ${item.label === "Ahora" ? "active" : ""}`} key={item.label}>
            <span className="menu-item-left">
              <span className="menu-item-icon">{item.icon}</span>
              <span>{item.label}</span>
            </span>
            <span className="menu-item-dot">●</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
