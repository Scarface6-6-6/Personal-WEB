export default function SectionCard({ label, title, children }) {
  return (
    <section className="section-card card">
      <span className="label">{label}</span>
      <h2>{title}</h2>
      <div className="section-body">{children}</div>
      {title === "Hola, Soy Andres Pantoja" ? <span className="code-pill">{`</>`}</span> : null}
    </section>
  );
}
