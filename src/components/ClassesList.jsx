import React, { useState, useEffect } from 'react';
import ClassCard from './ClassCard';

function ClassesList() {
    const classes = [
        {
            id: 1,
            title: 'Introduction to HTML l',
            description: 'Fundamentals of structuring web pages',
            path: 'src/classes/class001/index.html',
            date: '2025-01-10'
        },
        {
            id: 2,
            title: 'Introduction to HTML ll',
            description: 'Fundamentals of structuring web pages',
            path: 'src/classes/class002/index.html',
            date: '2025-01-17'
        },
        {
            id: 3,
            title: 'Introduction to CSS',
            description: 'Fundamentals of styling web pages',
            path: 'src/classes/class003/index.html',
            date: '2025-01-24'
        }
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
    const [isExpanded, setIsExpanded] = useState(true);
    const [inputWidth, setInputWidth] = useState(300);

    function measureText(text) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.font = '16px sans-serif';
        return ctx.measureText(text).width;
    }

    // Debounce search input
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300);
        return () => clearTimeout(handler);
    }, [searchTerm]);

    // Update dynamic width: base width of 300px, expand to 600px max until 30 chars, then keep growing.
    useEffect(() => {
        const textWidth = measureText(searchTerm);
        // If text is near the limit, gradually increase the bar width
        if (textWidth + 40 >= inputWidth && inputWidth < 600) {
            setInputWidth(prevWidth => Math.min(prevWidth + 50, 600));
        }
        // Reduce width if there's too much extra space
        else if (textWidth + 40 < inputWidth - 50 && inputWidth > 300) {
            setInputWidth(prevWidth => Math.max(prevWidth - 50, 300));
        }
    }, [searchTerm, inputWidth]);

    const filteredClasses = classes.filter(item => {
        const term = debouncedSearchTerm.toLowerCase();
        return (
            item.title.toLowerCase().includes(term) ||
            item.description.toLowerCase().includes(term) ||
            String(item.id).includes(term) ||
            item.date.includes(term)
        );
    });

    const toggleClasses = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <section className="mb-20 bg-white py-10 px-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-serif font-semibold text-gray-800">
                    Classes
                </h2>
                <button
                    onClick={toggleClasses}
                    className="flex items-center text-gray-800 hover:text-[#A51C30]"
                >
                    <span
                        className={`transition-transform duration-200 ${
                            isExpanded
                                ? 'transform rotate-90 text-[#A51C30]'
                                : ''
                        }`}
                    >
                        &gt;
                    </span>
                </button>
            </div>
            <div className="h-0.5 bg-gradient-to-r from-gray-200 to-white mb-6"></div>

            {isExpanded && (
                <>
                    <div className="mb-4 flex justify-center">
                        <div
                            className="relative"
                            style={{
                                width: `${inputWidth}px`,
                                transition: 'width 0.3s ease'
                            }}
                        >
                            <svg
                                className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2.5a7.5 7.5 0 010 14.15z"
                                />
                            </svg>
                            <input
                                type="text"
                                className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#A51C30]"
                                placeholder="Search classes..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    &times;
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredClasses.map(classItem => (
                            <ClassCard
                                key={classItem.id}
                                classItem={classItem}
                            />
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}

export default ClassesList;
