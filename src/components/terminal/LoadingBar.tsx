import "./terminal.css";

type Props = Readonly<{
  label: string;
  value: number;
}>;

export function LoadingBar({ label, value }: Props) {
  const normalizedValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className="loading-bar">
      <span>{label}: {toBlocks(normalizedValue)}</span>
      <span className="loading-bar__track" aria-hidden="true">
        <span className="loading-bar__fill" style={{ width: `${normalizedValue}%` }} />
      </span>
    </div>
  );
}

function toBlocks(value: number) {
  const activeBlocks = Math.round(value / 10);

  return `${"█".repeat(activeBlocks)}${"░".repeat(10 - activeBlocks)}`;
}
