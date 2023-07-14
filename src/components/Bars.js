import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { IoReorderThree } from "react-icons/io5";

export default function Bars() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showToggle, setShowToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 900;
      setShowToggle(isSmallScreen);
      setShowSidebar(!isSmallScreen);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  return (
    <div className="bars">
      {showSidebar ? <Sidebar /> : null}
      {showToggle && (
        <button className="barToggle" onClick={toggleSidebar}>
          <IoReorderThree />
        </button>
      )}
      <Navbar />
    </div>
  );
}
