import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown, ChevronUp, ArrowRight, ShoppingBag, UtensilsCrossed, Sparkles, QrCode } from 'lucide-react'

export default function MobileDrawer({ lang, setLang, t, isOpen, onSelectSolution, onClose, onOpenConsultation }) {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)

  const solutionItems = [
    { tabKey: 'retail', title: t?.megaItem1Title || 'Bán lẻ & Chuỗi cửa hàng', icon: ShoppingBag },
    { tabKey: 'fb', title: t?.megaItem2Title || 'Nhà hàng & F&B', icon: UtensilsCrossed },
    { tabKey: 'service', title: t?.megaItem3Title || 'Dịch vụ & Spa / Salon', icon: Sparkles },
    { tabKey: 'consultation', title: t?.megaItem4Title || 'Tích hợp Thanh toán QR', icon: QrCode },
  ]

  const handleMobileNavClick = (e, targetId) => {
    e.preventDefault()
    onClose()
    setTimeout(() => {
      const el = document.querySelector(targetId)
      if (el) {
        const headerOffset = 90
        const elementPosition = el.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden md:hidden">
          
          {/* Dark backdrop overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={onClose}
          />

          {/* Full screen Drawer panel matching Figma Mobile Menu screenshot */}
          <div className="fixed inset-0 z-50 flex">
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 32 }}
              className="w-full h-full bg-[#f9faf5] shadow-2xl flex flex-col justify-between relative overflow-hidden"
            >
              
              {/* Subtle Organic Wavy Background Accents */}
              <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#e8f5cc] rounded-full blur-3xl pointer-events-none -z-0 opacity-60" />
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#e5f5cc] rounded-full blur-2xl pointer-events-none -z-0 opacity-60" />

              {/* Top Bar inside Mobile Drawer */}
              <div className="p-6 flex items-center justify-between relative z-10 bg-[#f9faf5]">
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); onClose(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-full bg-[#adf035] flex items-center justify-center font-extrabold text-black text-xl shadow-xs">
                    Q
                  </div>
                  <span className="font-bold text-2xl text-gray-900 tracking-tight">table</span>
                </a>

                <div className="flex items-center gap-3">
                  {/* Language Switcher in Mobile Drawer */}
                  <div className="bg-gray-100 p-0.5 rounded-full flex items-center border border-gray-200 shadow-2xs">
                    <button
                      type="button"
                      onClick={() => setLang('vi')}
                      className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        lang === 'vi' 
                          ? 'bg-white text-gray-900 shadow-xs' 
                          : 'text-gray-500 hover:text-black'
                      }`}
                    >
                      🇻🇳 VIE
                    </button>
                    <button
                      type="button"
                      onClick={() => setLang('en')}
                      className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        lang === 'en' 
                          ? 'bg-white text-gray-900 shadow-xs' 
                          : 'text-gray-500 hover:text-black'
                      }`}
                    >
                      🇬🇧 ENG
                    </button>
                  </div>

                  {/* Close Button X in soft rounded pill */}
                  <button
                    onClick={onClose}
                    className="p-2.5 rounded-full bg-[#eee7df]/60 hover:bg-[#e4ded5] text-gray-800 transition-colors shadow-xs cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Nav Items List */}
              <div className="px-6 py-2 overflow-y-auto flex-1 relative z-10">
                
                {/* 1. Solutions Accordion */}
                <div className="border-b border-lime-200/80">
                  <button
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    className="w-full flex items-center justify-between text-lg font-bold text-gray-900 py-4 hover:text-black transition-colors cursor-pointer"
                  >
                    <span>{t.solutions}</span>
                    {isSolutionsOpen ? (
                      <ChevronUp className="w-5 h-5 text-gray-700" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </button>

                  {isSolutionsOpen && (
                    <div className="pb-4 space-y-2 pl-2 animate-in fade-in duration-200">
                      {solutionItems.map((item, idx) => {
                        const Icon = item.icon
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              onClose()
                              if (onSelectSolution) {
                                onSelectSolution(item.tabKey)
                              }
                            }}
                            className="w-full flex items-center gap-3 p-3 rounded-2xl bg-white shadow-xs hover:shadow-md transition-all text-sm font-semibold text-gray-800 border border-lime-100 text-left cursor-pointer"
                          >
                            <div className="p-2 rounded-xl bg-[#adf035] text-black">
                              <Icon className="w-4 h-4" />
                            </div>
                            <span>{item.title}</span>
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>

                {/* 2. Equipment */}
                <div className="border-b border-lime-200/80">
                  <a
                    href="#equipment"
                    onClick={(e) => handleMobileNavClick(e, '#equipment')}
                    className="block text-lg font-bold text-gray-900 py-4 hover:text-black transition-colors cursor-pointer"
                  >
                    {t.equipment}
                  </a>
                </div>

                {/* 3. Pricing */}
                <div className="border-b border-lime-200/80">
                  <a
                    href="#pricing"
                    onClick={(e) => handleMobileNavClick(e, '#pricing')}
                    className="block text-lg font-bold text-gray-900 py-4 hover:text-black transition-colors cursor-pointer"
                  >
                    {t.pricing}
                  </a>
                </div>

                {/* 4. Support */}
                <div className="border-b border-lime-200/80">
                  <a
                    href="#support"
                    onClick={(e) => handleMobileNavClick(e, '#support')}
                    className="block text-lg font-bold text-gray-900 py-4 hover:text-black transition-colors cursor-pointer"
                  >
                    {t.support}
                  </a>
                </div>

              </div>

              {/* Drawer Footer Action Buttons */}
              <div className="p-6 bg-[#f9faf5] space-y-3 relative z-10">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  type="button"
                  onClick={() => { onClose(); onOpenConsultation(); }}
                  className="w-full py-3.5 text-center text-sm font-bold text-gray-800 bg-white border border-gray-200 rounded-full shadow-xs hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  {t.login}
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  type="button"
                  onClick={() => { onClose(); onOpenConsultation(); }}
                  className="w-full py-3.5 text-center text-sm font-extrabold text-black bg-[#adf035] hover:bg-[#a1e827] rounded-full shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>{t.freeTrial}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>

            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}
