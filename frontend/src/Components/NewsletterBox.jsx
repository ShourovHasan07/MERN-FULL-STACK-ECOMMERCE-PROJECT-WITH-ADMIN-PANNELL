import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg-gray- py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Subscribe Now & Get <span className="text-indigo-600">20% Off</span>
        </p>
        <p className="text-gray-500 mt-4 text-sm sm:text-base">
          Stay updated with our latest news, offers, and exclusive deals. Enter
          your email to join our newsletter today!
        </p>
        <form onSubmit={onSubmitHandler} className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            className="w-full sm:w-auto flex-grow px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            type="email"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white text-sm sm:text-base font-medium px-8 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
          >
            SUBSCRIBE
          </button>
        </form>
        <p className="text-gray-400 text-xs sm:text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default NewsletterBox;
