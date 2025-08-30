import React, { useState } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaMailBulk } from 'react-icons/fa';

function Contact() {
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setIsError(false);

    const formData = new FormData(event.target);
    formData.append("access_key", "ece1b0e6-2db0-4ca3-8634-de4825282c14"); // Your Web3Forms Access Key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your message has been sent successfully!");
      setIsError(false);
      event.target.reset();
    } else {
      setResult("Something went wrong. Please try again.");
      setIsError(true);
    }

    // Clear message after 30 seconds
    setTimeout(() => {
      setResult("");
    }, 10000);
  };

  return (
    <div
      id="Contact"
      className="min-h-screen flex items-center justify-center px-6 py-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/Header_Img2.jpg')" }}
    >
      <div className="flex flex-col mt-20 md:flex-row w-full max-w-5xl shadow-2xl rounded-lg overflow-hidden">
        
        {/* Left Section - Contact Info */}
        <div className="md:w-1/2 bg-emerald-600 p-8 text-white">
          <h1 className="text-3xl font-bold mb-4">Contact Information</h1>
          <p className="text-gray-200 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, praesentium.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt size={28} className="mt-1" />
              <span>
                <strong className="text-lg">Dream Estate Pvt. Ltd.</strong>, 21 Skyline Avenue, Greenfield Heights, Rivertown, Westland - 700999, India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt size={24} />
              <span className="text-lg">+92 3356222894</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMailBulk size={24} />
              <span className="text-lg">dummy123@gmail.com</span>
            </li>
          </ul>
          <p className="italic mt-8 text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dicta!
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 bg-white p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                name="message"
                placeholder="Message"
                required
                className="w-full border border-gray-300 rounded-lg py-3 px-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
            >
              Submit
            </button>
          </form>

          {/* ✅ Success/Error Message */}
          {result && (
            <p
              className={`mt-4 text-lg font-medium ${isError ? 'text-red-600' : 'text-green-600'}`}
            >
              {result}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;

