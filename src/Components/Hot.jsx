import React from 'react'
import H1 from '../assets/Hero_Deals/hot-deals-img.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules'; // ✅ Navigation មិនមែន navigator
import { hotDealsData } from '../Data/data';
import { FaCartShopping, FaHeart } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import { ShopContext } from '../Context/ShopContext';

const Hot = () => {
      const { addToCart, toggleLike, likeCart } = React.useContext(ShopContext)
      return (
            <section className='grid grid-cols-1 md:grid-cols-2 gap-6' data-aos="fade-up" data-aos-delay='600'>
                  {/* Hot Deals Card */}
                  <div className='w-full overflow-hidden bg-green-800 px-4 py-6 rounded-2xl cursor-pointer flex flex-col justify-center items-center gap-3'>
                        <img src={H1} alt="Hot Deals" className='w-full h-20 object-contain' />
                        <h2 className='text-2xl font-bold text-white'>Hot Deals</h2>
                        <p className='text-sm text-gray-300 text-center leading-relaxed'>
                              Discover our hottest deals and discounts on a wide range of products. Don't miss out on these limited-time offers!
                        </p>
                        <button className='bg-white text-green-800 hover:bg-gray-100 font-bold py-2 px-6 rounded-full transition-all'>
                              Shop Now
                        </button>
                  </div>

                  {/* Swiper Carousel */}
                  <div className='w-full overflow-hidden'>
                        <Swiper
                              slidesPerView={2}
                              spaceBetween={16}
                              loop={true}
                              navigation={false} // ✅
                              modules={[Autoplay, Navigation]} // ✅ Navigation
                              autoplay={{ delay: 2000, disableOnInteraction: false }}
                              speed={600}
                              breakpoints={{
                                    320: { slidesPerView: 1, spaceBetween: 10 },
                                    640: { slidesPerView: 2, spaceBetween: 15 },
                                    1024: { slidesPerView: 2, spaceBetween: 16 },
                              }}
                        >
                              {hotDealsData.map((item) => {
                                    const isLike = likeCart.some((likedItem) => likedItem.id === item.id);
                                    return (
                                          <SwiperSlide key={item.id}>
                                                <div className='bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group'>

                                                      {/* Image */}
                                                      <div className='relative overflow-hidden'>
                                                            <img
                                                                  src={item.image}
                                                                  alt={item.title}
                                                                  className='w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500'
                                                            />
                                                            {/* Like Button */}
                                                            <button
                                                                  className='absolute top-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:text-rose-500 transition-colors'
                                                                  onClick={() => toggleLike(item)}
                                                            >
                                                                  <FaHeart size={14} className={isLike ? 'text-rose-500' : 'text-gray-400'} />
                                                            </button>
                                                      </div>

                                                      {/* Content */}
                                                      <div className='flex flex-col gap-2 p-3'>

                                                            {/* Stars */}
                                                            <div className='flex items-center gap-1'>
                                                                  {Array(5).fill(0).map((_, i) => (
                                                                        <FaStar key={i} className='text-yellow-400 text-xs' />
                                                                  ))}
                                                            </div>

                                                            {/* Title */}
                                                            <h3 className='text-sm font-semibold text-gray-800 line-clamp-2 leading-snug'>
                                                                  {item.title}
                                                            </h3>

                                                            {/* Price */}
                                                            <div className='flex items-center gap-2'>
                                                                  <p className='text-green-600 font-bold text-base'>{item.price}</p>
                                                                  <p className='text-gray-400 line-through text-sm'>{item.lessprice}</p>
                                                            </div>

                                                            {/* Add to Cart */}
                                                            <button onClick={() => addToCart(item)} className='w-full flex items-center justify-center gap-2 py-2 bg-green-500 text-white text-sm rounded-xl hover:bg-green-600 transition-all'>
                                                                  <FaCartShopping size={13} />
                                                                  Add to Cart
                                                            </button>
                                                      </div>
                                                </div>
                                          </SwiperSlide>
                                    )
                              })}
                        </Swiper>
                  </div>

            </section>
      )
}

export default Hot