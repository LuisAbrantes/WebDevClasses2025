import React, { useState, useEffect } from 'react';
import AssessmentCard from './AssessmentCard';
import { Search, X as XIcon, ChevronRight } from 'lucide-react';

function AssessmentsList() {
    const assessments = [];

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

    // Update dynamic width
    useEffect(() => {
        const textWidth = measureText(searchTerm);
        if (textWidth + 40 >= inputWidth && inputWidth < 600) {
            setInputWidth(prevWidth => Math.min(prevWidth + 50, 600));
        } else if (textWidth + 40 < inputWidth - 50 && inputWidth > 300) {
            setInputWidth(prevWidth => Math.max(prevWidth - 50, 300));
        }
    }, [searchTerm, inputWidth]);

    const filteredAssessments = assessments.filter(item => {
        const term = debouncedSearchTerm.toLowerCase();
        return (
            item.title.toLowerCase().includes(term) ||
            item.description.toLowerCase().includes(term) ||
            item.type.toLowerCase().includes(term) ||
            String(item.id).includes(term) ||
            item.date.includes(term)
        );
    });

    const toggleAssessments = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <section className="mb-20 bg-white py-10 px-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-serif font-semibold text-gray-800">
                    Assessments & Activities
                </h2>
                <button
                    onClick={toggleAssessments}
                    className="flex items-center text-gray-800 hover:text-[#A51C30]"
                >
                    <ChevronRight
                        className={`transition-transform duration-200 ${
                            isExpanded ? 'rotate-90 text-[#A51C30]' : ''
                        }`}
                    />
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
                            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#A51C30]"
                                placeholder="Search assessments..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    <XIcon className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredAssessments.map(assessment => (
                            <AssessmentCard
                                key={assessment.id}
                                assessment={assessment}
                            />
                        ))}

                        {assessments.length === 0 && (
                            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-10">
                                <p className="text-gray-500 italic">
                                    No assessments available at this time. Check
                                    back later for upcoming evaluative
                                    activities.
                                </p>
                            </div>
                        )}
                    </div>
                </>
            )}
        </section>
    );
}

export default AssessmentsList;
