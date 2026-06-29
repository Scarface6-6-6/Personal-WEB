import type { InterestModule as InterestModuleType } from "../../types/interests";
import styles from "../../Styles/Gustos.module.css";
import { InterestSection } from "./InterestSection";

type Props = Readonly<{
  module: InterestModuleType;
}>;

export function InterestModule({ module }: Props) {
  return (
    <article className={styles.interestModule}>
      <p className={styles.terminalCommand}>{module.command}</p>

      <h3>{module.title}</h3>

      <p className={styles.moduleDescription}>{module.description}</p>

      <div className={styles.moduleSections}>
        {module.groups.map((group) => (
          <InterestSection key={group.title} group={group} />
        ))}
      </div>

      {module.scenes.map((scene) => (
        <div key={scene.title} className={styles.sceneBlock}>
          <p className={styles.sceneCommand}>$ cat {module.id}_scene.yml</p>

          <h4>{scene.title}</h4>

          <div className={styles.sceneGrid}>
            {scene.data.map((row) => (
              <div key={`${row.label}-${row.value}`} className={styles.sceneRow}>
                <span>{row.label}:</span>
                <strong>{row.value}</strong>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className={styles.moduleStatus}>
        <span>Status:</span>
        <strong>{module.status}</strong>
      </div>
    </article>
  );
}
