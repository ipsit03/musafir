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
};

export const rideData: Record<string, Ride> = {
  "leh-ladakh": {
    id: "leh-ladakh",
    title: "Mystic Leh–Ladakh Adventure",
    description:
      "A breathtaking 15-day journey from Burdwan to the Himalayas and back — covering Chandigarh, Sissu, Leh, Nubra, Turtuk, Pangong, Manali and more.",
    duration: "13 to 15 days",
    groupSize: "8–14 people",
    location: "Burdwan → Chandigarh → Ladakh → Manali → Burdwan",
    date: "03–17 Oct 2025",
    altitude: "Up to 17,500 ft (Khardung La)",
    mode: "Train + Road (SUV/Tempo)",
    image: "/ladakh.png",
    announcement: "📣 Bookings open from 8th August until 3rd week of September 2025!",
    bookingLink: "https://your-google-form-link.com", // 🔁 Replace this with the actual form
    itinerary: [
      "Day 1: Train from Burdwan to Chandigarh (30+ hrs)",
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
      "Day 13: Return to Chandigarh by road; Train to Burdwan",
      "Day 14: Full day onboard train",
      "Day 15: Arrival in Burdwan – trip ends with group photo",
    ],
    inclusions: [
      "Train tickets (Burdwan ↔ Chandigarh)",
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
  },

  "arunachal-explorer": {
    id: "arunachal-explorer",
    title: "Arunachal–Kaziranga Explorer",
    description:
      "Explore the monasteries, valleys, and national parks of North-East India on this 10-night backpacking adventure.",
    duration: "10 Nights / 11 Days",
    groupSize: "10–15 people",
    location: "Start & End: Burdwan (Train via Guwahati)",
    date: "December 2025",
    mode: "Train + Road (Tempo Traveller/Innova)",
    image: "/arunachal.png",
    announcement: "📣 Booking details and pricing for this trip will be announced during Durga Puja 2025!",
    itinerary: [
      "Day 1: Burdwan → Guwahati (Train Travel)",
      "Day 2: Guwahati → Sangti Valley (via Tezpur, Bhalukpong, Bomdila)",
      "Day 3: Sangti → Tawang via Sela Pass",
      "Day 4: Tawang sightseeing – Monastery, Giant Buddha, War Memorial",
      "Day 5: Day trip to Bumla Pass, P.T. Tso & Madhuri Lake",
      "Day 6: Tawang → Dirang – Hot Springs & Monastery",
      "Day 7: Dirang → Kaziranga (via Bomdila & Tezpur)",
      "Day 8: Jeep Safari in Kaziranga + travel to Guwahati",
      "Day 9: Kamakhya Temple visit + Train to Burdwan",
      "Day 10: Arrival in Burdwan",
    ],
    inclusions: [
      "Train fare (Sleeper Class) Burdwan ↔ Guwahati",
      "All road transfers & sightseeing in Arunachal & Assam (shared group vehicle)",
      "Accommodation in budget homestays, lodges & hostels (twin/triple sharing)",
      "ILP for Arunachal Pradesh",
      "Driver allowances, parking, tolls & fuel",
      "Group leader / trip coordinator from Musafir",
    ],
    exclusions: [
      "Meals (except where homestay includes breakfast/dinner)",
      "Jeep Safari charges in Kaziranga",
      "Local army vehicle for Bumla Pass",
      "Entry fees to monuments / sites",
      "Camera/video charges (if applicable)",
      "Personal expenses (laundry, tips, extra snacks, bottled water)",
      "Any transport or stay outside itinerary due to weather/roadblocks",
      "Travel insurance or medical expenses",
    ],
    notes: [
      "ILP (Inner Line Permit) required for Arunachal – will be arranged",
      "One dedicated vehicle for entire Arunachal trip",
      "Best time to travel: March–May & October–early December",
      "Eat local – dhabas offer cheap & tasty meals (thukpa, momos, dal-rice)",
      "Trip budget, pricing & booking will be announced during Durga Puja 2025",
    ],
  },
};
