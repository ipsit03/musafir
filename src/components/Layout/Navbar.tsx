import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },  // 👈 add this
    { name: "Musafir Getaways", path: "/rides" },
    { name: "Bike Expeditions", path: "/bikerides" },
    { name: "Calendar", path: "/calendar" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50">
      {/* Glassmorphism background */}
      <div className="bg-gradient-to-r from-blue-50/70 via-white/60 to-purple-50/70 backdrop-blur-xl border-b border-white/20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo + Tagline */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  src="/musafir-logo.png"
                  alt="Musafir Logo"
                  className="h-10 w-auto md:h-12 lg:h-14 transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                  MusafirTravelCo
                </span>
                <span className="text-xs text-gray-500 hidden lg:block">
                  Explore • Dream • Discover
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2 lg:space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-xl text-sm lg:text-base font-medium transition-all duration-300 group ${isActive(link.path)
                      ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-md"
                      : "text-gray-700 hover:text-blue-600"
                    }`}
                >
                  {link.name}
                  {/* Active underline animation */}
                  <span
                    className={`absolute left-1/2 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 ${isActive(link.path)
                        ? "w-3/4 -translate-x-1/2"
                        : "group-hover:w-1/2 group-hover:-translate-x-1/2"
                      }`}
                  ></span>
                </Link>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-90 text-blue-600" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <nav className="px-6 pt-4 pb-6 space-y-3">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:translate-x-2 ${isActive(link.path)
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                  }`}
                style={{
                  animationDelay: `${index * 80}ms`,
                  animation: isMenuOpen
                    ? "fadeInUp 0.4s ease-out forwards"
                    : "none",
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
