interface Props {
  rating: number;
}

const StarRating = ({ rating }: Props) => {
  return (
    <div className="flex gap-1 text-yellow-400 text-lg">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {star <= rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default StarRating;