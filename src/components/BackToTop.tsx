import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [justAppeared, setJustAppeared] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        if (!isVisible) {
          setJustAppeared(true);
          setTimeout(() => setJustAppeared(false), 500); // only bounce once
        }
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition 
            ${justAppeared ? "animate-bounce-once" : "animate-gentle-pulse"}`}
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
