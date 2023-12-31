import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [price, setPrice] = useState();
  const [isUser, setIsUser] = useState(true);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(null); 

  useEffect(() => {
    getData();
  }, [categoryFilter]); 
  const getData = async () => {
    try {
      let url = "https://localhost:5000/api/Product/get_all";

      if (categoryFilter) {
        url += `?category_id=${categoryFilter}`;
      }

      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  

  const addToCart = (newProduct) => {
    const checkExisting = cart.find((product) => product.id === newProduct.id);
    if (checkExisting) {
      const nonExisting = cart.filter(
        (product) => product.id !== newProduct.id
      );
      setCart(() => [
        ...nonExisting,
        { ...checkExisting, quantity: checkExisting.quantity + 1 },
      ]);
    } else {
      setCart((prev) => [...prev, { ...newProduct, quantity: 1 }]);
    }
  };

  const addToFavorite = async (newProduct) => {
    const existingProduct = favorite.find((fav) => fav.id === newProduct.id);
    if (existingProduct) {
      return;
    }
    setFavorite([...favorite, newProduct]);
  };

  const removeFromCart = (id) => {
    const filteredArray = cart.filter((product) => product.id !== id);
    setCart(filteredArray);
  };

  const removeFromFavorite = (id) => {
    const filteredArray = favorite.filter((product) => product.id !== id);
    setFavorite(filteredArray);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      setIsAuth(false);
    } else {
      setIsAuth(true);
    }
  }, []);

  useEffect(() => {
    const totalPrice = cart.reduce(
      (acc, curr) => acc + curr.quantity * curr.price,
      0
    );
    setPrice(totalPrice);
  }, [cart]);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      setCart(JSON.parse(localCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const incrementCount = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decrementCount = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const logOut = async () => {
    try {
      await localStorage.removeItem("user");
      setIsUser(false);
      navigate("/login");
      window.location.reload();
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  const checkUser = async () => {
    try {
      let localUser = await JSON.parse(localStorage.getItem("user"));
      if (localUser === null) {
        setIsUser(false);
      } else {
        if (localUser === true) {
          setIsUser(true);
        } else {
          setIsUser(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    products,
    cart,
    addToCart,
    incrementCount,
    decrementCount,
    removeFromCart,
    price,
    isAuth,
    setCart,
    favorite,
    setFavorite,
    addToFavorite,
    removeFromFavorite,
    isUser,
    setIsUser,
    checkUser,
    logOut,
    isInWishlist,
    setIsInWishlist,
    searchTerm,
    setSearchTerm,
    categoryFilter, 
    setCategoryFilter,

  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
