import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';

const Header = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <div className="h-[calc(2.5rem+5rem)]" /> {/* Banner height (2.5rem) + Navbar height (5rem) */}
    </>
  );
};

export default Header; 