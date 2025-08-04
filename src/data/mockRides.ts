export interface Ride {
  id: string;
  title: string;
  date: string;
  duration: string;
  location: string;
  groupSize: string;
  image: string;
  description: string;
}

export const mockRides: Ride[] = [
  {
    id: "ride-1",
    title: "Explore Manali",
    date: "September 10–12, 2025",
    duration: "3 Days, 2 Nights",
    location: "Manali, India",
    groupSize: "8–12 people",
    image: "https://source.unsplash.com/random/800x600/?mountains,manali",
    description:
      "Join us for an unforgettable journey through the breathtaking landscapes of Manali.",
  },
  {
    id: "ride-2",
    title: "Desert Safari",
    date: "October 5–7, 2025",
    duration: "3 Days, 2 Nights",
    location: "Jaisalmer, India",
    groupSize: "10–15 people",
    image: "https://source.unsplash.com/random/800x600/?desert,jaisalmer",
    description:
      "Experience the majestic sand dunes and rich Rajasthani culture on this desert adventure.",
  },
  {
    id: "ride-3",
    title: "Coastal Ride",
    date: "November 20–22, 2025",
    duration: "3 Days, 2 Nights",
    location: "Goa, India",
    groupSize: "6–10 people",
    image: "https://source.unsplash.com/random/800x600/?beach,goa",
    description:
      "Cruise along the scenic coastal routes of Goa while enjoying sun, sand, and sea.",
  },
];
