import React from 'react';
import { Star, Github } from 'lucide-react';

function GitHubStar() {
    return (
        <section className="mb-10 p-6 bg-[#F7F5F2] rounded-xl border border-gray-300 shadow-sm text-center">
            <h2 className="text-2xl font-serif font-bold text-[#A51C30] mb-4 flex items-center justify-center gap-2">
                <Star /> Join our Project <Github />
            </h2>
            <p className="text-gray-700 mb-6">
                Dive into our GitHub repository to stay updated with the latest
                code, behind-the-scenes (un-deployed yet) breakthroughs, and upcoming features.
                Your star and follow make you a part of our coding
                community!
            </p>
            <a
                href="https://github.com/LuisAbrantes/WebDevClasses2025"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#A51C30] text-white px-5 py-2 rounded-md font-medium hover:bg-[#8C1724] transition-colors"
            >
                Star on GitHub
            </a>
        </section>
    );
}

export default GitHubStar;
