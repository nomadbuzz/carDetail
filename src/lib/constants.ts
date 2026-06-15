export const BUSINESS = {
  name: "Elite Shine Auto Detailing",
  tagline: "Premium Car Detailing That Makes Your Vehicle Look Brand New",
  description:
    "Interior, exterior, ceramic coating, paint correction, and mobile detailing services.",
  phone: "(571) 842-2410",
  phoneHref: "tel:+15718422410",
  email: "bazuunaa1@gmail.com",
  address: "2847 Wilson Blvd, Arlington, VA 22201",
  city: "Arlington",
  state: "VA",
  zip: "22201",
  url: "https://eliteshineauto.com",
  yearsExperience: 12,
  rating: 4.9,
  reviewCount: 287,
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 5:00 PM" },
    { day: "Sunday", time: "10:00 AM – 4:00 PM" },
  ],
  serviceAreas: [
    "Arlington",
    "Alexandria",
    "Falls Church",
    "McLean",
    "Bethesda",
    "Washington DC",
    "Fairfax",
    "Reston",
  ],
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    id: "basic-wash-wax",
    name: "Basic Wash & Wax",
    price: 79,
    priceLabel: "Starting at $79",
    icon: "Sparkles",
    description:
      "Hand wash, wheel cleaning, tire dressing, and premium carnauba wax for a brilliant showroom shine.",
    features: ["Exterior hand wash", "Wheel & tire cleaning", "Premium wax application"],
  },
  {
    id: "interior-deep-cleaning",
    name: "Interior Deep Cleaning",
    price: 149,
    priceLabel: "Starting at $149",
    icon: "Armchair",
    description:
      "Complete interior restoration including vacuuming, steam cleaning, leather conditioning, and odor elimination.",
    features: ["Deep vacuum & steam clean", "Leather conditioning", "Odor elimination"],
  },
  {
    id: "full-detail-package",
    name: "Full Detail Package",
    price: 249,
    priceLabel: "Starting at $249",
    icon: "Car",
    description:
      "Our most popular package combining full interior and exterior detailing for a complete transformation.",
    features: ["Full interior detail", "Exterior wash & wax", "Engine bay cleaning"],
    popular: true,
  },
  {
    id: "paint-correction",
    name: "Paint Correction",
    price: 399,
    priceLabel: "Starting at $399",
    icon: "Paintbrush",
    description:
      "Multi-stage machine polishing to remove swirls, scratches, and oxidation for mirror-like paint clarity.",
    features: ["Swirl & scratch removal", "Multi-stage polish", "Paint depth enhancement"],
  },
  {
    id: "ceramic-coating",
    name: "Ceramic Coating",
    price: 799,
    priceLabel: "Starting at $799",
    icon: "Shield",
    description:
      "Professional-grade ceramic coating providing years of protection with hydrophobic, self-cleaning properties.",
    features: ["5-year protection", "Hydrophobic finish", "UV & chemical resistance"],
  },
  {
    id: "mobile-detailing",
    name: "Mobile Detailing",
    price: 199,
    priceLabel: "Starting at $199",
    icon: "Truck",
    description:
      "Premium detailing at your home or office. We bring everything needed for a professional result on-site.",
    features: ["We come to you", "Fully equipped van", "Flexible scheduling"],
  },
] as const;

