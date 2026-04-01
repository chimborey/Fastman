import { useState, useEffect, useRef } from "react"
import { herodata } from "../Data/data"

const Hero = ({ autoplaySpeed = 3000 }) => {
      const [current, setCurrent] = useState(0)
      const isPaused = useRef(false)

      useEffect(() => {
            const interval = setInterval(() => {
                  if (!isPaused.current) {
                        setCurrent((prev) => (prev + 1) % herodata.length)
                  }
            }, autoplaySpeed)
            return () => clearInterval(interval)
      }, [autoplaySpeed])

      return (
            <div
                  className="relative w-full overflow-hidden"
                  onMouseEnter={() => (isPaused.current = true)}
                  onMouseLeave={() => (isPaused.current = false)}
            >
                  {/* Slides */}
                  <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                  >
                        {herodata.map((slide, i) => (
                              <div key={i} className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-4 py-10">

                                    {/* Text Left */}
                                    <div className="flex flex-col gap-4">
                                          <span className="text-sm text-green-600 font-medium uppercase tracking-widest">
                                                {slide.category || "Fresh & Organic"}
                                          </span>
                                          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                                                {slide.title}
                                          </h1>
                                          <p className="text-sm text-gray-500 leading-relaxed">
                                                {slide.desc || "Daily Grocery Order and Get Express Delivery"}
                                          </p>
                                          <div className="flex items-center gap-3 mt-2">
                                                <button className="px-6 py-2.5 bg-green-500 text-white text-sm rounded-lg hover:opacity-80 transition-all">
                                                      Shop Now
                                                </button>
                                          </div>
                                    </div>

                                    {/* Image Right */}
                                    <div className="flex justify-center items-center">
                                          <img
                                                src={slide.imageUrl}
                                                alt={`slide-${i}`}
                                                className="w-full max-h-80 object-cover"
                                          />
                                    </div>

                              </div>
                        ))}
                  </div>

                  {/* Dots */}
                  <div className="flex justify-center gap-2 mt-4">
                        {herodata.map((_, i) => (
                              <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`transition-all duration-300 rounded-full ${i === current
                                          ? "bg-green-500 w-6 h-3"
                                          : "bg-gray-300 w-3 h-3"
                                    }`}
                              />
                        ))}
                  </div>
            </div>
      )
}

export default Hero