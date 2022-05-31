import classNames from "classnames";
import { format } from "date-fns";
import styles from "./Message.module.css";

export function Message({ message }) {
  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: message.author === "User",
      })}
    >
      <h3>{message.message}</h3>
      <p>{message.author}</p>
      <p>{format(message?.date, "yyyy-MM-dd HH:MM:ss")}</p>
    </div>
  );
}