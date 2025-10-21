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
  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12.8261 0C12.0634 0 11.3338 0.165001 10.6371 0.495001C9.94042 0.825 9.35742 1.26867 8.88809 1.826C8.43342 1.23933 7.86142 0.788333 7.17209 0.473C6.48276 0.157667 5.74209 0 4.95009 0C4.05542 0 3.21942 0.219999 2.44209 0.66C1.69409 1.08533 1.10009 1.66467 0.660092 2.398C0.220092 3.13133 9.15527e-05 3.92333 9.15527e-05 4.774C9.15527e-05 6.37267 0.432758 7.94933 1.29809 9.504C1.98742 10.7507 2.94809 11.9607 4.18009 13.134C5.06009 13.9847 6.04276 14.7693 7.12809 15.488C7.80276 15.9573 8.30142 16.2653 8.62409 16.412C8.68276 16.4707 8.77076 16.5 8.88809 16.5C9.00542 16.5 9.13009 16.4707 9.26209 16.412C9.61409 16.236 10.1128 15.928 10.7581 15.488C11.8288 14.7693 12.8114 13.9847 13.7061 13.134C14.9234 11.9607 15.8768 10.7507 16.5661 9.504C17.4314 7.94933 17.8641 6.37267 17.8641 4.774C17.8641 3.92333 17.6368 3.13133 17.1821 2.398C16.7274 1.66467 16.1114 1.08167 15.3341 0.649C14.5568 0.216333 13.7208 0 12.8261 0ZM8.88809 15.026C7.94942 14.454 7.08409 13.8453 6.29209 13.2C4.89876 12.0707 3.79876 10.9047 2.99209 9.702C1.90676 8.10333 1.36409 6.49 1.36409 4.862C1.36409 4.23133 1.52909 3.64833 1.85909 3.113C2.18909 2.57767 2.62909 2.15233 3.17909 1.837C3.72909 1.52167 4.31943 1.364 4.95009 1.364C5.68342 1.364 6.34709 1.55467 6.94109 1.936C7.53509 2.31733 7.97143 2.83067 8.25009 3.476C8.30876 3.62267 8.42243 3.72533 8.59109 3.784C8.75976 3.84267 8.93576 3.84267 9.11909 3.784C9.30242 3.72533 9.43809 3.62267 9.52609 3.476C9.80476 2.83067 10.2448 2.31733 10.8461 1.936C11.4474 1.55467 12.1074 1.364 12.8261 1.364C13.4861 1.364 14.0911 1.52167 14.6411 1.837C15.1911 2.15233 15.6238 2.57767 15.9391 3.113C16.2544 3.64833 16.4121 4.23133 16.4121 4.862C16.4121 6.46067 15.8694 8.05933 14.7841 9.658C13.9628 10.8607 12.8628 12.034 11.4841 13.178C10.6628 13.8527 9.79743 14.4687 8.88809 15.026Z" fill="#030712"/>
  </svg>
);

// Icon giỏ hàng
export const ShoppingCartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M16.94 0.5H0.7C0.5 0.526667 0.333333 0.62 0.2 0.780001C0.0666667 0.940001 0 1.12 0 1.32C0 1.52 0.0666667 1.70333 0.2 1.87C0.333333 2.03667 0.5 2.13333 0.7 2.16H3.92L3.34 9.54V9.68C3.34 10.1333 3.50333 10.5233 3.83 10.85C4.15667 11.1767 4.54667 11.34 5 11.34H15.22C15.62 11.34 15.97 11.2167 16.27 10.97C16.57 10.7233 16.76 10.42 16.84 10.06L18.56 2.54C18.5867 2.38 18.6 2.25333 18.6 2.16C18.6 1.69333 18.44 1.3 18.12 0.98C17.8 0.660001 17.4067 0.5 16.94 0.5ZM15.22 9.66H5L5.58 2.16H16.94L15.22 9.66ZM6.54 15.5C7.00667 15.5 7.40333 15.3367 7.73 15.01C8.05667 14.6833 8.22 14.2867 8.22 13.82C8.22 13.3533 8.05667 12.96 7.73 12.64C7.40333 12.32 7.00667 12.16 6.54 12.16C6.08667 12.16 5.69667 12.32 5.37 12.64C5.04333 12.96 4.88 13.3533 4.88 13.82C4.88 14.2867 5.04333 14.6833 5.37 15.01C5.69667 15.3367 6.08667 15.5 6.54 15.5ZM14.04 15.5C14.5067 15.5 14.9033 15.3367 15.23 15.01C15.5567 14.6833 15.72 14.2867 15.72 13.82C15.72 13.3533 15.5567 12.96 15.23 12.64C14.9033 12.32 14.5067 12.16 14.04 12.16C13.5867 12.16 13.1967 12.32 12.87 12.64C12.5433 12.96 12.38 13.3533 12.38 13.82C12.38 14.2867 12.5433 14.6833 12.87 15.01C13.1967 15.3367 13.5867 15.5 14.04 15.5Z" fill="white"/>
  </svg>
);

