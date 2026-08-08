import "./terminal.css";

type Props = Readonly<{
  children: React.ReactNode;
  typing?: boolean;
}>;

export function TerminalCommand({ children, typing = false }: Props) {
  return (
    <p className={`terminal-command ${typing ? "terminal-command--typing" : ""}`.trim()}>
      {children}
    </p>
  );
}
