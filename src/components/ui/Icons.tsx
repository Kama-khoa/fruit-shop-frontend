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
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g mask="url(#mask0_60_2777)">
    <path d="M16.625 42.525L11.375 45.85L16.8 54.25L22.05 50.925L16.625 42.525Z" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.75 50.925L7 54.25L12.425 45.85L7.175 42.525L1.75 50.925Z" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M50.3996 39.375C46.7246 46.9 33.4246 47.775 33.4246 47.775C33.4246 47.775 28.1746 37.625 32.7246 30.625C37.9746 22.4 54.7746 21.525 54.7746 21.525C54.7746 21.525 54.0746 32.025 50.3996 39.375Z" fill="#634C9F"/>
    <path d="M47.6 27.65C47.6 27.65 32.55 43.575 32.375 53.025" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M44.7998 1.75H11.5498V41.65H44.7998V1.75Z" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.4246 50.3999C17.6746 50.3999 21.8746 46.1999 21.8746 40.95C21.8746 35.7 17.6746 31.5 12.4246 31.5C7.17461 31.5 2.97461 35.7 2.97461 40.95C2.97461 46.1999 7.17461 50.3999 12.4246 50.3999Z" fill="#FFB909"/>
    <path d="M12.425 46.375C15.4 46.375 17.85 43.925 17.85 40.95C17.85 37.975 15.4 35.525 12.425 35.525C9.45 35.525 7 37.975 7 40.95C7 43.925 9.45 46.375 12.425 46.375Z" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.375 12.075H38.15" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.375 20.475H38.15" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </svg>
);