export const StarOffIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.7921 1.17504C6.73343 1.0577 6.6491 0.964205 6.5391 0.894538C6.4291 0.824871 6.3081 0.790038 6.1761 0.790038C6.0441 0.790038 5.92126 0.824871 5.8076 0.894538C5.69393 0.964205 5.60776 1.0577 5.5491 1.17504L4.1741 4.02404L1.0831 4.47504C0.958429 4.4897 0.844763 4.5392 0.742096 4.62354C0.639429 4.70787 0.569763 4.81237 0.533096 4.93704C0.496429 5.0617 0.492763 5.1882 0.522096 5.31654C0.551429 5.44487 0.613763 5.55304 0.709096 5.64104L2.9421 7.86304L2.4141 10.987C2.3921 11.119 2.40676 11.2437 2.4581 11.361C2.50943 11.4784 2.58643 11.5774 2.6891 11.658C2.79176 11.7387 2.9091 11.7827 3.0411 11.79C3.1731 11.7974 3.29776 11.7717 3.4151 11.713L6.1761 10.239L8.9371 11.713C9.05443 11.7717 9.17726 11.7974 9.3056 11.79C9.43393 11.7827 9.5531 11.7405 9.6631 11.6635C9.7731 11.5865 9.85193 11.4875 9.8996 11.3665C9.94726 11.2455 9.9601 11.119 9.9381 10.987L9.3991 7.86304L11.6431 5.64104C11.7384 5.55304 11.8008 5.44487 11.8301 5.31654C11.8594 5.1882 11.8521 5.0617 11.8081 4.93704C11.7641 4.81237 11.6944 4.70787 11.5991 4.62354C11.5038 4.5392 11.3901 4.4897 11.2581 4.47504L8.1781 4.02404L6.7921 1.17504Z" fill="#D1D5DB"/>
  </svg>
);

export const StarOnIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.41708 1.17504C6.35842 1.0577 6.27408 0.964205 6.16408 0.894538C6.05408 0.824871 5.93308 0.790038 5.80108 0.790038C5.66908 0.790038 5.54625 0.824871 5.43258 0.894538C5.31892 0.964205 5.23275 1.0577 5.17408 1.17504L3.79908 4.02404L0.708085 4.47504C0.583418 4.4897 0.469751 4.5392 0.367085 4.62354C0.264418 4.70787 0.194751 4.81237 0.158085 4.93704C0.121418 5.0617 0.117751 5.1882 0.147085 5.31654C0.176418 5.44487 0.238751 5.55304 0.334085 5.64104L2.56708 7.86304L2.03908 10.987C2.01708 11.119 2.03175 11.2437 2.08308 11.361C2.13442 11.4784 2.21142 11.5774 2.31408 11.658C2.41675 11.7387 2.53408 11.7827 2.66608 11.79C2.79808 11.7974 2.92275 11.7717 3.04008 11.713L5.80108 10.239L8.56208 11.713C8.67942 11.7717 8.80225 11.7974 8.93058 11.79C9.05892 11.7827 9.17808 11.7405 9.28808 11.6635C9.39808 11.5865 9.47692 11.4875 9.52458 11.3665C9.57225 11.2455 9.58508 11.119 9.56308 10.987L9.02409 7.86304L11.2681 5.64104C11.3634 5.55304 11.4258 5.44487 11.4551 5.31654C11.4844 5.1882 11.4771 5.0617 11.4331 4.93704C11.3891 4.81237 11.3194 4.70787 11.2241 4.62354C11.1288 4.5392 11.0151 4.4897 10.8831 4.47504L7.80308 4.02404L6.41708 1.17504Z" fill="#FACC15"/>
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

