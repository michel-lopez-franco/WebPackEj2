//import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'

import App from './App';
import { createRoot } from 'react-dom/client';

//document.body.innerHTML = '<div id="app"></div>';

/*ReactDOM.createRoot(
    document.getElementById('root')
).render(<App />);*/

const root = createRoot(document.getElementById('root'));
root.render(<App />);