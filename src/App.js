import "./assets/scss/main.scss";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import EmptyCart from "./pages/EmptyCart";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";

// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


import { useEffect, useState } from "react";
import Cart from "./pages/Cart";


function App() {

  // const location = useLocation();
  // const navigate = useNavigate();
  const [isUser, setIsUser] = useState(false);
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 1000);

  useEffect(() => {
    checkUser();
  }, []);
  
  const checkUser = async () => {
    try {
      let localUser = await JSON.parse(localStorage.getItem("user"));
      if (localUser !== null) {
        setIsUser(true)
        return
      } 
     setIsUser(false)
    //  navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <div>
        {loader ? <Loader /> : null}
        <Navbar />
        <AnimatePresence mode="wait">
          <Router>
          {/* <Routes key={location.pathname} location={location}> */}
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              {isUser ? <Route path="/cart" element={<Cart />} /> : null}
              <Route path="/notFound" element={<NotFound />} />
              <Route path="/notFound" element={<EmptyCart />} />
              <Route path="/notFound" element={<Products />} />
            </Routes>
          </Router>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
