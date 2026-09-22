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
  { icon: "Ticket", title: "Signature", subtitle: "Packages" },
  { icon: "Sparkles", title: "Dedicated", subtitle: "Guest Support" },
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
  { src: "/images/gallery/66998880763d6d69a601c07e.webp", alt: "Bollywood DJ Night" },
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
    subtitle: "7 Nights | 5 Destinations",
    features: ["Luxury Stay", "All Meals Included", "Live Shows & DJ Nights", "Bollywood Parties"],
    price: "$1100",
    image: "/images/cruises/caribbean-cruise.jpg",
    details: {
      dates: "DEC 23, 2026 – DEC 30, 2026",
      ship: "Norwegian Escape",
      banner: "/images/cruises/caribbean-cruise.jpg",
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
        { name: "Inside Room", desc: "Cozy and comfortable, the inside room offers all essential amenities for a relaxing stay.", price: "USD 1100", image: "/images/rooms/inside-room.png" },
        { name: "Balcony Room", desc: "Enjoy stunning ocean views and fresh sea breezes from your private balcony.", price: "USD 1350", image: "/images/rooms/balcony-room.png" },
        { name: "Club Balcony Suite", desc: "Priority boarding and departure, dedicated entertainment seating, and more.", price: "USD 1475", image: "/images/rooms/club-balcony-suite.png" },
      ],
      activities: [
        { icon: "Sparkles", name: "Mehndi", desc: "Enjoy the culture" },
        { icon: "Music2", name: "Antakshari", desc: "Sing along to your favorite Bollywood hits" },
        { icon: "Drama", name: "Dance Showcase & Workshops", desc: "Watch & learn Bollywood dance" },
        { icon: "PartyPopper", name: "Bollywood Dance Party", desc: "Dance the moment away" },
        { icon: "Mic", name: "Open Mic & Karaoke", desc: "Show off your singing talent on stage" },
        { icon: "Trophy", name: "Games & Fun", desc: "Watch & participate in interactive games" },
      ],
      diningImage: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=75",
      diningDesc: "Enjoy a range of meals onboard, including Indian vegetarian and non-vegetarian dishes, as well as international favorites.",
      testimonials: [
        { name: "Priya S.", rating: 5, avatar: "/images/gallery/679a8d0562e328e0efdcb262.jpeg", text: "The best vacation ever! The food was amazing, the activities were non-stop fun, and the Bollywood events were a blast. Every day brought something new and exciting. The staff was incredibly friendly, and the accommodations were top-notch. Can't wait to book my next cruise!" },
        { name: "Rahul M.", rating: 5, avatar: "/images/gallery/679a8d0580145c27ccf9f0ba.jpeg", text: "We had an unforgettable time! From the fantastic entertainment to the beautiful destinations, everything exceeded our expectations. The themed events, like Mehndi and the Bollywood dance party, made it even more special. Highly recommend this cruise to everyone looking for a unique and fun-filled getaway!" },
        { name: "Ananya K.", rating: 5, avatar: "/images/gallery/66998414b998f5f12bd19c6e.jpeg", text: "Perfect mix of relaxation and excitement. The exclusive events were a highlight, especially the Bollywood dance party and karaoke nights. We loved the variety of activities and the wonderful service. Exceptional value for money. We'll definitely be back for another cruise!" },
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
        { q: "What are the room options and their prices?", a: "We offer Inside Rooms, Balcony Rooms, and Club Balcony Suites. Prices vary based on room type and the number of guests in one room. Contact our agents for personalized pricing." },
        { q: "Are special dietary requirements or vegan meals available?", a: "Yes, our onboard dining includes dedicated vegetarian, vegan, and special dietary meal options curated with authentic Indian flavors." },
        { q: "What are the check-in and boarding procedures?", a: "Check-in typically opens 3-4 hours before departure. You'll need a valid passport, booking confirmation, and online check-in completed in advance." },
        { q: "Are there any additional costs I should be aware of?", a: "Our packages cover accommodations, delicious daily buffet meals, Bollywood parties, and onboard entertainment. Gratuities, drink packages, specialty dining, spa treatments, ship service charges, and shore excursions are extra and carry additional charges." },
        { q: "Can I bring children on the cruise?", a: "Yes! Our cruises are family-friendly with dedicated kids' programs and activities. Please note that children must be at least 6 months of age at the time of sailing." },
      ],
    },
  },
  {
    tag: "MAR 2027",
    title: "Holi Cruise",
    subtitle: "8 Nights | 3 Destinations",
    features: ["Luxury Stay", "All Meals Included", "Live Shows & DJ Nights", "Holi Celebration at Sea"],
    price: "$1345",
    image: "https://images.unsplash.com/photo-1583157048761-ac1dba033233?auto=format&fit=crop&w=800&q=75",
    details: {
      dates: "MAR 13, 2027 – MAR 21, 2027",
      ship: "Norwegian Bliss",
      banner: "/images/cruises/holi-cruise-banner.png",
      tagline: "An unforgettable 8-night voyage of fun, excitement, and Bollywood magic aboard the Norwegian Bliss — celebrating Holi at sea!",
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
        { name: "Inside Room", desc: "Cozy and comfortable, the inside room offers all essential amenities for a relaxing stay.", price: "USD 1345", image: "/images/rooms/inside-room.png" },
        { name: "Balcony Room", desc: "Enjoy stunning ocean views and fresh sea breezes from your private balcony", price: "USD 1595", image: "/images/rooms/balcony-room.png" },
        { name: "Club Balcony Suite", desc: "Priority boarding and departure, dedicated entertainment seating, and more", price: "USD 1720", image: "/images/rooms/club-balcony-suite.png" },
      ],
      activities: [
        { icon: "Sparkles", name: "Mehndi", desc: "Enjoy the culture" },
        { icon: "Palette", name: "Holi Celebration", desc: "Celebrate the festival of colours at sea" },
        { icon: "Music2", name: "Antakshari", desc: "Sing along to your favorite Bollywood songs" },
        { icon: "Drama", name: "Dance Showcase & Workshops", desc: "Watch & learn Bollywood dance" },
        { icon: "PartyPopper", name: "Bollywood Dance Party", desc: "Dance the moment away" },
        { icon: "Mic", name: "Open Mic & Karaoke", desc: "Show off your singing talent on stage" },
        { icon: "Trophy", name: "Games & Fun", desc: "Watch & participate in interactive games" },
      ],
      diningImage: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=75",
      diningDesc: "Enjoy a range of meals onboard, including Indian vegetarian and non-vegetarian dishes, as well as international favorites.",
      testimonials: [
        { name: "Sunita R.", rating: 5, avatar: "/images/gallery/679a8d0535f5ca5b8c111611.jpeg", text: "The Holi Cruise was absolutely magical! The food was phenomenal, especially the Indian buffet nights. We made lifelong friends on this trip. The entertainment team was incredible!" },
        { name: "Deepak M.", rating: 5, avatar: "/images/gallery/679a8d054f0aeb1852623064.jpeg", text: "What a trip! The Holi celebration at sea was unlike anything we've ever experienced. Perfectly organized, no stress, just pure fun. Already booked for next year!" },
        { name: "Meera K.", rating: 5, avatar: "/images/gallery/66998877f3f1c49f6af40c40.webp", text: "Took my parents for their anniversary and they absolutely loved every moment. The staff was so attentive and warm. 5 stars without a doubt!" },
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
        { q: "What are the room options and their prices?", a: "We offer Inside Rooms, Balcony Rooms, and Club Balcony Suites. Prices vary based on room type and the number of guests in one room. Contact our agents for personalized pricing." },
        { q: "Are special dietary requirements or vegan meals available?", a: "Yes, our onboard dining includes dedicated vegetarian, vegan, and special dietary meal options curated with authentic Indian flavors." },
        { q: "What are the check-in and boarding procedures?", a: "Check-in typically opens 3-4 hours before departure. You'll need a valid passport, booking confirmation, and online check-in completed in advance." },
        { q: "Are there any additional costs I should be aware of?", a: "Our packages cover accommodations, delicious daily buffet meals, Bollywood parties, and onboard entertainment. Gratuities, drink packages, specialty dining, spa treatments, ship service charges, and shore excursions are extra and carry additional charges." },
        { q: "Can I bring children on the cruise?", a: "Yes! Our cruises are family-friendly with dedicated kids' programs and activities. Please note that children must be at least 6 months of age at the time of sailing." },
      ],
    },
  },
];

