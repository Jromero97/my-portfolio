import React from 'react';
import {Switch, Route} from 'react-router';
import AboutMe from '../../components/AboutMe';
import ContactMe from '../../components/ContactMe';
import Home from '../../components/Home';


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about-me' component={AboutMe}/>
            <Route path='/contact-me' component={ContactMe}/>
        </Switch>
    </main>
);

export default Main;