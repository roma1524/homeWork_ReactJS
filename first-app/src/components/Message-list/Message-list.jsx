import React, {useState, useEffect, useRef, useCallback} from "react";
import {Input, InputAdornment} from '@mui/material';
import {useParams} from 'react-router-dom';
import styled from "@emotion/styled";
import {Send} from '@mui/icons-material';
import {Message} from "./Message";


const InputStyles = styled(Input)`
  color: #9a9fa1;
  padding: 10px 15px;
  font-size: ${(props) => {
    return "15px";
  }};
`;

const IconStyles = styled(Send)`
  color: #2b5278;
`;


const getBotMessage = () => ({
  author: "Bot",
  message: "Hello from bot",
  date: new Date(),
});

export const MessageList = () => {

  const {roomId} = useParams();

  const [value, setValue] = useState("");
  const [messagesList, setMessagesList] = useState({
    Олег: [getBotMessage()],
    Марина: [],
    Ержан: [],
  });

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [messagesList]);

  const sendMessage = useCallback((message, author = 'User') => {
    if (message) {
      setMessagesList((state) => ({
        ...state,
        [roomId]: [
          ...(state[roomId] ?? []),
          {author, message, date: new Date()},]
      }));
      setValue("");
    }
  }, [roomId]);

  useEffect(() => {
    const messages = messagesList[roomId] ?? [];
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage?.author === "User") {
      timerId = setTimeout(() => {
        sendMessage('Hello from Bot', 'Bot');
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [sendMessage, messagesList, roomId]);


  const handlePressInput = ({code}) => {
    if (code === "Enter" || code === 'NumpadEnter') {
      sendMessage(value);
    }
  };

  const messages = messagesList[roomId] ?? [];

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message message={message} key={message?.date ?? index}/>
        ))}
      </div>

      <InputStyles
        placeholder="enter message ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handlePressInput}
        fullWidth={true}
        endAdornment={
          <InputAdornment position="end">
            {value && <IconStyles onClick={() => sendMessage(value)}/>}
          </InputAdornment>
        }
      />
    </>
  );
};