export const cruiseTrust = [
  { icon: "Ship", title: "Curated Packages", desc: "Meals, parties & entertainment" },
  { icon: "CircleDollarSign", title: "No Hidden Charges", desc: "Transparent pricing" },
  { icon: "Camera", title: "Hassle-Free Booking", desc: "Dedicated agent support" },
  { icon: "Users", title: "Trusted by Thousands", desc: "Happy cruisers worldwide" },
];

export const onboardActivities = [
  { icon: "Footprints", title: "Mindful Walks", desc: "Relax with scenic ocean walks" },
  { icon: "Music2", title: "Antakshari", desc: "Sing your heart out with loved ones" },
  { icon: "Drama", title: "Dance Showcase & Workshops", desc: "Watch & learn Bollywood dance" },
  { icon: "PartyPopper", title: "Bollywood Party", desc: "Dance the moment away" },
  { icon: "Mic", title: "Open Mic & Karaoke", desc: "Show off your talent on stage" },
  { icon: "Trophy", title: "Games & Fun", desc: "Watch & participate in interactive games" },
];

export const pastCruises = [
  { date: "MAY 2024", title: "Alaska Cruise", image: "https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?auto=format&fit=crop&w=800&q=75" },
  { date: "DEC 2024", title: "Caribbean Cruise", image: "https://images.pexels.com/photos/29146142/pexels-photo-29146142.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { date: "MAY 2025", title: "Alaska Cruise", image: "https://images.unsplash.com/photo-1554254464-7046778097bf?auto=format&fit=crop&w=800&q=75" },
  { date: "DEC 2025", title: "Mexican Cruise", image: "https://images.pexels.com/photos/33270055/pexels-photo-33270055.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { date: "MAR 2026", title: "Holi Cruise (Caribbean)", image: "https://images.unsplash.com/photo-1511316695145-4992006ffddb?auto=format&fit=crop&w=800&q=75" },
  { date: "JUL 2026", title: "Alaska Cruise", image: "https://images.pexels.com/photos/5022610/pexels-photo-5022610.jpeg?auto=compress&cs=tinysrgb&w=800" },
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
    id: "yt-1",
    name: "Anita Sharma",
    thumb: "https://img.youtube.com/vi/RRW6GZKJ8lg/hqdefault.jpg",
    quote: "Unbelievable experience, the Indian food and entertainment were 10/10!",
    rating: 5,
    video: "https://www.youtube.com/embed/RRW6GZKJ8lg",
    link: "https://www.youtube.com/shorts/RRW6GZKJ8lg?feature=share"
  },
  {
    id: "yt-2",
    name: "Vikram & Family",
    thumb: "https://img.youtube.com/vi/0wxp2QyJLZs/hqdefault.jpg",
    quote: "The Bollywood night deck party and music were absolute highlights!",
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
    quote: "From morning breakfast to midnight DJ sets, Masala Cruise exceeded everything!",
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
    quote: "The open mic, karaoke and dance battles made the entertainment electric!",
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
    quote: "The themed dress nights and pool deck celebrations were unforgettable!",
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
  { icon: "Wifi", title: "WiFi Access", subtitle: "150 mins" },
  { icon: "Compass", title: "$50 Per Port", subtitle: "Shore Excursion" },
  { icon: "Camera", title: "10 Photo Package", subtitle: "Worth 199 USD" },
];

export const accreditations = [
  { name: "CLIA Master Cruise Counsellor", logo: "/images/accreditations/clia.png" },
  { name: "ACTA Association of Canadian Travel Agencies", logo: "/images/accreditations/acta.png" },
  { name: "IATA Accredited Travel Agent", logo: "/images/accreditations/iata.png" },
  { name: "BBB Accredited Business", logo: "/images/accreditations/bbb.png" },
];

export const faqs = [
  // Onboard Experience
  {
    category: "Onboard Experience",
    featured: true,
    q: "What is Bollywood Masala Cruise (BMC)?",
    a: "Bollywood Masala Cruise is a premier private Indian Bollywood-themed group entertainment experience (bringing together 300–500 guests) hosted aboard world-class luxury cruise liners.",
  },
  {
    category: "Onboard Experience",
    featured: true,
    q: "What entertainment and activities are provided by BMC?",
    a: "Guests enjoy exclusive Bollywood-themed dance parties, celebrity DJ nights, Mehndi ceremonies, Antakshari competitions, interactive family games, Bingo, Open Mic talent showcases, and cultural dance workshops.",
  },
  {
    category: "Onboard Experience",
    featured: true,
    q: "What is included in the cruise package price?",
    a: "Your package includes stateroom accommodations, daily meals (including authentic Indian buffets & international cuisine), shipboard theatre shows, pool deck access, fitness facilities, and exclusive VIP access to all private Bollywood Masala Cruise events and entertainment.",
  },
  {
    category: "Onboard Experience",
    featured: false,
    q: "Do you charter the entire cruise ship?",
    a: "No, this is a standard luxury cruise sailing. Our Bollywood Masala Cruise group is a private group of 300–500 guests enjoying exclusive private venues and activities aboard the ship amongst other international cruise travellers.",
  },
  {
    category: "Onboard Experience",
    featured: false,
    q: "Will there be other general public on the ship?",
    a: "Yes, there will be general cruise passengers on the ship, but our private Bollywood Masala Cruise venues, parties, dance floors, and themed events are strictly restricted to BMC badge holders.",
  },
  {
    category: "Onboard Experience",
    featured: true,
    q: "Why should we book with your agency rather than directly with the cruise line or online portals?",
    a: "Only bookings made directly through our agency (Exotik Excursions) provide official access passes to private Bollywood Masala Cruise events, Bollywood DJ nights, Indian dining coordination, and exclusive group onboard bonuses.",
  },
  {
    category: "Onboard Experience",
    featured: false,
    q: "If we book through a 3rd party or cruise line directly, can we still attend BMC events?",
    a: "No. All bookings must be completed through our agency in order to be registered as part of the Bollywood Masala Cruise group and receive credentials for private BMC events.",
  },

  // Food & Dining
  {
    category: "Food & Dining",
    featured: true,
    q: "Do you offer Indian Vegetarian, Non-Vegetarian & Halal food?",
    a: "Yes! Delicious authentic Indian food is served alongside diverse international multi-cuisine options throughout the sailing, including dedicated Vegetarian, Non-Vegetarian, Vegan, and Halal options.",
  },
  {
    category: "Food & Dining",
    featured: false,
    q: "Are specialty dining venues included in the cruise fare?",
    a: "Complimentary multi-cuisine buffet and main dining rooms are fully included. Specialty dining venues (such as steakhouses, teppanyaki, and Italian dining) are available à la carte for an additional charge.",
  },
  {
    category: "Food & Dining",
    featured: false,
    q: "Can we purchase beverage or liquor packages (soft or hard drinks)?",
    a: "Yes! You can purchase unlimited drink packages covering alcoholic or non-alcoholic beverages, or simply buy individual beverages à la carte onboard.",
  },
  {
    category: "Food & Dining",
    featured: false,
    q: "Do we need to buy drinking water on the ship?",
    a: "No. Filtered drinking water and iced water stations are freely accessible at multi-cuisine buffet areas and dining spaces. Bottled water packages can also be purchased if preferred.",
  },

  // Booking & Payments
  {
    category: "Booking & Payments",
    featured: true,
    q: "How do I make a booking?",
    a: "Simply share your full legal name, contact number, and email address with our team. We will send you a secure profile registration link to select your preferred stateroom and finalize your reservation.",
  },
  {
    category: "Booking & Payments",
    featured: true,
    q: "How much is the deposit and is it refundable?",
    a: "The deposit is $350 per person. If you cancel prior to the final payment deadline, the deposit amount is preserved as a future travel credit with our agency.",
  },
  {
    category: "Booking & Payments",
    featured: false,
    q: "What are the cancellation policies?",
    a: "Prior to the final payment date, your deposit is available as a future travel credit. After final payment is made, standard cruise line cancellation policies apply.",
  },
  {
    category: "Booking & Payments",
    featured: false,
    q: "When is the last day I can book by?",
    a: "Stateroom categories and group allocations sell out quickly. We recommend booking as soon as possible for the best rates and ideal room selection.",
  },
  {
    category: "Booking & Payments",
    featured: true,
    q: "How do I make sure your agency is genuine and licensed?",
    a: "Exotik Excursions is a fully registered and licensed travel agency in British Columbia, Canada with over 10 years of trusted industry service (and 3 years of BMC), accredited by IATA, CLIA, and the BBB.",
  },
  {
    category: "Booking & Payments",
    featured: false,
    q: "Are group rates or discounts available if I bring family and friends?",
    a: "Yes! We specialize in custom multi-room family reunions, anniversaries, and group getaways with dedicated agent support and group coordination.",
  },

  // Rooms & Suites
  {
    category: "Rooms & Suites",
    featured: false,
    q: "How is the stateroom location assigned?",
    a: "Your specific stateroom category (Inside, Oceanview, Balcony, or Suite) and exact deck location are selected and confirmed at the time of booking.",
  },
  {
    category: "Rooms & Suites",
    featured: false,
    q: "How big is the ship and how many guests can it hold?",
    a: "We sail aboard modern mega-liners (such as Norwegian Bliss) with a capacity of approximately 4,000–5,000 passengers, featuring multiple pools, waterslides, Broadway theatre, and casinos.",
  },
  {
    category: "Rooms & Suites",
    featured: false,
    q: "What general activities does the cruise ship offer?",
    a: "Beyond BMC events, the ship offers Broadway-style stage shows, comedy clubs, trivia contests, kids' clubs, swimming pools, waterslides, and a full-service spa.",
  },
  {
    category: "Rooms & Suites",
    featured: false,
    q: "Is WiFi available on the ship?",
    a: "Yes, limited WiFi minutes are included on select promotional sailings, and unlimited high-speed satellite WiFi packages can be purchased onboard.",
  },

  // Kids & Family
  {
    category: "Kids & Family",
    featured: true,
    q: "Are kids free or do they get a discounted rate?",
    a: "Children and additional guests booked as the 3rd and 4th passengers in the same stateroom qualify for substantially discounted cruise fares.",
  },
  {
    category: "Kids & Family",
    featured: true,
    q: "Is there a minimum age limit for cruising?",
    a: "Yes, infants must be at least 6 months of age at the time of sailing.",
  },

  // Health & Safety / Logistics
  {
    category: "Health & Safety",
    featured: false,
    q: "Do you provide wheelchair or accessibility assistance?",
    a: "Yes! The ship is fully accessible with elevator access across all public decks and accessible staterooms. Guests are welcome to bring personal wheelchairs or mobility devices.",
  },
  {
    category: "Health & Safety",
    featured: false,
    q: "Do you sell travel insurance and how much does it cost?",
    a: "Yes, we provide comprehensive travel and medical insurance. Cost is determined based on total trip price, traveler age, and medical history.",
  },
  {
    category: "Booking & Payments",
    featured: true,
    q: "Does the cruise fare include port fees, taxes, and gratuities?",
    a: "Government taxes and port fees are included in your cruise package. Standard shipboard gratuities ($20 USD per person per day) are additional and billed to your onboard account.",
  },
  {
    category: "Booking & Payments",
    featured: false,
    q: "Where does the ship depart from and what are the ports?",
    a: "Departures are from major convenient homeports (such as Orlando/Port Canaveral or New York depending on the sailing date), with port stops including Nassau, Great Stirrup Cay, and the Caribbean.",
  },
  {
    category: "Booking & Payments",
    featured: false,
    q: "Can you also book air tickets and pre/post-cruise hotel stays for us?",
    a: "Yes! We are a full-service travel agency and can arrange your complete journey including flights, pre-cruise/post-cruise hotel stays, and ground transfers.",
  },
  {
    category: "Booking & Payments",
    featured: false,
    q: "Can I arrive in the port city on the same morning the cruise departs?",
    a: "We strongly advise arriving at least one day before embarkation to avoid any flight delay or luggage issues that could cause you to miss ship departure.",
  },
  {
    category: "Booking & Payments",
    featured: false,
    q: "Do you sell shore excursions?",
    a: "Yes, our travel experts assist in recommending and booking top-rated shore excursions at each destination port.",
  },
];

export const dining = {
  title: "Delicious Dining Options",
  desc: "Enjoy a range of world-class meals including Indian, Continental, and international delicacies with our multi cuisine buffet.",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kfGVufDB8fHx8MTc4Nzc0ODMwN3ww&ixlib=rb-4.1.0&q=85",
};

export const heroImage = "/images/hero-cruise-ship.jpg";
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
  phone: "587-982-4004",
  email: "bookings@exotikexcursions.com",
  copyright: "© 2023 Bollywood Masala Cruise.",
  rights: "All Rights Reserved.",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61560687726948",
    instagram: "https://www.instagram.com/bollywoodmasalacruise/",
    youtube: "https://www.youtube.com/@Bollywoodmasalacruise/shorts",
  },
};


