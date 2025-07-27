import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden bg-opacity-50'style={{backgroundImage: " url('/Header_Img2.jpg')"
  }}>
       <Navbar/>
       <div className='container text-center mx-auto py-4 px-6 '>
        <h2 className='text-3xl text-white inline-block sm:2xl md:text-4xl lg:text-5xl pt-30 font-semibold'>Turning your dream of a perfect home into reality.</h2>
        <div className='space-x-4 mt-10'>
          <a className='bg-emerald-700 px-8 py-2 text-xl rounded-lg text-white cursor-pointer hover:border-white hover:border-1' href="#Contact">Contact Us</a>
        </div>
       </div>
       
    </div>
  )
}

export default Header
