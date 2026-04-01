import React, { useEffect, useRef, useState } from 'react'
import { FaChevronDown, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {

      // scroll
      const [scrolled, setScrolled] = useState(false);
      useEffect(() => {
            const handleScrolled = () => setScrolled(window.scrollY > 50);
            window.addEventListener("scroll", handleScrolled);
            return () => window.removeEventListener("scroll", handleScrolled);
      }, [])

      // menu data
      const menu = [
            { id: 1, name: "home", path: "/" },
            {
                  id: 2, name: "shop",path: "/shop"
            },
            {
                  id: 3, name: "Pages",
                  menuList: [
                        { id: 1, name: "cart", path: "/page/cart" },
                        { id: 2, name: "wishlist", path: "/page/like" },
                        { id: 3, name: "checkout", path: "/page/checkout" },
                        { id: 4, name: "account", path: "/page/account" },
                  ]
            },
            {
                  id: 4, name: "blog", path: "/blog"
            },
            { id: 5, name: "contact us", path: "/contact" },
      ]

      // active link
      const location = useLocation();
      const activeLink = (path) => location.pathname === path;
      const classLink = (path) =>
            `relative transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:rounded-lg after:transition-all after:duration-300
            ${activeLink(path) ? "text-amber-500 after:w-full after:bg-amber-500" : "text-gray-600 hover:text-amber-500 after:w-0 hover:after:w-full hover:after:bg-amber-300"}`

      // dropdown
      const [openId, setOpenId] = useState(null);
      const dropdownRef = useRef(null);
      useEffect(() => {
            const handleDrop = (e) => {
                  if (dropdownRef.current && !dropdownRef.current.contains(e.target))
                        setOpenId(null);
            }
            document.addEventListener("mousedown", handleDrop);
            return () => document.removeEventListener("mousedown", handleDrop);
      }, [])

      // mobile
      const [mobileOpen, setMobileOpen] = useState(false);
      const [mobileOpenId, setMobileOpenId] = useState(null);


      const {quantity, likeCart} = React.useContext(ShopContext)
      return (
            <section className={`w-full top-0 left-0 fixed z-50 shadow-md shadow-gray-200 backdrop-blur-3xl ${scrolled ? "" : ""}`}>
                  <nav className='flex justify-between items-center container h-14' ref={dropdownRef} data-aos='fade-down' data-aos-delay="500">

                        {/* Logo */}
                        <Link to="/" className='text-xl font-bold'>
                              <span className='text-amber-500'>Fast</span>man
                        </Link>

                        {/* Desktop Menu */}
                        <div className='hidden md:flex items-center gap-7 capitalize'>
                              {menu.map((link) => (
                                    <div key={link.id} className='relative'>
                                          {link.menuList ? (
                                                <button
                                                      onClick={() => setOpenId(openId === link.id ? null : link.id)}
                                                      className='flex items-center gap-1 capitalize text-sm text-gray-600 hover:text-amber-500 transition-all'
                                                >
                                                      {link.name}
                                                      <FaChevronDown className={`text-xs transition-transform duration-200 ${openId === link.id ? "rotate-180" : ""}`} />
                                                </button>
                                          ) : (
                                                <Link to={link.path} className={`text-sm ${classLink(link.path)}`}>
                                                      {link.name}
                                                </Link>
                                          )}

                                          {/* Dropdown */}
                                          {link.menuList && (
                                                <div className={`absolute top-8 left-0 w-44 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden transition-all duration-200
                                                      ${openId === link.id ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
                                                >
                                                      {link.menuList.map((item) => (
                                                            <Link
                                                                  key={item.id}
                                                                  to={item.path}
                                                                  onClick={() => setOpenId(null)}
                                                                  className='block px-4 py-2.5 text-sm text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors capitalize'
                                                            >
                                                                  {item.name}
                                                            </Link>
                                                      ))}
                                                </div>
                                          )}
                                    </div>
                              ))}
                        </div>

                        {/* Desktop Right */}
                        <div className='hidden md:flex items-center gap-2'>

                              {/* Like */}
                              <Link to="/like" className='relative p-2 text-gray-600 hover:text-rose-500 transition-colors'>
                                    <FaHeart size={30} />
                                    <span className=' absolute -top-0 -right-1 bg-rose-500 text-white text-xs rounded-full flex items-center justify-center w-4 h-4'>{likeCart.length}</span>
                              </Link>

                              {/* Cart */}
                              <Link to="/cart" className='relative p-2 text-gray-600 hover:text-amber-500 transition-colors'>
                                    <FaShoppingCart size={30} />
                                    <span className=' absolute -top-0 -right-1 bg-amber-500 text-xs text-white rounded-full flex items-center justify-center w-4 h-4'>{quantity}</span>
                              </Link>
                        </div>

                        {/* Mobile Right */}
                        <div className='flex md:hidden items-center gap-1'>

                              <Link to="/like" className='relative p-2 text-gray-600 hover:text-rose-500 transition-colors'>
                                    <FaHeart size={30} />
                                    <span className=' absolute -top-0 -right-1 bg-rose-500 text-white text-xs rounded-full flex items-center justify-center w-4 h-4'>{likeCart.length}</span>
                              </Link>

                              {/* Cart */}
                              <Link to="/cart" className='relative p-2 text-gray-600 hover:text-amber-500 transition-colors'>
                                    <FaShoppingCart size={30} />
                                    <span className=' absolute -top-0 -right-1 bg-amber-500 text-xs text-white rounded-full flex items-center justify-center w-4 h-4'>{quantity}</span>
                              </Link>

                              {/* Hamburger */}
                              <button
                                    onClick={() => setMobileOpen(!mobileOpen)}
                                    className='flex flex-col gap-1.5 p-2'
                              >
                                    <span className={`w-5 h-0.5 bg-gray-600 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                                    <span className={`w-5 h-0.5 bg-gray-600 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                                    <span className={`w-5 h-0.5 bg-gray-600 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                              </button>
                        </div>

                  </nav>

                  {/* Mobile Menu */}
                  <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-96" : "max-h-0"}`}>
                        <div className='px-4 pb-4 flex flex-col gap-1 border-t border-gray-100 pt-2'>
                              {menu.map((link) => (
                                    <div key={link.id}>
                                          {link.menuList ? (
                                                <>
                                                      <button
                                                            onClick={() => setMobileOpenId(mobileOpenId === link.id ? null : link.id)}
                                                            className='w-full flex items-center justify-between px-3 py-2.5 text-sm text-gray-600 hover:text-amber-500 rounded-lg hover:bg-amber-50 transition-all capitalize'
                                                      >
                                                            {link.name}
                                                            <FaChevronDown className={`text-xs transition-transform duration-200 ${mobileOpenId === link.id ? "rotate-180" : ""}`} />
                                                      </button>
                                                      <div className={`overflow-hidden transition-all duration-200 ${mobileOpenId === link.id ? "max-h-52" : "max-h-0"}`}>
                                                            <div className='pl-4 flex flex-col gap-1 mt-1'>
                                                                  {link.menuList.map((item) => (
                                                                        <Link
                                                                              key={item.id}
                                                                              to={item.path}
                                                                              onClick={() => setMobileOpen(false)}
                                                                              className='block px-3 py-2 text-sm text-gray-500 hover:text-amber-500 rounded-lg hover:bg-amber-50 transition-all capitalize'
                                                                        >
                                                                              {item.name}
                                                                        </Link>
                                                                  ))}
                                                            </div>
                                                      </div>
                                                </>
                                          ) : (
                                                <Link
                                                      to={link.path}
                                                      onClick={() => setMobileOpen(false)}
                                                      className='block px-3 py-2.5 text-sm text-gray-600 hover:text-amber-500 rounded-lg hover:bg-amber-50 transition-all capitalize'
                                                >
                                                      {link.name}
                                                </Link>
                                          )}
                                    </div>
                              ))}
                        </div>
                  </div>

            </section>
      )
}

export default Navbar