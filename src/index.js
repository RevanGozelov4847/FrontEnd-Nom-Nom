import React from 'react'; 
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartContext } from './cartContext';
import App from './App'; 

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <CartContext>
        <App />
      </CartContext>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
