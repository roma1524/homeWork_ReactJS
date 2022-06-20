import {List} from "@mui/material";
import {Link, useNavigate, useParams} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {createConversation, deleteConversation} from "../../store/conversations";
import {Chat} from './Chat';
import {useCallback} from "react";

export const ChatList = () => {
  const {roomId} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const conversations = useSelector(state => state.conversations.conversations);

  const message = useSelector((state) => {
    const messages = state.messages.messages[roomId] ?? [];

    return messages[messages.length - 1];
  });

  const createConversationByName = () => {
    const conversationName = prompt('Enter name');
    const isValidname = !conversations.includes(conversationName);

    if (!!conversationName && isValidname) {
          dispatch(createConversation(conversationName));
    } else {
      alert('Some Errors');
    }
  };

  const deleteConversationByName = useCallback((conversation, e) => {
    e.preventDefault();

    dispatch(deleteConversation(conversation));
    navigate("/chat");
  }, [dispatch, navigate]);

  return (
    <List component="nav">
      <button onClick={createConversationByName}>create</button>
      {conversations.map((chat) => (
        <Link to={`/chat/${chat}`} key={chat}>
          <Chat
            title={chat}
            selected={roomId === chat}
            deleteConversationByName={deleteConversationByName}
          />
        </Link>
      ))}
    </List>
  )
}