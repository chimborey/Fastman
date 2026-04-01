import React from 'react'
import ORDER from '../assets/Group/ORDER.png'
const Order = () => {
  return (
    <section className=' w-full h-[93vh] py-14'>
      <main className=' container h-[93vh] mt-12'>
            <div className=' flex flex-col h-[93vh] justify-center items-center space-y-3'>
                  <img src={ORDER} alt="" className='w-48 h-48'/>
                  <h3 className=' text-2xl text-black font-medium'>Your paymennt was successful</h3>
                  <p className=' text-sm text-gray-300'>Thank you for your payment. We'll be in contact with more details shortly.</p>
            </div>
      </main>
    </section>
  )
}

export default Order