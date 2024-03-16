import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TheContextProvider from './comps/functions/TheContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TheContextProvider>
    <App />
  </TheContextProvider>
);
reportWebVitals();
