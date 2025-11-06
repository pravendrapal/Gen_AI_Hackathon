import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
  const [mode, setMode] = useState("login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${mode === "login" ? "Logged in" : "Signed up"} successfully!`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="flex items-end justify-center min-h-screen bg-gradient-to-b from-indigo-100 to-indigo-500">
      <motion.form
        layout
        onSubmit={handleSubmit}
        className="relative sm:w-[360px] w-[90%] mb-10 text-center border border-gray-300/60 rounded-3xl px-8 py-8 bg-white shadow-2xl backdrop-blur-md"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60 }}
      >
        <h1 className="text-gray-900 text-3xl font-semibold mb-2">
          {mode === "login" ? "Welcome Back 👋" : "Create Account ✨"}
        </h1>
        <p className="text-gray-500 text-sm mb-5">
          {mode === "login"
            ? "Please sign in to continue"
            : "Join us and start your journey!"}
        </p>

        <AnimatePresence mode="wait">
          {mode !== "login" && (
            <motion.div
              key="name"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center w-full mb-4 bg-gray-50 border border-gray-300/70 h-12 rounded-full pl-6 gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                stroke="#6B7280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="border-none outline-none ring-0 flex-1 bg-transparent"
                value={formData.name}
                onChange={handleChange}
                required={mode !== "login"}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center w-full mb-4 bg-gray-50 border border-gray-300/70 h-12 rounded-full pl-6 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="border-none outline-none ring-0 flex-1 bg-transparent"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center w-full mb-2 bg-gray-50 border border-gray-300/70 h-12 rounded-full pl-6 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border-none outline-none ring-0 flex-1 bg-transparent"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {mode === "login" && (
          <div className="text-right mb-4">
            <button
              type="button"
              className="text-indigo-500 text-sm hover:underline"
            >
              Forgot password?
            </button>
          </div>
        )}

        <motion.button
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          type="submit"
          className="w-full h-11 rounded-full text-white bg-indigo-500 hover:bg-indigo-600 transition"
        >
          {mode === "login" ? "Login" : "Sign Up"}
        </motion.button>

        <p
          onClick={() => setMode((prev) => (prev === "login" ? "signup" : "login"))}
          className="text-gray-500 text-sm mt-4 cursor-pointer"
        >
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <span className="text-indigo-500 hover:underline">
            Click here
          </span>
        </p>
      </motion.form>
    </section>
  );
};

export default Login;
