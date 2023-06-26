import Link from 'next/link';

import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.logo}>
          <nav className={styles.nav}>
            <Link href="/faq">Вопросы-ответы</Link>
            <Link href="/about-us">О нас</Link>
          </nav>
        </div>
    </footer>
  );
};
