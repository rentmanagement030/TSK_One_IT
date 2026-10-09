import { MetadataRoute } from 'next';
import { allServicesList } from '@/lib/servicesData';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tskoneit.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Primary static routes
  const staticRoutes: MetadataRoute.Sitemap = [
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
    // 3. Contact & About
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dedicated sub-service detail pages
  const serviceRoutes: MetadataRoute.Sitemap = allServicesList.map((service) => ({
    url: `${BASE_URL}/service/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
