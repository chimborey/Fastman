import React from 'react'
import IMG from '../assets/Deals/Deals-img1.png'
const Grocery = () => {
  return (
    <section className=' flex justify-between items-center relative z-10'>
      <div className=' flex flex-col justify-center items-center space-y-3 mt-12'>
            <h3 className=' text-white text-4xl capitalize'>don't miss out in <br /> grocery deals</h3>
            <p className=' uppercase text-white font-bold text-md'>sing up for the update newsletter</p>
            <div className=' flex relative items-center justify-between w-full'>
                  <input type="text" name="" id="" placeholder='your email address...' className='w-full py-3 bg-purple-300/40 px-2 border-white outline-none rounded-lg'/>
                  <button className=' absolute right-3 py-2 px-7 rounded-lg bg-green-400 text-white capitalize'>subit</button>
            </div>
      </div>
      <div>
            <img src={IMG} alt="" className='w-full h-44 md:h-72 object-cover'/>
      </div>
    </section>
  )
}

export default Grocery