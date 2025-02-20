import React from "react";
import SidebarIcon from "./sidebarIcon";
const Sidebar = () => {
  return (
    <div className="w-16 dark:bg-gray-800 bg-gray-200 dark:text-white flex flex-col items-center py-4">
      <SidebarIcon icon="🏠" />
      <SidebarIcon icon="📺" />
      <SidebarIcon icon="🎮" />
    </div>
  );
};

export default Sidebar;
