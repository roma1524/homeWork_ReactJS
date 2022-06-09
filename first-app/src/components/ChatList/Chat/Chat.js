import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import styled from "@emotion/styled";
import styles from "./Chat.module.css";

const ListItemStyles = styled(ListItem)`
  &.Mui-selected {
    background-color: #2b5278;
  }
  &.Mui-selected:hover {
    background-color: #2b5278;
  }
`;


export function Chat({ title, selected }) {
  return (
    <ListItemStyles
      className={styles.item}
      button={true}
      selected={selected}
    >
      <ListItemIcon>
        <AccountCircle fontSize="large" className={styles.icon} />
      </ListItemIcon>
      <div className={styles.description}>
        <ListItemText className={styles.text} primary={title} />
        <ListItemText className={styles.text} primary="author: last message" />
      </div>
    </ListItemStyles>
  );
}