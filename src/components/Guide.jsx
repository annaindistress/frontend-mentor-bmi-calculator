import { TIPS } from "../constants";
import styles from "./Guide.module.css";

export default function Guide() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className="title title--l">What your BMI result means</h2>
        <p className={styles.text}>
          A BMI range of 18.5 to 24.9 is considered a &apos;healthy
          weight&apos;. Maintaining a healthy weight may lower your chances of
          experiencing health issues later on, such as obesity and type 2
          diabetes. Aim for a nutritious diet with reduced fat and sugar
          content, incorporating ample fruits and vegetables. Additionally,
          strive for regular physical activity, ideally about 30 minutes daily
          for five days a week.
        </p>
      </div>
      <ul className={styles.list}>
        {TIPS.map((item) => (
          <li
            className={[
              styles.item,
              styles[`item--${item.title.split(" ")[1]}`],
            ].join(" ")}
            key={item.title}
          >
            <p className="title title--m">{item.title}</p>
            <p className={styles.description}>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
