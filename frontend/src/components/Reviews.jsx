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



  return (
    <div>
    Reviews
    </div>
  )
}

export default Reviews