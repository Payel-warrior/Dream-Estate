import React from 'react'
import {reviewsData} from '../assets/assets';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaStar} from 'react-icons/fa';
function Reviews() {
    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
  return (
    <div id = "Reviews" className='container text-center justify-center mx-auto py-4 px-6 '>
      <h1 className='text-3xl text-emerald-700 inline-block sm:2xl md:text-4xl lg:text-5xl pt-10 font-semibold'>What Our Clients Say??</h1>
      <p className='text-gray-800 text-md sm:text-sm md:text-md mt-4 mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ducimus commodi deserunt, impedit ipsam distinctio saepe et id, ab dolores, adipisci earum molestiae quia repudiandae veniam deleniti illum explicabo. Quod.</p>
      <div className="max-w-3xl mx-auto pb-10">
        <Slider {...slickSettings} > 
            {reviewsData.map((r, i) => (
                <div key={i} className=" p-6 rounded-xl shadow-lg text-center">
                    <img src={r.image} alt={r.alt} 
                    className="w-40 h-40 mx-auto mb-4 rounded-full object-cover border-4 border-white"
                    />
                    <h3 className="text-xl font-bold">{r.name}</h3>
                    <p className="text-sm text-emerald-700 mb-1">Bought: {r.HouseBought}</p>
                <p className="italic text-lg mb-4" >{r.text}</p>
                <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_,index)=>(
                        <span key={index} className={index < r.rating ? "text-yellow-600" : "text-gray-400"}>
                            <FaStar/>
                        </span>
                    ))}
                </div>

                </div>
            ))}

        </Slider>
      </div>
    

    </div>
  )
}

export default Reviews
