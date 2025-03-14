import React from 'react';
import { ArrowRight } from 'lucide-react';

const ClassCard = ({ classItem }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:translate-y-[-5px] border border-gray-100 group">
            <div className="h-2 bg-[#A51C30] w-full"></div>
            <div className="p-8">
                <div className="flex justify-between items-center mb-2">
                    <span className="inline-block text-xs font-medium text-gray-500 tracking-widest uppercase">
                        Module {classItem.id}
                    </span>
                    <span className="inline-block text-xs font-medium text-gray-500">
                        Date: {classItem.date}
                    </span>
                </div>
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
                    <ArrowRight className="ml-2 w-4 h-4" />
                </a>
            </div>
        </div>
    );
};

export default ClassCard;
