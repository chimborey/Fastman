import React from 'react'
import Bg from '../assets/Hero_Deals/hero-bg.png'
import Hero from '../Components/Hero'
import Category from '../Components/Category'
import Banner from '../Components/Banner'
import Beast from '../Components/Beast'
import Offer from '../Components/Offer'
import Recommend from '../Components/Recommend'
import Hot from '../Components/Hot'
import Vandor from '../Components/Vandor'
import BestSale from '../Components/BestSale'
import BestDeals from '../Components/BestDeals'
import Delivery from '../Components/Delivery'
import BgD from '../assets/Delivery/delivery-bg.png'
import Organic from '../Components/Organic'
import Group from '../Components/Group'
import Brand from '../Components/Brand'
import NewArrivals from './NewArrivals'
import Grocery from '../Components/Grocery'
import New from '../assets/Newsletter/newsletter-bg.png'
const Home = () => {
      return (
            <article>
                  {/* Hero Section */}
                  <section
                        className='bg-center bg-cover bg-no-repeat w-full min-h-[93vh] flex items-center relative'
                        style={{ backgroundImage: `url(${Bg})` }}
                  >
                        <div className='absolute top-0 left-0 right-0 bottom-0 bg-green-100/40' />

                        <main className='container relative z-10 w-full'>
                              <Hero />
                        </main>
                  </section>
                  {/* Category Section */}
                  <section className=' w-full overflow-hidden py-14'>
                        <main className=' mt-12 container'>
                              <Category />
                        </main>
                  </section>
                  {/* Banner Section */}
                  <section className=' w-full overflow-hidden py-14'>
                        <main className=' mt-12 container'>
                              <Banner />
                              <BestDeals />
                        </main>
                  </section>
                  {/* Best Deals Section */}
                  <section className=' w-full overflow-hidden py-14'>
                        <main className=' mt-12 container'>
                              <Beast />
                        </main>
                  </section>
                  {/* Offer Section */}
                  <section className=' w-full overflow-hidden py-14'>
                        <main className=' mt-12 container'>
                              <Offer />
                        </main>
                  </section>
                  {/* Recommend Section */}
                  <section className=' w-full overflow-hidden py-14'>
                        <main className=' mt-12 container'>
                              <div className='flex justify-start items-start' data-aos="fade-up" data-aos-delay='300'>
                                    <h3 className='text-xl font-bold capitalize text-black'>Recommended Products</h3>
                              </div>
                              <Recommend />
                        </main>
                  </section>
                  {/* Hot Section */}
                  <section className=' w-full overflow-hidden py-14'>
                        <main className=' mt-12 container'>
                              <Hot />
                        </main>
                  </section>
                  {/* Vendor Section */}
                  <section className=' w-full overflow-hidden py-14'>
                        <main className=' mt-12 container'>
                              <div className='flex justify-start items-start' data-aos="fade-up" data-aos-delay='300'>
                                    <h3 className='text-xl font-bold capitalize text-black'>weekly top Vendors</h3>
                              </div>
                              <Vandor />
                        </main>
                  </section>
                  {/* Best Sale Section */}
                  <section className=' w-full overflow-hidden py-14'>
                        <main className=' mt-12 container'>
                              <div className='flex justify-start items-start' data-aos="fade-up" data-aos-delay='300'>
                                    <h3 className='text-xl font-bold capitalize text-black'>today's best sales.</h3>
                              </div>
                              <BestSale />
                        </main>
                  </section>
                  {/* Delivery Section */}
                  <section className=' w-full overflow-hidden py-14' data-aos="fade-up" data-aos-delay='300'>
                        <main className=' mt-12 container h-56 relative rounded-lg' style={{ backgroundImage: `url(${BgD})` }}>
                              <div className='absolute top-0 left-0 right-0 bottom-0 rounded-lg bg-green-500/50' />
                              <Delivery />
                        </main>
                  </section>
                  {/*  Organic Section  */}
                  <section className=' w-full overflow-hidden py-14'>
                        <main className=' mt-12 container'>
                              <div className='flex justify-start items-start' data-aos="fade-up" data-aos-delay='300'>
                                    <h3 className='text-xl font-bold capitalize text-black'>Organic food</h3>
                              </div>
                              <Organic />
                        </main>
                  </section>
                  {/*  Group Section  */}
                  <section className=' w-full overflow-hidden py-14'>
                        <main className=' mt-12 container' data-aos="fade-up" data-aos-delay='300'>
                              <Group />
                        </main>
                  </section>
                  {/*  Brand Section  */}
                  <section className=' w-full overflow-hidden py-14'>
                        <main className=' mt-12 container bg-green-300/50 py-3 px-3 rounded-lg' data-aos="fade-up" data-aos-delay='300'>
                              <Brand />
                        </main>
                  </section>
                  {/*  NewArrivals Section  */}
                  <section className=' w-full overflow-hidden py-14'>
                        <main className=' mt-12 container'>
                              <div className='flex justify-start items-start' data-aos="fade-up" data-aos-delay='300'>
                                    <h3 className='text-xl font-bold capitalize text-black'>NewArrivals</h3>
                              </div>
                              <NewArrivals />
                        </main>
                  </section>
                  
                  {/*  Grocery Section  */}
                  <section className='w-full overflow-hidden'>
                        <main className='container bg-center bg-cover bg-no-repeat  relative  w-full h-96 rounded-lg' style={{ backgroundImage: `url(${New})` }} data-aos="fade-up" data-aos-delay='300'>
                              <div className='absolute top-0 left-0 right-0 bottom-0  rounded-lg bg-purple-300/40' />
                              <Grocery />
                        </main>
                  </section>
            </article>
      )
}

export default Home