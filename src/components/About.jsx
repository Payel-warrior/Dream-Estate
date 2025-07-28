import React from 'react';
import { assets } from '../assets/assets';

function About() {
  return (
    <div id="About" className="container flex pt-20">
      <img className='pl-20 mb-10'style={{ height: '390px'}} src={assets.couple1} alt="" />
      <div className='pl-20 pt-15'>
        <h3 className='text-emerald-600 font-semibold text-xl'>ABOUT US</h3>
        <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ipsam asperiores accusantium ut consequuntur nisi hic sunt velit officiis rerum provident aliquam, itaque, quaerat corporis consequatur. Optio officiis maxime excepturi?</p>
        <div className='flex flex-col items-start mt-5'>
            <img style={{ height: '70px'}} src={assets.apartment_icon} alt="" />
            <h2 className='text-gray-900'style= {{ height: '60px'}}>Built on Trust. Delivered Over <span className='text-emerald-600 font-semibold text-xl'>1,000</span> Dreams.</h2>
        </div>
      </div> 
    </div>
  )
}

export default About
