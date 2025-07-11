import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import Model from "./components/model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Storebar from "./components/Storebar";
import ProductDetail from "./components/ProductDetail";
import SmoothScroll from "./main";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/store" element={<Storebar />} />
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Highlight />
              <Model />
              <Features />
              <HowItWorks />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} /> 
      </Routes>
      <SmoothScroll />
    </BrowserRouter>
  );
};

export default App;
