import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import heroBgImg from '../assets/hero-bg.png'

export default function Hero({ lang, t, onOpenConsultation }) {
  const [activeSlide, setActiveSlide] = useState(0)

  // Carousel slide content for all 4 slides
  const slides = [
    {
      id: 0,
      titleLine1: t.headlineLine1,
      titleLine2: t.headlineLine2,
      desc: t.heroDesc,
      tag: "Qable POS Platform"
    },
    {
      id: 1,
      titleLine1: lang === 'vi' ? "Giải pháp F&B," : "F&B & Dining,",
      titleLine2: lang === 'vi' ? "tối ưu vận hành nhà hàng" : "optimized restaurant operations",
      desc: lang === 'vi' 
        ? "Gọi món tại bàn, in phiếu chế biến nhà bếp tức thì, quản lý bàn và doanh thu nguyên vật liệu chính xác."
        : "Table ordering, instant kitchen ticket printing, table layout management, and accurate inventory tracking.",
      tag: "F&B & Dining Solution"
    },
    {
      id: 2,
      titleLine1: lang === 'vi' ? "Quản lý Bán lẻ," : "Retail Management,",
      titleLine2: lang === 'vi' ? "quét mã vạch 1 giây" : "1-second barcode checkout",
      desc: lang === 'vi'
        ? "Kiểm soát tồn kho theo màu sắc/size số, in tem mã vạch và quản lý chuỗi cửa hàng thông minh."
        : "Manage variants (color/size), print barcode labels, and control multi-store inventory seamlessly.",
      tag: "Retail & Multi-Store POS"
    },
    {
      id: 3,
      titleLine1: lang === 'vi' ? "Dịch vụ & Spa," : "Spa & Beauty Services,",
      titleLine2: lang === 'vi' ? "đặt lịch hẹn tự động" : "automated booking & care",
      desc: lang === 'vi'
        ? "Quản lý lịch hẹn online, sắp xếp giường/kỹ thuật viên và theo dõi liệu trình chăm sóc khách hàng."
        : "Online appointment booking, therapist scheduling, and customer therapy session tracking.",
      tag: "Spa & Salon Management"
    }
  ]

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const currentSlide = slides[activeSlide] || slides[0]

  return (
    <section className="pt-0 pb-8 sm:pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            DESKTOP & TABLET HERO CONTAINER (Visible on sm and up, e.g. iPad 768px)
           ========================================================================= */}
        <div className="hidden sm:flex relative w-full max-w-[1340px] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-slate-100 mx-auto aspect-[1340/650] items-center shadow-xs">
          
          {/* Full Figma 1340x650 Background Image Asset */}
          <img
            src={heroBgImg}
            alt="Qable POS Hero Banner 1340x650"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
          />

          {/* Left Text & CTA Overlay matching Figma Layout */}
          <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 lg:py-8">
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeSlide}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="max-w-[50%] sm:max-w-[48%] lg:max-w-xl space-y-2 sm:space-y-3 lg:space-y-5"
              >
                {/* Logo Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 shadow-xs border border-lime-300">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#adf035] flex items-center justify-center font-extrabold text-black text-xs">
                    Q
                  </div>
                  <span className="font-bold text-xs sm:text-sm text-gray-900 font-sans">table</span>
                </div>

                {/* Headline */}
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.18]">
                  {currentSlide.titleLine1} <br />
                  {currentSlide.titleLine2}
                </h1>

                {/* Subheading text */}
                <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-gray-600 font-medium leading-relaxed max-w-xs md:max-w-sm lg:max-w-md">
                  {currentSlide.desc}
                </p>

                {/* Single Dark Charcoal Pill Button: Đặt lịch tư vấn / Book a Demo -> */}
                <div className="pt-1 sm:pt-2">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={onOpenConsultation}
                    className="px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full bg-[#292c31] text-white font-bold text-xs sm:text-sm hover:bg-black transition-all inline-flex items-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>{t.bookConsultation}</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

        {/* =========================================================================
            MOBILE HERO CONTAINER (Single Continuous Card matching Figma Screenshot)
           ========================================================================= */}
        <div className="sm:hidden block">
          
          {/* Single Continuous Outer Card */}
          <div className="bg-[#f8fbf4] rounded-[28px] sm:rounded-[32px] overflow-hidden border border-lime-100/60 shadow-xs">
            
            {/* Top Image Portion */}
            <div 
              className="relative w-full h-[260px] sm:h-[300px] overflow-hidden bg-no-repeat bg-[#eef7de]"
              style={{
                backgroundImage: `url(${heroBgImg})`,
                backgroundSize: '190%',
                backgroundPosition: '100% 50%'
              }}
            >
              {/* Soft gradient mask at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#f8fbf4] to-transparent pointer-events-none" />
            </div>

            {/* Bottom Text Content Portion */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={`mobile-${activeSlide}`}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
                className="p-6 pt-2 space-y-4"
              >
                {/* Logo Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-xs border border-lime-200">
                  <div className="w-5 h-5 rounded-full bg-[#adf035] flex items-center justify-center font-extrabold text-black text-xs">
                    Q
                  </div>
                  <span className="font-bold text-xs text-gray-900 font-sans">table</span>
                </div>

                {/* Headline */}
                <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  {currentSlide.titleLine1}<br />{currentSlide.titleLine2}
                </h1>

                {/* Subheading text */}
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {currentSlide.desc}
                </p>

                {/* Single Dark Charcoal Pill Button */}
                <div className="pt-2">
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={onOpenConsultation}
                    className="w-full px-6 py-3.5 rounded-full bg-[#292c31] text-white font-bold text-sm hover:bg-black transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <span>{t.bookConsultation}</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

        {/* =========================================================================
            SLIDER PAGINATION INDICATORS (4 Interactive Clickable & Animated Bars)
           ========================================================================= */}
        <div className="flex items-center justify-center gap-2 pt-5">
          {slides.map((slide, index) => {
            const isActive = activeSlide === index
            return (
              <motion.button
                key={slide.id}
                onClick={() => setActiveSlide(index)}
                animate={{
                  width: isActive ? 40 : 24,
                  backgroundColor: isActive ? "#292c31" : "#e5e7eb"
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="h-1.5 rounded-full cursor-pointer"
                title={`Switch to Slide ${index + 1}`}
                aria-label={`Slide ${index + 1}`}
              />
            )
          })}
        </div>

      </div>
    </section>
  )
}
