import styles from './Header.module.css';


function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <a href="/" >
          <h1 className={styles.logo}>
              Sydney Sisco
          </h1>
          <h1 className={styles.logo}>
              Sydney Sisco
          </h1>
          <h1 className={styles.logo}>
              Sydney Sisco
          </h1>
        </a>
      </div>
      <div className={styles.subtitle}>
        <h2 className={styles.subheading}>art by human</h2>
        <h2 className={styles.subheading}>art by human</h2>
        <h2 className={styles.subheading}>art by human</h2>
      </div>
    </header>
  );
}

export default Header;
