import "./terminal.css";

type Props = Readonly<React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  className?: string;
}>;

export function TerminalCard({ children, className = "", ...sectionProps }: Props) {
  return (
    <section className={`terminal-card reveal ${className}`.trim()} {...sectionProps}>
      {children}
    </section>
  );
}
