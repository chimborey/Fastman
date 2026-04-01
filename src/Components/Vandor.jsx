import React from 'react'
import { vandoresData } from '../Data/data'

const Vandor = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-12' data-aos="fade-up" data-aos-delay='600'>
      {
        vandoresData.map((item) => {
          const { id, title, time, off, vendorMain, vendors } = item;
          return (
            <div key={id} className='bg-white p-4 rounded-lg shadow-md relative flex flex-col items-center cursor-pointer'>
              <div className=' bg-slate-200 px-2 py-2 absolute -top-9 rounded-full'>
                <img src={vendorMain} alt={title} className='w-12 h-12 object-cover rounded-full mx-auto ' />
              </div>
              <div className=' space-y-2 mt-4'>
                <h3 className='text-md font-bold'>{title}</h3>
                <p className='text-gray-600 text-sm text-center'>{time}</p>
                <p className='text-white font-bold text-xs bg-green-700 p-2 rounded-lg'>Off: {off}%</p>
              </div>
              <div className='flex gap-1 mt-3'>
              {vendors.map((vendor, index) => (
                <img
                  key={index}
                  src={vendor.image}
                  alt={`vendor-${index}`}
                  className='w-8 h-8 object-cover rounded-full border border-gray-200'
                />
              ))}
            </div>
            </div>
          );
        })
      }
    </section>
  )
}

export default Vandor