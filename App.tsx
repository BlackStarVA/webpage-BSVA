import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import ClientPortal from './pages/ClientPortal';
import AssistantPortal from './pages/AssistantPortal';
import Careers from './pages/Careers';
import Payment from './pages/Payment';
import Contact from './pages/Contact';
import TermsOfService from './pages/TermsOfService';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IntakeFormModal from './components/IntakeFormModal';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-black text-white">
        <Navbar onBookNow={openModal} />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home onBookNow={openModal} />} />
            <Route path="/services" element={<Services onBookNow={openModal} />} />
            <Route path="/bookkeeping" element={<Services onBookNow={openModal} />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing onBookNow={openModal} />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/portal" element={<ClientPortal />} />
            <Route path="/assistant" element={<AssistantPortal />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/pay" element={<Payment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
        <IntakeFormModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </Router>
  );
};

export default App;