export type Location = {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  img: string;
  airports: string[];
  seasons: string;
  body: string[];
  flightTime: string;
  priceFrom: string;
  bookWindow: string;
  blog: {
    readMins: number;
    title: string;
    intro: string;
    sections: { h: string; p: string }[];
  };
};

export const locations: Location[] = [
  {
    slug: "london",
    name: "London",
    region: "United Kingdom",
    tagline:
      "The financial capital of Europe — and the busiest private jet market on the continent.",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&auto=format&fit=crop",
    airports: [
      "London Farnborough (FAB)",
      "London Luton (LTN)",
      "Biggin Hill (BQH)",
      "London City (LCY)",
    ],
    seasons:
      "Year-round. Peaks around Wimbledon (July), the Chelsea Flower Show (May) and the autumn financial calendar.",
    flightTime: "≈ 1h 05m from Amsterdam",
    priceFrom: "From €8,500 one-way · Light jet",
    bookWindow: "48–72h ideal · Same-day possible",
    body: [
      "London is the most-flown private aviation market in Europe. Whether you are landing for a board meeting in Mayfair or transferring from a transatlantic flight, dedicated business-aviation terminals at Farnborough, Luton, Biggin Hill and London City put you on the ground in minutes.",
      "Helicopter transfers from Battersea Heliport make Mayfair, the City and Canary Wharf reachable in under 15 minutes. Combined with chauffeured ground transport, you control every minute of your day.",
    ],
    blog: {
      readMins: 4,
      title: "Private Jet Amsterdam to London",
      intro:
        "One of Europe's busiest business corridors — skip the queues and fly direct in under an hour.",
      sections: [
        {
          h: "Which London airport?",
          p: "Farnborough and Biggin Hill are the most popular for executive traffic — both offer dedicated FBOs with under-10-minute curb-to-cabin times. London City is unbeatable for The City and Canary Wharf, but is runway-restricted to specific aircraft types. Luton has the widest aircraft availability and good late-night slots.",
        },
        {
          h: "Indicative pricing",
          p: "A light jet (Citation CJ2, Phenom 300) Amsterdam–London one-way runs from €8,500–€12,000. Mid-size jets sit around €14,000–€18,000. Empty legs on this corridor can drop below €5,000 — check the Empty Legs page or set a price alert.",
        },
        {
          h: "When to book",
          p: "48–72 hours notice gives you the best aircraft choice and pricing. Same-day departures are possible from Amsterdam Schiphol-Oost — expect a 2-hour minimum lead time for crew callout and slot coordination.",
        },
      ],
    },
  },
  {
    slug: "paris",
    name: "Paris",
    region: "France",
    tagline:
      "Le Bourget — Europe's oldest and most prestigious business aviation airport.",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&auto=format&fit=crop",
    airports: ["Paris Le Bourget (LBG)", "Paris Toussus-le-Noble (TNF)"],
    seasons:
      "Fashion Weeks (Feb/Sep), Roland Garros (May/June), and a strong corporate calendar.",
    flightTime: "≈ 55m from Amsterdam",
    priceFrom: "From €7,900 one-way · Light jet",
    bookWindow: "48h ideal · Tight slots during Fashion Week",
    body: [
      "Le Bourget sits 7 km from central Paris and handles more private flights than any other European airport. Pair with a helicopter transfer to the Heliport de Paris-Issy or direct car service to the 1st and 8th arrondissements.",
      "From fashion weeks to private collection visits, Paris remains the most-requested European city break by our clients.",
    ],
    blog: {
      readMins: 4,
      title: "Private Jet Amsterdam to Paris",
      intro:
        "Land at Le Bourget and be in the 8th arrondissement before a commercial flight would have boarded.",
      sections: [
        {
          h: "Why Le Bourget",
          p: "Le Bourget is the only large European city airport dedicated exclusively to business aviation. Three FBOs (Signature, Universal, Advanced) operate 24/7 with valet parking and direct ramp access.",
        },
        {
          h: "Indicative pricing",
          p: "Light jet AMS–LBG one-way is €7,900–€11,500. During Fashion Weeks (late February and late September) demand triples and prices rise 30–40%. Book early or look at Toussus-le-Noble as an alternative.",
        },
        {
          h: "When to book",
          p: "Two days out is comfortable. For Roland Garros and Fashion Week, book 2–3 weeks in advance to lock in your preferred aircraft and arrival slot.",
        },
      ],
    },
  },
  {
    slug: "milan",
    name: "Milan",
    region: "Italy",
    tagline: "Fashion, finance, and the gateway to the Italian Lakes.",
    img: "https://images.unsplash.com/photo-1520440229-6469a149ac59?w=1200&auto=format&fit=crop",
    airports: ["Milano Linate (LIN)", "Milano Malpensa (MXP)"],
    seasons:
      "Fashion Week (Feb/Sep), Salone del Mobile (April), summer transfers to Lake Como.",
    flightTime: "≈ 1h 35m from Amsterdam",
    priceFrom: "From €12,500 one-way · Light jet",
    bookWindow: "3–5 days · Salone del Mobile fills 6 weeks out",
    body: [
      "Linate sits 10 minutes from the Duomo, making Milan one of the easiest European cities to access by private jet. Helicopter onward transfers to Lake Como, Portofino and the Dolomites are seamless.",
      "We coordinate ski transfers to St. Moritz, Cortina and Courmayeur during winter, and yacht boarding on the Ligurian coast in summer.",
    ],
    blog: {
      readMins: 5,
      title: "Private Jet Amsterdam to Milan",
      intro:
        "Land at Linate, 10 minutes from the Duomo — and connect directly to Lake Como by helicopter.",
      sections: [
        {
          h: "Linate vs Malpensa",
          p: "Linate is closer and faster but slot-restricted; Malpensa has more capacity and 24h availability. For day-trips and same-day returns, always go Linate.",
        },
        {
          h: "Indicative pricing",
          p: "Light jet Amsterdam–Milan one-way: €12,500–€16,000. Salone del Mobile (mid-April) and Fashion Week pricing rises sharply — expect +50%.",
        },
        {
          h: "Onward by helicopter",
          p: "We arrange direct heli transfers Linate–Lake Como (≈25 minutes) and Linate–Portofino (≈50 minutes) — bypassing 2–3 hours of summer road traffic.",
        },
      ],
    },
  },
  {
    slug: "mallorca",
    name: "Mallorca",
    region: "Balearic Islands",
    tagline:
      "The Mediterranean superyacht hub — and a year-round private aviation market.",
    img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=1200&auto=format&fit=crop",
    airports: ["Palma de Mallorca (PMI)", "Son Bonet (private)"],
    seasons:
      "May to October peak. Easter, Christmas and shoulder-season demand is strong.",
    flightTime: "≈ 2h 40m from Amsterdam",
    priceFrom: "From €16,000 one-way · Light jet",
    bookWindow: "1–2 weeks in summer · Empty legs frequent",
    body: [
      "Mallorca is one of our most-flown destinations between May and October. Empty leg opportunities are frequent in both directions, particularly Amsterdam–Palma and Geneva–Palma.",
      "We arrange direct helicopter transfers from Palma Airport to Port Andratx, Deià and the north coast, plus yacht boarding on the eastern beaches.",
    ],
    blog: {
      readMins: 5,
      title: "Private Jet Amsterdam to Mallorca",
      intro:
        "The most-flown summer corridor out of the Netherlands — and the easiest place in Europe to find empty legs.",
      sections: [
        {
          h: "Best airport",
          p: "Palma (PMI) handles all jet traffic. The general aviation terminal is on the north apron with a 5-minute drive to the main road network. Son Bonet is small-prop only.",
        },
        {
          h: "Indicative pricing",
          p: "Light jet AMS–PMI one-way: €16,000–€21,000 in peak. Empty legs regularly available from €5,500. Heli transfer PMI–Port Andratx adds ≈€2,200.",
        },
        {
          h: "When to book",
          p: "For July and August weekends, book 10–14 days out. Shoulder season (May, September, October) is the sweet spot for pricing and aircraft choice.",
        },
      ],
    },
  },
  {
    slug: "marbella",
    name: "Marbella",
    region: "Costa del Sol, Spain",
    tagline: "Golf, beach clubs, and Europe's most reliable winter sun.",
    img: "https://images.unsplash.com/photo-1551023960-1f7e9f74a32f?w=1200&auto=format&fit=crop",
    airports: ["Málaga–Costa del Sol (AGP)", "Gibraltar (GIB)"],
    seasons:
      "Year-round mild climate. Peak in July/August and during the Volvo Match Play.",
    flightTime: "≈ 3h 10m from Amsterdam",
    priceFrom: "From €18,500 one-way · Light jet",
    bookWindow: "1–2 weeks · August fills early",
    body: [
      "Málaga is 40 minutes by car from Marbella and one of Spain's busiest private aviation airports. Many clients combine Marbella with a helicopter day-trip to Tangier or Gibraltar.",
      "Our team handles slot coordination during the August peak when commercial flights saturate the airport.",
    ],
    blog: {
      readMins: 4,
      title: "Private Jet Amsterdam to Marbella",
      intro:
        "Reliable sun nine months of the year, and Europe's densest concentration of beach clubs and golf courses.",
      sections: [
        {
          h: "Málaga or Gibraltar?",
          p: "Málaga (AGP) is closer to Marbella (40 min by car) and has full FBO services. Gibraltar (GIB) is a viable alternative for shorter aircraft and shaves 30 minutes of road time when staying west of Marbella.",
        },
        {
          h: "Indicative pricing",
          p: "Light jet AMS–AGP one-way: €18,500–€23,000. Mid-size and super-mid range €24,000–€32,000. August peak: add 20–30%.",
        },
        {
          h: "When to book",
          p: "10–14 days for shoulder season; 3–4 weeks for the first three weeks of August.",
        },
      ],
    },
  },
  {
    slug: "north-africa",
    name: "North Africa",
    region: "Morocco & Tunisia",
    tagline:
      "Marrakech, Tangier, Essaouira — short hops from Southern Europe.",
    img: "https://images.unsplash.com/photo-1539020140153-e479b8c5b6e7?w=1200&auto=format&fit=crop",
    airports: [
      "Marrakech Menara (RAK)",
      "Tangier Ibn Battouta (TNG)",
      "Casablanca Mohammed V (CMN)",
    ],
    seasons: "October to April peak. Marrakech is the most-flown destination.",
    flightTime: "≈ 3h 45m from Amsterdam",
    priceFrom: "From €22,000 one-way · Mid-size jet",
    bookWindow: "2 weeks · Visa lead time for some passports",
    body: [
      "North Africa is increasingly popular as a winter alternative to the Caribbean. Marrakech is a 2.5-hour flight from London and offers riad rentals, desert excursions and golf.",
      "We handle visa coordination, ground handling and onward helicopter transfers to the Atlas Mountains and coastal resorts.",
    ],
    blog: {
      readMins: 5,
      title: "Private Jet to Marrakech & North Africa",
      intro:
        "The winter sun alternative that's only 3-4 hours from Amsterdam — and a fraction of the price of the Caribbean.",
      sections: [
        {
          h: "Where to land",
          p: "Marrakech (RAK) is the leisure capital. Tangier (TNG) is fastest from Europe and great for North-Coast resorts. Casablanca (CMN) is the business hub.",
        },
        {
          h: "Indicative pricing",
          p: "Mid-size jet AMS–RAK one-way: €22,000–€28,000. Christmas and February school break carry a 25% premium.",
        },
        {
          h: "When to book",
          p: "Two weeks for peak winter weekends. We handle landing permits (24–48h lead time) and visa coordination if required.",
        },
      ],
    },
  },
  {
    slug: "dubai",
    name: "Dubai",
    region: "United Arab Emirates",
    tagline:
      "The Middle East's business and leisure capital — and a major long-haul charter market.",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&auto=format&fit=crop",
    airports: ["Dubai Al Maktoum (DWC)", "Dubai International (DXB)"],
    seasons: "November to April peak. Summer is quieter but well-priced.",
    flightTime: "≈ 6h 30m from Amsterdam",
    priceFrom: "From €55,000 one-way · Super-mid jet",
    bookWindow: "1–2 weeks · Holidays book 6+ weeks out",
    body: [
      "Dubai is a 6.5-hour flight from most of Western Europe and our most-requested long-haul leisure destination. Al Maktoum's dedicated business aviation terminal makes arrivals seamless.",
      "We arrange yacht charters, desert excursions and onward flights to the Maldives, Seychelles and Oman.",
    ],
    blog: {
      readMins: 6,
      title: "Private Jet Amsterdam to Dubai",
      intro:
        "Six and a half hours non-stop, on a super-mid or heavy jet with a full crew rest cycle.",
      sections: [
        {
          h: "DWC vs DXB",
          p: "Al Maktoum (DWC) is the dedicated business aviation gateway with 24/7 FBO and helicopter transfer to the Palm in 12 minutes. DXB is closer to Downtown but has tighter slot availability.",
        },
        {
          h: "Indicative pricing",
          p: "Super-mid AMS–DWC one-way: €55,000–€72,000. Heavy jet (Global, Falcon 7X): €85,000–€110,000. New Year week: +40%.",
        },
        {
          h: "When to book",
          p: "Standard 1–2 weeks. For the Dec 20–Jan 5 window, book 6+ weeks in advance — aircraft availability ex-Europe is the constraint.",
        },
      ],
    },
  },
  {
    slug: "abu-dhabi",
    name: "Abu Dhabi",
    region: "United Arab Emirates",
    tagline: "Cultural capital of the UAE and a major sovereign business hub.",
    img: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=1200&auto=format&fit=crop",
    airports: ["Abu Dhabi International (AUH)", "Al Bateen Executive (AZI)"],
    seasons: "F1 Grand Prix (November/December), winter leisure season.",
    flightTime: "≈ 6h 45m from Amsterdam",
    priceFrom: "From €57,000 one-way · Super-mid jet",
    bookWindow: "2 weeks · F1 weekend books months ahead",
    body: [
      "Al Bateen is the only dedicated business aviation airport in the Middle East, located 15 minutes from downtown Abu Dhabi.",
      "We coordinate F1, golf and Louvre Abu Dhabi itineraries, with helicopter transfers to private island resorts.",
    ],
    blog: {
      readMins: 5,
      title: "Private Jet Amsterdam to Abu Dhabi",
      intro:
        "Land at Al Bateen — the Middle East's only dedicated business aviation airport — 15 minutes from Saadiyat and the Corniche.",
      sections: [
        {
          h: "Al Bateen advantage",
          p: "Al Bateen (AZI) is reserved for business jets. No commercial traffic means zero queueing and direct ramp-to-car transfers in under 5 minutes.",
        },
        {
          h: "Indicative pricing",
          p: "Super-mid AMS–AUH/AZI one-way: €57,000–€74,000. F1 weekend (early December) commands a 60–80% premium.",
        },
        {
          h: "When to book",
          p: "F1 and New Year's: 3+ months. Otherwise 2 weeks is comfortable.",
        },
      ],
    },
  },
  {
    slug: "new-york",
    name: "New York",
    region: "United States",
    tagline: "The most active business jet market in the world.",
    img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&auto=format&fit=crop",
    airports: ["Teterboro (TEB)", "Westchester (HPN)", "Republic (FRG)"],
    seasons:
      "Year-round. Heaviest demand around UNGA week (September) and the holidays.",
    flightTime: "≈ 7h 45m from Amsterdam",
    priceFrom: "From €72,000 one-way · Heavy jet",
    bookWindow: "2 weeks · UNGA & holidays book 6+ weeks out",
    body: [
      "Teterboro is the world's most-used business aviation airport, 12 miles from Midtown Manhattan. We coordinate transatlantic charters from Europe to TEB, HPN and FRG.",
      "Helicopter transfers from Manhattan heliports to the Hamptons and Nantucket are arranged for the summer season.",
    ],
    blog: {
      readMins: 6,
      title: "Private Jet Amsterdam to New York",
      intro:
        "The transatlantic standard: a heavy jet, two-pilot crew, full cabin service and a Teterboro arrival 12 miles from Midtown.",
      sections: [
        {
          h: "Teterboro vs Westchester",
          p: "Teterboro (TEB) is the default — closest to Manhattan, fastest customs. Westchester (HPN) is better for the Hamptons and Connecticut. Republic (FRG) on Long Island is a quieter alternative.",
        },
        {
          h: "Indicative pricing",
          p: "Heavy jet AMS–TEB one-way: €72,000–€95,000. Ultra-long-range (Global 6000, G650): €110,000–€140,000. UNGA week (mid–late September) is the peak.",
        },
        {
          h: "When to book",
          p: "2 weeks standard. UNGA and Thanksgiving–New Year window: 6+ weeks. Customs and immigration handled planeside via APIS pre-clearance.",
        },
      ],
    },
  },
  {
    slug: "caribbean",
    name: "Caribbean",
    region: "St. Barths, Mustique, Turks & Caicos",
    tagline:
      "Winter sun, private islands and the world's most exclusive runways.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop",
    airports: [
      "St. Barths (SBH)",
      "Antigua (ANU)",
      "Providenciales (PLS)",
      "St. Maarten (SXM)",
    ],
    seasons:
      "December to April peak. Christmas/New Year requires booking 3+ months ahead.",
    flightTime: "≈ 9h 30m from Amsterdam (tech stop)",
    priceFrom: "From €110,000 one-way · Heavy jet",
    bookWindow: "3+ months for peak holiday weeks",
    body: [
      "The Caribbean is our most-flown long-haul leisure region between December and April. St. Barths' famously short runway requires specialist crews — we use only operators with current SBH certification.",
      "We coordinate yacht charters out of Antigua and St. Maarten, plus inter-island helicopter and seaplane transfers.",
    ],
    blog: {
      readMins: 7,
      title: "Private Jet Amsterdam to the Caribbean",
      intro:
        "Heavy jet, single tech stop, and direct island arrival on runways commercial airlines cannot serve.",
      sections: [
        {
          h: "How the routing works",
          p: "Most routes go Amsterdam–Caribbean with a fuel stop in the Azores, Gander or Bermuda depending on payload. Total block time ≈ 9h 30m. For St. Barths, the final leg is by smaller turboprop or by helicopter from St. Maarten.",
        },
        {
          h: "Indicative pricing",
          p: "Heavy jet AMS–Caribbean one-way: €110,000–€150,000. Ultra-long-range: €160,000–€200,000. St. Barths connector (SXM–SBH) adds €3,500–€6,000.",
        },
        {
          h: "When to book",
          p: "Christmas–New Year, Presidents' Day and Easter all need to be booked at least 3 months ahead — repositioning empty legs through the Atlantic are extremely limited during peak.",
        },
      ],
    },
  },
];
