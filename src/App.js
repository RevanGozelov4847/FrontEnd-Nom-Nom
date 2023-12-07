import "./assets/scss/main.scss";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import EmptyCart from "./pages/EmptyCart";
import Products from "./pages/Products";
// import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Form from "./pages/Form";
import Footer from "./components/Footer";
import Favorites from "./pages/Favorites";
import Accordion from "./components/Accordion";
import Sidebar from "./components/Sidebar";
import SpecificProduct from "./pages/SpecificProduct";
import StickyNavbar from "./components/StickyNavbar";
import ResponsiveAccordion from "./components/ResponsiveAccordion";
import { useEffect, useState } from "react";
import Cart from "./pages/Cart";

function App() {
  const location = useLocation();
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
        setIsUser(true);
        return;
      }
      setIsUser(false);
      // navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      {loader ? <Loader /> : null}
      <AnimatePresence mode="wait">
        {/* <Navbar /> */}
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SpecificProduct />} />

          {isUser ? <Route path="/cart" element={<Cart />} /> : null}
          <Route path="/form" element={<Form />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/emptyCart" element={<EmptyCart />} />
          <Route path={"/login"} element={<Login />} />
          <Route
            path="/responsiveAccordion"
            element={<ResponsiveAccordion />}
          />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <StickyNavbar />
      <Footer />
    </div>
  );
}

export default App;