import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MdOutlineMail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
const Contact = () => {
      return (
            <section className='w-full overflow-hidden py-14'>
                  <main className=' mt-12 container'>
                        <div className='w-full overflow-hidden py-2 font-bold bg-green-200 px-2 rounded-lg flex justify-between items-center' data-aos='fade-up' data-aos-delay='300'>
                              <h3 className='text-2xl capitalize text-black'>contact</h3>
                              <div className='flex items-center gap-1'>
                                    <Link to={'/'} className=' capitalize'>home:</Link>
                                    <h3 className=' capitalize text-green-500'>contact</h3>
                              </div>
                        </div>
                        {/* account */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-7'>

                              {/* account-login */}
                              <div className='flex flex-col border-2 border-green-400 rounded-lg w-full overflow-hidden bg-white px-4 py-4 shadow-md shadow-green-400' data-aos='fade-up' data-aos-delay='600'>
                                    <h5 className='text-md capitalize text-black font-bold'>login</h5>
                                    <form className='flex flex-col space-y-3 mt-5'>
                                          {/* contact01 */}
                                          <div className='flex items-center gap-3'>
                                                {/* fullname */}
                                                <div className='flex flex-col space-y-2  w-full'>
                                                      <label htmlFor="" className=' capitalize text-md text-black'>full name</label>
                                                      <input type="text" placeholder='full name' className='w-full py-2 px-2 capitalize text-gray-400 border-2 bg-white rounded-lg focus:outline-none' />
                                                </div>
                                                {/* emial address */}
                                                <div className='flex flex-col space-y-2  w-full'>
                                                      <label htmlFor="" className=' capitalize text-md text-black'>emial address</label>
                                                      <input type="text" placeholder='emial address' className='w-full py-2 px-2 capitalize text-gray-400 border-2 bg-white rounded-lg focus:outline-none' />
                                                </div>
                                          </div>
                                          {/* contact02 */}
                                          <div className='flex items-center gap-3'>
                                                {/* phone number */}
                                                <div className='flex flex-col space-y-2  w-full'>
                                                      <label htmlFor="" className=' capitalize text-md text-black'>phone number</label>
                                                      <input type="text" placeholder='phone number' className='w-full py-2 px-2 capitalize text-gray-400 border-2 bg-white rounded-lg focus:outline-none' />
                                                </div>
                                                {/* subject */}
                                                <div className='flex flex-col space-y-2  w-full'>
                                                      <label htmlFor="" className=' capitalize text-md text-black'>subject</label>
                                                      <input type="text" placeholder='subject' className='w-full py-2 px-2 capitalize text-gray-400 border-2 bg-white rounded-lg focus:outline-none' />
                                                </div>
                                          </div>
                                          {/* message */}
                                          <div>
                                                <textarea name="type your messages" id="" placeholder='type your messages' className='w-full overflow-hidden focus:outline-none px-3 py-3 rounded-lg border-2 capitalize'></textarea>
                                          </div>
                                          {/* btn */}
                                          <div>
                                                <button className=' py-2 px-7 rounded-lg bg-green-600 text-white capitalize cursor-pointer'>send messages</button>
                                          </div>
                                    </form>
                              </div>

                              {/* context */}
                              <div className='flex flex-col border-2 border-green-400 rounded-lg w-full h-60 bg-white px-4 py-4 shadow-md shadow-green-400' data-aos='fade-up' data-aos-delay='600'>
                                    <h5 className='text-md capitalize text-black font-bold'>get in toch</h5>
                                    <div className=' flex items-center gap-3 mt-3'>
                                          <FaPhone className='w-12 h-12 rounded-full bg-white border-2 border-green-300 py-3 px-3'/>
                                          <p className='text-green-500'>+855 123 456 789</p>
                                    </div>
                                     <div className=' flex items-center gap-3 mt-3'>
                                          <MdOutlineMail className='w-12 h-12 rounded-full bg-white border-2 border-green-300 py-3 px-3'/>
                                          <p className='text-green-500'>fastman2026@gmail.com</p>
                                    </div>
                                    <div className=' flex items-center gap-3 mt-3'>
                                          <MdLocationPin className='w-12 h-12 rounded-full bg-white border-2 border-green-300 py-3 px-3'/>
                                          <p className='text-green-500'>123, 457st, phnompenh, cambodai</p>
                                    </div>
                              </div>
                        </div>
                  </main>
            </section>
      )
}

export default Contact