export const PromotionIcon = () => (
  <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_60_2793)">
    <g mask="url(#mask0_60_2793)">
    <path d="M56.5 29.9818L47.8455 36.2182L51.1545 46.2727L40.4636 46.1454L37.1545 56.2L28.5 49.9636L19.8455 56.2L16.5364 46.1454L5.84545 46.2727L9.15455 36.2182L0.5 29.9818L9.15455 23.8727L5.84545 13.8182H16.5364L19.8455 3.76363L28.5 9.87272L37.1545 3.63635L40.4636 13.6909H51.1545L47.8455 23.7454L56.5 29.9818Z" fill="#634C9F"/>
    <path d="M43.136 18.1455C46.6996 15.9818 50.0087 13.1818 52.2996 9.87274C53.4451 8.2182 54.4633 6.30911 54.2087 4.40002C53.9542 2.6182 52.6814 1.09093 50.8996 0.836381C50.0087 0.581835 49.1178 0.709108 48.3542 0.963654C47.5905 1.09093 46.8269 1.34547 46.3178 1.72729C44.7905 2.74547 44.1542 4.78184 43.6451 6.56365C42.7542 9.87274 41.9905 12.9273 41.4814 16.2364" stroke="#1D1D1B" strokeWidth="0.5714" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M38.9366 45.2546L25.0638 44.4909L19.082 32.4L35.6275 7.70911L55.482 20.5637L38.9366 45.2546Z" fill="#FFB709"/>
    <path d="M43.1367 18.1455C46.7004 15.9818 50.0094 13.1818 52.3004 9.87274C53.4458 8.2182 54.464 6.30911 54.2094 4.40002C53.9549 2.6182 52.6822 1.09093 50.9004 0.836381C50.0094 0.581835 49.1185 0.709108 48.3549 0.963654C47.5913 1.09093 46.8276 1.34547 46.3185 1.72729C44.7913 2.74547 44.1549 4.78184 43.6458 6.56365C43.3913 7.20002 43.264 7.70911 43.1367 8.47274" stroke="#1D1D1B" strokeWidth="0.5714" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M43.0087 26.6727L27.4814 29.0909L28.3724 30.1091L43.8996 27.6909L43.0087 26.6727Z" fill="#1D1D1B"/>
    <path d="M38.0453 31C37.7907 30.8727 37.6635 30.8727 37.5362 30.8727C37.0271 30.7455 36.518 30.7455 36.0089 30.8727C35.4998 31.1273 34.8635 31.3818 34.3544 31.7636C33.8453 32.2727 33.4635 32.7818 33.2089 33.2909C32.9544 33.8 32.9544 34.3091 33.0816 34.8182C33.2089 35.3273 33.4635 35.8364 33.8453 36.2182L33.9726 36.3455C34.6089 36.9818 35.2453 37.2364 36.0089 37.2364C36.7726 37.2364 37.6635 36.8546 38.4271 36.2182C39.1907 35.4546 39.5726 34.6909 39.6998 33.9273C39.8271 33.1636 39.4453 32.4 38.9362 31.7636C38.6816 31.3818 38.2998 31.2546 38.0453 31ZM35.118 36.0909C34.9907 35.9636 34.7362 35.8364 34.6089 35.7091C34.2271 35.3273 34.0998 34.8182 34.2271 34.1818C34.3544 33.6727 34.6089 33.1636 35.2453 32.5273C35.8816 32.0182 36.3907 31.6364 36.8998 31.6364C37.0271 31.6364 37.0271 31.6364 37.1544 31.6364C37.6635 31.6364 37.918 31.7636 38.2998 32.1455C38.6816 32.5273 38.8089 33.0364 38.6816 33.6727C38.5544 34.1818 38.1726 34.6909 37.6635 35.2C37.1544 35.7091 36.518 36.0909 36.0089 36.0909C35.7544 36.2182 35.3726 36.2182 35.118 36.0909Z" fill="#1D1D1B"/>
    <path d="M32.445 25.2727C33.0814 25.9091 33.7178 26.1636 34.4814 26.1636C34.4814 26.1636 34.4814 26.1636 34.6087 26.1636C35.3723 26.1636 36.2632 25.7818 37.0268 25.1454C37.7905 24.3818 38.1723 23.6182 38.2996 22.8545C38.4268 22.0909 38.045 21.3273 37.5359 20.6909C37.2814 20.3091 36.8996 20.1818 36.645 20.0545C36.2632 19.8 35.8814 19.8 35.3723 19.8C34.6087 19.8 33.7178 20.1818 32.9541 20.8182C32.1905 21.5818 31.8087 22.3454 31.6814 23.1091C31.4268 23.8727 31.6814 24.5091 32.445 25.2727ZM35.4996 20.6909C35.8814 20.6909 36.2632 20.9454 36.7723 21.2C37.1541 21.5818 37.2814 22.0909 37.1541 22.7273C37.0268 23.2364 36.645 23.7454 36.1359 24.3818C35.4996 24.8909 34.9905 25.2727 34.4814 25.2727C34.0996 25.4 33.845 25.2727 33.5905 25.1454C33.3359 25.0182 33.2087 24.8909 33.0814 24.7636C32.6996 24.3818 32.5723 23.8727 32.6996 23.2364C32.8268 22.7273 33.2087 22.2182 33.7178 21.5818C34.3541 21.0727 34.8632 20.6909 35.3723 20.6909C35.245 20.6909 35.3723 20.6909 35.4996 20.6909Z" fill="#1D1D1B"/>
    </g>
    </g>
    <defs>
    <clipPath id="clip0_60_2793">
    <rect width="57" height="57" fill="white"/>
    </clipPath>
    </defs>
  </svg>
);

