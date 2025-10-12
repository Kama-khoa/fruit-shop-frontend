import React from 'react';
import PromoBar from './PromoBar';
import TopBar from './TopBar';
import NavBar from './NavBar';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white rounded-[20px] shadow-[0px_4px_4px_0px_rgba(170,170,170,0.25)] relative">
      <PromoBar />
      
      <TopBar />
      
      <NavBar />
    </header>
  );
};

export default Header;