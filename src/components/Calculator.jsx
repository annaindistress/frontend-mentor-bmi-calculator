import Form from "./Form";
import styles from "./Calculator.module.css";

export default function Calculator() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={`title title--xl ${styles.title}`}>
          Body Mass Index Calculator
        </h1>
        <p className={styles.text}>
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
        <Form />
      </div>
    </section>
  );
}
