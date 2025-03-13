import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-6 pt-12 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <h3 className="text-xl font-serif mb-4 border-b border-[#A51C30] pb-2 inline-block">
                            WebDev Academy
                        </h3>
                        <p className="text-gray-400 mt-2">
                            Training web developers with academic excellence and
                            industry preparation.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-serif mb-4 border-b border-[#A51C30] pb-2 inline-block">
                            Useful Links
                        </h3>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="#"
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
                                    Learning Resources
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-serif mb-4 border-b border-[#A51C30] pb-2 inline-block">
                            Contact
                        </h3>
                        <address className="text-gray-400 mt-2 not-italic">
                            <p>123 Developers Street</p>
                            <p>São Paulo, SP</p>
                            <p>contact@webdev.academy</p>
                        </address>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 py-6">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} WebDev Academy - Technical
                        Course
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
