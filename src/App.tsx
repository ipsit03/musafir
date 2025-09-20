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
import BikeRides from "./pages/BikeRides";
import BikeRideDetail from "./pages/BikeRideDetails";
import BookingForm from "./pages/BookingForm";
import About from "./pages/About"; // 👈 import the About component

function App() {
  return (
    <Router>
      <ScrollToTop />   {/* 👈 This fixes the issue */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rides" element={<Rides />} />
           <Route path="/bikerides" element={<BikeRides />} />
          <Route path="rides/:id" element={<RideDetail />} />
          <Route path="/bikerides/:id" element={<BikeRideDetail />} /> 
          <Route path="calendar" element={<Calendar />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/bookingform" element={<BookingForm />} />
          <Route path="/about" element={<About />} /> {/* 👈 new route */}
        </Route>
      </Routes>
       <BackToTop /> {/* 👈 Now visible on all pages */}
    </Router>
  );
}

export default App;