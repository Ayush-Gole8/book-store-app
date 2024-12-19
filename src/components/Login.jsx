import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [message, setMessage] = useState("")
    const { loginUser, signInWithGoogle} = useAuth();
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = async (data) => {
        try {
            await loginUser(data.email, data.password);
            alert("Login successful!");
            navigate("/")
        } catch (error) {
            setMessage("Please provide a valid email and password") 
            console.error(error)
        }
      }

      const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            alert("Login successful!");
            navigate("/")
        } catch (error) {
            alert("Google sign in failed!") 
            console.error(error)
        }
      }
      return (
        <div className="h-[calc(100vh-120px)] flex justify-center items-center bg-gray-50">
          <div className="w-full max-w-md mx-auto bg-gray-100 shadow-lg rounded-3xl px-10 py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Welcome Back
            </h2>
      
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-2xl py-2 px-4 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-md"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-2xl py-2 px-4 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-md"
                />
              </div>
              {message && (
                <p className="text-red-500 text-sm italic mb-4 text-center">
                  {message}
                </p>
              )}
              <div className="mb-6">
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white italic font-semibold py-2 rounded-2xl shadow-md focus:outline-none transition-all"
                >
                  Login
                </button>
              </div>
            </form>
      
            <p className="text-center text-sm font-medium text-gray-600">
              Don’t have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </p>
      
            <div className="mt-6">
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-2xl shadow-md focus:outline-none transition-all"
              >
                <FaGoogle className="mr-2 text-lg" />
                Sign in with Google
              </button>
            </div>
      
            <p className="mt-6 text-center text-gray-400 text-xs">
              ©2025 Book Store. All rights reserved.
            </p>
          </div>
        </div>
      );
      
}

export default Login