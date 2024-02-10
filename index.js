import React from 'react';
import App from './app';
import { createRoot } from 'react-dom/client';

// This is how it it is done from React 18 onwards
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App color="green" size="50px"/>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();