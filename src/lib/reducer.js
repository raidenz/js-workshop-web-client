import moment from 'moment';

const preDefinedMessages = [
  {
    author: 'Bot',
    text: 'Hello there! You can ask me to remember what will you do',
    createdAt: moment().format(),
  }
];

/**
 * ChatWindow initial state.
 * @type {Object}
 */
const initialState = { messages: preDefinedMessages };

/**
 * Simple Reducer for messages state.
 * It handles state change.
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
const messages = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return { messages: state.messages.concat(action.message) };
    default:
      return state;
  }
};

export default messages;
