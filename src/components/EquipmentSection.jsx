import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Monitor, Printer, QrCode, CreditCard, ShieldCheck, ArrowRight } from 'lucide-react'

export default function EquipmentSection({ lang, t, onOpenConsultation }) {
  const products = [
    {
      id: 1,
      name: lang === 'vi' ? "Máy POS Cầm Tay Cảm Ứng Qable Q1" : "Qable Q1 Handheld Touch POS",
      category: "pos",
      price: "3.490.000đ",
      desc: lang === 'vi' 
        ? "Màn hình HD 5.5 inch, tích hợp sẵn máy in hóa đơn nhiệt K58, pin 5200mAh bán hàng cả ngày."
        : "5.5-inch HD touch screen, built-in 58mm thermal printer, 5200mAh long battery.",
      icon: Monitor,
      specs: ["Android 11", "In nhiệt K58", "Wifi/4G", "Quét mã QR"],
      badge: lang === 'vi' ? "BÁN CHẠY" : "BESTSELLER"
    },
    {
      id: 2,
      name: lang === 'vi' ? "Máy In Hóa Đơn Nhiệt Siêu Tốc K80" : "K80 High-Speed Thermal Printer",
      category: "printer",
      price: "1.650.000đ",
      desc: lang === 'vi'
        ? "Tốc độ in 250mm/s, dao cắt tự động, kết nối LAN/USB/Bluetooth in lệnh từ xa cực mượt."
        : "250mm/s ultra-fast print speed, auto-cutter, LAN/USB/Bluetooth remote printing.",
      icon: Printer,
      specs: ["Khổ giấy 80mm", "Cắt giấy tự động", "Cổng LAN & USB", "Bảo hành 12T"],
      badge: null
    },
    {
      id: 3,
      name: lang === 'vi' ? "Máy Quét Mã Vạch Đa Tia 2D Qable Scan" : "Qable 2D Barcode Scanner",
      category: "scanner",
      price: "1.290.000đ",
      desc: lang === 'vi'
        ? "Mắt đọc CMOS quét siêu nhạy mã 1D/2D, mã QR trên màn hình điện thoại và tem mờ nhòe."
        : "CMOS high-sensitivity sensor, reads 1D/2D barcodes & phone QR codes effortlessly.",
      icon: QrCode,
      specs: ["Mắt đọc CMOS 2D", "Cảm ứng tự động", "Chân đế rảnh tay", "USB Plug&Play"],
      badge: lang === 'vi' ? "CÔNG NGHỆ MỚI" : "NEW TECH"
    },
    {
      id: 4,
      name: lang === 'vi' ? "Ngăn Kéo Đựng Tiền Tự Động Q-Cash 410" : "Q-Cash 410 Automatic Cash Drawer",
      category: "drawer",
      price: "890.000đ",
      desc: lang === 'vi'
        ? "Thiết kế thép sơn tĩnh điện 5 ngăn tiền giấy, 8 ngăn tiền xu, tự bật mở khi in hóa đơn."
        : "Heavy-duty steel construction, 5 bill slots, 8 coin compartments, pops open on print.",
      icon: CreditCard,
      specs: ["Thép tĩnh điện", "5 ngăn tiền giấy", "Tự mở khi in", "Khóa cơ 3 nấc"],
      badge: null
    }
  ]

  return (
    <section id="equipment" className="py-12 sm:py-20 lg:py-24 bg-slate-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="px-4 py-1 rounded-full bg-[#adf035] text-black font-extrabold text-xs uppercase tracking-wider shadow-xs">
            {lang === 'vi' ? 'PHẦN CỨNG CHUYÊN NGHIỆP' : 'PROFESSIONAL HARDWARE'}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mt-3 sm:mt-4">
            {lang === 'vi' ? 'Thiết Bị POS Đồng Bộ & Bền Bỉ' : 'Seamless & Durable POS Hardware'}
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {lang === 'vi' 
              ? 'Hệ sinh thái thiết bị phần cứng chính hãng được cấu hình sẵn, cắm là chạy và kết nối mượt mà với phần mềm Qable.'
              : 'Official hardware ecosystem pre-configured for plug-and-play operation with Qable software.'}
          </p>
        </div>

        {/* Product Cards Grid (Responsive Grid: 1 col on mobile, 2 col on tablet sm/md, 4 col on desktop lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
          {products.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden"
              >
                {item.badge && (
                  <span className="absolute top-4 right-4 bg-[#adf035] text-black font-extrabold text-[10px] px-2.5 py-0.5 rounded-full shadow-xs">
                    {item.badge}
                  </span>
                )}

                <div>
                  <div className="w-11 h-11 rounded-2xl bg-lime-100 text-black flex items-center justify-center mb-4 font-bold">
                    <Icon className="w-5 h-5 text-black" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                    {item.name}
                  </h3>

                  <div className="text-lg sm:text-xl font-extrabold text-gray-900 mt-1.5 mb-2.5">
                    {item.price}
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  {/* Specs Pill Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.specs.map((spec, i) => (
                      <span key={i} className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 px-4 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>{lang === 'vi' ? 'Đặt mua thiết bị' : 'Order Hardware'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Hardware Guarantee Banner */}
        <div className="mt-10 sm:mt-14 bg-white rounded-2xl p-5 sm:p-8 border border-lime-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-xs">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#adf035] text-black flex items-center justify-center flex-shrink-0 font-bold">
              <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
            </div>
            <div>
              <h4 className="text-sm sm:text-lg font-bold text-gray-900">
                {lang === 'vi' ? 'Cam Kết Bảo Hành 1 Đổi 1 Trong 12 Tháng' : '1-to-1 Replacement 12-Month Guarantee'}
              </h4>
              <p className="text-xs text-gray-600 mt-0.5">
                {lang === 'vi' ? 'Giao hàng hỏa tốc toàn quốc, miễn phí lắp đặt tận nơi và hỗ trợ kỹ thuật 24/7.' : 'Fast nationwide delivery, free installation, and 24/7 technical support.'}
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenConsultation}
            className="w-full md:w-auto px-6 py-3 rounded-full bg-[#adf035] hover:bg-[#a1e827] text-black font-extrabold text-xs whitespace-nowrap cursor-pointer shadow-sm text-center"
          >
            {lang === 'vi' ? 'Tư Vấn Thiết Bị Bán Hàng' : 'Get Hardware Advice'}
          </motion.button>
        </div>

      </div>
    </section>
  )
}
