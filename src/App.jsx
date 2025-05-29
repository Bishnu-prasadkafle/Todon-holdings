import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import TopNavbar from "./Components/TopNavbar";
// import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Pages/About";

import Contact from "./Pages/Contact";
import FloatingWhatsApp from "./Components/FloatingWhatsApp";
import Services from "./Components/Service/Services";

// import Clothing from "./Pages/Servicepages/Clothing";
// import Education from "./Pages/Servicepages/Education";
// import ITSolutions from "./Pages/Servicepages/ITSolutions";
import TourismPage from "./Pages/TourismPage";
// import DigitalMarketing from "./Pages/Servicepages/DigitalMarketing";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />

        <Route path='contact' element={<Contact />} />
        <Route path='/Services' element={<Services />} />
        <Route path='services/travel' element={<TourismPage />} />
        {/* <Route path='services/clothing' element={<Clothing />} />
        <></>

        {/* <Route
          path='services/digital-marketing'
          element={<DigitalMarketing />}
        /> */}
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
