import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: 'Šta je sudski tumač?',
        answer: 'Sudski tumač je stručno lice ovlašteno od strane nadležnog suda za prevođenje dokumenata sa jednog jezika na drugi, uz potvrdu da je prevod vjetodostojan originalu. Njihov pečat i potpis daju dokumentu pravnu snagu u inostranstvu i pred domaćim institucijama.',
    },
    {
        question: 'Kako mogu poslati dokumente za prevod?',
        answer: 'Dokumente možete poslati putem naše online forme na web stranici, putem e-maila ili Vibera/WhatsAppa. Dovoljno je uslikati ili skenirati dokumente u visokoj rezoluciji.',
    },
    {
        question: 'Koliko traje izrada prevoda?',
        answer: 'Standardni rok isporuke je 22–48 sati, ovisno o složenosti i dužini teksta. Za hitne slučajeve nudimo i ekspresne prevode istog dana.',
    },
    {
        question: 'Koja je razlika između ovjerenog i neovjerenog prevoda?',
        answer: 'Ovjereni prevod sadrži pečat i potpis sudskog tumača i koristi se za službene svrhe (vize, diplome, ugovori). Neovjereni prevod je namijenjen za informativne svrhe (web stranice, priručnici, dopisivanje) i nema pravnu snagu.',
    },
    {
        question: 'Da li vršite usluge usmenog prevođenja?',
        answer: 'Da, nudimo usluge simultanog i konsekutivnog prevođenja za sastanke, vjenčanja kod matičara, notarske obrade i sudske procese.',
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl border border-blue-50 shadow-sm overflow-hidden transition-all duration-300 hover:border-blue-200"
                >
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex justify-between items-center p-5 text-left focus:outline-none group"
                    >
                        <span className={`text-base font-bold transition-colors ${activeIndex === index ? 'text-[#1e40af]' : 'text-gray-700 group-hover:text-[#1e40af]'}`}>
                            {faq.question}
                        </span>
                        <motion.div
                            animate={{ rotate: activeIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronDown
                                className={`transition-colors ${activeIndex === index ? 'text-[#1e40af]' : 'text-gray-400 group-hover:text-[#1e40af]'}`}
                                size={20}
                            />
                        </motion.div>
                    </button>

                    <AnimatePresence>
                        {activeIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-blue-50/50 pt-4">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
