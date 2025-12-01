# 🐾 WarmPaws – Pet Care in Winter

WarmPaws is a cozy winter-themed pet care platform designed to help pet owners keep their furry friends warm, comfortable, and healthy during the cold season. Users can browse winter pet care services, view detailed information, book services, and manage their profiles — all inside a modern, responsive Single Page Application (SPA).

---

## 🌐 Live Website

👉 Live URL: https://warmpaws-pet-care-25562.web.app

---

## 🎯 Project Purpose

The main goal of WarmPaws is to create an intuitive and friendly digital experience for pet owners seeking winter-special pet care.  
This project demonstrates skills in:

- React SPA development  
- Firebase Authentication  
- Protected routes & redirection  
- Responsive UI design  
- Client-side data rendering  
- JSON data usage  
- Animations, sliders, and toast notifications  

---

## ✨ Key Features

### 🔐 Authentication
- Email & Password login  
- Signup with Name, Email, Photo, Password  
- Google Login  
- Password Reset (Forgot Password)  
- Redirect to target route after login  
- Protected Routes using `PrivateRoute`  

### 🧩 Routing & Layout
- React Router v6 with nested routes  
- Persistent Navbar & Footer  
- Route loaders  
- No reload errors (SPA behavior)  

### 🐶 Services Management
- Services loaded from local `services.json`  
- Display services on homepage  
- View full details on protected route  
- Service booking form with toast success message  

### 👤 User Profile
- Show Name, Email, Profile Image  
- Update Name & Profile Photo using `updateProfile()`  

### 🎨 UI / UX Enhancements
- Modern, minimalist winter-themed interface  
- Responsive on mobile, tablet, desktop  
- Swiper.js Hero Slider  
- AOS scroll animations  
- Toast notifications for errors/success  
- Extra homepage sections:  
  - Winter Care Tips  
  - Expert Vets  
  - Additional custom section  

---

## 📦 NPM Packages Used

| Package | Purpose |
|---------|---------|
| firebase | Auth & app configuration |
| react-router-dom | SPA routing and loaders |
| react-toastify / react-hot-toast | Notification system |
| swiper | Hero sliders and carousels |
| aos | Smooth scroll animations |
| lucide-react | Icons |
| tailwindcss | Styling |
| daisyui | UI components |

---

npm install
npm run dev
