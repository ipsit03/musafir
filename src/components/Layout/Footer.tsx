import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-7 w-7 text-blue-400" />
              <span className="text-2xl font-bold">MusafirTravelCo.org</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md mb-4">
              Discover unforgettable journeys with expert guides. Book your next ride and create memories with MusafirTravelCo.
            </p>
            <div className="flex space-x-4">
              <a href="https://m.facebook.com/p/Musafir-Travelco-61566600875144/?mibextid=ZbWKwL&ref=xav_pl_fb_external_link_ios&wtsid=rdr_0rJNmphj17olNHsPg" aria-label="Facebook" className="text-gray-400 hover:text-blue-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/musafirtravelco?igsh=MWZiN2o5dzR2dHEyeQ%3D%3D&utm_source=qr" aria-label="Instagram" className="text-gray-400 hover:text-blue-400">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-400" />
                musafirtravelco2024@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-400" />
                +91 8917506443
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-400" />
                +91 8918870969
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/rides" className="text-gray-300 hover:text-white transition">
                  All Gateways
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="text-gray-300 hover:text-white transition">
                  Calendar
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-300 hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Musafir.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
