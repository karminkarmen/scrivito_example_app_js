import React from 'react';
import ReactDOM from 'react-dom';
import './config/scrivito';
import './Objs';
import './Widgets';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();