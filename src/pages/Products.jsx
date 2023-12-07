// Products.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice';
import ProductCard from "../components/ProductCard";
import AnimatedPage from "../AnimatedPage";

const Products = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);
  const products = useSelector(state => state.products);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ id: product.id, quantity: 1, name: product.name }));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClicked = () => {
    setIsOpened(!isOpened);
  };

  return (
    <AnimatedPage>
      <div className="objectives bg-header-products">
        <h1>Objectives</h1>
      </div>
      <div className="results">
        <div className="headline">
          <p>Results</p>
          <span>Back to old </span>
        </div>

        <div className="filterProducts">
          <div className="filter">
            <div className="purpose">
              <div className="title">
                <button className="buttonFilter" onClick={handleClick}>
                  Purpose
                </button>
                <div>
                  <i className="fa-solid minus fa-minus"></i>
                </div>
              </div>
              {isOpen && (
                <div className="detailed">
                  <p>I love you</p>
                  <p>I congratulate you</p>
                  <p>Sorry</p>
                  <p>New job</p>
                  <p>Because I love it</p>
                  <p>I'm sorry</p>
                  <p>For newborns</p>
                  <p>Year anniversary</p>
                  <p>For myself</p>
                </div>
              )}
            </div>
            <div className="price">
              <div className="title">
                <button className="buttonFilter" onClick={handleClicked}>
                  Price
                </button>
                <div>
                  <i className="fa-solid minus fa-minus"></i>
                </div>
              </div>
              {isOpened && (
                <div className="priceInterval">
                  <input type="text" />
                  <i className="fa-solid minusPrice fa-minus"></i>
                  <input type="text" />
                </div>
              )}
            </div>
            <button>Search</button>
          </div>
          <div className="resultProducts">
            {products?.map((item) => (
              <div key={item.id} className="prod-card-wrapper">
                <ProductCard item={item} />
                <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
                <Link to={`/products/${item.id}`} className="prod-card-wrapper">
                  <ProductCard item={item} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Display Cart Items */}
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((cartItem) => (
            <li key={cartItem.id}>
              {cartItem.name} - Quantity: {cartItem.quantity}
            </li>
          ))}
        </ul>
      </div>
    </AnimatedPage>
  );
};

export default Products;
