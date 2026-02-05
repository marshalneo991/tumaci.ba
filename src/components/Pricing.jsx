import React from 'react';
import { CheckCircle2, Clock, Zap } from 'lucide-react';

const pricingDetails = [
    { text: 'Ovjereni prevodi već od 30 KM', icon: CheckCircle2 },
    { text: 'Rok isporuke: 24–48h', icon: Clock },
    { text: 'Brzi i povoljni prevodi po dogovoru', icon: Zap },
];

const Pricing = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-primary rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
                    {/* Background Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Cjenik i Rokovi</h2>
                            <p className="text-blue-100 text-lg mb-10 max-w-xl">
                                Nudimo transparentne cijene i brze rokove isporuke. Svaki projekat je specifičan, te vam preporučujemo da nas kontaktirate za preciznu ponudu.
                            </p>
                            <div className="space-y-4">
                                {pricingDetails.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 text-xl font-medium bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                                        <item.icon className="text-accent shrink-0" size={28} />
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-auto">
                            <div className="bg-white p-8 rounded-3xl text-gray-900 shadow-xl">
                                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Brzi proračun</p>
                                <p className="text-4xl font-bold mb-6">Besplatna Procjena</p>
                                <p className="text-gray-600 mb-8">Pošaljite nam dokument i primite neobaveznu ponudu u roku od 30 minuta.</p>
                                <a
                                    href="#kontakt"
                                    className="block w-full text-center bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary-dark transition-all shadow-md"
                                >
                                    Zatraži Ponudu Odmah
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
