import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

export default function Footer({ lang, t, onOpenConsultation }) {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter CTA box */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-850 p-8 sm:p-10 rounded-3xl border border-gray-800 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-2xl font-bold text-white">
              {lang === 'vi' ? 'Sẵn sàng tăng trưởng kinh doanh cùng Qable?' : 'Ready to grow your business with Qable?'}
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              {lang === 'vi' ? 'Đăng ký trải nghiệm ngay giải pháp POS bán hàng thông minh.' : 'Experience the smart POS management solution today.'}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            onClick={onOpenConsultation}
            className="px-6 py-3.5 bg-[#adf035] hover:bg-[#9de322] text-black font-bold text-sm rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap transition-colors cursor-pointer"
          >
            <span>{t?.freeTrial || 'Dùng thử miễn phí'}</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#adf035] flex items-center justify-center font-extrabold text-black text-lg">
                Q
              </div>
              <span className="font-bold text-2xl text-white">table</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {lang === 'vi' 
                ? 'Nền tảng phần mềm quản lý bán hàng và giải pháp POS chuyên sâu cho Bán lẻ, F&B và Dịch vụ Spa trên toàn quốc.'
                : 'Comprehensive point of sale platform for Retail, F&B, and Service businesses nationwide.'}
            </p>
            <div className="pt-2 space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#adf035]" />
                <span>Hotline: 1900 1234 (8:00 - 22:00)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#adf035]" />
                <span>Email: support@qable.vn</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#adf035]" />
                <span>Blue Coral Building, Ho Chi Minh City</span>
              </div>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">{t?.solutions || 'Giải pháp'}</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#solutions" className="hover:text-[#adf035] transition-colors">{lang === 'vi' ? 'Quản lý Bán lẻ' : 'Retail Management'}</a></li>
              <li><a href="#solutions" className="hover:text-[#adf035] transition-colors">{lang === 'vi' ? 'Quản lý F&B / Nhà hàng' : 'F&B & Dining'}</a></li>
              <li><a href="#solutions" className="hover:text-[#adf035] transition-colors">{lang === 'vi' ? 'Quản lý Dịch vụ / Spa' : 'Spa & Beauty Service'}</a></li>
              <li><a href="#solutions" className="hover:text-[#adf035] transition-colors">{lang === 'vi' ? 'Tích hợp Thanh toán QR' : 'QR Payment Integration'}</a></li>
            </ul>
          </div>

          {/* Col 3: Hardware */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">{t?.equipment || 'Thiết bị POS'}</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#devices" className="hover:text-[#adf035] transition-colors">{lang === 'vi' ? 'Máy POS bán hàng' : 'POS Terminal'}</a></li>
              <li><a href="#devices" className="hover:text-[#adf035] transition-colors">{lang === 'vi' ? 'Máy in hóa đơn nhiệt' : 'Thermal Receipt Printer'}</a></li>
              <li><a href="#devices" className="hover:text-[#adf035] transition-colors">{lang === 'vi' ? 'Máy quét mã vạch' : 'Barcode Scanner'}</a></li>
              <li><a href="#devices" className="hover:text-[#adf035] transition-colors">{lang === 'vi' ? 'Ngăn kéo đựng tiền' : 'Cash Drawer'}</a></li>
            </ul>
          </div>

          {/* Col 4: Support & Policy */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">{t?.support || 'Hỗ trợ'}</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#support" className="hover:text-[#adf035] transition-colors">{lang === 'vi' ? 'Trung tâm hỗ trợ' : 'Help Center'}</a></li>
              <li><a href="#support" className="hover:text-[#adf035] transition-colors">{lang === 'vi' ? 'Hướng dẫn sử dụng' : 'User Guide'}</a></li>
              <li><a href="#support" className="hover:text-[#adf035] transition-colors">{lang === 'vi' ? 'Chính sách bảo mật' : 'Privacy Policy'}</a></li>
              <li><a href="#support" className="hover:text-[#adf035] transition-colors">{lang === 'vi' ? 'Điều khoản dịch vụ' : 'Terms of Service'}</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-gray-900 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Qable POS Platform. Developed for Blue Coral Front-End Test.</p>
        </div>

      </div>
    </footer>
  )
}
