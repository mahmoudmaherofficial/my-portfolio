import type React from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="text-white px-6 py-3 bg-gradient-to-r from-indigo-600 to-teal-500 rounded-md font-semibold text-lg transition-all duration-300 bg-[length:200%_100%] bg-left hover:bg-right">
      {children}
    </button>
  );
};

export default Button;
