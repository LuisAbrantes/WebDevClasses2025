import React from 'react';

const Header = () => {
    return (
        <header className="bg-[#A51C30] text-white shadow-md">
            <div className="container mx-auto px-6 py-5 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="mr-3">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 2L28 8V22L15 28L2 22V8L15 2Z" stroke="white" strokeWidth="2" fill="none"/>
                            <path d="M15 8V22" stroke="white" strokeWidth="2"/>
                            <path d="M8 11L22 19" stroke="white" strokeWidth="2"/>
                            <path d="M22 11L8 19" stroke="white" strokeWidth="2"/>
                        </svg>
                    </div>
                    <h1 className="text-2xl font-serif tracking-tight">
                        WebDev <span className="font-light italic">Academy</span>
                    </h1>
                </div>
                <nav>
                    <ul className="flex space-x-8 text-sm uppercase tracking-widest font-medium">
                        <li>
                            <a href="#" className="hover:underline hover:underline-offset-4 transition-all">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline hover:underline-offset-4 transition-all">
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline hover:underline-offset-4 transition-all">
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="border-t border-[#C8102E]/20 py-1 bg-[#8C1724]">
                <div className="container mx-auto px-6 text-sm text-center md:text-right text-white/80">
                    Curso Técnico em Desenvolvimento Web
                </div>
            </div>
        </header>
    );
};

export default Header;
