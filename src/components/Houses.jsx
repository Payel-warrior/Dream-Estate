import React, { useState } from 'react';
import { projectsData } from '../assets/assets';
import {FaGreaterThan, FaLessThan} from 'react-icons/fa';

function Houses() {
  const itemsPerPage = 6;
  const [currPage, setCurrPage] = useState(1);

  const totalPages = Math.ceil(projectsData.length / itemsPerPage);
  const HousesPerPage = projectsData.slice(
    (currPage - 1) * itemsPerPage,
    currPage * itemsPerPage
  );

  const handlePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrPage(page);
    }
  };

  return (
    <div className="p-6">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
  {HousesPerPage.map((house, i) => (
    <div key={i} className="relative pb-20"> {/* added pb-20 to make room for overlap */}
      {/* Image */}
      <img
        src={house.image}
        alt={house.title}
        className="w-full h-60 object-cover rounded-xl shadow-lg"
      />

      {/* Overlapping Box */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 w-[90%] bg-white rounded-xl shadow-xl p-4 z-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-bold text-gray-900">{house.price}</span>
          {/* <span className="text-sm text-gray-500">/mo</span> */}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{house.title}</h3>
        <p className="text-sm text-gray-700">{house.location}</p>
      </div>
    </div>
  ))}
</div>

      {/* Spacer for box overlap */}
      <div className="mt-20" />

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <button
          onClick={() => handlePage(currPage - 1)}
          disabled={currPage === 1}
          className="text-emerald-700 disabled:opacity-50"
        >
          <FaLessThan className="inline" />
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePage(i + 1)}
            className={`px-3 py-1 rounded ${
              currPage === i + 1 ? 'bg-emerald-600 text-white rounded-lg' : ' text-emerald-600 rounded-lg border border-emerald-600 hover:bg-gray-600 hover:text-white'
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePage(currPage + 1)}
          disabled={currPage === totalPages}
          className="text-emerald-700 disabled:opacity-50"
        >
          <FaGreaterThan className="inline" />
        </button>
      </div>
    </div>
  );
}

export default Houses;