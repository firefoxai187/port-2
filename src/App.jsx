import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import FlowerShower from './components/FlowerShower';
import Home from './pages/Home';
import CampaignDetails from './pages/CampaignDetails';

function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      {/* We apply the global light theme base here matching the drafted HTML */}
      <div className="bg-background text-on-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
        
        {/* Dynamic backdrop masks defined in HTML */}
        <svg className="absolute" height="0" width="0">
          <defs>
            <clipPath clipPathUnits="objectBoundingBox" id="blob-mask">
              <path d="M0.85,0.2 C0.95,0.4 0.9,0.7 0.75,0.85 C0.6,1 0.3,1 0.15,0.85 C0,0.7 -0.05,0.4 0.1,0.2 C0.25,0 0.65,-0.1 0.85,0.2"></path>
            </clipPath>
          </defs>
        </svg>

        <ScrollToHash />
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CampaignDetails />} />
        </Routes>
        
        <Footer />
        <FlowerShower />
      </div>
    </BrowserRouter>
  );
}

export default App;
