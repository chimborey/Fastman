import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";
import { FcOnlineSupport } from "react-icons/fc";
const Services = () => {
      const ServicesData = [
            {
                  id: 1,
                  name: "free shopping",
                  desc: "Lorem ipsum dolor sit.",
                  icon: <CiDeliveryTruck />
            },
            {
                  id: 2,
                  name: "100% satlafaction",
                  desc: "Lorem ipsum dolor sit.",
                  icon: <RiSecurePaymentFill />
            },
            {
                  id: 3,
                  name: "secure payments",
                  desc: "Lorem ipsum dolor sit.",
                  icon: <MdOutlinePayments />
            },
            {
                  id: 4,
                  name: "24/7 support",
                  desc: "Lorem ipsum dolor sit.",
                  icon: <FcOnlineSupport />
            },
      ]
      return (
            <section className=' w-full overflow-hidden py-14'>
                  <main className=' mt-12 container'>
                        <div className=' grid grid-cols-1 md:grid-cols-4 gap-6' data-aos='fade-up' data-aos-delay='300'>
                              {
                                    ServicesData.map((sd) => {
                                          const { id, name, icon, desc } = sd
                                          return (
                                                <div key={id} className=' w-full overflow-hidden py-3 px-3 rounded-lg bg-green-200 hover:-translate-y-3 cursor-pointer duration-300 transition-all flex justify-between items-center'>
                                                      <button className=' w-12 h-12 flex justify-center items-center text-center rounded-full bg-green-400 text-white px-2 py2'>{icon}</button>
                                                      <div className=' flex flex-col'>
                                                            <h3 className='text-md text-black capitalize'>{name}</h3>
                                                            <p className='text-xs text-gray-500'>{desc}</p>
                                                      </div>
                                                </div>
                                          )
                                    })
                              }
                        </div>
                  </main>
            </section>
      )
}

export default Services