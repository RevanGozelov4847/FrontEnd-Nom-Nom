import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AnimatedPage from "../AnimatedPage";
import { removeFromFavorite } from "../redux/cartSlice"; // Import the action creator

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.items); // Access favorites from Redux store
  const dispatch = useDispatch();

  const handleRemoveFromFavorite = (id) => {
    dispatch(removeFromFavorite(id)); // Dispatch action to remove from favorites
  };

  return (
    <AnimatedPage>
      <div className="objectives">
        {favorites.length === 0 && <h1 className="results">0 Results</h1>}

        <h1 style={{ display: favorites.length === 0 ? "none" : "block" }}>
          Favorites
        </h1>
      </div>

      {favorites.map((prod) => (
        <div className="carte" key={prod.id}>
          <div className="imgContainere">
            <img
              src={`http://localhost:5004/${prod.productImage}`}
              alt={prod.name}
            />
          </div>
          <div className="cartInfoe">
            <div className="headlinee">
              <p>{prod.name}</p>
              <button onClick={() => handleRemoveFromFavorite(prod.id)}>
                Remove
              </button>
            </div>
            <div className="processe">
              <i className="fa-regular fa-clock"></i> 1 Hour in the process
            </div>
            <div className="numberPricee">
              <div className="pricee">
                <p>{prod.price} ₼</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </AnimatedPage>
  );
};

export default Favorites;
