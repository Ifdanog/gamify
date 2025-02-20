import React from "react";
import BottomNavItem from "./bottomnavItem";
const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white flex justify-around py-2 shadow-inner">
      <BottomNavItem icon="🏠" label="Home" />
      <BottomNavItem icon="💬" label="Chat" />
    </div>
  );
};

export default BottomNav;
