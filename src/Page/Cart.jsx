import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import CartItem from '../Components/CartItem'
import { FaShoppingBag } from 'react-icons/fa'

const Cart = () => {
      const { cart, total, clearCart } = useContext(ShopContext)

      const tax = 10.00
      const grandTotal = (total + tax).toFixed(2)

      return (
            <section className='w-full py-12 overflow-hidden'>
                  <main className='mt-12 container'>

                        {/* Header */}
                        <div className='w-full py-4 font-bold bg-green-100 px-4 rounded-lg flex justify-between items-center mb-6' data-aos='fade-up'>
                              <h3 className='text-2xl capitalize text-black'>Shopping Cart</h3>
                              <div className='flex items-center gap-1'>
                                    <Link to='/' className='capitalize text-gray-600 hover:text-green-600'>Home</Link>
                                    <span className='text-gray-400'>:</span>
                                    <h3 className='capitalize text-green-500 font-bold'>Cart</h3>
                              </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-8' data-aos='fade-up' data-aos-delay='600'>

                              {/* LEFT - Cart Items */}
                              <div className='flex-[2] flex flex-col'>

                                    {/* Table Header */}
                                    <div className='grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 bg-green-100 py-3 px-3 rounded-lg'>
                                          <h3 className='text-sm font-bold capitalize text-gray-700'>Product</h3>
                                          <h3 className='text-sm font-bold capitalize text-gray-700 text-center'>Price</h3>
                                          <h3 className='text-sm font-bold capitalize text-gray-700 text-center'>Quantity</h3>
                                          <h3 className='text-sm font-bold capitalize text-gray-700 text-center'>Subtotal</h3>
                                          <h3 className='text-sm font-bold capitalize text-gray-700 text-center'>Delete</h3>
                                    </div>

                                    {/* Cart Items */}
                                    <div className='bg-white rounded-lg border mt-2' data-aos='fade-up' data-aos-delay='900'>
                                          {cart.length > 0 ? (
                                                cart.map((item) => <CartItem item={item} key={item.id} />)
                                          ) : (
                                                <div className='flex justify-center items-center py-16 flex-col gap-3'>
                                                      <FaShoppingBag size={40} className='text-gray-200' />
                                                      <h3 className='text-2xl text-gray-300 capitalize'>Your cart is empty!</h3>
                                                      <Link to='/shop/shop' className='text-green-600 text-sm font-semibold hover:underline'>
                                                            Continue Shopping →
                                                      </Link>
                                                </div>
                                          )}
                                    </div>

                              </div>

                              {/* RIGHT - Cart Totals */}
                              <div className='flex-1' data-aos='fade-up' data-aos-delay='1200'>
                                    <div className='bg-white border rounded-xl p-6 flex flex-col gap-4 sticky top-4'>
                                          <h3 className='text-lg font-bold text-gray-800 border-b pb-3'>Cart Totals</h3>

                                          <div className='flex justify-between items-center'>
                                                <span className='text-sm text-gray-500'>Subtotal</span>
                                                <span>${total.toFixed(2)}</span>

                                          </div>

                                          <div className='flex justify-between items-center'>
                                                <span className='text-sm text-gray-500'>Estimated Delivery</span>
                                                <span className='text-sm font-bold text-green-600'>Free</span>
                                          </div>

                                          <div className='flex justify-between items-center'>
                                                <span className='text-sm text-gray-500'>Estimated Taxes</span>
                                                <span className='text-sm font-semibold text-gray-800'>USD {tax.toFixed(2)}</span>
                                          </div>

                                          <div className='flex justify-between items-center border-t pt-3'>
                                                <span className='text-base font-bold text-gray-800'>Total</span>
                                                <span className='text-base font-bold text-gray-800'>${grandTotal}</span>
                                          </div>

                                          <Link to={'/checkout'} className='w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition text-sm'>
                                                Proceed to Checkout
                                          </Link>

                                          <button
                                                onClick={clearCart}
                                                className='w-full border border-red-400 text-red-500 hover:bg-red-50 font-semibold py-2 rounded-lg transition text-sm'
                                          >
                                                Clear Cart
                                          </button>
                                    </div>
                              </div>

                        </div>
                  </main>
            </section >
      )
}

export default Cart