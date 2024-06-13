import React from 'react';
import '../global.css';

function ReplyMessage({ text }) {
    return (
        <div className="message reply-message">
            <p>{text}</p>
        </div>
    );
}

function UserMessage({ text }) {
    return (
        <div className="message user-message">
            <p>{text}</p>
        </div>
    );
}

export { ReplyMessage, UserMessage };
