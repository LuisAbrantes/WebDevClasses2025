import React from 'react';
import ClassCard from './ClassCard';

function ClassesList() {
    const classes = [
        {
            id: 1,
            title: 'Introduction to HTML and CSS',
            description: 'Fundamentals of structuring and styling web pages',
            path: 'classes/classes001/index.html'
        },
        {
            id: 2,
            title: 'Basic JavaScript',
            description: 'Core concepts of programming with JavaScript',
            path: 'classes/classes002/index.html'
        },
        {
            id: 3,
            title: 'Frontend Frameworks',
            description: 'Introduction to React and other modern frameworks',
            path: 'classes/classes003/index.html'
        }
    ];

    return (
        <section className="mb-16">
            <div className="flex items-center mb-10">
                <h2 className="text-3xl font-serif font-semibold text-gray-800 mr-4">
                    Courses
                </h2>
                <div className="flex-grow h-px bg-gray-200"></div>
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
