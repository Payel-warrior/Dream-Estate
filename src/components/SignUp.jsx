import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";

function SignUp() {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      localStorage.setItem("user", JSON.stringify(formData));
      setMessage("✅ Signup successful! You can login now.");
      setIsSignup(false);
    } else {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (
        savedUser &&
        savedUser.email === formData.email &&
        savedUser.password === formData.password
      ) {
        setMessage("✅ Login successful! Redirecting...");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        setMessage("❌ Invalid credentials. Try again.");
      }
    }
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-6" style={{ backgroundImage: "url('/Header_Img2.jpg')" }}>
      <div className="w-full max-w-md bg-white p-10 mt-10 rounded-3xl shadow-2xl transition-transform transform hover:scale-[1.01]">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-8 tracking-tight">
          {isSignup ? "Join Us" : "Welcome Back"}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {isSignup && (
            <div className="relative">
              <FaUser className="absolute left-3 top-4 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full pl-10 border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
              />
            </div>
          )}

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full pl-10 border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-4 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full pl-10 pr-10 border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3.5 text-gray-500 hover:text-emerald-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* Message */}
        {message && (
          <p
            className={`mt-5 text-center font-medium ${
              message.includes("❌") ? "text-red-600" : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}

        {/* Toggle */}
        <p className="text-center mt-6 text-gray-600">
          {isSignup ? "Already have an account?" : "New user?"}{" "}
          <button
            onClick={() => {
              setIsSignup(!isSignup);
              setMessage("");
            }}
            className="text-emerald-600 font-semibold hover:underline"
          >
            {isSignup ? "Login here" : "Signup here"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignUp;