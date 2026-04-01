import React, { useState } from 'react'
import { blogData } from '../Data/data'
import { MdOutlineDateRange, MdUpdate } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";

const Blog = () => {
  const [activeId, setActiveId] = useState(null) // null = show all

  const handleClick = (id) => {
    setActiveId(id) // hide others, show only clicked
  }

  const handleBack = () => {
    setActiveId(null) // show all again
  }

  return (
    <section className='w-full overflow-hidden py-14'>
      <main className='mt-12 container' data-aos='fade-up' data-aos-delay='600'>
        <div className='flex flex-col lg:flex-row gap-8'>

          {/* LEFT - Show all or only active */}
          <div className='flex-[2] flex flex-col gap-6'>

            {/* Back button */}
            {activeId && (
              <button
                onClick={handleBack}
                className='flex items-center gap-2 text-green-600 font-semibold text-sm w-fit hover:underline'
              >
                <IoArrowBack size={16} /> Back to all posts
              </button>
            )}

            {blogData
              .filter(item => activeId === null || item.id === activeId)
              .map((item) => {
                const { id, image, date, title, pere, tag } = item
                return (
                  <div
                    key={id}
                    onClick={() => handleClick(id)}
                    className='flex flex-col space-y-3  border-b pb-6 cursor-pointer rounded-lg p-3 transition-all duration-200 hover:bg-gray-50'
                  >
                    <img
                      src={image}
                      alt={title}
                      className='w-full h-52 object-cover rounded-lg'
                    />
                    <span className='text-black bg-green-200 rounded-lg px-3 py-1 w-fit text-sm font-semibold'>
                      {tag}
                    </span>
                    <h3 className='text-2xl font-bold text-gray-900'>{title}</h3>
                    <p className='text-sm text-gray-500 leading-relaxed'>{pere}</p>
                    <div className='flex items-center gap-4 pt-2'>
                      <div className='flex items-center gap-1'>
                        <MdOutlineDateRange size={14} className='text-green-500' />
                        <span className='text-gray-400 text-xs'>{date}</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <MdUpdate size={14} className='text-green-500' />
                        <span className='text-gray-400 text-xs'>{date}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>

          {/* RIGHT - Recent Posts Sidebar */}
          <div className='flex-1 sticky top-4 h-fit'>
            <h3 className='text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-green-500'>
              Recent Posts
            </h3>
            <div className='flex flex-col gap-3'>
              {blogData.map((item) => {
                const { id, image, title, date } = item
                const isActive = id === activeId
                return (
                  <div
                    key={id}
                    onClick={() => handleClick(id)}
                    className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer border transition-all duration-200
                      ${isActive ? 'bg-green-50 border-green-400' : 'border-transparent'}`}
                  >
                    <img
                      src={image}
                      alt={title}
                      className='w-16 h-16 object-cover rounded-lg flex-shrink-0'
                    />
                    <div className='flex flex-col gap-1'>
                      <p className={`text-sm font-semibold line-clamp-2 leading-snug
                        ${isActive ? 'text-green-700' : 'text-gray-800'}`}>
                        {title}
                      </p>
                      <div className='flex items-center gap-1'>
                        <MdOutlineDateRange size={12} className='text-green-500' />
                        <span className='text-xs text-gray-400'>{date}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </main>
    </section>
  )
}

export default Blog