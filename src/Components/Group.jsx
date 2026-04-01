import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules';
import { shortProductData, TopSelling, OnSale, TopRated } from '../Data/data'
import { FaStar } from 'react-icons/fa'

const categories = [
  { title: "Featured Products", data: shortProductData },
  { title: "Top Selling Products", data: TopSelling },
  { title: "On-Sale Products", data: OnSale },
  { title: "Top Rated Products", data: TopRated },
]

const ProductCard = ({ item }) => {
  const { image, title, price, lessprice, review } = item
  return (
    <div className='flex items-center gap-3 py-3 border-b last:border-none'>
      <img src={image} alt={title} className='w-14 h-14 object-contain flex-shrink-0' />
      <div className='flex flex-col'>
        {/* Stars */}
        <div className='flex items-center gap-0.5'>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className='text-yellow-400 text-xs' />
          ))}
          <span className='text-gray-400 text-xs ml-1'>{review}</span>
        </div>
        {/* Title */}
        <p className='text-sm font-semibold text-gray-800 line-clamp-1'>{title}</p>
        {/* Price */}
        <div className='flex items-center gap-2 mt-0.5'>
          <span className='text-green-600 font-bold text-sm'>{price}</span>
          <span className='text-gray-400 text-xs line-through'>{lessprice}</span>
        </div>
      </div>
    </div>
  )
}

const ShortProduct = () => {
  return (
    <section className='w-full'>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 1500 }}
        spaceBetween={16}
        slidesPerView={1}
        speed={1500}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className='border rounded-xl bg-white p-4 shadow-sm'>
              {/* Category Header */}
              <h3 className='text-base font-bold text-gray-800 pb-2 mb-2 border-b-2 border-green-500'>
                {category.title}
              </h3>
              {/* Product List */}
              <div className='flex flex-col'>
                {category.data.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default ShortProduct