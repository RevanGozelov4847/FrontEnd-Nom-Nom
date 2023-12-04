import "./assets/scss/main.scss";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import EmptyCart from "./pages/EmptyCart";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <div>
        {loader ? <Loader /> : null}
        <Navbar />
        <AnimatePresence mode="wait">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
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