export const REVIEWS = [
  {
    id: 1,
    name: "Michael Rodriguez",
    rating: 5,
    text: "Absolutely incredible work on my BMW M4. The paint correction removed years of swirl marks and the ceramic coating is still beading water perfectly after 8 months. Worth every penny.",
    service: "Ceramic Coating",
    date: "March 2026",
  },
  {
    id: 2,
    name: "Sarah Chen",
    rating: 5,
    text: "Elite Shine transformed my SUV after three kids and a dog. The interior looks brand new — I honestly didn't think it was possible. Professional, punctual, and reasonably priced.",
    service: "Full Detail Package",
    date: "February 2026",
  },
  {
    id: 3,
    name: "James Whitfield",
    rating: 5,
    text: "Used their mobile detailing service at my office. They showed up on time, worked efficiently, and my Tesla looked like it just rolled off the lot. Already booked my next appointment.",
    service: "Mobile Detailing",
    date: "January 2026",
  },
  {
    id: 4,
    name: "Amanda Foster",
    rating: 5,
    text: "The attention to detail is unmatched. They spent extra time on my classic Mustang and the results speak for themselves. These guys truly care about their craft.",
    service: "Paint Correction",
    date: "December 2025",
  },
  {
    id: 5,
    name: "David Park",
    rating: 5,
    text: "Best detailing service in Arlington, hands down. Fair pricing, transparent communication, and results that exceed expectations. I've referred three friends already.",
    service: "Full Detail Package",
    date: "November 2025",
  },
  {
    id: 6,
    name: "Lisa Thompson",
    rating: 5,
    text: "From booking to completion, the experience was seamless. My Mercedes interior smells fresh, leather is conditioned perfectly, and the exterior gleams. Five stars all around.",
    service: "Interior Deep Cleaning",
    date: "October 2025",
  },
] as const;

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "BMW M4 Paint Correction",
    before: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    after: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    category: "Paint Correction",
  },
  {
    id: 2,
    title: "Mercedes S-Class Full Detail",
    before: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    after: "https://images.unsplash.com/photo-1614162692292-7a56aaa37afb?w=800&q=80",
    category: "Full Detail",
  },
  {
    id: 3,
    title: "Porsche 911 Ceramic Coating",
    before: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    after: "https://images.unsplash.com/photo-1583121274602-3e2820c58988?w=800&q=80",
    category: "Ceramic Coating",
  },
  {
    id: 4,
    title: "Range Rover Interior Restoration",
    before: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    after: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    category: "Interior",
  },
  {
    id: 5,
    title: "Audi RS6 Exterior Detail",
    before: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80",
    after: "https://images.unsplash.com/photo-1614200179396-2bdb4eb0f7b3?w=800&q=80",
    category: "Exterior",
  },
  {
    id: 6,
    title: "Tesla Model S Mobile Detail",
    before: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    after: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80",
    category: "Mobile",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "How long does a full detail take?",
    answer:
      "A full detail typically takes 4–6 hours depending on vehicle size and condition. Paint correction and ceramic coating may require 1–2 days for optimal results.",
  },
  {
    question: "Do you offer mobile detailing?",
    answer:
      "Yes! Our fully equipped mobile detailing van brings professional-grade equipment directly to your home or office throughout the Arlington metro area.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, Apple Pay, Google Pay, and cash. Payment is due upon completion of service.",
  },
  {
    question: "How often should I get my car detailed?",
    answer:
      "We recommend a full detail every 3–4 months and a maintenance wash monthly. Vehicles with ceramic coating need less frequent detailing.",
  },
  {
    question: "Is ceramic coating worth the investment?",
    answer:
      "Absolutely. Ceramic coating provides 3–5 years of protection against UV rays, chemicals, and contaminants while making maintenance washes significantly easier.",
  },
  {
    question: "Do you detail all vehicle types?",
    answer:
      "Yes, we detail sedans, SUVs, trucks, luxury vehicles, classics, and exotics. Contact us for specialty vehicles or fleet pricing.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Book Your Appointment",
    description:
      "Schedule online or call us. Choose your service, preferred date, and location — we'll confirm within 2 hours.",
    icon: "Calendar",
  },
  {
    step: 2,
    title: "Expert Detailing",
    description:
      "Our certified technicians perform a meticulous multi-stage detail using premium products and proven techniques.",
    icon: "Wrench",
  },
  {
    step: 3,
    title: "Drive Away Impressed",
    description:
      "Inspect your transformed vehicle, receive care tips, and enjoy that new-car feeling every time you drive.",
    icon: "Star",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Certified Professionals",
    description: "IDA-certified technicians with 12+ years of combined experience in luxury auto care.",
    icon: "Award",
  },
  {
    title: "Premium Products Only",
    description: "We use industry-leading brands like Gtechniq, Chemical Guys, and Meguiar's — never shortcuts.",
    icon: "Gem",
  },
  {
    title: "Satisfaction Guaranteed",
    description: "Not thrilled with the results? We'll re-detail at no charge. Your satisfaction is our reputation.",
    icon: "ThumbsUp",
  },
  {
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured for your complete peace of mind on every job.",
    icon: "ShieldCheck",
  },
] as const;
