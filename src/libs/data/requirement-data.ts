// libs/data/requirement-data.ts

/**
 * Type definition for a collaboration requirement
 */
export interface Requirement {
  id: string;
  title: string;
  brand: string;
  description: string;
  platform: string;
  category: string;
  collaborationType: 'Paid' | 'Unpaid' | 'Barter';
  budget?: string;
  deadline: string;
  posted: string;
  requirements?: string[];
}

/**
 * Sample requirements data for the application
 */
export const requirements: Requirement[] = [
  {
    id: "req-001",
    title: "Lifestyle Content Creator for Summer Collection",
    brand: "Urban Threads",
    description: "We're looking for a lifestyle content creator to showcase our new summer collection. The ideal creator has a bright, colorful aesthetic and creates authentic content that resonates with young adults. We need 5 Instagram posts and 2 Reels featuring our clothing in natural, everyday settings.",
    platform: "Instagram",
    category: "Fashion",
    collaborationType: "Paid",
    budget: "$1,500 - $2,000",
    deadline: "2025-04-15",
    posted: "2025-03-01",
    requirements: [
      "Minimum Instagram following of 10,000+",
      "Previous experience with fashion brands",
      "Bright, colorful aesthetic",
      "Ability to create both static and video content"
    ]
  },
  {
    id: "req-002",
    title: "Sustainable Living Advocate for Product Reviews",
    brand: "EcoLife",
    description: "EcoLife is seeking content creators passionate about sustainable living to review our new line of eco-friendly home products. We want authentic reviews highlighting the effectiveness and environmental benefits of our products. Looking for creators who can communicate clearly how these products fit into a sustainable lifestyle.",
    platform: "YouTube, Instagram",
    category: "Sustainability",
    collaborationType: "Barter",
    deadline: "2025-04-20",
    posted: "2025-02-28",
    requirements: [
      "Genuine interest in sustainability",
      "Experience with product reviews",
      "Strong storytelling abilities",
      "Either YouTube channel or Instagram account with engaged audience"
    ]
  },
  {
    id: "req-003",
    title: "Fitness Coach for Workout App Promotion",
    brand: "FitForce",
    description: "FitForce is looking for fitness coaches and enthusiasts to create content showcasing our workout app's features. We need demonstrations of specific workout routines from our app, with emphasis on proper form and the app's tracking capabilities. The content should be motivational and highlight the app's user-friendly interface.",
    platform: "Instagram, TikTok",
    category: "Fitness",
    collaborationType: "Paid",
    budget: "$1,000 - $3,000",
    deadline: "2025-04-10",
    posted: "2025-02-25",
    requirements: [
      "Certified fitness coach or demonstrated expertise",
      "Engaging on-camera presence",
      "Minimum 8,000 followers on Instagram or TikTok",
      "Ability to create dynamic workout content"
    ]
  },
  {
    id: "req-004",
    title: "Food Creator for Recipe Development",
    brand: "Flavor Fusion",
    description: "Flavor Fusion is seeking food content creators to develop and showcase recipes using our artisanal spice blends. We're looking for creators who can create visually appealing food content while demonstrating how our spices elevate everyday recipes. The recipes should be approachable for home cooks while still being innovative.",
    platform: "Instagram, TikTok, YouTube",
    category: "Food & Cooking",
    collaborationType: "Paid",
    budget: "$800 per recipe",
    deadline: "2025-04-30",
    posted: "2025-03-02",
    requirements: [
      "Experience with recipe development",
      "Strong food styling and photography skills",
      "Ability to create step-by-step cooking content",
      "Engaging presentation style"
    ]
  },
  {
    id: "req-005",
    title: "Travel Photographer for Destination Guides",
    brand: "Wanderlust",
    description: "Wanderlust travel magazine is looking for photographers to create visual content for our online destination guides. We need photographers who can capture the essence of locations, from iconic landmarks to hidden gems. The content will be featured in our digital city guides and social media channels.",
    platform: "Portfolio Submission",
    category: "Travel",
    collaborationType: "Paid",
    budget: "$2,500 per destination",
    deadline: "2025-05-15",
    posted: "2025-02-20",
    requirements: [
      "Professional photography equipment",
      "Previous travel photography experience",
      "Strong portfolio demonstrating variety of styles",
      "Ability to tell stories through images"
    ]
  },
  {
    id: "req-006",
    title: "Beauty Influencer for Skincare Line Launch",
    brand: "Glow Remedy",
    description: "Glow Remedy is launching a new natural skincare line and seeking beauty creators to showcase the products. We're looking for creators who can demonstrate the application of the products, share their honest experiences, and highlight the natural ingredients. The content should focus on the clean beauty aspect and the results over time.",
    platform: "Instagram, YouTube",
    category: "Beauty",
    collaborationType: "Paid",
    budget: "$1,200 - $2,500",
    deadline: "2025-04-05",
    posted: "2025-02-27",
    requirements: [
      "Knowledge of skincare ingredients and routines",
      "Ability to create before/after content",
      "Minimum 15,000 followers with engaged beauty audience",
      "Professional content quality"
    ]
  },
  {
    id: "req-007",
    title: "Tech Reviewer for New Gadget Coverage",
    brand: "TechEdge",
    description: "TechEdge is seeking tech reviewers to create in-depth reviews of our new smart home devices. We need detailed, honest assessments that showcase the features, setup process, and real-world applications. Looking for reviewers who can explain complex features in an accessible way while demonstrating the product in action.",
    platform: "YouTube",
    category: "Technology",
    collaborationType: "Paid",
    budget: "$2,000 - $3,500",
    deadline: "2025-04-25",
    posted: "2025-03-01",
    requirements: [
      "Experience with tech product reviews",
      "High-quality video production capabilities",
      "Understanding of smart home ecosystem",
      "Minimum 20,000 YouTube subscribers"
    ]
  },
  {
    id: "req-008",
    title: "Parenting Creator for Educational Toy Series",
    brand: "Little Learners",
    description: "Little Learners is looking for parenting content creators to showcase our educational toy series. We need authentic content showing children engaging with our toys, highlighting both the fun and educational aspects. The content should demonstrate how the toys support developmental milestones while keeping children entertained.",
    platform: "Instagram, TikTok, Blog",
    category: "Parenting",
    collaborationType: "Barter",
    deadline: "2025-05-01",
    posted: "2025-02-22",
    requirements: [
      "Parent with children aged 2-8",
      "Authentic parenting content style",
      "Ability to showcase product benefits naturally",
      "Engaged audience of parents"
    ]
  },
  {
    id: "req-009",
    title: "Mental Wellness Advocate for Meditation App",
    brand: "MindfulMoment",
    description: "MindfulMoment meditation app is seeking wellness content creators to share their experiences using our app. We're looking for authentic content about incorporating meditation into daily routines, the benefits experienced, and how specific features of the app support mental wellness. The content should be calming, honest, and inspiring.",
    platform: "Instagram, YouTube, Podcast",
    category: "Wellness",
    collaborationType: "Paid",
    budget: "$1,000 - $1,800",
    deadline: "2025-04-18",
    posted: "2025-02-26",
    requirements: [
      "Personal experience with meditation practices",
      "Authentic approach to wellness content",
      "Ability to create calming, mindful content",
      "Audience interested in mental wellness"
    ]
  },
  {
    id: "req-010",
    title: "DIY Creator for Home Improvement Tutorials",
    brand: "HomeHack",
    description: "HomeHack is looking for DIY and home improvement creators to develop tutorial content using our tools and products. We need step-by-step guides for beginner-friendly home projects that showcase how our tools make DIY projects accessible to everyone. The content should emphasize both the process and the satisfying results.",
    platform: "YouTube, TikTok",
    category: "DIY & Home",
    collaborationType: "Paid",
    budget: "$1,500 per project",
    deadline: "2025-05-10",
    posted: "2025-02-15",
    requirements: [
      "Experience with DIY projects and basic tools",
      "Ability to create clear tutorial content",
      "Engaging presentation style",
      "High-quality video production capabilities"
    ]
  },
  {
    id: "req-011",
    title: "Student Ambassador for Education Platform",
    brand: "LearnSmart",
    description: "LearnSmart online education platform is seeking student content creators to share their experiences using our platform for studying and skill development. We're looking for authentic content showing how LearnSmart fits into student life, improves learning outcomes, and prepares for future careers.",
    platform: "TikTok, Instagram",
    category: "Education",
    collaborationType: "Unpaid",
    deadline: "2025-04-22",
    posted: "2025-03-01",
    requirements: [
      "Currently enrolled student (high school or university)",
      "Interest in educational content",
      "Engaging personality and presentation style",
      "Creative approach to educational topics"
    ]
  },
  {
    id: "req-012",
    title: "Pet Content Creator for New Toy Line",
    brand: "PawPlay",
    description: "PawPlay is seeking pet content creators to showcase our new line of interactive pet toys. We need engaging content showing pets playing with and enjoying our products. The content should highlight the toys' durability, interactive features, and how they keep pets mentally stimulated and physically active.",
    platform: "Instagram, TikTok",
    category: "Pets",
    collaborationType: "Barter",
    deadline: "2025-04-15",
    posted: "2025-02-28",
    requirements: [
      "Dog or cat owner",
      "Experience creating pet content",
      "Ability to showcase product features naturally",
      "Minimum 5,000 followers with engaged pet-loving audience"
    ]
  }
];