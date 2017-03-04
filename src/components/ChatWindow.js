import React, { Component } from 'react';
import moment from 'moment';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

import { askQuestion } from '../lib/request';

const preDefinedMessages = [
  {
    author: 'Bot',
    text: 'Hello there! You can ask me to remember what will you do',
    createdAt: moment().local().format(),
  }
];

/**
 * ChatWindow initial state
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

export default class ChatWindow extends Component {
  constructor() {
    super();
    this.state = messages(undefined, {});
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  /**
   * Scroll to bottom of MessageList.
   */
  scrollToBottom() {
    const chatWindow = document.querySelector('.message-list');
    const to = chatWindow.scrollHeight;
    chatWindow.scrollTop = to;
  }

  /**
   * Dispatch an action.
   * @param  {Object} action
   */
  dispatch(action) {
    this.setState(prevState => messages(prevState, action));
  };

  /**
   * Listener when MessageInput has submitted a value.
   * @param  {String} messageText
   */
  onMessageSubmit(messageText) {
    const message = { text: messageText, author: 'Me', createdAt: moment() };
    this.dispatch({
      type: 'ADD_MESSAGE',
      message,
    });

    askQuestion(messageText)
      .then((botMessageReply) => {
        this.dispatch({
          type: 'ADD_MESSAGE',
          message: botMessageReply,
        });
      });
  }

  render() {
    const { messages } = this.state;

    return (
      <div className="chat-window">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <MessageList messages={messages} />
              </div>
              <div className="panel-footer">
                <MessageInput onMessageSubmit={message => this.onMessageSubmit(message)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
