import React from 'react';
import { Mail, Phone, Facebook, Linkedin, Instagram, User } from 'lucide-react';
import viberIcon from '../assets/viber-icon.png';
import whatsappIcon from '../assets/whatsapp-icon.png';

const members = [
    {
        name: 'Dženan Mukić',
        role: 'Sudski tumač za engleski jezik',
        emails: ['dzenan.mukic@gmail.com', 'dzenan.mukic@yahoo.com'],
        phone: '+387 62 348 609',
        gender: 'm',
        social: {
            facebook: 'https://www.facebook.com/dzenan.mukic',
            linkedin: 'https://ba.linkedin.com/in/dzenan-mukic-31843b38'
        },
    },
    {
        name: 'Azra Bećirović',
        role: 'Sudski tumač za engleski jezik',
        emails: ['azrabeci1980@gmail.com', 'becirovic.azra@hotmail.com'],
        phone: '+387 61 733 375',
        gender: 'f',
        social: {
            facebook: 'https://bs-ba.facebook.com/azra.becirovic'
        },
    },
    {
        name: 'Sanela Šišić',
        role: 'Sudski tumač za francuski jezik',
        emails: ['sanelaf@hotmail.com'],
        phone: '+387 62 940 056',
        gender: 'f',
        social: {
            instagram: 'https://www.instagram.com/tumacfrancuski/'
        },
    },
];

const Team = () => {
    return (
        <section id="o-nama" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Team Section First */}
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-3xl font-bold text-primary shrink-0 uppercase">Naš Tim</h2>
                    <div className="h-px bg-gray-200 w-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {members.map((member, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group">
                            <div className="h-64 bg-slate-50 flex items-center justify-center relative overflow-hidden">
                                <User
                                    size={120}
                                    strokeWidth={1}
                                    className="text-slate-200 group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 to-transparent" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        {member.emails.map((email) => (
                                            <a key={email} href={`mailto:${email}`} className="flex items-center gap-2 text-xs text-gray-600 hover:text-primary transition-colors">
                                                <Mail size={14} />
                                                {email}
                                            </a>
                                        ))}
                                    </div>

                                    {member.phone && (
                                        <div className="space-y-2 pt-2 border-t border-gray-50">
                                            <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-xs text-gray-600 hover:text-primary transition-colors mb-2">
                                                <Phone size={14} />
                                                {member.phone}
                                            </a>
                                            <div className="flex flex-wrap gap-4">
                                                <a
                                                    href={`https://wa.me/${member.phone.replace(/\+/g, '').replace(/\s/g, '')}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-[11px] font-bold text-gray-500 hover:text-[#25D366] transition-all group/wa"
                                                >
                                                    <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 group-hover/wa:scale-110 transition-transform" />
                                                    WhatsApp
                                                </a>
                                                <a
                                                    href={`viber://chat?number=%2B${member.phone.replace(/\+/g, '').replace(/\s/g, '')}`}
                                                    className="inline-flex items-center gap-2 text-[11px] font-bold text-gray-500 hover:text-[#7360f2] transition-all group/vb"
                                                >
                                                    <img src={viberIcon} alt="Viber" className="w-5 h-5 group-hover/vb:scale-110 transition-transform" />
                                                    Viber
                                                </a>
                                            </div>
                                        </div>
                                    )}

                                    {member.social && (
                                        <div className="flex gap-3 pt-4 border-t border-gray-50">
                                            {member.social.facebook && (
                                                <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                                                    <Facebook size={20} fill="currentColor" strokeWidth={0} />
                                                </a>
                                            )}
                                            {member.social.linkedin && (
                                                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                                                    <Linkedin size={20} fill="currentColor" strokeWidth={0} />
                                                </a>
                                            )}
                                            {member.social.instagram && (
                                                <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                                                    <Instagram size={20} strokeWidth={2} />
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* About Section Second */}
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-3xl font-bold text-primary shrink-0 uppercase">O Nama</h2>
                    <div className="h-px bg-gray-200 w-full" />
                </div>

                <div className="max-w-4xl mb-16">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                        Više od decenije smo posvećeni prevođenju tekstova sa engleskog jezika i na engleski jezik te sa francuskog jezika i na francuski jezik.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        U našem portfoliju imamo i pisane i usmene prevode za sud, priličan broj stranica neovjerenih prevoda kao i sati usmenog konsekutivnog prevođenja/tumačenja.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-16 text-center md:text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#1e40af] uppercase tracking-wide">Misija</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            Naša misija je pružanje vrhunskih prevoda klijentima, sa ili bez pečata sudskog tumača.
                        </p>
                    </div>
                    <div className="space-y-4 border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-8">
                        <h3 className="text-xl font-bold text-[#1e40af] uppercase tracking-wide">Vizija</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            Naša vizija je ostvarivanje visokog ugleda kod klijenata.
                        </p>
                    </div>
                    <div className="space-y-4 border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-8">
                        <h3 className="text-xl font-bold text-[#1e40af] uppercase tracking-wide">Naše mogućnosti</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            Usluge dogovaramo u okviru naših sposobnosti posebno u smislu vremena koje možemo posvetiti svakom pojedinom projektu.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
