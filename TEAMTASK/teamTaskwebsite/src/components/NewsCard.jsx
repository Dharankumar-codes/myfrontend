import { FaHeart, FaBookmark } from "react-icons/fa";
import ReviewForm from "./ReviewForm";

const NewsCard = ({ item }) => {
  return (
    <div className="card">

      <img
        src={item.image}
        alt={item.title}
      />

      <h2>{item.title}</h2>

      <p>{item.category}</p>

      <p>{item.description}</p>

      <button>
        <FaHeart />
      </button>

      <button>
        <FaBookmark />
      </button>

      <ReviewForm id={item.id} />

    </div>
  );
};

export default NewsCard;