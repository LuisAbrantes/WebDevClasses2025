import React from 'react';

const Footer = () => {

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-6 sm:pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
                    <div className="text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl font-serif mb-3 sm:mb-4 border-b border-[#A51C30] pb-2 inline-block">
                            WebDev Academy
                        </h3>
                        <p className="text-gray-400 mt-2">
                            Training web developers with academic excellence and
                            industry preparation.
                        </p>
                    </div>
                    <div className="text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl font-serif mb-3 sm:mb-4 border-b border-[#A51C30] pb-2 inline-block">
                            Useful Links
                        </h3>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="https://drive.google.com/drive/folders/1MamX2HWmvVdsor8o6_g8NMPlzC6kdH9v?usp=sharing"
                                    target='_blank'
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Digital Library
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Learning Resources (empty yet)
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    FAQ (empty yet)
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center sm:text-left mt-6 sm:mt-0">
                        <h3 className="text-lg sm:text-xl font-serif mb-3 sm:mb-4 border-b border-[#A51C30] pb-2 inline-block">
                            Contact
                        </h3>
                        <div className="text-gray-400 mt-2">
                            <p>
                                <a
                                    href="https://luisabrantes.dev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    My Portfolio →
                                </a>
                            </p>
                            <p className="mt-1">
                                <a
                                    href="mailto:luis.hsa@gmail.com"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    luis.hsa@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 py-4 sm:py-6">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <p className="text-gray-400 text-sm sm:text-base">
                        © {new Date().getFullYear()} Luis Henrique Abrantes
                    </p>
                    <p className="text-xs mt-2 text-gray-500">
                        All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
