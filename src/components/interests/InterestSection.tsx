import type { InterestGroup } from "../../types/interests";
import styles from "../../Styles/Gustos.module.css";

type Props = Readonly<{
  group: InterestGroup;
}>;

export function InterestSection({ group }: Props) {
  return (
    <section className={styles.interestSection}>
      <h4>{group.title}</h4>

      <ul>
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
