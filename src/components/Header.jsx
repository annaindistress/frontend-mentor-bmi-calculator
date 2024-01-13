import styles from "./Header.module.css";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src={logo}
        alt="BMI calculator logo"
        width="40"
        height="40"
      />
    </header>
  );
}
