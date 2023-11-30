import "./assets/scss/main.scss"
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <div>
     <Router>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/notFound" element={<NotFound />} />
      </Routes>
      </Router>
     </div>
    </div>
  );
}

export default App;
