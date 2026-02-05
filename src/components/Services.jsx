import React from 'react';
import { Gavel, Languages, FileText, FileEdit } from 'lucide-react';

const serviceDetails = [
    {
        title: 'Sudski Tumač',
        icon: Gavel,
        content: [
            'Sudski tumač vrši prevođenje govora i pisanog teksta s jednog od službenih jezika Bosne i Hercegovine, na strani jezik i/ili sa stranog jezika na jedan od službenih jezika Bosne i Hercegovine. Sudski tumač je za ove poslove ovlašten od strane nadležne institucije. Sudski tumač prijevod ovjerava svojim žigom i potpisom te na taj način jamči istovjetnost prijevoda s tekstom izvornika.',
            'Cilj sudskog tumača je izraditi prijevod koji sadržajno, stilski i terminološki u potpunosti odgovara izvornom tekstu. Vrijeme izrade prijevoda zavisi o količini i složenosti teksta koji tumač treba prevesti. Prema redovnoj tarifi sudski tumač može izraditi prijevod 4 kartice teksta sa jezika u službenoj upotrebi u BiH na strani jezik i 6 kartica teksta sa stranog na domaći jezik po danu.'
        ],
    },
    {
        title: 'Pisani Prevod',
        icon: FileText,
        content: [
            'Prevod svih vrsta dokumenata sa ili bez ovjere pečatom sudskog tumača. Ovjereni pisani prijevod je prijevod izvršen od strane sudskog tumača i za čiju istovjetnost izvorniku sudski tumač jamči svojim pečatom i potpisom.',
            'Samo ovjereni prijevod određene javne ili privatne isprave ima dokaznu snagu javne isprave. To znači da svaka isprava / izvornik na stranom jeziku mora biti prevedena i ovjerena od strane sudskog tumača kako bi imala dokaznu snagu u pravnom prometu.'
        ],
    },
    {
        title: 'Usmeni Prevod',
        icon: Languages,
        content: [
            'Vršimo usluge prijenosa verbalne komunikacije sa izvornog jezika. Danas je potreba za usmenim prevođenjem značajno porasla i potrebna je u najrazličitijim segmentima života.',
            'To može biti simultano ili konsekutivno prevođenje. Mi smo također iskusni u usmenom prevođenju putem Zoom, Google Meets i sličnim specifičnim platformama.'
        ],
    },
    {
        title: 'Neovjereni prijevod',
        icon: FileEdit,
        content: [
            'Neovjereni prijevod ne sadrži ovjeru sudskog tumača. Ovo se inače radi u elektroničkom obliku (Microsoft Word Office paket te u nekim slučajevima u PDF formatu). Neovjereni prijevodi izdaju se u papirnatom ili elektroničkom obliku.',
            'Cilj je slijediti izvorni format dokumenta koliko je to moguće. U slučaju posebnih tekstualnih obilježja: slike, grafikoni, sheme, grafika, crteži, fotografije i sl., slijedimo upute u okvirima dozvoljenog. Standardni format je Times New Roman 12 pt; prored – 1.5; numeriranje stranica – dno stranice desno; margine – 2.5 cm. Odstupanja su moguće ako to zahtijeva slijeđenje izvornog teksta.'
        ],
    },
];

const Services = () => {
    return (
        <section id="usluge" className="py-20 bg-[#f8fbff]">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-16">
                    <div className="h-px bg-gray-200 flex-1" />
                    <h2 className="text-3xl font-bold text-primary px-4 uppercase">Naše Usluge</h2>
                    <div className="h-px bg-gray-200 flex-1" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {serviceDetails.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm border border-blue-50 flex flex-col hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-[#1e40af] mb-6">
                                <service.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1e40af] mb-6 border-b border-blue-50 pb-4 uppercase tracking-wide">
                                {service.title}
                            </h3>
                            <div className="space-y-4 text-[#4b5563] text-[15px] leading-relaxed font-medium">
                                {service.content.map((p, pIndex) => (
                                    <p key={pIndex}>{p}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
