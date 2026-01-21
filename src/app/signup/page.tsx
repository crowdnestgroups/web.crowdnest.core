"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Send, ArrowLeft, User, Lock, Eye, EyeOff, Users, DollarSign, Shield, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ scale: 0.8, rotate: 0 }}
        animate={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600 rounded-full blur-xl flex items-center justify-center">
          <Users className="w-16 h-16 text-blue-300 opacity-50" />
        </div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-700 rounded-full blur-xl flex items-center justify-center">
          <DollarSign className="w-20 h-20 text-blue-300 opacity-50" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-800 rounded-full blur-xl flex items-center justify-center">
          <Shield className="w-24 h-24 text-blue-300 opacity-50" />
        </div>
      </motion.div>

      
      

      <div className="flex min-h-screen items-center justify-center container mx-auto">
        {/* Left Panel */}
        <motion.div
          className="hidden lg:flex lg:w-1/2 flex-col justify-center px-12 relative z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-md">
            <motion.div
              className="mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/icons/image/logo.png"
                alt="CrowdNest Logo"
                width={100}
                height={100}
                className="rounded-full shadow-2xl"
              />
            </motion.div>
            <motion.h1
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Build Transparent Communities
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Join CrowdNest to manage contributions, dues, and crowdfunding with complete transparency and automation.
            </motion.p>

            {/* Features */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center text-white">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <span>Automated payment verification</span>
              </div>
              <div className="flex items-center text-white">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <span>Real-time contribution tracking</span>
              </div>
              <div className="flex items-center text-white">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <span>Secure and transparent dashboards</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Panel - Form */}
        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-12 py-12 relative z-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-lg w-full">
            {/* Mobile Logo */}
            <motion.div
              className="lg:hidden text-center mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/icons/image/logo.png"
                alt="CrowdNest Logo"
                width={80}
                height={80}
                className="mx-auto rounded-full shadow-2xl"
              />
            </motion.div>

            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
                Join CrowdNest
              </h2>
              <p className="text-gray-300 text-lg">
                Create your account and start building transparent communities
              </p>
            </motion.div>

            {/* Sign Up Form */}
            <motion.div
              className="backdrop-blur-lg bg-white/10 rounded-3xl shadow-2xl p-8 border border-white/20"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <form className="space-y-6">
                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-3">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-300" />
                      </div>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        className="block outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all backdrop-blur-sm"
                        placeholder="Your full name"
                      />
                    </div>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-3">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-300" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all backdrop-blur-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </motion.div>

                  {/* Password Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <label htmlFor="password" className="block text-sm font-semibold text-white mb-3">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-300" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        required
                        className="block outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 w-full pl-12 pr-12 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all backdrop-blur-sm"
                        placeholder="Create password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-4 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-300" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-300" />
                        )}
                      </button>
                    </div>
                  </motion.div>

                  {/* Confirm Password Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <label htmlFor="confirmPassword" className="block text-sm font-semibold text-white mb-3">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-300" />
                      </div>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        autoComplete="new-password"
                        required
                        className="block outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 w-full pl-12 pr-12 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all backdrop-blur-sm"
                        placeholder="Confirm password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-4 flex items-center"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-300" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-300" />
                        )}
                      </button>
                    </div>
                  </motion.div>
                </div>

                {/* Sign Up Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" />
                    Create Account
                  </Button>
                </motion.div>
              </form>

              {/* Divider */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="relative">
                  <h2 className="separator text-white">Already have an account?</h2>
                </div>
                <div className="mt-6 flex flex-col justify-center">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full py-4 px-6 rounded-xl font-semibold border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                    >
                      <Link href="/login" className="flex items-center justify-center gap-2">
                        <ArrowLeft className="h-5 w-5" />
                        Back to Login
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Footer */}
            <motion.div
              className="text-center text-sm text-gray-400 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <p>Transparent, secure, and community-driven</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default SignUpPage;