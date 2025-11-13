import React from "react";

export const MockAdminDashboard = () => (
  <div className="flex gap-4 h-full">
    <div className="w-1/4 rounded-lg bg-white dark:bg-gray-800 p-3 space-y-2">
      <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
      <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700"></div>
      <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
    </div>
    <div className="w-3/4 space-y-4">
      <div className="h-24 w-full rounded-lg bg-white dark:bg-gray-800 p-3">
        <div className="h-6 w-1/3 rounded bg-gray-200 dark:bg-gray-700 mb-2"></div>
        <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="h-32 rounded-lg bg-white dark:bg-gray-800"></div>
        <div className="h-32 rounded-lg bg-white dark:bg-gray-800"></div>
      </div>
    </div>
  </div>
);

export const MockStorefront = () => (
  <div className="space-y-4">
    <div className="h-48 w-full rounded-lg bg-white dark:bg-gray-800 p-4 flex items-end">
      <div className="space-y-2">
        <div className="h-6 w-1/2 rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-4 w-1/4 rounded bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-4">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="h-40 rounded-lg bg-white dark:bg-gray-800 p-2 space-y-2"
        >
          <div className="h-20 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700"></div>
        </div>
      ))}
    </div>
  </div>
);

export const MockAnalytics = () => (
  <div className="space-y-4">
    <div className="grid grid-cols-3 gap-4">
      <div className="h-24 rounded-lg bg-white dark:bg-gray-800 p-3">
        <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700 mb-2"></div>
        <div className="h-6 w-1/3 rounded bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <div className="h-24 rounded-lg bg-white dark:bg-gray-800 p-3">
        <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700 mb-2"></div>
        <div className="h-6 w-1/3 rounded bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <div className="h-24 rounded-lg bg-white dark:bg-gray-800 p-3">
        <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700 mb-2"></div>
        <div className="h-6 w-1/3 rounded bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </div>
    <div className="h-64 w-full rounded-lg bg-white dark:bg-gray-800 p-4 flex items-end gap-2">
      <div className="w-1/6 h-1/3 rounded-t-sm bg-indigo-300 dark:bg-indigo-700"></div>
      <div className="w-1/6 h-1/2 rounded-t-sm bg-indigo-300 dark:bg-indigo-700"></div>
      <div className="w-1/6 h-3/4 rounded-t-sm bg-indigo-300 dark:bg-indigo-700"></div>
      <div className="w-1/6 h-1/4 rounded-t-sm bg-indigo-300 dark:bg-indigo-700"></div>
      <div className="w-1/6 h-2/3 rounded-t-sm bg-indigo-300 dark:bg-indigo-700"></div>
      <div className="w-1/6 h-1/2 rounded-t-sm bg-indigo-300 dark:bg-indigo-700"></div>
    </div>
  </div>
);

export const CheckIcon = () => (
  <svg
    className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
