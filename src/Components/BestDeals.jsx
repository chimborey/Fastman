import React from 'react'
import D1 from '../assets/Deals/Deals-img1.png'
import D2 from '../assets/Deals/Deals-img2.png'
import B1 from '../assets/Deals/Deals-bg1.png'
import B2 from '../assets/Deals/Deals-bg2.png'

const BestDeals = () => {
      return (
            <section className=' grid grid-cols-1 md:grid-cols-2 gap-6 mt-7' data-aos='fade-up' data-aos-delay='900'>
                  <div className='w-full overflow-hidden py-3 px-3 bg-center bg-cover bg-no-repeat flex justify-between gap-3 items-center' style={{ backgroundImage: `url(${B1})` }}>
                        <img src={D1} alt="" className='w-44 h-44' />
                        <div className='flex flex-col'>
                              <h3 className=' text-xl font-bold text-black capitalize'>daily snacks</h3>
                              <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde perspiciatis officiis nisi, consequatur recusandae maiores cum harum temporibus veritatis eos, quisquam facere non eaque, doloribus veniam?</p>
                              <button className=' bg-green-300/100 text-white rounded-full px-2 py-2'>shop now</button>
                        </div>
                  </div>
                  <div className='w-full overflow-hidden py-3 px-3 bg-center bg-cover bg-no-repeat flex justify-between gap-3 items-center' style={{ backgroundImage: `url(${B2})` }}>
                        <img src={D1} alt="" className='w-44 h-44' />
                        <div className='flex flex-col'>
                              <h3 className=' text-xl font-bold text-black capitalize'>fresh vegatables</h3>
                              <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde perspiciatis officiis nisi, consequatur recusandae maiores cum harum temporibus veritatis eos, quisquam facere non eaque, doloribus veniam?</p>
                              <button className=' bg-green-300/100 text-white rounded-full px-2 py-2'>shop now</button>
                        </div>
                  </div>
            </section>
      )
}

export default BestDeals