'use client';

import React from 'react';

// Component con cho từng mục menu
const ProfileMenuItem: React.FC<{
    label: string;
    icon: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => {
    
    const textClass = isActive ? 'text-green-600' : 'text-gray-500 hover:text-gray-900';
    const iconClass = isActive ? 'text-green-600' : 'text-gray-500 group-hover:text-gray-900';

    return (
        <button 
            onClick={onClick}
            className="group self-stretch h-10 px-4 py-2 rounded-[32px] inline-flex justify-start items-center gap-2 overflow-hidden transition-colors duration-200"
        >
            <div className={`transition-colors duration-200 ${iconClass}`}>
                {icon}
            </div>
            <div className={`flex-1 justify-start text-base font-semibold leading-snug transition-colors duration-200 ${textClass}`}>
                {label}
            </div>
        </button>
    );
};

export default ProfileMenuItem;