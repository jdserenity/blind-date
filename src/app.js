import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from './Views/home.js'
import SettingsView from './Views/settings.js'
import WhyBlindDateView from './Views/whyBlindDate.js'
import WhySerenityView from './Views/whySerenity.js'

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomeView />} />
                <Route exact path="/settings" element={<SettingsView />} />
                <Route exact path="/whyblinddate" element={<WhyBlindDateView />} />
                <Route exact path="/whyserenity" element={<WhySerenityView />} />
            </Routes>
        </Router>
    );
}

export default App;
