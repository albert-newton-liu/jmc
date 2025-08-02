import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import { useEffect } from 'react';


import Home from './pages/Home';
import About from './pages/About';
import Ministry from './pages/Ministry';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Giving from './pages/Giving';

import Header from './components/Header';
import Footer from './components/Footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// This custom component listens for route changes and scrolls to the top of the page.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    // Add the 'future' prop to the Router component to enable the v7 flags
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop /> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ministry" element={<Ministry />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/giving" element={<Giving />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}
