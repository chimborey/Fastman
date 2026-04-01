import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom';

const Checkout = () => {
      const { cart, total } = useContext(ShopContext)
      const tax = 10.00;
      const grandTotal = (total + tax).toFixed(2)
      return (
            <section className=' w-full overflow-hidden py-14'>
                  <main className=' mt-12 container'>
                        <div className=' flex flex-col md:flex-row gap-3'>
                              {/* Checkout-left */}
                              <div className=' flex-[2] flex-col gap-3 space-y-4'>
                                    {/* contact */}
                                    <div className=' flex flex-col space-y-2'>

                                          <label htmlFor="" className='text-xl text-black capitalize font-bold'>contact</label>

                                          <input type="text" placeholder='email or mobile phone number' className='w-full py-2 px-2 text-gray-400 bg-white rounded-lg border-2 focus:outline-none capitalize' />

                                          <div className=' flex items-center gap-2'>
                                                <input type="checkbox" name="" id="" />
                                                <p className=' text-sm text-black'>Email me with news and offers</p>
                                          </div>
                                    </div>
                                    {/* delivery */}
                                    <div className=' flex flex-col space-y-2'>

                                          <h3 htmlFor="" className='text-xl text-black capitalize font-bold'>delivery</h3>

                                          <div className=' flex items-center gap-3'>

                                                <div className=' flex items-center gap-2'>
                                                      <input type="radio" name="" id="" />
                                                      <p className='text-sm capitalize'>chip</p>
                                                </div>

                                                <div className=' flex items-center gap-2'>
                                                      <input type="radio" name="" id="" />
                                                      <p className='text-sm capitalize'>in store</p>
                                                </div>
                                          </div>

                                          <input type="text" placeholder='country' className='w-full py-2 px-2 text-gray-400 bg-white rounded-lg border-2 focus:outline-none capitalize' />

                                          <div className=' flex items-center gap-3'>
                                                <input type="text" placeholder='First name' className='w-full py-2 px-2 text-gray-400 bg-white rounded-lg border-2 focus:outline-none capitalize' />
                                                <input type="text" placeholder='last name' className='w-full py-2 px-2 text-gray-400 bg-white rounded-lg border-2 focus:outline-none capitalize' />
                                          </div>

                                          <input type="text" placeholder='address' className='w-full py-2 px-2 text-gray-400 bg-white rounded-lg border-2 focus:outline-none capitalize' />

                                          <input type="text" placeholder='apartment suite, etc: loptional' className='w-full py-2 px-2 text-gray-400 bg-white rounded-lg border-2 focus:outline-none capitalize' />

                                          <div className=' flex items-center gap-3'>
                                                <input type="text" placeholder='city' className='w-full py-2 px-2 text-gray-400 bg-white rounded-lg border-2 focus:outline-none capitalize' />
                                                <input type="text" placeholder='postal code.' className='w-full py-2 px-2 text-gray-400 bg-white rounded-lg border-2 focus:outline-none capitalize' />
                                          </div>

                                          <div className=' flex items-center'>
                                                <input type="checkbox" name="" id="" />
                                                <p className=' text-sm text-black'>save this information for next time</p>
                                          </div>
                                    </div>
                                    {/* shipping method */}
                                    <div className=' flex flex-col space-y-2'>

                                          <h3 htmlFor="" className='text-xl text-black capitalize font-bold'>shipping method</h3>
                                          <div className=' w-full border-t-2 flex justify-between items-center bg-blue-200  rounded-lg px-3 py-2'>
                                                <h3 className='text-black text-md capitalize'>started</h3>
                                                <span className=' uppercase text-md font-bold text-green-400'>free</span>
                                          </div>
                                    </div>
                                    {/* payments */}
                                    <div className=' flex flex-col space-y-2'>

                                          <h3 htmlFor="" className='text-xl text-black capitalize font-bold'>payments</h3>

                                          <p className=' text-sm text-gray-400'>All</p>

                                          <div className=' w-full overflow-hidden py-3 px-3 space-y-2 border-2 rounded-lg'>

                                                <input type="text" placeholder='card number' className='w-full py-2 px-2 text-gray-400 bg-white rounded-lg border-2 focus:outline-none capitalize' />

                                                <div className=' flex items-center gap-3'>

                                                      <input type="text" placeholder='expiration data (MM/YY)' className='w-full py-2 px-2 text-gray-400 bg-white rounded-lg border-2 focus:outline-none capitalize' />
                                                      <input type="text" placeholder='security code' className='w-full py-2 px-2 text-gray-400 bg-white rounded-lg border-2 focus:outline-none capitalize' />
                                                </div>

                                                <input type="text" placeholder='name on card' className='w-full py-2 px-2 text-gray-400 bg-white rounded-lg border-2 focus:outline-none capitalize' />
                                          </div>

                                          <Link to={'/order'} className=' w-full bg-black px-3 py-2 capitalize rounded  text-center'>
                                                <button className=' text-white text-md capitalize '>pay now</button>
                                          </Link>
                                    </div>
                              </div>
                              {/* Checkout-right */}
                              <div className=' flex-1 flex-col relative w-full overflow-hidden border-2 rounded-lg space-y-5 px-3 py-5'>
                                    {
                                          cart.map((item) => (
                                                <div key={item.id}>
                                                      {/* right-top */}
                                                      <div className=' flex items-center gap-3 border-b-2 py-3'>

                                                            <img src={item.image} alt="" className='w-12 h-12 cursor-pointer' />

                                                            <div className=' flex flex-col'>
                                                                  <h3 className='text-sm capitalize'>{item.title}</h3>
                                                                  <span className=' text-red-500'>{item.price}</span>
                                                            </div>
                                                      </div>
                                                </div>
                                          ))
                                    }

                                    {/* right-bottom */}
                                    <div className=' bottom-0 left-2 right-2 '>

                                          <div className=' flex flex-col space-y-4'>

                                                <div className=' flex items-center text-black font-bold text-md justify-between'>
                                                      <h3>SubTotal:</h3>
                                                      <span>${total.toFixed(2)}</span>
                                                </div>

                                                <div className=' flex items-center text-black font-bold text-md justify-between'>
                                                      <h3>Shopping:</h3>
                                                      <span>Enter address</span>
                                                </div>

                                                <div className='flex justify-between items-center'>
                                                      <span className='text-sm text-blck'>Estimated Taxes</span>
                                                      <span className='text-sm font-semibold text-blck'>USD {tax.toFixed(2)}</span>
                                                </div>

                                                <div className='flex justify-between items-center border-t pt-3'>
                                                      <span className='text-base font-bold text-black'>Total</span>
                                                      <span className='text-base font-bold text-black'>${grandTotal}</span>
                                                </div>

                                                <Link to={'/shop'} className='w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition text-sm'>
                                                      Place order
                                                </Link>

                                                <Link to={'/cart'} className='w-full text-center bg-white  hover:bg-green-700 text-black border-2 font-bold py-3 rounded-lg transition text-sm'>
                                                      back to cart
                                                </Link>
                                          </div>
                                    </div>
                              </div>

                        </div>
                  </main>
            </section>
      )
}

export default Checkout