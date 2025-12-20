const KeyBenefits = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-xl p-6 sm:p-8 text-white mb-8 sm:mb-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Key Benefits
            </h2>
            <p className="text-base sm:text-lg opacity-90 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Replace scattered WhatsApp confirmations and manual record-keeping
              with clean, digital automation
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  Instant Verification
                </h3>
                <p className="opacity-90 text-sm sm:text-base">
                  Real-time payment confirmation
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  Easy Tracking
                </h3>
                <p className="opacity-90 text-sm sm:text-base">
                  Automated progress monitoring
                </p>
              </div>

              <div className="text-center sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  Digital Transparency
                </h3>
                <p className="opacity-90 text-sm sm:text-base">
                  Complete audit trail
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
