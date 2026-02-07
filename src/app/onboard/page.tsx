"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Send, ArrowLeft, User, Lock, Eye, EyeOff, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useOnboardMutation, useSignUpMutation } from "@/api/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/lib/validators/auth";
import { useRouter } from "next/navigation";
import { useToast } from "@/providers/ToastContextProvider";

export default function OnboardPage() {
  const { mutateAsync: onboard, isPending } = useOnboardMutation();
  const router = useRouter();
  const toast = useToast();
  const form = useForm<{ email: string, password: string }>({
    resolver: zodResolver(signupSchema),
    mode: "onTouched"
  });
  const { handleSubmit } = form;
  const onSubmit = handleSubmit((data) => onboard(data).then(() => {
    toast.showSuccess("Signup successful");
    router.push("/dashboard");
  }).catch((error) => {
    toast.showError(error.message);
  }));
  return (
    <main className="min-h-screen py-10 bg-linear-to-br from-blue-50 to-indigo-100 relative overflow-hidden">

      <div className="flex min-h-screen items-center justify-center container mx-auto max-w-6xl">
        {/* Left Panel */}
        <motion.div
          className="hidden lg:flex lg:w-1/2 flex-col justify-center px-8 relative z-10"
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
                width={80}
                height={80}
                className="rounded-full shadow-2xl"
              />
            </motion.div>
            <motion.h1
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Build Transparent Communities
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Join CrowdNest to manage contributions, dues, and crowdfunding with complete transparency and automation.
            </motion.p>

            {/* Features */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <span>Automated payment verification</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <span>Real-time contribution tracking</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <span>Secure and transparent dashboards</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Panel - Form */}
        <motion.div
          className="w-full flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-12 py-12 relative z-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-xl w-full">
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                Join CrowdNest
              </h2>
              <p className="text-gray-600 text-lg">
                Create your account and start building transparent communities
              </p>
            </motion.div>

            {/* Sign Up Form */}
            <motion.div
              className="backdrop-blur-2xl bg-gradient-to-br from-blue-50/80 via-white/60 to-purple-50/80 rounded-3xl shadow-2xl p-6 border border-white/40"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <form className="space-y-5">
                {/* First Name and Last Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* First Name Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-3">
                      First Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-blue-600" />
                      </div>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        required
                        className="block outline-none focus:ring-1 transition duration-300 w-full pl-12 pr-4 py-3 bg-gradient-to-r from-blue-50/50 to-purple-50/50 border border-blue-200/60 rounded-xl text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all backdrop-blur-md shadow-lg"

                      />
                    </div>
                  </motion.div>

                  {/* Last Name Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-3">
                      Last Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-blue-600" />
                      </div>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        required
                        className="block outline-none focus:ring-1 transition duration-300 w-full pl-12 pr-4 py-3 bg-gradient-to-r from-blue-50/50 to-purple-50/50 border border-blue-200/60 rounded-xl text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all backdrop-blur-md shadow-lg"

                      />
                    </div>
                  </motion.div>
                </div>

                {/* Email Field - Full Width */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block outline-none focus:ring-1 transition duration-300 w-full pl-12 pr-4 py-3 bg-gradient-to-r from-blue-50/50 to-purple-50/50 border border-blue-200/60 rounded-xl text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all backdrop-blur-md shadow-lg"

                    />
                  </div>
                </motion.div>

                {/* Password Field - Full Width */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-3">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-blue-600" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      required
                      className="block outline-none focus:ring-1 transition duration-300 w-full pl-12 pr-12 py-3 bg-gradient-to-r from-blue-50/50 to-purple-50/50 border border-blue-200/60 rounded-xl text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all backdrop-blur-md shadow-lg"

                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-500" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                  </div>
                </motion.div>

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
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white py-3 px-6 rounded-xl font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 border border-white/20"
                  >
                    <Send className="h-5 w-5 text-white" />
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
                  <h2 className="separator text-gray-700">Already have an account?</h2>
                </div>
                <div className="mt-6 flex flex-col justify-center">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full py-3 px-6 rounded-xl font-semibold border-blue-300/60 text-blue-800 bg-gradient-to-r from-blue-50/40 to-purple-50/40 hover:from-blue-100/60 hover:to-purple-100/60 hover:border-blue-400/80 transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg"
                    >
                      <Link href="/login" className="flex items-center justify-center gap-2">
                        <ArrowLeft className="h-5 w-5 text-blue-600" />
                        Back to Login
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Footer */}
            <motion.div
              className="text-center text-sm text-gray-500 mt-8"
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
