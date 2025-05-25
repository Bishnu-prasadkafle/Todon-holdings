import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TopNavbar from "./Components/TopNavbar";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
