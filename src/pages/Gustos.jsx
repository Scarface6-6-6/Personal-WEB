import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { StatusBadge } from "../components/terminal/StatusBadge";
import { TerminalCard } from "../components/terminal/TerminalCard";
import { TerminalCommand } from "../components/terminal/TerminalCommand";
import { TerminalShell } from "../components/terminal/TerminalShell";
import { getInterestModules } from "../data/localizedInterests";
import styles from "../Styles/Gustos.module.css";

export default function Gustos() {
  const { i18n } = useTranslation();
  const interestModules = useMemo(() => getInterestModules(i18n.language), [i18n.language]);
  const [openModuleId, setOpenModuleId] = useState("music");
  const [visibleLines, setVisibleLines] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const loadedModules = useMemo(
    () => interestModules.map((module) => `[OK] ${module.command.replace("> ", "")}`),
    []
  );
  const terminalLines = useMemo(() => [...loadedModules, "System ready."], [loadedModules]);

  useEffect(() => {
    setVisibleLines(0);
    setIsReady(false);
    setOpenModuleId("music");
  }, [i18n.language]);

  useEffect(() => {
    if (visibleLines >= terminalLines.length) {
      const readyTimer = globalThis.setTimeout(() => setIsReady(true), 320);

      return () => globalThis.clearTimeout(readyTimer);
    }

    const lineTimer = globalThis.setTimeout(() => {
      setVisibleLines((currentLines) => currentLines + 1);
    }, visibleLines === 0 ? 450 : 340);

    return () => globalThis.clearTimeout(lineTimer);
  }, [terminalLines.length, visibleLines]);

  return (
    <TerminalShell>
      <TerminalCard>
        <TerminalCommand typing>$ load interests</TerminalCommand>
        <pre>{terminalLines.slice(0, visibleLines).join("\n")}</pre>
        {!isReady && <p className={styles.loadingHint}>loading modules...</p>}
      </TerminalCard>

      {isReady && (
        <section className="terminal-grid">
          {interestModules.map((module) => {
          const isOpen = openModuleId === module.id;

          return (
            <TerminalCard key={module.id}>
              <button
                type="button"
                className={styles.moduleTrigger}
                onClick={() => setOpenModuleId(isOpen ? "" : module.id)}
              >
                <TerminalCommand>{module.command}</TerminalCommand>
              </button>
              <h3>{module.title}</h3>
              <p>{module.description}</p>

              {isOpen && (
                <div className={styles.moduleBody}>
                  {module.groups.map((group) => (
                    <section key={group.title}>
                      <h4>{group.title}</h4>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>
                  ))}

                  {module.scenes.map((scene) => (
                    <section key={scene.title} className={styles.sceneBlock}>
                      <TerminalCommand>$ cat {module.id}_scene.yml</TerminalCommand>
                      <h4>{scene.title}</h4>
                      <pre>{scene.data.map((row) => `${row.label}: ${row.value}`).join("\n")}</pre>
                    </section>
                  ))}
                </div>
              )}

              <StatusBadge>status: {module.status}</StatusBadge>
            </TerminalCard>
          );
          })}
        </section>
      )}
    </TerminalShell>
  );
}
