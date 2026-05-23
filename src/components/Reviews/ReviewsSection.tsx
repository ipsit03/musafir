import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

const ReviewsSection = ({
  rideId,
}: {
  rideId: string;
}) => {
  const [reviews, setReviews] = useState<any[]>(
    []
  );

  useEffect(() => {
    fetchReviews();

    const channel = supabase
      .channel("reviews-channel")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "reviews",
        },
        () => {
          fetchReviews();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchReviews = async () => {
    const { data } = await supabase
      .from("reviews")
      .select("*")
      .eq("ride_id", rideId)
      .eq("approved", true)
      .order("created_at", {
        ascending: false,
      });

    setReviews(data || []);
  };

  const averageRating = reviews.length
    ? (
        reviews.reduce(
          (acc, curr) => acc + curr.rating,
          0
        ) / reviews.length
      ).toFixed(1)
    : "0";

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-3">
        Rider Reviews
      </h2>

      <p className="mb-8 text-gray-600">
        ⭐ {averageRating} (
        {reviews.length} reviews)
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={{
              id: review.id,
              rideId: review.ride_id,
              userName: review.user_name,
              rating: review.rating,
              comment: review.comment,
              createdAt:
                review.created_at,
              approved: review.approved,
            }}
          />
        ))}
      </div>

      <ReviewForm rideId={rideId} />
    </section>
  );
};

export default ReviewsSection;