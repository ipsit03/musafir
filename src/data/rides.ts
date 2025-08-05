// src/data/rides.ts

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
      "Explore the monasteries, valleys, and national parks of North-East India on this 10-night adventure.",
    duration: "10 Nights / 11 Days",
    groupSize: "10–16 people",
    location: "Start: Guwahati | End: Guwahati",
    date: "Dec 2025 (Flexible batches)",
    mode: "SUV / Tempo Traveller",
    image: "/arunachal.png",
    itinerary: [
      "Day 1: Arrive in Guwahati and transfer to Nameri",
      "Day 2: Nameri to Dirang – explore Dirang Valley",
      "Day 3: Dirang to Tawang via Sela Pass",
      "Day 4: Tawang sightseeing: Monastery, War Memorial, Market",
      "Day 5: Tawang to Bumla Pass & Madhuri Lake (permit required)",
      "Day 6: Tawang to Bomdila",
      "Day 7: Bomdila to Kaziranga National Park",
      "Day 8: Jeep safari in Kaziranga – spot rhinos, elephants",
      "Day 9: Kaziranga to Shillong – leisure day",
      "Day 10: Shillong sightseeing (Elephant Falls, Ward's Lake)",
      "Day 11: Return to Guwahati for departure",
    ],
    inclusions: [
      "All accommodation: hotels/homestays",
      "Transportation by Tempo Traveller/SUV",
      "Breakfast & dinner (Day 2 to Day 10)",
      "Sightseeing as per itinerary",
      "Permits for Bumla Pass, Inner Line Permits",
      "Experienced trip leader & local guides",
    ],
    exclusions: [
      "Lunches, snacks, drinks",
      "Safari entry fees & camera permits",
      "Tips & personal expenses",
      "Travel insurance",
    ],
    notes: [
      "Carry photo ID for inner line permits",
      "Warm clothes needed in Tawang (high altitude)",
      "Binoculars recommended for Kaziranga safari",
      "Travel light due to long drives and hilly terrain",
    ],
  },
};
