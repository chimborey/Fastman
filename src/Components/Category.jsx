import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { categoryData } from '../Data/data';

const Category = () => {
      return (
            <section className='w-full'>
                  <Swiper
                        slidesPerView={8}
                        spaceBetween={20}
                        loop={true}
                        modules={[Autoplay]}
                        autoplay={{ delay: 1500 }}
                        speed={1500}
                        breakpoints={{
                              320: { slidesPerView: 2, spaceBetween: 10 },
                              640: { slidesPerView: 4, spaceBetween: 15 },
                              1024: { slidesPerView: 6, spaceBetween: 20 },
                              1280: { slidesPerView: 8, spaceBetween: 20 },
                        }}
                  >
                        {categoryData.map((item, i) => (
                              <SwiperSlide key={i}>
                                    <div className='w-full flex flex-col justify-center items-center cursor-pointer gap-2' data-aos="zoom-in" data-aos-delay='600'>
                                          <div className='flex items-center justify-center bg-green-100/75 rounded-full w-20 h-20'>
                                                <img src={item.image} alt={item.label} className='w-16 h-16 object-contain' />
                                          </div>
                                          <div className='text-center'>
                                                <p className='text-sm font-medium'>{item.title}</p>
                                                <h5 className='text-xs text-gray-400'>{item.products}</h5>
                                          </div>
                                    </div>
                              </SwiperSlide>
                        ))}
                  </Swiper>
            </section>
      )
}

export default Category