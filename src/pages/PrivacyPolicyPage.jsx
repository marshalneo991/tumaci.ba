import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            <main className="flex-grow pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl font-bold text-[#1e40af] mb-4">Pravila Privatnosti</h1>
                        <p className="text-[#4b5563] font-medium italic">Zadnje ažuriranje: {new Date().toLocaleDateString('bs-BA')}</p>
                    </motion.div>

                    <div className="prose prose-blue max-w-none text-gray-700 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-[#1e40af] mb-4 uppercase tracking-wide">1. Uvod</h2>
                            <p className="leading-relaxed">
                                Vaša privatnost nam je od izuzetne važnosti. Ova Pravila privatnosti objašnjavaju kako Tumači.ba prikuplja, koristi, čuva i štiti vaše lične podatke prilikom korištenja naše web stranice i usluga prevođenja.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#1e40af] mb-4 uppercase tracking-wide">2. Podaci koje prikupljamo</h2>
                            <p className="leading-relaxed">
                                Prikupljamo samo one podatke koji su neophodni za pružanje naših usluga, a to uključuje:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Ime i prezime</li>
                                <li>E-mail adresa</li>
                                <li>Telefonski broj</li>
                                <li>Dokumenti koje nam šaljete na prevođenje</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#1e40af] mb-4 uppercase tracking-wide">3. Kako koristimo vaše podatke</h2>
                            <p className="leading-relaxed">
                                Vaši podaci se koriste isključivo u svrhe:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Komunikacije sa vama u vezi sa vašim zahtjevom</li>
                                <li>Pružanja usluga sudskog tumačenja i prevođenja</li>
                                <li>Izdavanja ponuda i faktura</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#1e40af] mb-4 uppercase tracking-wide">4. Sigurnost podataka</h2>
                            <p className="leading-relaxed">
                                Primjenjujemo stroge tehničke i organizacione mjere kako bismo osigurali da su vaši dokumenti i lični podaci tretirani kao stroga poslovna tajna. Dokumenti koje šaljete na prevođenje su dostupni samo angažovanom sudskom tumaču.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#1e40af] mb-4 uppercase tracking-wide">5. Vaša prava</h2>
                            <p className="leading-relaxed">
                                U svakom trenutku imate pravo zatražiti uvid u vaše podatke, njihovu ispravku ili potpuno brisanje iz našeg sistema nakon što je usluga završena.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#1e40af] mb-4 uppercase tracking-wide">6. Kontakt</h2>
                            <p className="leading-relaxed">
                                Za sva pitanja vezana za vašu privatnost, možete nas kontaktirati putem e-maila: <a href="mailto:info@tumaci.ba" className="text-[#1e40af] font-bold hover:underline">info@tumaci.ba</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;
