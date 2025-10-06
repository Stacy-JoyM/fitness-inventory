
// src/components/DashboardCard.js
import React from "react";

function Analyticscard({ title, text, buttonText, onClick }) {
  return (
    <div className="mb-3 shadow-sm bg-white rounded-lg border border-gray-200">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-1">{text}</p>
        {buttonText && (
          <button
            className="mt-3 inline-flex items-center gap-2 px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={onClick}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default Analyticscard;
