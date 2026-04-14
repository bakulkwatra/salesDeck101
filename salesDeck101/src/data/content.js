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
    subheadline: 'Over 1,300 stores. From global flagships to regional exclusives — Dubai Mall is where brands make statements.',
    categories: [
      { name: 'Fashion & Apparel', count: 350, icon: '◈' },
      { name: 'Luxury & Designer', count: 120, icon: '◈' },
      { name: 'Electronics & Tech', count: 80, icon: '◈' },
      { name: 'Sports & Lifestyle', count: 95, icon: '◈' },
      { name: 'Home & Interiors', count: 60, icon: '◈' },
      { name: 'Beauty & Wellness', count: 150, icon: '◈' },
    ],
    featuredBrands: ['Louis Vuitton', 'Chanel', 'Hermès', 'Rolex', 'Apple', 'Galeries Lafayette', 'Bloomingdale\'s', 'Zara', 'H&M', 'Nike', 'Adidas', 'Gucci'],
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
    subheadline: 'Dubai Mall\'s entertainment ecosystem generates footfall no standalone retailer could. Your brand lives alongside world-class experiences.',
    attractions: [
      { name: 'Dubai Aquarium', description: 'The world\'s largest indoor aquarium — 10 million liters, 33,000 aquatic animals', stat: '10M liters' },
      { name: 'Dubai Ice Rink', description: 'Olympic-standard ice rink in the heart of the mall, hosting shows and competitions', stat: 'Olympic size' },
      { name: 'VR Park', description: '15,000 sq ft virtual reality park with 30+ immersive experiences', stat: '30+ VR rides' },
      { name: 'KidZania', description: 'City-within-a-city learning experience for children — sold out daily', stat: '75K+ monthly' },
      { name: 'Reel Cinemas', description: '22 screens including IMAX and premium screening suites', stat: '22 screens' },
      { name: 'Dubai Fountain Show', description: 'World\'s largest choreographed fountain — visible from Fashion Avenue', stat: '900ft span' },
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
}

export const navItems = [
  { id: 'hero', label: 'Overview' },
  { id: 'why', label: 'Why Here' },
  { id: 'retail', label: 'Retail' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'dining', label: 'Dining' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'events', label: 'Events' },
]