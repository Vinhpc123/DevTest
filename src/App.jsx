import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import EverythingYouNeedTabs from './components/EverythingYouNeedTabs'
import EquipmentSection from './components/EquipmentSection'
import PricingSection from './components/PricingSection'
import SupportSection from './components/SupportSection'
import MobileDrawer from './components/MobileDrawer'
import ConsultationModal from './components/ConsultationModal'
import Footer from './components/Footer'
import { translations } from './locales/translations'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)
  const [lang, setLang] = useState('vi')
  const [activeTab, setActiveTab] = useState('fb')

  const t = translations[lang] || translations.vi

  // Smooth scroll to solutions section with header offset subtraction
  const handleSelectSolution = (tabId) => {
    if (tabId === 'consultation') {
      setIsConsultationModalOpen(true)
      return
    }

    // 1. Immediately switch active tab
    setActiveTab(tabId)

    // 2. Perform smooth scroll with header offset
    const scrollToTarget = () => {
      const el = document.getElementById('solutions')
      if (el) {
        const headerOffset = 90
        const elementPosition = el.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }

    // Execute scroll immediately and set fallback timer
    scrollToTarget()
    setTimeout(scrollToTarget, 60)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 flex flex-col font-sans selection:bg-[#adf035] selection:text-black">
      {/* 1. Header & Mega-menu */}
      <Header 
        lang={lang}
        setLang={setLang}
        t={t}
        onSelectSolution={handleSelectSolution}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero 
          lang={lang}
          t={t}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />

        {/* 3. Interactive Tabs Section ("Everything You Need") */}
        <EverythingYouNeedTabs 
          lang={lang}
          t={t}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />

        {/* 4. Equipment Section (#equipment) */}
        <EquipmentSection 
          lang={lang}
          t={t}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />

        {/* 5. Pricing Section (#pricing) */}
        <PricingSection 
          lang={lang}
          t={t}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />

        {/* 6. Support Section (#support) */}
        <SupportSection 
          lang={lang}
          t={t}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer 
        lang={lang}
        t={t}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      {/* Mobile Menu Drawer */}
      <MobileDrawer 
        lang={lang}
        setLang={setLang}
        t={t}
        isOpen={isMobileMenuOpen}
        onSelectSolution={handleSelectSolution}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      {/* Consultation & Trial Pop-up Modal */}
      <ConsultationModal 
        lang={lang}
        t={t}
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </div>
  )
}

export default App
