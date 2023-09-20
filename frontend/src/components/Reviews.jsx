import React, { useState } from "react";

const Reviews = () => {
  const [newReview, setNewReview] = useState({
    name: "",
    comment: "",
    rating: null,
  });

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Gbenga",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4, // Add a rating property (1-5) to existing reviews
    },
    {
      id: 2,
      name: "Princess",
      comment:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      rating: 5,
    },

    {
      id: 3,
      name: "Godfrey",
      comment:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      rating: 5,
    },
   
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment && newReview.rating) {
      setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
      setNewReview({ name: "", comment: "", rating: null });
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">What Our Users Are Saying</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id}>
            <p className="text-gray-800">{review.comment}</p>
            <p className="text-gray-600 font-semibold">
              - {review.name} ({"★".repeat(review.rating)})
            </p>
          </div>
        ))}
      </div>

      <form className="mt-8 p-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Share Your Review</h2>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={newReview.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded outline-amber-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Comment</label>
          <textarea
            name="comment"
            value={newReview.comment}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded outline-amber-300"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Rating</label>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleRatingChange(star)}
                className={`text-2xl cursor-pointer ${
                  star <= newReview.rating ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                ★
              </button>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-slate-500 hover:text-yellow-50 font-semibold w-full p-2 rounded transition duration-500 ease-in-out"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Reviews;
