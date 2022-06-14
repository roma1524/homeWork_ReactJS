import { CREARE_CONVERSATION, DELETE_CONVERSATION } from './types';

const initialState = {
 conversations: ['Олег', 'Марина', 'Ержан'],
}

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREARE_CONVERSATION:
      return {
        ...state,
        conversations: [...state.conversations, action.payload ],
      };
    case DELETE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter(conversation => conversation !== action.payload),
      };
    default:
      return state;
  }
}