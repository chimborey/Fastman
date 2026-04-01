import React from 'react'
import { bannerData } from '../Data/data'

const Banner = () => {
      return (
            <section>
                  {/* banner-text-left */}
                  <div className=' flex items-start justify-normal' data-aos='fade-up' data-aos-delay='300'>
                        <h3 className=' text-2xl text-black capitalize font-bold'>todays best deals.</h3>
                  </div>
                  {/* banner-img-right */}
                  <div className=' grid grid-cols-1 md:grid-cols-4 gap-6 mt-7'>
                        {
                              bannerData.map((item) => (
                                    <div data-aos='fade-up' data-aos-delay='600' key={item.id} className='flex justify-center relative items-center w-full rounded-lg overflow-hidden'>
                                          <img src={item.image} alt={item.title} className=' w-full h-48 object-cover' />
                                          <p className=' absolute top-16 left-1 bottom-16 -translate-y-4 text-black text-4xl font-bold capitalize'>
                                                {item.heading}
                                          </p>
                                          <div>
                                                <button className=' absolute bottom-4 left-1 bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300'>
                                                      shop now
                                                </button>
                                          </div>
                                    </div>
                              ))
                        }
                  </div>
            </section>
      )
}

export default Banner