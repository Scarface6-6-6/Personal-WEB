import "./terminal.css";

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export function TerminalShell({ children, className = "" }: Props) {
  return <main className={`terminal-shell ${className}`.trim()}>{children}</main>;
}
