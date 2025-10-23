import React from 'react';

// Các thuộc tính chung cho icon
const iconProps = (className?: string) => ({
    className: `w-6 h-6 ${className || ''}`,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "1.5",
});

export const ProfileAccountIcon = ({ className }: { className?: string }) => (
    <svg {...iconProps(className)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A1.875 1.875 0 0 1 17.625 22H6.375a1.875 1.875 0 0 1-1.875-1.882Z" />
    </svg>
);

export const ProfileOrdersIcon = ({ className }: { className?: string }) => (
    <svg {...iconProps(className)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
);

export const ProfileAddressIcon = ({ className }: { className?: string }) => (
    <svg {...iconProps(className)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
);

export const ProfileNotificationIcon = ({ className }: { className?: string }) => (
    <svg {...iconProps(className)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.31 5.772 23.848 23.848 0 0 0 5.454 1.31M15 17.5c-.618 0-1.12-.502-1.12-1.125S14.382 15.25 15 15.25s1.12.502 1.12 1.125S15.618 17.5 15 17.5Zm-6 0c-.618 0-1.12-.502-1.12-1.125S8.382 15.25 9 15.25s1.12.502 1.12 1.125S9.618 17.5 9 17.5Z" />
    </svg>
);

export const ProfileCouponIcon = ({ className }: { className?: string }) => (
    <svg {...iconProps(className)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-1.5h5.25m-5.25 0h5.25m0 0h5.25m-5.25 0H9m5.25 0H9.75m-4.5-3H9.75m-4.5 0H5.25m0 0H9.75M5.25 9H9.75M5.25 6H9.75m0 0H5.25m9.75 0v.75m0 3v.75m0 3v.75m0 3V18m-9-1.5h5.25m-5.25 0h5.25m0 0h5.25m-5.25 0H9m5.25 0H9.75m-4.5-3H9.75m-4.5 0H5.25m0 0H9.75M5.25 9H9.75M5.25 6H9.75" />
    </svg>
);

export const ProfileSettingsIcon = ({ className }: { className?: string }) => (
    <svg {...iconProps(className)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-1.002 1.131-1.223a.903.903 0 0 1 1.06 0c.57.22 1.04.68 1.13 1.222.09.542-.164 1.096-.646 1.41l-1.06 1.06c-.36.36-.85.58-1.37.58H9.37a1.37 1.37 0 0 1-1.37-1.37V4.58c0-.52.22-1.01.58-1.37l1.06-1.06Zm4.178 7.31c-.09.542-.56 1.002-1.131 1.223a.903.903 0 0 1-1.06 0c-.57-.22-1.04-.68-1.13-1.222-.09-.542.164-1.096.646-1.41l1.06-1.06c.36-.36.85-.58 1.37-.58h.5c.52 0 1.01.22 1.37.58l1.06 1.06c.48.31.74.87.64 1.41Zm-8.356 7.31c.09.542.56 1.002 1.131 1.223a.903.903 0 0 1 1.06 0c.57-.22 1.04-.68 1.13-1.222.09-.542-.164-1.096-.646-1.41l-1.06-1.06c-.36-.36-.85-.58-1.37-.58h-.5c-.52 0-1.01.22-1.37.58l-1.06 1.06c-.48.31-.74.87-.64 1.41Z" />
    </svg>
);

export const ProfileHelpIcon = ({ className }: { className?: string }) => (
    <svg {...iconProps(className)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
    </svg>
);

export const ProfileLogoutIcon = ({ className }: { className?: string }) => (
    <svg {...iconProps(className)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3H6.75A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21h6.75A2.25 2.25 0 0 0 15.75 18.75V15m-4.5-3-3m0 0 3 3m-3-3h12.75" />
    </svg>
);
