import React, {useState,useEffect} from 'react';
import { assets } from '../assets/assets';



function Navbar() {
    const [displaySidebar, setDisplaySidebar] = useState(false)
    useEffect(()=> {
    if(displaySidebar){
        document.body.style.overflow = 'hidden';
    } else{
        document.body.style.overflow = 'auto';
    }
    return()=>{
        document.body.style.overflow = 'auto';
    }
},[displaySidebar])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container flex mx-auto justify-between items-center py-4 px-6 md:px-10 lg:px-20 '>
            <div className='justify-center items-center'>
            <h2 className='text-emerald-600 font-semibold text-xl ml-2.5'>Dream Estate</h2>
            <p className='text-white text-sm mt-0'> A Real Estate Company</p>
            </div>
            <ul className='hidden md:flex gap-7 text-white font-semibold text-xl'>
                <a href="#Header">Header</a>
                <a href="#About">About</a>
                <a href="#Properties">Properties</a>
                <a href="#Reviews">Feedbacks</a>
            </ul>
            <button className='hidden md:block bg-emerald-600 px-6 py-1.5 rounded-md text-white font-semibold cursor-pointer hover:px-7 hover:py-2 '>Sign Up</button>
           <img onClick={()=> setDisplaySidebar(true)}src={assets.sidebar4} alt="" className='md:hidden w-15' /> 
        </div>
      {/* MobileMenu */}
        <div className={`md:hidden ${displaySidebar ? 'fixed w-full' : 'h-0 w-0'} flex flex-col bg-emerald-600  text-white text-xl font-semibold  right-0 top-0 bottom-0 pl-10 overflow-hidden transition-All`} >
            <div className='flex justify-end p-6 cursor-pointer'>
             <img onClick={()=>setDisplaySidebar(false)}src={assets.sidebar3} alt="" className='w-15 cursor-pointer'/>
            </div>
            <ul className='flex flex-col items-start gap-2 mt-5 px-5 text-lg font-medium'>
                <a onClick={()=>setDisplaySidebar(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Header</a>
                <a onClick={()=>setDisplaySidebar(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
                <a onClick={()=>setDisplaySidebar(false)} href="#Properties" className='px-4 py-2 rounded-full inline-block'>Properties</a>
                <a onClick={()=>setDisplaySidebar(false)}
                href="#Reviews" className='px-4 py-2 rounded-full inline-block'>Feedbacks</a>
            </ul>
        </div>

    </div>
  )
}

export default Navbar
