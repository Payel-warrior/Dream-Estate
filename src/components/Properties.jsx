import React from 'react'
import Houses from './Houses'

function Properties() {
  
  return (
    <div>
      <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden bg-opacity-50'style={{backgroundImage: " url('/Header_Img2.jpg')"
  }}>
    <div className='container text-center justify-center mx-auto py-4 px-6 '>
      <h2 className='text-3xl text-white inline-block sm:2xl md:text-4xl lg:text-5xl pt-30 font-semibold'> Discover Your Perfect Dream Home Today </h2>
      <p className='text-white text-lg sm:text-md md:text-lg lg:text-xl mt-4 mb-6'>Explore our exclusive listings and find the home that suits your lifestyle.</p>
      <a href="#houses-section">
        <button className='bg-emerald-700 px-8 py-2 text-xl rounded-lg text-white cursor-pointer hover:border-white hover:border-1'>Click Here</button>
      </a>
    </div>
    </div>
    <div id="houses-section">
  <Houses />
    </div>
    </div>
    
  )
}

export default Properties
