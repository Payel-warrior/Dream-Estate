import React, {useState,useEffect} from 'react';
import { assets } from '../assets/assets';
import { Link  } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';


function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleScroll = (sectionId)=> {
        if (location.path !== "/"){
            navigate("/", {replace: false});
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                section?.scrollIntoView({behavior: "smooth"});
            },100);

        } else {
            const section = document.getElementById(sectionId);
            section?.scrollIntoView({behavior:"smooth"});
        }
    }
    
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
    <div className='fixed top-0 left-0 w-full h-min z-10'style={{ backgroundColor: 'oklch(0.17 0 0 / 0.52)' }}>
        <div className='container flex mx-auto justify-between items-center py-4 px-6 md:px-10 lg:px-20 '>
            <div className='justify-center items-center'>
            <h2 className='text-emerald-600 font-semibold text-xl ml-2.5'>Dream Estate</h2>
            <p className='text-white text-sm mt-0'> A Real Estate Company</p>
            </div>
            <ul className='hidden md:flex gap-7 text-white font-semibold text-xl'>
                <li><Link to="/">Home</Link></li>
                <li><a onClick={() => handleScroll("About")} href="#About">About</a></li>
                <li><Link to="Properties">Properties</Link></li>
                <li><a  onClick={() => handleScroll("Reviews")} href="#Reviews">Feedbacks</a></li>
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
                <li><Link to="/" onClick={() => setDisplaySidebar(false)}className='px-4 py-2 rounded-full inline-block'> Home </Link></li>
                <li><a onClick={()=>{
                    setDisplaySidebar(false);
                    handleScroll("About");
                }} 
                href="#About" className='px-4 py-2 rounded-full inline-block'>About</a></li>
                <li> <Link to="Properties" onClick={() => setDisplaySidebar(false)}className='px-4 py-2 rounded-full inline-block'> Properties </Link> </li>
             <li><a onClick={()=>{
                setDisplaySidebar(false);
                handleScroll("About");
            }}
                href="#Reviews" className='px-4 py-2 rounded-full inline-block'>Feedbacks</a></li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar



