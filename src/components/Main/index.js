import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import AboutMe from '../../components/AboutMe';
// import ContactMe from '../../components/ContactMe';
import Home from '../../components/Home';


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' render={() => <Home/>}/>
        </Switch>
    </main>
);

export default Main;