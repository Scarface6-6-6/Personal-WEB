import { useEffect, useMemo, useState } from "react";
import styles from "../../Styles/Gustos.module.css";

type Props = Readonly<{
  commands: readonly string[];
  onComplete: () => void;
}>;

const toLoadedLine = (command: string) => `[OK] ${command.replace("> ", "")}`;

export function InterestsTerminalHeader({ commands, onComplete }: Props) {
  const [visibleLines, setVisibleLines] = useState(0);
  const terminalLines = useMemo(
    () => [...commands.map(toLoadedLine), "System ready."],
    [commands]
  );

  useEffect(() => {
    if (visibleLines >= terminalLines.length) {
      const completeTimer = globalThis.setTimeout(onComplete, 350);

      return () => globalThis.clearTimeout(completeTimer);
    }

    const lineTimer = globalThis.setTimeout(() => {
      setVisibleLines((currentLines) => currentLines + 1);
    }, visibleLines === 0 ? 450 : 360);

    return () => globalThis.clearTimeout(lineTimer);
  }, [onComplete, terminalLines.length, visibleLines]);

  return (
    <header className={styles.interestsHeader}>
      <p className={styles.terminalCommand}>$ load interests</p>

      <div className={styles.terminalOutput}>
        {terminalLines.slice(0, visibleLines).map((line) => (
          <p key={line} className={styles.terminalLine}>
            {line}
          </p>
        ))}
        {visibleLines < terminalLines.length && (
          <p className={styles.terminalCursor}>loading modules...</p>
        )}
      </div>
    </header>
  );
}
