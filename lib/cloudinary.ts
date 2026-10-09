/**
 * Cloudinary High-Performance Image Optimization & CDN Asset Registry
 * Provides seamless Cloudinary CDN URL generation with automatic format negotiation (f_auto),
 * adaptive quality (q_auto), and resilient fallbacks.
 */

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '';
const CLOUDINARY_BASE_URL = CLOUD_NAME ? `https://res.cloudinary.com/${CLOUD_NAME}/image/upload` : '';

export interface CloudinaryTransformOptions {
  width?: number;
  height?: number;
  crop?: 'fill' | 'scale' | 'fit' | 'limit' | 'pad';
  quality?: 'auto' | 'auto:best' | 'auto:good' | 'auto:eco' | 'auto:low' | number;
  format?: 'auto' | 'webp' | 'avif' | 'png' | 'jpg';
  blur?: number;
}

/**
 * Builds an optimized Cloudinary delivery URL with transformation parameters.
 */
export function getCloudinaryUrl(
  pathOrId: string,
  options: CloudinaryTransformOptions = {}
): string {
  if (!pathOrId) return '';

  // If already a full Cloudinary URL
  if (pathOrId.startsWith('https://res.cloudinary.com/')) {
    return pathOrId;
  }

  // If it's an external URL (e.g. Unsplash)
  if (pathOrId.startsWith('http://') || pathOrId.startsWith('https://')) {
    if (CLOUD_NAME) {
      const transforms: string[] = ['f_auto', 'q_auto'];
      if (options.width) transforms.push(`w_${options.width}`);
      if (options.height) transforms.push(`h_${options.height}`);
      if (options.crop) transforms.push(`c_${options.crop}`);
      return `https://res.cloudinary.com/${CLOUD_NAME}/image/fetch/${transforms.join(',')}/${encodeURIComponent(pathOrId)}`;
    }
    return pathOrId;
  }

  // Clean local path prefix if provided
  const cleanPath = pathOrId.startsWith('/') ? pathOrId : `/${pathOrId}`;
  const cleanId = pathOrId.replace(/^\/images\//, '').replace(/^\//, '');

  if (CLOUD_NAME) {
    const transforms: string[] = [
      `f_${options.format || 'auto'}`,
      `q_${options.quality || 'auto'}`,
    ];

    if (options.width) transforms.push(`w_${options.width}`);
    if (options.height) transforms.push(`h_${options.height}`);
    if (options.crop) transforms.push(`c_${options.crop}`);
    if (options.blur) transforms.push(`e_blur:${options.blur}`);

    return `${CLOUDINARY_BASE_URL}/${transforms.join(',')}/${cleanId}`;
  }

  return cleanPath;
}

/**
 * Next.js custom image loader for next/image component.
 */
export function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  return getCloudinaryUrl(src, {
    width,
    quality: quality ? quality : 'auto',
    format: 'auto',
  });
}

/**
 * Global Registry of all TSK One IT CDN Assets.
 * If NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is defined, routes through Cloudinary CDN.
 * Otherwise uses local optimized assets with Next.js image optimization.
 */
export const CLOUDINARY_IMAGES = {
  // Brand Logo
  logo: CLOUD_NAME
    ? `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/v1/tskoneit/logo.png`
    : '/images/logo.png',
  logoJpg: CLOUD_NAME
    ? `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/v1/tskoneit/logo.jpg`
    : '/images/logo.jpg',

  // Hero Section Division Slides
  heroDeviceCare: CLOUD_NAME
    ? `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_1920/v1/tskoneit/hero-it-products-device-care.png`
    : '/images/hero-it-products-device-care.png',
  heroSmartHome: CLOUD_NAME
    ? `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_1920/v1/tskoneit/hero-smart-home-solutions.png`
    : '/images/hero-smart-home-solutions.png',
  heroBusinessSolutions: CLOUD_NAME
    ? `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_1920/v1/tskoneit/hero-business-it-solutions.png`
    : '/images/hero-business-it-solutions.png',

  // Category High-Resolution Banners
  bannerDeviceRepair: CLOUD_NAME
    ? `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_1920/v1/tskoneit/device-repair-maintenance-hero.png`
    : '/images/device-repair-maintenance-hero.png',
  bannerItSupport: CLOUD_NAME
    ? `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_1920/v1/tskoneit/it-support-services-hero.jpg`
    : '/images/it-support-services-hero.jpg',
  bannerSmartHome: CLOUD_NAME
    ? `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_1920/v1/tskoneit/smart-home-hero.png`
    : '/images/smart-home-hero.png',
  bannerHomeSecurity: CLOUD_NAME
    ? `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_1920/v1/tskoneit/home-security-hero.png`
    : '/images/home-security-hero.png',
  bannerItInfrastructure: CLOUD_NAME
    ? `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_1920/v1/tskoneit/it-infrastructure-hero.png`
    : '/images/it-infrastructure-hero.png',
  bannerSoftwareAi: CLOUD_NAME
    ? `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_1920/v1/tskoneit/software-and-ai-hero.png`
    : '/images/software-and-ai-hero.png',

  // Division Hub Banners
  divisionDeviceCare: CLOUD_NAME
    ? `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_1600/v1/tskoneit/device-care-hero.png`
    : '/images/device-care-hero.png',
  divisionHomeAutomation: CLOUD_NAME
    ? `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_1600/v1/tskoneit/home-automation-hero.png`
    : '/images/home-automation-hero.png',
  divisionBusinessSolutions: CLOUD_NAME
    ? `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_1600/v1/tskoneit/business-solutions-hero.png`
    : '/images/business-solutions-hero.png',
} as const;
