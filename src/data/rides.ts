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
  price: {
    sleeper: string;
    ac3: string;
  };
};

export const rideData: Record<string, Ride> = {
  "leh-ladakh": {
    id: "leh-ladakh",
    title: "MUSAFIRxLADAKH ADVENTURE",
    description:
      "A breathtaking 16-day journey from Burdwan to the Himalayas and back — covering Chandigarh, Sissu, Leh, Nubra, Turtuk, Pangong, Manali, Khardung la, Chang la and more.",
    duration: "13 to 16 days",
    groupSize: "8–14 people",
    location: "Burdwan → Chandigarh → Ladakh → Manali → Burdwan",
    date: "31st October to 15th November 2025",
    altitude: "Up to 17,500 ft (Khardung La)",
    mode: "Train + Road (SUV/Tempo)",
    image: "/ladakh.png",
    announcement: "📣 Bookings open from 8th August until 3rd week of September 2025!",
    bookingLink: "https://docs.google.com/forms/d/e/1FAIpQLScnioIBrPJBlWQ-AvCPqBGJjENVCjj-CG_b9YWS4GeC-3oi4A/viewform?usp=dialog", // 🔁 Replace this with the actual form
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
    price: {
      sleeper: "₹29,999",
      ac3: "₹32,999",
    },
  },

  "arunachal-explorer": {
    id: "arunachal-explorer",
    title: "MUSAFIRxARUNACHAL-KAZIRANGA EXPLORER",
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
     price: {
      sleeper: "To be announced",
      ac3: "To be announced",
    },
  },
  "meghalaya-expedition": {
    id: "meghalaya-expedition",
    title: "MUSAFIRxOFFBEAT MEGHALAYA EXPEDITION",
    description:
      "From sacred groves and cleanest villages to root bridges and riverside stays — experience the lush charm of Meghalaya in 7 days.",
    duration: "6 Nights / 7 Days",
    groupSize: "10–15 people",
    location: "Burdwan → Meghalaya → Burdwan",
    date: "Coming Winter 2025",
    mode: "Train + Road (Tempo/Sumo)",
    image: "/meghalaya.png", // Save the image in `public/` folder
    itinerary: [
      "Day 1: Burdwan → Guwahati (Overnight Train)",
      "Day 2: Guwahati → Laitlum Canyons → Mawphlang",
      "Day 3: Mawphlang → Mawlynnong → Dawki / Shnongpedeng",
      "Day 4: Shnongpedeng → Tyrna → Nongriat (Double Decker Root Bridge Trek)",
      "Day 5: Nongriat → Shillong",
      "Day 6: Shillong Exploration (Falls, Peaks, Food Tour)",
      "Day 7: Shillong → Guwahati → Burdwan (Train)",
    ],
    inclusions: [
      "Train travel: Burdwan ↔ Guwahati (Sleeper/3AC as per package)",
      "All transfers in Meghalaya (Tempo/Sumo)",
      "Accommodation (5N): Mawphlang, Dawki/Shnongpedeng, Nongriat, Shillong",
      "Daily breakfast, 2–3 dinners in remote areas",
      "Guided trek to Nongriat & Double Decker Bridge",
      "Entry fees to Laitlum, Sacred Grove, Mawlynnong Skywalk",
      "Trip leader & basic first aid",
    ],
    exclusions: [
      "Meals not mentioned in inclusions",
      "Boating at Umngot River",
      "Extra entries not listed",
      "Camera/video fees (if applicable)",
      "Personal expenses & snacks",
      "Natural/political delays or disruptions",
    ],
    notes: [
      "Expect basic stays in some locations (e.g. Nongriat)",
      "Prepare for stairs & jungle trek (Day 4)",
      "Carry light rain gear, good shoes, and warm layers",
      "Trip pricing & bookings to open soon – follow us for updates!",
    ],
     price: {
      sleeper: "To be announced",
      ac3: "To be announced",
    },
    announcement:
      "🌿 Get ready to explore Meghalaya's magic — ride details & bookings will open soon for Winter 2025!",
  },
  "varanasi-sacred-circle": {
    id: "varanasi-sacred-circle",
    title: "THE SACRED CIRCLE: VARANASI, AYODHYA & PRAYAGRAJ",
    description:
      "A 6-day spiritual and cultural journey across India's holy cities — Varanasi, Sarnath, Ayodhya, and Prayagraj — filled with temples, rituals, food trails and ghats.",
    duration: "5 Nights / 6 Days",
    groupSize: "12–15 People",
    location: "Burdwan → Varanasi → Sarnath → Ayodhya → Prayagraj → Burdwan",
    date: "Early 2026",
    mode: "Train + Road (Private Group Vehicle)",
    image: "/varanasi.jpeg", // Make sure to add this image in the `public/` folder
    itinerary: [
      "Day 1: Burdwan → Varanasi (Overnight Train)",
      "Day 2: Kashi Vishwanath, Manikarnika Ghat, BHU, Ganga Aarti",
      "Day 3: Sarnath visit + Varanasi silk weaving alleys, Ganga boat ride",
      "Day 4: Varanasi → Ayodhya – Ram Janmabhoomi, Saryu Aarti",
      "Day 5: Ayodhya → Prayagraj – Triveni Sangam, Anand Bhavan, food trail",
      "Day 6: Prayagraj → Burdwan (Train) – Return with blessings & memories",
    ],
    inclusions: [
      "Train travel (Burdwan ↔ Varanasi & Prayagraj ↔ Burdwan) – Sleeper/3AC",
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
    announcement:
      "🚩 The Sacred Circle ride (Varanasi–Ayodhya–Prayagraj) will commence in early 2026. Booking info coming soon!",
  },
  "himachal-group-tour": {
    id: "himachal-group-tour",
    title: "MUSAFIRxSHIMLA-MANALI-KASOL GROUP TOUR",
    description:
      "A scenic 10-day journey through Himachal's pine valleys, rivers, snow passes, and cafes — from Shimla to Manali, Solang, Rohtang, and Kasol.",
    duration: "9 Nights / 10 Days",
    groupSize: "10–15 people",
    location: "Burdwan → Kalka → Shimla → Manali → Kasol → Burdwan",
    date: "2026 Season (March–June / Sept–Nov)",
    mode: "Train + Road (Tempo Traveller)",
    image: "/himachal.png", // 🔁 Save an image named `himachal.png` in your `public/` folder
    itinerary: [
      "Day 1: Burdwan → Kalka (Train via Delhi)",
      "Day 2: Onboard Train – Group bonding, games, music",
      "Day 3: Kalka → Shimla (Toy Train/Tempo); Mall Road walk",
      "Day 4: Shimla sightseeing – Jakhoo Temple, Kufri, Ridge, Food Tour",
      "Day 5: Drive Shimla → Manali via Pandoh Dam, Aut Tunnel",
      "Day 6: Manali – Solang Valley adventure + Atal Tunnel",
      "Day 7: Rohtang Pass excursion (permits required)",
      "Day 8: Manali → Manikaran Sahib → Kasol; Cafes, riverside stay",
      "Day 9: Kasol → Kalka/Chandigarh; Train to Burdwan",
      "Day 10: Onboard train",
    ],
    inclusions: [
      "Train tickets (Burdwan ↔ Kalka/Chandigarh) – 3AC/Sleeper",
      "All road travel from Kalka onwards (Tempo Traveller)",
      "Accommodation in Shimla, Manali & Kasol (triple/twin sharing)",
      "Local sightseeing as per itinerary",
      "Basic group support: trip leader, coordination",
      "Entry permits (Rohtang – subject to rules)",
    ],
    exclusions: [
      "Meals (flexible – available at local markets)",
      "Optional activities: paragliding, rafting, toy train",
      "Camera/video charges (if applicable)",
      "Personal expenses, snacks, shopping, tips",
      "Emergency costs or deviations due to weather",
      "Travel insurance",
    ],
    notes: [
      "Pack warm clothes, trekking shoes, ID, rain cover",
      "Shimla & Manali have decent networks; Kasol may have patchy coverage",
      "Expect early morning departures on long-drive days",
      "Carry dry snacks and stay hydrated during transit",
    ],
     price: {
      sleeper: "To be announced",
      ac3: "To be announced",
    },
    announcement:
      "❄️ Himachal Group Tour coming in 2026 — bookings and pricing will be released soon!",
  },
  "nagaland-winter-expedition": {
  id: "nagaland-winter-expedition",
  title: "MUSAFIRxNAGALAND WINTER EXPEDITION AND HORNBILL FESTIVAL",
  description:
    "Experience Nagaland's tribal traditions, Hornbill Festival, and Dzukou Valley on this immersive 8-day trip.",
  duration: "7 Nights / 8 Days",
  groupSize: "10–12 People",
  location: "Burdwan → Dimapur → Kohima → Dzukou → Mokokchung → Burdwan",
  date: "December 2025 (Hornbill Festival Season)",
  mode: "Train + Road + Trek",
  image: "/nagaland.png", // 🔁 Add this image in your `public/` folder
  itinerary: [
    "Day 1: Burdwan → Dimapur (Train Journey, ~27–30 hrs)",
    "Day 2: Dimapur → Kohima – Hornbill Festival venue, local markets",
    "Day 3: Full day at Hornbill Festival – tribal culture, music, food",
    "Day 4: Kohima → Dzukou Valley Trek (moderate uphill ~4–5 hrs)",
    "Day 5: Trek back → Kohima → Mokokchung (7–8 hrs drive)",
    "Day 6: Explore Longkhum & Ungma Villages – Ao Naga heritage",
    "Day 7: Mokokchung → Dimapur – evening shopping, board night train",
    "Day 8: Arrival in Burdwan – trip ends with group photo",
  ],
  inclusions: [
    "Train tickets (Burdwan ↔ Dimapur – Sleeper/3AC as per budget)",
    "All road transfers (shared group vehicle – Tempo/Sumo)",
    "Budget homestays, guesthouses, and Dzukou trek hut (twin/triple sharing)",
    "Entry to Hornbill Festival",
    "Permits for Dzukou Valley trek",
    "Local guides for Dzukou & Mokokchung sightseeing",
    "Daily breakfast + 2 group dinners (Hornbill night & farewell)",
    "Basic first-aid & trip coordinator",
  ],
  exclusions: [
    "Lunches and dinners not mentioned",
    "Personal snacks, drinks, and bottled water",
    "Camera/video charges at tourist sites",
    "Shopping, laundry, tips, or personal expenses",
    "Travel insurance (optional but recommended)",
    "Extra transport due to emergencies or roadblocks",
  ],
  notes: [
    "Train changes may occur at Howrah or Guwahati",
    "Stay warm – nights can get cold, especially in Dzukou",
    "Trek requires basic fitness – not suitable for those with knee issues",
    "Hornbill Festival runs 1–10 Dec every year – final dates confirmed closer to trip",
  ],
   price: {
      sleeper: "To be announced",
      ac3: "To be announced",
    },
  announcement:
    "🌺 Explore Nagaland during the vibrant Hornbill Festival – bookings for December 2025 open soon!",
}
};
