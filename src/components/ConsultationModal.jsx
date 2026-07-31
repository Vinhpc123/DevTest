import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, Send, Sparkles, ChevronDown, ShoppingBag, UtensilsCrossed, Store, Check } from 'lucide-react'

export default function ConsultationModal({ lang, t, isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [isSelectOpen, setIsSelectOpen] = useState(false)
  const selectRef = useRef(null)

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    businessType: 'retail',
    note: ''
  })

  // Close custom dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsSelectOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const businessOptions = [
    {
      id: 'retail',
      label: lang === 'vi' ? 'Cửa hàng Bán lẻ / Chuỗi' : 'Retail / Multi-store',
      icon: ShoppingBag
    },
    {
      id: 'restaurant',
      label: lang === 'vi' ? 'Nhà hàng / Cafe / F&B' : 'Restaurant / Cafe / F&B',
      icon: UtensilsCrossed
    },
    {
      id: 'service',
      label: lang === 'vi' ? 'Dịch vụ Spa / Salon / Clinic' : 'Spa / Salon / Clinic',
      icon: Sparkles
    },
    {
      id: 'other',
      label: lang === 'vi' ? 'Mô hình khác' : 'Other Business',
      icon: Store
    }
  ]

  const selectedOption = businessOptions.find(opt => opt.id === formData.businessType) || businessOptions[0]
  const SelectedIcon = selectedOption.icon

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 2500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop with smooth blur fade-in */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Card with spring popup recoil */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.84, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 20 }}
            transition={{ type: "spring", stiffness: 420, damping: 25 }}
            className="relative bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl z-10 border border-gray-100 overflow-visible"
          >
            
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-4"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  className="w-16 h-16 bg-lime-100 text-lime-600 rounded-full flex items-center justify-center mx-auto"
                >
                  <CheckCircle className="w-10 h-10" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {lang === 'vi' ? 'Đăng ký thành công!' : 'Registration Successful!'}
                </h3>
                <p className="text-sm text-gray-600">
                  {lang === 'vi' 
                    ? 'Chuyên viên Qable sẽ liên hệ hỗ trợ tư vấn và cài đặt dùng thử miễn phí trong vòng 5 phút.' 
                    : 'A Qable specialist will contact you for a free consultation and demo setup within 5 minutes.'}
                </p>
              </motion.div>
            ) : (
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-100 text-lime-900 text-xs font-bold mb-3"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'vi' ? 'Dùng thử miễn phí 14 ngày' : '14-Day Free Trial'}</span>
                </motion.div>

                <h3 className="text-2xl font-extrabold text-gray-900">
                  {lang === 'vi' ? 'Đặt Lịch Tư Vấn Qable' : 'Book a Qable Demo'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 mb-6">
                  {lang === 'vi' 
                    ? 'Điền thông tin bên dưới để trải nghiệm ngay giải pháp POS bán hàng thông minh.' 
                    : 'Fill out your info below to experience the smart POS solution.'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      {t?.fullName || 'Họ và tên'} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'vi' ? 'Ví dụ: Nguyễn Văn A' : 'e.g. John Doe'}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#adf035] focus:border-transparent transition-all focus:scale-[1.01]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      {t?.phoneNumber || 'Số điện thoại / Zalo'} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={lang === 'vi' ? 'Ví dụ: 0912 345 678' : 'e.g. +84 912 345 678'}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#adf035] focus:border-transparent transition-all focus:scale-[1.01]"
                    />
                  </div>

                  {/* CUSTOM ANIMATED BUSINESS TYPE SELECT DROPDOWN */}
                  <div className="relative" ref={selectRef}>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      {t?.businessType || 'Mô hình kinh doanh'}
                    </label>

                    {/* Custom Select Trigger Button */}
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => setIsSelectOpen(!isSelectOpen)}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm flex items-center justify-between transition-all bg-white cursor-pointer ${
                        isSelectOpen
                          ? 'border-[#adf035] ring-2 ring-[#adf035] shadow-xs'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 text-gray-900 font-medium">
                        <div className="p-1 rounded-lg bg-lime-100 text-black">
                          <SelectedIcon className="w-4 h-4 text-black" />
                        </div>
                        <span>{selectedOption.label}</span>
                      </div>

                      <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isSelectOpen ? 'rotate-180 text-black' : ''}`} />
                    </motion.button>

                    {/* Custom Select Popup Menu */}
                    <AnimatePresence>
                      {isSelectOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.96 }}
                          transition={{ type: "spring", stiffness: 450, damping: 28 }}
                          className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 p-1.5 overflow-hidden"
                        >
                          {businessOptions.map((opt) => {
                            const Icon = opt.icon
                            const isSelected = formData.businessType === opt.id
                            return (
                              <motion.button
                                key={opt.id}
                                whileHover={{ x: 3, backgroundColor: "rgba(247, 254, 231, 1)" }}
                                whileTap={{ scale: 0.98 }}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, businessType: opt.id })
                                  setIsSelectOpen(false)
                                }}
                                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer text-left ${
                                  isSelected
                                    ? 'bg-[#f7fee7] text-gray-900 font-bold'
                                    : 'text-gray-700 hover:text-black'
                                }`}
                              >
                                <div className="flex items-center gap-2.5">
                                  <div className={`p-1 rounded-lg ${isSelected ? 'bg-[#adf035] text-black' : 'bg-gray-100 text-gray-600'}`}>
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <span>{opt.label}</span>
                                </div>

                                {isSelected && (
                                  <Check className="w-4 h-4 text-lime-700" />
                                )}
                              </motion.button>
                            )
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    type="submit"
                    className="w-full mt-2 py-3 bg-[#adf035] hover:bg-[#9de322] text-black font-bold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{t?.submitBtn || 'Gửi thông tin tư vấn'}</span>
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
