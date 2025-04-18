import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ReviewForm = () => {
  const { t } = useTranslation();
  const [rating, setRating] = useState(0);

  return (
    <div className="pt-[100px] pr-10">
      <div className="flex flex-col lg:flex-row items-start justify-around gap-8">
        {/* Sharhlar qismi */}
        <section className="w-full lg:w-1/2">
          <h3 className="text-[30px] text-center mb-12 font-semibold">
            {t("reviewForm.noReviews")}
          </h3>
        </section>

        {/* Sharh yozish formasi */}
        <form
          aria-labelledby="review-form-title"
          className="flex flex-col w-full lg:w-1/2 mb-5"
        >
          <h3
            id="review-form-title"
            className="text-[30px] text-center mb-12 font-semibold"
          >
            {t("reviewForm.title")}
          </h3>

          <label htmlFor="rating" className="text-sm text-gray-700 my-2">
            {t("reviewForm.ratingLabel")}
          </label>
          <div
            id="rating"
            className="flex text-3xl cursor-pointer"
            role="radiogroup"
            aria-label="Rating"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                role="radio"
                aria-checked={rating === num}
                className={`transition-colors ${
                  rating >= num ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => setRating(num)}
              >
                ★
              </span>
            ))}
          </div>

          <label htmlFor="name" className="text-sm text-gray-700 my-2">
            {t("reviewForm.nameLabel")}
          </label>
          <input
            id="name"
            type="text"
            required
            aria-required="true"
            className="w-full bg-gray-300 rounded-full px-4 py-2 text-[16px] outline-none"
          />

          <label htmlFor="email" className="text-sm text-gray-700 my-2">
            {t("reviewForm.emailLabel")}
          </label>
          <input
            id="email"
            type="email"
            required
            aria-required="true"
            className="w-full bg-gray-300 rounded-full px-4 py-2 text-[16px] outline-none"
          />

          <label htmlFor="review" className="text-sm text-gray-700 my-2">
            {t("reviewForm.reviewLabel")}
          </label>
          <textarea
            id="review"
            required
            aria-required="true"
            className="w-full bg-gray-300 rounded-2xl px-4 py-2 text-[16px] outline-none resize-none h-[100px]"
          ></textarea>

          <button
            type="submit"
            aria-label="Submit review"
            className="mt-4 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            {t("reviewForm.submitButton")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
