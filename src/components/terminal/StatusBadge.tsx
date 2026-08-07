import "./terminal.css";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export function StatusBadge({ children }: Props) {
  return <span className="status-badge">{children}</span>;
}
