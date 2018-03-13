import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rem from './js/rem';
import registerServiceWorker from './registerServiceWorker';
import mock from './mock/axiosMockAdapter';

if (process.env.NODE_ENV === 'development') mock();

rem(3.2);
ReactDOM.render( <
    App / > ,
    document.getElementById('root')
);
registerServiceWorker();