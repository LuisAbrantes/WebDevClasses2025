import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const ClassCard = ({ classItem }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showToggle, setShowToggle] = useState(false);
    const descRef = useRef(null);

    useEffect(() => {
        // Check if the description is long enough to need expanding
        if (descRef.current) {
            const fullHeight = descRef.current.scrollHeight;
            const visibleHeight = descRef.current.clientHeight;
            setShowToggle(fullHeight > visibleHeight);
        }
    }, [classItem.description]);

    const toggleExpand = () => {
        setIsExpanded(prev => !prev);
    };

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
                <div className="mb-6">
                    <p
                        ref={descRef}
                        className={`text-gray-600 ${
                            isExpanded ? '' : 'line-clamp-2'
                        }`}
                    >
                        {classItem.description}
                    </p>
                    {showToggle && (
                        <button
                            onClick={toggleExpand}
                            className="text-sm text-[#A51C30] mt-2 flex items-center font-medium hover:underline"
                        >
                            {isExpanded ? (
                                <>
                                    <span>Read less</span>
                                    <ChevronUp className="ml-1 w-4 h-4" />
                                </>
                            ) : (
                                <>
                                    <span>Read more</span>
                                    <ChevronDown className="ml-1 w-4 h-4" />
                                </>
                            )}
                        </button>
                    )}
                </div>
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
