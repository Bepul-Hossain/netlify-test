import Link from "next/link";
import styles from "./header.module.scss";
export function Header() {
  return (
    <div className="container">
      <header className={styles.header}>
        <div className={styles.items}>
          <Link  className={styles.item} href="/">Logo</Link>
        </div>
        <div className={styles.items}>
          <Link className={styles.item} href="about">
            About us
          </Link>
          <Link className={styles.item} href="services">
            Services
          </Link>
          <Link className={styles.item} href="contact">
            Contact us
          </Link>
        </div>
      </header>
    </div>
  );
}
