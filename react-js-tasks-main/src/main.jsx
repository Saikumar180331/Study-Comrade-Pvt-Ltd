// main.jsx or index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { cartStore } from './final-project/store/cartStore';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={cartStore}>
    <App />
  </Provider>
);
