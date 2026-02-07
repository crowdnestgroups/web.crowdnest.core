"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Send, ArrowLeft, User, Lock, Eye, EyeOff, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSignUpMutation } from "@/api/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/lib/validators/auth";
import { useRouter } from "next/navigation";
import { useToast } from "@/providers/ToastContextProvider";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/ui/custom/FormInput";

export default function SignUpPage() {
  const { mutateAsync: signup, isPending } = useSignUpMutation();
  const router = useRouter();
  const toast = useToast();
  const form = useForm<{ email: string, password: string }>({
    resolver: zodResolver(signupSchema),
    mode: "onTouched"
  });
  const { handleSubmit } = form;
  const onSubmit = handleSubmit((data) => signup(data).then(() => {
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
              className="backdrop-blur-2xl bg-linear-to-br from-blue-50/80 via-white/60 to-purple-50/80 rounded-3xl shadow-2xl p-6 border border-white/40"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Form {...form}>
                <form onSubmit={onSubmit} className="space-y-5">
                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <FormInput<typeof signupSchema>
                      control={form.control}
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      label="Email Address"
                      prefix={<Mail className="h-5 w-5 text-blue-600" />}
                      className="block outline-none duration-300 w-full py-6 bg-linear-to-r from-blue-50/50 to-purple-50/50 border border-blue-200/60 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all backdrop-blur-md shadow-lg"
                    />
                  </motion.div>

                  {/* Password Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <FormInput<typeof signupSchema>
                      control={form.control}
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      label="Password"
                      prefix={<Lock className="h-5 w-5 text-blue-600" />}
                      className="block outline-none duration-300 w-full py-6 bg-linear-to-r from-blue-50/50 to-purple-50/50 border border-blue-200/60 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all backdrop-blur-md shadow-lg"
                    />
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
                      loading={isPending}
                      disabled={isPending}
                      type="submit"
                      className="w-full bg-linear-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white py-3 px-6 rounded-xl font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 border border-white/20"
                    >
                      <Send className="h-5 w-5 text-white" />
                      Login
                    </Button>
                  </motion.div>
                </form>
              </Form>

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
                      className="w-full py-3 px-6 rounded-xl font-semibold border-blue-300/60 text-blue-800 bg-linear-to-r from-blue-50/40 to-purple-50/40 hover:from-blue-100/60 hover:to-purple-100/60 hover:border-blue-400/80 transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg"
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
