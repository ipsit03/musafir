import { useState } from "react";
import { supabase } from "../../supabase";

interface Props {
  rideId: string;
}

const ReviewForm = ({ rideId }: Props) => {

  console.log(
    "SUPABASE URL:",
    import.meta.env.VITE_SUPABASE_URL
  );

  console.log(
    "SUPABASE KEY:",
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );

  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    const { data, error } = await supabase
      .from("reviews")
      .insert([
        {
          ride_id: rideId,
          user_name: userName,
          rating,
          comment,
          approved: false,
        },
      ])
      .select();

    setLoading(false);

    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (error) {
      alert(error.message);
      return;
    }

    setUserName("");
    setRating(5);
    setComment("");

    alert(
      "Review submitted successfully!"
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-6 mt-10"
    >
      <h2 className="text-2xl font-bold mb-5">
        Write a Review
      </h2>

      <input
        type="text"
        placeholder="Your Name"
        value={userName}
        onChange={(e) =>
          setUserName(e.target.value)
        }
        required
        className="w-full border rounded-lg px-4 py-3 mb-4"
      />

      <select
        value={rating}
        onChange={(e) =>
          setRating(Number(e.target.value))
        }
        className="w-full border rounded-lg px-4 py-3 mb-4"
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <option key={star} value={star}>
            {star} Star
          </option>
        ))}
      </select>

      <textarea
        placeholder="Write your experience"
        value={comment}
        onChange={(e) =>
          setComment(e.target.value)
        }
        rows={5}
        required
        className="w-full border rounded-lg px-4 py-3 mb-4"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-6 py-3 rounded-xl"
      >
        {loading
          ? "Submitting..."
          : "Submit Review"}
      </button>
    </form>
  );
};

export default ReviewForm;