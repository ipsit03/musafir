import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { rideData, Ride } from '../../data/rides'; // Import from your rides.ts

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRides, setFilteredRides] = useState<Ride[]>([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      navigate(`/rides?q=${encodeURIComponent(searchQuery.trim())}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() === '') {
      setFilteredRides([]);
    } else {
      const results = Object.values(rideData).filter((ride: Ride) => {
        const searchTerm = value.toLowerCase();

        return (
          ride.title.toLowerCase().includes(searchTerm) ||
          ride.location.toLowerCase().includes(searchTerm) ||
          (ride.itinerary &&
            ride.itinerary.some((point) =>
              point.toLowerCase().includes(searchTerm)
            ))
        );
      });
      setFilteredRides(results);
    }
  };

  const handleSuggestionClick = (id: string) => {
    setSearchQuery('');
    setFilteredRides([]);
    navigate(`/rides/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1559821/pexels-photo-1559821.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Discover Guided Travel Rides Anywhere, Anytime With Musafir
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Find & book travel rides with expert guides at any destination
        </p>

        {/* Search Bar with Suggestions */}
        <div className="max-w-2xl mx-auto relative">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by location, ride, or place..."
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="w-full pl-12 pr-4 py-4 text-gray-900 bg-white rounded-full text-lg focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg"
            />
            <button
              onClick={handleSearch}
              className="absolute inset-y-0 right-0 pr-2 flex items-center"
            >
              <span className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                Search
              </span>
            </button>
          </div>

          {/* Suggestions Dropdown */}
          {filteredRides.length > 0 && (
            <ul className="absolute w-full mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-20">
              {filteredRides.map((ride) => (
                <li
                  key={ride.id}
                  className="px-4 py-3 cursor-pointer hover:bg-gray-100 text-gray-800 text-left"
                  onClick={() => handleSuggestionClick(ride.id)}
                >
                  <span className="font-semibold">{ride.title}</span>
                  <span className="block text-sm text-gray-500">
                    {ride.location}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
