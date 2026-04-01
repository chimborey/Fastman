import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { FaShop, FaStar } from 'react-icons/fa6'

const CartItem = ({ item }) => {
  const { decraseQuantity, incraseQuantity, removeFromCart } = useContext(ShopContext)

  const subtotal = (parseFloat(item.price.replace('$', '')) * item.amount).toFixed(2)

  return (
    <div className='grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center gap-4 py-4 border-b px-3'>

      {/* Product */}
      <div className='flex items-center gap-3'>
        <img src={item.image} alt={item.title} className='w-20 h-20 object-contain rounded-lg' />
        <div className='flex flex-col gap-1'>
          <h3 className='text-sm font-bold text-gray-800'>{item.title}</h3>
          <div className='flex items-center gap-1'>
            <FaShop className='text-green-500 text-xs' />
            <span className='text-xs text-gray-400'>By Lucky Supermarket</span>
          </div>
          <div className='flex items-center gap-0.5'>
            <FaStar className='text-yellow-400 text-xs' />
            <span className='text-xs text-gray-400'>(17k) Reviews</span>
          </div>
        </div>
      </div>

      {/* Price */}
      <p className='text-sm font-semibold text-gray-700 text-center'>{item.price}</p>

      {/* Quantity */}
      <div className='flex items-center gap-2 justify-center'>
        <button
          onClick={() => decraseQuantity(item.id)}
          className='w-7 h-7 border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold'
        >−</button>
        <span className='text-sm font-bold w-6 text-center'>{item.amount}</span>
        <button
          onClick={() => incraseQuantity(item.id)}
          className='w-7 h-7 border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold'
        >+</button>
      </div>

      {/* Subtotal */}
      <p className='text-sm font-semibold text-gray-700 text-center'>${subtotal}</p>

      {/* Delete */}
      <button
        onClick={() => removeFromCart(item.id)}
        className='text-red-500 text-sm font-bold hover:text-red-700 text-center transition'
      >Delete</button>

    </div>
  )
}

export default CartItem