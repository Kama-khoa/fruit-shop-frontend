import React from 'react';
import PromoBar from './PromoBar';
import TopBar from './TopBar';
import NavBar from './NavBar';

const Header: React.FC = () => {
  return (
    <header className="w-full relative bg-white rounded-[20px] shadow-[0px_4px_4px_0px_rgba(170,170,170,0.25)]">
        {/* <PromoBar /> */}
      <div className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md rounded-[20px]">
        <TopBar />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;