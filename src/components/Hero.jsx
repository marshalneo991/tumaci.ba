import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero-legal.jpg';

const Hero = () => {
    return (
        <section id="pocetna" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-[#f8fbff] to-[#eef6ff] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 text-center lg:text-left z-10"
                    >
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e40af] leading-[1.2] mb-6 uppercase">
                            Sudski Tumači i Prevoditelji
                        </h1>
                        <div className="text-sm md:text-base text-[#4b5563] mb-8 font-medium space-y-4">
                            <p>
                                “S dugogodišnjim iskustvom više od decenije, specijalizirani smo za prevođenje tekstova sa engleskog jezika i na engleski jezik, te sa francuskog jezika i na francuski jezik. Naša stručnost je prepoznata kroz sudjelovanje u međunarodnim projektima što je rezultiralo nizom preporuka naših klijenata iz različitih grana.
                            </p>
                            <p>
                                Osiguravamo ovjerene prijevode, pružajući Vam sigurnost u kvalitetu. Bez obzira na vrstu Vaše dokumentacije, možete imati povjerenja u nas i potpunu diskreciju. Kontaktirajte nas i zatražite brzu i neobveznu ponudu.”
                            </p>
                        </div>
                        <a
                            href="#kontakt"
                            className="inline-block bg-[#da4444] text-white px-8 py-3 rounded-md font-bold text-md hover:bg-[#c43c3c] transition-all shadow-md"
                        >
                            Zatraži Ponudu
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative"
                    >
                        <div className="relative">
                            <img
                                src={heroImage}
                                alt="Sudski tumač pravni dokumenti"
                                className="w-full h-auto rounded-xl shadow-lg border-4 border-white"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
