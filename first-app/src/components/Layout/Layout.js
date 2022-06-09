import styles from './Layout.module.css';

export const Layout = ({ chats, messages }) => {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <div className={styles.chats}>{ chats }</div>
        <div className={styles.messages}>{ messages }</div>
      </div>
    </div>
  )
}