import React from 'react';

function Introduction() {
    return (
        <section className="mb-8 md:mb-20 text-center py-6 md:py-8 px-3 md:px-4 rounded-xl bg-gradient-to-b from-white to-gray-50">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-[#A51C30] mb-4 md:mb-6 tracking-tight leading-tight">
                Web Development Classes at{' '}
                <span className="italic relative group cursor-help border-b-[2.5px] border-[#A51C30] border-opacity-80">
                    Instituto Federal de Ciências e Educação de São Paulo
                    <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 absolute left-1/2 transform -translate-x-1/2 -top-20 sm:-top-14 bg-[#A51C30] text-white text-xs sm:text-sm md:text-base py-2 px-3 sm:px-4 rounded-lg shadow-xl font-normal w-48 sm:w-64 md:w-72 after:content-[''] after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#A51C30] z-10">
                        Federal Institute of Science and Education of São Paulo
                    </span>
                </span>
            </h1>
            <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-[#A51C30] to-[#d63447] mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-xl text-gray-700 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed px-2">
                Portfolio of web development classes from the technical course,
                featuring fundamental concepts and modern practices.
            </p>
        </section>
    );
}

export default Introduction;
