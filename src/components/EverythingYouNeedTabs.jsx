import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import tabFbImg from '../assets/tab-fb.png'
import tabRetailImg from '../assets/tab-retail.png'
import tabServiceImg from '../assets/tab-service.png'

// Exact SVG Icon for food > Vector (Cloche Dome + Handle + Base Plate)
function FoodIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2a1.5 1.5 0 0 1 1.5 1.5V5c3.87.41 7 3.65 7 7.5v1H3.5v-1c0-3.85 3.13-7.09 7-7.5V3.5A1.5 1.5 0 0 1 12 2zm-9 14h18a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
    </svg>
  )
}

// Exact SVG Icon for shopping > Vector (Shopping Bag with Loop Handle)
function RetailBagIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M19 6h-3c0-2.21-1.79-4-4-4S8 3.79 8 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5h2c0 .28.22.5.5.5s.5-.22.5-.5h2c0 1.38-1.12 2.5-2.5 2.5z" />
    </svg>
  )
}

// Exact SVG Icon for Chair > Vector (Exact L-shaped Side Profile Armchair)
function ServiceChairIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M7.5 3H8a1.5 1.5 0 0 1 1.5 1.5V13h8a2.5 2.5 0 0 1 2.5 2.5v.5a2.5 2.5 0 0 1-2.5 2.5H8.5A3.5 3.5 0 0 1 5 15V4.5A1.5 1.5 0 0 1 6.5 3h1z" />
    </svg>
  )
}

