import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Rides from './pages/Rides';
import RideDetail from './pages/RideDetail';
import Calendar from './pages/Calendar';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rides" element={<Rides />} />
          <Route path="rides/:id" element={<RideDetail />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;