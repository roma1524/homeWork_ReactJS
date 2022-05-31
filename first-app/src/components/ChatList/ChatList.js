import { List } from "@mui/material";
import { useState } from "react";
import { Chat } from './Chat';

export const ChatList = () => {

  const [chats] = useState(['Олег', 'Марина', 'Ержан']);
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <List component="nav">
      {chats.map((chat, index) => (
        <Chat
          key={chat}
          title={chat}
          selected={selectIndex === index}
          handleListItemClick={() => setSelectIndex(index)}
          />
      ))}
    </List>
  )
}