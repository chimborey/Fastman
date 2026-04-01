import React from 'react'
import { Link } from 'react-router-dom'
const Account = () => {
      return (
            <section className=' w-full overflow-hidden py-14'>
                  <main className=' mt-12 container'>
                        <div data-aos='fade-up' data-aos-delay='300' className='w-full overflow-hidden py-2 font-bold bg-green-200 px-2 rounded-lg flex justify-between items-center'>
                              <h3 className='text-2xl capitalize text-black'>account</h3>
                              <div className='flex items-center gap-1'>
                                    <Link to={'/'} className=' capitalize'>home:</Link>
                                    <h3 className=' capitalize text-green-500'>account</h3>
                              </div>
                        </div>
                        {/* account */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-7'>
                              {/* account-login */}
                              <div className='flex flex-col border-2 border-green-400 rounded-lg w-full overflow-hidden bg-white px-4 py-4 shadow-md shadow-green-400' data-aos='fade-up' data-aos-delay='600'>
                                    <h5 className='text-md capitalize text-black font-bold'>login</h5>
                                    <form className='flex flex-col space-y-3 mt-5'>
                                          {/* username or email address */}
                                          <div className='flex flex-col space-y-2 '>
                                                <label htmlFor="" className=' capitalize text-md text-black'>username or email address</label>
                                                <input type="text" placeholder='first name' className='w-full py-2 px-2 capitalize text-gray-400 border-2 bg-white rounded-lg focus:outline-none' />
                                          </div>
                                          {/* password */}
                                          <div className='flex flex-col space-y-2 '>
                                                <label htmlFor="" className=' capitalize text-md text-black'>password</label>
                                                <input type="text" placeholder='password' className='w-full py-2 px-2 capitalize text-gray-400 border-2 bg-white rounded-lg focus:outline-none' />
                                          </div>
                                          {/* btn */}
                                          <div className=' flex items-center gap-3'>
                                                <button className='py-2 px-9 rounded-lg bg-green-400 text-white capitalize'>login</button>
                                                <div className=' flex items-center gap-1'>
                                                      <input type="checkbox" name="" id="" />
                                                      <Link className=' underline text-md capitalize'>remember me</Link>
                                                </div>
                                          </div>
                                    </form>
                              </div>

                              {/* account-register */}
                              <div className='flex flex-col border-2 border-green-400 rounded-lg w-full overflow-hidden bg-white px-4 py-4 shadow-md shadow-green-400' data-aos='fade-up' data-aos-delay='600'>
                                    <h5 className='text-md capitalize text-black font-bold'>register</h5>
                                    <form className='flex flex-col space-y-3 mt-5'>
                                          {/* username */}
                                          <div className='flex flex-col space-y-2 '>
                                                <label htmlFor="" className=' capitalize text-md text-black'>username or email address</label>
                                                <input type="text" placeholder='user name' className='w-full py-2 px-2 capitalize text-gray-400 border-2 bg-white rounded-lg focus:outline-none' />
                                          </div>
                                          {/* email address */}
                                          <div className='flex flex-col space-y-2 '>
                                                <label htmlFor="" className=' capitalize text-md text-black'>username or email address</label>
                                                <input type="text" placeholder='email' className='w-full py-2 px-2 capitalize text-gray-400 border-2 bg-white rounded-lg focus:outline-none' />
                                          </div>
                                          {/* password */}
                                          <div className='flex flex-col space-y-2 '>
                                                <label htmlFor="" className=' capitalize text-md text-black'>password</label>
                                                <input type="text" placeholder='password' className='w-full py-2 px-2 capitalize text-gray-400 border-2 bg-white rounded-lg focus:outline-none' />
                                          </div>
                                          {/* desc */}
                                          <div>
                                                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti atque consequatur molestias harum perferendis doloribus deserunt dignissimos ea. Saepe neque magni voluptatum earum nihil. Illum fuga vitae ex esse ducimus itaque ipsum odit, iure voluptatibus at expedita quas tempore quaerat dolorum rem assumenda dignissimos atque aliquam placeat laudantium nulla. <span className=' text-green-400'>privacy policy</span></p>
                                          </div>
                                          {/* btn */}
                                          <button className='py-2 px-9 rounded-lg bg-green-400 text-white capitalize'>register</button>
                                    </form>
                              </div>

                        </div>
                  </main>
            </section>
      )
}

export default Account