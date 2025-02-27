// src/libs/data-influencer.ts

export interface Influencer {
    id: string;
    name: string;
    image: string;
    niche: string;
    followers: number;
    engagement: number;
    platforms: string[];
    bio: string;
    location: string;
    averageLikes: number;
    averageComments: number;
    contentTypes: string[];
    previousBrands?: string[];
  }
  
  const influencers: Influencer[] = [
    {
      id: "inf1",
      name: "Sarah Johnson",
      image: "/influencers/sarah-johnson.jpg", // These would be placeholder paths
      niche: "Fitness",
      followers: 450000,
      engagement: 3.2,
      platforms: ["Instagram", "TikTok", "YouTube"],
      bio: "Certified personal trainer sharing workout tips and nutritional advice.",
      location: "Los Angeles, CA",
      averageLikes: 32000,
      averageComments: 1200,
      contentTypes: ["Workout Videos", "Meal Prep", "Fitness Challenges"],
      previousBrands: ["Nike", "Gymshark", "MyProtein"]
    },
    {
      id: "inf2",
      name: "Michael Chen",
      image: "/influencers/michael-chen.jpg",
      niche: "Tech",
      followers: 780000,
      engagement: 2.8,
      platforms: ["YouTube", "Twitter", "Instagram"],
      bio: "Tech reviewer and software engineer discussing the latest in consumer electronics.",
      location: "San Francisco, CA",
      averageLikes: 45000,
      averageComments: 3500,
      contentTypes: ["Product Reviews", "Tutorials", "Industry News"],
      previousBrands: ["Samsung", "Razer", "Logitech"]
    },
    {
      id: "inf3",
      name: "Aisha Patel",
      image: "/influencers/aisha-patel.jpg",
      niche: "Beauty",
      followers: 1200000,
      engagement: 4.1,
      platforms: ["Instagram", "TikTok", "YouTube"],
      bio: "Makeup artist and skincare enthusiast sharing beauty tips and product reviews.",
      location: "New York, NY",
      averageLikes: 89000,
      averageComments: 5200,
      contentTypes: ["Makeup Tutorials", "Skincare Routines", "Product Reviews"],
      previousBrands: ["Fenty Beauty", "Glossier", "Tatcha"]
    },
    {
      id: "inf4",
      name: "Carlos Rodriguez",
      image: "/influencers/carlos-rodriguez.jpg",
      niche: "Travel",
      followers: 630000,
      engagement: 3.5,
      platforms: ["Instagram", "YouTube", "Blog"],
      bio: "Full-time traveler sharing hidden gems and budget travel tips.",
      location: "Miami, FL",
      averageLikes: 48000,
      averageComments: 2800,
      contentTypes: ["Travel Vlogs", "Destination Guides", "Travel Hacks"],
      previousBrands: ["Airbnb", "Away Luggage", "GoPro"]
    },
    {
      id: "inf5",
      name: "Emma Williams",
      image: "/influencers/emma-williams.jpg",
      niche: "Fashion",
      followers: 920000,
      engagement: 3.8,
      platforms: ["Instagram", "TikTok", "Pinterest"],
      bio: "Fashion stylist and sustainable fashion advocate.",
      location: "London, UK",
      averageLikes: 76000,
      averageComments: 4100,
      contentTypes: ["Outfit Ideas", "Fashion Hauls", "Style Tips"],
      previousBrands: ["Zara", "H&M", "ASOS"]
    },
    {
      id: "inf6",
      name: "David Kim",
      image: "/influencers/david-kim.jpg",
      niche: "Food",
      followers: 580000,
      engagement: 4.3,
      platforms: ["Instagram", "TikTok", "YouTube"],
      bio: "Professional chef sharing recipes and cooking techniques.",
      location: "Chicago, IL",
      averageLikes: 42000,
      averageComments: 3200,
      contentTypes: ["Recipe Videos", "Restaurant Reviews", "Kitchen Tips"],
      previousBrands: ["KitchenAid", "Blue Apron", "Sur La Table"]
    },
    {
      id: "inf7",
      name: "Olivia Brown",
      image: "/influencers/olivia-brown.jpg",
      niche: "Lifestyle",
      followers: 820000,
      engagement: 3.6,
      platforms: ["Instagram", "YouTube", "Blog"],
      bio: "Creative director and lifestyle blogger focusing on mindful living.",
      location: "Austin, TX",
      averageLikes: 65000,
      averageComments: 3800,
      contentTypes: ["Home Decor", "Day in the Life", "Wellness Tips"],
      previousBrands: ["West Elm", "Anthropologie", "Ritual"]
    },
    {
      id: "inf8",
      name: "James Wilson",
      image: "/influencers/james-wilson.jpg",
      niche: "Gaming",
      followers: 1500000,
      engagement: 5.2,
      platforms: ["Twitch", "YouTube", "Twitter"],
      bio: "Professional gamer and streamer specializing in FPS games.",
      location: "Seattle, WA",
      averageLikes: 120000,
      averageComments: 8500,
      contentTypes: ["Live Streams", "Game Reviews", "Tutorials"],
      previousBrands: ["Razer", "Red Bull", "Alienware"]
    },
    {
      id: "inf9",
      name: "Sophie Martinez",
      image: "/influencers/sophie-martinez.jpg",
      niche: "Parenting",
      followers: 350000,
      engagement: 4.8,
      platforms: ["Instagram", "TikTok", "Blog"],
      bio: "Mom of three sharing parenting tips, activities, and family adventures.",
      location: "Denver, CO",
      averageLikes: 28000,
      averageComments: 2400,
      contentTypes: ["Parenting Tips", "Kid Activities", "Family Vlogs"],
      previousBrands: ["Pampers", "Fisher-Price", "Gerber"]
    },
    {
      id: "inf10",
      name: "Ryan Lee",
      image: "/influencers/ryan-lee.jpg",
      niche: "Finance",
      followers: 420000,
      engagement: 2.9,
      platforms: ["YouTube", "Twitter", "LinkedIn"],
      bio: "Financial advisor sharing investment strategies and personal finance tips.",
      location: "Boston, MA",
      averageLikes: 32000,
      averageComments: 2700,
      contentTypes: ["Investment Tips", "Financial Education", "Market Analysis"],
      previousBrands: ["Robinhood", "Wealthfront", "Acorns"]
    }
  ];
  
  // Group influencers by niche
  export const getInfluencersByNiche = () => {
    const niches: { [key: string]: Influencer[] } = {};
    
    influencers.forEach(influencer => {
      if (!niches[influencer.niche]) {
        niches[influencer.niche] = [];
      }
      niches[influencer.niche].push(influencer);
    });
    
    return niches;
  };
  
  // Group influencers by follower count
  export const getInfluencersByFollowerRange = () => {
    return {
      micro: influencers.filter(inf => inf.followers < 100000),
      small: influencers.filter(inf => inf.followers >= 100000 && inf.followers < 500000),
      medium: influencers.filter(inf => inf.followers >= 500000 && inf.followers < 1000000),
      large: influencers.filter(inf => inf.followers >= 1000000)
    };
  };
  
  // Get all influencers
  export const getAllInfluencers = () => influencers;
  
  // Get influencers by platform
  export const getInfluencersByPlatform = (platform: string) => {
    return influencers.filter(inf => inf.platforms.includes(platform));
  };
  
  export default influencers;