export const QualityIcon = () => (
  <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34.3004 38.875C41.3004 38.875 47.0754 33.1 47.0754 26.1C47.0754 19.1 41.3004 13.325 34.3004 13.325C27.3004 13.325 21.5254 19.1 21.5254 26.1C21.5254 33.1 27.1254 38.875 34.3004 38.875Z" fill="#FFB709"/>
    <path d="M25.7247 21.2C26.5997 20.15 26.9497 18.925 26.9497 17.525C26.9497 14.725 25.0247 12.275 22.3997 11.75C22.5747 11.05 22.7497 10.35 22.7497 9.65001C22.7497 5.45001 19.2497 1.95001 14.8747 1.95001C10.6747 1.95001 7.17471 5.45001 7.17471 9.65001C7.17471 10.35 7.34971 10.875 7.34971 11.575C4.89971 12.275 2.97471 14.725 2.97471 17.525C2.97471 18.925 3.49971 20.15 4.19971 21.2C2.79971 22.6 1.39971 24.525 1.74971 26.8C2.09971 28.9 11.0247 50.25 11.0247 50.25H18.7247C18.7247 50.25 27.6497 28.9 27.9997 26.8C28.5247 24.525 27.1247 22.6 25.7247 21.2Z" fill="#634C9F"/>
    <path d="M14.875 10.7V49.725" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.22461 27.675L14.8746 35.2" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.7 27.675L14.875 35.2" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.22461 16.65L15.0496 24.35" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.7 16.65L14.875 24.35" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M42.3496 38.175C42.6996 39.4 42.8746 40.625 43.0496 41.675H54.2496L49.6996 27.85L40.5996 34.675C41.2996 35.725 41.8246 36.95 42.3496 38.175Z" fill="#634C9F"/>
    <path d="M2.45039 51.3C1.75039 49.375 2.45039 47.275 3.85039 46.4L29.9254 31C34.4754 28.725 40.2504 32.05 42.3504 38.175C44.2754 44.3 41.6504 50.425 36.5754 51.3L6.4754 54.45C4.9004 54.625 3.15039 53.225 2.45039 51.3Z" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M29.5752 31.35C29.7502 31.7 33.4252 43.775 33.4252 43.775" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M25.375 45.175C25.55 45.525 27.65 52.175 27.65 52.175" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.8496 38.525C18.0246 38.875 20.1246 45.525 20.1246 45.525" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.875 48.85L9.45 53.925" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M38.8502 8.25L36.5752 16.825" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M39.8998 16.65C39.3748 17 38.6748 17 37.9748 17C36.5748 17 35.1748 16.3 34.2998 15.25" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const DeliveryIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g mask="url(#mask1_60_2826)">
    <path d="M38.4996 22.925H6.47461V48.65H38.4996V22.925Z" fill="#634C9F"/>
    <path d="M38.6748 30.275H45.6748L53.5498 45.325C54.4248 46.9 53.1998 48.65 51.6248 48.65H37.7998" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.3494 54.075C16.6244 54.075 18.5494 52.15 18.5494 49.7C18.5494 47.25 16.6244 45.325 14.3494 45.325C12.0744 45.325 10.1494 47.25 10.1494 49.7C10.1494 52.15 12.0744 54.075 14.3494 54.075Z" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M45.1492 54.075C47.4242 54.075 49.3492 52.15 49.3492 49.7C49.3492 47.25 47.4242 45.325 45.1492 45.325C42.8742 45.325 40.9492 47.25 40.9492 49.7C40.9492 52.15 42.8742 54.075 45.1492 54.075Z" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.72461 43.575H17.8496" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.09961 39.55H15.2246" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40.7742 27.65C47.9492 27.65 53.7242 21.875 53.7242 14.7C53.7242 7.525 47.9492 1.75 40.7742 1.75C33.5992 1.75 27.8242 7.525 27.8242 14.7C27.8242 21.7 33.5992 27.65 40.7742 27.65Z" fill="#FFB709"/>
    <path d="M35.1748 12.425L40.2498 22.225L47.4248 8.75" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </svg>
);

