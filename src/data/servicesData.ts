export interface ServiceType {
  id: number;
  title: string;
  description: string;
  image: string;
  detailed: boolean;
  slug: string;
  benefits: string[];
  materials: string[];
  process: string[];
  galleryImages?: string[];
}

const servicesData: ServiceType[] = [
  {
    id: 1,
    title: 'Luxury Wooden Flooring',
    description: 'Premium wooden flooring solutions that add warmth and elegance to your space.',
    image: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=2487&auto=format&fit=crop',
    detailed: true,
    slug: 'luxury-wooden-flooring',
    benefits: [
      'Adds natural warmth and beauty to your space',
      'Increases property value',
      'Durable and long-lasting with proper care',
      'Improves indoor air quality compared to carpets'
    ],
    materials: ['Oak', 'Walnut', 'Cherry', 'Maple', 'Exotic hardwoods'],
    process: [
      'Initial consultation and space assessment',
      'Selection of wood type, finish, and pattern',
      'Subfloor preparation and conditioning',
      'Professional installation by skilled craftsmen',
      'Finishing, sealing, and final inspection'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=2487&auto=format&fit=crop',
      '/images/Luxury-Wooden-Flooring/IMG_7084.jpeg',
      '/images/Luxury-Wooden-Flooring/IMG_7081.jpeg',
      '/images/Luxury-Wooden-Flooring/IMG_7083.jpeg',
      '/images/Luxury-Wooden-Flooring/IMG_7082.jpeg'
    ]
  },
  {
    id: 2,
    title: 'Laminate Flooring',
    description: 'Durable and affordable flooring options with the look of natural materials.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2574&auto=format&fit=crop',
    detailed: true,
    slug: 'laminate-flooring',
    benefits: [
      'Cost-effective alternative to hardwood',
      'Extremely durable and scratch-resistant',
      'Easy to clean and maintain',
      'Wide variety of styles and designs'
    ],
    materials: ['High-density fiberboard', 'Melamine resin', 'Wear-resistant overlay', 'Decorative layer'],
    process: [
      'Site evaluation and measurement',
      'Selection of laminate style and design',
      'Subfloor preparation and moisture testing',
      'Professional installation with proper underlayment',
      'Finishing touches and quality inspection'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2574&auto=format&fit=crop',
      '/images/Laminate-Flooring/IMG_7286.jpeg',
      '/images/Laminate-Flooring/IMG_7288.jpeg',
      '/images/Laminate-Flooring/IMG_7287.jpeg',
      '/images/Laminate-Flooring/IMG_7289.jpeg'
    ]
  },
  {
    id: 3,
    title: 'Designer Wallpapers',
    description: 'Transform your walls with our collection of exquisite designer wallpapers.',
    image: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=2592&auto=format&fit=crop',
    detailed: true,
    slug: 'designer-wallpapers',
    benefits: [
      'Instantly transforms the look and feel of a room',
      'Wide variety of patterns, textures, and colors',
      'More durable than paint in high-traffic areas',
      'Can hide wall imperfections effectively'
    ],
    materials: ['Premium vinyl', 'Textured papers', 'Grasscloth', 'Digital prints', 'Hand-painted designs', '3D panels'],
    process: [
      'Design consultation and wallpaper selection',
      'Wall preparation and surface smoothing',
      'Professional application with pattern matching',
      'Trimming and finishing for a perfect look',
      'Final inspection and clean-up'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=2592&auto=format&fit=crop',
      '/images/Designer-Wallpapers/IMG_8595 (1).jpeg',
      '/images/Designer-Wallpapers/IMG_8591 (1).jpeg',
      '/images/Designer-Wallpapers/IMG_8592 (1).jpeg',
      '/images/Designer-Wallpapers/IMG_8593 (1).jpeg'
    ]
  },
  {
    id: 4,
    title: 'Royal Carving Furniture',
    description: 'Handcrafted furniture with intricate carvings for a royal touch to your interior.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2670&auto=format&fit=crop',
    detailed: true,
    slug: 'royal-carving-furniture',
    benefits: [
      'Unique, one-of-a-kind pieces for your home',
      'Exceptional craftsmanship and attention to detail',
      'Timeless designs that become family heirlooms',
      'Customizable to your specific requirements'
    ],
    materials: ['Teak', 'Rosewood', 'Mahogany', 'Sheesham', 'Oak'],
    process: [
      'Design consultation and concept development',
      'Wood selection based on design requirements',
      'Hand carving by master craftsmen',
      'Assembly and structural reinforcement',
      'Finishing, polishing, and quality inspection'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2670&auto=format&fit=crop',
      '/images/Royal-Carving-Furniture/IMG_8309.jpeg',
      '/images/Royal-Carving-Furniture/IMG_8313.jpeg',
      '/images/Royal-Carving-Furniture/IMG_7404.jpeg',
      '/images/Royal-Carving-Furniture/IMG_7728.jpeg'
    ]
  },
  {
    id: 5,
    title: 'Handcrafted Items',
    description: 'Unique handcrafted decor items that add character to your space.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2532&auto=format&fit=crop',
    detailed: true,
    slug: 'handcrafted-items',
    benefits: [
      'Add unique personality to your interiors',
      'Support traditional craftsmanship',
      'Each piece tells a story',
      'Eco-friendly and sustainable production'
    ],
    materials: ['Ceramic', 'Wood', 'Metal', 'Glass', 'Fabric', 'Natural fibers'],
    process: [
      'Artisan selection and design collaboration',
      'Material sourcing from sustainable suppliers',
      'Traditional handcrafting techniques',
      'Quality control and finishing',
      'Careful packaging and delivery'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2532&auto=format&fit=crop',
      '/images/Handcrafted-Items/IMG_8374.jpeg',
      '/images/Handcrafted-Items/IMG_8390.jpeg',
      '/images/Handcrafted-Items/IMG_8387.jpeg',
      '/images/Handcrafted-Items/IMG_8389.jpeg'
    ]
  },
  {
    id: 6,
    title: 'Designer Tiles',
    description: 'Premium tiles in various designs and materials for floors and walls.',
    image: 'https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?q=80&w=2670&auto=format&fit=crop',
    detailed: true,
    slug: 'designer-tiles',
    benefits: [
      'Wide range of designs, patterns and textures',
      'Highly durable and water-resistant',
      'Easy to clean and maintain',
      'Excellent for high-traffic areas'
    ],
    materials: ['Ceramic', 'Porcelain', 'Natural stone', 'Marble', 'Glass', 'Mosaic'],
    process: [
      'Space assessment and design consultation',
      'Material and pattern selection',
      'Surface preparation and waterproofing',
      'Professional installation with precision cutting',
      'Grouting, sealing and final cleaning'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?q=80&w=2670&auto=format&fit=crop',
      '/images/Designer-Tiles/58979274-b8b0-4ade-994f-7554ab280806.png',
      '/images/Designer-Tiles/38a6b948-057d-43e8-913c-a091d025fbed.png',
      '/images/Designer-Tiles/e70db09c-2ff5-4325-b0e0-23ec2e1884bb.png',
      '/images/Designer-Tiles/1e22eb9b-dd5c-46d3-af09-0452b3559170.png'
    ]
  }
];

export default servicesData;
