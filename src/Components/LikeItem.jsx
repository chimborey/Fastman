import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

const LikeItem = ({ item }) => {
      const {removeFromLikeCart} = useContext(ShopContext)
      return (
            <section className=' flex justify-between items-center border-2 py-2 px-2  rounded-lg mt-2'>

                  <div className=' flex items-center gap-2 mt-2'>
                        <img src={item.image} alt="" className=' w-12 h-12 rounded-lg' />
                        <h3 className=' text-xs capitalize'>{item.title}</h3>
                  </div>

                  <div>
                        <h3 className=' text-xs font-bold text-green-500 capitalize'>success</h3>
                  </div>

                  <div>
                        <h3 className=' text-xs text-red-500 capitalize cursor-not-allowed font-bold' onClick={() => removeFromLikeCart(item.id)}>delete</h3>
                  </div>
            </section>
      )
}

export default LikeItem