import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import TopNavbar from "./Components/TopNavbar";
// import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
