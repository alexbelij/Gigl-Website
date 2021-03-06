import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from '../clientShared/Signup/Signup.jsx'
import Login from '../clientShared/Login'
import PerformerDashboard from './Components/performer_dashboard/PerformerDashboard'
import PerformerProfile from './Components/profile/PerformerProfile.js';

ReactDOM.render(<BrowserRouter basename="/performer">
<Switch>
    <Route path="/login">
        <Login apiUrl="/api/performer/login" userType ="performer"/>
    </Route>
    <Route path="/signup">
        <Signup apiUrl="/api/performer/signup" userType ="performer"/>
    </Route>
    <Route exact={true} path="/profile" >
        <PerformerProfile />
    </Route>

    {/* keep at bottom */}
    <Route path="/">
        <PerformerDashboard />
    </Route>
    
</Switch>
</BrowserRouter>, document.getElementById('root'));