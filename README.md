# 🛒 Qable POS — Modern Point of Sale & Business Platform

[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

> **Qable POS** là trang web giới thiệu nền tảng phần mềm quản lý bán hàng và giải pháp POS chuyên sâu thế hệ mới dành cho các mô hình **Bán lẻ (Retail)**, **Nhà hàng & F&B**, và **Dịch vụ Spa / Salon / Clinic**. Được xây dựng với giao diện hiện đại, mượt mà chuẩn 120fps và hỗ trợ song ngữ toàn diện.

---

## 📌 Mục Lục (Table of Contents)

- [✨ Tính Năng Nổi Bật (Key Features)](#-tính-năng-nổi-bật-key-features)
- [🛠️ Công Nghệ Sử Dụng (Tech Stack)](#️-công-nghệ-sử-dụng-tech-stack)
- [📁 Cấu Trúc Dự Án (Project Structure)](#-cấu-trúc-dự-án-project-structure)
- [🚀 Hướng Dẫn Cài Đặt & Khởi Chạy (Getting Started)](#-hướng-dẫn-cài-đặt--khởi-chạy-getting-started)
- [📖 Hướng Dẫn Sử Dụng & Bố Cục (Usage & Components)](#-hướng-dẫn-sử-dụng--bố-cục-usage--components)
- [🤝 Đóng Góp & Giấy Phép (Contributing & License)](#-đóng-góp--giấy-phép-contributing--license)

---

## ✨ Tính Năng Nổi Bật (Key Features)

- 🌐 **Hệ Thống Song Ngữ Đa Quốc Gia (`🇻🇳 VIE | 🇬🇧 ENG`)**:
  - Chuyển đổi ngôn ngữ tức thì 100% nội dung (Header, Hero, Tabs, Hardware, Pricing, Support, Modal) chỉ trong 0.01 giây.
- 🎨 **Thiết Kế Đỉnh Cao (Inverted Concave Notched Header & Glassmorphism)**:
  - Đầu Notch cong lõm 100% khớp tiếp giáp không đường nối bằng kỹ thuật CSS Inverted Shadow.
  - Phông chữ cao cấp Google Font `Plus Jakarta Sans` kết hợp màu chủ đạo xanh mạ `#adf035` nổi bật.
- 🔄 **Trình Trượt Hero Carousel 4 Slide Tự Động**:
  - Tự động chuyển slide banner sau mỗi 5 giây với hiệu ứng mờ dần nhẹ nhàng (`AnimatePresence`).
  - 4 thanh vạch chỉ số tự động co giãn độ dài mượt mà khi đổi slide.
- 📱 **Khối Tabs Chọn Mô Hình Tự Động Kích Hoạt (`EverythingYouNeedTabs`)**:
  - Khung màu tối (`activeTabPill`) lướt trượt hiệu ứng nam châm giữa các tab **Ăn uống**, **Bán lẻ (MỚI)**, **Dịch vụ (MỚI)**.
  - Liên kết trực tiếp với Menu Mega trên Header — bấm chọn mô hình nào lập tức cuộn trượt và kích hoạt ngay Tab đó.
- ⚡ **Micro-Animations Mượt Mạ chuẩn 120fps (`Framer Motion`)**:
  - Phản hồi lực nảy tay khi bấm nút (**Log In**, **Free Trial**).
  - Modal đăng ký nảy phóng lò xo (`Spring Scale Recoil`) kèm ô chọn mô hình custom icon thông minh.
- 🖥️ **Section Thiết Bị POS & Bảng Giá Linh Hoạt**:
  - Hiển thị 4 dòng phần cứng POS chính hãng (Máy POS Q1, Máy in K80, Máy quét 2D, Ngăn kéo Q-Cash 410).
  - Bảng giá minh bạch kèm công tắc giảm giá 20% khi thanh toán theo năm.
- 🎧 **Trung Tâm Hỗ Trợ 24/7 & FAQ Accordion**:
  - 4 kênh liên hệ kỹ thuật cùng khung FAQ đóng mở trượt lò xo.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

### **Frontend Framework & Core**
- **[React 19](https://react.dev/) (`v19.2.8`)**: Thư viện UI Component chính.
- **[Vite 8](https://vitejs.dev/) (`v8.2.0`)**: Build tool thế hệ mới siêu nhanh (Build ~400ms).

### **Styling & Motion**
- **[Tailwind CSS v4](https://tailwindcss.com/) (`v4.3.3`)**: Utility-first CSS Engine.
- **[Framer Motion](https://www.framer.com/motion/)**: Thư viện animation vật lý lò xo (Spring Physics) 120fps.
- **Google Fonts (`Plus Jakarta Sans`)**: Font chữ hiện đại chuẩn quốc tế.

### **Icons & Assets**
- **[Lucide React](https://lucide.dev/) (`v1.28.0`)**: Bộ Icon SVG Vector UI/UX.

---

## 📁 Cấu Trúc Dự Án (Project Structure)

```text
qable-test/
├── public/
│   ├── favicon.svg             # Logo chữ Q màu xanh mạ chuẩn nhận diện Qable
│   └── icons.svg               # SVG icons sprite
├── src/
│   ├── assets/                 # Tài nguyên hình ảnh minh họa (Hero & Tabs)
│   │   ├── hero-bg.png
│   │   ├── tab-fb.png
│   │   ├── tab-retail.png
│   │   └── tab-service.png
│   ├── components/             # Bộ thành phần giao diện React
│   │   ├── ConsultationModal.jsx   # Modal đăng ký tư vấn & Custom Select
│   │   ├── EquipmentSection.jsx    # Section danh mục thiết bị POS
│   │   ├── EverythingYouNeedTabs.jsx # Khối tabs mô hình kinh doanh
│   │   ├── Footer.jsx              # Chân trang & Newsletter
│   │   ├── Header.jsx              # Thanh Header & công tắc song ngữ
│   │   ├── Hero.jsx                # Banner Hero Carousel 4 Slide
│   │   ├── MegaMenu.jsx            # Dropdown Menu Giải Pháp
│   │   ├── MobileDrawer.jsx        # Menu trượt Mobile
│   │   ├── PricingSection.jsx      # Bảng giá dịch vụ & Toggle thanh toán
│   │   └── SupportSection.jsx      # Trung tâm hỗ trợ 24/7 & FAQ
│   ├── locales/
│   │   └── translations.js     # Từ điển từ vựng song ngữ (VIE | ENG)
│   ├── App.css
│   ├── App.jsx                 # Component ứng dụng chính & Quản lý State
│   ├── index.css               # Base Tailwind CSS & Global Smooth Scroll
│   └── main.jsx                # Entry point ứng dụng React
├── index.html                  # File HTML chính & Thẻ Meta OpenGraph / Fonts
├── package.json                # Dependencies & Scripts
├── tailwind.config.js          # Cấu hình Tailwind CSS
└── vite.config.js              # Cấu hình Vite bundler
```

---

## 🚀 Hướng Dẫn Cài Đặt & Khởi Chạy (Getting Started)

### **1. Yêu Cầu Môi Trường (Prerequisites)**
- **Node.js**: `v18.0.0` trở lên.
- **npm**: `v9.0.0` trở lên.

### **2. Cài Đặt (Installation)**

```bash
# 1. Clone repository từ GitHub
git clone https://github.com/Vinhpc123/DevTest.git

# 2. Di chuyển vào thư mục dự án
cd DevTest

# 3. Cài đặt các thư viện phụ thuộc (Dependencies)
npm install
```

### **3. Các Lệnh Khởi Chạy (Available Commands)**

| Lệnh (`Command`) | Mô Tả (`Description`) |
| :--- | :--- |
| `npm run dev` | Khởi chạy máy chủ phát triển cục bộ (Local Server `http://localhost:5173`) |
| `npm run build` | Đóng gói sản phẩm tối ưu cho môi trường Production (`dist/`) |
| `npm run preview` | Xem trước bản build Production tại máy cục bộ |
| `npm run lint` | Kiểm tra lỗi cú pháp và chuẩn mã nguồn với ESLint |

---

## 📖 Hướng Dẫn Sử Dụng & Bố Cục (Usage & Components)

### **1. Chuyển Đổi Ngôn Ngữ (Bilingual Toggle)**
Bấm vào nút công tắc `🇻🇳 VIE | 🇬🇧 ENG` ở thanh **Header** hoặc **Mobile Drawer** để chuyển toàn bộ câu chữ trên trang sang Tiếng Việt hoặc Tiếng Anh tức thì.

### **2. Điều Hướng Giải Pháp (MegaMenu Solutions)**
Di chuột vào mục **Giải pháp ∨** trên Header và chọn bất kỳ mô hình nào (*Bán lẻ*, *F&B*, *Dịch vụ*), màn hình sẽ tự động cuộn mượt xuống section `#solutions` và kích hoạt đúng Tab tương ứng.

### **3. Đặt Lịch Dùng Thử Miễn Phí (Book Demo Modal)**
Bấm vào bất kỳ nút **Sử dụng miễn phí →** hoặc **Đăng nhập**, modal tư vấn sẽ hiển thị với hiệu ứng nảy lò xo và ô chọn mô hình custom sống động.

---

## 🤝 Đóng Góp & Giấy Phép (Contributing & License)

- **License**: Dự án được đăng ký theo giấy phép [MIT License](LICENSE).
- **Phát triển bởi**: Qable POS Platform Team (Blue Coral Front-End Test).

---
*© 2026 Qable POS Platform. Developed with ❤️ using React 19 & Tailwind CSS v4.*
