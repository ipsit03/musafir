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
  price: {
    sleeper: string;
    ac3: string;
  };
};

// Only include rides where mode has "Bike"
export const bikeRideData: Record<string, BikeRide> = {
  "meghalaya-bike-expedition": {
    id: "meghalaya-bike-expedition",
    title: "MUSAFIRxMEGHALAYA BIKE EXPEDITION 2026",
    description:
      "An adventurous 9-night bike ride through Meghalaya's rivers, waterfalls, and hidden villages – for true explorers.",
    duration: "9 Nights / 10 Days",
    groupSize: "10–12 people",
    location: "Burdwan → Meghalaya (Bike from Guwahati) → Burdwan",
    date: "Coming 2026",
    mode: "Train + Bike (Shared rental)",
    image: "/meghalaya-bike.png", // Save image in /public
    itinerary: [
      "Day 1: Burdwan → Guwahati (Train)",
      "Day 2: Bike pickup → Ride to Nongkhnum Island",
      "Day 3: Nongkhnum → Krangsuri Falls → Shnongpdeng (Camping)",
      "Day 4: Ride to Pynursla via scenic hill roads",
      "Day 5: Ride to Tyrna → Trek to Nongriat village",
      "Day 6: Trek up → Ride to Sohra (Cherrapunji sightseeing)",
      "Day 7: Sohra → Shillong via Mawkdok & Elephant Falls",
      "Day 8: Shillong → Umiam Lake → Guwahati (bike drop) → Train",
      "Day 9: Arrival in Burdwan – trip ends",
    ],
    inclusions: [
      "Train fare (Burdwan ↔ Guwahati) – Sleeper/3AC",
      "Bike rental (2 people per bike, fuel included for itinerary)",
      "Basic homestays/guesthouses/camps (twin/triple sharing)",
      "All entry fees to waterfalls & key attractions",
      "Inner line permits (if needed)",
      "Experienced road captain / trip leader",
      "Basic first aid support",
    ],
    exclusions: [
      "Meals (average ₹250–300/day – flexible)",
      "Fuel for detours outside itinerary",
      "Personal expenses (shopping, boating, zipline, etc.)",
      "Refundable bike security deposit",
      "Repairs due to rider damage",
      "Travel insurance",
    ],
    notes: [
      "Bikes are picked up & dropped in Guwahati – no overnight stay there",
      "Expect basic stays in remote areas (Nongriat, Nongkhnum)",
      "Be prepared for long bike rides & jungle treks",
      "Wear helmets, ride safely – weather can change quickly",
    ],
    price: {
      sleeper: "To be announced",
      ac3: "To be announced",
    },
    announcement:
      "🏍️ The Meghalaya Bike Expedition is coming in 2026! Watch this space for bookings soon.",
  },

  // 🔥 Add more future bike rides here as needed
};
