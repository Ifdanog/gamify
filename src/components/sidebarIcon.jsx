import React from "react";

const SidebarIcon = ({ icon }) => {
  return (
    <div className="text-2xl my-4 cursor-pointer hover:text-yellow-400">
      {icon}
    </div>
  );
};

export default SidebarIcon;
