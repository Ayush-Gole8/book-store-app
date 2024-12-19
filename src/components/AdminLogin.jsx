import React, { useState } from "react";
import { useForm } from "react-hook-form";

import axios from "axios";
import getBaseUrl from "../utils/baseURL";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${getBaseUrl()}/api/auth/admin`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      const auth = response.data;
      //    console.log(auth)
      if (auth.token) {
        localStorage.setItem("token", auth.token);
        setTimeout(() => {
          localStorage.removeItem("token");
          alert("Token has been expired!, Please login again.");
          navigate("/");
        }, 3600 * 1000);
      }

      alert("Admin Login successful!");
      navigate("/dashboard");
    } catch (error) {
      setMessage("Please provide a valid email and password");
      console.error(error);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-400 to-purple-600">
      <div className="w-full max-w-sm mx-auto bg-white rounded-3xl px-10 pt-8 pb-10 shadow-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Admin Dashboard Login
        </h2>
  
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              {...register("username", { required: true })}
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              className="shadow-sm border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
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
              className="shadow-sm border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
          {message && (
            <p className="text-red-600 text-sm italic mb-4 text-center">{message}</p>
          )}
          <div className="w-full">
            <button className="bg-blue-600 w-full hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg transform hover:scale-105 transition">
              Login
            </button>
          </div>
        </form>
  
        <p className="mt-6 text-center text-gray-500 text-sm">
          ©2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
  
};

export default AdminLogin;