export const PlusIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8H12" stroke="#4C9F91" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 12V4" stroke="#4C9F91" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MinusIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.85193 9H13.1482" stroke="#0D0C0D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PlusIconWhite = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8H12" stroke="#ffffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 12V4" stroke="#ffffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const TrashIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.2257 4.83835C12.9235 4.61021 10.6074 4.49268 8.29829 4.49268C6.9294 4.49268 5.56051 4.56181 4.19162 4.70008L2.78125 4.83835" stroke="#0D0C0D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.58594 4.13976L6.73804 3.23408C6.84865 2.57729 6.93162 2.08643 8.10001 2.08643H9.91137C11.0798 2.08643 11.1696 2.60494 11.2733 3.24099L11.4254 4.13976" stroke="#0D0C0D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.745 7.02246L13.2957 13.9844C13.2196 15.0699 13.1574 15.9133 11.2285 15.9133H6.78998C4.86109 15.9133 4.79887 15.0699 4.72282 13.9844L4.27344 7.02246" stroke="#0D0C0D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.84375 12.1113H10.146" stroke="#0D0C0D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.27344 9.3457H10.7302" stroke="#0D0C0D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
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
    <path d="M6 2.34082V4.59082" stroke="#0D0C0D" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2.34082V4.59082" stroke="#0D0C0D" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.625 7.6582H15.375" stroke="#0D0C0D" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.75 7.21582V13.5908C15.75 15.8408 14.625 17.3408 12 17.3408H6C3.375 17.3408 2.25 15.8408 2.25 13.5908V7.21582C2.25 4.96582 3.375 3.46582 6 3.46582H12C14.625 3.46582 15.75 4.96582 15.75 7.21582Z" stroke="#0D0C0D" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.771 11.1162H11.7778" stroke="#0D0C0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.771 13.3662H11.7778" stroke="#0D0C0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.99661 11.1162H9.00335" stroke="#0D0C0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.99661 13.3662H9.00335" stroke="#0D0C0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.22073 11.1162H6.22747" stroke="#0D0C0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.22073 13.3662H6.22747" stroke="#0D0C0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.994347 10.8609C0.816836 10.6834 0.800699 10.4056 0.945935 10.2098L0.994347 10.1538L5.30723 5.84066L0.994347 1.52754C0.816836 1.35003 0.800699 1.07226 0.945935 0.876516L0.994347 0.820437C1.17186 0.642926 1.44963 0.626789 1.64537 0.772025L1.70145 0.820437L6.36812 5.4871C6.54563 5.66462 6.56177 5.94239 6.41653 6.13813L6.36812 6.19421L1.70145 10.8609C1.50619 11.0561 1.18961 11.0561 0.994347 10.8609Z" fill="#66BF84"/>
  </svg>
);

export const CheckoutIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 8.50488H22" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 16.5049H8" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.5 16.5049H14.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.44 3.50488H17.55C21.11 3.50488 22 4.38488 22 7.89488V16.1049C22 19.6149 21.11 20.4949 17.56 20.4949H6.44C2.89 20.5049 2 19.6249 2 16.1149V7.89488C2 4.38488 2.89 3.50488 6.44 3.50488Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PencilIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.0833 1.83337H8.24992C3.66659 1.83337 1.83325 3.66671 1.83325 8.25004V13.75C1.83325 18.3334 3.66659 20.1667 8.24992 20.1667H13.7499C18.3333 20.1667 20.1666 18.3334 20.1666 13.75V11.9167" stroke="#4C9F91" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.7032 2.76832L7.47989 9.99165C7.20489 10.2667 6.92989 10.8075 6.87489 11.2017L6.48072 13.9608C6.33406 14.96 7.03989 15.6567 8.03906 15.5192L10.7982 15.125C11.1832 15.07 11.7241 14.795 12.0082 14.52L19.2316 7.29665C20.4782 6.04999 21.0649 4.60165 19.2316 2.76832C17.3982 0.934987 15.9499 1.52165 14.7032 2.76832Z" stroke="#4C9F91" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.6675 3.8042C14.2816 5.99503 15.9958 7.7092 18.1958 8.33253L13.6675 3.8042Z" fill="#4C9F91"/>
    <path d="M13.6675 3.8042C14.2816 5.99503 15.9958 7.7092 18.1958 8.33253" stroke="#4C9F91" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.00098 1L15 14.9991" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M0.999964 14.9991L14.999 1" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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

export const MailIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const CheckCircleIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="28" stroke="#BAFD91" strokeOpacity="0.5" strokeWidth="4"/>
        <path d="M18 30.5L25.5 38L42 21.5" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const CodIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10H21V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V10Z" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 10L12 3L21 10" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14V17" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const MomoIcon = () => (
    <img src="/images/momo_logo.png" alt="Momo" className="w-6 h-6" />
);

