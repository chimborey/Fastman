import React, { useState } from "react"
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Page/Home"
import Header from "./Page/Header"
import Footer from "./Page/Footer"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ToastContainer } from "react-toastify"
import Account from "./Page/Account"
import Services from "./Page/Services"
import Contact from "./Page/Contact"
import Blog from "./Page/Blog"
import Shop from "./Page/Shop"
import ShopDetail from "./Page/ShopDetail"
import Cart from "./Page/Cart"
import Like from "./Page/Like"
import Checkout from "./Page/Checkout"
import Order from "./Page/Order"
import LoadingScreen from "./Context/LoadingScreen"
export default function App() {
  // AOS
  AOS.init({
    duration: 1000,
    once: false,
    offset: 100,
  }, [])
  // loadingScreen
  const [loadingScreen, setLoadingScreen] = useState(false)
  const handleloadingScreen  = () => {
    setLoadingScreen(true)
  }
  if(!loadingScreen){
      return <LoadingScreen onFinish={handleloadingScreen}/>
    }
  return (
    <BrowserRouter>
    <ToastContainer />
    <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/page/account" element={<Account />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path='/shop/:id' element={<ShopDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Page/cart' element={<Cart />} />
        <Route path='/Page/like' element={<Like />} />
        <Route path='/like' element={<Like />} />
        <Route path='/Page/checkout' element={<Checkout />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/order' element={<Order />} />
      </Routes>
      <Services />
      <Footer />
      {/* shopDetails */}
    </BrowserRouter>
  )




































  // const [isOpen, setIsOpen] = useState(false)
  // const [foodOpen, setFoodOpen] = useState(false)
  // const [mobileFoodOpen, setMobileFoodOpen] = useState(false)
  // const dropdownRef = useRef(null)

  // const foods = [
  //   { label: "🍎 Apple", href: "/food/apple" },
  //   { label: "🍌 Banana", href: "/food/banana" },
  //   { label: "🍊 Orange", href: "/food/orange" },
  // ]

  // // បិទ dropdown ពេល click ខាងក្រៅ
  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
  //       setFoodOpen(false)
  //     }
  //   }
  //   document.addEventListener("mousedown", handleClickOutside)
  //   return () => document.removeEventListener("mousedown", handleClickOutside)
  // }, [])

  // return (
  //   <nav className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
  //     <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

  //       {/* Logo */}
  //       <a href="/" className="text-xl font-bold text-black tracking-tight">
  //         My<span className="text-green-500">App</span>
  //       </a>

  //       {/* Desktop Menu */}
  //       <div className="hidden md:flex items-center gap-1">

  //         {/* Home */}
  //         <a href="/"
  //           className="px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all"
  //         >
  //           Home
  //         </a>

  //         {/* About */}
  //         <a href="/about"
  //           className="px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all"
  //         >
  //           About
  //         </a>

  //         {/* Food Dropdown */}
  //         <div className="relative" ref={dropdownRef}>
  //           <button
  //             onClick={() => setFoodOpen(!foodOpen)}
  //             className="flex items-center gap-1.5 px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all"
  //           >
  //             Food
  //             <FaChevronDown className={`text-xs transition-transform duration-200 ${foodOpen ? "rotate-180" : ""}`} />
  //           </button>

  //           {/* Dropdown List */}
  //           <div className={`absolute top-11 left-0 w-40 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden transition-all duration-200
  //           ${foodOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
  //           >
  //             {foods.map((food, i) => (
  //               <a key={i} href={food.href}
  //                 onClick={() => setFoodOpen(false)}
  //                 className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
  //               >
  //                 {food.label}
  //               </a>
  //             ))}
  //           </div>
  //         </div>
  //       </div>

  //       {/* Desktop Button */}
  //       <div className="hidden md:block">
  //         <a href="/login"
  //           className="px-5 py-2 text-sm bg-black text-white rounded-lg hover:opacity-80 transition-all"
  //         >
  //           Login
  //         </a>
  //       </div>

  //       {/* Mobile Hamburger */}
  //       <button
  //         onClick={() => setIsOpen(!isOpen)}
  //         className="md:hidden p-2 text-gray-600 hover:text-black transition-colors"
  //       >
  //         {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
  //       </button>
  //     </div>

  //     {/* Mobile Menu */}
  //     <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-72" : "max-h-0"}`}>
  //       <div className="px-4 pb-4 flex flex-col gap-1 border-t border-gray-100 pt-2">

  //         {/* Home */}
  //         <a href="/"
  //           className="block px-3 py-2.5 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all"
  //         >
  //           Home
  //         </a>
  //         {/* About */}
  //         <a href="/about"
  //           className="block px-3 py-2.5 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all"
  //         >
  //           About
  //         </a>

  //         {/* Food Accordion */}
  //         <div>
  //           <button
  //             onClick={() => setMobileFoodOpen(!mobileFoodOpen)}
  //             className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all"
  //           >
  //             Food
  //             <FaChevronDown className={`text-xs transition-transform duration-200 ${mobileFoodOpen ? "rotate-180" : ""}`} />
  //           </button>

  //           {/* Mobile Sub Items */}
  //           <div className={`overflow-hidden transition-all duration-200 ${mobileFoodOpen ? "max-h-40" : "max-h-0"}`}>
  //             <div className="pl-4 flex flex-col gap-1 mt-1">
  //               {foods.map((food, i) => (
  //                 <a key={i} href={food.href}
  //                   className="block px-3 py-2 text-sm text-gray-500 hover:text-black hover:bg-gray-50 rounded-lg transition-all"
  //                 >
  //                   {food.label}
  //                 </a>
  //               ))}
  //             </div>
  //           </div>
  //         </div>

  //         {/* Mobile Login */}
  //         <div className="mt-2 pt-2 border-t border-gray-100">
  //           <a href="/login"
  //             className="block w-full py-2.5 text-sm text-center bg-black text-white rounded-lg hover:opacity-80 transition-all"
  //           >
  //             Login
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   </nav>
  // )
}
