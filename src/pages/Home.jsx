import React from 'react';
import Hero from '../components/Hero';
import TickerBar from '../components/TickerBar';
import Features from '../components/Features';
import Stats from '../components/Stats';
import TokensMarket from '../components/TokensMarket';
import CtaSection from '../components/CtaSection';

const Home = () => {
  return (
    <>
      <Hero />
      <TickerBar />
      <Features />
      <Stats />
      <TokensMarket />
      <CtaSection />
    </>
  );
};

export default Home;
