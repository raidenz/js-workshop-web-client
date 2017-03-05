import React from 'react';
import Message from './Message';

const MessageList = ({ messages }) => (
  <div className="message-list">
    {messages.map((message, i) => (
      <Message
        key={i}
        from={message.author}
        body={message.text}
        timeStamp={message.createdAt}
      />
    ))}
  </div>
);

export default MessageList;
