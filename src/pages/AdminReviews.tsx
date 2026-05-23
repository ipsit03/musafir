import { useEffect, useState } from "react";
import { supabase } from "../supabase";

const AdminReviews = () => {
  const [reviews, setReviews] = useState<any[]>(
    []
  );

  useEffect(() => {
    fetchReviews();

    const channel = supabase
      .channel("admin-reviews")
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
      .order("created_at", {
        ascending: false,
      });

    setReviews(data || []);
  };

  const approveReview = async (
    id: string
  ) => {
    await supabase
      .from("reviews")
      .update({ approved: true })
      .eq("id", id);
  };

  const deleteReview = async (
    id: string
  ) => {
    await supabase
      .from("reviews")
      .delete()
      .eq("id", id);
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">
        Admin Reviews Dashboard
      </h1>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-4">
                User
              </th>
              <th className="p-4">
                Ride
              </th>
              <th className="p-4">
                Rating
              </th>
              <th className="p-4">
                Comment
              </th>
              <th className="p-4">
                Status
              </th>
              <th className="p-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {reviews.map((review) => (
              <tr
                key={review.id}
                className="border-b"
              >
                <td className="p-4">
                  {review.user_name}
                </td>

                <td className="p-4">
                  {review.ride_id}
                </td>

                <td className="p-4">
                  ⭐ {review.rating}
                </td>

                <td className="p-4">
                  {review.comment}
                </td>

                <td className="p-4">
                  {review.approved
                    ? "Approved"
                    : "Pending"}
                </td>

                <td className="p-4 flex gap-3">
                  {!review.approved && (
                    <button
                      onClick={() =>
                        approveReview(
                          review.id
                        )
                      }
                      className="bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                      Approve
                    </button>
                  )}

                  <button
                    onClick={() =>
                      deleteReview(review.id)
                    }
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminReviews;