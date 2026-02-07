
"use client"
import { Button } from "@/components/ui/button";
import { Mail, Send, ArrowLeft, Lock } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLoginMutation } from "@/api/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/validators/auth";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/ui/custom/FormInput";
import { useToast } from "@/providers/ToastContextProvider";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { mutateAsync: login, isPending } = useLoginMutation();
  const router = useRouter();
  const toast = useToast();
  const form = useForm<{ email: string, password: string }>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched"
  });
  const { handleSubmit } = form;
  const onSubmit = handleSubmit((data) => login(data).then(() => {
    toast.showSuccess("Login successful");
    router.push("/dashboard");
  }).catch((error) => {
    toast.showError(error.message);
  }));
  return (
    <main className="min-h-screen bg-linear-to-br py-10 from-blue-50 to-indigo-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <motion.div
        className="max-w-lg w-full space-y-8 relative z-10"
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
              className="mx-auto rounded-full shadow-xl"
            />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            Welcome to CrowdNest
          </h2>
          <p className="text-gray-600 text-lg">
            Access your transparent contribution dashboard
          </p>
        </motion.div>

        {/* Login Form */}
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
                <FormInput<typeof loginSchema>
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
                <FormInput<typeof loginSchema>
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
              <h2 className="separator text-gray-700">New to Crowdnest?</h2>
            </div>
            <div className="mt-6 flex flex-col justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href='signup'>
                  <Button
                    variant="outline"
                    className="w-full py-3 px-6 rounded-xl font-semibold border-blue-300/60 text-blue-800 bg-linear-to-r from-blue-50/40 to-purple-50/40 hover:from-blue-100/60 hover:to-purple-100/60 hover:border-blue-400/80 transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg"
                  >
                    Create Account
                  </Button>
                </Link>
              </motion.div>
              <Link href='/' className="transition-all text-gray-600 hover:text-gray-800 text-sm hover:underline mt-4 self-center duration-300 flex items-center justify-center">
                <ArrowLeft className="mr-2 h-5 w-5 text-gray-600" />
                <span>Back to home</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center text-sm text-gray-500"
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



