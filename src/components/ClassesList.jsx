import React from 'react';
import ClassCard from './ClassCard';

function ClassesList() {
    const classes = [
        {
            id: 1,
            title: 'Introduction to HTML l',
            description: 'Fundamentals of structuring web pages',
            path: 'src/classes/class001/index.html' 
        },
        {
            id: 2,
            title: 'Introduction to HTML ll',
            description: 'Fundamentals of structuring web pages',
            path: 'src/classes/class002/index.html' 
        },
        {
            id: 3,
            title: 'Introduction to CSS',
            description: 'Fundamentals of styling web pages',
            path: 'src/classes/class003/index.html' 
        }
    ];

    return (
        <section className="mb-20 bg-white py-10 px-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-10">
                <h2 className="text-3xl font-serif font-semibold text-gray-800 mr-4">
                    Classes
                </h2>
                <div className="flex-grow h-0.5 bg-gradient-to-r from-gray-200 to-white"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {classes.map(classItem => (
                    <ClassCard key={classItem.id} classItem={classItem} />
                ))}
            </div>
        </section>
    );
}

export default ClassesList;
