"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    // Simulate API login call
    const isLoginSuccessful =
      email === "user@example.com" && password === "password123";
    if (isLoginSuccessful) {
      router.push("/dashboard"); // Redirect to a dashboard page on successful login
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Video Section */}
      <div className="flex-3 w-3/4 relative">
        <video
          className="w-full h-full object-cover"
          src="/login/login video.webm" // Replace with your video path
          autoPlay
          muted
          loop
        ></video>
        {/* Optional Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
      </div>

      {/* Login Form Section */}
      <div className="flex-1 w-1/4 flex justify-center bg-white shadow-lg">
        <div className="w-full max-w-md p-8">
          <h2 className="text-4xl font-semibold text-left mt-6 mb-3">Sign in</h2>

          {/* New User? Create An account*/}
          <div className="flex mb-12 gap-2">
            <h2>New User? </h2>
            <h2 className="">Create an Account</h2>
          </div>

          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="user@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="********"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
