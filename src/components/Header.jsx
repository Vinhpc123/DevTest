import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, ArrowRight, Menu } from 'lucide-react'
import MegaMenu from './MegaMenu'

export default function Header({ lang, setLang, t, onSelectSolution, onOpenMobileMenu, onOpenConsultation }) {
  const [isMegaOpen, setIsMegaOpen] = useState(false)
  const megaRef = useRef(null)

  // Close mega menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (megaRef.current && !megaRef.current.contains(event.target)) {
        setIsMegaOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  // Mouse hover handlers
  const handleMouseEnter = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      setIsMegaOpen(true)
    }
  }

  const handleMouseLeave = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      setIsMegaOpen(false)
    }
  }

  const handleToggleClick = (e) => {
    e.stopPropagation()
    setIsMegaOpen(prev => !prev)
  }

  // Smooth scroll handler with header offset calculation
  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setIsMegaOpen(false)
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
  }

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 lg:gap-6">
          
          {/* Logo - click scrolls smoothly to top */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2 group flex-shrink-0 mr-2 md:mr-3 lg:mr-4 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-[#adf035] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-black text-xl leading-none font-sans">Q</span>
            </div>
            <span className="font-bold text-2xl tracking-tight text-gray-900 font-sans">
              table
            </span>
          </a>

          {/* Desktop & Tablet Navigation Links */}
          <nav className="hidden md:flex items-center gap-3.5 md:gap-4 lg:gap-8 text-xs lg:text-sm font-semibold text-gray-700 whitespace-nowrap">
            
            {/* Solutions item with Mega Menu */}
            <div 
              className="relative py-4" 
              ref={megaRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={handleToggleClick}
                className={`flex items-center gap-1 hover:text-black transition-colors cursor-pointer select-none py-1 ${
                  isMegaOpen ? 'text-black font-semibold' : ''
                }`}
              >
                <span>{t.solutions}</span>
                {isMegaOpen ? (
                  <ChevronUp className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-gray-600 ml-0.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-gray-500 ml-0.5" />
                )}
              </button>

              {/* Mega-menu Popup */}
              <MegaMenu 
                isOpen={isMegaOpen} 
                onClose={() => setIsMegaOpen(false)}
                onSelectSolution={onSelectSolution}
                t={t}
              />
            </div>

            <a 
              href="#equipment" 
              onClick={(e) => handleNavClick(e, '#equipment')}
              className="hover:text-black transition-colors py-1 cursor-pointer"
            >
              {t.equipment}
            </a>

            <a 
              href="#pricing" 
              onClick={(e) => handleNavClick(e, '#pricing')}
              className="hover:text-black transition-colors py-1 cursor-pointer"
            >
              {t.pricing}
            </a>

            <a 
              href="#support" 
              onClick={(e) => handleNavClick(e, '#support')}
              className="hover:text-black transition-colors py-1 cursor-pointer"
            >
              {t.support}
            </a>
          </nav>

          {/* Desktop & Tablet Action Buttons */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 whitespace-nowrap flex-shrink-0">
            
            {/* Language Switcher */}
            <div className="mr-0.5 lg:mr-1">
              {/* Tablet Compact Toggle */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
                className="lg:hidden flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs font-bold text-gray-800 hover:bg-gray-200 transition-colors cursor-pointer"
                title="Switch Language"
              >
                <span>{lang === 'vi' ? '🇻🇳 VIE' : '🇬🇧 ENG'}</span>
              </motion.button>

              {/* Desktop Dual-pill Switcher */}
              <div className="hidden lg:flex bg-gray-100 p-0.5 rounded-full items-center border border-gray-200 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setLang('vi')}
                  className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    lang === 'vi' 
                      ? 'bg-white text-gray-900 shadow-xs' 
                      : 'text-gray-500 hover:text-black'
                  }`}
                >
                  <span>🇻🇳</span>
                  <span>VIE</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    lang === 'en' 
                      ? 'bg-white text-gray-900 shadow-xs' 
                      : 'text-gray-500 hover:text-black'
                  }`}
                >
                  <span>🇬🇧</span>
                  <span>ENG</span>
                </button>
              </div>
            </div>

            {/* Log In Button */}
            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 450, damping: 25 }}
              onClick={onOpenConsultation}
              className="px-3.5 py-1.5 lg:px-4.5 lg:py-2 rounded-full text-xs lg:text-sm font-semibold border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors cursor-pointer shadow-2xs"
            >
              {t.login}
            </motion.button>
            
            {/* Free Trial Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 450, damping: 25 }}
              onClick={onOpenConsultation}
              className="px-4 py-1.5 lg:px-5.5 lg:py-2 rounded-full text-xs lg:text-sm font-bold bg-[#adf035] text-black hover:bg-[#a1e827] transition-colors flex items-center gap-1.5 lg:gap-2 shadow-xs hover:shadow-md cursor-pointer"
            >
              <span>{t.freeTrial}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Mobile Only Hamburger & Language Trigger */}
          <div className="flex md:hidden items-center gap-2">
            
            {/* Mobile Language Pill */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
              className="px-2.5 py-1.5 rounded-xl bg-gray-100 border border-gray-200 text-xs font-extrabold text-gray-800 flex items-center gap-1"
            >
              <span>{lang === 'vi' ? '🇻🇳 VIE' : '🇬🇧 ENG'}</span>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onOpenMobileMenu}
              className="p-2.5 rounded-2xl bg-gray-50 text-gray-800 hover:bg-gray-100 border border-gray-200 transition-colors shadow-2xs cursor-pointer"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>

        </div>
      </div>
    </header>
  )
}
