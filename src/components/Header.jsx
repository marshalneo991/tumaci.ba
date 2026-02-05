import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, Menu, X, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const menuRef = useRef(null);
    const isHome = location.pathname === '/';

    const navLinks = [
        { name: 'POČETNA', href: '/' },
        { name: 'O NAMA', href: isHome ? '#o-nama' : '/#o-nama' },
        { name: 'USLUGE', href: isHome ? '#usluge' : '/#usluge' },
        { name: 'FAQ', href: '/faq' },
        { name: 'KONTAKT', href: isHome ? '#kontakt' : '/#kontakt' },
    ];

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden'; // Lock scroll
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset'; // Unlock scroll
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    // Close menu on location change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <header className="fixed w-full bg-[#f8fbff] z-50 border-b border-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex-shrink-0 flex items-center">
                        <img src={logo} alt="Tumači.ba" className="h-12 w-auto" />
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        <div className="flex space-x-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-[13px] font-bold text-[#4b5563] hover:text-[#1e40af] transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <div className="flex flex-col items-end border-l border-blue-100 pl-8">
                            <a
                                href="mailto:info@tumaci.ba"
                                className="flex items-center gap-2 text-[#1e40af] font-bold text-[13px] hover:translate-x-1 transition-transform"
                            >
                                <Mail size={14} fill="currentColor" />
                                <span>info@tumaci.ba</span>
                            </a>
                            <div className="flex items-center gap-2 text-[#1e40af] font-bold text-[13px]">
                                <MapPin size={14} fill="currentColor" />
                                <span>Živinice, BiH</span>
                            </div>
                        </div>
                    </nav>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-[#1e40af] p-2 bg-white shadow-sm rounded-md border border-blue-50"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            ref={menuRef}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-[280px] bg-white shadow-2xl z-50 md:hidden flex flex-col"
                        >
                            <div className="p-6 flex justify-between items-center border-b border-gray-50">
                                <span className="font-bold text-[#1e40af]">MENI</span>
                                <button onClick={() => setIsMenuOpen(false)} className="text-gray-400">
                                    <X size={24} />
                                </button>
                            </div>

                            <nav className="flex-grow p-6 space-y-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block text-lg font-bold text-gray-700 hover:text-[#1e40af] transition-colors border-b border-gray-50 pb-2 uppercase"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </nav>

                            <div className="p-8 bg-blue-50/50 space-y-4">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Kontakt</p>
                                <a
                                    href="mailto:info@tumaci.ba"
                                    className="flex items-center gap-3 text-[#1e40af] font-bold"
                                >
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                        <Mail size={18} fill="currentColor" />
                                    </div>
                                    <span>info@tumaci.ba</span>
                                </a>
                                <div className="flex items-center gap-3 text-[#1e40af] font-bold">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                        <MapPin size={18} fill="currentColor" />
                                    </div>
                                    <span>Živinice, BiH</span>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
