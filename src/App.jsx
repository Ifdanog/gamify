import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import TopNav from "./components/topnav";
import MainContent from "./components/mainContent";
import RightSidebar from "./components/rightSidebar";
import BottomNav from "./components/bottomnav";

// App.js
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? "dark" : ""} flex h-full`}>
      <div className="flex-1 flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <TopNav darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex h-full">
          {/* Sidebar - Hidden on small screens */}
          <div className="hidden md:flex">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="max-w-[1200px] w-full mx-auto">
            <MainContent />
          </div>

          {/* Right Sidebar - Hidden on small screens */}
          <div className="hidden lg:flex">
            <RightSidebar />
          </div>

          {/* Bottom Navigation Bar - Visible only on small screens */}
          <div className="md:hidden">
            <BottomNav />
          </div>
        </div>
      </div>
    </div>
  );
}
