import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../global.css';

function CreateProfileButton() {
    const navigate = useNavigate()

    const switchToProfile = () => {
        navigate('/settings')
    }

    return (
        <div>
            <p onClick={switchToProfile}>Create Profile</p>
        </div>
    );
}

function MatchAndChatButton() {
    const navigate = useNavigate()

    const switchToHome = () => {
        navigate('/')
    }

    return (
        <div>
            <p onClick={switchToHome}>Match and Chat</p>
        </div>
    );
}

function WhyBlindDateButton() {
    const navigate = useNavigate()

    const switchToWhyBlindDate = () => {
        navigate('/whyblinddate')
    }

    return (
        <div>
            <p onClick={switchToWhyBlindDate}>Why Blind Date</p>
        </div>
    );
}

function WhySerenityButton() {
    const navigate = useNavigate()

    const switchToWhySerenity = () => {
        navigate('/whyserenity')
    }

    return (
        <div>
            <p onClick={switchToWhySerenity}>Why Serenity</p>
        </div>
    );
}


export { CreateProfileButton, MatchAndChatButton, WhyBlindDateButton, WhySerenityButton };
