import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import LikeItem from '../Components/LikeItem'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
const Like = () => {
      const { likeCart, likequantity } = useContext(ShopContext)
      return (
            <section className=' w-full overflow-hidden py-14'>
                  <main className=' mt-12 container'>
                        <div className=' flex flex-col'>

                              <div className='flex justify-between items-center border-2 py-2 px-2  rounded-lg' data-aos='fade-up' data-aos-delay='300'>
                                    <h3 className=' capitalize text-black text-md'>products</h3>
                                    <h3 className=' capitalize text-black text-md'>save: ({likequantity})</h3>
                                    <h3 className=' capitalize text-black text-md'>remove</h3>
                              </div>

                              <div data-aos='fade-up' data-aos-delay='600'>
                                    {
                                          likeCart.length > 0 ?
                                                (
                                                      likeCart.map((item) => <LikeItem key={item} item={item} />)
                                                )
                                                :
                                                (
                                                      <div className='flex justify-center items-center py-16 flex-col gap-3'>
                                                            <FaHeart size={40} className='text-gray-200' />
                                                            <h3 className='text-2xl text-gray-300 capitalize'>Your like is empty!</h3>
                                                      </div>
                                                )
                                    }
                              </div>
                        </div>
                  </main>
            </section>
      )
}

export default Like