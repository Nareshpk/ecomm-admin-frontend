import React, { useState } from "react";
import { FaGoogle, FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/actions/signupActions";
// Adjust the path based on your folder structure

const Signup = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state: any) => state.signup); // Adjust state structure as needed

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  } as any);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log("Form submitted with data:", formData);
    e.preventDefault();
    dispatch(signup(formData) as any); // Dispatch the signup action with a valid action object
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="absolute top-4 left-6 flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="w-8 h-8" />
        <div className="font-bold text-lg">
          <span className="text-[#F74C52]">CLASSYSHOP</span>
          <p className="text-xs text-gray-500">BIG MEGA STORE</p>
        </div>
      </div>

      {/* Right-side buttons */}
      <div className="absolute top-4 right-6 flex items-center gap-4">
        <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
          <span className="text-sm">Login</span>
        </button>
        <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
          <span className="text-sm">Sign Up</span>
        </button>
      </div>

      {/* Signup Box */}
      <div className="bg-white w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center mb-2">
          Join us today! Get special benefits and stay up-to-date.
        </h2>

        <button className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
          <FaGoogle />
          <span>Sign Up With Google</span>
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-sm text-gray-500">
            Or, Sign Up with your email
          </span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaEye className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {loading && (
            <p className="text-sm text-center text-gray-500">Signing up...</p>
          )}
          {error && <p className="text-sm text-center text-red-500">{error}</p>}
          {success && (
            <p className="text-sm text-center text-green-500">
              Signup successful!
            </p>
          )}

          <p className="text-sm text-center">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-600 hover:underline font-semibold"
            >
              Sign In
            </a>
          </p>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
            disabled={loading}
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
