// src/libs/data-brand.ts

export interface Brand {
    id: string;
    name: string;
    logo: string;
    industry: string;
    description: string;
    location: string;
    website: string;
    size: 'Startup' | 'Small' | 'Medium' | 'Enterprise';
    targetAudience: string[];
    campaignBudget: 'Low' | 'Medium' | 'High';
    preferredNiches: string[];
    previousCampaigns?: {
      name: string;
      description: string;
      results: string;
    }[];
  }
  
  const brands: Brand[] = [
    {
      id: "brand1",
      name: "EcoLife",
      logo: "/brands/ecolife.jpg",
      industry: "Sustainable Products",
      description: "EcoLife creates sustainable home products that reduce environmental impact without compromising on quality or design.",
      location: "Portland, OR",
      website: "www.ecolife-home.com",
      size: "Medium",
      targetAudience: ["Environmentally Conscious", "Homeowners", "25-45 age group"],
      campaignBudget: "Medium",
      preferredNiches: ["Lifestyle", "Home", "Sustainability"],
      previousCampaigns: [
        {
          name: "Zero Waste Challenge",
          description: "Partnered with sustainability influencers for a 30-day zero waste challenge",
          results: "12M impressions, 8% engagement rate"
        }
      ]
    },
    {
      id: "brand2",
      name: "TechNova",
      logo: "/brands/technova.jpg",
      industry: "Consumer Electronics",
      description: "TechNova develops cutting-edge consumer electronics with a focus on innovative features and user-friendly design.",
      location: "Austin, TX",
      website: "www.technova.io",
      size: "Enterprise",
      targetAudience: ["Tech Enthusiasts", "Early Adopters", "Professionals"],
      campaignBudget: "High",
      preferredNiches: ["Tech", "Gaming", "Productivity"],
      previousCampaigns: [
        {
          name: "Next-Gen Launch",
          description: "Major product launch campaign with tech reviewers and lifestyle influencers",
          results: "35M impressions, 15% increase in sales"
        }
      ]
    },
    {
      id: "brand3",
      name: "Vitality Nutrition",
      logo: "/brands/vitality.jpg",
      industry: "Health & Wellness",
      description: "Vitality Nutrition offers premium, science-backed supplements and nutrition products for optimal health and performance.",
      location: "Denver, CO",
      website: "www.vitalitynutrition.com",
      size: "Medium",
      targetAudience: ["Fitness Enthusiasts", "Health-Conscious Consumers", "Athletes"],
      campaignBudget: "Medium",
      preferredNiches: ["Fitness", "Health", "Nutrition"],
      previousCampaigns: [
        {
          name: "Transformation Stories",
          description: "Series featuring real people and their health transformations with Vitality products",
          results: "5M impressions, 22% increase in new customers"
        }
      ]
    },
    {
      id: "brand4",
      name: "Urban Style",
      logo: "/brands/urbanstyle.jpg",
      industry: "Fashion",
      description: "Urban Style creates trendy, affordable clothing for fashion-forward young adults who want to express their individuality.",
      location: "New York, NY",
      website: "www.urbanstyleclothing.com",
      size: "Medium",
      targetAudience: ["Gen Z", "Young Professionals", "Fashion Enthusiasts"],
      campaignBudget: "Medium",
      preferredNiches: ["Fashion", "Lifestyle", "Street Style"],
      previousCampaigns: [
        {
          name: "Street Style Collective",
          description: "Collaboration with street style influencers to showcase seasonal collections",
          results: "18M impressions, 200% ROI"
        }
      ]
    },
    {
      id: "brand5",
      name: "WanderLux",
      logo: "/brands/wanderlux.jpg",
      industry: "Travel & Hospitality",
      description: "WanderLux offers curated travel experiences and luxury accommodations for adventurous travelers seeking authentic experiences.",
      location: "Miami, FL",
      website: "www.wanderluxtravel.com",
      size: "Small",
      targetAudience: ["Luxury Travelers", "Adventure Seekers", "Digital Nomads"],
      campaignBudget: "High",
      preferredNiches: ["Travel", "Luxury", "Adventure"],
      previousCampaigns: [
        {
          name: "Hidden Gems",
          description: "Travel influencers showcased off-the-beaten-path luxury destinations",
          results: "8M impressions, 300% increase in bookings for featured locations"
        }
      ]
    },
    {
      id: "brand6",
      name: "PetPals",
      logo: "/brands/petpals.jpg",
      industry: "Pet Care",
      description: "PetPals creates premium pet food, treats, and accessories designed to enhance the bond between pets and their owners.",
      location: "Chicago, IL",
      website: "www.petpals.com",
      size: "Medium",
      targetAudience: ["Pet Owners", "Animal Lovers", "Families"],
      campaignBudget: "Medium",
      preferredNiches: ["Pets", "Lifestyle", "Family"],
      previousCampaigns: [
        {
          name: "Rescue Stories",
          description: "Campaign highlighting rescue pet stories and the importance of adoption",
          results: "10M impressions, 15K donations to animal shelters"
        }
      ]
    },
    {
      id: "brand7",
      name: "Nourish",
      logo: "/brands/nourish.jpg",
      industry: "Food & Beverage",
      description: "Nourish creates plant-based, organic food products that are both healthy and delicious, with sustainable packaging.",
      location: "San Francisco, CA",
      website: "www.nourishfoods.com",
      size: "Small",
      targetAudience: ["Health-Conscious Consumers", "Vegans/Vegetarians", "Environmentally Conscious"],
      campaignBudget: "Low",
      preferredNiches: ["Food", "Health", "Sustainability"],
      previousCampaigns: [
        {
          name: "Plant-Powered Recipes",
          description: "Food influencers created original recipes using Nourish products",
          results: "3M impressions, 45K recipe downloads"
        }
      ]
    },
    {
      id: "brand8",
      name: "InnovateLab",
      logo: "/brands/innovatelab.jpg",
      industry: "SaaS & Technology",
      description: "InnovateLab develops productivity software solutions that help small businesses streamline operations and grow efficiently.",
      location: "Seattle, WA",
      website: "www.innovatelab.tech",
      size: "Startup",
      targetAudience: ["Small Business Owners", "Entrepreneurs", "Freelancers"],
      campaignBudget: "Low",
      preferredNiches: ["Tech", "Business", "Productivity"],
      previousCampaigns: [
        {
          name: "Startup Success Stories",
          description: "Featuring entrepreneurs sharing how InnovateLab tools helped grow their business",
          results: "1.5M impressions, 22% increase in free trial signups"
        }
      ]
    },
    {
      id: "brand9",
      name: "Luminance Beauty",
      logo: "/brands/luminance.jpg",
      industry: "Beauty & Cosmetics",
      description: "Luminance creates clean, cruelty-free beauty products formulated with high-performance natural ingredients.",
      location: "Los Angeles, CA",
      website: "www.luminancebeauty.com",
      size: "Medium",
      targetAudience: ["Beauty Enthusiasts", "Ethical Consumers", "Women 18-45"],
      campaignBudget: "High",
      preferredNiches: ["Beauty", "Skincare", "Lifestyle"],
      previousCampaigns: [
        {
          name: "Real Beauty Results",
          description: "Before and after campaign showing real results with Luminance products",
          results: "25M impressions, 18% increase in new customer acquisition"
        }
      ]
    },
    {
      id: "brand10",
      name: "GreenHome",
      logo: "/brands/greenhome.jpg",
      industry: "Home & Garden",
      description: "GreenHome offers sustainable home furnishings and decor items that combine style, functionality, and eco-consciousness.",
      location: "Boston, MA",
      website: "www.greenhome.com",
      size: "Small",
      targetAudience: ["Homeowners", "Interior Design Enthusiasts", "Eco-Conscious Consumers"],
      campaignBudget: "Medium",
      preferredNiches: ["Home Decor", "Sustainability", "Lifestyle"],
      previousCampaigns: [
        {
          name: "Sustainable Spaces",
          description: "Home influencers showcased room makeovers using GreenHome products",
          results: "7M impressions, 12K products sold directly from campaign"
        }
      ]
    }
  ];
  
  // Group brands by industry
  export const getBrandsByIndustry = () => {
    const industries: { [key: string]: Brand[] } = {};
    
    brands.forEach(brand => {
      if (!industries[brand.industry]) {
        industries[brand.industry] = [];
      }
      industries[brand.industry].push(brand);
    });
    
    return industries;
  };
  
  // Group brands by size
  export const getBrandsBySize = () => {
    return {
      Startup: brands.filter(brand => brand.size === 'Startup'),
      Small: brands.filter(brand => brand.size === 'Small'),
      Medium: brands.filter(brand => brand.size === 'Medium'),
      Enterprise: brands.filter(brand => brand.size === 'Enterprise')
    };
  };
  
  // Group brands by budget
  export const getBrandsByBudget = () => {
    return {
      Low: brands.filter(brand => brand.campaignBudget === 'Low'),
      Medium: brands.filter(brand => brand.campaignBudget === 'Medium'),
      High: brands.filter(brand => brand.campaignBudget === 'High')
    };
  };
  
  // Get all brands
  export const getAllBrands = () => brands;
  
  // Get brands by preferred niche
  export const getBrandsByNiche = (niche: string) => {
    return brands.filter(brand => brand.preferredNiches.includes(niche));
  };
  
  export default brands;