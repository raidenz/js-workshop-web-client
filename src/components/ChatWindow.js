import React, { Component } from 'react';
import moment from 'moment';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import messages from '../lib/reducer';
import { askQuestion } from '../lib/request';

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
    const message = { text: messageText, author: 'Me', createdAt: moment().format() };
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
