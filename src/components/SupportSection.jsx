import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Headset, BookOpen, MessageSquare, ShieldCheck, ChevronDown, PhoneCall, Mail, ExternalLink } from 'lucide-react'

export default function SupportSection({ lang, t, onOpenConsultation }) {
  const [openFaq, setOpenFaq] = useState(null)

  const supportChannels = [
    {
      id: 1,
      icon: Headset,
      title: lang === 'vi' ? "Hotline Hỗ Trợ 24/7" : "24/7 Support Hotline",
      desc: lang === 'vi' ? "Tổng đài kỹ thuật miễn phí 1900 1234 phản hồi ngay trong 30 giây." : "Toll-free technical hotline 1900 1234 with 30-second response time.",
      actionText: "1900 1234",
      actionType: "phone"
    },
    {
      id: 2,
      icon: MessageSquare,
      title: lang === 'vi' ? "Kênh Zalo OA Official" : "Official Zalo OA Support",
      desc: lang === 'vi' ? "Chat trực tiếp 1-on-1 với chuyên viên hỗ trợ cài đặt và giải đáp thắc mắc." : "1-on-1 live chat with specialists for setup guidance & Q&A.",
      actionText: lang === 'vi' ? "Chat Zalo Ngay" : "Chat on Zalo",
      actionType: "chat"
    },
    {
      id: 3,
      icon: BookOpen,
      title: lang === 'vi' ? "Trung Tâm Hướng Dẫn" : "Help Center & User Guide",
      desc: lang === 'vi' ? "Thư viện bài viết và video hướng dẫn từng bước thao tác phần mềm." : "Comprehensive library of articles and step-by-step video tutorials.",
      actionText: lang === 'vi' ? "Xem Hướng Dẫn" : "View Help Center",
      actionType: "guide"
    },
    {
      id: 4,
      icon: ShieldCheck,
      title: lang === 'vi' ? "Bảo Hành & Đổi Trả" : "Warranty & Repair Center",
      desc: lang === 'vi' ? "Trung tâm bảo hành phần cứng 1 đổi 1 tận nơi tại TP.HCM & Hà Nội." : "On-site 1-to-1 hardware replacement center in HCMC & Hanoi.",
      actionText: lang === 'vi' ? "Xem Chính Sách" : "View Policy",
      actionType: "policy"
    }
  ]

  const faqs = [
    {
      q: lang === 'vi' ? "Dùng thử phần mềm Qable có mất phí hay bắt buộc thẻ tín dụng không?" : "Is the Qable trial free and does it require a credit card?",
      a: lang === 'vi'
        ? "Hoàn toàn miễn phí 100% trong 14 ngày đầu tiên. Bạn không cần nhập bất kỳ thông tin thẻ tín dụng hay đóng phí khởi tạo nào."
        : "It is 100% free for the first 14 days with no credit card or setup fee required."
    },
    {
      q: lang === 'vi' ? "Tôi có sẵn máy tính bảng iPad/Android thì có thể dùng Qable được không?" : "Can I use Qable on my existing iPad or Android tablet?",
      a: lang === 'vi'
        ? "Có! Qable hỗ trợ chạy mượt mà trên tất cả thiết bị iPad, máy tính bảng Android, điện thoại di động và máy tính laptop/PC."
        : "Yes! Qable runs seamlessly across iPads, Android tablets, smartphones, laptops, and desktop PCs."
    },
    {
      q: lang === 'vi' ? "Khi mất kết nối Internet / Wifi thì phần mềm có bán hàng được không?" : "Does Qable work offline if internet or Wi-Fi goes down?",
      a: lang === 'vi'
        ? "Có! Qable hỗ trợ chế độ bán hàng Ngoại tuyến (Offline Mode). Dữ liệu sẽ tự động đồng bộ lên mây ngay khi có mạng trở lại."
        : "Yes! Qable supports Offline Mode. Sales data automatically syncs to the cloud once reconnecting."
    },
    {
      q: lang === 'vi' ? "Qable có hỗ trợ xuất hóa đơn điện tử và chuyển dữ liệu cơ quan thuế không?" : "Does Qable support electronic invoicing and tax authority reporting?",
      a: lang === 'vi'
        ? "Có! Qable tích hợp sẵn với các nhà cung cấp hóa đơn điện tử hàng đầu và đáp ứng đầy đủ Thông tư 78 / Nghị định 123."
        : "Yes! Qable integrates natively with leading e-invoicing providers complying fully with tax regulations."
    }
  ]

  return (
    <section id="support" className="py-16 sm:py-24 bg-slate-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="px-4 py-1 rounded-full bg-[#adf035] text-black font-extrabold text-xs uppercase tracking-wider shadow-xs">
            {lang === 'vi' ? 'HỖ TRỢ 24/7' : '24/7 SUPPORT CENTER'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mt-4">
            {lang === 'vi' ? 'Đồng Hành Cùng Kinh Doanh Của Bạn' : 'We Are Here To Support Your Business'}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {lang === 'vi' 
              ? 'Đội ngũ chuyên viên kỹ thuật Qable luôn sẵn sàng đồng hành, cài đặt tận nơi và hỗ trợ 24/7.'
              : 'Our dedicated Qable technical team is ready to assist, install on-site, and support 24/7.'}
          </p>
        </div>

        {/* Support Channels 4 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20">
          {supportChannels.map((channel) => {
            const Icon = channel.icon
            return (
              <motion.div
                key={channel.id}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-lime-100 text-black flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-6">
                    {channel.desc}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 px-4 rounded-xl bg-gray-100 hover:bg-[#adf035] hover:text-black text-gray-900 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>{channel.actionText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        {/* Interactive FAQ Accordion */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-6 text-center">
            {lang === 'vi' ? 'Câu Hỏi Thường Gặp (FAQ)' : 'Frequently Asked Questions (FAQ)'}
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={idx} className="border-b border-gray-100 last:border-0 pb-3">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left text-sm font-bold text-gray-900 py-3 hover:text-black transition-colors cursor-pointer"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180 text-black' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1 pb-3 pl-1">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
