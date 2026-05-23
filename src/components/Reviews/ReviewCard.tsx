import { Review } from "../../types/reviews";
import StarRating from "./StarRating";

interface Props {
  review: Review;
}

const ReviewCard = ({ review }: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 border">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-lg">
          {review.userName}
        </h3>

        <StarRating rating={review.rating} />
      </div>

      <p className="text-gray-600 mb-3">
        {review.comment}
      </p>

      <span className="text-sm text-gray-400">
        {review.createdAt}
      </span>
    </div>
  );
};

export default ReviewCard;