export const PlusIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8H12" stroke="#4C9F91" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 12V4" stroke="#4C9F91" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export const MinusIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.85193 9H13.1482" stroke="#0D0C0D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export const PlusIconWhite = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8H12" stroke="#ffffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 12V4" stroke="#ffffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export const TrashIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.2257 4.83835C12.9235 4.61021 10.6074 4.49268 8.29829 4.49268C6.9294 4.49268 5.56051 4.56181 4.19162 4.70008L2.78125 4.83835" stroke="#0D0C0D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.58594 4.13976L6.73804 3.23408C6.84865 2.57729 6.93162 2.08643 8.10001 2.08643H9.91137C11.0798 2.08643 11.1696 2.60494 11.2733 3.24099L11.4254 4.13976" stroke="#0D0C0D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.745 7.02246L13.2957 13.9844C13.2196 15.0699 13.1574 15.9133 11.2285 15.9133H6.78998C4.86109 15.9133 4.79887 15.0699 4.72282 13.9844L4.27344 7.02246" stroke="#0D0C0D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.84375 12.1113H10.146" stroke="#0D0C0D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.27344 9.3457H10.7302" stroke="#0D0C0D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export const TruckIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.625 10.3125H21.25V5C21.25 4.60478 21.092 4.22597 20.8107 3.94467C20.5294 3.66337 20.1506 3.5 19.75 3.5H5C4.60478 3.5 4.22597 3.66337 3.94467 3.94467C3.66337 4.22597 3.5 4.60478 3.5 5V21.25C3.5 21.6452 3.66337 22.024 3.94467 22.3053C4.22597 22.5866 4.60478 22.75 5 22.75H7.1875" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.3125 26.25C12.1528 26.25 13.6562 24.7466 13.6562 22.9062C13.6562 21.0659 12.1528 19.5625 10.3125 19.5625C8.47217 19.5625 6.96875 21.0659 6.96875 22.9062C6.96875 24.7466 8.47217 26.25 10.3125 26.25Z" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22.9062 26.25C24.7466 26.25 26.25 24.7466 26.25 22.9062C26.25 21.0659 24.7466 19.5625 22.9062 19.5625C21.0659 19.5625 19.5625 21.0659 19.5625 22.9062C19.5625 24.7466 21.0659 26.25 22.9062 26.25Z" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.6562 22.9062H19.5625" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.25 10.3125H10.3125" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.25 10.3125L26.25 16.25H21.25V10.3125Z" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const MapPinIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.1461 7.17832C15.3586 3.71332 12.3361 2.15332 9.6811 2.15332C9.6811 2.15332 9.6811 2.15332 9.6736 2.15332C7.0261 2.15332 3.9961 3.70582 3.2086 7.17082C2.3311 11.0408 4.7011 14.3183 6.8461 16.3808C7.6411 17.1458 8.6611 17.5283 9.6811 17.5283C10.7011 17.5283 11.7211 17.1458 12.5086 16.3808C14.6536 14.3183 17.0236 11.0483 16.1461 7.17832ZM9.6811 10.9358C8.3761 10.9358 7.3186 9.87832 7.3186 8.57332C7.3186 7.26832 8.3761 6.21082 9.6811 6.21082C10.9861 6.21082 12.0436 7.26832 12.0436 8.57332C12.0436 9.87832 10.9861 10.9358 9.6811 10.9358Z" fill="#66BF84"/>
  </svg>
);

