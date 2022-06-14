import React, {useState, useEffect, useRef, useCallback} from "react";
import {Input, InputAdornment} from '@mui/material';
import {useParams} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import {Send} from '@mui/icons-material';
import {Message} from "./Message";
import { sendMessage, deleteMessage} from "../../store/messages";


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


// const getBotMessage = () => ({
//   author: "Bot",
//   message: "Hello from bot",
//   date: new Date(),
// });

export const MessageList = () => {
  const {roomId} = useParams();
  const dispatch = useDispatch();
  const messages = useSelector(
    (state) => state.messages.messages[roomId] ?? []
  );

  const [value, setValue] = useState("");

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [messages]);

  const send = useCallback((message, author = 'User') => {
    if (message) {
      dispatch(sendMessage(roomId, {message, author}))
      setValue("");
    }
  }, [dispatch, roomId]);

  // useEffect(() => {
  //   const lastMessage = messages[messages.length - 1];
  //   let timerId = null;
  //
  //   if (messages.length && lastMessage?.author === "User") {
  //     timerId = setTimeout(() => {
  //       send('Hello from Bot', 'Bot');
  //     }, 1000);
  //   }
  //
  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, [send, messages, roomId]);


  const handlePressInput = ({code}) => {
    if (code === "Enter" || code === 'NumpadEnter') {
      send(value);
    }
  };

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message message={message} key={message.id}/>
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
            {value && <IconStyles onClick={() => send(value)}/>}
          </InputAdornment>
        }
      />
    </>
  );
};