import React from 'react'
import IMG from '../assets/Delivery/delivery-man.png'
import Bg from '../assets/BestSales/special-snacks-img.png'
const Delivery = () => {
  return (
    <section className=' grid grid-cols-3 gap-3 relative z-10'>
      <img src={IMG} alt="" className='w-44 h-44'/>
      <div className=' flex flex-col mt-2 md:space-y-2 md:py-9'>
            <h3 className='text-white capitalize font-bold text-center'>we delivery on next day from 10:00AM <br />to 08:00PM</h3>
            <p className='text-xs  capitalize text-white text-center'>for orders starts from $100</p>
            <button className=' px-3 py-2 rounded-lg text-center bg-white text-green-500'>shop now</button>
      </div>
      <img src={Bg} alt="" className='w-full h-48'/>
    </section>
  )
}

export default Delivery