export const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 2.34082V4.59082" stroke="#0D0C0D" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 2.34082V4.59082" stroke="#0D0C0D" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.625 7.6582H15.375" stroke="#0D0C0D" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.75 7.21582V13.5908C15.75 15.8408 14.625 17.3408 12 17.3408H6C3.375 17.3408 2.25 15.8408 2.25 13.5908V7.21582C2.25 4.96582 3.375 3.46582 6 3.46582H12C14.625 3.46582 15.75 4.96582 15.75 7.21582Z" stroke="#0D0C0D" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.771 11.1162H11.7778" stroke="#0D0C0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.771 13.3662H11.7778" stroke="#0D0C0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.99661 11.1162H9.00335" stroke="#0D0C0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.99661 13.3662H9.00335" stroke="#0D0C0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.22073 11.1162H6.22747" stroke="#0D0C0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.22073 13.3662H6.22747" stroke="#0D0C0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.994347 10.8609C0.816836 10.6834 0.800699 10.4056 0.945935 10.2098L0.994347 10.1538L5.30723 5.84066L0.994347 1.52754C0.816836 1.35003 0.800699 1.07226 0.945935 0.876516L0.994347 0.820437C1.17186 0.642926 1.44963 0.626789 1.64537 0.772025L1.70145 0.820437L6.36812 5.4871C6.54563 5.66462 6.56177 5.94239 6.41653 6.13813L6.36812 6.19421L1.70145 10.8609C1.50619 11.0561 1.18961 11.0561 0.994347 10.8609Z" fill="#66BF84"/>
  </svg>
);

export const CheckoutIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 8.50488H22" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 16.5049H8" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.5 16.5049H14.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.44 3.50488H17.55C21.11 3.50488 22 4.38488 22 7.89488V16.1049C22 19.6149 21.11 20.4949 17.56 20.4949H6.44C2.89 20.5049 2 19.6249 2 16.1149V7.89488C2 4.38488 2.89 3.50488 6.44 3.50488Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export const PencilIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.0833 1.83337H8.24992C3.66659 1.83337 1.83325 3.66671 1.83325 8.25004V13.75C1.83325 18.3334 3.66659 20.1667 8.24992 20.1667H13.7499C18.3333 20.1667 20.1666 18.3334 20.1666 13.75V11.9167" stroke="#4C9F91" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.7032 2.76832L7.47989 9.99165C7.20489 10.2667 6.92989 10.8075 6.87489 11.2017L6.48072 13.9608C6.33406 14.96 7.03989 15.6567 8.03906 15.5192L10.7982 15.125C11.1832 15.07 11.7241 14.795 12.0082 14.52L19.2316 7.29665C20.4782 6.04999 21.0649 4.60165 19.2316 2.76832C17.3982 0.934987 15.9499 1.52165 14.7032 2.76832Z" stroke="#4C9F91" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.6675 3.8042C14.2816 5.99503 15.9958 7.7092 18.1958 8.33253L13.6675 3.8042Z" fill="#4C9F91"/>
    <path d="M13.6675 3.8042C14.2816 5.99503 15.9958 7.7092 18.1958 8.33253" stroke="#4C9F91" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.00098 1L15 14.9991" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M0.999964 14.9991L14.999 1" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export const HomeIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5 17.0625H1.5C1.1925 17.0625 0.9375 16.8075 0.9375 16.5C0.9375 16.1925 1.1925 15.9375 1.5 15.9375H16.5C16.8075 15.9375 17.0625 16.1925 17.0625 16.5C17.0625 16.8075 16.8075 17.0625 16.5 17.0625Z" fill="#53A653"/>
    <path d="M2.77515 16.5H1.65015L1.68765 7.47753C1.68765 6.84003 1.98015 6.24755 2.48265 5.85755L7.73265 1.77004C8.47515 1.19254 9.51765 1.19254 10.2677 1.77004L15.5177 5.85004C16.0127 6.24004 16.3126 6.84753 16.3126 7.47753V16.5H15.1876V7.48504C15.1876 7.20004 15.0526 6.92254 14.8276 6.74254L9.57765 2.66254C9.24015 2.40004 8.76765 2.40004 8.42265 2.66254L3.17265 6.75005C2.94765 6.92255 2.81265 7.20004 2.81265 7.48504L2.77515 16.5Z" fill="#53A653"/>
    <path d="M12.75 17.0625H5.25C4.9425 17.0625 4.6875 16.8075 4.6875 16.5V9.375C4.6875 8.445 5.445 7.6875 6.375 7.6875H11.625C12.555 7.6875 13.3125 8.445 13.3125 9.375V16.5C13.3125 16.8075 13.0575 17.0625 12.75 17.0625ZM5.8125 15.9375H12.1875V9.375C12.1875 9.0675 11.9325 8.8125 11.625 8.8125H6.375C6.0675 8.8125 5.8125 9.0675 5.8125 9.375V15.9375Z" fill="#53A653"/>
    <path d="M7.5 13.875C7.1925 13.875 6.9375 13.62 6.9375 13.3125V12.1875C6.9375 11.88 7.1925 11.625 7.5 11.625C7.8075 11.625 8.0625 11.88 8.0625 12.1875V13.3125C8.0625 13.62 7.8075 13.875 7.5 13.875Z" fill="#53A653"/>
    <path d="M10.125 6.1875H7.875C7.5675 6.1875 7.3125 5.9325 7.3125 5.625C7.3125 5.3175 7.5675 5.0625 7.875 5.0625H10.125C10.4325 5.0625 10.6875 5.3175 10.6875 5.625C10.6875 5.9325 10.4325 6.1875 10.125 6.1875Z" fill="#53A653"/>
  </svg>
);

