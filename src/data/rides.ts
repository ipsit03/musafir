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
      "A breathtaking 16-day journey from Kolkata to the Himalayas and back — covering Chandigarh, Sissu, Leh, Nubra, Turtuk, Pangong, Manali, Khardung la, Chang la and more.",
    duration: "13 to 16 days",
    groupSize: "8–14 people",
    location: "Kolkata → Chandigarh → Ladakh → Manali → Kolkata",
    date: "31st October to 15th November 2025",
    altitude: "Up to 17,500 ft (Khardung La)",
    mode: "Train + Road (SUV/Tempo)",
    image: "/Ladakh.jpg",
    announcement: "📣 Bookings open from 8th August until 3rd week of September 2025!",
    bookingLink: "https://docs.google.com/forms/d/e/1FAIpQLScnioIBrPJBlWQ-AvCPqBGJjENVCjj-CG_b9YWS4GeC-3oi4A/viewform?usp=header", // 🔁 Replace this with the actual form
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
    location: "Start & End: Kolkata (Train via Guwahati)",
    date: "26 December 2025 to 5 January 2026",
    mode: "Train + Road (Tempo Traveller/Innova)",
    image: "/Arunachal2.png",
    announcement: "📣 Booking details and pricing for this trip will be announced during Durga Puja 2025!",
    itinerary: [
      "Day 1: Kolkata → Guwahati (Train Travel)",
      "Day 2: Guwahati → Sangti Valley (via Tezpur, Bhalukpong, Bomdila)",
      "Day 3: Sangti → Tawang via Sela Pass",
      "Day 4: Tawang sightseeing – Monastery, Giant Buddha, War Memorial",
      "Day 5: Day trip to Bumla Pass, P.T. Tso & Madhuri Lake",
      "Day 6: Tawang → Dirang – Hot Springs & Monastery",
      "Day 7: Dirang → Kaziranga (via Bomdila & Tezpur)",
      "Day 8: Jeep Safari in Kaziranga + travel to Guwahati",
      "Day 9: Kamakhya Temple visit + Train to Kolkata",
      "Day 10: Arrival in Kolkata",
    ],
    inclusions: [
      "Train fare (Sleeper Class) Kolkata ↔ Guwahati",
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
      sleeper: "₹30,999",
      ac3: "33,999",
    },
  },
   "nagaland-winter-expedition": {
  id: "nagaland-winter-expedition",
  title: "MUSAFIR x Nagaland Winter Expedition & Hornbill Festival",
  description:
    "Join us this December for an authentic cultural journey — witness the Hornbill Festival, trek into the stunning Dzukou Valley, and explore Nagaland’s tribal heartlands with Musafir.",
  duration: "7 Nights / 8 Days",
  groupSize: "5–8 People",
  location: "Kolkata → Dimapur → Kohima → Dzukou Valley → Dimapur → Kolkata",
  date: "5th December to 12th December 2025",
  mode: "Train + Road + Trek",
  image: "/Nagaland2.png", // ✅ ensure this exists in /public
  itinerary: [
    "Day 0: Kolkata → Dimapur (Overnight train, Vivek Express or similar)",
    "Day 1: Arrive Dimapur → Transfer to Kohima (68 km / 3 hrs) – Chümoukedima stop, evening bazaar stroll",
    "Day 2: Kohima acclimatisation & Hornbill Festival at Kisama Heritage Village – cultural shows, food, crafts",
    "Day 3: Kohima → Viswema/Jakhama → Trek to Dzukou Valley (3–5 hrs depending on route) – sunset views",
    "Day 4: Full day in Dzukou Valley – river hike, ridges, optional Dzukou Lake & caves, evening bonfire",
    "Day 5: Trek back to base → Return to Kohima – explore Kohima Night Market",
    "Day 6: Kohima → Dimapur (2.5–3 hrs) – optional zoo & craft village, evening shopping, night train",
    "Day 7: Full-day train journey to Kolkata",
    "Day 8: Arrive Kolkata – trip ends"
  ],
  inclusions: [
    "Train tickets (Kolkata ⇄ Dimapur – Sleeper/3AC as per budget)",
    "Dedicated group vehicle (Tempo Traveller / Sumo) for transfers",
    "Budget homestays, guesthouses, tents (twin/multi-sharing)",
    "Hornbill Festival entry (1 day included)",
    "Permits & local guide for Dzukou trek",
    "Basic first-aid kit & oxygen cylinder (emergency use)",
    "Musafir Trip Captain for on-ground support"
  ],
  exclusions: [
    "Meals (group eats at local spots – ₹300–₹500/day)",
    "Extra Hornbill entry days beyond included ticket",
    "Personal snacks, bottled water, drinks",
    "Camera/video charges at tourist spots",
    "Laundry, tips, and personal expenses",
    "Travel insurance (optional but recommended)",
    "Expenses due to weather, roadblocks, or unforeseen events"
  ],
  notes: [
    "Hornbill Festival runs 1–10 Dec annually – Musafir will confirm exact dates",
    "Dzukou trek requires moderate fitness (4–5 hrs climb)",
    "Nights can get very cold in Dzukou – pack warm clothes",
    "Train journey from Kolkata ~27–30 hrs – patience & group spirit needed!"
  ],
  price: {
    sleeper: "To be announced",
    ac3: "To be announced"
  },
  announcement:
    "🌺 Musafir is heading to Nagaland this December for the Hornbill Festival! Bookings open soon — limited seats for an intimate 5–8 people group."
},
  "meghalaya-expedition": {
    id: "meghalaya-expedition",
    title: "MUSAFIRxOFFBEAT MEGHALAYA EXPEDITION",
    description:
      "From sacred groves and cleanest villages to root bridges and riverside stays — experience the lush charm of Meghalaya in 7 days.",
    duration: "6 Nights / 7 Days",
    groupSize: "10–15 people",
    location: "Kolkata → Meghalaya → Kolkata",
    date: "Coming Winter 2025",
    mode: "Train + Road (Tempo/Sumo)",
    image: "/Meghalaya.jpg", // Save the image in `public/` folder
    itinerary: [
      "Day 1: Kolkata → Guwahati (Overnight Train)",
      "Day 2: Guwahati → Laitlum Canyons → Mawphlang",
      "Day 3: Mawphlang → Mawlynnong → Dawki / Shnongpedeng",
      "Day 4: Shnongpedeng → Tyrna → Nongriat (Double Decker Root Bridge Trek)",
      "Day 5: Nongriat → Shillong",
      "Day 6: Shillong Exploration (Falls, Peaks, Food Tour)",
      "Day 7: Shillong → Guwahati → Kolkata (Train)",
    ],
    inclusions: [
      "Train travel: Kolkata ↔ Guwahati (Sleeper/3AC as per package)",
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
    location: "Kolkata → Kalka → Shimla → Manali → Kasol → Kolkata",
    date: "2026 Season (March–June / Sept–Nov)",
    mode: "Train + Road (Tempo Traveller)",
    image: "/Himachal2.png", // 🔁 Save an image named `himachal.png` in your `public/` folder
    itinerary: [
      "Day 1: Kolkata → Kalka (Train via Delhi)",
      "Day 2: Onboard Train – Group bonding, games, music",
      "Day 3: Kalka → Shimla (Toy Train/Tempo); Mall Road walk",
      "Day 4: Shimla sightseeing – Jakhoo Temple, Kufri, Ridge, Food Tour",
      "Day 5: Drive Shimla → Manali via Pandoh Dam, Aut Tunnel",
      "Day 6: Manali – Solang Valley adventure + Atal Tunnel",
      "Day 7: Rohtang Pass excursion (permits required)",
      "Day 8: Manali → Manikaran Sahib → Kasol; Cafes, riverside stay",
      "Day 9: Kasol → Kalka/Chandigarh; Train to Kolkata",
      "Day 10: Onboard train",
    ],
    inclusions: [
      "Train tickets (Kolkata ↔ Kalka/Chandigarh) – 3AC/Sleeper",
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
  }
};
