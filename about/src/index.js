import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// Set default theme if not already set
// if (!document.documentElement.getAttribute('data-theme')) {
//   const preferThemeMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//   document.documentElement.setAttribute('data-theme', preferThemeMode === 'dark' ? 'dracula' : 'cupcake');
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
