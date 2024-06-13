import React, {useState} from 'react';
import '../global.css';
import { ReplyMessage, UserMessage } from '../Components/MessageBoxes.js';
import { CreateProfileButton, WhyBlindDateButton, WhySerenityButton } from '../Components/NavButtons';

function HomeView() {
    const [messages, setMessages] = useState([
        { type: 'user', text: "Hey :)" },
        { type: 'reply', text: "Hello :)" },
    ]);

    const addMessage = (message, type) => {
        setMessages([...messages, { type, text: message }]);
    };

    return (
        <div className="main-flexbox">
            <div className="boxes-container">
                <div className="home-view-box">
                    <h2>Hey there JD! I'm Jennie :) I'm 23 years old. I love working out and hiking is my favourite pastime.</h2>
                    <h2>I love my friends, my parents, and I want a family someday.</h2>
                    <h2>I care deeply about helping others and my life is based around that as best as I can manage. Nice to meet you!</h2>
                </div>
                <div className="home-view-box">
                    <div className="convo-box">
                        {messages.map((msg, index) =>
                            msg.type === 'reply' ? (
                                <ReplyMessage key={index} text={msg.text} />
                            ) : (
                                <UserMessage key={index} text={msg.text} />
                            )
                        )}
                        <div className="input-container">
                            <input type="text" className="messageInput" placeholder="Type a message..." />
                            <button onClick={() => addMessage(document.getElementsByClassName('messageInput')[0].value, 'user')}>Send</button>
                        </div>
                    </div>
                        
                </div>
            </div>
            <h3>...</h3>
            <div id='dev-buttons'>
                <CreateProfileButton />
                <WhyBlindDateButton />
                <WhySerenityButton />
            </div>
        </div>
    );
}

export default HomeView;
