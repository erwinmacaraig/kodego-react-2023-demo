/* eslint-disable no-unused-vars */
// This is the first one that gets executed when 
// our project runs inside the browser

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>        
    </React.StrictMode>
);