import "./terminal.css";

type Props = Readonly<{
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}>;

export function CommandButton({ children, href, onClick }: Props) {
  if (href) {
    return (
      <a className="command-button" href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className="command-button" type="button" onClick={onClick}>
      {children}
    </button>
  );
}