export const aboutStats = [
  { value: "10+", label: "Years of Experience" },
  { value: "5,000+", label: "Happy Cruisers" },
  { value: "15+", label: "Destinations Visited" },
  { value: "4.9", label: "Average Rating" },
];

export const aboutStory = {
  eyebrow: "OUR STORY",
  title: "The Journey of Bollywood Masala Cruise",
  body: "Bollywood Masala Cruise was born from a passion for Indian culture and a love for the high seas. Our founders envisioned a signature cruise experience that blends the vibrant energy of Bollywood with the luxury and comfort of premier ocean travel. Since our first Bollywood Masala Cruise, we have been dedicated to providing a vibrant, immersive experience filled with joy, excitement, and cultural celebration. From themed deck parties to interactive workshops, we bring the magic of Bollywood to life at sea.",
  body2: "Over the years, we have expanded our sailings across the most scenic waters of the Caribbean, the Bahamas, Alaska, and beyond. Every journey is curated to feel like a floating festival — bringing together families, friends, and music lovers from across the globe for a once-in-a-lifetime vacation celebration.",
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
    { title: "Signature Luxury", desc: "Comfortable staterooms, authentic dining & warm personalized hospitality." },
    { title: "Non-Stop Entertainment", desc: "Live Bollywood artists, celebrity DJs, dance workshops & party nights." },
    { title: "Authentic Multi-Cuisine Dining", desc: "Authentic Indian vegetarian, non-vegetarian & international gourmet menus." },
    { title: "Family & Multi-Gen Friendly", desc: "Curated programs for kids, teens, adults, and seniors with complete comfort." },
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
      fullDesc: "We partner exclusively with modern cruise lines prioritizing energy efficiency, eco-safe waste management, single-use plastic reduction, and respect for local port communities.",
      tag: "Eco-Conscious Travel",
    },
    {
      icon: "ShieldCheck",
      title: "Integrity & Transparency",
      shortDesc: "Transparent upfront pricing with zero hidden charges or surprise fees",
      fullDesc: "We believe in honest, straightforward travel planning. What we quote includes your core stateroom accommodations, dining, and onboard entertainment experiences.",
      tag: "100% Peace of Mind",
    },
  ],
};

