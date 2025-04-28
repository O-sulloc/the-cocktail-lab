import React from 'react';

const Banner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#0f3923]">
      <div className="w-full h-10 py-2.5 px-4">
        <div className="max-w-7xl mx-auto">
          <a href="tel:+442079981600" className="block hover:underline">
            <p className="text-white text-center text-sm sm:text-base font-medium">
              <span className="font-bold">📞 Click To Enquire &nbsp; +44 2079 981600</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner; 