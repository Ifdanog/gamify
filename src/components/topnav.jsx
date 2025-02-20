import React from "react";
import Button from "./button";

const TopNav = ({ darkMode, setDarkMode }) => {
  return (
    <div className="dark:bg-gray-800 bg-white dark:text-white text-black p-4 border-b-gray-100 border-b-2 ">
      <div className="w-full max-w-[1160px] mx-auto transform 2xl:-translate-x-32">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Gamify</h1>
          <div className="flex items-center">
            <Button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
