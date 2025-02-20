import React from "react";
import ChatBox from "./chatbox";

const RightSidebar = () => {
  return (
    <div className="w-80 dark:bg-gray-800 bg-gray-200 dark:text-white p-4">
      <ChatBox />
    </div>
  );
};

export default RightSidebar;
