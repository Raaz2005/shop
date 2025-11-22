import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. Import Redux Tools
import { Provider } from 'react-redux';
import { store } from './app/store.js'; // Imports the store you created
// 2. Import Router Tool
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Step 1: Wrap with Redux Provider to make the store accessible everywhere */}
    <Provider store={store}>
      {/* Step 2: Wrap with BrowserRouter to enable navigation (links, routes) */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);