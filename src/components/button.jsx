// components/ui/button.js
import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        "px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white transition duration-300"
      }
    >
      {children}
    </button>
  );
};

export default Button;
