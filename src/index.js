import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <App />
    </BrowserRouter>

  // </React.StrictMode>
);


