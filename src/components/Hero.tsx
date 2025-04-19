import React from 'react'
import banner_image from "@/assets/images/banner1.jpg"
const Hero = () => {
  return (
    <div className='relative h-[600px] w-full overflow-hidden'>
        <div className='absolute inset-0 w-full h-full bg-cover bg-center'
            style={{
                backgroundImage:`url(${banner_image.src})`,
            }}
        >
            <div className='absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent'></div>

            <div className='container mx-auto max-w-[1440px] px-6 h-full flex items-center'>
                <div className='max-w-xl text-white z-10'>
                    <h1 className='text-5xl md:text-6xl font-bold mb-4'>
                        Spring Collection 2025
                    </h1>
                    <p className='text-lg md:text-xl mb-8 opacity-90'>
                        Discover the latest trends and elevate your style with our exclusive new arrivals.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;