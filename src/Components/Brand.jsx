import React from 'react'
import { brandData } from '../Data/data'

const Brand = () => {
  return (
    <section className=' flex flex-col'>
      <h3 className=' text-center text-xl text-black capitalize'>shop by brand.</h3>
      <div className='flex justify-between items-center gap-2 mt-4'>
            {
                  brandData.map((item) => {
                        const{id, image} = item
                        return(
                              <div key={id}>
                                    <img src={image} alt="" className='w-12 h-12 rounded-full'/>
                              </div>
                        )
                  })
            }
      </div>
    </section>
  )
}

export default Brand