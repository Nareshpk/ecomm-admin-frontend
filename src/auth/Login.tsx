import React, { useState } from "react";
import { FaGoogle, FaEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/actions/loginActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    try {
      dispatch(loginAction({ email, password }) as any).then((res: any) => {
        navigate("/app/dashboard"); // Navigate to the app after successful login
      }); // Dispatch the login action
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
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

      {/* Login Box */}
      <div className="bg-white w-full max-w-md p-8 ">
        <h2 className="text-2xl font-bold text-center mb-2">Welcome Back!</h2>
        <p className="text-lg font-semibold text-center mb-4">
          Sign in with your credentials.
        </p>

        <button className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
          <FaGoogle />
          <span>Sign in With Google</span>
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-sm text-gray-500">
            Or, Sign in with your email
          </span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={login}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaEye className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-1">
              <input type="checkbox" className="form-checkbox" />
              Remember Me
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            SIGN IN
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
