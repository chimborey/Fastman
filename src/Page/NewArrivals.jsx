import React from 'react'
import { organicData } from '../Data/data'
import { ShopContext } from '../Context/ShopContext'
import { FaCartShopping, FaHeart, FaShop, FaStar } from 'react-icons/fa6'

const NewArrivals = () => {
      const { addToCart, toggleLike, likeCart } = React.useContext(ShopContext)
      return (
            <section className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-7' data-aos="fade-up" data-aos-delay='600'>

                  {
                        organicData.map((item) => {
                              const isLike = likeCart.some((likedItem) => likedItem.id === item.id);
                              return (
                                    <div data-aos="fade-up" data-aos-delay='600'>
                                          <div key={item.id} className=' cursor-pointer w-full relative overflow-hidden border border-black rounded-lg bg-white'>
                                                <img src={item.image} alt={item.title} className='w-full h-48 object-cover' />
                                                <div className=' flex flex-col p-4'>
                                                      <div className='flex items-center gap-2'>
                                                            <p className='text-green-600 font-bold text-base'>{item.price}</p>
                                                            <p className='text-gray-400 line-through text-sm'>{item.lessprice}</p>
                                                      </div>
                                                      {/* Store */}
                                                      <div className='flex items-center gap-1'>
                                                            <FaShop className='text-green-500 text-xs' />
                                                            <p className='text-xs text-gray-400'>by lucky supermarket</p>
                                                      </div>
                                                      {/* title */}
                                                      <h3 className='text-sm font-semibold'>{item.title}</h3>
                                                      {/* Stars */}
                                                      <div className='flex items-center gap-1'>
                                                            {Array(5).fill(0).map((_, i) => (
                                                                  <FaStar key={i} className='text-yellow-400 text-xs' />
                                                            ))}
                                                            <span className='text-xs text-gray-400 ml-1'>{item.review}</span>
                                                      </div>
                                                      {/* Sold */}
                                                      <p className='text-xs text-gray-400'>Sold: {item.sold}</p>
                                                </div>
                                                {/* HEART */}
                                                <button
                                                      className='absolute top-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:text-rose-500 transition-colors'
                                                      onClick={() => toggleLike(item)}
                                                >
                                                      <FaHeart size={14} className={isLike ? 'text-rose-500' : 'text-gray-400'} />
                                                </button>
                                                {/* Add to Cart Button */}
                                                <button onClick={() => addToCart(item)} className='mt-1 cursor-pointer absolute top-2 right-3 flex items-center justify-center px-2 py-1 bg-green-500 text-white text-sm hover:bg-green-600 transition-all rounded-tl-full  rounded-br-full'>
                                                      add
                                                      <FaCartShopping size={14} />
                                                </button>
                                                <button className='mt-1 cursor-pointer absolute bottom-2 right-3 flex items-center justify-center px-2 py-1 bg-red-500 text-white text-sm hover:bg-green-600 transition-all rounded-tl-full  rounded-br-full'>
                                                      {item.sale}
                                                </button>
                                          </div>
                                    </div>
                              )

                        })
                  }
            </section>
      )
}

export default NewArrivals