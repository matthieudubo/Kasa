import "./styles/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ApartmentDetails from "./components/ApartmentDetails";
import About from "./components/About";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flat" element={<ApartmentDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
