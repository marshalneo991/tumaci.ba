import React from 'react';

const steps = [
    {
        title: 'Pošaljite Dokument',
        text: 'Priložite dokument za prevod',
    },
    {
        title: 'Mi Prevodimo',
        text: 'Brza i stručna obrada',
    },
    {
        title: 'Preuzmite Prevode',
        text: 'Isporuka na e-mail ili lično',
    },
];

const HowItWorks = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-16">
                    <div className="h-px bg-gray-200 flex-1" />
                    <h2 className="text-3xl font-bold text-primary px-4 whitespace-nowrap">Kako Funkcioniše?</h2>
                    <div className="h-px bg-gray-200 flex-1" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white p-6 rounded-md shadow-sm border border-gray-100 flex items-center gap-4 text-left group">
                            <div className="w-14 h-14 bg-[#1e40af] text-white rounded-full flex items-center justify-center shrink-0 font-bold text-2xl shadow-inner">
                                {index + 1}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#1e40af]">{step.title}</h3>
                                <p className="text-[#4b5563] text-sm font-medium">{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