export default function EverythingYouNeedTabs({ 
  lang, 
  t, 
  activeTab: controlledActiveTab, 
  setActiveTab: setControlledActiveTab, 
  onOpenConsultation 
}) {
  const [internalActiveTab, setInternalActiveTab] = useState('fb')
  const [activeSubItem, setActiveSubItem] = useState(0)
  const [isMobileTabDropdownOpen, setIsMobileTabDropdownOpen] = useState(false)
  const [isMobileSubDropdownOpen, setIsMobileSubDropdownOpen] = useState(false)
  
  const tabDropdownRef = useRef(null)
  const subDropdownRef = useRef(null)

  // Use controlled active tab if provided by parent App component
  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab

  // Reset active sub-item to 0 whenever main tab changes
  useEffect(() => {
    setActiveSubItem(0)
  }, [activeTab])

  // Close mobile dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (tabDropdownRef.current && !tabDropdownRef.current.contains(event.target)) {
        setIsMobileTabDropdownOpen(false)
      }
      if (subDropdownRef.current && !subDropdownRef.current.contains(event.target)) {
        setIsMobileSubDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const data = {
    fb: {
      id: 'fb',
      label: t.tabFb,
      icon: FoodIcon,
      isNew: false,
      subItems: [
        {
          title: lang === 'vi' ? 'Quán cà phê' : 'Coffee Shop',
          desc: lang === 'vi' 
            ? 'Qtable POS giúp order nhanh, chọn size/topping, in phiếu bar và quản lý mang đi/ngồi lại hiệu quả.' 
            : 'Qtable POS enables fast ordering, size/topping customization, bar ticket printing, and takeout/dine-in management.',
          img: tabFbImg
        },
        {
          title: lang === 'vi' ? 'Quán ăn / nhà hàng' : 'Restaurant & Dining',
          desc: lang === 'vi'
            ? 'Quản lý sơ đồ bàn trực quan, gọi món tại bàn qua tablet, tự động in phiếu chế biến xuống nhà bếp.'
            : 'Visual table management, tablet order taking, and automatic kitchen order ticket printing.',
          img: tabFbImg
        },
        {
          title: lang === 'vi' ? 'Quán bar / lounge / pub' : 'Bar, Lounge & Pub',
          desc: lang === 'vi'
            ? 'Quản lý pha chế, tách gộp hóa đơn linh hoạt và kiểm soát doanh thu nguyên vật liệu rượu/nước.'
            : 'Mixology management, flexible bill splitting, and liquor inventory tracking.',
          img: tabFbImg
        },
        {
          title: lang === 'vi' ? 'Quán ăn di động' : 'Food Truck & Mobile',
          desc: lang === 'vi'
            ? 'Bán hàng siêu tốc trên thiết bị POS cầm tay gọn nhẹ, tích hợp thanh toán mã QR chuyển khoản.'
            : 'High-speed sales on handheld POS devices with integrated QR code payments.',
          img: tabFbImg
        },
        {
          title: lang === 'vi' ? 'Tiệm trà sữa' : 'Boba & Tea Shop',
          desc: lang === 'vi'
            ? 'Tùy chỉnh topping, mức đường/đá cực nhanh, in tem nhãn dán ly trà sữa tự động.'
            : 'Fast topping & sugar/ice level selection, with automatic cup label printing.',
          img: tabFbImg
        },
        {
          title: lang === 'vi' ? 'Tiệm bánh' : 'Bakery & Pastry',
          desc: lang === 'vi'
            ? 'Quản lý hạn sử dụng bánh tươi, combo bánh & nước uống và tích điểm thành viên thân thiết.'
            : 'Fresh bakery shelf-life tracking, pastry combos, and customer loyalty rewards.',
          img: tabFbImg
        }
      ]
    },
    retail: {
      id: 'retail',
      label: t.tabRetail,
      icon: RetailBagIcon,
      isNew: true,
      subItems: [
        {
          title: lang === 'vi' ? 'Cửa hàng thời trang & Giày dép' : 'Fashion & Footwear Store',
          desc: lang === 'vi'
            ? 'Quản lý tồn kho theo màu sắc, size số, in tem mã vạch và thanh toán quét mã vạch 1 giây.'
            : 'Variant inventory management (color/size), barcode label printing, and 1-second barcode checkout.',
          img: tabRetailImg
        },
        {
          title: lang === 'vi' ? 'Siêu thị mini & Tạp hóa' : 'Mini Mart & Grocery',
          desc: lang === 'vi'
            ? 'Kiểm soát hàng ngàn mã hàng, cảnh báo tồn kho sắp hết và đồng bộ doanh thu tức thì.'
            : 'Manage thousands of SKUs, low-stock warnings, and real-time revenue syncing.',
          img: tabRetailImg
        },
        {
          title: lang === 'vi' ? 'Mỹ phẩm & Phụ kiện' : 'Cosmetics & Accessories',
          desc: lang === 'vi'
            ? 'Quản lý lô hàng, hạn sử dụng, tích điểm thưởng và gửi ưu đãi chăm sóc khách hàng.'
            : 'Batch & expiration tracking, reward points, and automated customer marketing.',
          img: tabRetailImg
        },
        {
          title: lang === 'vi' ? 'Cửa hàng mẹ & bé' : 'Baby & Kids Boutique',
          desc: lang === 'vi'
            ? 'Bán hàng theo gói quà tặng, combo khuyến mãi và quản lý lịch sử mua sắm của từng khách.'
            : 'Gift sets, promotional combos, and detailed customer purchase history.',
          img: tabRetailImg
        }
      ]
    },
    service: {
      id: 'service',
      label: t.tabService,
      icon: ServiceChairIcon,
      isNew: true,
      subItems: [
        {
          title: lang === 'vi' ? 'Spa & Thẩm mỹ viện' : 'Spa & Beauty Clinic',
          desc: lang === 'vi'
            ? 'Quản lý lịch hẹn online, sắp xếp giường/kỹ thuật viên và theo dõi thẻ liệu trình khách hàng.'
            : 'Online appointment booking, bed/therapist scheduling, and session card tracking.',
          img: tabServiceImg
        },
        {
          title: lang === 'vi' ? 'Salon tóc & Nail boutique' : 'Hair Salon & Nail Studio',
          desc: lang === 'vi'
            ? 'Tính hoa hồng nhân viên theo dịch vụ, nhắc lịch tái hẹn tự động qua Zalo/SMS.'
            : 'Staff commission calculations and automated appointment reminders via Zalo/SMS.',
          img: tabServiceImg
        },
        {
          title: lang === 'vi' ? 'Phòng khám & Clinic' : 'Medical Clinic & Care',
          desc: lang === 'vi'
            ? 'Quản lý hồ sơ trị liệu, lịch tái khám và kê đơn vật tư y tế chính xác.'
            : 'Treatment records, follow-up visit scheduling, and medical supply tracking.',
          img: tabServiceImg
        }
      ]
    }
  }

  const currentTab = data[activeTab] || data.fb
  const currentSub = currentTab.subItems[activeSubItem] || currentTab.subItems[0]

  const handleTabSwitch = (tabId) => {
    if (setControlledActiveTab) {
      setControlledActiveTab(tabId)
    }
    setInternalActiveTab(tabId)
    setActiveSubItem(0)
    setIsMobileTabDropdownOpen(false)
  }

  return (
    <section id="solutions" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badge: LONG SUBTITLE */}
        <div className="flex justify-center mb-3 sm:mb-4">
          <span className="px-4 py-1 rounded-full bg-[#adf035] text-black font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider shadow-xs">
            {t.longSubtitle}
          </span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            {t.everythingYouNeed}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t.tabsIntro}
          </p>
        </div>

        {/* Main Beige Container */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#f0f4ea] pt-20 sm:pt-24 lg:pt-28 pb-8 px-5 sm:px-10 lg:px-12 overflow-hidden shadow-xs">
          
          {/* Subtle Grid Lines Pattern Overlay */}
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#84cc16_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          {/* Integrated White Notched Tab Header */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
            
            {/* White Notched Tab Header Container */}
            <div className="relative bg-white px-3 sm:px-6 py-2 sm:py-2.5 rounded-b-2xl sm:rounded-b-[24px] flex items-center gap-2 sm:gap-3">
              
              {/* Left Inverted Concave Corner */}
              <div className="absolute top-0 -left-4 w-4 h-4 bg-transparent rounded-tr-2xl shadow-[4px_-4px_0_0_#ffffff] pointer-events-none" />

              {/* Mobile Custom Tab Pill Dropdown */}
              <div className="sm:hidden relative" ref={tabDropdownRef}>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={() => setIsMobileTabDropdownOpen(!isMobileTabDropdownOpen)}
                  className="flex items-center gap-2 bg-[#2a2d32] text-white text-xs font-bold py-2 px-4 rounded-full shadow-xs cursor-pointer min-w-[210px] justify-between"
                >
                  <div className="flex items-center gap-2">
                    {activeTab === 'fb' && <FoodIcon className="w-4 h-4 text-white" />}
                    {activeTab === 'retail' && <RetailBagIcon className="w-4 h-4 text-white" />}
                    {activeTab === 'service' && <ServiceChairIcon className="w-4 h-4 text-white" />}

                    <span>{currentTab.label}</span>

                    {currentTab.isNew && (
                      <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-[#adf035] text-black">
                        {t.badgeNew}
                      </span>
                    )}
                  </div>

                  <ChevronDown className={`w-3.5 h-3.5 text-white transition-transform ${isMobileTabDropdownOpen ? 'rotate-180' : ''}`} />
                </motion.button>

                {/* Custom Styled Mobile Dropdown Menu Popup */}
                <AnimatePresence>
                  {isMobileTabDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 6, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.96 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-[#2a2d32] rounded-2xl shadow-xl border border-gray-700/60 overflow-hidden z-50 p-1"
                    >
                      {Object.values(data).map((tab) => {
                        const Icon = tab.icon
                        const isActive = activeTab === tab.id
                        return (
                          <button
                            key={tab.id}
                            onClick={() => handleTabSwitch(tab.id)}
                            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                              isActive
                                ? 'bg-white/15 text-white'
                                : 'text-gray-200 hover:bg-white/10'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <Icon className="w-4 h-4 text-white" />
                              <span>{tab.label}</span>
                            </div>

                            {tab.isNew && (
                              <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-[#adf035] text-black">
                                {t.badgeNew}
                              </span>
                            )}
                          </button>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Desktop & Tablet Tabs List (With framer-motion layoutId pill spring animation) */}
              <div className="hidden sm:flex items-center gap-2 whitespace-nowrap">
                {Object.values(data).map((tab) => {
                  const Icon = tab.icon
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabSwitch(tab.id)}
                      className={`relative flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-900 hover:bg-gray-100/80'
                      }`}
                    >
                      {/* Animated Spring Active Pill Background */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTabPill"
                          className="absolute inset-0 bg-[#2a2d32] rounded-full shadow-sm"
                          transition={{ type: "spring", stiffness: 450, damping: 32 }}
                        />
                      )}

                      <span className="relative z-10 flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-900'}`} />
                        <span>{tab.label}</span>
                        
                        {tab.isNew && (
                          <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-[#adf035] text-black ml-1">
                            {t.badgeNew}
                          </span>
                        )}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Right Inverted Concave Corner */}
              <div className="absolute top-0 -right-4 w-4 h-4 bg-transparent rounded-tl-2xl shadow-[-4px_-4px_0_0_#ffffff] pointer-events-none" />

            </div>

          </div>

          {/* Content Body Inside Beige Container */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              
              {/* Mobile Custom Sub-category Pill Dropdown */}
              <div className="sm:hidden relative" ref={subDropdownRef}>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={() => setIsMobileSubDropdownOpen(!isMobileSubDropdownOpen)}
                  className="w-full flex items-center justify-between bg-white text-gray-900 text-xs font-bold py-3 px-5 rounded-full border border-gray-200 shadow-xs cursor-pointer"
                >
                  <span className="truncate pr-2">{currentSub.title}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-700 transition-transform ${isMobileSubDropdownOpen ? 'rotate-180' : ''}`} />
                </motion.button>

                {/* Custom Styled Sub-category Dropdown Popup List */}
                <AnimatePresence>
                  {isMobileSubDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 6, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.96 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 p-1.5"
                    >
                      {currentTab.subItems.map((item, idx) => {
                        const isSubActive = activeSubItem === idx
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              setActiveSubItem(idx)
                              setIsMobileSubDropdownOpen(false)
                            }}
                            className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer text-left ${
                              isSubActive
                                ? 'bg-[#f0f4ea] text-gray-900 font-extrabold'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            <span>{item.title}</span>
                            {isSubActive && <span className="w-2 h-2 rounded-full bg-[#adf035] flex-shrink-0" />}
                          </button>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Selected Title & Sub-items with Smooth Spring Transition */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`${activeTab}-${activeSubItem}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 border-l-4 border-gray-800 pl-3 sm:pl-4 leading-normal">
                    {currentSub.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {currentSub.desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Desktop & Tablet Sub-items List */}
              <div className="hidden sm:block space-y-2 pt-2">
                {currentTab.subItems.map((item, idx) => {
                  const isSubActive = activeSubItem === idx
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 3 }}
                      onClick={() => setActiveSubItem(idx)}
                      className={`cursor-pointer text-sm font-semibold py-2.5 px-3.5 rounded-xl transition-all flex items-center justify-between ${
                        isSubActive
                          ? 'text-gray-900 bg-[#ffffff] font-bold shadow-xs border-l-4 border-gray-900'
                          : 'text-gray-700 hover:text-black hover:bg-white/40'
                      }`}
                    >
                      <span>{item.title}</span>
                      {isSubActive && <span className="w-2 h-2 rounded-full bg-[#adf035]" />}
                    </motion.div>
                  )
                })}
              </div>

            </div>

            {/* Right Column: POS Illustration Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-md border border-gray-100 min-h-[260px] sm:min-h-[380px] flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${activeTab}-${activeSubItem}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    src={currentSub.img}
                    alt={currentSub.title}
                    className="w-full h-auto object-cover rounded-xl sm:rounded-2xl shadow-xs"
                  />
                </AnimatePresence>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
