import React, { useState } from 'react';

function TeachingMethodology() {
    const [showPlanning, setShowPlanning] = useState(false);

    const togglePlanning = () => {
        setShowPlanning(!showPlanning);
    };

    return (
        <section className="mb-20 bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-3xl font-serif font-semibold text-[#A51C30] mb-4 text-center">
                Teaching Methodology
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8 text-center">
                Our course combines theory and practice in a collaborative
                learning environment, preparing students for the challenges of
                the technology industry.
            </p>
            <div className="flex justify-center">
                <button
                    onClick={togglePlanning}
                    className="inline-block border-2 border-[#A51C30] text-[#A51C30] px-6 py-3 rounded-lg hover:bg-[#A51C30] hover:text-white transition-all duration-300 font-medium tracking-wide shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                >
                    {showPlanning
                        ? 'Hide course details'
                        : 'Learn more about the course'}
                </button>
            </div>

            {showPlanning && (
                <div className="mt-10 text-left bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto transition-all duration-500 ease-in-out transform opacity-100 translate-y-0">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-3">
                        Course Planning
                    </h3>
                    <div className="space-y-6">
                        <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
                            <h4 className="font-medium text-lg text-[#A51C30]">
                                1st Semester: Frontend
                            </h4>
                            <p className="text-gray-700 mt-2">
                                Web Fundamentals, HTML structure, CSS styling,
                                responsive design principles
                            </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
                            <h4 className="font-medium text-lg text-[#A51C30]">
                                Module 2: Backend
                            </h4>
                            <p className="text-gray-700 mt-2">
                                NodeJS, DataBase integration...
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default TeachingMethodology;
