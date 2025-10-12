import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Radius } from 'lucide-react';

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
    <div className="flex gap-2 justify-center lg:justify-start">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ borderRadius: 8 }}
            className="w-9 h-9 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors group"
            aria-label={social.name}
          >
            <Icon className={`w-5 h-5 ${social.color} group-hover:scale-110 transition-transform`} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;