export interface Review {
  id: string;
  rideId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
  approved: boolean;
}