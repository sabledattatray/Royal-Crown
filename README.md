# Toy Shopee 🧸

**Badlapur's Premium Online Toy Store** — A fully-featured Next.js 16 e-commerce website built for Toy Shopee, Badlapur East, Maharashtra.

> 🚀 **Live Demo:** [toyshopee.vercel.app](https://toyshopee.vercel.app) *(deploy to see)*

---

## ✨ Features

### 🛒 Shopping Experience
- Product catalog with search, category filters, and age-group filters
- Quick View modal with image gallery
- Add to cart with **particle burst animations** + floating quantity indicators
- Wishlist with persistent state
- Cart sidebar drawer with gift wrap toggle and greeting card builder

### 💳 Checkout & Payments
- 3-step checkout (Address → Shipping → Payment)
- **Simulated Razorpay** gateway with QR code scan
- Cash on Delivery (COD) option
- Coupon code system (`TOY10`, `KIDS20`)
- Local home delivery + store pickup options
- **GST Invoice generation** (printable, GSTIN, CGST/SGST breakdown)

### 📦 Order Tracking
- Real-time order tracking at `/track-order`
- Animated step-by-step timeline (Placed → Confirmed → Packed → Out for Delivery → Delivered)
- WhatsApp support button on tracking page
- Google Review CTA on delivery confirmation

### 🎁 Gift & Festival Features
- **Gift Finder Wizard** — 3-step quiz (age, budget, interest) with curated recommendations
- **Festival Campaign Pages** — Diwali 🪔, Christmas 🎄, Summer Vacation ☀️ with live countdown timers
- Birthday Greeting Card builder in cart

### 👤 Customer Account
- Order history, saved addresses, notification preferences
- **Loyalty Points** — earn 1 point per ₹10 spent, redeem 100 pts = ₹10 off
- **Refer & Earn** — unique referral link, WhatsApp sharing

### 🏪 Admin Dashboard
- Inventory management with **low-stock alerts** (≤5 units highlighted in amber/red)
- Order status management with **WhatsApp customer notification** button
- Analytics chart (weekly orders)
- Store timings override & holiday mode
- **Delivery radius configuration** (radius, base fee, free threshold, window)

### 🗺️ Store Info
- Live Google Maps embed (dark mode aware)
- Real-time store open/closed status based on business hours
- WhatsApp floating button

### 🎨 Design
- Premium warm cream / dark slate dual theme
- Animated toy-block logo (T·O·Y building blocks)
- Micro-animations: particle bursts, floating sparkles, card glow effects
- Fully responsive (mobile-first)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| State | Zustand (with `persist`) |
| Fonts | Google Fonts — Poppins + Inter |
| Icons | Lucide React |
| Animations | CSS Keyframes + Tailwind utilities |

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/toy-shopee.git
cd toy-shopee

# 2. Install dependencies
npm install

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📦 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/toy-shopee)

Or manually:
```bash
npm install -g vercel
vercel --prod
```

**No environment variables required** — all data is static/mock.

---

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Homepage
│   ├── shop/             # Product listing + detail
│   ├── cart/             # Cart page
│   ├── checkout/         # Checkout wizard + payment
│   ├── track-order/      # Order tracking
│   ├── account/          # User account, loyalty, referral
│   ├── festivals/        # Festival campaign pages
│   ├── admin/            # Store admin dashboard
│   └── ...
├── components/           # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── CartDrawer.tsx
│   ├── GiftFinderWizard.tsx
│   ├── GSTInvoice.tsx
│   └── ...
├── store/                # Zustand stores
│   ├── cartStore.ts      # Cart, wishlist, loyalty points
│   └── trackingStore.ts  # Order tracking
├── data/
│   └── mockData.ts       # Product catalog data
├── context/
│   └── ThemeContext.tsx  # Dark/light mode
└── utils/
    └── timings.ts        # Store hours logic
```

---

## 🏪 Store Information

**Toy Shopee**  
Shop No. 11/12, Kartik Complex, Near Municipal Corporation,  
Badlapur East, Maharashtra 421503  
📞 +91 97300 44342  
📧 toyshopeebadlapur@gmail.com

---

## 📄 License

This project is a custom-built commercial website for **Toy Shopee, Badlapur**.  
© 2026 Toy Shopee. All rights reserved.

Built with ❤️ by [Datta Sable](https://dattasble.com)