export const aboutAgents = {
  eyebrow: "",
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
  {
    year: "2016",
    title: "Agency Started (Exotik Excursions)",
    desc: "Exotik Excursions was established with a clear mission to create world-class cultural travel and curated cruise journeys.",
  },
  {
    year: "2024",
    title: "Maiden Voyage to Alaska",
    desc: "Set sail from Vancouver in May on an unforgettable inaugural cruise exploring the majestic wilderness and glaciers of Alaska.",
  },
  {
    year: "2026",
    title: "5,000+ Happy Cruisers",
    desc: "Celebrated milestone of over 5,000 delighted guests creating timeless memories and lasting connections on Bollywood Masala Cruise.",
  },
];

export const allPackages = [
  { tag: "DEC 2025", title: "Caribbean Cruise", subtitle: "7 Nights | 5 Destinations", price: "$1100", image: "/images/cruises/caribbean-cruise.jpg", features: ["Luxury Stay", "All Meals Included", "Live Shows & DJ Nights", "Bollywood Parties"] },
  { tag: "MAR 2025", title: "Holi Cruise (Bahamas)", subtitle: "8 Nights | 3 Destinations", price: "$1345", image: "https://images.unsplash.com/photo-1583157048761-ac1dba033233?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwzfHxjcnVpc2UlMjBzaGlwJTIwb2NlYW58ZW58MHx8fHwxNzg3NzQ4MjA3fDA&ixlib=rb-4.1.0&q=85", features: ["Luxury Stay", "All Meals Included", "Live Shows & DJ Nights", "Holi Celebrations"] },
  { tag: "JAN 2025", title: "Alaska Cruise", subtitle: "8 Nights | 6 Glacier Ports", price: "$1099", image: "https://images.pexels.com/photos/5022610/pexels-photo-5022610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", features: ["Glacier Views", "All Meals Included", "Live Shows & DJ Nights", "Bollywood Parties"] },
  { tag: "APR 2025", title: "Mediterranean Cruise", subtitle: "10 Nights | 7 Coastal Cities", price: "$1299", image: "https://images.unsplash.com/photo-1511316695145-4992006ffddb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwyfHxjcnVpc2UlMjBzaGlwfGVufDB8fHx8MTc4Nzc0ODI2Mnww&ixlib=rb-4.1.0&q=85", features: ["Luxury Stay", "All Meals Included", "Live Shows & DJ Nights", "Bollywood Parties"] },
  { tag: "MAY 2025", title: "Mexican Riviera", subtitle: "6 Nights | 4 Beach Destinations", price: "$849", image: "https://images.pexels.com/photos/33270055/pexels-photo-33270055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", features: ["Luxury Stay", "All Meals Included", "Live Shows & DJ Nights", "Bollywood Parties"] },
  { tag: "NOV 2025", title: "Dubai Cruise", subtitle: "5 Nights | 3 Gulf Destinations", price: "$999", image: "https://images.unsplash.com/photo-1554254464-7046778097bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHw0fHxjcnVpc2UlMjBzaGlwfGVufDB8fHx8MTc4Nzc0ODI2Mnww&ixlib=rb-4.1.0&q=85", features: ["Luxury Stay", "All Meals Included", "Live Shows & DJ Nights", "Bollywood Parties"] },
];

export const aboutIntro = aboutStory;
export const aboutValues = aboutCoreValues.values;
