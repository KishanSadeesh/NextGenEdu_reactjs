import "./App.css";
import Home from "./pages/Home";
import Header from "./Components/header";
import Login from "./pages/Login";
import HideNav from "./Components/HideNav";
import Signup from './pages/Signup';
import Footer from './Components/footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <HideNav>
          <Header />
        </HideNav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/SignUp" element={<Signup />} />

        </Routes>
        <HideNav>
          <Footer/>
        </HideNav>
      </Router>
    </div>
  );
}

export default App;
