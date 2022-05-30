import styles from './message.module.css';
import React, {useState, useEffect, useRef} from "react";
import {Input, InputAdornment} from '@mui/material';
import {Send} from '@mui/icons-material';
import {Message} from "./Message";

const BOT_MESSAGE = {author: 'Bot', message: 'Hello from bot'};

export const MessageList = () => {

  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([BOT_MESSAGE]);

  const ref = useRef();

  useEffect(() => {
    ref.current?.focus();
  }, [])

  useEffect(() => {

    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage?.author === 'User') {
      timerId = setTimeout(() => {
        setMessages([...messages, BOT_MESSAGE])
      }, 3000)
    }

    return () => {
      clearTimeout(timerId)
    }

  }, [messages])

  const sendNewMessage = () => {
    if (value) {
      setMessages([...messages, {author: 'User', message: value}]);
      setValue('');
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header__title}>Chat List</h1>
      {messages.map((message, index) => {
        return <Message message={message} key={index}/>
      })}
      <div className="container__wrap">
        <Input type="text"
               label="Your message"
               placeholder="Your message"
               className={styles.chat__list__input}
               ref={ref}
               value={value}
               onChange={e => setValue(e.target.value)}
               onKeyDown={e => {
                 if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                   sendNewMessage();
                 }
               }}
               fullWidth={true}
               endAdornment={
                 <InputAdornment position="end">
                   {value && <Send onClick={sendNewMessage}/>}
                 </InputAdornment>
               }
        />
      </div>
    </div>
  );
};