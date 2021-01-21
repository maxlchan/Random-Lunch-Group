import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './modules/store';

ReactDOM.render(<App store={store} />, document.getElementById('root'));
