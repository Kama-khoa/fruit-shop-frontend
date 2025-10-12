import React from 'react';

export const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const EyeOffIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <line x1="2" x2="22" y1="2" y2="22" />
  </svg>
);

// Icon trái tim cho danh sách yêu thích
export const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

// Icon giỏ hàng
export const ShoppingCartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.16" />
  </svg>
);

// Icon ngôi sao để đánh giá
export const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export const PaymentIcon = () => (
  <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="0.200195" width="56" height="56" fill="white"/>
    <path d="M11.375 42.9302H4.25" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.75 42.9302H4.25" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30.875 21.9302H51.625" fill="#701A75"/>
    <path d="M32.375 28.0502H50.125V42.5502H32.375V28.0502Z" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.55 2.15015H39.8V40.4001H11.55V2.15015Z" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.96875 31.9001H19.0312" fill="#FACC15"/>
    <path d="M7 35.9302H15.75" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.375 12.4702H32.125" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.375 20.8702H32.125" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PromotionIcon = () => (
  <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.200195" width="56" height="56" fill="black"/>
      <rect x="0.5" y="3.64014" width="56" height="50" fill="#701A75"/>
      <path d="M41.4775 0.901367L42.5225 4.90137" stroke="#030712" strokeWidth="0.571429" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.0771 7.91162L50.1486 38.983" fill="#FACC15"/>
      <path d="M43.1357 0.901367L44.1807 4.90137" stroke="#030712" strokeWidth="0.571429" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27.4775 26.8701H41.4775" fill="#030712"/>
      <path d="M33 30.9802V34.4202" fill="#030712"/>
      <path d="M31.5928 20.0002L33.007 22.143" fill="#030712"/>
  </svg>
);

export const QualityIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.525 13.333H34.475" fill="#FACC15"/>
      <path d="M1.7 2.15015H25.325V54.1501H1.7V2.15015Z" fill="#701A75"/>
      <path d="M14.875 10.9001V51.5501" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.225 27.8701H12.1" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.875 27.8701H18.75" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.225 16.8501H12.1" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.875 16.8501H18.75" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M40.6 28.0502H35.6" fill="#701A75"/>
      <path d="M2.175 30.4802H41.925V54.1501H2.175V30.4802Z" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29.575 31.5502V35.9502" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.375 45.3701H29.575" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.85 38.7202H22.05" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.875 49.0502H9.45001" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M36.575 8.4502H38.925" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M34.3 15.4502H36.65" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const DeliveryIcon = () => (
  <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.200195" width="56" height="56" fill="black"/>
      <rect x="0.5" y="0.200195" width="56" height="56" fill="white"/>
      <path d="M6.96875 23.3201H34.3438" fill="#701A75"/>
      <path d="M38.3 30.6802H52.55" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.65 45.7202H13.8" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M41.45 45.7202H44.6" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.225 43.9702H8.375" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.6 39.9502H5.75" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28.3188 2.15015H51.6188" fill="#FACC15"/>
      <path d="M35.675 9.15015H42.55" stroke="#030712" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);