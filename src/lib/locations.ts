export type Location = {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  img: string;
  airports: string[];
  seasons: string;
  body: string[];
};

export const locations: Location[] = [
  {
    slug: "london",
    name: "London",
    region: "United Kingdom",
    tagline: "The financial capital of Europe — and the busiest private jet market on the continent.",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&auto=format&fit=crop",
    airports: ["London Farnborough (FAB)", "London Luton (LTN)", "Biggin Hill (BQH)", "London City (LCY)"],
    seasons: "Year-round. Peaks around Wimbledon (July), the Chelsea Flower Show (May) and the autumn financial calendar.",
    body: [
      "London is the most-flown private aviation market in Europe. Whether you are landing for a board meeting in Mayfair or transferring from a transatlantic flight, dedicated business-aviation terminals at Farnborough, Luton, Biggin Hill and London City put you on the ground in minutes.",
      "Helicopter transfers from Battersea Heliport make Mayfair, the City and Canary Wharf reachable in under 15 minutes. Combined with chauffeured ground transport, you control every minute of your day.",
    ],
  },
  {
    slug: "paris",
    name: "Paris",
    region: "France",
    tagline: "Le Bourget — Europe's oldest and most prestigious business aviation airport.",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&auto=format&fit=crop",
    airports: ["Paris Le Bourget (LBG)", "Paris Toussus-le-Noble (TNF)"],
    seasons: "Fashion Weeks (Feb/Sep), Roland Garros (May/June), and a strong corporate calendar.",
    body: [
      "Le Bourget sits 7 km from central Paris and handles more private flights than any other European airport. Pair with a helicopter transfer to the Heliport de Paris-Issy or direct car service to the 1st and 8th arrondissements.",
      "From fashion weeks to private collection visits, Paris remains the most-requested European city break by our clients.",
    ],
  },
  {
    slug: "milan",
    name: "Milan",
    region: "Italy",
    tagline: "Fashion, finance, and the gateway to the Italian Lakes.",
    img: "https://images.unsplash.com/photo-1520440229-6469a149ac59?w=1200&auto=format&fit=crop",
    airports: ["Milano Linate (LIN)", "Milano Malpensa (MXP)"],
    seasons: "Fashion Week (Feb/Sep), Salone del Mobile (April), summer transfers to Lake Como.",
    body: [
      "Linate sits 10 minutes from the Duomo, making Milan one of the easiest European cities to access by private jet. Helicopter onward transfers to Lake Como, Portofino and the Dolomites are seamless.",
      "We coordinate ski transfers to St. Moritz, Cortina and Courmayeur during winter, and yacht boarding on the Ligurian coast in summer.",
    ],
  },
  {
    slug: "mallorca",
    name: "Mallorca",
    region: "Balearic Islands",
    tagline: "The Mediterranean superyacht hub — and a year-round private aviation market.",
    img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=1200&auto=format&fit=crop",
    airports: ["Palma de Mallorca (PMI)", "Son Bonet (private)"],
    seasons: "May to October peak. Easter, Christmas and shoulder-season demand is strong.",
    body: [
      "Mallorca is one of our most-flown destinations between May and October. Empty leg opportunities are frequent in both directions, particularly Amsterdam–Palma and Geneva–Palma.",
      "We arrange direct helicopter transfers from Palma Airport to Port Andratx, Deià and the north coast, plus yacht boarding on the eastern beaches.",
    ],
  },
  {
    slug: "marbella",
    name: "Marbella",
    region: "Costa del Sol, Spain",
    tagline: "Golf, beach clubs, and Europe's most reliable winter sun.",
    img: "https://images.unsplash.com/photo-1551023960-1f7e9f74a32f?w=1200&auto=format&fit=crop",
    airports: ["Málaga–Costa del Sol (AGP)", "Gibraltar (GIB)"],
    seasons: "Year-round mild climate. Peak in July/August and during the Volvo Match Play.",
    body: [
      "Málaga is 40 minutes by car from Marbella and one of Spain's busiest private aviation airports. Many clients combine Marbella with a helicopter day-trip to Tangier or Gibraltar.",
      "Our team handles slot coordination during the August peak when commercial flights saturate the airport.",
    ],
  },
  {
    slug: "north-africa",
    name: "North Africa",
    region: "Morocco & Tunisia",
    tagline: "Marrakech, Tangier, Essaouira — short hops from Southern Europe.",
    img: "https://images.unsplash.com/photo-1539020140153-e479b8c5b6e7?w=1200&auto=format&fit=crop",
    airports: ["Marrakech Menara (RAK)", "Tangier Ibn Battouta (TNG)", "Casablanca Mohammed V (CMN)"],
    seasons: "October to April peak. Marrakech is the most-flown destination.",
    body: [
      "North Africa is increasingly popular as a winter alternative to the Caribbean. Marrakech is a 2.5-hour flight from London and offers riad rentals, desert excursions and golf.",
      "We handle visa coordination, ground handling and onward helicopter transfers to the Atlas Mountains and coastal resorts.",
    ],
  },
  {
    slug: "dubai",
    name: "Dubai",
    region: "United Arab Emirates",
    tagline: "The Middle East's business and leisure capital — and a major long-haul charter market.",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&auto=format&fit=crop",
    airports: ["Dubai Al Maktoum (DWC)", "Dubai International (DXB)"],
    seasons: "November to April peak. Summer is quieter but well-priced.",
    body: [
      "Dubai is a 6.5-hour flight from most of Western Europe and our most-requested long-haul leisure destination. Al Maktoum's dedicated business aviation terminal makes arrivals seamless.",
      "We arrange yacht charters, desert excursions and onward flights to the Maldives, Seychelles and Oman.",
    ],
  },
  {
    slug: "abu-dhabi",
    name: "Abu Dhabi",
    region: "United Arab Emirates",
    tagline: "Cultural capital of the UAE and a major sovereign business hub.",
    img: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=1200&auto=format&fit=crop",
    airports: ["Abu Dhabi International (AUH)", "Al Bateen Executive (AZI)"],
    seasons: "F1 Grand Prix (November/December), winter leisure season.",
    body: [
      "Al Bateen is the only dedicated business aviation airport in the Middle East, located 15 minutes from downtown Abu Dhabi.",
      "We coordinate F1, golf and Louvre Abu Dhabi itineraries, with helicopter transfers to private island resorts.",
    ],
  },
  {
    slug: "new-york",
    name: "New York",
    region: "United States",
    tagline: "The most active business jet market in the world.",
    img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&auto=format&fit=crop",
    airports: ["Teterboro (TEB)", "Westchester (HPN)", "Republic (FRG)"],
    seasons: "Year-round. Heaviest demand around UNGA week (September) and the holidays.",
    body: [
      "Teterboro is the world's most-used business aviation airport, 12 miles from Midtown Manhattan. We coordinate transatlantic charters from Europe to TEB, HPN and FRG.",
      "Helicopter transfers from Manhattan heliports to the Hamptons and Nantucket are arranged for the summer season.",
    ],
  },
  {
    slug: "caribbean",
    name: "Caribbean",
    region: "St. Barths, Mustique, Turks & Caicos",
    tagline: "Winter sun, private islands and the world's most exclusive runways.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop",
    airports: ["St. Barths (SBH)", "Antigua (ANU)", "Providenciales (PLS)", "St. Maarten (SXM)"],
    seasons: "December to April peak. Christmas/New Year requires booking 3+ months ahead.",
    body: [
      "The Caribbean is our most-flown long-haul leisure region between December and April. St. Barths' famously short runway requires specialist crews — we use only operators with current SBH certification.",
      "We coordinate yacht charters out of Antigua and St. Maarten, plus inter-island helicopter and seaplane transfers.",
    ],
  },
];
