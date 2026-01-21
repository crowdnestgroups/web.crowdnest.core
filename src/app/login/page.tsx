
"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Send,ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">



      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ scale: 0.8, rotate: 0 }}
        animate={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-700 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-800 rounded-full blur-xl"></div>
      </motion.div>

      <motion.div
        className="max-w-md w-full space-y-8 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo and Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.div
            className="mb-6"
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
            Welcome to CrowdNest
          </h2>
          <p className="text-gray-300 text-lg">
            Access your transparent contribution dashboard
          </p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          className="backdrop-blur-lg bg-white/10 rounded-3xl shadow-2xl p-8 border border-white/20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <form className="space-y-6">
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
                  className="block outline-none focus:ring-1 transition duration-300 w-full pl-12 pr-4 py-4 bg-white/20  border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all backdrop-blur-sm"
                  placeholder="your@email.com"
                />
              </div>
            </motion.div>

            {/* Login Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Login
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
              <h2 className="separator text-white">New to Crowdnest?</h2>
            </div>
            <div className="mt-6 flex flex-col justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href='signup'>
                  <Button
                  variant="outline"
                  className="w-full py-4 px-6 rounded-xl font-semibold border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  Create Account
                </Button>
                </Link>
              </motion.div>
              <Link href='/' className="transition-all text-white hover:text-white/40 text-sm hover:underline mt-4 self-center duration-300 flex items-center justify-center">
                  <ArrowLeft className="mr-2 h-5 w-5 text-white" />
                  <span>Back to home</span>
                </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center text-sm text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <p>Transparent, secure, and community-driven</p>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default LoginPage;

