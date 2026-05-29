export default function SectionCard({ label, title, children, className = "" }) {
  return (
    <section className={`section-card card ${className}`.trim()}>
      <span className="label">{label}</span>
      <h2>{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}
