const VerificationTransparency = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Verification & Transparency
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Automated reconciliation makes every transaction verifiable and
            trustworthy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Core Verification Features */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
              Core Verification Features
            </h3>

            <div className="space-y-6">
              {/* Verification Process */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Verification Process
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">
                        Automatic Account
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Each contributor gets a unique CrowdNest account on
                        select
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">
                        Direct Payment
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Contributors pay via transfer, card, or USSD to verified
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">
                        Real-time Confirmation
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Instant verification via secure gateway integration and
                        bank
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">
                        Auto Reconciliation
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Smart matching links payments to contributors and
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
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
                <h4 className="font-semibold text-sm sm:text-base">
                  Instant Verification
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                All payments confirmed immediately via gateway and bank
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-sm sm:text-base">
                  Smart Reconciliation
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Automated matching of payment data to the right collection and
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-sm sm:text-base">
                  Unified Ledger
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Transparent record system logs every verified payment across
              </p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-sm sm:text-base">
                  Audit Trail
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Every transaction event logged for complete traceability
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationTransparency;
