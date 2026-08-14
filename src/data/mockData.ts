import { Product, Review } from '../types';

export const BEST_SELLERS: Product[] = [
  {
    id: 'bs-1',
    name: 'COTEL POLO',
    category: 'bestseller', 
    categoryLabel: 'MENS / POLOS',
    price: 949.00,
    originalPrice: 1200.00,
    description: 'Precision engineered thermal insulation with 4-way elastic stretch woven fiber. Engineered for cold-climate explosive training.',
    colors: [
      { name: 'Onyx Black', hex: '#121212' },
      { name: 'Titanium Grey', hex: '#4a4e51' },
      { name: 'Volcanic Olive', hex: '#2d3328' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: 'https://kragbuzz.com/cdn/shop/files/CopyofDSC02654.jpg?v=1784007236&width=720',
    secondaryImage: 'https://kragbuzz.com/cdn/shop/files/CopyofDSC02656.jpg?v=1784007235&width=720',
    rating: 4.9,
    reviewsCount: 142,
    isBestSeller: true,
    isNew: true,
    features: ['Aerothermal Heat retention technology', 'Water-repellent DWR coating', 'Ergonomic targeted thumbholes', 'Invisible magnetic pocket closures'],
    techSpecs: {
      'Material': '78% Recycled Poly, 22% Elastane',
      'Fit': 'Athletic Tapered',
      'Weight': '380g'
    }
  },
  {
    id: 'bs-2',
    name: 'MELANGE JACKET',
    category: 'bestseller',
    categoryLabel: 'WOMENS / JACKETS',
    price: 2999.00,
    originalPrice: 3999.00,
    description: 'Ultralight featherweight weather defense shield. Folds down into its own chest compartment for seamless transit.',
    colors: [
      { name: 'Pure White', hex: '#f8f9fa' },
      { name: 'Deep Midnight', hex: '#0d1b2a' },
      { name: 'Cyber Lime', hex: '#ccff00' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    image: 'https://kragbuzz.com/cdn/shop/files/801A5378.jpg?v=1783924270&width=480',
    secondaryImage: 'https://kragbuzz.com/cdn/shop/files/801A5380.jpg?v=1783924270&width=480',
    rating: 4.8,
    reviewsCount: 98,
    isBestSeller: true,
    features: ['100% Windproof Ripstop Nylon', '360° Reflective seam mapping', 'Laser-cut underarm ventilation ports'],
    techSpecs: {
      'Material': '100% Micro Ripstop Nylon',
      'Fit': 'Slim Ergonomic',
      'Weight': '140g'
    }
  },
  {
    id: 'bs-3',
    name: 'SPANDEX SLEEVELESS TANK',
    category: 'bestseller',
    categoryLabel: 'MENS / Sleeveless Tanks',
    price: 699.00,
    description: 'Targeted muscle containment zone construction reducing post-training fatigue and maximizing power output.',
    colors: [
      { name: 'Stealth Black', hex: '#000000' },
      { name: 'Slate Grey', hex: '#333533' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://kragbuzz.com/cdn/shop/files/801A3430.jpg?v=1784377693&width=480',
    secondaryImage: 'https://kragbuzz.com/cdn/shop/files/801A3431_6262284d-182c-4df5-badc-f53f4d2dcfdb.jpg?v=1784377692&width=480',
    rating: 4.95,
    reviewsCount: 210,
    isBestSeller: true,
    features: ['Graduated medical grade compression', 'Quick-dry moisture transport matrix', 'Sweatproof back zip media pocket'],
    techSpecs: {
      'Compression': '20-25 mmHg',
      'Material': '65% Polyamide, 35% Elastane'
    }
  },
  {
    id: 'bs-4',
    name: 'ELNA ROUND NECK T-SHIRTS',
    category: 'bestseller',
    categoryLabel: 'WOMENS / T-SHIRTS',
    price: 749.00,
    description: 'Full-length curved carbon fiber propulsion plate fused with nitrogen-infused energetic foam cell midsole.',
    colors: [
      { name: 'Infrared Crimson', hex: '#d90429' },
      { name: 'Core White', hex: '#ffffff' },
      { name: 'Matte Charcoal', hex: '#212529' }
    ],
    sizes: ['US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    image: 'https://kragbuzz.com/cdn/shop/files/9V3A1565.jpg?v=1783774678&width=720',
    secondaryImage: 'https://kragbuzz.com/cdn/shop/files/9V3A1562.jpg?v=1783774678&width=720',
    rating: 5.0,
    reviewsCount: 384,
    isBestSeller: true,
    isNew: true,
    features: ['3D Matrix Woven Monofilament Upper', 'Nitrogen-infused Dual-Density Foam', 'Carbon composite propulsion shank'],
    techSpecs: {
      'Drop': '8mm',
      'Weight': '195g (US 9)',
      'Surface': 'Road / Track'
    }
  },

];

export const ACCESSORIES: Product[] = [
  {
    id: 'acc-1',
    name: 'SLEEVELESS',
    category: 'accessories',
    categoryLabel: 'Compression',
    price: 899.00,
    description: 'Laser-perforated cooling crown with sweat-wicking internal headband and magnetic back slider buckle.',
    colors: [
      { name: 'Obsidian', hex: '#111111' },
      { name: 'Ghost White', hex: '#f0f0f0' },
      { name: 'Tactical Sand', hex: '#c2b280' }
    ],
    sizes: ['One Size Fits All'],
    image: 'https://kragbuzz.com/cdn/shop/files/ARU_3667.jpg?v=1784543365&width=720',
    secondaryImage: 'https://kragbuzz.com/cdn/shop/files/ARU_3666.jpg?v=1784543365&width=720',
    rating: 4.9,
    reviewsCount: 88,
    features: ['UPF 50+ Sun defense rating', 'Pliable semi-curved brim', 'Hydrophobic surface treatment']
  },
  {
    id: 'acc-2',
    name: 'SLEEVELESS',
    category: 'accessories',
    categoryLabel: 'Compression',
    price: 899.00,
    description: 'Laser-perforated cooling crown with sweat-wicking internal headband and magnetic back slider buckle.',
    colors: [
      { name: 'Obsidian', hex: '#111111' },
      { name: 'Ghost White', hex: '#f0f0f0' },
      { name: 'Tactical Sand', hex: '#c2b280' }
    ],
    sizes: ['One Size Fits All'],
    image: 'https://kragbuzz.com/cdn/shop/files/ARU_3667.jpg?v=1784543365&width=720',
    secondaryImage: 'https://kragbuzz.com/cdn/shop/files/ARU_3666.jpg?v=1784543365&width=720',
    rating: 4.9,
    reviewsCount: 88,
    features: ['UPF 50+ Sun defense rating', 'Pliable semi-curved brim', 'Hydrophobic surface treatment']
  },
  {
    id: 'acc-3',
    name: 'SLEEVELESS',
    category: 'accessories',
    categoryLabel: 'Compression',
    price: 899.00,
    description: 'Laser-perforated cooling crown with sweat-wicking internal headband and magnetic back slider buckle.',
    colors: [
      { name: 'Obsidian', hex: '#111111' },
      { name: 'Ghost White', hex: '#f0f0f0' },
      { name: 'Tactical Sand', hex: '#c2b280' }
    ],
    sizes: ['One Size Fits All'],
    image: 'https://kragbuzz.com/cdn/shop/files/ARU_3667.jpg?v=1784543365&width=720',
    secondaryImage: 'https://kragbuzz.com/cdn/shop/files/ARU_3666.jpg?v=1784543365&width=720',
    rating: 4.9,
    reviewsCount: 88,
    features: ['UPF 50+ Sun defense rating', 'Pliable semi-curved brim', 'Hydrophobic surface treatment']
  }
];

export const KIDS: Product[] = [
  {
    id: 'kids-1',
    name: 'PENCIL',
    category: 'kids',
    categoryLabel: 'KIDS / T-SHIRT',
    price: 699.00,
    originalPrice: 999.00,
    description: 'High-performance activewear tracksuit engineered for young athletes. Ultra-durable 4-way stretch fabric with moisture transport.',
    colors: [
      { name: 'Onyx Black', hex: '#121212' },
      { name: 'Royal Blue', hex: '#1d4ed8' },
      { name: 'Crimson Red', hex: '#dc2626' }
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    image: 'https://kragbuzz.com/cdn/shop/files/DSC02046_23b113b4-532d-49c6-a7b3-a5cb6e7c1c69.jpg?v=1783669590&width=720',
    secondaryImage: 'https://kragbuzz.com/cdn/shop/files/DSC02047_a9bf4196-432a-4749-b7ef-dd95ca8b4b46.jpg?v=1783669590&width=720',
    rating: 4.9,
    reviewsCount: 78,
    isNew: true,
    features: ['Quick-dry breathable mesh lining', 'Zippered secure side pockets', 'Adjustable elastic drawstring waistband']
  },
  {
    id: 'kids-2',
    name: 'PENCIL',
    category: 'kids',
    categoryLabel: 'KIDS / T-SHIRT',
    price: 699.00,
    originalPrice: 999.00,
    description: 'High-performance activewear tracksuit engineered for young athletes. Ultra-durable 4-way stretch fabric with moisture transport.',
    colors: [
      { name: 'Onyx Black', hex: '#121212' },
      { name: 'Royal Blue', hex: '#1d4ed8' },
      { name: 'Crimson Red', hex: '#dc2626' }
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    image: 'https://kragbuzz.com/cdn/shop/files/DSC02046_23b113b4-532d-49c6-a7b3-a5cb6e7c1c69.jpg?v=1783669590&width=720',
    secondaryImage: 'https://kragbuzz.com/cdn/shop/files/DSC02047_a9bf4196-432a-4749-b7ef-dd95ca8b4b46.jpg?v=1783669590&width=720',
    rating: 4.9,
    reviewsCount: 78,
    isNew: true,
    features: ['Quick-dry breathable mesh lining', 'Zippered secure side pockets', 'Adjustable elastic drawstring waistband']
  },
  {
    id: 'kids-3',
    name: 'PENCIL',
    category: 'kids',
    categoryLabel: 'KIDS / T-SHIRT',
    price: 699.00,
    originalPrice: 999.00,
    description: 'High-performance activewear tracksuit engineered for young athletes. Ultra-durable 4-way stretch fabric with moisture transport.',
    colors: [
      { name: 'Onyx Black', hex: '#121212' },
      { name: 'Royal Blue', hex: '#1d4ed8' },
      { name: 'Crimson Red', hex: '#dc2626' }
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    image: 'https://kragbuzz.com/cdn/shop/files/DSC02046_23b113b4-532d-49c6-a7b3-a5cb6e7c1c69.jpg?v=1783669590&width=720',
    secondaryImage: 'https://kragbuzz.com/cdn/shop/files/DSC02047_a9bf4196-432a-4749-b7ef-dd95ca8b4b46.jpg?v=1783669590&width=720',
    rating: 4.9,
    reviewsCount: 78,
    isNew: true,
    features: ['Quick-dry breathable mesh lining', 'Zippered secure side pockets', 'Adjustable elastic drawstring waistband']
  },
  {
    id: 'kids-4',
    name: 'PENCIL',
    category: 'kids',
    categoryLabel: 'KIDS / T-SHIRT',
    price: 699.00,
    originalPrice: 999.00,
    description: 'High-performance activewear tracksuit engineered for young athletes. Ultra-durable 4-way stretch fabric with moisture transport.',
    colors: [
      { name: 'Onyx Black', hex: '#121212' },
      { name: 'Royal Blue', hex: '#1d4ed8' },
      { name: 'Crimson Red', hex: '#dc2626' }
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    image: 'https://kragbuzz.com/cdn/shop/files/DSC02046_23b113b4-532d-49c6-a7b3-a5cb6e7c1c69.jpg?v=1783669590&width=720',
    secondaryImage: 'https://kragbuzz.com/cdn/shop/files/DSC02047_a9bf4196-432a-4749-b7ef-dd95ca8b4b46.jpg?v=1783669590&width=720',
    rating: 4.9,
    reviewsCount: 78,
    isNew: true,
    features: ['Quick-dry breathable mesh lining', 'Zippered secure side pockets', 'Adjustable elastic drawstring waistband']
  },
  {
    id: 'kids-5',
    name: 'PENCIL',
    category: 'kids',
    categoryLabel: 'KIDS / T-SHIRT',
    price: 699.00,
    originalPrice: 999.00,
    description: 'High-performance activewear tracksuit engineered for young athletes. Ultra-durable 4-way stretch fabric with moisture transport.',
    colors: [
      { name: 'Onyx Black', hex: '#121212' },
      { name: 'Royal Blue', hex: '#1d4ed8' },
      { name: 'Crimson Red', hex: '#dc2626' }
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    image: 'https://kragbuzz.com/cdn/shop/files/DSC02046_23b113b4-532d-49c6-a7b3-a5cb6e7c1c69.jpg?v=1783669590&width=720',
    secondaryImage: 'https://kragbuzz.com/cdn/shop/files/DSC02047_a9bf4196-432a-4749-b7ef-dd95ca8b4b46.jpg?v=1783669590&width=720',
    rating: 4.9,
    reviewsCount: 78,
    isNew: true,
    features: ['Quick-dry breathable mesh lining', 'Zippered secure side pockets', 'Adjustable elastic drawstring waistband']
  }
];

export const HEADWEAR: Product[] = [
  {
    id: 'headwear-1',
    name: 'Twist CAP',
    category: 'headwear',
    categoryLabel: 'HEADWEAR / CAPS',
    price: 599.00,
    originalPrice: 999.00,
    description: 'Structured 6-panel athletic cap with laser-cut breathability perforations, water-repellent shell, and laser-engraved metal clasp.',
    colors: [
      { name: 'Onyx Black', hex: '#121212' },
      { name: 'Tactical Olive', hex: '#2d372e' },
      { name: 'Stealth Grey', hex: '#4a4e51' }
    ],
    sizes: ['OSFA'],
    image: 'https://kragbuzz.com/cdn/shop/files/DSC07491_0605a176-3301-49e9-806f-3f6a25b90bb9.jpg?v=1783751575&width=720',
    secondaryImage: 'https://kragbuzz.com/cdn/shop/files/DSC07488_28bc39e0-c7d2-4845-ad26-5b517e3ea4cc.jpg?v=1783751575&width=720',
    rating: 4.9,
    reviewsCount: 142,
    isNew: true,
    isBestSeller: true,
    features: ['Laser-cut ventilation ports', 'Hydrophobic water-repellent treatment', 'Custom anti-bacterial sweatband']
  },
  {
    id: 'headwear-2',
    name: 'Twist CAP',
    category: 'headwear',
    categoryLabel: 'HEADWEAR / CAPS',
    price: 599.00,
    originalPrice: 999.00,
    description: 'Structured 6-panel athletic cap with laser-cut breathability perforations, water-repellent shell, and laser-engraved metal clasp.',
    colors: [
      { name: 'Onyx Black', hex: '#121212' },
      { name: 'Tactical Olive', hex: '#2d372e' },
      { name: 'Stealth Grey', hex: '#4a4e51' }
    ],
    sizes: ['OSFA'],
    image: 'https://kragbuzz.com/cdn/shop/files/DSC07491_0605a176-3301-49e9-806f-3f6a25b90bb9.jpg?v=1783751575&width=720',
    secondaryImage: 'https://kragbuzz.com/cdn/shop/files/DSC07488_28bc39e0-c7d2-4845-ad26-5b517e3ea4cc.jpg?v=1783751575&width=720',
    rating: 4.9,
    reviewsCount: 142,
    isNew: true,
    isBestSeller: true,
    features: ['Laser-cut ventilation ports', 'Hydrophobic water-repellent treatment', 'Custom anti-bacterial sweatband']
  },
  {
    id: 'headwear-3',
    name: 'Twist CAP',
    category: 'headwear',
    categoryLabel: 'HEADWEAR / CAPS',
    price: 599.00,
    originalPrice: 999.00,
    description: 'Structured 6-panel athletic cap with laser-cut breathability perforations, water-repellent shell, and laser-engraved metal clasp.',
    colors: [
      { name: 'Onyx Black', hex: '#121212' },
      { name: 'Tactical Olive', hex: '#2d372e' },
      { name: 'Stealth Grey', hex: '#4a4e51' }
    ],
    sizes: ['OSFA'],
    image: 'https://kragbuzz.com/cdn/shop/files/DSC07491_0605a176-3301-49e9-806f-3f6a25b90bb9.jpg?v=1783751575&width=720',
    secondaryImage: 'https://kragbuzz.com/cdn/shop/files/DSC07488_28bc39e0-c7d2-4845-ad26-5b517e3ea4cc.jpg?v=1783751575&width=720',
    rating: 4.9,
    reviewsCount: 142,
    isNew: true,
    isBestSeller: true,
    features: ['Laser-cut ventilation ports', 'Hydrophobic water-repellent treatment', 'Custom anti-bacterial sweatband']
  },
  {
    id: 'headwear-4',
    name: 'Twist CAP',
    category: 'headwear',
    categoryLabel: 'HEADWEAR / CAPS',
    price: 599.00,
    originalPrice: 999.00,
    description: 'Structured 6-panel athletic cap with laser-cut breathability perforations, water-repellent shell, and laser-engraved metal clasp.',
    colors: [
      { name: 'Onyx Black', hex: '#121212' },
      { name: 'Tactical Olive', hex: '#2d372e' },
      { name: 'Stealth Grey', hex: '#4a4e51' }
    ],
    sizes: ['OSFA'],
    image: 'https://kragbuzz.com/cdn/shop/files/DSC07491_0605a176-3301-49e9-806f-3f6a25b90bb9.jpg?v=1783751575&width=720',
    secondaryImage: 'https://kragbuzz.com/cdn/shop/files/DSC07488_28bc39e0-c7d2-4845-ad26-5b517e3ea4cc.jpg?v=1783751575&width=720',
    rating: 4.9,
    reviewsCount: 142,
    isNew: true,
    isBestSeller: true,
    features: ['Laser-cut ventilation ports', 'Hydrophobic water-repellent treatment', 'Custom anti-bacterial sweatband']
  }
];

export const CRICKET: Product[] = [
  {
    id: 'cricket-1',
    name: 'LEGEND WHITE',
    category: 'cricket',
    categoryLabel: 'CRICKET / Balls',
    price: 919.00,
    originalPrice: 1219.00,
    description: 'Grade 1+ hand-selected English Willow with extended sweet spot, pristine grain structure, and anti-shock rubber handle grip.',
    colors: [
      { name: 'Onyx Red', hex: '#dc2626' },
      { name: 'Stealth Black', hex: '#121212' }
    ],
    sizes: ['Short Handle (SH)', 'Long Handle (LH)', 'Harrow'],
    image: 'https://kragbuzz.com/cdn/shop/files/373da459-a764-4c85-8b23-8302375b28d9.png?v=1784876114&width=720',
    secondaryImage: 'https://kragbuzz.com/cdn/shop/files/373da459-a764-4c85-8b23-8302375b28d9.png?v=1784876114&width=720',
    rating: 4.95,
    reviewsCount: 88,
    isNew: true,
    isBestSeller: true,
    features: ['Grade 1+ Air-dried English Willow', '39mm+ Ultra-thick power edges', 'Consolidated toe guard for moisture defense']
  },
  {
    id: 'cricket-2',
    name: 'LEGEND WHITE',
    category: 'cricket',
    categoryLabel: 'CRICKET / Balls',
    price: 919.00,
    originalPrice: 1219.00,
    description: 'Grade 1+ hand-selected English Willow with extended sweet spot, pristine grain structure, and anti-shock rubber handle grip.',
    colors: [
      { name: 'Onyx Red', hex: '#dc2626' },
      { name: 'Stealth Black', hex: '#121212' }
    ],
    sizes: ['Short Handle (SH)', 'Long Handle (LH)', 'Harrow'],
    image: 'https://kragbuzz.com/cdn/shop/files/373da459-a764-4c85-8b23-8302375b28d9.png?v=1784876114&width=720',
    secondaryImage: 'https://kragbuzz.com/cdn/shop/files/373da459-a764-4c85-8b23-8302375b28d9.png?v=1784876114&width=720',
    rating: 4.95,
    reviewsCount: 88,
    isNew: true,
    isBestSeller: true,
    features: ['Grade 1+ Air-dried English Willow', '39mm+ Ultra-thick power edges', 'Consolidated toe guard for moisture defense']
  },
  {
    id: 'cricket-3',
    name: 'LEGEND WHITE',
    category: 'cricket',
    categoryLabel: 'CRICKET / Balls',
    price: 919.00,
    originalPrice: 1219.00,
    description: 'Grade 1+ hand-selected English Willow with extended sweet spot, pristine grain structure, and anti-shock rubber handle grip.',
    colors: [
      { name: 'Onyx Red', hex: '#dc2626' },
      { name: 'Stealth Black', hex: '#121212' }
    ],
    sizes: ['Short Handle (SH)', 'Long Handle (LH)', 'Harrow'],
    image: 'https://kragbuzz.com/cdn/shop/files/373da459-a764-4c85-8b23-8302375b28d9.png?v=1784876114&width=720',
    secondaryImage: 'https://kragbuzz.com/cdn/shop/files/373da459-a764-4c85-8b23-8302375b28d9.png?v=1784876114&width=720',
    rating: 4.95,
    reviewsCount: 88,
    isNew: true,
    isBestSeller: true,
    features: ['Grade 1+ Air-dried English Willow', '39mm+ Ultra-thick power edges', 'Consolidated toe guard for moisture defense']
  }
];

export const BAGS: Product[] = [
  {
    id: 'bag-1',
    name: 'REVERSE BAGPACK',
    category: 'bags',
    categoryLabel: 'TRAVEL & TRAINING',
    price: 2299.00,
    originalPrice: 3299.00,
    description: 'Weatherproof 900D TPU coated ballistic nylon shell with hideaway backpack harness straps and isolated vented shoe compartment.',
    colors: [
      { name: 'Matte Black', hex: '#0c0c0c' },
      { name: 'Olive Drab', hex: '#353f31' },
      { name: 'Concrete Grey', hex: '#495057' }
    ],
    sizes: ['50 Liters'],
    image: 'https://kragbuzz.com/cdn/shop/files/ARU_5164_e5342bb1-a421-479f-a39d-22fa4bb2d105.jpg?v=1785079581&width=720',
    secondaryImage: 'https://kragbuzz.com/cdn/shop/files/ARU_5165_5c1ea395-a4f1-451b-b4fd-8df5f9f2a7ff.jpg?v=1785079581&width=720',
    rating: 4.96,
    reviewsCount: 112,
    isBestSeller: true,
    features: ['100% Water-sealed YKK Aquaguard zippers', 'Convertible dual-mode carry system', 'Internal padded laptop / tablet sleeve'],
    techSpecs: {
      'Capacity': '50 Liters',
      'Dimensions': '58 x 34 x 28 cm',
      'Material': '900D TPU Coated Ballistic'
    }
  },
  {
    id: 'bag-2',
    name: 'REVERSE BAGPACK',
    category: 'bags',
    categoryLabel: 'TRAVEL & TRAINING',
    price: 2299.00,
    originalPrice: 3299.00,
    description: 'Weatherproof 900D TPU coated ballistic nylon shell with hideaway backpack harness straps and isolated vented shoe compartment.',
    colors: [
      { name: 'Matte Black', hex: '#0c0c0c' },
      { name: 'Olive Drab', hex: '#353f31' },
      { name: 'Concrete Grey', hex: '#495057' }
    ],
    sizes: ['50 Liters'],
    image: 'https://kragbuzz.com/cdn/shop/files/ARU_5164_e5342bb1-a421-479f-a39d-22fa4bb2d105.jpg?v=1785079581&width=720',
    secondaryImage: 'https://kragbuzz.com/cdn/shop/files/ARU_5165_5c1ea395-a4f1-451b-b4fd-8df5f9f2a7ff.jpg?v=1785079581&width=720',
    rating: 4.96,
    reviewsCount: 112,
    isBestSeller: true,
    features: ['100% Water-sealed YKK Aquaguard zippers', 'Convertible dual-mode carry system', 'Internal padded laptop / tablet sleeve'],
    techSpecs: {
      'Capacity': '50 Liters',
      'Dimensions': '58 x 34 x 28 cm',
      'Material': '900D TPU Coated Ballistic'
    }
  },
  {
    id: 'bag-3',
    name: 'REVERSE BAGPACK',
    category: 'bags',
    categoryLabel: 'TRAVEL & TRAINING',
    price: 2299.00,
    originalPrice: 3299.00,
    description: 'Weatherproof 900D TPU coated ballistic nylon shell with hideaway backpack harness straps and isolated vented shoe compartment.',
    colors: [
      { name: 'Matte Black', hex: '#0c0c0c' },
      { name: 'Olive Drab', hex: '#353f31' },
      { name: 'Concrete Grey', hex: '#495057' }
    ],
    sizes: ['50 Liters'],
    image: 'https://kragbuzz.com/cdn/shop/files/ARU_5164_e5342bb1-a421-479f-a39d-22fa4bb2d105.jpg?v=1785079581&width=720',
    secondaryImage: 'https://kragbuzz.com/cdn/shop/files/ARU_5165_5c1ea395-a4f1-451b-b4fd-8df5f9f2a7ff.jpg?v=1785079581&width=720',
    rating: 4.96,
    reviewsCount: 112,
    isBestSeller: true,
    features: ['100% Water-sealed YKK Aquaguard zippers', 'Convertible dual-mode carry system', 'Internal padded laptop / tablet sleeve'],
    techSpecs: {
      'Capacity': '50 Liters',
      'Dimensions': '58 x 34 x 28 cm',
      'Material': '900D TPU Coated Ballistic'
    }
  }
];

export const ALL_PRODUCTS: Product[] = [
  ...ACCESSORIES,
  ...KIDS,
  ...HEADWEAR,
  ...CRICKET,
  ...BAGS
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    customerName: 'ARJUN NAIR',
    rating: 5,
    date: 'AUGUST 2026',
    title: 'UNRIVALED CRAFTSMANSHIP & MOBILITY',
    comment: 'Kragbuzz has completely redefined my training arsenal. The Pro Performance Tracksuit fits like an engineered second skin, keeping the harsh elements out while venting excess heat seamlessly during 5 AM sprints. Absolutely world-class.',
    productPurchased: 'KRAGBUZZ PRO PERFORMANCE TRACKSUIT',
    avatarImage: 'https://kragbuzz.com/cdn/shop/files/IPL_and_India_cricket_team_player_pawan_suyal_sporting_kragbuzz_t-shirt_and_cap._Visit_the_link_in_bio_to_get_your_customised_t-shirts_now._indiancricket_ipl_cricketwear_activewear.jpg?v=1723561896&width=360',
    isVerified: true,
    location: 'BENGALURU, KARNATAKA'
  },
  {
    id: 'rev-2',
    customerName: 'ANANYA SHARMA',
    rating: 5,
    date: 'JULY 2026',
    title: 'THE GOLD STANDARD OF ATHLETIC FASHION',
    comment: 'The balance between high fashion and pure athletic performance is executed flawlessly. The Kragbuzz Stealth Jacket Hoodie is weightless yet rugged. Every detail — down to the premium zips — feels like futuristic luxury.',
    productPurchased: 'KRAGBUZZ STEALTH JACKET HOODIE',
    avatarImage: 'https://kragbuzz.com/cdn/shop/files/302412249_124059016890874_3342275381054360134_n.jpg?v=1723560101&width=360',
    isVerified: true,
    location: 'DELHI NCR, INDIA'
  },
  {
    id: 'rev-3',
    customerName: 'KABIR SHARMA',
    rating: 5,
    date: 'AUGUST 2026',
    title: 'PRO-GRADE ATHLETIC WEAR THAT DELIVERS',
    comment: 'The Kragbuzz Polo T-Shirt is an absolute masterpiece. The mobility in movement, lightweight breathable fabric, and sleek minimalist aesthetic set a new benchmark for modern athletes globally.',
    productPurchased: 'KRAGBUZZ TECH POLO T-SHIRT',
    avatarImage: 'https://media.istockphoto.com/id/1455343282/photo/portrait-of-an-indian-man.jpg?s=612x612&w=0&k=20&c=v0FUUguRBJLKtsSW2kFwVqqieKfTT7ULKHpe6n7MwvE=',
    isVerified: true,
    location: 'MUMBAI, MAHARASHTRA'
  },
  {
    id: 'rev-4',
    customerName: 'ROHAN VERMA',
    rating: 5,
    date: 'JUNE 2026',
    title: 'ULTIMATE COMFORT & PERFORMANCE SHORTS',
    comment: 'I train intensely 5 days a week for tournaments. The Kragbuzz Elite Shorts are indestructible, look lethal in matte black, and provide complete freedom of movement during heavy sessions.',
    productPurchased: 'KRAGBUZZ ELITE TRAINING SHORTS',
    avatarImage: 'https://static.vecteezy.com/system/resources/previews/054/454/796/large_2x/energetic-indian-male-running-outdoors-in-nature-for-health-and-fitness-inspiration-photo.jpg',
    isVerified: true,
    location: 'HYDERABAD, TELANGANA'
  },
  {
    id: 'rev-5',
    customerName: 'PRIYA SUNDARAM',
    rating: 5,
    date: 'AUGUST 2026',
    title: 'UNMATCHED BREATHABILITY & FIT',
    comment: 'The Kragbuzz Polo T-Shirt is easily the best athleisure wear in my closet. It absorbs sweat instantly during intense cardio sessions while looking sharp enough for everyday casual wear. Highly recommended!',
    productPurchased: 'KRAGBUZZ BREATHABLE POLO T-SHIRT',
    avatarImage: 'https://kragbuzz.com/cdn/shop/files/Dress_to_impress_thesamridhijoshi_adorning_our_Skarlet_full_sleeves_tshirt_and_making_heads_turn_womenfashion_athleisure_kragbuzzsports_gymwear_womenstyle.jpg?v=1723561670&width=360',
    isVerified: true,
    location: 'CHENNAI, TAMIL NADU'
  }
];