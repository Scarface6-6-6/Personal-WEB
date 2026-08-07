import { CommandButton } from "./CommandButton";
import { TerminalCard } from "./TerminalCard";
import { TerminalCommand } from "./TerminalCommand";
import "./terminal.css";

type Props = Readonly<{
  open: boolean;
  onClose: () => void;
}>;

export function BugModal({ open, onClose }: Props) {
  if (!open) {
    return null;
  }

  return (
    <div className="bug-modal__backdrop" role="presentation" onClick={onClose}>
      <div className="bug-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
        <TerminalCard>
          <TerminalCommand>$ help</TerminalCommand>
          <h3>Known Bug:</h3>
          <p>This command is not implemented yet.</p>
          <h3>Status:</h3>
          <p>TODO</p>
          <div className="bug-modal__actions">
            <CommandButton onClick={onClose}>$ close</CommandButton>
          </div>
        </TerminalCard>
      </div>
    </div>
  );
}
