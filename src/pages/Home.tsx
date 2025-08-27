import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import FeaturedRides from '../components/Home/FeaturedRides';
import HowItWorks from '../components/Home/HowItWorks';
import WhyMusafir from '../components/Home/WhyMusafir';
import ContactCTA from '../components/Home/ContactCTA';
import Announcement from '../components/Home/Announcement'; 

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedRides />
      <Announcement /> {/* 👈 Added here */}
      <HowItWorks />
      <WhyMusafir />
      <ContactCTA />
    </div>
  );
};

export default Home;