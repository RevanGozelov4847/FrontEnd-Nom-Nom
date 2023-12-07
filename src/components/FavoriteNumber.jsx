import React from "react";
import { useSelector } from 'react-redux';
import { MdOutlineFavoriteBorder } from "react-icons/md";

const FavoriteNumber = () => {
  const favorite = useSelector(state => state.favorite.items);
  return (
    <button className="favoriteNumber">
      <MdOutlineFavoriteBorder className="heartIcon" color="#10071880" />
      <span className="numberIcon">{favorite.length}</span>
      <p>Favorites</p>
    </button>
  );
};

export default FavoriteNumber;
