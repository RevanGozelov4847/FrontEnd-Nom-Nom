import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { CartContext } from './cartContext';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <CartContext>
        <App />
        </CartContext>
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
