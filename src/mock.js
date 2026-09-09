// Mock data for Bollywood Masala Cruise clone (frontend only)

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Cruise Packages", to: "/packages" },
  { label: "Onboard Experience", to: "/onboard" },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export const heroFeatures = [
  { icon: "ShieldCheck", title: "Best Price", subtitle: "Guarantee" },
  { icon: "Ticket", title: "All-Inclusive", subtitle: "Packages" },
  { icon: "Headset", title: "24/7 Guest", subtitle: "Support" },
];

export const cruiseOptions = [
  "Caribbean Cruise",
  "Hot Cruise (Bahamas)",
  "Alaska Cruise",
  "Mediterranean Cruise",
  "Dubai Cruise",
];

export const featureStrip = [
  { icon: "ChefHat", title: "Premium Dining", desc: "World-class cuisines for every palate" },
  { icon: "BedDouble", title: "Luxurious Stay", desc: "Relax in spacious, elegant rooms" },
  { icon: "Music", title: "Endless Entertainment", desc: "Live shows, music & exciting events" },
  { icon: "Users", title: "Fun for Everyone", desc: "Activities for all age groups" },
];

export const galleryImages = [
  { src: "/images/gallery/679a385f2ee48503a4c25175.jpeg", alt: "Bollywood Party and Cruise Gala" },
  { src: "/images/gallery/gallery-dance.jpg", alt: "Live Stage Dance Performance" },
  { src: "/images/gallery/679a3650323e37fe2412495b.jpeg", alt: "Guest Celebrations Onboard" },
  { src: "/images/gallery/gallery-night-deck.jpg", alt: "Night Deck Party" },
  { src: "/images/gallery/679a35aa6018454facd93efb.jpeg", alt: "Cruising Horizons" },
  { src: "/images/gallery/66998865f3f1c46064f40c3c.webp", alt: "Stage Concert Performance" },
  { src: "/images/gallery/679a8cc62ee48554e2c2e4a4.jpeg", alt: "Onboard Fun and Memories" },
  { src: "/images/gallery/66998871763d6d76ad01c07d.webp", alt: "Bollywood Dance Showcase" },
  { src: "/images/gallery/679a8d050d9c754a05a6694b.jpeg", alt: "Deck Experience" },
  { src: "/images/gallery/66998880763d6d69a601c07e.webp", alt: "Live Music Night" },
  { src: "/images/gallery/679a33c6714dc02b0d0f2278.jpeg", alt: "Cruise Moments" },
  { src: "/images/gallery/66998e36fe542b2ec2454dcf.webp", alt: "Cruise Party Celebration" },
  { src: "/images/gallery/679a8d052ee4855ceec2e4d4.jpeg", alt: "Happy Cruisers" },
  { src: "/images/gallery/66998e4853a603e4afe4d15c.webp", alt: "Celebrity Nights" },
  { src: "/images/gallery/67aa34929957468281070998.jpeg", alt: "Destinations & Shore Excursions" },
];

