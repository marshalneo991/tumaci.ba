import React from 'react';
import { Gavel, Clock, BadgeCheck } from 'lucide-react';

const PricingTariff = () => {
    return (
        <section id="tarifa" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-16">
                    <div className="h-px bg-gray-200 flex-1" />
                    <h2 className="text-3xl font-bold text-primary px-4 uppercase text-center md:text-left">Tarifa Nagrada</h2>
                    <div className="h-px bg-gray-200 flex-1" />
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 mb-12">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="bg-[#1e40af] p-2 rounded-lg text-white">
                                <Gavel size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#1e40af] mb-2 uppercase">Uredba o stalnim sudskim tumačima</h3>
                                <p className="text-[#4b5563] font-medium leading-relaxed">
                                    Prikazane cijene prijevoda i ovjera su podložne izmjenama – u dogovoru sa strankom te su ovisne o količini materijala za prijevod. Popust je moguć u smislu roka plaćanja.
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed italic border-t border-blue-100 pt-4">
                            Cijena prijevoda i ovjera se sastoji od nagrade i nadoknade, odnosno nagrade za rad i nadoknade izgubljene zarade kao i nadoknade za troškove prevođenja. Nagrada za rad sudskog tumača određuje se prema Tarifi nagrada za rad sudskih tumača.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Written Translation */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                                <BadgeCheck className="text-[#1e40af]" size={24} />
                                <h4 className="text-lg font-bold text-[#1e40af] uppercase">Nagrada za prijevod pismena</h4>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <p className="text-xs font-bold text-blue-500 uppercase mb-2">Tarifni broj 1.1</p>
                                    <h5 className="font-bold text-gray-900 mb-3">Službeni jezici BiH → Strani jezik</h5>
                                    <div className="flex justify-between items-center py-2 border-t border-dotted border-gray-200">
                                        <span className="text-sm text-gray-600">Do 15 redova</span>
                                        <span className="font-bold text-[#1e40af]">10,00 KM</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-t border-dotted border-gray-200">
                                        <span className="text-sm text-gray-600">Preko 15 redova (po retku)</span>
                                        <span className="font-bold text-[#1e40af]">0,75 KM</span>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <p className="text-xs font-bold text-blue-500 uppercase mb-2">Tarifni broj 1.2</p>
                                    <h5 className="font-bold text-gray-900 mb-3">Strani jezik → Službeni jezici BiH</h5>
                                    <div className="flex justify-between items-center py-2 border-t border-dotted border-gray-200">
                                        <span className="text-sm text-gray-600">Do 15 redova</span>
                                        <span className="font-bold text-[#1e40af]">8,00 KM</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-t border-dotted border-gray-200">
                                        <span className="text-sm text-gray-600">Preko 15 redova (po retku)</span>
                                        <span className="font-bold text-[#1e40af]">0,75 KM</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Oral Translation */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                                <Clock className="text-[#1e40af]" size={24} />
                                <h4 className="text-lg font-bold text-[#1e40af] uppercase">Nagrada za usmeno prevođenje</h4>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                                <div>
                                    <p className="text-xs font-bold text-blue-500 uppercase mb-2">Tarifni broj 2.</p>
                                    <h5 className="font-bold text-gray-900 mb-4">Simultano i konsekutivno prevođenje</h5>
                                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                        Prevođenje izgovorenog teksta s jednog od službenih jezika na strani jezik i obratno, kao i s jednog stranog jezika na drugi.
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center py-3 bg-blue-50 px-4 rounded-lg">
                                        <span className="text-sm font-bold text-gray-700">Puni sat prevođenja</span>
                                        <span className="font-bold text-[#1e40af]">50,00 KM</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 bg-gray-50 px-4 rounded-lg">
                                        <span className="text-sm font-bold text-gray-700">Započeti sat</span>
                                        <span className="font-bold text-[#1e40af]">30,00 KM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Important Notes */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                            <h5 className="font-bold text-[#1e40af] mb-4 flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                Napomena za pismena
                            </h5>
                            <ul className="space-y-3 text-sm text-gray-600 font-medium">
                                <li className="flex gap-2">
                                    <span>•</span>
                                    <span>Nagrada se računa po redu tipkanog teksta na računaru (započeti red = cijeli red).</span>
                                </li>
                                <li className="flex gap-2">
                                    <span>•</span>
                                    <span>Za složene tekstove nagrada se može povećati do 50%.</span>
                                </li>
                                <li className="flex gap-2 text-blue-600">
                                    <span>•</span>
                                    <span>Za ovjeru već izvršenog prijevoda (druga osoba) plaća se polovina nagrade.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                            <h5 className="font-bold text-[#1e40af] mb-4 flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                Napomena za usmeno
                            </h5>
                            <ul className="space-y-3 text-sm text-gray-600 font-medium">
                                <li className="flex gap-2">
                                    <span>•</span>
                                    <span>U vrijeme se računa period od dolaska tumača na mjesto prevođenja dok ne prestane potreba.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span>•</span>
                                    <span>Troškovi se određuju prema propisima o nadoknadi troškova svjedocima i vještacima.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingTariff;
