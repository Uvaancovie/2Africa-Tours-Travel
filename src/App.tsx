import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Destinations } from './components/Destinations';
import { Deals } from './components/Deals';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DetailModal } from './components/DetailModal';
import { Tour, Deal } from './types';

export interface SelectedInquiry {
  type: 'tour' | 'deal' | 'general';
  id: string;
  title: string;
  price: number;
}

export default function App() {
  const [selectedInquiry, setSelectedInquiry] = useState<SelectedInquiry>({
    type: 'general',
    id: '',
    title: '',
    price: 0,
  });

  const [activeDetailItem, setActiveDetailItem] = useState<Tour | Deal | null>(null);

  const handleSelectInquiry = (type: 'tour' | 'deal' | 'general', id: string, title: string, price: number) => {
    setSelectedInquiry({ type, id, title, price });
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const handleBookFromDetail = (item: Tour | Deal) => {
    const isDeal = 'discountedPrice' in item;
    handleSelectInquiry(
      isDeal ? 'deal' : 'tour',
      item.id,
      item.title,
      isDeal ? (item as Deal).discountedPrice : (item as Tour).price || 0
    );
    setActiveDetailItem(null);
  };

  return (
    <div className="min-h-screen bg-white text-blue-955 selection:bg-blue-600/20 selection:text-blue-600 font-sans overflow-x-hidden">
      <Navbar onInquireClick={() => handleSelectInquiry('general', '', 'General Inquiry', 0)} />
      <main>
        <Hero onSearch={(destination, type) => {
          const toursSection = document.getElementById('tours');
          if (toursSection) {
            toursSection.scrollIntoView({ behavior: 'smooth' });
          }
        }} />
        <Features />
        <Destinations onSelectTour={(tour) => setActiveDetailItem(tour)} />
        <Deals onSelectDeal={(deal) => setActiveDetailItem(deal)} />
        <Contact selectedInquiry={selectedInquiry} onInquiryChange={setSelectedInquiry} />
      </main>
      <Footer />

      {/* Dynamic Detail Modal Pages */}
      <AnimatePresence>
        {activeDetailItem && (
          <DetailModal 
            item={activeDetailItem} 
            onClose={() => setActiveDetailItem(null)} 
            onBook={handleBookFromDetail}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
