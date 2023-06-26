import Link from "next/link";
import styles from "./header.module.css";
import CartIcon from "../CartIcon/CartIcon";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/main">
        <div className={styles.logo}>Билетопоиск</div>
      </Link>

      <CartIcon />
    </header>
  );
};
