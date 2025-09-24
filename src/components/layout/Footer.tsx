import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const footerLinks = {
    plantea: [
      'About Plantea',
      'Copyright',
      'Blog and Articles',
      'Partner Program',
      'Careers at Plantea',
      'Partner Stores',
      'Community Service Program',
      'Help',
      'Customer Services'
    ],
    seller: [
      'Become a Seller',
      'Seller Education',
      'Apply for Verified Store'
    ],
    user: [
      'Top Up Plantcoin',
      'Plantea COD',
      'Terms and Conditions',
      'User Guide',
      'Affiliate Program'
    ],
    socialMedia: [
      'Instagram',
      'Twitter',
      'Facebook',
      'Youtube'
    ]
  };

  return (
    <footer className="bg-stone-50 rounded-tl-3xl rounded-tr-3xl shadow-[0px_-6px_4px_0px_rgba(233,233,233,0.25)]">
      <div className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute right-0 top-0">
          <div className="relative">
            <div className="w-96 h-96 bg-green-400 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-green-700 text-4xl font-normal font-['Dharrochy'] transform rotate-[53deg] mb-4">
                  9.9 Off-sale!
                </div>
                <div className="text-green-400 text-5xl font-normal font-['Dharrochy'] transform rotate-[27deg]">
                  Plantea
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {/* Plantea Section */}
            <div>
              <h3 className="text-black text-2xl font-normal font-['Abril_Fatface'] mb-6">
                Plantea
              </h3>
              <ul className="space-y-4">
                {footerLinks.plantea.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href="#" 
                      className="text-black text-base font-normal font-['Sequel_Sans'] hover:text-green-600 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Seller Section */}
            <div>
              <h3 className="text-black text-2xl font-normal font-['Abril_Fatface'] mb-6">
                Seller
              </h3>
              <ul className="space-y-4">
                {footerLinks.seller.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href="#" 
                      className="text-black text-base font-normal font-['Sequel_Sans'] hover:text-green-600 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* User subsection */}
              <h3 className="text-black text-2xl font-normal font-['Abril_Fatface'] mt-12 mb-6">
                User
              </h3>
              <ul className="space-y-4">
                {footerLinks.user.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href="#" 
                      className="text-black text-base font-normal font-['Sequel_Sans'] hover:text-green-600 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="text-black text-2xl font-normal font-['Abril_Fatface'] mb-6">
                Follow Us
              </h3>
              <ul className="space-y-4">
                {footerLinks.socialMedia.map((platform, index) => (
                  <li key={index}>
                    <Link 
                      href="#" 
                      className="text-black text-base font-normal font-['Sequel_Sans'] hover:text-green-600 transition-colors"
                    >
                      {platform}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empty column for spacing */}
            <div className="hidden md:block"></div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              &copy; 2025 Plantea. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;