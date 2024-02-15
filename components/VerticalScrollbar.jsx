import React from "react";

const VerticalScrollbar = () => {
  return (
    <div className="overflow-x-auto px-12 py-8">
      <div className="flex justify-center items-center bg-main-bg drop-shadow-xl rounded-full w-32 h-32 relative">
        <img src="/city-icons/agra.png" alt="agra" className="w-[60%]" />
        <style jsx>{`
          div::before {
            content: "";
            position: absolute;
            top: -2px; // Offset from the top edge of the div
            left: -4px;
            right: 0;
            bottom: 0;
            opacity: 50%;
            border-radius: inherit; // To match the div's border-radius
            box-shadow: 0 -4px 6px rgba(255, 255, 255, 225),
              0 4px 8px rgba(0, 0, 0, 0.1);
            z-index: -1; // Place the shadow below the content
          }
        `}</style>
      </div>
    </div>
  );
};

export default VerticalScrollbar;
