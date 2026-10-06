# TSK One IT Image Assets

Store optimized production imagery here.

### Guidelines:
- **Formats:** `.webp` or `.avif` for optimal compression and Lighthouse performance.
- **Recommended dimensions:**
  - Hero Background: `1920x1080` (compressed to < 120KB)
  - Service Thumbnails: `800x480` (compressed to < 45KB each)
  - Smart Automation Thumbnails: `600x400`
- **Naming Conventions:**
  - `hero-building.webp`
  - `service-01-it-repairs.webp`
  - `service-02-networking.webp`
  - `service-03-servers.webp`
  - `service-04-cctv.webp`
  - `service-05-cybersecurity.webp`
  - `service-06-biometrics.webp`
  - `service-07-cloud.webp`
  - `service-08-applications.webp`
  - `service-09-managed-it.webp`

The `SmartPhotoCard` component (`components/SmartPhotoCard.tsx`) automatically supports passing `imageSrc="/images/service-01-it-repairs.webp"` and provides high-performance responsive sizes and lazy-loading.
