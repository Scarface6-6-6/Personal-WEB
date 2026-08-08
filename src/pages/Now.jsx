import { useTranslation } from "react-i18next";
import { getCurrentStatus, statusBars } from "../data/currentStatus";
import { LoadingBar } from "../components/terminal/LoadingBar";
import { TerminalCard } from "../components/terminal/TerminalCard";
import { TerminalCommand } from "../components/terminal/TerminalCommand";
import { TerminalShell } from "../components/terminal/TerminalShell";

export default function Now() {
  const { i18n } = useTranslation();
  const currentStatus = getCurrentStatus(i18n.language);

  return (
    <TerminalShell>
      <TerminalCommand typing>$ current_status</TerminalCommand>

      <section className="terminal-grid">
        {Object.entries(currentStatus).map(([key, items]) => (
          <TerminalCard key={key}>
            <h3>{key}</h3>
            <pre>{items.map((item) => `- ${item}`).join("\n")}</pre>
          </TerminalCard>
        ))}
      </section>

      <TerminalCard>
        {statusBars.map((bar) => (
          <LoadingBar key={bar.label} label={bar.label} value={bar.value} />
        ))}
      </TerminalCard>
    </TerminalShell>
  );
}
