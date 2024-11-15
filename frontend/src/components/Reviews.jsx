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
      name: "Ibrahim Abdullahi",
      comment: `Buying commercial property has never been easier! 
                The listings were detailed, and I was able to find the perfect location 
                for my business within days. I’ll definitely be back for future investments.`,
      rating: 4, // Add a rating property (1-5) to existing reviews
    },
    {
      id: 2,
      name: "Fatima Yusuf",
      comment:`Their land offers are affordable and come with all the necessary documentation. 
      I recently purchased a plot, and the transaction was smooth from start to finish. 
      Truly a hassle-free experience!`,
      rating: 5,
    },

    {
      id: 3,
      name: "Adenike Olawale",
      comment:`I love how easy it was to browse properties on the site and book viewings. 
      I ended up finding a beautiful residential property in Lagos. Highly satisfied with the service!`,
      rating: 5,
    },

    {
      id: 3,
      name: "Eze Uchenna",
      comment:`This platform stands out because of its trustworthy listings and professional agents. 
      My family and I just moved into a property we found here, and it feels like home already. 
      Kudos to the team!`,
      rating: 4,
    }
   
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
      <h2 className="text-2xl font-bold mb-2 px-6">What Our Users Are Saying</h2>
      <hr className="mb-4 mx-6"/>
      <div className="px-6 md:p-0 grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="md:mx-6 mb-4">
            <p className="text-gray-800">{review.comment}</p>
            <p className="text-yellow-600 font-semibold">
              - {review.name} ({"★".repeat(review.rating)})
            </p>
          </div>
        ))}
      </div>

      <form className="mt-8 p-4 shadow mb-12 mx-6" onSubmit={handleSubmit}>
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
          className="bg-yellow-500 hover:bg-slate-500 hover:text-yellow-50 font-semibold w-full mb-4 p-2 rounded transition duration-500 ease-in-out"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Reviews;
