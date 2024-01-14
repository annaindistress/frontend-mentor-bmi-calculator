import { PropTypes } from "prop-types";
import { convertLbsToStLbs } from "../utils";
import styles from "./Result.module.css";

export default function Result({ system, bmi }) {
  let title, content, weightMin, weightMax;

  if (bmi.number < 1) {
    title = "Welcome!";
    content =
      "Enter your height and weight and you'll see your BMI result here";
  } else {
    title = (
      <>
        Your BMI is... <span className={styles.number}>{bmi.number}</span>
      </>
    );
    if (system === "metric") {
      weightMin = `${bmi.idealMin}kgs`;
      weightMax = `${bmi.idealMax}kgs`;
    } else {
      weightMin = convertLbsToStLbs(bmi.idealMin);
      weightMax = convertLbsToStLbs(bmi.idealMax);
    }
    content = (
      <>
        Your BMI suggests you&apos;re a {bmi.title}. Your ideal weight is
        between{" "}
        <span className={styles.bold}>
          {weightMin} - {weightMax}
        </span>
      </>
    );
  }

  return (
    <div
      className={[
        styles.result,
        bmi.number > 1 ? styles["result--shown"] : null,
      ].join(" ")}
    >
      <p className={styles.title}>{title}</p>
      <p className={styles.text}>{content}</p>
    </div>
  );
}

Result.propTypes = {
  system: PropTypes.string,
  bmi: PropTypes.object,
};
