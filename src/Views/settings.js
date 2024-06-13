import React from 'react';
import { MatchAndChatButton } from '../Components/NavButtons';
import '../global.css';
import data from '../../database/databasev1.json'

function SettingsView() {
    return (
        <div className="main-flexbox">
            <div className="boxes-container">

                <div className="home-view-box">
                    <h2>Hey there {'< match >'} ! I'm {data.people["1"].name} :)</h2>
                    <h2>Nice to meet you!</h2>
                </div>

                <div className="home-view-box settings-box">
                    <p>Name: {data.people["1"].name}</p>
                    <input type='text' className="nameInput" placeholder='name'></input>
                    <button onClick={() => data.people["1"].name = document.getElementsByClassName('nameInput')[0].value}>Change</button>

                    <p>Age: {data.people["1"].age}</p>
                    <input type='text' className="ageInput" placeholder='age'></input>
                    <button onClick={() => data.people["1"].age = document.getElementsByClassName('ageInput')[0].value}>Change</button>

                    <p>I'm looking for:</p>
                    <input type='text'></input>

                    <p>A person with this will like me because I can offer in return:</p>
                    <input type='text'></input>
                    <button>Add</button>
                </div>

            </div>
            <div id='dev-buttons'>
                <MatchAndChatButton />
            </div>
        </div>
    );
}

export default SettingsView;
