import React from 'react';
import Header from '../components/Header';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const FAQPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <SEO
                title="Često Postavljena Pitanja"
                description="Pronađite brze odgovore na najčešća pitanja o radu sudskih tumača, ovjerama prijevoda, rokovima i cijenama."
            />
            <Header />
            <main className="flex-grow pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl font-bold text-[#1e40af] mb-4">Često Postavljena Pitanja</h1>
                        <p className="text-[#4b5563] font-medium">
                            Ovdje možete pronaći odgovore na najčešća pitanja vezana za naše usluge prevođenja.
                        </p>
                    </motion.div>

                    <div className="bg-[#f8fbff] p-8 rounded-2xl border border-blue-50 shadow-sm">
                        <FAQ />
                    </div>

                    <div className="mt-20 text-center p-8 bg-blue-50 rounded-xl">
                        <h3 className="text-xl font-bold text-[#1e40af] mb-2">Imate još pitanja?</h3>
                        <p className="text-gray-600 mb-6">Ako niste pronašli odgovor koji tražite, slobodno nas kontaktirajte direktno.</p>
                        <a
                            href="/#kontakt"
                            className="inline-block bg-[#1e40af] text-white px-8 py-3 rounded-md font-bold hover:bg-[#1e3a8a] transition-all"
                        >
                            Kontaktirajte Nas
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default FAQPage;
