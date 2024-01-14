import { PropTypes } from "prop-types";
import styles from "./Input.module.css";

export default function Input({ id, sizeType, onValueChange, value }) {
  function handleInput(id, string) {
    const regex = /\d+|\./g;
    const match = string.match(regex) || [];
    onValueChange(id, match.length > 0 ? Number(match.join("")) : "");
  }

  return (
    <div className={styles.container}>
      <input
        id={id}
        className={styles.input}
        type="number"
        inputMode="numeric"
        placeholder="0"
        value={value}
        onChange={(event) => handleInput(sizeType, event.target.value)}
      />
      <span className={styles.size}>{sizeType}</span>
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  sizeType: PropTypes.string,
  onValueChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