export const OfficeIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5 17.0625H1.5C1.1925 17.0625 0.9375 16.8075 0.9375 16.5C0.9375 16.1925 1.1925 15.9375 1.5 15.9375H16.5C16.8075 15.9375 17.0625 16.1925 17.0625 16.5C17.0625 16.8075 16.8075 17.0625 16.5 17.0625Z" fill="#53A653"/>
    <path d="M2.77515 16.5H1.65015L1.68765 7.47753C1.68765 6.84003 1.98015 6.24755 2.48265 5.85755L7.73265 1.77004C8.47515 1.19254 9.51765 1.19254 10.2677 1.77004L15.5177 5.85004C16.0127 6.24004 16.3126 6.84753 16.3126 7.47753V16.5H15.1876V7.48504C15.1876 7.20004 15.0526 6.92254 14.8276 6.74254L9.57765 2.66254C9.24015 2.40004 8.76765 2.40004 8.42265 2.66254L3.17265 6.75005C2.94765 6.92255 2.81265 7.20004 2.81265 7.48504L2.77515 16.5Z" fill="#53A653"/>
    <path d="M12.75 17.0625H5.25C4.9425 17.0625 4.6875 16.8075 4.6875 16.5V9.375C4.6875 8.445 5.445 7.6875 6.375 7.6875H11.625C12.555 7.6875 13.3125 8.445 13.3125 9.375V16.5C13.3125 16.8075 13.0575 17.0625 12.75 17.0625ZM5.8125 15.9375H12.1875V9.375C12.1875 9.0675 11.9325 8.8125 11.625 8.8125H6.375C6.0675 8.8125 5.8125 9.0675 5.8125 9.375V15.9375Z" fill="#53A653"/>
    <path d="M7.5 13.875C7.1925 13.875 6.9375 13.62 6.9375 13.3125V12.1875C6.9375 11.88 7.1925 11.625 7.5 11.625C7.8075 11.625 8.0625 11.88 8.0625 12.1875V13.3125C8.0625 13.62 7.8075 13.875 7.5 13.875Z" fill="#53A653"/>
    <path d="M10.125 6.1875H7.875C7.5675 6.1875 7.3125 5.9325 7.3125 5.625C7.3125 5.3175 7.5675 5.0625 7.875 5.0625H10.125C10.4325 5.0625 10.6875 5.3175 10.6875 5.625C10.6875 5.9325 10.4325 6.1875 10.125 6.1875Z" fill="#53A653"/>
  </svg>
);

export const BuildingIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 17.5V5H2.5V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5 17.5V2.5H7.5V17.5H17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.625 14.375H14.375" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.625 11.25H14.375" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.625 8.125H14.375" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const ChevronLeftIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const ChevronDownIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const TrashIconRed = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);