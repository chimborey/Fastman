import React from 'react'

const SortGroup = ({item}) => {
      return (
            <section className=' w-full overflow-hidden flex flex-col bg-white py-3 px-3 border'>
                  <h3 className=' text-md text-black font-bold capitalize'>featured products</h3>
                  <div className=' flex items-center gap-4'>
                        <img src={item.image} alt="" className='w-12 h-12'/>
                        <div className='flex flex-col'>
                              <span className='text-yellow-400 text-xs'>{item.review}</span>
                              <h3 className='text-md text-black font-bold capitalize'>{item.title}</h3>
                              <div className='flex items-center gap-2'>
                                    <span className='text-black'>{item.price}</span><span className='text-gray-200 line-through'>{item.lessprice}</span>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default SortGroup