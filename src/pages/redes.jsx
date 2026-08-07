import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BugModal } from "../components/terminal/BugModal";
import { CommandButton } from "../components/terminal/CommandButton";
import { StatusBadge } from "../components/terminal/StatusBadge";
import { TerminalCard } from "../components/terminal/TerminalCard";
import { TerminalCommand } from "../components/terminal/TerminalCommand";
import { TerminalShell } from "../components/terminal/TerminalShell";
import { getSocialLinks } from "../data/socialLinks";
import styles from "../Styles/Redes.module.css";

export default function Redes() {
  const { i18n } = useTranslation();
  const socialLinks = getSocialLinks(i18n.language);
  const [copiedId, setCopiedId] = useState("");
  const [helpOpen, setHelpOpen] = useState(false);

  const copyUsername = async (link) => {
    await copyToClipboard(link.username);
    setCopiedId(link.id);
  };

  return (
    <TerminalShell>
      <TerminalCard>
        <TerminalCommand typing>$ establish_connection</TerminalCommand>
        <p>{i18n.language.startsWith("es") ? "Inspección completada." : "Inspection completed."}</p>
        <p>
          {i18n.language.startsWith("es")
            ? "Si llegaste hasta aquí, gracias por tomarte el tiempo."
            : "If you made it this far, thanks for taking the time."}
        </p>
        <p>
          {i18n.language.startsWith("es")
            ? "Hay varias formas de seguir explorando."
            : "There are plenty of ways to keep exploring."}
        </p>
      </TerminalCard>

      <section className={styles.redesGrid}>
        {socialLinks.map((link) => (
          <TerminalCard key={link.id}>
            <TerminalCommand>{link.command}</TerminalCommand>
            <img className={styles.redesIcon} src={link.icon} alt={link.title} />
            <h3>{link.title}</h3>
            <p>{link.description}</p>
            {link.username && <StatusBadge>{link.username}</StatusBadge>}
            <div className={styles.redesActions}>
              <CommandButton
                href={link.url}
                onClick={link.username ? () => copyUsername(link) : undefined}
              >
                {copiedId === link.id ? (i18n.language.startsWith("es") ? "Copiado" : "Copied") : link.action}
              </CommandButton>
            </div>
          </TerminalCard>
        ))}
      </section>

      <TerminalCard>
        <TerminalCommand>$ logout</TerminalCommand>
        <h3>{i18n.language.startsWith("es") ? "Session Summary" : "Session Summary"}</h3>
        <pre>{[
          "Curiosity: 100%",
          "Music: Loaded",
          "Projects: Loaded",
          "Known Bugs: Loaded",
          "Connection: Pending...",
          "",
          "See you somewhere",
          "on the internet."
        ].join("\n")}</pre>
        <div className={styles.redesActions}>
          <CommandButton onClick={() => setHelpOpen(true)}>$ help</CommandButton>
        </div>
      </TerminalCard>

      <BugModal open={helpOpen} onClose={() => setHelpOpen(false)} />
    </TerminalShell>
  );
}

async function copyToClipboard(value) {
  if (globalThis.navigator?.clipboard) {
    await globalThis.navigator.clipboard.writeText(value);
  }
}
