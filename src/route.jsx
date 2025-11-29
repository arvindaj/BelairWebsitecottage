import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import About from "./pages/about";
import Rooms from "./pages/rooms";
import ContactUs from "./pages/contactus";
import Gallery from "./pages/gallery";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact-us" element={<ContactUs />} />
         <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
