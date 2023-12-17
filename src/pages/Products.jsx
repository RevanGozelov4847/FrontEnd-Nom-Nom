import React, { useContext, useState } from "react";
import { CartContext } from "../cartContext";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import AnimatedPage from "../AnimatedPage";

const Products = () => {
  const { products, searchTerm, setCategoryFilter } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const location = useLocation();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClicked = () => {
    setIsOpened(!isOpened);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const filterProducts = (product) => {
    const nameMatches = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const priceMatches = (!minPrice || product.price >= parseFloat(minPrice)) &&
                         (!maxPrice || product.price <= parseFloat(maxPrice));
    return nameMatches && priceMatches;
  };

  const filteredProducts = products.filter(filterProducts);

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
                  <p>For newborns</p>
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
                  <input
                    type="text"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                  />
                  <i className="fa-solid minusPrice fa-minus"></i>
                  <input
                    type="text"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                  />
                </div>
              )}
            </div>
            <Link to={`/products${location.search}`}>
              <button onClick={() => setCategoryFilter(null)}>Search</button>
            </Link>
          </div>
          <div className="resultProducts">
            {filteredProducts.map((item) => (
              <Link
                to={`/products/${item.id}`}
                key={item.id}
                className="prod-card-wrapper"
              >
                <ProductCard item={item} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Products;
