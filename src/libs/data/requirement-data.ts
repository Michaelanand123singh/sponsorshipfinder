// requirements-data.tsx
export interface SponsorshipRequirement {
  id: string;
  title: string;
  description: string;
  category: string;
  brandName: string;
  budgetRange: {
    min: number;
    max: number;
  };
  createdAt: string;
  deadline?: string;
  followersRequired?: number;
  platforms?: string[];
  location?: string;
}

export const requirements: SponsorshipRequirement[] = [
  {
    id: 'req-001',
    title: 'Fitness Apparel Promotion',
    description: 'Looking for fitness influencers to showcase our new athletic wear collection with authentic workout content.',
    category: 'Fitness',
    brandName: 'FlexFit Athletics',
    budgetRange: { min: 1000, max: 5000 },
    createdAt: '2025-03-01T10:00:00Z',
    deadline: '2025-04-15T23:59:59Z',
    followersRequired: 50000,
    platforms: ['Instagram', 'TikTok'],
    location: 'United States'
  },
  {
    id: 'req-002',
    title: 'Organic Skincare Review',
    description: 'Seeking beauty influencers to review our new organic skincare line. Must have experience with skincare content.',
    category: 'Beauty',
    brandName: 'Pure Essence',
    budgetRange: { min: 2000, max: 8000 },
    createdAt: '2025-03-05T14:30:00Z',
    deadline: '2025-03-30T23:59:59Z',
    followersRequired: 75000,
    platforms: ['YouTube', 'Instagram'],
    location: 'Global'
  },
  {
    id: 'req-003',
    title: 'Travel Vlog Sponsorship',
    description: 'Looking for travel content creators to feature our luggage brand in their upcoming travel vlogs.',
    category: 'Travel',
    brandName: 'Voyage Gear',
    budgetRange: { min: 3000, max: 15000 },
    createdAt: '2025-03-07T09:15:00Z',
    deadline: '2025-05-01T23:59:59Z',
    followersRequired: 100000,
    platforms: ['YouTube', 'Instagram', 'TikTok'],
    location: 'Europe, Asia, North America'
  },
  {
    id: 'req-004',
    title: 'Gaming Peripheral Showcase',
    description: 'Seeking gaming influencers to review and showcase our new line of mechanical keyboards and gaming mice.',
    category: 'Gaming',
    brandName: 'NextLevel Gaming',
    budgetRange: { min: 500, max: 3000 },
    createdAt: '2025-03-08T16:45:00Z',
    deadline: '2025-04-10T23:59:59Z',
    followersRequired: 25000,
    platforms: ['Twitch', 'YouTube', 'TikTok'],
    location: 'Global'
  },
  {
    id: 'req-005',
    title: 'Cooking Recipe Integration',
    description: 'Looking for food influencers to create recipes using our premium ingredients and kitchen tools.',
    category: 'Food',
    brandName: 'Gourmet Essentials',
    budgetRange: { min: 800, max: 4000 },
    createdAt: '2025-03-09T11:20:00Z',
    deadline: '2025-04-25T23:59:59Z',
    followersRequired: 35000,
    platforms: ['Instagram', 'TikTok', 'YouTube'],
    location: 'United States, Canada, UK'
  },
];