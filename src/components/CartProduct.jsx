import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, decrementCount, incrementCount } from '../redux/cartSlice';
import { useNavigate } from "react-router-dom";

const CartProduct = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (cart.length === 0) {
    navigate("/emptyCart");
  }

  return (
    <>
      {cart.map((item) => (
        <div className="cart" key={item.id}>
          <div className="imgContainer">
            <img src={`http://localhost:5004/${item?.productImage}`} alt="" />
          </div>
          <div className="cartInfo">
            <div className="headline">
              <p>{item?.name}</p>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                <i className="fa-solid cross fa-xl fa-xmark"></i>
              </button>
            </div>
            <div className="process">
              <i className="fa-regular fa-clock"></i> 1 Hours in the process
            </div>
            <div className="numberPrice">
              <div className="number">
                <button onClick={() => dispatch(decrementCount(item.id))}>
                  <i className="fa-solid fa-minus"></i>
                </button>
                {item.quantity}
                <button onClick={() => dispatch(incrementCount(item.id))}>
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
              <div className="price">
                <p>{item?.price} ₼</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartProduct;
