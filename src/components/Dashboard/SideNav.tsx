import React from 'react';

const SideNav = () => {
  return (
    <div className="bg-sky-900 sm:h-screen hidden sm:block w-60">
      <div className="logo-header h-16 w-full flex justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-gray-100 mr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
            />
          </svg>

          <h1 className="font-bold text-gray-100 text-md">useAnalytics</h1>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
