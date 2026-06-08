import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Destinations } from './components/Destinations';
import { Deals } from './components/Deals';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#1d4ed8]/20 selection:text-[#1d4ed8] font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Destinations />
        <Deals />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
