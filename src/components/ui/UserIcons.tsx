import React from 'react';

// Các thuộc tính chung cho icon để đảm bảo tính nhất quán
const iconProps = (className?: string) => ({
    className: className,
    width: "1em", // Sử dụng 'em' để kích thước icon tự động điều chỉnh theo cỡ chữ
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round" as "round",
    strokeLinejoin: "round" as "round",
});

export const UserIcon = ({ className }: { className?: string }) => (
    <svg {...iconProps(className)}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

export const LogoutIcon = ({ className }: { className?: string }) => (
    <svg {...iconProps(className)}>
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
);

export const DashboardIcon = ({ className }: { className?: string }) => (
    <svg {...iconProps(className)}>
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
);

export const GemIcon = ({ className }: { className?: string }) => (
    <svg {...iconProps(className)}>
        <path d="M6 3h12l4 6-10 13L2 9l4-6z" />
        <path d="M12 22L6 9" />
        <path d="m12 22 6-13" />
        <path d="M2 9h20" />
    </svg>
);