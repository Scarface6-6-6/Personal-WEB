import "./terminal.css";

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export function TerminalCard({ children, className = "" }: Props) {
  return <section className={`terminal-card reveal ${className}`.trim()}>{children}</section>;
}
