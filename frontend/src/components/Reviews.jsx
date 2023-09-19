import React, { UseState, useState} from 'react';

const Reviews = () => {
    const [ newReview, setNewReview] = useState ({
        name: "",
        comment: "",
        rating: null,
    });

    const [reviews, setReviews] = useState([
      {
        id: 1,
        name: "Gbenga",
        comment: "",
        rating: "4",
      },

      {
        id: 2,
        name: "Princess",
        comment: "",
        rating: "3",
      },

      {
        id: 3,
        name: "Godfrey",
        comment: "",
        rating: "5",
      },
    ]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setNewReview({ ...newReview,[name]: value });
    };

    const handleRatingChange = (rating) => {
        setNewReview({ ...newReview, rating});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newReview.name && newReview.comment && newReview.rating) {
            setReviews([...reviews, {...newReview, id: reviews.length + 1}]);
            setNewReview({ name: "", comment: "", rating: null });
        }
    };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">What Our Customers Are Saying</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id}>
            <p className="text-gray-800">{review.comment}</p>
            <p className="text-gray-600 font-semibold">- {review.name} ({'★'.repeat(review.rating)})</p>
          </div>
        ))}
      </div>
  )
}

export default Reviews;