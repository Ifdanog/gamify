import React from "react";

const BottomNavItem = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center text-sm cursor-pointer hover:text-yellow-400">
      <div className="text-2xl">{icon}</div>
      <span>{label}</span>
    </div>
  );
};

export default BottomNavItem;
