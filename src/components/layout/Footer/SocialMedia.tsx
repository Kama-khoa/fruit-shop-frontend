import React from 'react';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const socialLinks = [
  { 
    name: 'Facebook', 
    icon: Facebook, 
    href: 'https://facebook.com/fruityfruit',
    color: 'text-blue-600'
  },
  { 
    name: 'Instagram', 
    icon: Instagram, 
    href: 'https://instagram.com/fruityfruit',
    color: 'text-pink-600'
  },
  { 
    name: 'Youtube', 
    icon: Youtube, 
    href: 'https://youtube.com/@fruityfruit',
    color: 'text-red-600'
  },
  { 
    name: 'Twitter', 
    icon: Twitter, 
    href: 'https://twitter.com/fruityfruit',
    color: 'text-sky-600'
  },
];

const SocialMedia: React.FC = () => {
  return (
    <div className="flex items-center justify-center lg:justify-start gap-3">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a 
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-white shadow-sm hover:shadow-md transition-all duration-300"
            aria-label={`Follow us on ${social.name}`}
          >
            <Icon className={`w-5 h-5 ${social.color} transition-transform duration-300 group-hover:scale-110`} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
