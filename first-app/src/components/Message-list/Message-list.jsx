import React, {useState, useEffect, useRef} from "react";
import {Input, InputAdornment} from '@mui/material';
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


const BOT_MESSAGE = () => ({
  author: "Bot",
  message: "Hello from bot",
  date: new Date(),
});

export const MessageList = () => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([BOT_MESSAGE()]);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [messages]);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage?.author === "User") {
      timerId = setTimeout(() => {
        setMessages([...messages, BOT_MESSAGE()]);
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [messages]);

  const sendMessage = () => {
    if (value) {
      setMessages([
        ...messages,
        { author: "User", message: value, date: new Date() },
      ]);
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter" ||  code === 'NumpadEnter') {
      sendMessage();
    }
  };

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message message={message} key={message?.date ?? index} />
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
            {value && <IconStyles onClick={sendMessage} />}
          </InputAdornment>
        }
      />
    </>
  );
};