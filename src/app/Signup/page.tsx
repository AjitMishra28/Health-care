"use client"
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <Head>
        <title>Signup | HealTether</title>
      </Head>

      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-bold text-center text-green-700">Sign Up</h2>
        <p className="text-gray-600 text-center mb-4">Create your account to get started</p>

        <form className="space-y-4">
          <div>
            <label className="text-gray-700">Full Name</label>
            <input type="text" placeholder="Enter your full name" className="border p-3 rounded-md w-full" required />
          </div>

          <div>
            <label className="text-gray-700">Email</label>
            <input type="email" placeholder="Enter your email" className="border p-3 rounded-md w-full" required />
          </div>

          <div>
            <label className="text-gray-700">Mobile</label>
            <input type="tel" placeholder="Enter your mobile number" className="border p-3 rounded-md w-full" required />
          </div>

          <div className="relative">
            <label className="text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="border p-3 rounded-md w-full"
              required
            />
            <span
              className="absolute right-3 top-11 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
            Sign Up
          </button>
        </form>

        <p className="text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <Link href="/Contact" className="text-green-600 font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
