import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RouteSeo from "./components/RouteSeo";
import { Toaster } from "./components/ui/toaster";

// Home stays eager since it's the landing route (first paint / LCP).
// Every other route is code-split so its JS is only downloaded when visited.
const About = lazy(() => import("./pages/About"));
const Packages = lazy(() => import("./pages/Packages"));
const CruiseDetail = lazy(() => import("./pages/CruiseDetail"));
const Onboard = lazy(() => import("./pages/Onboard"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const Contact = lazy(() => import("./pages/Contact"));

// Every page is wrapped in <Layout> with `bg-white min-h-screen`, so this
// matches today's look exactly while a lazy chunk loads (no flash).
const RouteFallback = () => <div className="bg-white min-h-screen" />;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouteSeo />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:slug" element={<CruiseDetail />} />
            <Route path="/onboard" element={<Onboard />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
