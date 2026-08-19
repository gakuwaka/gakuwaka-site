import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Concept from '@/components/Concept';
import Benefits from '@/components/Benefits';
import Speaker from '@/components/Speaker';
import Program from '@/components/Program';
import Overview from '@/components/Overview';
import Target from '@/components/Target';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concept />
        <Benefits />
        <Speaker />
        <Program />
        <Overview />
        <Target />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
