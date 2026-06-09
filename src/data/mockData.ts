export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  ageGroup: string;
  brand: string;
  images: string[];
  videoUrl?: string;
  inStock: boolean;
  stockCount: number;
  description: string;
  specifications: Record<string, string>;
  isNew?: boolean;
  isBestSeller?: boolean;
  isTrending?: boolean;
  isOffer?: boolean;
  deliveryDays: number;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  response?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
}

export const CATEGORIES = [
  { id: 'educational-toys', name: 'Educational Toys', slug: 'educational-toys', image: '📚', count: 12, desc: 'Stimulate young minds with logic, science, and learning toys.' },
  { id: 'baby-toys', name: 'Baby Toys', slug: 'baby-toys', image: '👶', count: 8, desc: 'Safe, soft, and colorful sensory toys for newborns and toddlers.' },
  { id: 'remote-control-toys', name: 'Remote Control Toys', slug: 'remote-control-toys', image: '🎮', count: 10, desc: 'High-speed RC cars, helicopters, and drones for action lovers.' },
  { id: 'board-games', name: 'Board Games', slug: 'board-games', image: '🎲', count: 15, desc: 'Fun family games, strategic board games, and puzzles for all ages.' },
  { id: 'hot-wheels', name: 'Hot Wheels', slug: 'hot-wheels', image: '🏎️', count: 25, desc: 'Die-cast cars, track sets, and high-octane racing gear.' },
  { id: 'action-figures', name: 'Action Figures', slug: 'action-figures', image: '🦸', count: 18, desc: 'Collectibles, superhero figures, and roleplay playsets.' },
  { id: 'soft-toys', name: 'Soft Toys', slug: 'soft-toys', image: '🧸', count: 14, desc: 'Plush teddies, Disney characters, and cute huggable buddies.' },
  { id: 'outdoor-toys', name: 'Outdoor Toys', slug: 'outdoor-toys', image: '🛝', count: 9, desc: 'Bicycles, swings, slides, and active sports toys for outdoor play.' },
  { id: 'birthday-gifts', name: 'Birthday Gifts', slug: 'birthday-gifts', image: '🎁', count: 30, desc: 'Special custom gifts, premium wrapping, and party favorites.' },
  { id: 'return-gifts', name: 'Return Gifts', slug: 'return-gifts', image: '🎈', count: 40, desc: 'Affordable bulk toys, packs, and favors for party return gifts.' }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Smart Coding Robot Kit',
    category: 'Educational Toys',
    price: 3499,
    originalPrice: 4299,
    rating: 4.8,
    reviewsCount: 34,
    ageGroup: '8-12 Years',
    brand: 'STEMLab',
    images: [
      'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80'
    ],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    inStock: true,
    stockCount: 15,
    description: 'Empower your kid to code! This smart robot kit teaches basics of Python and Blockly visual programming. Includes obstacle avoidance, line tracking, and app control.',
    specifications: {
      'Material': 'Non-toxic ABS Plastic',
      'Battery': 'Rechargeable Li-Ion (Included)',
      'Connectivity': 'Bluetooth 5.0',
      'Compatibility': 'iOS, Android & Windows'
    },
    isNew: true,
    isBestSeller: true,
    deliveryDays: 1
  },
  {
    id: 'prod-2',
    name: 'Super High-Speed RC Rally Car',
    category: 'Remote Control Toys',
    price: 2499,
    originalPrice: 2999,
    rating: 4.6,
    reviewsCount: 56,
    ageGroup: '6-8 Years',
    brand: 'X-Racer',
    images: [
      'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 8,
    description: 'Experience 1:16 scale off-road rally racing! Reaches speeds of up to 25 km/h with 4WD suspension and 2.4GHz anti-interference remote.',
    specifications: {
      'Scale': '1:16',
      'Max Speed': '25 km/h',
      'Range': '50 meters',
      'Play Time': '30-40 mins'
    },
    isBestSeller: true,
    isTrending: true,
    deliveryDays: 2
  },
  {
    id: 'prod-3',
    name: 'Hot Wheels 10-Car Pack',
    category: 'Hot Wheels',
    price: 999,
    originalPrice: 1200,
    rating: 4.9,
    reviewsCount: 124,
    ageGroup: '3-5 Years',
    brand: 'Hot Wheels',
    images: [
      'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 50,
    description: 'Kickstart your collection with ten highly detailed 1:64 scale die-cast vehicles. Diverse models ranging from classic muscle cars to futuristic racers.',
    specifications: {
      'Scale': '1:64',
      'Package': 'Pack of 10 Cars',
      'Weight': '450g',
      'Recommended Age': '3 Years and above'
    },
    isTrending: true,
    deliveryDays: 1
  },
  {
    id: 'prod-4',
    name: 'Interactive Baby Sensory Gym',
    category: 'Baby Toys',
    price: 1899,
    originalPrice: 2499,
    rating: 4.7,
    reviewsCount: 28,
    ageGroup: '0-12 Months',
    brand: 'FisherCare',
    images: [
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 12,
    description: 'A soft, machine-washable playmat featuring multi-sensory hanging toys, kick piano keys, and colorful LED lights that stimulate baby development.',
    specifications: {
      'Dimensions': '80 x 80 x 50 cm',
      'Materials': 'Ultra-soft Fabric & Eco-plastic',
      'Washable': 'Yes (Mat only)',
      'Audio': '15+ melodies & sounds'
    },
    isNew: true,
    isOffer: true,
    deliveryDays: 2
  },
  {
    id: 'prod-5',
    name: 'Marvel Iron Man Action Figure (30cm)',
    category: 'Action Figures',
    price: 1599,
    originalPrice: 1999,
    rating: 4.8,
    reviewsCount: 92,
    ageGroup: '6-8 Years',
    brand: 'Hasbro',
    images: [
      'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 10,
    description: 'Highly detailed and articulated Marvel Avengers Series Iron Man. Press chest button to activate repulsor light-up action and signature sound effects.',
    specifications: {
      'Height': '30 cm',
      'Articulation': '7 Points of Articulation',
      'Batteries': '2 x AAA (Included)',
      'Officially Licensed': 'Marvel Hasbro'
    },
    isBestSeller: true,
    deliveryDays: 1
  },
  {
    id: 'prod-6',
    name: 'Woodland Animal Giant Jigsaw Puzzle',
    category: 'Educational Toys',
    price: 699,
    originalPrice: 899,
    rating: 4.5,
    reviewsCount: 19,
    ageGroup: '3-5 Years',
    brand: 'FunFactory',
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 25,
    description: 'Large, thick cardboard pieces perfect for small toddler hands. Help your child develop hand-eye coordination, memory, and cognitive skills.',
    specifications: {
      'Piece Count': '48 pieces',
      'Material': 'Thick recycled board',
      'Finished Size': '60 x 40 cm',
      'Theme': 'Forest Animals'
    },
    isNew: false,
    deliveryDays: 2
  },
  {
    id: 'prod-7',
    name: 'Giant Teddy Bear (100cm)',
    category: 'Soft Toys',
    price: 1299,
    originalPrice: 1799,
    rating: 4.7,
    reviewsCount: 74,
    ageGroup: 'All Ages',
    brand: 'HuggyBuddy',
    images: [
      'https://images.unsplash.com/photo-1559251606-c623743a6d76?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 20,
    description: 'Make someone feel loved! Super plush, fluffy, and premium quality giant teddy bear. Made from hypoallergenic fabric with fluffy cotton filling.',
    specifications: {
      'Height': '100 cm',
      'Filling': 'PP Cotton',
      'Fabric': 'Plush Velvet',
      'Colors': 'Golden Brown'
    },
    isBestSeller: true,
    deliveryDays: 1
  },
  {
    id: 'prod-8',
    name: 'Strategy Block Tower Game',
    category: 'Board Games',
    price: 499,
    originalPrice: 599,
    rating: 4.4,
    reviewsCount: 41,
    ageGroup: '6-8 Years',
    brand: 'TumblePlay',
    images: [
      'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 15,
    description: 'Stack them up and pull them out! Classic family block stacking game. 54 high-quality wooden blocks packed with a stacking sleeve.',
    specifications: {
      'Block Count': '54 wooden blocks',
      'Material': 'Premium Hardwood',
      'Player Count': '2 or more players',
      'Packaging': 'Eco-friendly Cardboard Box'
    },
    isTrending: true,
    deliveryDays: 2
  },
  {
    id: 'prod-9',
    name: 'RC Drone with HD Camera',
    category: 'Remote Control Toys',
    price: 4599,
    originalPrice: 5999,
    rating: 4.6,
    reviewsCount: 31,
    ageGroup: '12+ Years',
    brand: 'SkyCruiser',
    images: [
      'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: false,
    stockCount: 0,
    description: 'Beginner-friendly RC quadcopter drone featuring 1080p HD camera, altitude hold, one-key return, headless mode, and live FPV video streaming to your phone.',
    specifications: {
      'Camera Resolution': '1080p HD',
      'Flight Time': '15-18 mins',
      'Charging Time': '60 mins',
      'Control Distance': '100m'
    },
    isOffer: true,
    deliveryDays: 3
  },
  {
    id: 'prod-10',
    name: 'Kids Outdoor Adjustable Basketball Hoop',
    category: 'Outdoor Toys',
    price: 3999,
    originalPrice: 4999,
    rating: 4.5,
    reviewsCount: 15,
    ageGroup: '8-12 Years',
    brand: 'SportyKids',
    images: [
      'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 5,
    description: 'Build your backyard court! High-impact steel structure basketball hoop with base. Height adjusts from 5 to 7 feet to grow with your kids.',
    specifications: {
      'Height Range': '150 - 210 cm',
      'Rim Diameter': '38 cm',
      'Base Volume': 'Holds 25L water/sand',
      'Board Material': 'High density PE'
    },
    isOffer: true,
    deliveryDays: 3
  },
  {
    id: 'prod-11',
    name: 'Premium Return Gift Combo (Set of 10)',
    category: 'Return Gifts',
    price: 999,
    originalPrice: 1500,
    rating: 4.8,
    reviewsCount: 89,
    ageGroup: '3-5 Years',
    brand: 'PartyShopee',
    images: [
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 100,
    description: 'An elegant bulk set of 10 kids gift packs. Each includes a drawing book, a set of 12 oil pastels, a sharpener, an eraser, and a toy badge in a cute bag.',
    specifications: {
      'Pack Contents': '10 individual gift sets',
      'Gift Bag Size': '22 x 15 cm',
      'Themes Available': 'Superheroes, Unicorns',
      'Minimum Bulk Order': '1 set (10 packs)'
    },
    isBestSeller: true,
    deliveryDays: 2
  },
  {
    id: 'prod-12',
    name: 'Custom Birthday Celebration Gift Basket',
    category: 'Birthday Gifts',
    price: 1999,
    originalPrice: 2499,
    rating: 4.9,
    reviewsCount: 43,
    ageGroup: '6-8 Years',
    brand: 'Toy Shopee Special',
    images: [
      'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 15,
    description: 'A pre-wrapped luxury gift basket tailored with a custom selection of our best-selling toys, a personalized greetings card, chocolates, and festive ribbons.',
    specifications: {
      'Includes': '3 Toys, Greetings Card, Choco-pack',
      'Wrapping': 'Cellophane, ribbons, customized tags',
      'Occasion': 'Birthday / Special milestone',
      'Personalization': 'Yes, name and age custom printed'
    },
    isNew: true,
    deliveryDays: 1
  },
  {
    id: 'prod-ed-3',
    name: 'Wooden Geometric Shape Sorter',
    category: 'Educational Toys',
    price: 499,
    originalPrice: 699,
    rating: 4.7,
    reviewsCount: 42,
    ageGroup: '1-3 Years',
    brand: 'LittleSprout',
    images: [
      'https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 30,
    description: 'Help toddlers learn shapes, colors, and hand-eye coordination with this premium quality, non-toxic wooden geometric shape sorting box.',
    specifications: {
      'Material': 'Natural Pine Wood',
      'Paint': 'Water-based non-toxic',
      'Dimensions': '15 x 15 x 15 cm'
    },
    isTrending: true,
    deliveryDays: 2
  },
  {
    id: 'prod-ed-4',
    name: 'DIY Volcano Science Experiment Kit',
    category: 'Educational Toys',
    price: 899,
    originalPrice: 1199,
    rating: 4.6,
    reviewsCount: 27,
    ageGroup: '8-12 Years',
    brand: 'STEMLab',
    images: [
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 18,
    description: 'Build your own volcano and watch it erupt! A safe and thrilling science kit containing ingredients and tools for multiple eruptions, plus a learning guide.',
    specifications: {
      'Includes': 'Volcano mold, plaster, paint brush, erupting powders',
      'Recommended Age': '8 Years and above',
      'Safety': 'Adult supervision recommended'
    },
    isNew: true,
    deliveryDays: 2
  },
  {
    id: 'prod-ed-5',
    name: 'Magnetic Building Tiles (60pcs)',
    category: 'Educational Toys',
    price: 1599,
    originalPrice: 1999,
    rating: 4.8,
    reviewsCount: 63,
    ageGroup: '3-5 Years',
    brand: 'MagnaBuild',
    images: [
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 22,
    description: 'Clear 3D magnetic building blocks that spark creativity. Design and construct towers, houses, castles, and complex geometric shapes.',
    specifications: {
      'Tile Count': '60 pieces',
      'Magnet Type': 'Neodymium',
      'Material': 'Food-grade ABS plastic'
    },
    isOffer: true,
    deliveryDays: 1
  },
  {
    id: 'prod-rc-3',
    name: 'RC Amphibious Waterproof Stunt Car',
    category: 'Remote Control Toys',
    price: 2999,
    originalPrice: 3599,
    rating: 4.7,
    reviewsCount: 38,
    ageGroup: '6-8 Years',
    brand: 'X-Racer',
    images: [
      'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 12,
    description: 'Drives on land, mud, and water! 360-degree rotation and double-sided flipping RC stunt vehicle with remote control.',
    specifications: {
      'Drive Type': '4WD',
      'Charging Time': '2 Hours',
      'Control Distance': '40m',
      'Waterproof': 'IPX8 Rated'
    },
    isTrending: true,
    deliveryDays: 2
  },
  {
    id: 'prod-rc-4',
    name: 'Combat RC Helicopter with Gyro',
    category: 'Remote Control Toys',
    price: 1999,
    originalPrice: 2499,
    rating: 4.4,
    reviewsCount: 29,
    ageGroup: '8-12 Years',
    brand: 'SkyCruiser',
    images: [
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 14,
    description: 'Ultra-stable flight controls powered by built-in gyro sensor. Features collision avoidance and auto hover, ideal for beginner pilots.',
    specifications: {
      'Channels': '3.5 CH',
      'Charging Time': '40 mins',
      'Flying Time': '8-10 mins',
      'Range': '15 meters'
    },
    deliveryDays: 1
  },
  {
    id: 'prod-rc-5',
    name: 'High-Speed RC Racing Boat',
    category: 'Remote Control Toys',
    price: 2299,
    originalPrice: 2799,
    rating: 4.5,
    reviewsCount: 22,
    ageGroup: '12+ Years',
    brand: 'X-Racer',
    images: [
      'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 9,
    description: 'Rip through lakes and pools at 20 km/h! Features a water-cooled motor system, low battery alarm, and self-righting hull design.',
    specifications: {
      'Max Speed': '20 km/h',
      'Frequency': '2.4 GHz',
      'Play Time': '15 mins',
      'Range': '80 meters'
    },
    isNew: true,
    deliveryDays: 3
  },
  {
    id: 'prod-hw-2',
    name: 'Hot Wheels City Robo T-Rex Attack Playset',
    category: 'Hot Wheels',
    price: 2799,
    originalPrice: 3499,
    rating: 4.8,
    reviewsCount: 88,
    ageGroup: '3-5 Years',
    brand: 'Hot Wheels',
    images: [
      'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 15,
    description: 'Knock down the giant mechanical T-Rex before it crushes Hot Wheels City. Includes a launcher and one Hot Wheels vehicle.',
    specifications: {
      'Material': 'Durable Plastic',
      'Batteries Required': 'No',
      'Includes': '1 City Playset, 1 Die-cast Car'
    },
    isBestSeller: true,
    deliveryDays: 2
  },
  {
    id: 'prod-hw-3',
    name: 'Hot Wheels Track Builder Multi-Loop Kit',
    category: 'Hot Wheels',
    price: 1899,
    originalPrice: 2299,
    rating: 4.7,
    reviewsCount: 45,
    ageGroup: '6-8 Years',
    brand: 'Hot Wheels',
    images: [
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 19,
    description: 'Create mega stunts with multiple loops, curves, and launchers. Connects to other Hot Wheels track sets.',
    specifications: {
      'Total Track Length': '10 feet',
      'Connectors': 'Multi-angle track connectors',
      'Includes': 'Loop pieces, launcher, 1 car'
    },
    isNew: true,
    deliveryDays: 1
  },
  {
    id: 'prod-hw-4',
    name: 'Hot Wheels Monster Truck 4-Pack (1:64)',
    category: 'Hot Wheels',
    price: 1299,
    originalPrice: 1599,
    rating: 4.9,
    reviewsCount: 57,
    ageGroup: '3-5 Years',
    brand: 'Hot Wheels',
    images: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 25,
    description: 'Giant wheels and rugged details! This 4-pack of Hot Wheels Monster Trucks is perfect for head-to-head crashing action.',
    specifications: {
      'Scale': '1:64',
      'Material': 'Die-cast metal body',
      'Tires': 'Oversized rubber tires'
    },
    isOffer: true,
    deliveryDays: 2
  },
  {
    id: 'prod-hw-5',
    name: 'Hot Wheels Speed Wind-Up Launcher Set',
    category: 'Hot Wheels',
    price: 799,
    originalPrice: 999,
    rating: 4.6,
    reviewsCount: 31,
    ageGroup: '3-5 Years',
    brand: 'Hot Wheels',
    images: [
      'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 40,
    description: 'Face off in epic drag races with this wind-up dual booster launcher. No batteries required, just crank and launch.',
    specifications: {
      'Boosters': 'Dual wind-up boosters',
      'Compatibility': 'Standard Hot Wheels track',
      'Recommended Age': '4 Years and above'
    },
    deliveryDays: 1
  },
  {
    id: 'prod-baby-2',
    name: 'Soft Organic Cotton Baby Rattle Set (3pcs)',
    category: 'Baby Toys',
    price: 399,
    originalPrice: 599,
    rating: 4.8,
    reviewsCount: 52,
    ageGroup: '0-12 Months',
    brand: 'FisherCare',
    images: [
      'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 35,
    description: 'Made from 100% organic cotton fabric and smooth beechwood. Gentle rattling sound that calms babies and promotes hand grip development.',
    specifications: {
      'Material': 'Organic Cotton & Beechwood',
      'Packs': 'Set of 3 Rattles',
      'Cleaning': 'Hand wash only'
    },
    isNew: true,
    deliveryDays: 1
  },
  {
    id: 'prod-baby-3',
    name: 'Musical Stack-Up Duck Ring Tower',
    category: 'Baby Toys',
    price: 599,
    originalPrice: 799,
    rating: 4.6,
    reviewsCount: 71,
    ageGroup: '0-12 Months',
    brand: 'FisherCare',
    images: [
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 20,
    description: 'Stack colorful rings on the wobbly base to hear cheerful tunes and flashing lights. Helps babies build fine motor skills.',
    specifications: {
      'Batteries': '2 x AA (Not Included)',
      'Material': 'BPA-free plastic',
      'Rings': '5 colorful stacked rings'
    },
    isTrending: true,
    deliveryDays: 2
  },
  {
    id: 'prod-baby-4',
    name: 'Baby Wooden Activity Walker',
    category: 'Baby Toys',
    price: 2199,
    originalPrice: 2999,
    rating: 4.7,
    reviewsCount: 39,
    ageGroup: '1-3 Years',
    brand: 'LittleSprout',
    images: [
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 12,
    description: 'Sturdy wooden walker featuring a xylophone, bead maze, gear wheels, and shape sorters to keep your baby busy while learning to walk.',
    specifications: {
      'Material': 'Premium Birch Wood',
      'Dimensions': '50 x 32 x 30 cm',
      'Finish': 'Non-toxic child-safe varnish'
    },
    isBestSeller: true,
    deliveryDays: 2
  },
  {
    id: 'prod-baby-5',
    name: 'Plush Elephant Sleep Soother',
    category: 'Baby Toys',
    price: 1199,
    originalPrice: 1599,
    rating: 4.9,
    reviewsCount: 46,
    ageGroup: '0-12 Months',
    brand: 'FisherCare',
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 18,
    description: 'Cute plush elephant that projects a starry night sky onto ceilings while playing soft lullabies and gentle white noise to help baby sleep.',
    specifications: {
      'Sound Options': '10 lullabies, white noise, heartbeat',
      'Timer': '30-minute auto shut off',
      'Battery': '3 x AAA'
    },
    deliveryDays: 1
  },
  {
    id: 'prod-bg-2',
    name: 'Junior Detective Board Game',
    category: 'Board Games',
    price: 799,
    originalPrice: 999,
    rating: 4.6,
    reviewsCount: 34,
    ageGroup: '6-8 Years',
    brand: 'TumblePlay',
    images: [
      'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 16,
    description: 'Search for clues, match items, and solve mysteries in the town. Simple rules, highly interactive and ideal for family game nights.',
    specifications: {
      'Players': '2-4 players',
      'Average Playtime': '20-30 mins',
      'Includes': 'Game board, detective magnifying glass, 40 clue cards'
    },
    deliveryDays: 2
  },
  {
    id: 'prod-bg-3',
    name: 'Deluxe Wooden Chess & Checkers Set (2-in-1)',
    category: 'Board Games',
    price: 1499,
    originalPrice: 1999,
    rating: 4.8,
    reviewsCount: 92,
    ageGroup: '8-12 Years',
    brand: 'FunFactory',
    images: [
      'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 20,
    description: 'Beautiful hand-crafted folding wooden chessboard with internal slots for chess pieces. Play Chess and Checkers on the same premium board.',
    specifications: {
      'Board Size': '30 x 30 cm',
      'Material': 'Walnut and Maple wood',
      'Piece Count': '32 Chessmen, 24 Checker pieces'
    },
    isBestSeller: true,
    deliveryDays: 1
  },
  {
    id: 'prod-bg-4',
    name: 'Fast-Paced Card Matching Family Game',
    category: 'Board Games',
    price: 399,
    originalPrice: 499,
    rating: 4.5,
    reviewsCount: 108,
    ageGroup: '6-8 Years',
    brand: 'TumblePlay',
    images: [
      'https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 50,
    description: 'Test your reflexes! Match identical symbols between cards. The fastest player to name the match wins the round. Exciting and hilarious game.',
    specifications: {
      'Card Count': '55 cards',
      'Players': '2-8 players',
      'Package': 'Sturdy Tin Box'
    },
    isTrending: true,
    deliveryDays: 1
  },
  {
    id: 'prod-bg-5',
    name: 'Kids 3D Snake & Ladders Adventure Game',
    category: 'Board Games',
    price: 699,
    originalPrice: 899,
    rating: 4.4,
    reviewsCount: 25,
    ageGroup: '3-5 Years',
    brand: 'FunFactory',
    images: [
      'https://images.unsplash.com/photo-1585504198199-20277593b94f?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 22,
    description: 'Bring the classic game to life with a 3D board featuring plastic slides for snakes and steps for ladders. Watch your balls slide down!',
    specifications: {
      'Players': '2-4 players',
      'Material': 'Non-toxic plastic & cardboard',
      'Includes': '3D game board, 4 ball tokens, 1 die'
    },
    deliveryDays: 2
  },
  {
    id: 'prod-af-2',
    name: 'Spider-Man Web Shooter Action Figure',
    category: 'Action Figures',
    price: 1499,
    originalPrice: 1799,
    rating: 4.7,
    reviewsCount: 81,
    ageGroup: '6-8 Years',
    brand: 'Hasbro',
    images: [
      'https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 12,
    description: 'Launch webs just like Spider-Man! Features a wrist-mounted shooter that launches safe soft-plastic web projectiles.',
    specifications: {
      'Height': '30 cm',
      'Includes': 'Spider-man figure, wrist shooter, 3 web darts',
      'Official License': 'Marvel Hasbro'
    },
    isTrending: true,
    deliveryDays: 1
  },
  {
    id: 'prod-af-3',
    name: 'Batman Dark Knight Deluxe Figure',
    category: 'Action Figures',
    price: 1799,
    originalPrice: 2199,
    rating: 4.8,
    reviewsCount: 64,
    ageGroup: '6-8 Years',
    brand: 'Hasbro',
    images: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 10,
    description: 'Protect Gotham City! Deluxe Batman action figure with expanding wings, light-up Bat-Signal chest emblem, and 15+ sound effects.',
    specifications: {
      'Height': '30 cm',
      'Batteries': '3 x AG13 (Included)',
      'Wingspan': '45 cm'
    },
    isNew: true,
    deliveryDays: 2
  },
  {
    id: 'prod-af-4',
    name: 'Transformers Optimus Prime Converting Toy',
    category: 'Action Figures',
    price: 2499,
    originalPrice: 2999,
    rating: 4.9,
    reviewsCount: 53,
    ageGroup: '8-12 Years',
    brand: 'Hasbro',
    images: [
      'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 8,
    description: 'Convert Optimus Prime from a powerful robot warrior to a heavy-duty semi-truck in 12 simple steps. Ready for battle!',
    specifications: {
      'Height': '28 cm',
      'Transform Steps': '12 steps',
      'Material': 'ABS Plastic & Die-cast joints'
    },
    isBestSeller: true,
    deliveryDays: 1
  },
  {
    id: 'prod-af-5',
    name: 'Naruto Shippuden Anime Hero Figure',
    category: 'Action Figures',
    price: 1199,
    originalPrice: 1499,
    rating: 4.6,
    reviewsCount: 47,
    ageGroup: '12+ Years',
    brand: 'Bandai',
    images: [
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 14,
    description: 'Enter the world of Naruto with this highly poseable Naruto action figure. Comes with interchangeable hands and Rasengan attack effect.',
    specifications: {
      'Height': '15 cm',
      'Points of Articulation': '16+',
      'Includes': 'Naruto figure, Rasengan, 2 pairs of hands'
    },
    deliveryDays: 2
  },
  {
    id: 'prod-st-2',
    name: 'Cute Soft Pink Unicorn Plush',
    category: 'Soft Toys',
    price: 599,
    originalPrice: 799,
    rating: 4.8,
    reviewsCount: 68,
    ageGroup: 'All Ages',
    brand: 'HuggyBuddy',
    images: [
      'https://images.unsplash.com/photo-1559251606-c623743a6d76?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 24,
    description: 'Soft and magical! Features sparkly silver horn, colorful rainbow mane and tail, and ultra-plush fabric perfect for bedtime cuddles.',
    specifications: {
      'Size': '45 cm',
      'Filling': 'Hypoallergenic PP Cotton',
      'Washable': 'Yes, surface wash'
    },
    isNew: true,
    deliveryDays: 1
  },
  {
    id: 'prod-st-3',
    name: 'Green Huggable Dino Soft Toy',
    category: 'Soft Toys',
    price: 499,
    originalPrice: 699,
    rating: 4.7,
    reviewsCount: 39,
    ageGroup: 'All Ages',
    brand: 'HuggyBuddy',
    images: [
      'https://images.unsplash.com/photo-1559251606-c623743a6d76?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 30,
    description: 'Cute green T-Rex plush made with super soft premium material, detailed teeth, and friendly embroidered eyes.',
    specifications: {
      'Size': '35 cm',
      'Material': 'Plush fleece',
      'Color': 'Soft Mint Green'
    },
    deliveryDays: 2
  },
  {
    id: 'prod-st-4',
    name: 'Disney Mickey Mouse Plush Toy',
    category: 'Soft Toys',
    price: 799,
    originalPrice: 999,
    rating: 4.8,
    reviewsCount: 85,
    ageGroup: 'All Ages',
    brand: 'Disney Plush',
    images: [
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 15,
    description: 'Officially licensed Disney Mickey Mouse plush in his classic red shorts and yellow shoes. Soft fabric with detailed embroidery.',
    specifications: {
      'Size': '40 cm',
      'Official License': 'Disney Store India',
      'Material': 'Super soft plush polyester'
    },
    isBestSeller: true,
    deliveryDays: 1
  },
  {
    id: 'prod-st-5',
    name: 'Cute White Bunny Plush Toy',
    category: 'Soft Toys',
    price: 449,
    originalPrice: 599,
    rating: 4.9,
    reviewsCount: 51,
    ageGroup: 'All Ages',
    brand: 'HuggyBuddy',
    images: [
      'https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 28,
    description: 'Lovable fluffy bunny with long droopy ears and a cute pink nose. Made from extremely soft fabric, ideal for babies and kids.',
    specifications: {
      'Size': '30 cm',
      'Ear Length': '15 cm',
      'Color': 'Snow White'
    },
    deliveryDays: 2
  },
  {
    id: 'prod-ot-2',
    name: 'Colorful Kids Garden Swing Seat',
    category: 'Outdoor Toys',
    price: 1299,
    originalPrice: 1699,
    rating: 4.6,
    reviewsCount: 18,
    ageGroup: '3-5 Years',
    brand: 'SportyKids',
    images: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 10,
    description: 'Safe and heavy-duty plastic swing seat that can be hung from trees or metal swing sets. Features adjustable ropes and T-bar guard.',
    specifications: {
      'Weight Limit': '35 kg',
      'Rope Length': 'Adjustable up to 2m',
      'Material': 'High-density polyethylene'
    },
    deliveryDays: 2
  },
  {
    id: 'prod-ot-3',
    name: 'Premium Kids Kick Scooter (3-Wheel)',
    category: 'Outdoor Toys',
    price: 2499,
    originalPrice: 2999,
    rating: 4.7,
    reviewsCount: 44,
    ageGroup: '3-5 Years',
    brand: 'SportyKids',
    images: [
      'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 15,
    description: 'Lean-to-steer kick scooter featuring glowing LED wheels, 3-level adjustable height handlebar, and an extra-wide rear foot brake.',
    specifications: {
      'Max Weight': '50 kg',
      'Wheels': 'Polyurethane LED wheels',
      'Handlebar Heights': '65, 70, 75 cm'
    },
    isTrending: true,
    deliveryDays: 1
  },
  {
    id: 'prod-ot-4',
    name: 'Kids First Training Bicycle (14-Inch)',
    category: 'Outdoor Toys',
    price: 4999,
    originalPrice: 5999,
    rating: 4.8,
    reviewsCount: 32,
    ageGroup: '3-5 Years',
    brand: 'SportyKids',
    images: [
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 7,
    description: 'High-quality kids bike with training wheels, rear coaster brakes, chain guard, and front basket. Perfect first bicycle.',
    specifications: {
      'Wheel Size': '14 Inches',
      'Frame Material': 'Carbon Steel',
      'Training Wheels': 'Removable'
    },
    isBestSeller: true,
    deliveryDays: 2
  },
  {
    id: 'prod-ot-5',
    name: 'Sand & Water Adventure Play Table',
    category: 'Outdoor Toys',
    price: 1899,
    originalPrice: 2499,
    rating: 4.5,
    reviewsCount: 20,
    ageGroup: '1-3 Years',
    brand: 'SportyKids',
    images: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 12,
    description: 'Double-sided play table with one side for sand and the other for water. Includes water wheel, sand molds, shovel, and rake.',
    specifications: {
      'Dimensions': '60 x 60 x 40 cm',
      'Includes': '8 play accessories',
      'Material': 'UV-resistant plastic'
    },
    isNew: true,
    deliveryDays: 3
  },
  {
    id: 'prod-bgf-2',
    name: 'Deluxe Disney Frozen Stationery Gift Set',
    category: 'Birthday Gifts',
    price: 599,
    originalPrice: 799,
    rating: 4.7,
    reviewsCount: 38,
    ageGroup: '6-8 Years',
    brand: 'Toy Shopee Special',
    images: [
      'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 30,
    description: 'Complete stationery kit in a premium metal case. Includes coloring books, pencils, rulers, eraser, stamps, and a Frozen-themed wallet.',
    specifications: {
      'Pieces': '30+ stationery items',
      'Case Material': 'Tinplate',
      'Theme': 'Disney Frozen II'
    },
    deliveryDays: 2
  },
  {
    id: 'prod-bgf-3',
    name: 'Premium Chocolate & Toy Birthday Hamper',
    category: 'Birthday Gifts',
    price: 1199,
    originalPrice: 1499,
    rating: 4.9,
    reviewsCount: 54,
    ageGroup: 'All Ages',
    brand: 'Toy Shopee Special',
    images: [
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 20,
    description: 'Luxury cardboard gift box filled with premium chocolates, a small plush teddy, and a personalized birthday card.',
    specifications: {
      'Chocolates': 'Ferrero Rocher & Hershey bars',
      'Plush': '15cm Brown Bear',
      'Gift Wrap': 'Included'
    },
    isTrending: true,
    deliveryDays: 1
  },
  {
    id: 'prod-bgf-4',
    name: 'DIY Scrapbook Craft Gift Kit',
    category: 'Birthday Gifts',
    price: 699,
    originalPrice: 899,
    rating: 4.6,
    reviewsCount: 21,
    ageGroup: '8-12 Years',
    brand: 'STEMLab',
    images: [
      'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 15,
    description: 'Unleash creativity with this scrapbook design kit. Contains blank hardback journal, stickers, printed papers, ribbons, and metallic pens.',
    specifications: {
      'Journal Pages': '40 pages',
      'Pens': '5 metallic glitter markers',
      'Stickers': '200+ assorted sheets'
    },
    isNew: true,
    deliveryDays: 1
  },
  {
    id: 'prod-bgf-5',
    name: 'Princess Pretend Play Makeup Vanity Set',
    category: 'Birthday Gifts',
    price: 1499,
    originalPrice: 1999,
    rating: 4.8,
    reviewsCount: 42,
    ageGroup: '3-5 Years',
    brand: 'PartyShopee',
    images: [
      'https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 14,
    description: 'Cute table-top vanity mirror with child-safe non-toxic pretend makeup accessories, hair dryer (with real blowing action), and comb.',
    specifications: {
      'Mirror': 'Shatterproof acrylic',
      'Batteries': '1 x AA (Not Included)',
      'Material': 'Safe ABS plastic'
    },
    isOffer: true,
    deliveryDays: 2
  },
  {
    id: 'prod-rg-2',
    name: 'Magic Water Painting Books (Set of 10)',
    category: 'Return Gifts',
    price: 599,
    originalPrice: 899,
    rating: 4.7,
    reviewsCount: 75,
    ageGroup: '3-5 Years',
    brand: 'PartyShopee',
    images: [
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 50,
    description: 'Reuse over and over! Paint with water and see colors appear, which disappear as the page dries. Great mess-free activity for return gifts.',
    specifications: {
      'Quantity': '10 coloring books',
      'Includes': '10 water refill pens',
      'Pages': '4 pages per book'
    },
    isTrending: true,
    deliveryDays: 2
  },
  {
    id: 'prod-rg-3',
    name: 'Pull-back Racing Cars Pack (Set of 12)',
    category: 'Return Gifts',
    price: 499,
    originalPrice: 699,
    rating: 4.5,
    reviewsCount: 62,
    ageGroup: '3-5 Years',
    brand: 'PartyShopee',
    images: [
      'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 60,
    description: 'A bundle of 12 pull-back die-cast look racing cars. Sturdy, colorful, and individually packaged, making them perfect favors.',
    specifications: {
      'Quantity': '12 cars per box',
      'Drive Type': 'Pull-back spring',
      'Material': 'Non-toxic plastic body'
    },
    deliveryDays: 1
  },
  {
    id: 'prod-rg-4',
    name: 'Modeling Clay Play-Doh Party Packs (Set of 15)',
    category: 'Return Gifts',
    price: 699,
    originalPrice: 999,
    rating: 4.8,
    reviewsCount: 95,
    ageGroup: '3-5 Years',
    brand: 'PartyShopee',
    images: [
      'https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 40,
    description: 'Gift creative play! Set of 15 mini clay tubs in vibrant colors with 10 small shape cutter molds. Safe and non-toxic.',
    specifications: {
      'Quantity': '15 tubs + 10 cutters',
      'Material': 'Non-toxic wheat-based dough',
      'Tub Weight': '50g each'
    },
    isBestSeller: true,
    deliveryDays: 2
  },
  {
    id: 'prod-rg-5',
    name: 'Mini Board Game Assortment (Set of 10)',
    category: 'Return Gifts',
    price: 899,
    originalPrice: 1200,
    rating: 4.6,
    reviewsCount: 43,
    ageGroup: '6-8 Years',
    brand: 'PartyShopee',
    images: [
      'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=600&q=80'
    ],
    inStock: true,
    stockCount: 35,
    description: 'Bundle of 10 mini pocket-sized board games (Ludo, Snakes & Ladders, Tic-Tac-Toe, Chess). Great return gift choice for school parties.',
    specifications: {
      'Quantity': '10 mini board games',
      'Size': '10 x 10 cm each',
      'Material': 'Magnetic plastic board'
    },
    isNew: true,
    deliveryDays: 2
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Om Refrigeration Ac Solutions',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    rating: 4,
    date: '4 years ago',
    text: 'Very high rates but overall fine because all types of age toys available here , near railway bridge badlapur east, baught a remote car on my friends birthday from here . There are no guarantee warranty of products please check and purchase carefully. Thanks',
    response: 'Thank you for shopping at Toy Shopee! We carry toys for all ages and test all electronic/RC items at the counter prior to checkout to ensure everything is working perfectly for you. We look forward to seeing you again!'
  },
  {
    id: 'rev-2',
    author: 'Trushna Doke',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 4,
    date: '9 years ago',
    text: 'It is a nice shop for toys and other playing stuff. They also keep board games and many more variety with them. I often buy Hot wheels from here. Only the issue is they don\'t keep large variety in it,they just order same toys and hotwheels to sell.',
    response: 'Hi Trushna! Thanks for the review. Over the years, we have significantly expanded our catalogs. We now offer dozens of new board games, puzzle sets, and hot wheels additions. Drop by to check out our fresh stock!'
  },
  {
    id: 'rev-3',
    author: 'Sameer Bhosale',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 2,
    date: '2 years ago',
    text: 'Rates of toys are very high. Worker in shop are nonsens. Dont have sens of how to talk with customer. Other than this there are many shops with reasonable rates in badlapur. Poor experience. Worst shop ever.',
    response: 'Hi Sameer, we sincerely apologize for the poor experience. We have taken your feedback seriously and trained our team to provide polite and helpful service. We also now offer special discounts on many toys. We would love the opportunity to welcome you back and make things right!'
  },
  {
    id: 'rev-4',
    author: 'Akash Chaudhari',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    rating: 4,
    date: '4 years ago',
    text: 'Store arrangements are good. All type of toys available here. Nearby railway stn. But prices are little costly.',
    response: 'Thank you Akash! We are glad you enjoyed our store arrangement and convenient location near the railway station. We aim to keep all varieties of toys in stock for our customers.'
  },
  {
    id: 'rev-5',
    author: 'Nilesh Kedare',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
    rating: 4,
    date: '6 years ago',
    text: 'It is the only good toy shop. But rates are compartively high but considering a variety of available products makes it a good toy shop in badlapur.',
    response: 'Thank you Nilesh! We strive to be the best toy shop in Badlapur by keeping the widest variety of quality products available under one roof. We appreciate your support!'
  },
  {
    id: 'rev-6',
    author: 'nikhil deshmukh',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: '3 years ago',
    text: 'One of the better shops in Badlapur to shop gifts for kids. Variety of toys available in all budgets.',
    response: 'Thank you Nikhil! We are glad we could help you find perfect gifts within your budget. Your recommendation means a lot to us!'
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Top 5 Educational Toys to Boost Child Brain Development in 2026',
    slug: 'top-educational-toys-development',
    category: 'Educational Toys',
    excerpt: 'Discover which toys can help your child improve spatial thinking, logical deduction, and motor skills while having fun.',
    content: `Choosing the right toys for your children can feel like a daunting task, especially with the digital screen distraction surrounding them. However, educational toys (STEM) play an irreplaceable role in sensory and cognitive development.
    
    In this guide, we break down our top 5 picks available at Toy Shopee, Badlapur:
    
    1. **Smart Coding Robots**: Tutors child-friendly programming logic without screen exhaustion.
    2. **Jigsaw Puzzles**: Boosts spatial coordination and pattern matching.
    3. **Building Blocks**: Enhances tactile precision, physics awareness, and structural balance.
    4. **Scientific Microscopes**: Encourages natural curiosity and biology basics.
    5. **Abacus & Counting Frames**: Solidifies mental math foundations.
    
    Read on to understand how you can introduce these toys into your kid's playtime routine.`,
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
    date: 'June 01, 2026',
    readTime: '4 min read',
    author: 'Store Team'
  },
  {
    id: 'blog-2',
    title: 'How to Plan the Perfect Birthday Party Return Gifts on a Budget',
    slug: 'birthday-party-return-gifts-budget',
    category: 'Birthday Planning',
    excerpt: 'Make your child\'s birthday memorable for every guest! Learn how to curate bulk return gifts without breaking the bank.',
    content: `Birthday parties are joyful milestones, but arranging party favors and return gifts for 30+ kids can quickly strain your budget. The secret is selecting return gift sets that offer functional value (like coloring, drawing, and active items) rather than generic candy.
    
    Here are a few smart options we recommend:
    
    * **Combo Sets**: Art books combined with pastel packs are always a hit.
    * **Theme Packs**: Cartoon/Superhero sets (badges, pencils, and keychains).
    * **Interactive Games**: Small card decks or travel chess.
    
    At Toy Shopee Badlapur, we provide wholesale pricing on bulk bookings starting from just 10 pieces. Check our return gift catalog to explore pre-packed gift bags!`,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
    date: 'May 20, 2026',
    readTime: '5 min read',
    author: 'Store Manager'
  }
];
