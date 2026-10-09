import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tskoneit.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return [
    // 1. Homepage
    {
      url: `${BASE_URL}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // 2. Primary Service Verticals
    {
      url: `${BASE_URL}/device-repair-and-maintenance`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/it-support-services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/smart-home`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/home-security`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/it-infrastructure-and-cloud`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/software-and-ai`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // 3. Contact & Enquiry
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // 4. Division Landing Hubs
    {
      url: `${BASE_URL}/device-care`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/home-automation`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/business-solutions`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
