import React from 'react';
import { useForm } from 'react-hook-form';
import { FileUp, ChevronRight, Mail, Phone } from 'lucide-react';

const teamInfo = [
    {
        name: 'Dženan Mukić',
        emails: ['dzenan.mukic@tumaci.ba', 'dzenan.mukic@gmail.com', 'dzenan.mukic@yahoo.com'],
        phone: '+387 62 348 609'
    },
    {
        name: 'Azra Bećirović',
        emails: ['azra.becirovic@tumaci.ba'],
        phone: ''
    },
    {
        name: 'Sanela Šišić',
        emails: ['sanela.sisic@tumaci.ba', 'sanelaf@hotmail.com'],
        phone: '+387 62 940 056'
    }
];

const PricingContact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert('Hvala vam! Vaš zahtjev je zaprimljen.');
    };

    return (
        <section className="py-20 bg-[#f8fbff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left: Pricing details & Contact Info */}
                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-4 mb-10">
                            <h2 className="text-3xl font-bold text-primary shrink-0 uppercase">Kontakt & Cjenik</h2>
                            <div className="h-px bg-gray-200 w-full" />
                        </div>

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
                                            <div className="space-y-1">
                                                {member.emails.map((email, eIdx) => (
                                                    <a key={eIdx} href={`mailto:${email}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
                                                        <Mail size={14} className="shrink-0" />
                                                        {email}
                                                    </a>
                                                ))}
                                                {member.phone && (
                                                    <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
                                                        <Phone size={14} className="shrink-0" />
                                                        {member.phone}
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>


                            {/* FAQ Section Reference */}
                            <div className="mt-16 text-center lg:text-left">
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

                    {/* Right: Contact Form */}
                    <div id="kontakt" className="lg:w-1/2">
                        <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-blue-50 sticky top-24">
                            <h3 className="text-2xl font-bold text-[#1e40af] mb-8 text-center uppercase">Kontaktirajte Nas</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div>
                                    <input
                                        {...register('name', { required: true })}
                                        placeholder="Ime i Prezime"
                                        className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:border-primary transition-all text-sm"
                                    />
                                </div>
                                <div>
                                    <input
                                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                                        placeholder="E-mail"
                                        className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:border-primary transition-all text-sm"
                                    />
                                </div>
                                <div>
                                    <select
                                        {...register('type')}
                                        className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:border-primary bg-white transition-all text-sm text-gray-500"
                                    >
                                        <option value="" disabled selected>Vrsta Prevoda</option>
                                        <option value="ovjereni">Ovjereni Prevod</option>
                                        <option value="neovjereni">Neovjereni Prevod</option>
                                        <option value="usmeno">Usmeno Prevođenje</option>
                                    </select>
                                </div>
                                <div>
                                    <textarea
                                        {...register('message', { required: true })}
                                        rows="4"
                                        placeholder="Poruka"
                                        className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:border-primary transition-all text-sm resize-none"
                                    />
                                </div>
                                <div>
                                    <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50 transition-colors text-sm text-[#1e40af] font-medium">
                                        <FileUp size={18} />
                                        <span>Odaberite dokument</span>
                                        <input type="file" className="hidden" {...register('file')} />
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#40a044] text-white py-3 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-[#368a3a] transition-all shadow-md group"
                                >
                                    Pošaljite
                                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingContact;
