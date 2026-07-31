import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ShoppingBag, UtensilsCrossed, Sparkles, QrCode } from 'lucide-react'

export default function MegaMenu({ isOpen, onClose, onSelectSolution, t }) {
  // Sub-items aligned with translation strings & tab target keys
  const menuItems = [
    {
      tabKey: 'retail',
      title: t?.megaItem1Title || "Bán lẻ & Chuỗi cửa hàng",
      sub: t?.megaItem1Sub || "Quản lý bán hàng lẻ & chuỗi cửa hàng",
      icon: ShoppingBag,
      hasArrow: false,
    },
    {
      tabKey: 'fb',
      title: t?.megaItem2Title || "Nhà hàng & F&B",
      sub: t?.megaItem2Sub || "Giải pháp gọi món & vận hành F&B",
      icon: UtensilsCrossed,
      hasArrow: true,
    },
    {
      tabKey: 'service',
      title: t?.megaItem3Title || "Dịch vụ & Spa / Salon",
      sub: t?.megaItem3Sub || "Đặt lịch & chăm sóc khách hàng Spa",
      icon: Sparkles,
      hasArrow: false,
    },
    {
      tabKey: 'consultation',
      title: t?.megaItem4Title || "Thanh toán QR Thông minh",
      sub: t?.megaItem4Sub || "Tích hợp thanh toán QR & chuyển khoản",
      icon: QrCode,
      hasArrow: false,
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="absolute top-full left-0 pt-2 w-80 z-50 origin-top-left pointer-events-auto"
        >
          {/* Invisible Hover Bridge overlay */}
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3">
            <div className="py-1 space-y-0.5">
              {menuItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.button
                    key={index}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      if (onSelectSolution) {
                        onSelectSolution(item.tabKey)
                      }
                      onClose()
                    }}
                    whileHover={{ x: 3, backgroundColor: "rgba(249, 250, 251, 1)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full group flex items-center justify-between p-3 rounded-xl transition-colors cursor-pointer text-left select-none"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-lime-100 text-lime-700 flex items-center justify-center group-hover:bg-[#b2f537] group-hover:text-black transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-800 group-hover:text-black flex items-center gap-2">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-500 line-clamp-1">{item.sub}</div>
                      </div>
                    </div>
                    {item.hasArrow && (
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                    )}
                  </motion.button>
                )
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
