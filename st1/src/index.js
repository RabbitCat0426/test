import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import calc from './calc';
import app from './App';
import * as serviceWorker from './serviceWorker';
import Game from './App';
import Calc from './calc';

ReactDOM.render(<Calc />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