// Sửa lại icon radio button
export const RadioOnIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="9" stroke="#16A34A" strokeWidth="2"/>
        <circle cx="10" cy="10" r="5" fill="#16A34A"/>
    </svg>
);

export const RadioOffIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="9" stroke="#A1A1AA" strokeWidth="2"/>
    </svg>
);

export const XCircleIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="28" stroke="#EF4444" strokeOpacity="0.5" strokeWidth="4"/>
        <path d="M22 22L38 38" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M38 22L22 38" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const WalletIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.7672 20.959H6.90414C3.30414 20.959 1.23291 18.8877 1.23291 15.2877V8.38363C1.23291 4.78363 3.30414 2.7124 6.90414 2.7124H16.7672C20.3672 2.7124 22.4384 4.78363 22.4384 8.38363V15.2877C22.4384 18.8877 20.3672 20.959 16.7672 20.959ZM6.90414 4.19185C4.08332 4.19185 2.71236 5.56281 2.71236 8.38363V15.2877C2.71236 18.1086 4.08332 19.4795 6.90414 19.4795H16.7672C19.588 19.4795 20.9589 18.1086 20.9589 15.2877V8.38363C20.9589 5.56281 19.588 4.19185 16.7672 4.19185H6.90414Z" fill="#0D0C0D"/>
  <path d="M11.8356 15.5342C9.79395 15.5342 8.13696 13.8772 8.13696 11.8356C8.13696 9.79395 9.79395 8.13696 11.8356 8.13696C13.8772 8.13696 15.5342 9.79395 15.5342 11.8356C15.5342 13.8772 13.8772 15.5342 11.8356 15.5342ZM11.8356 9.61641C10.6126 9.61641 9.61641 10.6126 9.61641 11.8356C9.61641 13.0586 10.6126 14.0548 11.8356 14.0548C13.0586 14.0548 14.0548 13.0586 14.0548 11.8356C14.0548 10.6126 13.0586 9.61641 11.8356 9.61641Z" fill="#0D0C0D"/>
  <path d="M5.42454 15.0411C5.02016 15.0411 4.68481 14.7057 4.68481 14.3014V9.36985C4.68481 8.96547 5.02016 8.63013 5.42454 8.63013C5.82892 8.63013 6.16427 8.96547 6.16427 9.36985V14.3014C6.16427 14.7057 5.82892 15.0411 5.42454 15.0411Z" fill="#0D0C0D"/>
  <path d="M18.2466 15.0411C17.8422 15.0411 17.5068 14.7057 17.5068 14.3014V9.36985C17.5068 8.96547 17.8422 8.63013 18.2466 8.63013C18.6509 8.63013 18.9863 8.96547 18.9863 9.36985V14.3014C18.9863 14.7057 18.6509 15.0411 18.2466 15.0411Z" fill="#0D0C0D"/>
  </svg>
);

export const ArrowUpRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.8333 9.16658L17.6666 2.33325" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.3333 5.66675V1.66675H14.3333" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9.16675 1.66675H7.50008C3.33341 1.66675 1.66675 3.33341 1.66675 7.50008V12.5001C1.66675 16.6667 3.33341 18.3334 7.50008 18.3334H12.5001C16.6667 18.3334 18.3334 16.6667 18.3334 12.5001V10.8334" fill="white"/>
  <path d="M9.16675 1.66675H7.50008C3.33341 1.66675 1.66675 3.33341 1.66675 7.50008V12.5001C1.66675 16.6667 3.33341 18.3334 7.50008 18.3334H12.5001C16.6667 18.3334 18.3334 16.6667 18.3334 12.5001V10.8334" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CopyIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.6667 1.33331H3.33333C2.59695 1.33331 2 1.93027 2 2.66665V10C2 10.7364 2.59695 11.3333 3.33333 11.3333H10.6667C11.403 11.3333 12 10.7364 12 10V2.66665C12 1.93027 11.403 1.33331 10.6667 1.33331Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.9999 4.66669V12C13.9999 13.4667 12.7999 14.6667 11.3333 14.6667H4.66663" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);