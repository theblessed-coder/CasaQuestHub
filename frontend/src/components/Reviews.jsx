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
    <div>
    Reviews
    </div>
  )
}

export default Reviews