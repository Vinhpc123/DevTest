# 🛒 Qable POS — Point of Sale Web App

[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

> **Qable POS** is a simple, modern landing page for a Point of Sale (POS) system. It helps small businesses like **Retail**, **Restaurants & F&B**, and **Spa / Salons** manage sales easily. It is fast, clean, and supports 2 languages (**Vietnamese & English**).

---

## 📌 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Quick Start](#-quick-start)
- [📖 How to Use](#-how-to-use)

---

## ✨ Features

- 🌐 **Easy Language Switch (`🇻🇳 VIE | 🇬🇧 ENG`)**:
  - Switch between Vietnamese and English instantly with one click.
- 🎨 **Modern & Responsive Design**:
  - Looks great on Desktop, Tablet (iPad), and Mobile screens.
  - Custom lime green theme (`#adf035`) with smooth Google Font (`Plus Jakarta Sans`).
- 🔄 **Auto-Playing Hero Banner**:
  - 4-slide banner carousel that automatically slides every 5 seconds or when clicked.
- 📱 **Interactive Business Model Tabs**:
  - Easily switch tabs for **F&B**, **Retail**, and **Services**.
  - Clicking menu items in the top header automatically scrolls and selects the right tab.
- ⚡ **Smooth Animations (`Framer Motion`)**:
  - Smooth spring button clicks, menu dropdowns, and popup modals.
- 🖥️ **Hardware & Pricing Sections**:
  - Shows POS hardware devices (POS machine, thermal printer, barcode scanner, cash drawer).
  - Clear pricing plans with a monthly/yearly discount toggle.
- 🎧 **24/7 Support & FAQ Accordion**:
  - Support contact cards and expandable answers for common questions.

---

## 🛠️ Tech Stack

- **[React 19](https://react.dev/)**: Main UI library for components.
- **[Vite 8](https://vitejs.dev/)**: Fast build tool and dev server.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Easy styling framework.
- **[Framer Motion](https://www.framer.com/motion/)**: Simple, smooth animation library.
- **[Lucide React](https://lucide.dev/)**: Clean SVG icons.

---

## 📁 Project Structure

```text
qable-test/
├── public/
│   └── favicon.svg             # Qable logo icon for browser tab
├── src/
│   ├── assets/                 # Images for hero banner and tabs
│   │   ├── hero-bg.png
│   │   ├── tab-fb.png
│   │   ├── tab-retail.png
│   │   └── tab-service.png
│   ├── components/             # React UI components
│   │   ├── ConsultationModal.jsx   # Booking demo modal
│   │   ├── EquipmentSection.jsx    # POS hardware list
│   │   ├── EverythingYouNeedTabs.jsx # Business model tabs
│   │   ├── Footer.jsx              # Bottom footer & newsletter
│   │   ├── Header.jsx              # Top header & language switch
│   │   ├── Hero.jsx                # Top hero banner carousel
│   │   ├── MegaMenu.jsx            # Solutions menu dropdown
│   │   ├── MobileDrawer.jsx        # Mobile side menu
│   │   ├── PricingSection.jsx      # Price list & billing toggle
│   │   └── SupportSection.jsx      # Support cards & FAQ
│   ├── locales/
│   │   └── translations.js     # Text dictionary for VIE and ENG
│   ├── App.jsx                 # Main application component
│   ├── index.css               # Main styles & font settings
│   └── main.jsx                # App entry file
├── index.html                  # HTML template with page title
├── package.json                # Project dependencies
└── vite.config.js              # Vite configuration
```

---

## 🚀 Quick Start

Follow these simple steps to run the project on your computer:

### **1. Prerequisites**
Make sure you have **Node.js** installed on your computer.

### **2. Installation**

```bash
# 1. Clone this repository
git clone https://github.com/Vinhpc123/DevTest.git

# 2. Open project folder
cd DevTest

# 3. Install packages
npm install

# 4. Start dev server
npm run dev
```

Open your browser and go to `http://localhost:5173`.

---

## 📖 How to Use

- **Run Dev Mode**: `npm run dev` (Starts local server)
- **Build for Production**: `npm run build` (Creates ready-to-deploy files in `dist/`)
- **Preview Build**: `npm run preview` (Tests built production files)

---
*Developed for Qable POS Platform.*
