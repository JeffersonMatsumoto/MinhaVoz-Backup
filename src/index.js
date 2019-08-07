import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './paginas/Login/Login';
import PainelAdm from './paginas/PainelAdm/PainelAdm';

// ReactDOM.render(<Login />, document.getElementById('root'));
ReactDOM.render(<PainelAdm />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
