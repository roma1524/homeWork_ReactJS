import { List } from "@mui/material";
import { Link, useParams } from 'react-router-dom';
import { useState } from "react";
import { Chat } from './Chat';

export const ChatList = () => {

  const [ chats ] = useState(['Олег', 'Марина', 'Ержан']);

  const { roomId } = useParams();

  return (
    <List component="nav">
      {chats.map(chat => (
        <Link to={`/chat/${chat}`} key={chat}>
        <Chat title={chat} selected={roomId === chat} />
        </Link>
      ))}
    </List>
  )
}