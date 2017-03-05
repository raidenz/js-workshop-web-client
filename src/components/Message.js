import React from 'react';
import moment from 'moment';

const Message = ({ from, body, timeStamp }) => {
  const containerClass = from === 'Bot'
    ? 'message message--bot'
    : 'message';

  return (
    <div className={containerClass}>
      <div className="message__content">
        <div className="message__header">
          <strong>{from}</strong>
        </div>
        <div className="message__body" dangerouslySetInnerHTML={{ __html: body }} />
        <div className="message__meta">
          {moment(timeStamp).format('HH:MM')}
        </div>
      </div>
    </div>
  );
}

export default Message;
