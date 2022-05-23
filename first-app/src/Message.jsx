import styles from './message.module.css';
import {useState, useEffect, useRef} from "react";

const BOT_MESSAGE = {author: 'Bot', message: 'Hello from bot'};

export function Message() {

  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([BOT_MESSAGE]);

  const ref = useRef();

  useEffect(() => {
    ref.current?.focus();
  }, [])

  useEffect(() => {

    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage?.author === 'User'){
      timerId = setTimeout(() => {
        setMessages([...messages, BOT_MESSAGE])
      }, 3000)
    }

    return () => {
      clearTimeout(timerId)
    }

  }, [messages])

  const sendNewMessage = () => {
    if(value) {
      setMessages([...messages, {author: 'User', message: value}]);
      setValue('');
    }
  }

  return (
    <div>
      <h1>Chat List</h1>
      <input type="text"
             placeholder="Any text..."
             ref={ref}
             value={value}
             onChange={e => setValue(e.target.value)}/>
      <button onClick={sendNewMessage}>Send</button>
      <hr/>
      {messages.map(mes => (
        <div>
          <h3>{mes.message}</h3>
          <h6>{mes.author}</h6>
        </div>
      ))}
    </div>
  );
};