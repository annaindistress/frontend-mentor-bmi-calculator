import { BMI_LIMITATIONS } from "../constants";
import styles from "./Limitations.module.css";

export default function Limitations() {
  return (
    <section className={styles.section}>
      <h2 className={`title title--l ${styles.title}`}>Limitations of BMI</h2>
      <p className={styles.intro}>
        Although BMI is often a practical indicator of healthy weight, it is not
        suited for every person. Specific groups should carefully consider their
        BMI outcomes, and in certain cases, the measurement may not be
        beneficial to use.
      </p>
      <ul className={styles.list}>
        {BMI_LIMITATIONS.map((item) => (
          <li className={styles.item} key={item.title}>
            <p
              className={`title title--s ${[
                styles.subtitle,
                styles[`subtitle--${item.title.toLowerCase()}`],
              ].join(" ")}`}
            >
              {item.title}
            </p>
            <p className={styles.text}>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
