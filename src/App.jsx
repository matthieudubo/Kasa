import "./styles/styles.css";
import { HashRouter, Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ApartmentDetails from "./components/ApartmentDetails";
import About from "./components/About";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flat/:id" element={<ApartmentDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
