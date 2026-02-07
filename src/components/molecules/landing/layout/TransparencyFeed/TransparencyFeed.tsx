import { Button } from "@/components/ui/button";

const TransparencyFeed = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Transparency Feed
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Living proof of participation showing how funds are used with verified
          updates
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-xl p-6 sm:p-8 text-white text-center">
          <div className="mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            Verified, Visible, and Accountable
          </h3>
          <p className="text-base sm:text-lg mb-6 opacity-90">
            Transform static payment records into living proof of participation
            with receipts, photos, and verified updates
          </p>

          <Button
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto"
          >
            Learn More About Transparency
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TransparencyFeed;
