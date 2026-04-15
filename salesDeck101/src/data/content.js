export const mallData = {
  name: 'The Dubai Mall',
  tagline: 'The World Does Not Shop Here. It Lives Here.',
  subTagline: 'The most visited destination on the planet — 105 million visitors annually.',
  location: 'Downtown Dubai, UAE',
  established: 2008,
  totalArea: '5.9M sq ft',
  gla: '3.77M sq ft',

  stats: [
    { value: 105, suffix: 'M', label: 'Annual Visitors', description: 'More than New York City' },
    { value: 1300, suffix: '+', label: 'Retail Outlets', description: 'Across every category' },
    { value: 200, suffix: '+', label: 'F&B Destinations', description: 'From street food to Michelin' },
    { value: 160, suffix: '+', label: 'Nations Represented', description: 'Truly global audience' },
    { value: 5.9, suffix: 'M', label: 'Sq Ft Total Area', description: 'Larger than 93 football fields' },
    { value: 30, suffix: '+', label: 'Luxury Flagships', description: 'World exclusive boutiques' },
  ],

  retail: {
    headline: "Where the World's Greatest Brands Come First",
    subheadline: "Over 1,300 stores. From global flagships to regional exclusives — Dubai Mall is where brands make statements.",
    categories: [
      { name: "Fashion & Apparel", count: 350 },
      { name: "Luxury & Designer", count: 120 },
      { name: "Electronics & Tech", count: 80 },
      { name: "Sports & Lifestyle", count: 95 },
      { name: "Home & Interiors", count: 60 },
      { name: "Beauty & Wellness", count: 150 },
    ],
    featuredBrands: ["Louis Vuitton", "Chanel", "Hermès", "Rolex", "Apple", "Galeries Lafayette", "Bloomingdale's", "Zara", "H&M", "Nike", "Adidas", "Gucci"],
  },

  luxury: {
    headline: 'A District Within a Destination',
    subheadline: 'The Fashion Avenue — a dedicated luxury boulevard spanning 400,000 sq ft — is the gold standard in global retail.',
    features: [
      { title: 'Fashion Avenue', description: 'A dedicated luxury promenade with 70+ haute couture boutiques and marble corridors reminiscent of the Champs-Élysées.' },
      { title: 'Designer Exclusives', description: 'Global and regional debut launches. From Louis Vuitton to Cartier, brands choose Dubai Mall for world-firsts.' },
      { title: 'Concierge & VIP', description: 'Private shopping suites, personal shopping services, and exclusive access programs for ultra-HNW guests.' },
      { title: 'Premium Footfall', description: 'Average visitor spend 3× higher than comparable retail destinations globally.' },
    ],
  },

  dining: {
    headline: 'The World on a Plate',
    subheadline: '200+ culinary concepts. Fine dining terraces overlooking the Burj Khalifa. From artisanal coffee to Michelin-caliber experiences.',
    zones: [
      { name: 'The Fountain Views', description: 'Outdoor dining terraces facing Burj Khalifa and the Dubai Fountain', capacity: '3,000 covers' },
      { name: 'Grand Atrium Food Hall', description: 'Curated street food and fast-casual concepts from 40+ global cuisines', capacity: '5,000 sq ft' },
      { name: 'Fine Dining Boulevard', description: 'Signature restaurants from internationally acclaimed chefs', capacity: '8 venues' },
      { name: 'Café Culture', description: 'Specialty coffee roasters, patisseries, and all-day social dining', capacity: '25+ outlets' },
    ],
  },

  entertainment: {
    headline: 'This Is Not a Mall. It Is a World.',
    subheadline: "Dubai Mall's entertainment ecosystem generates footfall no standalone retailer could. Your brand lives alongside world-class experiences.",
    attractions: [
      { name: 'Dubai Aquarium', description: "The world's largest indoor aquarium — 10 million liters, 33,000 aquatic animals", stat: '10M liters' },
      { name: 'Dubai Ice Rink', description: 'Olympic-standard ice rink in the heart of the mall, hosting shows and competitions', stat: 'Olympic size' },
      { name: 'VR Park', description: '15,000 sq ft virtual reality park with 30+ immersive experiences', stat: '30+ VR rides' },
      { name: 'KidZania', description: 'City-within-a-city learning experience for children — sold out daily', stat: '75K+ monthly' },
      { name: 'Reel Cinemas', description: '22 screens including IMAX and premium screening suites', stat: '22 screens' },
      { name: 'Dubai Fountain Show', description: "World's largest choreographed fountain — visible from Fashion Avenue", stat: '900ft span' },
    ],
  },

  events: {
    headline: 'A Global Platform for Global Brands',
    subheadline: 'Dubai Mall is not just a backdrop for events — it is the event. With 5+ dedicated activation zones and audience reach no venue can match.',
    venues: [
      { name: 'Grand Atrium', sqft: '22,000', capacity: '5,000', type: 'Brand Activations & Launches' },
      { name: 'Fashion Avenue Promenade', sqft: '18,000', capacity: '3,500', type: 'Luxury & Fashion Events' },
      { name: 'Fountain Views Terrace', sqft: '12,000', capacity: '2,000', type: 'Outdoor Experiences' },
      { name: 'Galeries Lafayette Atrium', sqft: '8,000', capacity: '1,200', type: 'Exclusive Brand Showcases' },
    ],
    pastEvents: [
      'FIFA World Cup activations — 2M+ engagements',
      'Louis Vuitton SS25 MENA exclusive launch',
      'Apple Vision Pro regional debut',
      'Formula E fan zone — 800K visitors over 3 days',
      'COP28 sustainability showcase — global broadcast',
    ],
    cta: {
      headline: 'Book Your Activation',
      subheadline: 'Talk to our commercial partnerships team to reserve your space, dates, and tailored package.',
    },
  },

  // ── PHASE 2: SPONSORSHIP MODULE ──
  sponsorship: {
    headline: 'Partner With the Most Visited Place on Earth',
    subheadline: "Sponsorship at Dubai Mall is not an ad placement. It's a cultural statement. Your brand, embedded in the world's most trafficked destination.",

    audience: [
      { label: 'Annual Visitors', value: '105M', sub: 'Surpasses every theme park globally' },
      { label: 'Avg Household Income', value: 'Top 15%', sub: 'UAE & GCC visitor demographics' },
      { label: 'International Visitors', value: '68%', sub: 'From 160+ nations' },
      { label: 'Age 18–45', value: '61%', sub: 'Prime consumer spending bracket' },
      { label: 'Social Media Reach', value: '2.4B+', sub: 'Annual impressions across platforms' },
      { label: 'Dwell Time', value: '3.2 hrs', sub: 'Average per visit — 2× industry norm' },
    ],

    tiers: [
      {
        name: 'Title Partner',
        tag: 'EXCLUSIVE · 1 AVAILABLE',
        price: 'From AED 12M / year',
        highlight: true,
        description: 'The highest-visibility partnership at The Dubai Mall. Reserved for one brand per year.',
        benefits: [
          'Naming rights on one major venue or zone',
          'Hero placement on all Digital Out-of-Home screens (400+ screens)',
          'Grand Atrium anchor activation — up to 22,000 sq ft',
          'Dedicated campaign integration across all Mall media channels',
          'VIP access to all property events & celebrity appearances',
          'Co-branded content production with Dubai Mall Studios',
          'Global PR inclusion in all property announcements',
        ],
      },
      {
        name: 'Platinum Partner',
        tag: 'UP TO 3 AVAILABLE',
        price: 'From AED 4M / year',
        highlight: false,
        description: 'Premium visibility across key touchpoints with major activation rights.',
        benefits: [
          'Branded zone within Fashion Avenue or Grand Atrium',
          'DOOH screen network — prime rotation (150+ screens)',
          'Two major annual activation slots (up to 10,000 sq ft)',
          'Social media integration with @TheDubaiMall (5M+ followers)',
          'Sponsored content in Dubai Mall digital magazine',
          'Preferred partner status for all retail & F&B activations',
        ],
      },
      {
        name: 'Activation Partner',
        tag: 'OPEN AVAILABILITY',
        price: 'From AED 500K',
        highlight: false,
        description: 'Targeted, high-impact activations in specific zones or around key calendar events.',
        benefits: [
          'Activation space in designated partner zones',
          'Event-based sponsorship (DSF, Eid, Back to School, etc.)',
          'Digital screen package — campaign-specific',
          'Social amplification from Dubai Mall channels',
          'Category exclusivity within activation period',
        ],
      },
    ],

    activationExamples: [
      {
        brand: 'FIFA World Cup 2022',
        type: 'Title Activation',
        result: '2M+ direct engagements, 48-day campaign',
        image: '/images/sponsorship-activation.jpg',
      },
      {
        brand: 'Apple Vision Pro',
        type: 'Product Launch',
        result: 'MENA regional debut, 3-day sellout experience',
        image: '/images/sponsorship-aerial.jpeg',
      },
      {
        brand: 'Formula E',
        type: 'Fan Zone Partner',
        result: '800K visitors over 3 days, global broadcast reach',
        image: '/images/sponsorship-activation.jpg',
      },
    ],

    cta: {
      headline: "Let's Build Your Partnership",
      subheadline: "Our commercial team will create a bespoke package aligned to your brand's objectives, timeline, and budget.",
      email: 'partnerships@thedubaimall.com',
      phone: '+971 4 448 0000',
    },
  },
}

export const navItems = [
  { id: 'hero', label: 'Overview' },
  { id: 'why', label: 'Why Here' },
  { id: 'retail', label: 'Retail' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'dining', label: 'Dining' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'events', label: 'Events' },
  { id: 'sponsorship', label: 'Partner' },
]