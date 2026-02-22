import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import VehicleWraps from './pages/VehicleWraps';
import SignsBanners from './pages/SignsBanners';
import TShirts from './pages/TShirts';
import BusinessCards from './pages/BusinessCards';
import VinylInstallation from './pages/VinylInstallation';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Refresh ScrollTrigger on route change
    return () => {
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/vehicle-wraps" element={<VehicleWraps />} />
          <Route path="services/signs-banners" element={<SignsBanners />} />
          <Route path="services/t-shirts" element={<TShirts />} />
          <Route path="services/business-cards" element={<BusinessCards />} />
          <Route path="vinyl-installation" element={<VinylInstallation />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
