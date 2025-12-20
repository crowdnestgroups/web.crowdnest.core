import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-linear-to-br from-blue-50 to-indigo-100 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-4">
                Transparent Collection Management
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Simplify Collective
                <span className="text-blue-600 block">Payments</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                Replace scattered confirmations with clean, digital transparency
                built on automation and trust for communities, estates, and
                organizations.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                Get Started Free
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">
                Trusted by communities across Nigeria
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Communities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">₦2.5B+</div>
                  <div className="text-sm text-gray-600">Collected</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-600">Verified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative order-1 lg:order-2">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Main Dashboard Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                {/* Browser Controls */}
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                {/* Dashboard Content */}
                <div className="space-y-4">
                  {/* Collection Header */}
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                      <span className="font-semibold text-gray-800 text-sm sm:text-base">
                        Estate Levy Collection
                      </span>
                      <span className="text-green-600 font-bold text-sm sm:text-base">
                        ₦2.4M / ₦3M
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-[80%] transition-all duration-500"></div>
                    </div>
                  </div>

                  {/* Payment List */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between p-2 sm:p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="font-medium text-sm sm:text-base">
                          John Adebayo
                        </span>
                      </div>
                      <span className="text-green-600 font-semibold text-sm sm:text-base">
                        ₦50,000
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2 sm:p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="font-medium text-sm sm:text-base">
                          Sarah Okafor
                        </span>
                      </div>
                      <span className="text-green-600 font-semibold text-sm sm:text-base">
                        ₦50,000
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2 sm:p-3 bg-yellow-50 rounded-lg">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="font-medium text-sm sm:text-base">
                          David Adebayo
                        </span>
                      </div>
                      <span className="text-yellow-600 font-semibold text-sm sm:text-base">
                        Pending
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 hidden lg:block">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">80%</div>
                  <div className="text-xs text-gray-600">Complete</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 hidden lg:block">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">24</div>
                  <div className="text-xs text-gray-600">Contributors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
