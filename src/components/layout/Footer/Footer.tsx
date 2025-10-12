import React from 'react';
import ContactInfo from './ContactInfo';
import SupportLinks from './SupportLinks';
import InfoLinks from './InfoLinks';
import AppDownload from './AppDownload';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-neutral-400/25">
      <div className="container mx-auto px-4 py-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <ContactInfo />
          
          <SupportLinks />
          
          <InfoLinks />
          
          <AppDownload />
        </div>
      </div>
    </footer>
  );
};

export default Footer;