import React, { useContext } from 'react'
import { beastSaleData } from '../Data/data'
import Bg from '../assets/BestSales/special-snacks-img.png'
import IMG from '../assets/BestSales/special-snacks.png'
import { ShopContext } from '../Context/ShopContext'

const BestSale = () => {
      const {addToCart} = useContext(ShopContext)
  return (
    <section className='flex flex-col md:flex-row gap-6 mt-7' data-aos="fade-up" data-aos-delay='600'>
      {/* LEFT - 2x2 Grid of products */}
      <div className='grid  grid-cols-1 md:grid-cols-2 gap-3 flex-[2]'>
        {beastSaleData.map((item) => {
          const { id, title, price, lessprice, image, review, sold, sale } = item;
          return (
            <div key={id} className='w-full relative overflow-hidden border bg-white rounded-lg flex py-3 px-3 gap-3 items-center'>
              <img src={image} alt={title} className='w-20 h-20 object-contain' />
              <div className='flex flex-col flex-1'>
                <div className='flex items-center gap-1'>
                  <span className='text-gray-400 text-xs line-through'>{lessprice}</span>
                  <span className='text-sm text-black font-bold'>{price}</span>
                  <span className='text-xs text-gray-500'>{sold}</span>
                </div>
                <h3 className='text-sm font-bold text-gray-800 mt-1'>{title}</h3>
                <button onClick={() => addToCart(item)} className='text-green-800 font-semibold py-1.5 mt-3 px-3 rounded-md bg-green-400/30 text-xs flex items-center gap-1 w-fit'>
                  Add To Cart <span>🛒</span>
                </button>
              </div>

              {/* Sale badge */}
              <div className={`absolute top-2 left-2 text-white text-xs font-bold py-0.5 px-2 rounded-full ${sale === 'New' ? 'bg-yellow-400 text-yellow-900' : 'bg-red-500'}`}>
                {sale}
              </div>

              {/* Review */}
              <div className='absolute top-2 right-2 text-red-500'>
                <span className='text-xs'>{review}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* RIGHT - Promo Banner */}
     <div className='flex-1 flex flex-col justify-between rounded-2xl p-6 min-h-[300px]' style={{backgroundImage:`url(${IMG})`}}>
  
  {/* Top image */}
  <img src={Bg} alt="Fresh Vegetables" className='w-full h-48' />

  {/* Text */}
  <div className='mt-2'>
    <h2 className='text-2xl font-extrabold text-gray-800 leading-tight'>
      Fresh <br /> Vegetables
    </h2>
    <p className='text-gray-600 text-xs mt-2'>
      Get the freshest vegetables delivered to your doorstep. Healthy, organic, and full of flavor!
    </p>
    <button className='mt-4 border border-gray-700 text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-200 transition'>
      Shop Now <span>🛒</span>
    </button>
  </div>

</div>

    </section>
  )
}

export default BestSale