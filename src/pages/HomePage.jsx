import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import PricingTariff from '../components/PricingTariff';
import HowItWorks from '../components/HowItWorks';
import Team from '../components/Team';
import Clients from '../components/Clients';
import PricingContact from '../components/PricingContact';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Services />
                <PricingTariff />
                <HowItWorks />
                <Team />
                <Clients />
                <PricingContact />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
