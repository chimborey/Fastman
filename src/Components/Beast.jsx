import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { beastDealsData } from '../Data/data';
import { FaShop, FaCartShopping, FaHeart } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import { ShopContext } from '../Context/ShopContext';

const Beast = () => {
      const { addToCart, toggleLike, likeCart } = React.useContext(ShopContext)
      return (
            <section className=''>
                  <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        loop={true}
                        navigation={false}
                        modules={[Autoplay, Navigation]}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        speed={600}
                        breakpoints={{
                              320: { slidesPerView: 1, spaceBetween: 10 },
                              640: { slidesPerView: 2, spaceBetween: 15 },
                              1024: { slidesPerView: 3, spaceBetween: 20 },
                              1280: { slidesPerView: 4, spaceBetween: 20 },
                        }}
                  >
                        {
                        beastDealsData.map((item, index)=>{
                              const isLike = likeCart.some((likedItem) => likedItem.id === item.id);
                              return (

                                    <SwiperSlide key={index}>
                                          <div data-aos="fade-up" data-aos-delay='600' className='bg-white rounded-2xl  border-green-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group border-2'>

                                                {/* Image + Wishlist */}
                                                <div className='relative overflow-hidden'>
                                                      <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className='w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500'
                                                      />
                                                      {/* Wishlist */}
                                                      <button 
                                                            className='absolute top-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:text-rose-500 transition-colors'
                                                            onClick={() => toggleLike(item)}
                                                      >
                                                            <FaHeart size={14} className={isLike ? 'text-rose-500' : 'text-gray-400'} />
                                                      </button>
                                                      {/* Badge */}
                                                      {item.badge && (
                                                            <span className='absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full'>
                                                                  {item.badge}
                                                            </span>
                                                      )}
                                                </div>

                                                {/* Content */}
                                                <div className='flex flex-col gap-2 p-4'>

                                                      {/* Store */}
                                                      <div className='flex items-center gap-1'>
                                                            <FaShop className='text-green-500 text-xs' />
                                                            <p className='text-xs text-gray-400'>by lucky supermarket</p>
                                                      </div>

                                                      {/* Title */}
                                                      <h3 className='font-semibold text-gray-800 text-sm line-clamp-2 leading-snug'>
                                                            {item.title}
                                                      </h3>

                                                      {/* Stars */}
                                                      <div className='flex items-center gap-1'>
                                                            {Array(5).fill(0).map((_, i) => (
                                                                  <FaStar key={i} className='text-yellow-400 text-xs' />
                                                            ))}
                                                            <span className='text-xs text-gray-400 ml-1'>{item.review}</span>
                                                      </div>

                                                      {/* Price */}
                                                      <div className='flex items-center gap-2'>
                                                            <p className='text-green-600 font-bold text-base'>{item.price}</p>
                                                            <p className='text-gray-400 line-through text-sm'>{item.lessprice}</p>
                                                      </div>

                                                      {/* Sold */}
                                                      <p className='text-xs text-gray-400'>Sold: {item.sold}</p>

                                                      {/* Add to Cart Button */}
                                                      <button onClick={() => addToCart(item)} className='mt-1 cursor-pointer absolute top-2 right-3 flex items-center justify-center px-2 py-1 rounded-lg bg-green-500 text-white text-sm hover:bg-green-600 transition-all'>
                                                            add
                                                            <FaCartShopping  size={14} />
                                                      </button>

                                                </div>
                                          </div>
                                    </SwiperSlide>
                     )})}
                  </Swiper>
            </section>
            )
}

export default Beast