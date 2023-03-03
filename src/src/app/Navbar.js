// #region Imports

// Styles
import styles from "./Navbar.module.css";

// #endregion

/**
 * Navigation Sidebar
 */
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.debug0}>brand</div>
      <div className={styles.debug0}>icon</div>
      <div className={styles.debug0}>User</div>
      <div className={styles.debug0}>Location Subtitle</div>
      <div className={styles.debug1}>
        <div className={styles.debug0}>Home Button</div>
        <div className={styles.debug0}>Activity Button</div>
        <div className={styles.debug0}>Security Button</div>
        <div className={styles.debug0}>Settings Button</div>
      </div>
      <div className={styles.debug0}>Login/Logout</div>
    </nav>
  );
}
