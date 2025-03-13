import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-[#A51C30] text-white shadow-md">
            <div className="container mx-auto px-4 sm:px-6 py-5 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="mr-3">
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15 2L28 8V22L15 28L2 22V8L15 2Z"
                                stroke="white"
                                strokeWidth="2"
                                fill="none"
                            />
                            <path d="M15 8V22" stroke="white" strokeWidth="2" />
                            <path
                                d="M8 11L22 19"
                                stroke="white"
                                strokeWidth="2"
                            />
                            <path
                                d="M22 11L8 19"
                                stroke="white"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                    <h1 className="text-xl sm:text-2xl font-serif tracking-tight truncate">
                        WebDevClasses2025{' '}
                        <span className="font-light italic hidden sm:inline">
                            Luis Henrique Abrantes
                        </span>
                    </h1>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden flex items-center"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Desktop navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-8 text-sm uppercase tracking-widest font-medium">
                        <li>
                            <a
                                href="/"
                                className="hover:underline hover:underline-offset-4 transition-all"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:underline hover:underline-offset-4 transition-all"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:underline hover:underline-offset-4 transition-all"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mobile navigation */}
            <div
                className={`${
                    isMenuOpen ? 'block' : 'hidden'
                } md:hidden border-t border-[#C8102E]/30 bg-[#8C1724]`}
            >
                <nav className="container mx-auto px-4">
                    <ul className="py-3 flex flex-col space-y-3 text-sm uppercase tracking-widest font-medium">
                        <li>
                            <a
                                href="/"
                                className="block hover:bg-[#A51C30]/30 py-2 px-3 rounded-md transition-colors"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block hover:bg-[#A51C30]/30 py-2 px-3 rounded-md transition-colors"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block hover:bg-[#A51C30]/30 py-2 px-3 rounded-md transition-colors"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="border-t border-[#C8102E]/20 py-1 bg-[#8C1724]">
                <div className="container mx-auto px-4 sm:px-6 text-xs sm:text-sm text-center md:text-right text-white/80">
                    Web Development Classes in IFSP-JCR Technical Course
                </div>
            </div>
        </header>
    );
};

export default Header;
