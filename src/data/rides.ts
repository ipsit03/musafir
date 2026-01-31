export type Ride = {
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
  price: {
  [key: string]: string;
};
};

export const rideData: Record<string, Ride> = {
  "kanaichatta-sea-beach-expedition": {
  id: "kanaichatta-sea-beach-expedition",
  title: "Kanaichatta Sea Beach Expedition",
  description:
    "Escape the urban chaos with a curated coastal journey into East Midnapore’s untouched beaches, Sonajhuri forests, and mangrove ecosystems. Perfect for nature lovers, photographers, and slow travelers seeking authentic coastal Bengal.",
  duration: "2 Nights / 3 Days",
  groupSize: "Flexible (Self-drive trip)",
  location: "Kolkata / Burdwan → Medinipur → Kanthi → Kanaichatta",
  date: "October to March (Best Season)",
  mode: "Self-Drive (Sedan or SUV recommended)",
  image: "/kanaichatta.png", // ensure this exists in /public
  itinerary: [
    "Day 1: Early morning departure from Kolkata/Burdwan → En route stop at Dariapur Lighthouse & Kapalkundala Temple → Arrival at Nature Stay Beach Camp → Sunset Trail walk → Bonfire evening",
    "Day 2: Early morning birdwatching → Beach sports & recreation → Guided mangrove exploration → Bengali coastal seafood lunch → Visit Bankiput fishing village → Bonfire with folk storytelling & music",
    "Day 3: Morning tide pool exploration & beach photography → Breakfast → Optional stops at Hijli Lighthouse & Fort, Tarapur Barrage, or Kanthi Market → Return journey"
  ],
  inclusions: [
    "2 nights accommodation (Tent or Room stay)",
    "All meals from Day 1 dinner to Day 3 breakfast",
    "Evening tea & snacks",
    "Bonfire evenings with light refreshments",
    "Guided forest walks & beach access",
    "Village visit & mangrove exploration support",
    "Use of beach recreational equipment"
  ],
  exclusions: [
    "Fuel and personal vehicle expenses",
    "Entry fees for lighthouse & historical sites",
    "Personal guide tips",
    "Travel insurance",
    "Alcohol or extra beverages",
    "Personal expenses"
  ],
  notes: [
    "Best visited between October and March for ideal weather",
    "Birdwatching opportunities include Sandpipers, Plovers, and Herons",
    "Strict zero-waste policy followed — respect local ecology",
    "Carry insect repellent, sunscreen, binoculars, and comfortable clothing",
    "Children are welcome but must be supervised near water",
    "Self-drive route is beginner-friendly with well-maintained roads"
  ],
  price: {
  tent: "₹3,200 per person",
  room: "₹3,600 per person"
},
bookingEnabled: true,
  announcement:
    "🌊 Experience Bengal’s untouched coastline with Musafir. Limited slots available to preserve the pristine environment — book early!"
},
  "varanasi-sacred-circle": {
    id: "varanasi-sacred-circle",
    title: "THE SACRED CIRCLE: VARANASI, AYODHYA & PRAYAGRAJ",
    description:
      "A 6-day spiritual and cultural journey across India's holy cities — Varanasi, Sarnath, Ayodhya, and Prayagraj — filled with temples, rituals, food trails and ghats.",
    duration: "5 Nights / 6 Days",
    groupSize: "12–15 People",
    location: "Kolkata → Varanasi → Sarnath → Ayodhya → Prayagraj → Kolkata",
    date: "Early 2026",
    mode: "Train + Road (Private Group Vehicle)",
    image: "/Prayagraj.png", // Make sure to add this image in the `public/` folder
    itinerary: [
      "Day 1: Kolkata → Varanasi (Overnight Train)",
      "Day 2: Kashi Vishwanath, Manikarnika Ghat, BHU, Ganga Aarti",
      "Day 3: Sarnath visit + Varanasi silk weaving alleys, Ganga boat ride",
      "Day 4: Varanasi → Ayodhya – Ram Janmabhoomi, Saryu Aarti",
      "Day 5: Ayodhya → Prayagraj – Triveni Sangam, Anand Bhavan, food trail",
      "Day 6: Prayagraj → Kolkata (Train) – Return with blessings & memories",
    ],
    inclusions: [
      "Train travel (Kolkata ↔ Varanasi & Prayagraj ↔ Kolkata) – Sleeper/3AC",
      "Private group vehicle for all road transfers & sightseeing",
      "Standard hotels/guesthouses/homestays (twin/triple sharing)",
      "Daily breakfast & dinner (vegetarian/local meals)",
      "Guided sightseeing in all cities",
      "Boat rides in Varanasi & Prayagraj",
      "All monument entry fees (where applicable)",
      "Musafir Trip Captain throughout the journey",
      "Driver, tolls, parking, fuel, permits",
    ],
    exclusions: [
      "Lunches & personal snacks/drinks",
      "Extra activities not in itinerary (e.g. optional shopping/boating)",
      "Camera/video charges at monuments",
      "Personal expenses (laundry, calls, etc.)",
      "Tips to guides/drivers",
      "Travel insurance (if applicable)",
      "Any cost due to delays/natural issues/political unrest",
    ],
    notes: [
      "Great for spiritual seekers, culture lovers, and history buffs",
      "Carry modest clothing, ID proof, and stay hydrated",
      "No alcohol/tobacco near sacred sites",
      "Train routes may vary – final confirmation during booking",
    ],
    price: {
      sleeper: "To be announced",
      ac3: "To be announced",
    },
    bookingEnabled: false,
    announcement:
      "🚩 The Sacred Circle ride (Varanasi–Ayodhya–Prayagraj) will commence in early 2026. Booking info coming soon!",
  },
  "leh-ladakh": {
    id: "leh-ladakh",
    title: "MUSAFIRxLADAKH ADVENTURE",
    description:
      "A breathtaking 16-day journey from Kolkata to the Himalayas and back — covering Chandigarh, Sissu, Leh, Nubra, Turtuk, Pangong, Manali, Khardung La, Chang La and more.",
    duration: "13 to 16 days",
    groupSize: "8–14 people",
    location: "Kolkata → Chandigarh → Ladakh → Manali → Kolkata",
    date: "Postponed – New dates to be announced soon",
    altitude: "Up to 17,500 ft (Khardung La)",
    mode: "Train + Road (SUV/Tempo)",
    image: "/Ladakh.jpg",

    // 🟡 Updated announcement message
    announcement:
      "⚠️ Due to unforeseen conditions in Ladakh, our upcoming Musafir × Ladakh journey stands postponed.",

    // 🟡 Disable booking link and mark as inactive

    // 🟡 Show that pricing will be announced later
    price: {
      sleeper: "To be announced",
      ac3: "To be announced",
    },
    bookingEnabled: false,

    itinerary: [
      "Day 1: Train from Kolkata to Chandigarh (30+ hrs)",
      "Day 2: Full day onboard train",
      "Day 3: Scenic drive to Sissu via Mandi, Kullu, Atal Tunnel",
      "Day 4: Long drive to Leh via Jispa, Sarchu, Tanglang La",
      "Day 5: Rest + Sightseeing: Leh Palace, Shanti Stupa, Market",
      "Day 6: Excursion: Hall of Fame, Magnetic Hill, Monasteries",
      "Day 7: Drive to Nubra/Turtuk via Khardung La, Sand Dunes",
      "Day 8: Explore Turtuk & Thang – last Indian village",
      "Day 9: Drive to Pangong Lake via Shyok River",
      "Day 10: Pangong to Leh via Chang La (sunrise optional)",
      "Day 11: Drive back to Manali via Sarchu, Pang",
      "Day 12: Manali sightseeing: Hadimba Temple, cafes",
      "Day 13: Return to Chandigarh by road; Train to Kolkata",
      "Day 14: Full day onboard train",
      "Day 15: Arrival in Kolkata – trip ends with group photo",
    ],
    inclusions: [
      "Train tickets (Kolkata ↔ Chandigarh)",
      "All road transfers in tempo/SUV",
      "Hotels, homestays, Pangong camp",
      "Daily breakfast & dinner (Day 3–13)",
      "Permits for Nubra, Pangong, Turtuk",
      "Sightseeing, oxygen cylinders, first-aid",
      "Trip leaders & local guides",
    ],
    exclusions: [
      "Lunches, snacks, personal expenses",
      "Optional activities: camel ride, rafting",
      "Camera/video permits at restricted sites",
      "Travel insurance",
      "Any unforeseen emergency costs",
    ],
    notes: [
      "Acclimatize for 24 hrs after reaching Leh",
      "BSNL/Airtel postpaid work best in Ladakh",
      "Pack warm layers, sunscreen, lip balm, ID",
      "Inform trip captain of any medical issues",
    ],
  }
};
