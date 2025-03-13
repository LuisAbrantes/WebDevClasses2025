import React, { useState } from 'react';

function TeachingMethodology() {
    const [showPlanning, setShowPlanning] = useState(false);

    const togglePlanning = () => {
        setShowPlanning(!showPlanning);
    };

    return (
        <section className="text-center mb-16 bg-gray-100 py-12 px-6 rounded-lg">
            <h2 className="text-3xl font-serif font-semibold text-[#A51C30] mb-4">
                Teaching Methodology
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-6">
                Our course combines theory and practice in a collaborative
                learning environment, preparing students for the challenges of
                the technology industry.
            </p>
            <button
                onClick={togglePlanning}
                className="inline-block border-2 border-[#A51C30] text-[#A51C30] px-6 py-3 rounded-md hover:bg-[#A51C30] hover:text-white transition-all font-medium tracking-wide"
            >
                {showPlanning
                    ? 'Hide course details'
                    : 'Learn more about the course'}
            </button>

            {showPlanning && (
                <div className="mt-8 text-left bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        Course Planning
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-medium text-lg text-[#A51C30]">
                                Module 1: Web Fundamentals
                            </h4>
                            <p className="text-gray-700">
                                HTML structure, CSS styling, responsive design
                                principles
                            </p>
                        </div>
                        <div>
                            <h4 className="font-medium text-lg text-[#A51C30]">
                                Module 2: Programming Foundations
                            </h4>
                            <p className="text-gray-700">
                                JavaScript basics, DOM manipulation, event
                                handling
                            </p>
                        </div>
                        <div>
                            <h4 className="font-medium text-lg text-[#A51C30]">
                                Module 3: Modern Web Development
                            </h4>
                            <p className="text-gray-700">
                                React fundamentals, component-based
                                architecture, state management
                            </p>
                        </div>
                        <div>
                            <h4 className="font-medium text-lg text-[#A51C30]">
                                Module 4: Final Project
                            </h4>
                            <p className="text-gray-700">
                                Applying learned concepts in a complete web
                                application
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default TeachingMethodology;