export const popularCruises = [
  {
    tag: "DEC 2026",
    title: "Caribbean Cruise",
    subtitle: "7 Nights | 5 Exotic Destinations",
    features: ["Luxury Stay", "All Meals Included", "Live Shows & DJ Nights", "Shore Excursions"],
    price: "$899",
    image: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&w=800&q=75",
    details: {
      dates: "DEC 23, 2026 – DEC 30, 2026",
      ship: "Norwegian Escape",
      banner: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&w=1200&q=75",
      tagline: "Join us for a 7-night Bollywood-themed cruise aboard the Norwegian Escape, filled with entertainment, adventure, and stunning Caribbean destinations!",
      included: ["Meals", "Accommodation", "Entertainment", "Activities"],
      itinerary: [
        { day: "Day 1", port: "Orlando, Port Canaveral", image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&w=400&q=75" },
        { day: "Day 2", port: "Cruising Day", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=75" },
        { day: "Day 3", port: "Puerto Plata (Dominican Republic)", image: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { day: "Day 4", port: "St. Thomas, US Virgin Islands", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=75" },
        { day: "Day 5", port: "Tortola, British Virgin Islands", image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { day: "Day 6", port: "Cruising Day", image: "https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { day: "Day 7", port: "Great Stirrup Cay, Bahamas", image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=400&q=75" },
        { day: "Day 8", port: "Orlando, Port Canaveral", image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&w=400&q=75" },
      ],
      rooms: [
        { name: "Inside Room", desc: "Cozy and comfortable, the inside room offers all essential amenities for a relaxing stay.", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=75" },
        { name: "Balcony Room", desc: "Enjoy stunning ocean views and fresh sea breezes from your private balcony.", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=75" },
        { name: "Club Balcony Suite", desc: "Priority boarding and departure, dedicated entertainment seating, and more.", image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&w=600&q=75" },
      ],
      activities: [
        { icon: "🪷", name: "Mehndi Night", desc: "Adorn your hands with beautiful henna designs" },
        { icon: "🎵", name: "Antakshari", desc: "Dance the night away to Bollywood hits" },
        { icon: "🎲", name: "Tambola", desc: "Join the fun in this popular game" },
        { icon: "💃", name: "Dance Showcase", desc: "Watch incredible dance performances" },
        { icon: "🎉", name: "Bollywood Dance Party", desc: "Dance the night away to Bollywood hits" },
        { icon: "🎤", name: "Open Mic & Karaoke", desc: "Show off your singing talent on stage" },
        { icon: "🕹️", name: "Games Night", desc: "Watch incredible dance performances" },
      ],
      diningImage: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=75",
      diningDesc: "Enjoy a range of meals onboard, including Indian vegetarian and non-vegetarian dishes, as well as international favorites.",
      testimonials: [
        { name: "Priya S.", rating: 5, avatar: "https://i.pravatar.cc/80?img=47", text: "The best vacation ever! The food was amazing, the activities were non-stop fun, and the Bollywood events were a blast. Every day brought something new and exciting. The staff was incredibly friendly, and the accommodations were top-notch. Can't wait to book my next cruise!" },
        { name: "Rahul M.", rating: 5, avatar: "https://i.pravatar.cc/80?img=12", text: "We had an unforgettable time! From the fantastic entertainment to the beautiful destinations, everything exceeded our expectations. The themed events, like mehndi night and the Bollywood dance party, made it even more special. Highly recommend this cruise to everyone looking for a unique and fun-filled getaway!" },
        { name: "Ananya K.", rating: 5, avatar: "https://i.pravatar.cc/80?img=25", text: "Perfect mix of relaxation and excitement. The exclusive events were a highlight, especially the Bollywood dance party and karaoke nights. We loved the variety of activities and the wonderful service. Exceptional value for money. We'll definitely be back for another cruise!" },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1628336707631-68131ca720c3?auto=format&fit=crop&w=600&q=75",
        "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=600&q=75",
        "https://images.pexels.com/photos/24643916/pexels-photo-24643916.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=75",
        "https://images.unsplash.com/photo-1579592672790-39239b6cbc31?auto=format&fit=crop&w=600&q=75",
        "/images/gallery/gallery-dance.jpg",
        "/images/gallery/gallery-night-deck.jpg",
        "/images/about/story-2.jpg",
      ],
      faqs: [
        { q: "What are the room options and their prices?", a: "We offer Inside Rooms, Balcony Rooms, and Club Balcony Suites. Prices vary based on room type and group size. Contact our agents for personalized pricing." },
        { q: "Is there medical assistance available onboard?", a: "Yes, every cruise has a fully equipped medical center staffed with qualified doctors and nurses available 24/7 for any emergencies." },
        { q: "What are the check-in and boarding procedures?", a: "Check-in typically opens 3-4 hours before departure. You'll need a valid passport, booking confirmation, and online check-in completed in advance." },
        { q: "Are there any additional costs I should be aware of?", a: "Our packages are all-inclusive covering meals, entertainment and activities. Optional extras like premium beverages, spa treatments and shore excursions may carry additional charges." },
        { q: "Can I bring children on the cruise?", a: "Absolutely! Our cruises are family-friendly with dedicated kids' clubs, age-appropriate activities and entertainment for guests of all ages." },
      ],
    },
  },
  {
    tag: "MAR 2027",
    title: "Holi Cruise",
    subtitle: "5 Nights | 3 Exotic Destinations",
    features: ["Luxury Stay", "All Meals Included", "Live Shows & DJ Nights", "Shore Excursions"],
    price: "$799",
    image: "https://images.unsplash.com/photo-1583157048761-ac1dba033233?auto=format&fit=crop&w=800&q=75",
    details: {
      dates: "MAR 13, 2027 – MAR 21, 2027",
      ship: "Norwegian Sky",
      banner: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=75",
      tagline: "An unforgettable week of fun, excitement, and Bollywood magic — celebrating Holi at sea!",
      included: ["Meals", "Accommodation", "Entertainment", "Activities"],
      itinerary: [
        { day: "Day 1", port: "New York City, USA", image: "https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?auto=format&fit=crop&w=400&q=75" },
        { day: "Day 2", port: "Cruising at Sea", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=75" },
        { day: "Day 3", port: "Cruising at Sea", image: "https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { day: "Day 4", port: "Port Canaveral (Orlando), Florida", image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&w=400&q=75" },
        { day: "Day 5", port: "Great Stirrup Cay, Bahamas", image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=400&q=75" },
        { day: "Day 6", port: "Nassau, Bahamas", image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { day: "Day 7", port: "Cruising at Sea", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=75" },
        { day: "Day 8", port: "Cruising at Sea", image: "https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { day: "Day 9", port: "New York City, USA", image: "https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?auto=format&fit=crop&w=400&q=75" },
      ],
      rooms: [
        { name: "Inside Room", desc: "Cozy and comfortable, the inside room offers all essential amenities for a relaxing stay.", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=75" },
        { name: "Balcony Room", desc: "Enjoy stunning ocean views and fresh sea breezes from your private balcony.", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=75" },
        { name: "Club Balcony Suite", desc: "Priority boarding and departure, dedicated entertainment seating, and more.", image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&w=600&q=75" },
      ],
      activities: [
        { icon: "🌺", name: "Pool Deck Garba", desc: "Dance garba under the open sky on the pool deck" },
        { icon: "🎨", name: "Holi Celebration", desc: "Celebrate the festival of colours at sea" },
        { icon: "🎵", name: "Antakshari", desc: "Sing along to your favorite Bollywood songs" },
        { icon: "🎲", name: "Tambola", desc: "Join the fun in this popular game" },
        { icon: "💃", name: "Dance Showcase", desc: "Watch incredible dance performances" },
        { icon: "🎉", name: "Bollywood Dance Party", desc: "Dance the night away to Bollywood hits" },
        { icon: "🎤", name: "Open Mic & Karaoke", desc: "Show off your singing talent on stage" },
      ],
      diningImage: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=75",
      diningDesc: "Enjoy a range of meals onboard, including Indian vegetarian and non-vegetarian dishes, as well as international favorites.",
      testimonials: [
        { name: "Sunita R.", rating: 5, avatar: "https://i.pravatar.cc/80?img=33", text: "The Holi Cruise was absolutely magical! The food was phenomenal, especially the Indian buffet nights. We made lifelong friends on this trip. The entertainment team was incredible!" },
        { name: "Deepak M.", rating: 5, avatar: "https://i.pravatar.cc/80?img=11", text: "What a trip! The Holi celebration at sea was unlike anything we've ever experienced. Perfectly organized, no stress, just pure fun. Already booked for next year!" },
        { name: "Meera K.", rating: 5, avatar: "https://i.pravatar.cc/80?img=44", text: "Took my parents for their anniversary and they absolutely loved every moment. The staff was so attentive and warm. 5 stars without a doubt!" },
      ],
      gallery: [
        "/images/gallery/gallery-night-deck.jpg",
        "https://images.unsplash.com/photo-1628336707631-68131ca720c3?auto=format&fit=crop&w=600&q=75",
        "/images/gallery/gallery-dance.jpg",
        "https://images.unsplash.com/photo-1579592672790-39239b6cbc31?auto=format&fit=crop&w=600&q=75",
        "https://images.pexels.com/photos/24643916/pexels-photo-24643916.jpeg?auto=compress&cs=tinysrgb&w=600",
        "/images/about/story-1.jpg",
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=75",
        "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=600&q=75",
      ],
      faqs: [
        { q: "What are the room options and their prices?", a: "We offer Inside Rooms, Balcony Rooms, and Club Balcony Suites. Prices vary based on room type and group size. Contact our agents for personalized pricing." },
        { q: "Is there medical assistance available onboard?", a: "Yes, every cruise has a fully equipped medical center staffed with qualified doctors and nurses available 24/7 for any emergencies." },
        { q: "What are the check-in and boarding procedures?", a: "Check-in typically opens 3-4 hours before departure. You'll need a valid passport, booking confirmation, and online check-in completed in advance." },
        { q: "Are there any additional costs I should be aware of?", a: "Our packages are all-inclusive covering meals, entertainment and activities. Optional extras like premium beverages, spa treatments and shore excursions may carry additional charges." },
        { q: "Can I bring children on the cruise?", a: "Absolutely! Our cruises are family-friendly with dedicated kids' clubs, age-appropriate activities and entertainment for guests of all ages." },
      ],
    },
  },
];

export const cruiseTrust = [
  { icon: "Ship", title: "All-Inclusive Packages", desc: "Meals, drinks & activities" },
  { icon: "CircleDollarSign", title: "No Hidden Charges", desc: "Transparent pricing" },
  { icon: "Camera", title: "Flexible Booking", desc: "Easy changes & refunds" },
  { icon: "Users", title: "Trusted by Thousands", desc: "Happy cruisers worldwide" },
];

export const onboardActivities = [
  { icon: "Footprints", title: "Mindful Walks", desc: "Relax with scenic ocean walks" },
  { icon: "Music2", title: "Antakshari", desc: "Sing your heart out with loved ones" },
  { icon: "Dices", title: "Tombola", desc: "Fun games & exciting prizes" },
  { icon: "Drama", title: "Dance Showcase", desc: "Witness incredible performances" },
  { icon: "PartyPopper", title: "Bollywood Party", desc: "Dance the night away" },
  { icon: "Mic", title: "Open Mic & Karaoke", desc: "Show off your talent on stage" },
  { icon: "Gamepad2", title: "Games Night", desc: "Enjoy classic games with friends" },
];

export const pastCruises = [
  { date: "JAN 2025", title: "Alaska Cruise", image: "https://images.pexels.com/photos/5022610/pexels-photo-5022610.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { date: "MAR 2025", title: "Medit Cruise", image: "https://images.unsplash.com/photo-1511316695145-4992006ffddb?auto=format&fit=crop&w=800&q=75" },
  { date: "APR 2025", title: "Mexican Cruise", image: "https://images.pexels.com/photos/33270055/pexels-photo-33270055.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { date: "MAY 2025", title: "Alaska Cruise", image: "https://images.unsplash.com/photo-1554254464-7046778097bf?auto=format&fit=crop&w=800&q=75" },
  { date: "DEC 2025", title: "Bahamas Cruise", image: "https://images.pexels.com/photos/29146142/pexels-photo-29146142.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { date: "MAY 2024", title: "Alaska Cruise", image: "https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?auto=format&fit=crop&w=800&q=75" },
  { date: "NOV 2024", title: "Dubai Cruise", image: "https://images.unsplash.com/photo-1583157048761-ac1dba033233?auto=format&fit=crop&w=800&q=75" },
];

export const testimonials = [
  {
    name: "Rajesh & Priya",
    thumb: "https://img.youtube.com/vi/fBtenbhqcrQ/hqdefault.jpg",
    quote: "REAL, FUN Feedback for HMT 2.0 Bollywood Masala Cruise",
    rating: 5,
    video: "https://www.youtube.com/embed/fBtenbhqcrQ",
    link: "https://www.youtube.com/shorts/fBtenbhqcrQ?feature=share"
  },
  {
    name: "Anita Sharma",
    thumb: "https://img.youtube.com/vi/RRW6GZKJ8lg/hqdefault.jpg",
    quote: "Unbelievable experience, the Indian food and entertainment were 10/10!",
    rating: 5,
    video: "https://www.youtube.com/embed/RRW6GZKJ8lg",
    link: "https://www.youtube.com/shorts/RRW6GZKJ8lg?feature=share"
  },
  {
    name: "Vikram & Family",
    thumb: "https://img.youtube.com/vi/0wxp2QyJLZs/hqdefault.jpg",
    quote: "The Bollywood night deck party and garba were absolute highlights!",
    rating: 5,
    video: "https://www.youtube.com/embed/0wxp2QyJLZs",
    link: "https://www.youtube.com/shorts/0wxp2QyJLZs?feature=share"
  },
  {
    name: "Sanjay & Neha",
    thumb: "https://img.youtube.com/vi/74xpoSbSWj8/hqdefault.jpg",
    quote: "Best family vacation ever! Non-stop music, luxury rooms, and great vibes.",
    rating: 5,
    video: "https://www.youtube.com/embed/74xpoSbSWj8",
    link: "https://www.youtube.com/shorts/74xpoSbSWj8?feature=share"
  },
  {
    name: "Pooja & Amit",
    thumb: "https://img.youtube.com/vi/ti995Kz3rtg/hqdefault.jpg",
    quote: "From morning chai to midnight DJ sets, Masala Cruise exceeded everything!",
    rating: 5,
    video: "https://www.youtube.com/embed/ti995Kz3rtg",
    link: "https://www.youtube.com/shorts/ti995Kz3rtg?feature=share"
  },
  {
    name: "Rohan & Sneha",
    thumb: "https://img.youtube.com/vi/OUJd9KOAXiA/hqdefault.jpg",
    quote: "Celebrated our anniversary onboard. The hospitality was truly royal!",
    rating: 5,
    video: "https://www.youtube.com/embed/OUJd9KOAXiA",
    link: "https://www.youtube.com/shorts/OUJd9KOAXiA?feature=share"
  },
  {
    name: "Kavita & Group",
    thumb: "https://img.youtube.com/vi/ybEE9zg_g9I/hqdefault.jpg",
    quote: "Our group of 14 had the time of our lives. We are booking again next year!",
    rating: 5,
    video: "https://www.youtube.com/embed/ybEE9zg_g9I",
    link: "https://www.youtube.com/shorts/ybEE9zg_g9I?feature=share"
  },
  {
    name: "Manish & Divya",
    thumb: "https://img.youtube.com/vi/jjxm-Igkslo/hqdefault.jpg",
    quote: "Pure Bollywood magic in the middle of the ocean! Highly recommend.",
    rating: 5,
    video: "https://www.youtube.com/embed/jjxm-Igkslo",
    link: "https://www.youtube.com/shorts/jjxm-Igkslo?feature=share"
  },
  {
    name: "Arjun & Ritu",
    thumb: "https://img.youtube.com/vi/i6-uF6o2h9Q/hqdefault.jpg",
    quote: "The food options, vegetarian delicacies, and live performances were unmatched!",
    rating: 5,
    video: "https://www.youtube.com/embed/i6-uF6o2h9Q",
    link: "https://www.youtube.com/shorts/i6-uF6o2h9Q?feature=share"
  },
  {
    name: "Deepak & Swati",
    thumb: "https://img.youtube.com/vi/Ux1uG0wPhak/hqdefault.jpg",
    quote: "Never experienced a themed cruise with this level of detail and excitement.",
    rating: 5,
    video: "https://www.youtube.com/embed/Ux1uG0wPhak",
    link: "https://www.youtube.com/shorts/Ux1uG0wPhak?feature=share"
  },
  {
    name: "Aakash & Megha",
    thumb: "https://img.youtube.com/vi/NnSOdThRIVQ/hqdefault.jpg",
    quote: "So much fun for both kids and grandparents. Truly memorable voyage!",
    rating: 5,
    video: "https://www.youtube.com/embed/NnSOdThRIVQ",
    link: "https://www.youtube.com/shorts/NnSOdThRIVQ?feature=share"
  },
  {
    name: "Gaurav & Simran",
    thumb: "https://img.youtube.com/vi/cy0A09JE1j0/hqdefault.jpg",
    quote: "The open mic, karaoke and dance battles made every evening electric!",
    rating: 5,
    video: "https://www.youtube.com/embed/cy0A09JE1j0",
    link: "https://www.youtube.com/shorts/cy0A09JE1j0?feature=share"
  },
  {
    name: "Sunil & Rekha",
    thumb: "https://img.youtube.com/vi/-yL5eq1B2MU/hqdefault.jpg",
    quote: "Stress-free booking, fabulous ports, and outstanding entertainment onboard.",
    rating: 5,
    video: "https://www.youtube.com/embed/-yL5eq1B2MU",
    link: "https://www.youtube.com/shorts/-yL5eq1B2MU?feature=share"
  },
  {
    name: "Varun & Anjali",
    thumb: "https://img.youtube.com/vi/SpcEiuFDnYo/hqdefault.jpg",
    quote: "Such a vibrant atmosphere! Bollywood songs 24/7 and luxurious cruise cabins.",
    rating: 5,
    video: "https://www.youtube.com/embed/SpcEiuFDnYo",
    link: "https://www.youtube.com/shorts/SpcEiuFDnYo?feature=share"
  },
  {
    name: "Naveen & Tanvi",
    thumb: "https://img.youtube.com/vi/hL6v2Dt8OEQ/hqdefault.jpg",
    quote: "Loved every single moment. The staff took care of every small detail!",
    rating: 5,
    video: "https://www.youtube.com/embed/hL6v2Dt8OEQ",
    link: "https://www.youtube.com/shorts/hL6v2Dt8OEQ?feature=share"
  },
  {
    name: "Karan & Isha",
    thumb: "https://img.youtube.com/vi/TebzXQV3VyQ/hqdefault.jpg",
    quote: "The themed dress nights and pool deck garba were unforgettable!",
    rating: 5,
    video: "https://www.youtube.com/embed/TebzXQV3VyQ",
    link: "https://www.youtube.com/shorts/TebzXQV3VyQ?feature=share"
  },
  {
    name: "Vivek & Preeti",
    thumb: "https://img.youtube.com/vi/Q8xrXkMgHg4/hqdefault.jpg",
    quote: "Everything was perfectly curated. Can't wait for the next Masala voyage!",
    rating: 5,
    video: "https://www.youtube.com/embed/Q8xrXkMgHg4",
    link: "https://www.youtube.com/shorts/Q8xrXkMgHg4?feature=share"
  },
  {
    name: "Harish & Geeta",
    thumb: "https://img.youtube.com/vi/tX_gHKlDqKg/hqdefault.jpg",
    quote: "World-class cruise ship with authentic Desi hospitality. 5 stars all the way!",
    rating: 5,
    video: "https://www.youtube.com/embed/tX_gHKlDqKg",
    link: "https://www.youtube.com/shorts/tX_gHKlDqKg?feature=share"
  },
];

export const benefits = [
  { icon: "CircleDollarSign", title: "$100 USD", subtitle: "Onboard Credit" },
  { icon: "Tag", title: "$50 OFF", subtitle: "Next Voyage" },
  { icon: "Wifi", title: "Free WiFi", subtitle: "Onboard" },
  { icon: "BadgeCheck", title: "Priority", subtitle: "Boarding" },
  { icon: "ShieldCheck", title: "Exclusive", subtitle: "Shore Deals" },
];

export const faqs = [
  { q: "Is there medical assistance available onboard?", a: "Yes, every cruise has a fully equipped medical center staffed with qualified doctors and nurses available 24/7 for any emergencies or health concerns." },
  { q: "What are the check-in and boarding procedures?", a: "Check-in typically opens 3-4 hours before departure. You'll need a valid passport, your booking confirmation, and to complete online check-in in advance for a smooth boarding experience." },
  { q: "Are there any additional costs I should be aware of?", a: "Our packages are all-inclusive covering meals, entertainment and activities. Optional extras like premium beverages, spa treatments and shore excursions may carry additional charges." },
  { q: "Can I bring children on the cruise?", a: "Absolutely! Our cruises are family-friendly with dedicated kids' clubs, age-appropriate activities and entertainment for guests of all ages." },
];

export const dining = {
  title: "Delicious Dining Options",
  desc: "Enjoy a range of world-class meals including Indian, Continental, and international delicacies with our multi-cuisine restaurants.",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kfGVufDB8fHx8MTc4Nzc0ODMwN3ww&ixlib=rb-4.1.0&q=85",
};

export const heroImage = "https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjcnVpc2UlMjBzaGlwfGVufDB8fHx8MTc4Nzc0ODIwMXww&ixlib=rb-4.1.0&q=85";
export const heroVideo = "/videos/hero-passengers.mp4";
export const heroVideoFallback = "https://assets.mixkit.co/videos/22597/22597-720.mp4";

export const heroVideoScenes = [
  {
    id: "passengers",
    label: "Onboard Deck & Cruising",
    tag: "Deck Life",
    video: "/videos/hero-passengers.mp4",
    fallback: "https://assets.mixkit.co/videos/22597/22597-720.mp4",
  },
  {
    id: "sailing",
    label: "Cruise Ship Sailing",
    tag: "Open Ocean",
    video: "/videos/hero-cruise.mp4",
    fallback: "https://assets.mixkit.co/videos/40910/40910-720.mp4",
  },
  {
    id: "pool",
    label: "Pool & Sun Activities",
    tag: "Pool Deck",
    video: "/videos/hero-pool.mp4",
    fallback: "https://assets.mixkit.co/videos/40105/40105-720.mp4",
  },
  {
    id: "party",
    label: "Live DJ & Nightlife",
    tag: "Entertainment",
    video: "/videos/hero-party.mp4",
    fallback: "https://assets.mixkit.co/videos/831/831-720.mp4",
  },
];

export const contact = {
  phone: "+1 (561) 230-3800",
  email: "booking@masalacruise.com",
  copyright: "\u00A9 2025 Masala Cruise.",
  rights: "All Rights Reserved.",
};


export const aboutStats = [
  { value: "15+", label: "Years of Experience" },
  { value: "50K+", label: "Happy Cruisers" },
  { value: "120+", label: "Destinations" },
  { value: "4.9", label: "Average Rating" },
];

export const aboutStory = {
  eyebrow: "OUR STORY",
  title: "The Journey of Bollywood Masala Cruise",
  body: "The Bollywood Masala Cruise was born from a passion for Bollywood culture and a love for the high seas. Our founders envisioned a unique cruise experience that blends the vibrant energy of Bollywood with the luxury and adventure of a top-tier cruise. Since our first voyage, we've been dedicated to providing an all-inclusive, immersive experience filled with joy, excitement, and cultural richness. From themed parties to exclusive activities, we bring the magic of Bollywood to life at sea.",
  body2: "Over the years, we have expanded our voyages across the most scenic waters of the Caribbean, the Bahamas, Alaska, and the Mediterranean. Every journey is curated to feel like a floating festival — bringing together families, friends, and Bollywood music lovers from across the globe for a once-in-a-lifetime vacation.",
  images: [
    {
      src: "/images/about/story-1.jpg",
      alt: "Guests celebrating in traditional Indian attire onboard Bollywood Masala Cruise",
      caption: "Gala Celebrations & Festive Nights Onboard",
    },
    {
      src: "/images/about/story-2.jpg",
      alt: "Award ceremony and contest winners at Bollywood Masala Cruise stage",
      caption: "Live Contests & Award Ceremonies",
    },
  ],
  highlights: [
    { title: "All-Inclusive Luxury", desc: "Premium oceanview staterooms, world-class amenities & 24/7 hospitality." },
    { title: "Non-Stop Entertainment", desc: "Live Bollywood artists, celebrity DJs, garba/bhangra nights & dance workshops." },
    { title: "Authentic Multi-Cuisine Dining", desc: "Authentic Indian vegetarian, non-veg, Jain & international gourmet menus." },
    { title: "Family & Multi-Gen Friendly", desc: "Curated programs for kids, teens, adults, and seniors with complete safety." },
  ],
};

export const aboutCoreValues = {
  eyebrow: "CORE VALUES",
  title: "What's Important to Us",
  subtitle: "Guided by our passion for hospitality, cultural joy, and sustainable ocean journeys.",
  values: [
    {
      icon: "UserCheck",
      title: "Exceptional Guest Experience",
      shortDesc: "We prioritize delivering unforgettable moments and top-notch service",
      fullDesc: "From the moment you inquire until you step off the gangway, our dedicated team ensures every stateroom, dining request, and private celebration is handled with perfection and warmth.",
      tag: "5-Star Hospitality",
    },
    {
      icon: "Sparkles",
      title: "Cultural Celebration",
      shortDesc: "We embrace, celebrate and reflect the rich heritage of Bollywood culture",
      fullDesc: "We bring the vibrancy of Indian traditions, cinematic music, festive attire, and energetic dance to the high seas, creating a welcoming home for guests across generations.",
      tag: "Rich Heritage",
    },
    {
      icon: "Leaf",
      title: "Sustainability & Responsibility",
      shortDesc: "We promote eco-friendly practices for sustainable and responsible travel",
      fullDesc: "We partner exclusively with modern cruise liners prioritizing energy efficiency, eco-safe waste management, single-use plastic reduction, and respect for local port communities.",
      tag: "Eco-Conscious Travel",
    },
    {
      icon: "ShieldCheck",
      title: "Integrity & Transparency",
      shortDesc: "All-inclusive upfront pricing with zero hidden charges or surprise fees",
      fullDesc: "We believe in honest, straightforward travel planning. What we quote includes all your core stateroom, dining, and onboard entertainment experiences.",
      tag: "100% Peace of Mind",
    },
  ],
};

export const aboutAgents = {
  eyebrow: "AGENTS",
  title: "We're Available to Give You the Experience of a Lifetime",
  subtitle: "Have questions about itinerary dates, stateroom categories, group discounts, or custom celebration arrangements? Our friendly travel specialists are just a call away.",
  agents: [
    {
      name: "Geeta Singla",
      role: "AGENCY OWNER / TRAVEL EXPERT",
      phone: "587-982-4004",
      email: "gsingla@exotikexcursions.com",
      image: "/images/agents/geeta-singla.jpg",
      bio: "With over 15+ years of specialized luxury travel experience, Geeta leads our cruise division with a focus on custom group vacations, wedding/anniversary celebrations at sea, and VIP cabin itineraries.",
      specialties: ["Group Bookings", "Luxury Suites", "Custom Itineraries", "Family Reunions"],
      experience: "15+ Years Experience",
    },
    {
      name: "Kamal Dhessi",
      role: "TRAVEL EXPERT",
      phone: "780-803-5270",
      email: "kdhessi@exotikexcursions.com",
      image: "/images/agents/kamal-dhessi.jpg",
      bio: "Kamal is passionate about making every guest's journey seamless. She assists travelers with stateroom selection, dietary coordination, flight connections, and exclusive shore excursions.",
      specialties: ["First-Time Cruisers", "Shore Excursions", "Dietary Needs", "Event Coordination"],
      experience: "10+ Years Experience",
    },
  ],
};

export const aboutGalleryMoments = {
  eyebrow: "GALLERY",
  title: "Get a Glimpse of Our Cruise",
  subtitle: "Relive the infectious excitement, vibrant performances, and unforgettable memories created aboard Bollywood Masala Cruise.",
  photos: [
    {
      src: "/images/gallery/gallery-dance.jpg",
      title: "Bollywood Stage Extravaganza",
      category: "Stage Shows",
      desc: "Live choreographed Bollywood dance performances with guest participation.",
    },
    {
      src: "/images/gallery/gallery-night-deck.jpg",
      title: "Starlight Neon Deck Party",
      category: "Nightlife",
      desc: "Open-air top deck dancing under the stars with celebrity DJs.",
    },
    {
      src: "https://images.unsplash.com/photo-1628336707631-68131ca720c3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBwYXJ0eXxlbnwwfHx8fDE3ODc3NDgyMzN8MA&ixlib=rb-4.1.0&q=85",
      title: "Family & Friends Deck Fun",
      category: "Celebration",
      desc: "Multi-generational families dancing and celebrating together.",
    },
    {
      src: "https://images.pexels.com/photos/24643916/pexels-photo-24643916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Royal Gourmet Dining",
      category: "Dining",
      desc: "Multi-course authentic Indian culinary feasts curated by master chefs.",
    },
    {
      src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxjb25jZXJ0JTIwbGlnaHRzfGVufDB8fHx8MTc4Nzc0ODIzM3ww&ixlib=rb-4.1.0&q=85",
      title: "Live Concert & Singer Nights",
      category: "Music",
      desc: "Soulful acoustic melodies and high-tempo chartbuster anthems.",
    },
    {
      src: "https://images.unsplash.com/photo-1579592672790-39239b6cbc31?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwyfHxjcnVpc2UlMjBwb29sJTIwc3Vuc2V0fGVufDB8fHx8MTc4Nzc0ODIzM3ww&ixlib=rb-4.1.0&q=85",
      title: "Sunset Ocean Deck Walk",
      category: "Deck Life",
      desc: "Breathtaking ocean sunsets and relaxing sea breeze moments.",
    },
    {
      src: "/images/about/story-1.jpg",
      title: "Festive Attire Showcase",
      category: "Cultural",
      desc: "Glamorous ethnic attire, Bollywood masquerade and gala evenings.",
    },
    {
      src: "/images/about/story-2.jpg",
      title: "Awards & Fun Games",
      category: "Activities",
      desc: "Interactive games, trivia contests and gift vouchers for winners.",
    },
  ],
};

export const aboutMilestones = [
  { year: "2010", title: "The Maiden Voyage", desc: "Set sail with our very first Bollywood-themed sailing from Miami with 350 enthusiastic guests." },
  { year: "2015", title: "Exotic Ports Added", desc: "Expanded itineraries to include the Bahamas, Key West, and Cozumel with full private deck bookings." },
  { year: "2020", title: "Gourmet Culinary Elevation", desc: "Partnered with master Indian chefs for full dedicated multi-cuisine dining options." },
  { year: "2025+", title: "50,000+ Happy Cruisers", desc: "Proudly recognized as the premier Indian cultural cruise experience worldwide." },
];

export const allPackages = [
  { tag: "DEC 2025", title: "Caribbean Cruise", subtitle: "7 Nights | 5 Exotic Destinations", price: "$899", image: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBjcnVpc2UlMjBzaGlwfGVufDB8fHx8MTc4Nzc0ODIwMXww&ixlib=rb-4.1.0&q=85", features: ["Luxury Stay", "All Meals Included", "Live Shows & DJ Nights", "Shore Excursions"] },
  { tag: "MAR 2025", title: "Hot Cruise (Bahamas)", subtitle: "5 Nights | 3 Exotic Destinations", price: "$799", image: "https://images.unsplash.com/photo-1583157048761-ac1dba033233?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwzfHxjcnVpc2UlMjBzaGlwJTIwb2NlYW58ZW58MHx8fHwxNzg3NzQ4MjA3fDA&ixlib=rb-4.1.0&q=85", features: ["Luxury Stay", "All Meals Included", "Live Shows & DJ Nights", "Shore Excursions"] },
  { tag: "JAN 2025", title: "Alaska Cruise", subtitle: "8 Nights | 6 Glacier Ports", price: "$1099", image: "https://images.pexels.com/photos/5022610/pexels-photo-5022610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", features: ["Glacier Views", "All Meals Included", "Live Shows & DJ Nights", "Shore Excursions"] },
  { tag: "APR 2025", title: "Mediterranean Cruise", subtitle: "10 Nights | 7 Coastal Cities", price: "$1299", image: "https://images.unsplash.com/photo-1511316695145-4992006ffddb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwyfHxjcnVpc2UlMjBzaGlwfGVufDB8fHx8MTc4Nzc0ODI2Mnww&ixlib=rb-4.1.0&q=85", features: ["Luxury Stay", "All Meals Included", "Live Shows & DJ Nights", "Shore Excursions"] },
  { tag: "MAY 2025", title: "Mexican Riviera", subtitle: "6 Nights | 4 Beach Destinations", price: "$849", image: "https://images.pexels.com/photos/33270055/pexels-photo-33270055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", features: ["Luxury Stay", "All Meals Included", "Live Shows & DJ Nights", "Shore Excursions"] },
  { tag: "NOV 2025", title: "Dubai Cruise", subtitle: "5 Nights | 3 Gulf Destinations", price: "$999", image: "https://images.unsplash.com/photo-1554254464-7046778097bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHw0fHxjcnVpc2UlMjBzaGlwfGVufDB8fHx8MTc4Nzc0ODI2Mnww&ixlib=rb-4.1.0&q=85", features: ["Luxury Stay", "All Meals Included", "Live Shows & DJ Nights", "Shore Excursions"] },
];

export const aboutIntro = aboutStory;
export const aboutValues = aboutCoreValues.values;
