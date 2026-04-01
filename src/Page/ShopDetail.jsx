import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar, FaStarHalfAlt, FaHeart, FaShoppingCart } from 'react-icons/fa'
import { MdLocalShipping, MdAssignmentReturn, MdStorefront, MdPayment, MdVerified, MdInventory2 } from 'react-icons/md'
import { IoIosArrowForward } from 'react-icons/io'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'
const ShopDetail = () => {
  const { addToCart, products, toggleLike, incraseQuantity, decraseQuantity, likeCart, cart } = useContext(ShopContext)
  const { id } = useParams()
  const product = products.find(item => item.id === Number(id))
  const [activeTab, setActiveTab] = useState('description')

  // ✅ Get this product's quantity from cart
  const cartItem = cart.find(item => item.id === product?.id)
  const quantity = cartItem?.amount || 0

  // ✅ Check wishlist using likeCart (not likedItems)
  const isWishlisted = likeCart?.some(item => item.id === product?.id)

  const features = [
    {
      icon: <MdLocalShipping size={20} className='text-green-600' />,
      title: 'Fast Delivery',
      desc: 'Lightning-fast shipping, guaranteed.'
    },
    {
      icon: <MdAssignmentReturn size={20} className='text-green-600' />,
      title: 'Free 30 day returns',
      desc: 'Shop risk-free with easy returns.'
    },
    {
      icon: <MdStorefront size={20} className='text-green-600' />,
      title: 'Pickup available at Shop location',
      desc: 'Usually ready in 24 hours.'
    },
    {
      icon: <MdPayment size={20} className='text-green-600' />,
      title: 'Payment',
      desc: 'Payment upon receipt of goods. Payment by card in the department. Google Pay. Online card.'
    },
    {
      icon: <MdVerified size={20} className='text-green-600' />,
      title: 'Warranty',
      desc: 'The Consumer Protection Act does not provide for the return of the product of proper quality.'
    },
    {
      icon: <MdInventory2 size={20} className='text-green-600' />,
      title: 'Packaging',
      desc: 'Research & development value proposition graphical user interface investor.'
    },
  ]

  return (
    <section className='w-full py-14'>
      <div className='container mx-auto px-4 mt-12'>
        {/* Breadcrumb */}
        <div className='flex items-center gap-1 text-xs text-gray-400 mb-6'>
          <Link to={'/'} className='hover:text-green-600 cursor-pointer'>Home</Link>
          <IoIosArrowForward size={12} />
          <Link to={'/shop/shop'} className='hover:text-green-600 cursor-pointer'>Shop</Link>
          <IoIosArrowForward size={12} />
          <span className='text-green-600 font-semibold'>{product?.title}</span>
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          {/* LEFT - Product Info */}
          <div className='flex-[2] flex flex-col gap-6'>
            <div className='flex flex-col md:flex-row gap-6 bg-white rounded-2xl shadow-sm border p-6'>

              {/* ✅ Fixed: product?.image not products?.image */}
              <div className='flex items-center justify-center bg-gray-50 rounded-xl p-6 md:w-64 md:h-64 flex-shrink-0'>
                <img
                  src={product?.image}
                  alt={product?.title}
                  className='w-48 h-48 object-contain'
                />
              </div>

              {/* Product Details */}
              <div className='flex flex-col gap-3 flex-1'>
                <h1 className='text-2xl font-extrabold text-gray-900'>{product?.title}</h1>

                {/* Stars */}
                <div className='flex items-center gap-1'>
                  {[...Array(4)].map((_, i) => <FaStar key={i} className='text-yellow-400 text-sm' />)}
                  <FaStarHalfAlt className='text-yellow-400 text-sm' />
                  <span className='text-gray-500 text-xs ml-1'>4.3 star Rating (17k)</span>
                </div>

                {/* Description */}
                <p className='text-sm text-gray-500 leading-relaxed'>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Delecta culpa, sit illo sit
                  asperiores veniam ipsum delecta sunt molita prosequi.
                </p>

                {/* Price */}
                <div className='flex items-center gap-3'>
                  <span className='text-2xl font-bold text-gray-900'>{product?.price}</span>
                  <span className='text-gray-400 text-sm line-through'>{product?.lessprice}</span>
                </div>

                {/* Special Offer */}
                <div className='bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-xs text-green-700 font-semibold w-fit'>
                  🎉 Special Offer: <span className='text-green-800'>5 Days</span> Remains until the end of the offer
                </div>

                {/* ✅ Quantity — reads cartItem.amount */}
                <div className='flex flex-col gap-1'>
                  <span className='text-xs text-gray-500 font-semibold'>Quantity :</span>
                  <div className='flex items-center gap-3'>
                    <button
                      onClick={() => decraseQuantity(product?.id)}
                      className='w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-lg font-bold text-gray-600 hover:bg-gray-100'
                    >−</button>
                    <span className='text-base font-bold w-6 text-center'>{quantity}</span>
                    <button
                      onClick={() => incraseQuantity(product?.id)}
                      className='w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-lg font-bold text-gray-600 hover:bg-gray-100'
                    >+</button>
                  </div>
                </div>

                {/* Buttons */}
                <div className='flex items-center gap-3 mt-2'>
                  <button
                    onClick={() => addToCart(product)}
                    className='flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition'
                  >
                    <FaShoppingCart size={14} />
                    Add To Cart
                  </button>

                  {/* ✅ toggleLike uses likeCart */}
                  <button
                    onClick={() => toggleLike(product)}
                    className={`flex items-center gap-2 border text-sm font-bold px-5 py-2.5 rounded-lg transition
                      ${isWishlisted
                        ? 'bg-red-50 border-red-400 text-red-500'
                        : 'border-green-500 text-green-600 hover:bg-green-50'}`}
                  >
                    <FaHeart size={14} />
                    {isWishlisted ? 'Wishlisted' : 'Add To Wishlist'}
                  </button>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className='bg-white rounded-2xl shadow-sm border'>
              <div className='flex border-b'>
                {['description', 'reviews', 'shipping'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 text-sm font-semibold capitalize transition
                      ${activeTab === tab
                        ? 'border-b-2 border-green-600 text-green-600'
                        : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className='p-6 text-sm text-gray-500 leading-relaxed'>
                {activeTab === 'description' && (
                  <p>This product is made with the finest quality ingredients. Taylor Farms Broccoli Florets
                    are carefully selected and packed fresh to ensure maximum nutrition and taste.</p>
                )}
                {activeTab === 'reviews' && (
                  <p>⭐⭐⭐⭐⭐ — "Amazing product! Fresh and delivered quickly." — Customer Review</p>
                )}
                {activeTab === 'shipping' && (
                  <p>Orders are processed within 1-2 business days. Fast delivery guaranteed within 5 days.</p>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT - Sidebar */}
          <div className='flex-1 flex flex-col gap-4'>

            {/* Vendor */}
            <div className='bg-white rounded-2xl shadow-sm border p-4 flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center'>
                  <MdStorefront className='text-green-600' size={20} />
                </div>
                <span className='text-sm font-bold text-gray-700'>By SnackBasket</span>
              </div>
              <button className='text-xs text-green-600 font-semibold border border-green-500 px-3 py-1.5 rounded-lg hover:bg-green-50 transition'>
                View More
              </button>
            </div>

            {/* Features */}
            <div className='bg-white rounded-2xl shadow-sm border p-4 flex flex-col gap-4'>
              {features.map((feature, index) => (
                <div key={index} className='flex items-start gap-3'>
                  <div className='w-8 h-8 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5'>
                    {feature.icon}
                  </div>
                  <div>
                    <p className='text-sm font-bold text-gray-800'>{feature.title}</p>
                    <p className='text-xs text-gray-400 mt-0.5 leading-relaxed'>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Satisfaction */}
            <div className='bg-green-600 rounded-2xl p-4 flex items-center gap-3 text-white'>
              <MdVerified size={24} />
              <span className='text-sm font-bold'>100% Satisfaction Guaranteed</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopDetail