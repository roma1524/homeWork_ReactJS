import styles from './message.module.css';

export function Message ({title}) {
  return (
    <div>
      <h1 className={styles.container}>{title}</h1>
    </div>
  );
};