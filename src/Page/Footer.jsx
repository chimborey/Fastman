import React from 'react'
import { FaPhone, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { IoLocation } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
      return (
            <section className='w-full overflow-hidden py-14'>
                  <main className='mt-12 container' data-aos='zoom-in' data-aos-delay="600">
                        <div className='w-full flex flex-col md:flex-row items-start gap-10 justify-between'>

                              {/* Logo */}
                              <div className='flex flex-col items-start min-w-[200px]'>
                                    <Link to='/runman' className='text-xl flex font-bold h-12 items-center'>
                                          <h3 className='text-red-500'>Run</h3>
                                          <span className='text-blue-500'>man</span>
                                    </Link>
                                    <p className='text-sm text-gray-400'>We're Grocery Shop, an innovative team of food suppliers.</p>
                                    <div className='flex flex-col space-y-3 mt-3'>
                                          <div className='flex items-center gap-3'>
                                                <IoLocation className='text-white cursor-pointer w-7 h-7 p-2 rounded-full bg-green-500 shrink-0' />
                                                <p className='text-sm text-gray-400'>789 Inner Lane, Biyes park, California</p>
                                          </div>
                                          <div className='flex items-center gap-3'>
                                                <FaPhone className='text-white cursor-pointer w-7 h-7 p-2 rounded-full bg-green-500 shrink-0' />
                                                <p className='text-sm text-gray-400'>+00 123 456 789 or +00 987 654 012</p>
                                          </div>
                                          <div className='flex items-center gap-3'>
                                                <HiOutlineMail className='text-white cursor-pointer w-7 h-7 p-2 rounded-full bg-green-500 shrink-0' />
                                                <p className='text-sm text-gray-400'>info@runman.com</p>
                                          </div>
                                    </div>
                              </div>

                              {/* Information */}
                              <div className='flex flex-col'>
                                    <h3 className='text-lg font-bold text-black capitalize h-12 flex items-start'>information</h3>
                                    <div className='flex flex-col space-y-3'>
                                          <span className='text-sm text-gray-400'>Become a Vendor</span>
                                          <span className='text-sm text-gray-400'>Affiliate Program</span>
                                          <span className='text-sm text-gray-400'>Privacy Policy</span>
                                          <span className='text-sm text-gray-400'>Our Suppliers</span>
                                          <span className='text-sm text-gray-400'>Extended Plan</span>
                                          <span className='text-sm text-gray-400'>Community</span>
                                    </div>
                              </div>

                              {/* Support */}
                              <div className='flex flex-col'>
                                    <h3 className='text-lg font-bold text-black capitalize h-12 flex items-start'>support</h3>
                                    <div className='flex flex-col space-y-3'>
                                          <span className='text-sm text-gray-400'>Help Center</span>
                                          <span className='text-sm text-gray-400'>Contact Us</span>
                                          <span className='text-sm text-gray-400'>Report Abuse</span>
                                          <span className='text-sm text-gray-400'>Submit and Dispute</span>
                                          <span className='text-sm text-gray-400'>Policies & Rules</span>
                                          <span className='text-sm text-gray-400'>Online Shopping</span>
                                    </div>
                              </div>

                              {/* Account */}
                              <div className='flex flex-col'>
                                    <h3 className='text-lg font-bold text-black capitalize h-12 flex items-start'>account</h3>
                                    <div className='flex flex-col capitalize space-y-3'>
                                          <span className='text-sm text-gray-400'>My Account</span>
                                          <span className='text-sm text-gray-400'>Order History</span>
                                          <span className='text-sm text-gray-400'>Shopping Cart</span>
                                          <span className='text-sm text-gray-400'>Compare</span>
                                          <span className='text-sm text-gray-400'>Help Ticket</span>
                                          <span className='text-sm text-gray-400'>Wishlist</span>
                                    </div>
                              </div>

                              {/* Grocery */}
                              <div className='flex flex-col'>
                                    <h3 className='text-lg font-bold text-black capitalize h-12 flex items-start'>grocery</h3>
                                    <div className='flex flex-col capitalize space-y-3'>
                                          <span className='text-sm text-gray-400'>Dairy & Eggs</span>
                                          <span className='text-sm text-gray-400'>Meat & Seafood</span>
                                          <span className='text-sm text-gray-400'>Breakfast Food</span>
                                          <span className='text-sm text-gray-400'>Household Supplies</span>
                                          <span className='text-sm text-gray-400'>Bread & Bakery</span>
                                          <span className='text-sm text-gray-400'>Pantry Staples</span>
                                    </div>
                              </div>

                              {/* Shop on The Go */}
                              <div className='flex flex-col'>
                                    <h3 className='text-lg font-bold text-black capitalize h-12 flex items-start'>Shop on The Go</h3>
                                    <div className='flex flex-col gap-3'>
                                          <p className='text-sm text-gray-500'>SnackBasket App is available. Get it now!</p>

                                          {/* App Store */}
                                          <a href="#" className='flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg hover:opacity-80 transition-all'>
                                                <svg viewBox="0 0 24 24" className='w-5 h-5 fill-white shrink-0'>
                                                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                                </svg>
                                                <div>
                                                      <p className='text-xs text-gray-300 leading-none'>Download on the</p>
                                                      <p className='text-sm font-semibold leading-tight'>App Store</p>
                                                </div>
                                          </a>

                                          {/* Google Play */}
                                          <a href="#" className='flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg hover:opacity-80 transition-all'>
                                                <svg viewBox="0 0 24 24" className='w-5 h-5 fill-white shrink-0'>
                                                      <path d="M3.18 23.76c.3.17.64.24.99.2L14.9 12 11.1 8.2 3.18 23.76zm16.57-10.7l-2.65-1.54-3.24 3.24 3.24 3.24 2.67-1.55c.76-.44.76-1.95-.02-2.39zM3.54.48C3.22.16 2.78.02 2.33.08L13.07 10.8l-3.89-3.89L3.54.48zm7.57 11.51L2.33 23.92c.45.06.9-.08 1.21-.4l9.53-9.53-2-2z" />
                                                </svg>
                                                <div>
                                                      <p className='text-xs text-gray-300 leading-none'>Get it on</p>
                                                      <p className='text-sm font-semibold leading-tight'>Google Play</p>
                                                </div>
                                          </a>

                                          {/* Social Icons */}
                                          <div className='flex items-center gap-2'>
                                                <a href="#" className='w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-green-500 transition-all'>
                                                      <FaTwitter size={14} />
                                                </a>
                                                <a href="#" className='w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-green-500 transition-all'>
                                                      <FaFacebook size={14} />
                                                </a>
                                                <a href="#" className='w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-green-500 transition-all'>
                                                      <FaInstagram size={14} />
                                                </a>
                                                <a href="#" className='w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-green-500 transition-all'>
                                                      <FaYoutube size={14} />
                                                </a>
                                          </div>
                                    </div>
                              </div>

                        </div>

                        {/* Copyright */}
                        <div className='flex justify-center items-center mt-10 pt-4 border-t border-gray-100'>
                              <p className='text-sm text-gray-400'>©2026. All Rights Reserved By Runman</p>
                        </div>
                  </main>
            </section>
      )
}

export default Footer