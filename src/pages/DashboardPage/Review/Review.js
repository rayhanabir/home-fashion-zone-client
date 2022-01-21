import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import "./Review.css";

const Review = () => {
  const { user } = useAuth();
  const initialCustomerInfo = { customerName: user.displayName };
  const [reviewData, setReviewData] = useState(initialCustomerInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReviewData = { ...reviewData };
    newReviewData[field] = value;
    setReviewData(newReviewData);
  };

  const handleReviewSubmit = e =>{
      e.preventDefault()
      const review = {...reviewData};
      fetch('http://localhost:5000/reviews', {
          method:"POST",
          headers:{
              "Content-type":"application/json"
          },
          body:JSON.stringify(review)
      })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <>
      <section className="dashboard-review-section">
        <h3 className="text-center fw-bold mt-3 text-danger">Review</h3>
        <div className="review-input-area">
          <div className="review-input-box shadow">
            <form onSubmit={handleReviewSubmit}>
              <input
                type="text"
                name="customerName"
                onBlur={handleOnBlur}
                defaultValue={user.displayName}
                placeholder="Your Name"
              />
              <textarea
                cols="30"
                rows="10"
                name="customerReview"
                onBlur={handleOnBlur}
                placeholder="description"
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
