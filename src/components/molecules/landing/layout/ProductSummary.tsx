import { Button } from "@/components/ui/button";

const ProductSummary = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-blue-600">
                CrowdNest Product Guide
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Transparent
              <br />
              Collection
              <br />
              Management
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Simplify collective payments for communities, estates, and
              organizations. Replace scattered confirmations with clean, digital
              transparency built on automation and trust.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
              >
                Explore Features
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative order-1 lg:order-2">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                <div className="space-y-4">
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

                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between p-2 sm:p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
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
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
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
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards - Hidden on mobile */}
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

        {/* Bottom Section */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Product Summary
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              CrowdNest helps individuals, estates, and community groups
              collect, manage, and track contributions transparently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                Community Groups
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                Perfect for associations, cooperatives, and religious groups
                managing collective contributions
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-green-50 rounded-xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                Transparency
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                Every transaction is verified and visible in real-time with
                automated reconciliation
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-purple-50 rounded-xl md:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                Web-Based
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                Quick web-based platform optimized for both desktop and mobile
                devices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSummary;
