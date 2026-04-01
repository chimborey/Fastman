import React from 'react'
import { offersData } from '../Data/data'
import F1 from '../assets/Offer/offer-shape.png'
const Offer = () => {
      return (
            <section className=' grid grid-cols-1 md:grid-cols-2 gap-6' data-aos="fade-up" data-aos-delay='600'>
                  {
                        offersData.map((offer, i) => (
                              <div  key={i} className=' flex relative justify-between items-center  rounded-lg overflow-hidden group cursor-pointer ' style={{backgroundImage: `url(${F1})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                                    <div className='absolute top-0 left-0 right-0 bottom-0 bg-green-400/40'/>
                                    <img src={offer.image} alt={offer.title} className=' px-3 z-10 w-44 h-44 object-cover transition-transform duration-300' />
                                    <div className=' px-3 z-10 flex items-center  flex-col justify-center'>
                                          <div className=' text-center text-white'>
                                                <h3 className=' text-2xl font-bold mb-2'>{offer.title}</h3>
                                                <p className=' text-sm'>{offer.description}</p>
                                          </div>
                                          <div className='mt-2'>
                                          <button className=' bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300'>
                                                shop now
                                          </button>
                                    </div>
                                    </div>
                                    
                                    
                              </div>
                        ))
                  }
            </section>
      )
}

export default Offer