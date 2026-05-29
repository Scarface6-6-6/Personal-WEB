import "./TopBar.css";

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar__lang">
        <button type="button" className="topbar__lang-active">ES</button>
        <span>EN</span>
      </div>

      <button type="button" className="topbar__menu">☰</button>
    </header>
  );
}
