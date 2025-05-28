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
// import DigitalMarketing from "./Pages/Servicepages/DigitalMarketing";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        {/* <Route path='services/consulting' element={<ConsultingPage />} />
        <Route path='services/it-services' element={<ITServicesPage />} />
        <Route path='services/logistics' element={<Logistics />} /> */}

        {/* <Route path='services/digital-marketing' element={<DigitalMarketing />} /> */}
        <Route path='contact' element={<Contact />} />
        <Route path='/Services' element={<Services />} />

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
