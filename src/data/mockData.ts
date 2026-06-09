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
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Amit Sharma',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: '1 week ago',
    text: 'Best toy shop in Badlapur! They have an incredible collection of Hot Wheels and educational toys. The staff is extremely helpful. Got free local home delivery for my daughters birthday gift!',
    response: 'Thank you Amit! We appreciate your support and are glad you liked our fast home delivery service.'
  },
  {
    id: 'rev-2',
    author: 'Priya Patel',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 4,
    date: '2 weeks ago',
    text: 'Great collection of board games and baby toys at reasonable prices. They accept cards and UPI. Knocked off 1 star because the remote control car I wanted was out of stock, but they ordered it for me and kept it ready in 3 days!',
    response: 'Hi Priya, thank you for the feedback. We are working on stocking up fast, and we are glad we could arrange the RC car for you quickly!'
  },
  {
    id: 'rev-3',
    author: 'Rajesh Patil',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: '1 month ago',
    text: 'Very trustworthy local business. We ordered return gifts in bulk (50 pieces) for our son\'s birthday. Quality was amazing, and they packed them individually in beautiful bags. Kids loved it!'
  },
  {
    id: 'rev-4',
    author: 'Sneha Deshmukh',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    rating: 4,
    date: '3 weeks ago',
    text: 'Nice experience. Located near Kartik Complex, easy to spot. Lots of variety for birthday gift packs. Clean store and friendly store owner.'
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
