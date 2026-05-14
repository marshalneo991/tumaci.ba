import React from 'react';
import { ChevronRight, Mail, Phone } from 'lucide-react';
import viberIcon from '../assets/viber-icon.png';
import whatsappIcon from '../assets/whatsapp-icon.png';

const teamInfo = [
    {
        name: 'Dženan Mukić',
        emails: ['dzenan.mukic@gmail.com', 'dzenan.mukic@yahoo.com'],
        phone: '+387 62 348 609'
    },
    {
        name: 'Azra Bećirović',
        emails: ['azrabeci1980@gmail.com', 'becirovic.azra@hotmail.com'],
        phone: '+387 61 733 375'
    },
    {
        name: 'Sanela Šišić',
        emails: ['sanelaf@hotmail.com'],
        phone: '+387 62 940 056'
    },
    {
        name: 'Enes Softić',
        emails: ['enes.softic@hotmail.com'],
        phone: '+387 61 43 00 27'
    }
];

const PricingContact = () => {
    return (
        <section id="kontakt" className="py-20 bg-[#f8fbff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-16 items-center">
                    {/* Left: Contact Info */}
                    <div className="w-full max-w-2xl">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-[#1e40af] mb-4 uppercase">Kontaktirajte nas</h3>
                                <p className="text-sm text-[#4b5563] mb-6 font-medium leading-relaxed">
                                    Putem kontakt forme možete nas uvijek jednostavno i brzo kontaktirati iz udobnosti svog doma, ureda ili dok ste na poslovnom putu.
                                </p>

                                <div className="space-y-6">
                                    {teamInfo.map((member, idx) => (
                                        <div key={idx} className="border-l-4 border-primary pl-4 py-1">
                                            <p className="font-bold text-[#1e40af] mb-2">{member.name}:</p>
                                            <div className="space-y-3">
                                                <div className="space-y-1">
                                                    {member.emails.map((email, eIdx) => (
                                                        <a key={eIdx} href={`mailto:${email}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
                                                            <Mail size={14} className="shrink-0" />
                                                            {email}
                                                        </a>
                                                    ))}
                                                </div>

                                                {member.phone && (
                                                    <div className="space-y-2">
                                                        <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors font-medium">
                                                            <Phone size={14} className="shrink-0" />
                                                            {member.phone}
                                                        </a>
                                                        <div className="flex gap-4">
                                                            <a
                                                                href={`https://wa.me/${member.phone.replace(/\+/g, '').replace(/\s/g, '')}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-2 text-[11px] font-bold text-gray-500 hover:text-[#25D366] transition-all group/wa"
                                                            >
                                                                <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4" />
                                                                WhatsApp
                                                            </a>
                                                            <a
                                                                href={`viber://chat?number=%2B${member.phone.replace(/\+/g, '').replace(/\s/g, '')}`}
                                                                className="inline-flex items-center gap-2 text-[11px] font-bold text-gray-500 hover:text-[#7360f2] transition-all group/vb"
                                                            >
                                                                <img src={viberIcon} alt="Viber" className="w-4 h-4" />
                                                                Viber
                                                            </a>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>


                            {/* FAQ Section Reference */}
                            <div className="mt-16 text-center">
                                <h3 className="text-2xl font-bold text-[#1e40af] mb-4 uppercase">Često Postavljena Pitanja</h3>
                                <p className="text-gray-600 mb-6">Pronađite brze odgovore na najčešća pitanja o sudskim tumačima i prevodima.</p>
                                <a
                                    href="/faq"
                                    className="inline-flex items-center gap-2 text-[#1e40af] font-bold border-b-2 border-[#1e40af] pb-1 hover:gap-3 transition-all"
                                >
                                    Pogledajte sva pitanja
                                    <ChevronRight size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingContact;
