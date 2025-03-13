import React from 'react';

const ClassCard = ({ classItem }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:translate-y-[-5px] border border-gray-100 group">
            <div className="h-2 bg-[#A51C30] w-full"></div>
            <div className="p-8">
                <span className="inline-block text-xs font-medium text-gray-500 tracking-widest uppercase mb-2">
                    Module {classItem.id}
                </span>
                <h3 className="text-2xl font-serif font-semibold text-[#A51C30] mb-3">
                    {classItem.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                    {classItem.description}
                </p>
                <a
                    href={classItem.path}
                    className="inline-flex items-center font-medium text-[#A51C30] group-hover:translate-x-1 transition-transform"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>Access Class</span>
                    <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default ClassCard;
