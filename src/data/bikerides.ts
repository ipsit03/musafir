// src/data/bikerides.ts

export type BikeRide = {
  id: string;
  title: string;
  description: string;
  duration: string;
  groupSize: string;
  location: string;
  date?: string;
  altitude?: string;
  mode: string;
  image: string;
  itinerary: string[];
  tips?: string[];
  inclusions?: string[];
  exclusions?: string[];
  notes?: string[];
  announcement?: string;
  bookingLink?: string;

  bookingEnabled?: boolean;
  reviewsEnabled?: boolean;

 price: {
  [key: string]: string;
};
};

// Only include rides where mode has "Bike"
export const bikeRideData: Record<
  string,
  BikeRide
> = {
  "dooars-on-two-wheels": {
    id: "dooars-on-two-wheels",

    title:
      "DOOARS ON TWO WHEELS — A MONSOON BIKE EXPEDITION",

    description:
      "A cinematic motorcycle expedition through the monsoon forests of North Bengal — riding across elephant corridors, riverside trails, tea gardens, and Himalayan foothills with camping, trekking, and forest immersion.",

    duration: "3 Days / 2 Nights",

    groupSize: "Small Curated Group (8–12 Riders)",

    location:
      "Burdwan/Kolkata → NJP → Buxa → Jayanti → Samsing → NJP → Burdwan/Kolkata",

    date: "June 2026",

    altitude:
      "Approx. 3,000 ft (Samsing)",

    mode:
      "Train + Motorcycle Expedition",

    image:
      "/Dooarsbik.png",

    itinerary: [
      "Day 0: Overnight train departure from Burdwan/Kolkata to NJP",

      "Day 1: Arrival at NJP → Bike pickup & briefing → Ride via Sevoke & Chalsa → Madarihat → Rajabhatkhawa → Buxa Tiger Reserve → Lunch & stay at Buxa → Evening trek to historic Buxa Fort",

      "Day 2: Early morning forest exploration → Chota Mahakaal Temple → Breakfast & checkout → Ride to Jayanti riverside → Wildlife & forest experience → Long scenic ride to Rocky Island, Samsing via tea gardens & river valleys → Sunset meadow hike → Riverside camping & bonfire",

      "Day 3: Sunrise at Murti River → Breakfast → Scenic descent ride back to NJP → Bike return → Evening train to Burdwan/Kolkata",

      "Day 4: Arrival back home with expedition memories",
    ],

    inclusions: [
      "Accommodation at Buxa stay & riverside tent camping at Rocky Island",

      "All meals from Day 1 lunch to Day 3 breakfast",

      "Certified forest guide for Buxa Fort trek",

      "Forest permits & documentation",

      "Jayanti range entry permissions",

      "Bonfire evening at Rocky Island (weather permitting)",

      "First-aid & on-ground expedition support",

      "Dedicated Musafir trip captain throughout the expedition",
    ],

    exclusions: [
      "Train tickets",

      "Motorcycle rental charges",

      "Fuel expenses",

      "Personal riding gear except helmets",

      "Meals during train journeys",

      "Personal expenses & shopping",

      "Tips & gratuities",

      "Damage charges for rental motorcycles",

      "Travel insurance",

      "Anything not explicitly mentioned in inclusions",
    ],

    notes: [
      "Designed for riders comfortable with Indian highways & monsoon riding",

      "June conditions include wet roads, slippery terrain, and occasional heavy rain",

      "Leeches may be present during forest treks",

      "Carry rain gear, waterproof gloves, and quick-dry clothing",

      "Riders must carry valid driving license & ID proof",

      "Slow travel & eco-sensitive riding ethos will be followed throughout the expedition",

      "Pillion riders are allowed on prior request",
    ],

    price: {standard:"5499"},

    bookingEnabled: true,
    reviewsEnabled: false,

    announcement:
      "🌧️ Musafir Travel Co. presents a monsoon motorcycle expedition through the wild Dooars in June 2026. Limited rider slots. Booking details coming soon.",
  },
};