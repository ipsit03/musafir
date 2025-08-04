import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  // Example: Hide Footer or Navbar on certain routes
  const hideNavbar = location.pathname.startsWith("/admin");
  const hideFooter = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {!hideNavbar && <Navbar />}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
