import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App1';
import registerServiceWorker from './registerServiceWorker';
import './styles/base.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
