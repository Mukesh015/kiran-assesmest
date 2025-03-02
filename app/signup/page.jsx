import React from "react";
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth"

const SignupPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
    <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800">Sign Up</h2>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium" htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium" htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your password"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition">
          Sign Up
        </button>
        <div className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <a href="#" className="text-blue-500">Login</a>
        </div>
      </form>
    </div>
  </div>
   );
};

export default SignupPage;