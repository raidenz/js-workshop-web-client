import React from 'react';

const MessageInput = ({ onMessageSubmit }) => (
  <div className="message-input">
    <form
      className="message-input__form"
      onSubmit={(event) => {
        event.preventDefault();
        const { target } = event;
        const message = target.message.value;

        if (message) {
          onMessageSubmit(message);
        }

        target.message.value = '';
      }}
    >
      <div className="input-group">
          <input name="message" type="text" className="form-control" autoComplete="off" placeholder="Write your message here..." />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-default message-input__submit-button">Send</button>
          </span>
      </div>
    </form>
  </div>
);

export default MessageInput;
