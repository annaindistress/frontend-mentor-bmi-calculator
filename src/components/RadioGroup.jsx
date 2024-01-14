import { PropTypes } from "prop-types";
import styles from "./RadioGroup.module.css";

export default function RadioGroup({ value, onSystemChange }) {
  return (
    <ul className={styles.list}>
      <li>
        <input
          className={`sr-only ${styles.input}`}
          id="scaling-system-metric"
          type="radio"
          name="scaling-system"
          value="metric"
          checked={value === "metric"}
          onChange={() => onSystemChange("metric")}
        />
        <label className={styles.label} htmlFor="scaling-system-metric">
          Metric
        </label>
      </li>
      <li>
        <input
          className={`sr-only ${styles.input}`}
          id="scaling-system-imperial"
          type="radio"
          name="scaling-system"
          value="imperial"
          checked={value === "imperial"}
          onChange={() => onSystemChange("imperial")}
        />
        <label className={styles.label} htmlFor="scaling-system-imperial">
          Imperial
        </label>
      </li>
    </ul>
  );
}

RadioGroup.propTypes = {
  value: PropTypes.string,
  onSystemChange: PropTypes.func,
};
