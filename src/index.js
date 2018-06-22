import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import Index from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><Index /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
