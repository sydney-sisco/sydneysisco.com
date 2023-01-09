import styles from './GlitchButton.module.scss';

export default function GlitchButton({ href, children }) {
  return (
    <div className={styles.wrapper}>
      <p class={styles.glitch} data-glitch={children}>{children}</p>
    </div>
  );
}
