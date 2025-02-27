export interface Requirement {
    id: string;
    brand: string;
    title: string;
    description: string;
    collaborationType: 'Paid' | 'Unpaid' | 'Barter';
    budget?: string;
    deadline: string;
    platform: string;
    category: string;
    image: string;
  }
  
  export const requirements: Requirement[] = [
    {
      id: '1',
      brand: 'FitnessPro',
      title: 'Workout Equipment Promotion',
      description: 'Looking for fitness influencers to promote our new line of home workout equipment. We need content creators who can showcase the proper use of resistance bands, dumbbells, and yoga mats in home workout routines. Ideal candidates have an engaged audience interested in fitness, home workouts, or healthy lifestyles. The collaboration includes creating 3 posts featuring our products in use.',
      collaborationType: 'Paid',
      budget: '$500-$1000',
      deadline: '2025-03-15',
      platform: 'Instagram',
      category: 'Fitness',
      image: '/images/fitness.jpg'
    },
    {
      id: '2',
      brand: 'EcoFriendly',
      title: 'Sustainable Product Review',
      description: 'Seeking environmentally-conscious content creators to review our sustainable household products. We\'ve developed a line of biodegradable cleaning supplies and would like honest reviews from influencers who value sustainability. In exchange for your review, you\'ll receive a complete set of our products. We\'re looking for detailed feedback on effectiveness, scent, packaging, and overall experience.',
      collaborationType: 'Barter',
      deadline: '2025-03-20',
      platform: 'YouTube',
      category: 'Lifestyle',
      image: '/images/eco.jpg'
    },
    {
      id: '3',
      brand: 'TechGadgets',
      title: 'New Smartphone Feature Showcase',
      description: 'Tech influencers needed to demonstrate unique features of our latest smartphone. We\'re looking for creators who can highlight our new AI-powered camera capabilities, extended battery life, and innovative user interface. Content should be creative and demonstrate how these features enhance the user experience. The collaboration includes one sponsored video and two social media posts.',
      collaborationType: 'Paid',
      budget: '$1000-$2000',
      deadline: '2025-04-01',
      platform: 'TikTok, Instagram',
      category: 'Technology',
      image: '/images/tech.jpg'
    },
    {
      id: '4',
      brand: 'BeautyEssentials',
      title: 'Natural Makeup Tutorial',
      description: 'Beauty creators to showcase our organic makeup line in a tutorial format. We would like to feature our products in a "natural everyday look" tutorial that highlights the clean ingredients and skin benefits. This is an opportunity to be featured on our brand page and gain exposure to our audience. While this is unpaid, we will provide full-size products for the tutorial.',
      collaborationType: 'Unpaid',
      deadline: '2025-03-25',
      platform: 'Instagram, YouTube',
      category: 'Beauty',
      image: '/images/beauty.jpg'
    },
    {
      id: '5',
      brand: 'FoodieDelight',
      title: 'Recipe Development with Our Ingredients',
      description: 'Calling all food content creators! We\'re looking for influencers to develop unique recipes using our specialty sauces and condiments. You\'ll receive our complete product line and compensation for creating two original recipes with high-quality photos or videos showcasing the cooking process and final dish.',
      collaborationType: 'Paid',
      budget: '$300-$600',
      deadline: '2025-04-10',
      platform: 'Instagram, TikTok',
      category: 'Food',
      image: '/images/food.jpg'
    },
    {
      id: '6',
      brand: 'TravelEssentials',
      title: 'Travel Accessory Feature',
      description: 'Travel influencers wanted to showcase our innovative travel accessories in real-world situations. We\'ll provide our compact luggage organizers, tech pouches, and travel pillows for you to feature in your content. In exchange, you keep the products and we\'ll share your content on our channels.',
      collaborationType: 'Barter',
      deadline: '2025-04-15',
      platform: 'Instagram, Blog',
      category: 'Travel',
      image: '/images/travel.jpg'
    },
    {
      id: '7',
      brand: 'GamingGear',
      title: 'Gaming Peripherals Review',
      description: 'Gaming content creators needed to review our new line of gaming keyboards, mice, and headsets. We\'re looking for detailed reviews that showcase the features, performance, and value of our products compared to competitors. This is a high-visibility campaign with substantial compensation.',
      collaborationType: 'Paid',
      budget: '$800-$1500',
      deadline: '2025-03-30',
      platform: 'YouTube, Twitch',
      category: 'Gaming',
      image: '/images/gaming.jpg'
    },
    {
      id: '8',
      brand: 'PetLovers',
      title: 'Pet Product Testimonial',
      description: 'Looking for pet influencers to try our new organic pet treats and provide authentic testimonials. Simply share your pet\'s experience with our products in a natural, engaging way. We\'ll provide a 3-month supply of treats for your participation.',
      collaborationType: 'Barter',
      deadline: '2025-04-05',
      platform: 'Instagram, TikTok',
      category: 'Pets',
      image: '/images/pets.jpg'
    }
  ];