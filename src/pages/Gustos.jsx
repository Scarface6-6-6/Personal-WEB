import { useCallback, useMemo, useState } from "react";
import { InterestModule } from "../components/interests/InterestModule";
import { InterestsTerminalHeader } from "../components/interests/InterestsTerminalHeader";
import { interests } from "../data/interests";
import styles from "../Styles/Gustos.module.css";

export default function Gustos() {
  const [isReady, setIsReady] = useState(false);
  const interestCommands = useMemo(
    () => interests.map((module) => module.command),
    []
  );
  const handleLoadComplete = useCallback(() => {
    setIsReady(true);
  }, []);

  return (
    <main className={`screen active ${styles.likesPage}`}>
      <InterestsTerminalHeader
        commands={interestCommands}
        onComplete={handleLoadComplete}
      />

      {isReady && (
        <section className={`${styles.interestsGrid} ${styles.interestsGridReady}`}>
          {interests.map((module) => (
            <InterestModule key={module.id} module={module} />
          ))}
        </section>
      )}
    </main>
  );
}
