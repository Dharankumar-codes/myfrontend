import { useState, useRef } from "react";

const ReviewForm = ({ id }) => {
  const [review, setReview] = useState("");

  const inputRef = useRef();

  const handleSubmit = () => {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.push({
      id,
      review,
    });

    localStorage.setItem("reviews", JSON.stringify(reviews));

    setReview("");

    inputRef.current.focus();
  };

  return (
    <div>

      <input
        ref={inputRef}
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write review..."
      />

      <button onClick={handleSubmit}>
        Submit
      </button>

    </div>
  );
};

export default ReviewForm;