import React from "react";

const MockBrowser = ({ children }) => (
  <div className="w-full h-full rounded-lg shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col">
    <div className="flex items-center p-3 h-10 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <div className="flex-grow p-4 md:p-6 overflow-y-auto bg-gray-50 dark:bg-gray-900">
      {children}
    </div>
  </div>
);

export default MockBrowser;