import React, { Component } from 'react';
import './App.css';
import NavBarHeader from '../../components/NavBarHeader';
import Main from '../../components/Main';

class Index extends Component {
  render() {
    return (
        <div>
            <NavBarHeader/>
            <Main/>
        </div>
    );
  }
}

export default Index;
