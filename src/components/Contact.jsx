import React from 'react';
import { useForm } from 'react-hook-form';
import { Send, UploadCloud, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert('Hvala vam! Vaš zahtjev je zaprimljen. Kontaktirat ćemo vas ubrzo.');
    };

    return (
        <section id="kontakt" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/3">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Kontaktirajte Nas</h2>
                        <p className="text-lg text-gray-600 mb-10">
                            Imate pitanje ili vam je potreban hitan prevod? Naš tim vam stoji na raspolaganju.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">Naša Lokacija</p>
                                    <p className="text-gray-600">Glavna ulica 123, Sarajevo, BiH</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center text-primary shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">Telefon</p>
                                    <p className="text-gray-600">+387 61 000 000</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center text-primary shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">E-mail</p>
                                    <p className="text-gray-600">info@tumaci.ba</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/3">
                        <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Ime i Prezime</label>
                                        <input
                                            {...register('name', { required: true })}
                                            placeholder="npr. Marko Marković"
                                            className={`w-full p-4 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">E-mail</label>
                                        <input
                                            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                                            placeholder="vas@email.com"
                                            className={`w-full p-4 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Vrsta prevoda</label>
                                    <select
                                        {...register('type')}
                                        className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white transition-all appearance-none"
                                    >
                                        <option value="ovjereni">Ovjereni Prevod</option>
                                        <option value="neovjereni">Neovjereni Prevod</option>
                                        <option value="usmeno">Usmeno Prevođenje</option>
                                        <option value="ostalo">Ostalo</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Poruka</label>
                                    <textarea
                                        {...register('message', { required: true })}
                                        rows="4"
                                        placeholder="Opišite vaše potrebe..."
                                        className={`w-full p-4 rounded-xl border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                                    />
                                </div>

                                <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-primary transition-colors cursor-pointer group relative">
                                    <input
                                        type="file"
                                        {...register('file')}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                    <UploadCloud className="mx-auto text-gray-400 group-hover:text-primary mb-4 transition-colors" size={48} />
                                    <p className="font-bold text-gray-900 mb-1">Upload dokumenta</p>
                                    <p className="text-sm text-gray-500">Kliknite ili prevucite fajl ovdje (PDF, JPG, DOCX)</p>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl group"
                                >
                                    Pošaljite Zahtjev
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
