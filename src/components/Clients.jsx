import React from 'react';
import { motion } from 'framer-motion';

const clients = [
    { name: 'LegalCorp BiH', logo: '🏛️' },
    { name: 'Sarajevo Insurance', logo: '🛡️' },
    { name: 'EuroTrans d.o.o.', logo: '🚛' },
    { name: 'Global Tech Solution', logo: '💻' },
    { name: 'Banka Federacije', logo: '🏦' },
    { name: 'International Law Firm', logo: '⚖️' },
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
                            x: [0, -1920], // Adjusted based on approximate width
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedClients.map((client, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-64 h-32 bg-[#f8fbff] rounded-xl border border-blue-50 flex flex-col items-center justify-center gap-2 p-6 transition-all hover:shadow-md hover:border-primary/20 cursor-default grayscale hover:grayscale-0"
                            >
                                <div className="text-4xl grayscale-0">{client.logo}</div>
                                <span className="text-[#1e40af] font-bold text-sm text-center">{client.name}</span>
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
