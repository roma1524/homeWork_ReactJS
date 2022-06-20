import { SEND_MESSAGE, DELETE_MESSAGE} from './types';
import {nanoid} from "nanoid";
import {DELETE_CONVERSATION} from "../types";

const initialState = {
  messages: {
    room1: [
      {
      author: "Bot",
      message: "Hello from bot",
      date: new Date(),
      id: nanoid(),
    },
      {
        author: "User",
        message: "Hello from bot 2",
        date: new Date(),
        id: nanoid(),
      },
    ],
  },
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [...(state.messages[action.payload.roomId] ?? []),
            {...action.payload.message, id: nanoid(), date: new Date()},
          ],
        },
      };
    case DELETE_MESSAGE:
      return {
      ...state,
      messages: {
        ...state.messages,
        [action.payload.roomId]: action.messages[action.payload.roomId].filter((message) => message.id !== action.payload.messageId)
      },
    };
    case DELETE_CONVERSATION:
      delete state.messages[action.payload];

      return state;
    default:
      return state;
  }
}