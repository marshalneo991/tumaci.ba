import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#1e40af] py-8 text-white text-[12px] font-medium">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <img src={logo} alt="Tumači.ba" className="h-8 w-auto brightness-0 invert" />
                        <span className="hidden md:inline text-blue-300">|</span>
                        <p>© {new Date().getFullYear()}</p>
                        <span className="hidden md:inline text-blue-300">|</span>
                        <p>Sva prava zadržana</p>
                        <span className="hidden md:inline text-blue-300">|</span>
                        <p>Živinice, BiH</p>
                        <span className="hidden md:inline text-blue-300">|</span>
                        <Link to="/pravila-privatnosti" className="hover:text-blue-200 transition-colors">
                            Pravila privatnosti
                        </Link>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-1">
                        <p className="text-[10px] text-blue-200 uppercase tracking-wider">
                            Design by <span className="text-white font-bold italic">VoidStack</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
