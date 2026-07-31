import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Sparkles, ArrowRight } from 'lucide-react'

export default function PricingSection({ lang, t, onOpenConsultation }) {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      id: "standard",
      name: lang === 'vi' ? "Gói Cơ Bản" : "Standard Plan",
      desc: lang === 'vi' ? "Thích hợp cho cửa hàng nhỏ, 1 điểm bán hàng." : "Ideal for small single-store businesses.",
      monthlyPrice: "199.000đ",
      annualPrice: "159.000đ",
      popular: false,
      features: lang === 'vi' ? [
        "1 Cửa hàng / Đơn vị bán hàng",
        "Tối đa 2 thiết bị kết nối",
        "Quản lý đơn hàng & tồn kho cơ bản",
        "Báo cáo doanh thu ngày / tháng",
        "In hóa đơn nhiệt & mã QR",
        "Hỗ trợ kỹ thuật qua Hotline"
      ] : [
        "1 Store location",
        "Up to 2 connected devices",
        "Basic order & inventory management",
        "Daily & monthly revenue reports",
        "Thermal invoice & QR printing",
        "Standard Hotline support"
      ]
    },
    {
      id: "pro",
      name: lang === 'vi' ? "Gói Chuyên Nghiệp (PRO)" : "Pro Plan",
      desc: lang === 'vi' ? "Đầy đủ tính năng cao cấp cho Nhà hàng, Retail & Spa." : "Full advanced features for F&B, Retail & Spa.",
      monthlyPrice: "399.000đ",
      annualPrice: "319.000đ",
      popular: true,
      badge: lang === 'vi' ? "PHỔ BIẾN NHẤT" : "MOST POPULAR",
      features: lang === 'vi' ? [
        "Không giới hạn số thiết bị kết nối",
        "Quản lý sơ đồ bàn F&B / Giường Spa",
        "Tự động in phiếu chế biến nhà bếp",
        "Tùy chỉnh topping, mức đường/đá trà sữa",
        "Tích hợp thanh toán QR chuyển khoản 1 giây",
        "Tích điểm thân thiết & gửi SMS Zalo CSKH",
        "Báo cáo doanh thu & nguyên vật liệu chuyên sâu",
        "Hỗ trợ kỹ thuật ưu tiên 24/7"
      ] : [
        "Unlimited connected devices",
        "Visual table & Spa bed management",
        "Automatic kitchen order ticket printing",
        "Custom topping & beverage options",
        "1-second QR & Bank transfer integration",
        "Customer loyalty & Zalo/SMS marketing",
        "Advanced inventory & ingredient reports",
        "24/7 Priority technical support"
      ]
    },
    {
      id: "enterprise",
      name: lang === 'vi' ? "Gói Chuỗi Cửa Hàng" : "Enterprise Chain Plan",
      desc: lang === 'vi' ? "Giải pháp chuyên biệt cho chuỗi chi nhánh & quy mô lớn." : "Dedicated solution for multi-location chains.",
      monthlyPrice: "799.000đ",
      annualPrice: "639.000đ",
      popular: false,
      features: lang === 'vi' ? [
        "Không giới hạn số chi nhánh cửa hàng",
        "Quản lý kho tổng & điều chuyển nội bộ",
        "Phân quyền nhân viên chi tiết theo vai trò",
        "Cấu hình API kết nối phần mềm kế toán/ERP",
        "Tự động đồng bộ sàn Thương mại điện tử",
        "Thiết kế tính năng tùy chỉnh theo yêu cầu",
        "Chuyên viên kỹ thuật hỗ trợ riêng 1-on-1"
      ] : [
        "Unlimited store chain branches",
        "Central warehouse & inter-store transfers",
        "Granular role-based staff permissions",
        "Open API for ERP & Accounting integration",
        "Automated E-commerce sync",
        "Custom feature development on request",
        "Dedicated 1-on-1 account manager"
      ]
    }
  ]

  return (
    <section id="pricing" className="py-12 sm:py-20 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="px-4 py-1 rounded-full bg-[#adf035] text-black font-extrabold text-xs uppercase tracking-wider shadow-xs">
            {lang === 'vi' ? 'BẢNG GIÁ MINH BẠCH' : 'TRANSPARENT PRICING'}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mt-3 sm:mt-4">
            {lang === 'vi' ? 'Chi Phí Linh Hoạt Cho Mọi Quy Mô' : 'Flexible Pricing for Every Business'}
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {lang === 'vi' 
              ? 'Không chi phí ẩn, không phí cài đặt ban đầu. Dùng thử miễn phí 14 ngày không cần thẻ tín dụng.'
              : 'No hidden fees, no setup costs. 14-day free trial with no credit card required.'}
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-2.5 sm:gap-3 mb-10 sm:mb-14">
          <span className={`text-xs sm:text-sm font-bold ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            {lang === 'vi' ? 'Thanh toán hàng tháng' : 'Monthly Billing'}
          </span>
          
          <button
            type="button"
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-13 h-7 sm:w-14 sm:h-8 bg-gray-900 p-1 rounded-full flex items-center transition-colors cursor-pointer shadow-xs"
          >
            <motion.div
              animate={{ x: isAnnual ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-5 h-5 sm:w-6 sm:h-6 bg-[#adf035] rounded-full shadow-md"
            />
          </button>

          <span className={`text-xs sm:text-sm font-bold flex items-center gap-1.5 ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            <span>{lang === 'vi' ? 'Thanh toán hàng năm' : 'Annual Billing'}</span>
            <span className="bg-lime-100 text-lime-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-lime-300">
              {lang === 'vi' ? 'Tiết kiệm 20%' : 'Save 20%'}
            </span>
          </span>
        </div>

        {/* Pricing Cards Grid (Responsive Grid: 1 col on mobile/tablet, 3 col on desktop lg: 1024px+) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-md md:max-w-2xl lg:max-w-none mx-auto">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`rounded-3xl p-5 sm:p-7 lg:p-8 flex flex-col justify-between relative transition-all ${
                plan.popular
                  ? 'bg-gray-950 text-white shadow-2xl border-2 border-[#adf035]'
                  : 'bg-slate-50 text-gray-900 border border-gray-200/80 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#adf035] text-black font-extrabold text-[10px] uppercase px-4 py-1 rounded-full shadow-md tracking-wider flex items-center gap-1 whitespace-nowrap">
                  <Sparkles className="w-3 h-3" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                <h3 className={`text-lg sm:text-xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs mt-1 mb-5 leading-relaxed ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.desc}
                </p>

                {/* Price Display with Responsive Wrapping */}
                <div className="flex flex-wrap items-baseline gap-1 mb-5">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className={`text-xs font-semibold ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                    / {lang === 'vi' ? 'tháng' : 'month'}
                  </span>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-gray-200/30 mb-6">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs">
                      <div className={`p-0.5 rounded-full mt-0.5 flex-shrink-0 ${plan.popular ? 'bg-[#adf035] text-black' : 'bg-lime-200 text-black'}`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className={plan.popular ? 'text-gray-200' : 'text-gray-700'}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenConsultation}
                className={`w-full py-3 px-5 rounded-full font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                  plan.popular
                    ? 'bg-[#adf035] hover:bg-[#a1e827] text-black'
                    : 'bg-gray-900 hover:bg-black text-white'
                }`}
              >
                <span>{lang === 'vi' ? 'Đăng ký sử dụng ngay' : 'Get Started Now'}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
