import React from 'react';
import { Provider } from 'react-redux';
import store from '../../frontend/src/redux/store.js'; // import the store
import './index.css';
import App from './App.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));  // Create a root element for rendering

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
