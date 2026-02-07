import React from 'react';
import { motion } from 'framer-motion';

import TamexLogo from '../assets/Tamex.png';
import TuristickaZajednicaTK from '../assets/TuristickaZajednicaTK.png';
import TQMLogo from '../assets/tqm.png';
import OpcinskiSudLogo from '../assets/OpcinskiSud.png';
import FehrijaHusicSuljkanovicLogo from '../assets/FehrijaHusicSuljkanovic.png';
import TalentConnectHubLogo from '../assets/talentconnecthubg.png';
import EntakorSolutionsLogo from '../assets/entakor.logo.svg';
import TuzlaInternationalAirportLogo from '../assets/airport-logo.png';
import AdvokatAdnanMalkicLogo from '../assets/advokatlogo.png';
import AdvokatZurijetaSalkanovicLogo from '../assets/advokatlogo.png';



const clients = [
    { name: 'Tamex d.o.o', logo: TamexLogo, isImage: true },
    { name: 'Turistička Zajednica TK', logo: TuristickaZajednicaTK, isImage: true },
    { name: 'TQM', logo: TQMLogo, isImage: true },
    { name: 'Općinski sud u Živinicama', logo: OpcinskiSudLogo, isImage: true },
    { name: 'Fehrija Husić Suljkanović', logo: FehrijaHusicSuljkanovicLogo, isImage: true },
    { name: 'Talent Connect hub', logo: TalentConnectHubLogo, isImage: true },
    { name: 'Paprika Group d.o.o', logo: '' },
    { name: 'Entakor Solutions', logo: EntakorSolutionsLogo, isImage: true },
    { name: 'Tuzla International Airport', logo: TuzlaInternationalAirportLogo, isImage: true },
    { name: 'Advokat Adnan Malkić', logo: AdvokatAdnanMalkicLogo, isImage: true },
    { name: 'Advokat Zurijeta Salkanović', logo: AdvokatZurijetaSalkanovicLogo, isImage: true },
];

const Clients = () => {
    // Duplicate clients for seamless loop
    const duplicatedClients = [...clients, ...clients, ...clients];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-16">
                    <div className="h-px bg-gray-200 flex-1" />
                    <h2 className="text-3xl font-bold text-primary px-4 uppercase whitespace-nowrap">Naši Klijenti</h2>
                    <div className="h-px bg-gray-200 flex-1" />
                </div>

                <div className="relative flex overflow-hidden">
                    <motion.div
                        className="flex gap-8 py-4"
                        animate={{
                            x: [0, -3168], // Adjusted based on approximate width (11 clients * 288px)
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 66, // Slower duration for more items
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedClients.map((client, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-64 h-32 bg-primary-dark rounded-xl border border-white/10 flex flex-col items-center justify-center gap-2 p-6 shadow-md cursor-default"
                            >
                                {client.isImage ? (
                                    <div className="h-16 flex items-center justify-center grayscale-0">
                                        <img src={client.logo} alt={client.name} className="max-h-full max-w-full object-contain" />
                                    </div>
                                ) : (
                                    <div className="text-4xl grayscale-0">{client.logo}</div>
                                )}
                                <span className="text-white font-bold text-sm text-center">{client.name}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Gradient Overlays for smooth edges */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
                </div>
            </div>
        </section>
    );
};

export default Clients;
