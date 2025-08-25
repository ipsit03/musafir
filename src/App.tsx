import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Rides from './pages/Rides';
import RideDetail from './pages/RideDetail';
import Calendar from './pages/Calendar';
import Contact from './pages/Contact';
import BackToTop from "./components/BackToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Router>
      <ScrollToTop />   {/* 👈 This fixes the issue */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rides" element={<Rides />} />
          <Route path="rides/:id" element={<RideDetail />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
       <BackToTop /> {/* 👈 Now visible on all pages */}
    </Router>
  );
}

export default App;