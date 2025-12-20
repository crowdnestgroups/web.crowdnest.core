const PaymentRecordStructure = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Payment Record Structure
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Every verified transaction produces a standardized payment record
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-gray-600 text-sm sm:text-base">
                  Transaction ID:
                </span>
                <span className="font-mono text-sm break-all">
                  TXN-001-001234
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-gray-600 text-sm sm:text-base">
                  Payer ID:
                </span>
                <span className="font-mono text-sm">USR-0078</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-gray-600 text-sm sm:text-base">
                  Method:
                </span>
                <span className="text-green-600 font-semibold text-sm sm:text-base">
                  Bank Transfer
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-gray-600 text-sm sm:text-base">
                  Amount:
                </span>
                <span className="font-semibold text-sm sm:text-base">
                  ₦50,000
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-gray-600 text-sm sm:text-base">
                  Status:
                </span>
                <span className="text-green-600 font-semibold text-sm sm:text-base">
                  Verified
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-gray-600 text-sm sm:text-base">
                  Timestamp:
                </span>
                <span className="font-mono text-sm break-all">
                  2024-11-20 14:30:15
                </span>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l lg:pl-8">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-gray-600 text-sm sm:text-base">
                  Collection:
                </span>
                <span className="font-semibold text-sm sm:text-base">
                  Estate Levy Collection
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-gray-600 text-sm sm:text-base">
                  Due Date:
                </span>
                <span className="text-sm sm:text-base">2024-11-30</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-gray-600 text-sm sm:text-base">
                  Late Fee:
                </span>
                <span className="text-sm sm:text-base">₦0.00</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-gray-600 text-sm sm:text-base">
                  Bank Transfer:
                </span>
                <span className="font-mono text-sm break-all">
                  2024-11-20 14:30:15
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentRecordStructure;
