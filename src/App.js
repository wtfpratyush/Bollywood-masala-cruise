import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Onboard from "./pages/Onboard";
import GalleryPage from "./pages/GalleryPage";
import Testimonials from "./pages/Testimonials";
import FaqPage from "./pages/FaqPage";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/onboard" element={<Onboard />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
