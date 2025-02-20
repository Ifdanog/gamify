import React from "react";

const Card = ({ children }) => {
  return (
    <div className="pb-2 dark:bg-gray-800 bg-gray-200 dark:text-white text-black rounded-lg">
      {children}
    </div>
  );
};

export default Card;
