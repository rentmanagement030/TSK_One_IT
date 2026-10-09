export interface SubServiceDetail {
  slug: string;
  title: string;
  category: string;
  parentSlug: string;
  parentTitle: string;
  division: string;
  divisionSlug: string;
  description: string;
  secondaryDescription?: string;
  image: string;
  highlights: string[];
  metaTitle: string;
  metaDescription: string;
}

export const allServicesList: SubServiceDetail[] = [
  // ==========================================
  // IT DEVICE CARE -> Device Repair & Maintenance
  // ==========================================
  {
    slug: 'laptop-and-desktop-repair',
    title: 'Laptop & Desktop Repair',
    category: 'DEVICE REPAIR & MAINTENANCE',
    parentSlug: '/device-repair-and-maintenance',
    parentTitle: 'Device Repair & Maintenance',
    division: 'IT Device Care',
    divisionSlug: '/device-repair-and-maintenance',
    description: 'Precision hardware diagnostics and certified repair solutions for all major laptop and desktop brands including Dell, HP, Lenovo, Asus, Acer, and custom desktop builds. Our certified lab engineers remediate cracked screens, faulty power rails, cooling fan failures, charging port faults, and operating system instability.',
    secondaryDescription: 'Every repair undergoes rigorous quality assurance benchmarks, multi-point diagnostic testing, and thermal burn-in validation before return dispatch, ensuring dependable performance and OEM-grade reliability.',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Cracked LED/IPS Screen & Display Assembly Replacement',
      'Keyboard, Trackpad & Internal Battery Replacements',
      'Motherboard DC Jack & Power Rail Soldering',
      'Thermal Paste Deep Servicing & Cooling System Overhaul',
      'High-Speed NVMe SSD & DDR4/DDR5 RAM Upgrades',
      'Certified Lab Diagnostics with Fast Turnaround'
    ],
    metaTitle: 'Laptop & Desktop Repair Services in Chennai | TSK One IT',
    metaDescription: 'Expert laptop and desktop repair services in Chennai. Certified hardware troubleshooting, screen replacement, thermal servicing, and doorstep pickup.',
  },
  {
    slug: 'apple-macbook-repair',
    title: 'Apple MacBook Repair',
    category: 'DEVICE REPAIR & MAINTENANCE',
    parentSlug: '/device-repair-and-maintenance',
    parentTitle: 'Device Repair & Maintenance',
    division: 'IT Device Care',
    divisionSlug: '/device-repair-and-maintenance',
    description: 'Specialized Apple hardware service and logic board diagnostics for MacBook Pro, MacBook Air, iMac, and Mac Mini across Intel, Apple Silicon M1, M2, and M3 architectures. We provide precision micro-soldering, Retina display replacements, liquid spill remediation, and trackpad repairs.',
    secondaryDescription: 'Using ESD-safe cleanroom protocols and OEM-standard diagnostic microscopes, our Apple specialists restore non-booting, liquid-damaged, and logic board faulted Macs to pristine factory operating condition.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Retina Display & True Tone Glass Assembly Replacement',
      'M1/M2/M3 & Intel Logic Board Micro-BGA Soldering',
      'Liquid Damage Corrosion Ultrasonic Cleaning & Recovery',
      'Genuine OEM Battery Replacement with Cycle Calibration',
      'Magic Keyboard, Flexgate & Touch Bar Remediation',
      'macOS Deep System Diagnostics & Kernel Recovery'
    ],
    metaTitle: 'Apple MacBook Repair Specialist in Chennai | TSK One IT',
    metaDescription: 'Expert Apple MacBook repair and logic board micro-soldering in Chennai. Retina screens, battery replacements, and liquid spill recovery.',
  },
  {
    slug: 'chip-level-motherboard-repair',
    title: 'Chip-Level Motherboard Repair',
    category: 'DEVICE REPAIR & MAINTENANCE',
    parentSlug: '/device-repair-and-maintenance',
    parentTitle: 'Device Repair & Maintenance',
    division: 'IT Device Care',
    divisionSlug: '/device-repair-and-maintenance',
    description: 'Advanced micro-soldering and BGA chip rework for complex motherboard faults. Our engineers diagnose short circuits, failed power management ICs (PMICs), MosFET blowouts, charging controllers, and corrupt BIOS firmware chips using digital oscilloscopes and thermal imaging cameras.',
    secondaryDescription: 'Chip-level repair salvages high-value motherboards and logic boards at a fraction of the cost of full motherboard replacements, extending the operational life of mission-critical systems.',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'BGA Chip Reballing & IR Rework Station Reflow',
      'Short Circuit Tracing with FLIR Thermal Imaging',
      'Power Management IC (PMIC) & MosFET Replacement',
      'BIOS Chip SPI Desoldering & Clean Firmware Flashing',
      'Multi-Layer PCB Trace Repair & Jumper Soldering',
      'Precision Lab Testing with Digital Oscilloscopes'
    ],
    metaTitle: 'Chip-Level Motherboard Repair in Chennai | TSK One IT',
    metaDescription: 'Advanced chip-level motherboard repair in Chennai. BGA rework, micro-soldering, short circuit diagnostics, and BIOS flashing.',
  },
  {
    slug: 'data-recovery',
    title: 'Data Recovery',
    category: 'DEVICE REPAIR & MAINTENANCE',
    parentSlug: '/device-repair-and-maintenance',
    parentTitle: 'Device Repair & Maintenance',
    division: 'IT Device Care',
    divisionSlug: '/device-repair-and-maintenance',
    description: 'Professional data recovery solutions for mechanically damaged hard drives (HDD), failing SSDs, NVMe drives, USB flash storage, and multi-disk RAID arrays. We handle head assembly crashes, bad sectors, firmware corruption, deleted partitions, and ransomware encryption incidents.',
    secondaryDescription: 'With strict confidentiality agreements and proprietary clean-room recovery procedures, we maximize file recovery rates for critical corporate databases, accounting records, and personal media.',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Mechanical Hard Disk (HDD) Cleanroom Platter Recovery',
      'Non-Volatile NAND Flash & SSD Controller Bypassing',
      'Corrupted RAID 0/1/5/10 Array Rebuilding & Extraction',
      'Accidental Format & Deleted File Reconstruction',
      'Encrypted & Corrupted Database File Restoration',
      '100% Secure Data Privacy & NDA-Protected Handling'
    ],
    metaTitle: 'Emergency Data Recovery Services in Chennai | TSK One IT',
    metaDescription: 'Professional data recovery for HDD, SSD, NVMe, and RAID storage. High recovery success rates with strict data privacy protection.',
  },
  {
    slug: 'ssd-and-ram-upgrades',
    title: 'SSD & RAM Upgrades',
    category: 'DEVICE REPAIR & MAINTENANCE',
    parentSlug: '/device-repair-and-maintenance',
    parentTitle: 'Device Repair & Maintenance',
    division: 'IT Device Care',
    divisionSlug: '/device-repair-and-maintenance',
    description: 'Speed up sluggish laptops and desktops with high-performance Gen4/Gen3 NVMe SSDs and high-capacity DDR4/DDR5 RAM upgrades. Experience up to 10x faster boot times, instantaneous application launches, and smooth multi-tasking for engineering software, video editing, and gaming.',
    secondaryDescription: 'Includes complete 1:1 drive cloning, operating system migration, and thermal pad application, ensuring seamless transition without losing a single file, program, or configuration.',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Ultra-Fast M.2 NVMe & SATA SSD Installation',
      'High-Speed DDR4 / DDR5 RAM Capacity Expansion',
      'Bit-by-Bit OS & Data Cloning with Zero Data Loss',
      'BIOS Firmware Tuning for Optimal Bus Speed',
      'Thermal Heat-Sink Padding for Sustained Throughput',
      'Instant Boot Speed & Productivity Performance Boost'
    ],
    metaTitle: 'Laptop & PC SSD & RAM Upgrades | TSK One IT',
    metaDescription: 'Upgrade laptop and desktop speed with high-performance NVMe SSDs and DDR4/DDR5 RAM. Complete seamless OS migration with zero data loss.',
  },
  {
    slug: 'genuine-spare-parts',
    title: 'Genuine Spare Parts',
    category: 'DEVICE REPAIR & MAINTENANCE',
    parentSlug: '/device-repair-and-maintenance',
    parentTitle: 'Device Repair & Maintenance',
    division: 'IT Device Care',
    divisionSlug: '/device-repair-and-maintenance',
    description: '100% factory-authentic replacement parts and certified components for all major computer brands. We stock Grade-A OEM replacement screens, genuine lithium-ion batteries, original power adapters, backlit keyboards, cooling fans, and precision chassis hinges.',
    secondaryDescription: 'All components are sourced directly through authorized supply channels, backed by full manufacturer warranties and rigorous voltage-testing standards.',
    image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'OEM Certified Laptop Batteries & Original Chargers',
      'High-Resolution IPS, OLED & Retina Display Panels',
      'Original Backlit Keyboards & Multi-Touch Trackpads',
      'Precision Metal Hinges & Top Case Palmrest Assemblies',
      'Certified Cooling Fans & Copper Heatpipe Modules',
      'Manufacturer Warranty on All Authentic Replacement Parts'
    ],
    metaTitle: 'Genuine Laptop & PC Spare Parts | TSK One IT',
    metaDescription: 'Source genuine laptop and desktop spare parts in Chennai. OEM batteries, chargers, screens, and keyboards with authentic warranty.',
  },

  // ==========================================
  // IT DEVICE CARE -> IT Support Services
  // ==========================================
  {
    slug: 'amc-annual-maintenance-contracts',
    title: 'AMC / Annual Maintenance Contracts',
    category: 'IT SUPPORT SERVICES',
    parentSlug: '/it-support-services',
    parentTitle: 'IT Support Services',
    division: 'IT Device Care',
    divisionSlug: '/device-repair-and-maintenance',
    description: 'Comprehensive and non-comprehensive Annual Maintenance Contracts designed for businesses, schools, healthcare institutions, and residential clients. Our AMC packages guarantee proactive preventive maintenance, rapid incident response SLAs, and dedicated technical engineers.',
    secondaryDescription: 'We keep your entire hardware infrastructure running at peak efficiency, minimizing downtime and eliminating unexpected emergency IT repair expenses.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Scheduled Preventive Maintenance & Deep Hardware Audits',
      'Guaranteed 2-Hour SLA Incident Response Times',
      'Comprehensive Hardware Replacement & Labor Coverage',
      'Dedicated Account Manager & Tier-2 Support Engineers',
      'Antivirus, Security Patches & Software Updates',
      'Transparent Monthly Health Reports & Asset Tracking'
    ],
    metaTitle: 'Corporate IT AMC Contracts in Chennai | TSK One IT',
    metaDescription: 'Customized IT Annual Maintenance Contracts (AMC) for businesses in Chennai. SLA-backed hardware support, preventive audits, and 24/7 helpdesk.',
  },
  {
    slug: 'doorstep-pickup-and-delivery',
    title: 'Doorstep Pickup & Delivery',
    category: 'IT SUPPORT SERVICES',
    parentSlug: '/it-support-services',
    parentTitle: 'IT Support Services',
    division: 'IT Device Care',
    divisionSlug: '/device-repair-and-maintenance',
    description: 'Convenient, hassle-free doorstep collection and return delivery for computer repairs across Chennai. Our logistics team securely transports your laptop, Mac, or desktop in ESD-padded protective transit cases directly to our state-of-the-art diagnostic facility.',
    secondaryDescription: 'Track your device status in real time, receive an upfront transparent quotation before repair initiation, and enjoy secure delivery back to your doorstep upon completion.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Same-Day Scheduled Pickup Across All Chennai Localities',
      'Anti-Static ESD Padded Shockproof Transit Cases',
      'Digital Acknowledgment Slip & Real-Time Job Tracking',
      'Free Initial Diagnosis & Upfront Transparent Quotation',
      'Cleaned & Sanitized Safe Return Handover',
      'Contactless Payment & Digital Invoice Settlement'
    ],
    metaTitle: 'Doorstep Laptop & Computer Repair in Chennai | TSK One IT',
    metaDescription: 'Free doorstep pickup and delivery for computer and MacBook repair in Chennai. Safe transport, transparent diagnosis, and fast turnaround.',
  },
  {
    slug: 'it-troubleshooting',
    title: 'IT Troubleshooting',
    category: 'IT SUPPORT SERVICES',
    parentSlug: '/it-support-services',
    parentTitle: 'IT Support Services',
    division: 'IT Device Care',
    divisionSlug: '/device-repair-and-maintenance',
    description: 'Rapid remote and onsite diagnostic support for stubborn software bugs, Blue Screen of Death (BSOD) crashes, network connectivity issues, printer offline errors, and slow computer performance. Our engineers quickly isolate root causes and restore normal operation.',
    secondaryDescription: 'Available for both immediate emergency remote screen-sharing sessions and scheduled onsite technician visits for complex corporate environments.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Instant Remote Helpdesk Screen-Sharing Support',
      'BSOD & Operating System Crash Root-Cause Resolution',
      'Office Network, Wi-Fi & Shared Printer Troubleshooting',
      'Malware Quarantine, Spyware & Adware Disinfection',
      'Application Configuration & License Activation',
      'Startup Optimization & Disk Bottleneck Clearing'
    ],
    metaTitle: 'Professional IT Troubleshooting & Helpdesk | TSK One IT',
    metaDescription: 'Fast remote and onsite IT troubleshooting in Chennai. BSOD fixes, software cleanup, network connectivity, and printer configuration.',
  },
  {
    slug: 'managed-device-support',
    title: 'Managed Device Support',
    category: 'IT SUPPORT SERVICES',
    parentSlug: '/it-support-services',
    parentTitle: 'IT Support Services',
    division: 'IT Device Care',
    divisionSlug: '/device-repair-and-maintenance',
    description: 'End-to-end device fleet management for growing organizations. We handle laptop provisioning, secure disk encryption, endpoint antivirus deployments, automated patch management, and off-boarding data wipes across remote and hybrid team workforces.',
    secondaryDescription: 'Empower your employees with standardized, secure workstations while maintaining complete centralized IT oversight and enterprise compliance.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Standardized Workstation Imaging & Rapid Provisioning',
      'Mobile Device Management (MDM) & Policy Enforcement',
      'Automated OS & Third-Party Application Patching',
      'BitLocker & FileVault Disk Encryption Management',
      'Centralized Endpoint Antivirus & Threat Detection',
      'Secure Employee Off-boarding & Remote Data Wiping'
    ],
    metaTitle: 'Managed Device Support & Endpoint MDM | TSK One IT',
    metaDescription: 'Comprehensive managed device support and MDM endpoint management for corporate laptop fleets and hybrid office teams.',
  },

  // ==========================================
  // HOME AUTOMATION -> Smart Home
  // ==========================================
  {
    slug: 'smart-lighting',
    title: 'Smart Lighting',
    category: 'SMART HOME',
    parentSlug: '/smart-home',
    parentTitle: 'Smart Home',
    division: 'Home Automation',
    divisionSlug: '/smart-home',
    description: 'Intelligent architectural and ambient lighting systems for modern homes, luxury villas, and commercial spaces. Create customizable lighting moods, automated circadian daylight schedules, motion-activated illumination, and smartphone/voice-controlled dimming.',
    secondaryDescription: 'Integrates seamlessly with existing wiring or wireless Zigbee / Z-Wave / Matter protocols, providing luxurious aesthetic appeal and significant energy savings.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'RGBW Dynamic Ambient & Cove Lighting Control',
      'Circadian Rhythm Day/Night Tunable White Schedules',
      'Smart Glass Touch Switches with LED Backlighting',
      'Motion & Occupancy Sensor Automated Pathways',
      'Whole-Home "All Off" Master Goodnight Scenes',
      'Energy-Efficient LED Dimming & Power Monitoring'
    ],
    metaTitle: 'Smart Home Lighting Automation in Chennai | TSK One IT',
    metaDescription: 'Transform your living spaces with intelligent smart lighting automation. Touch panels, voice control, automated scenes, and energy efficiency.',
  },
  {
    slug: 'voice-assistants',
    title: 'Voice Assistants',
    category: 'SMART HOME',
    parentSlug: '/smart-home',
    parentTitle: 'Smart Home',
    division: 'Home Automation',
    divisionSlug: '/smart-home',
    description: 'Seamless whole-home integration of Amazon Alexa, Google Assistant, and Apple HomeKit Siri voice control ecosystems. Control lighting, air conditioning, TV home theaters, motorized curtains, and security door locks with natural voice commands.',
    secondaryDescription: 'Our automation specialists configure unified voice routines like "Good Morning", "Movie Time", and "Welcome Home" for effortless smart living.',
    image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Multi-Room Alexa Echo & Google Nest Hub Syncing',
      'Apple HomeKit Siri Native Protocol Integration',
      'Custom Multi-Action Voice Automation Routines',
      'Smart TV, Soundbar & IR Entertainment Control',
      'Voice-Activated Security & Intercom Announcements',
      'Hands-Free Climate & Lighting Modulation'
    ],
    metaTitle: 'Smart Home Voice Assistant Integration | TSK One IT',
    metaDescription: 'Expert Alexa, Google Home, and Apple HomeKit voice automation setup in Chennai. Control your entire smart home with simple voice commands.',
  },
  {
    slug: 'home-wi-fi-and-mesh',
    title: 'Home Wi-Fi & Mesh',
    category: 'SMART HOME',
    parentSlug: '/smart-home',
    parentTitle: 'Smart Home',
    division: 'Home Automation',
    divisionSlug: '/smart-home',
    description: 'Enterprise-grade Wi-Fi 6 / Wi-Fi 6E whole-home mesh networking designed to eliminate dead zones across multi-story villas, large apartments, and outdoor garden areas. Experience seamless roaming, ultra-low latency 4K streaming, and reliable smart IoT device connectivity.',
    secondaryDescription: 'Includes dedicated IoT VLAN isolation, guest network configuration, and parental controls to keep your family and smart home appliances secure from cyber threats.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Gigabit Wi-Fi 6/6E Seamless Mesh Access Points',
      'Zero Dead-Zone Coverage for Multi-Floor Residences',
      'Dedicated Isolated IoT Network for Smart Appliances',
      'High-Speed Low-Latency 4K/8K Video & Gaming',
      'Advanced Parental Controls & Content Filtering',
      'Professional Structured Cat6/Fiber Backbone Cabling'
    ],
    metaTitle: 'Whole-Home Wi-Fi 6 Mesh Networking | TSK One IT',
    metaDescription: 'Eliminate dead zones with enterprise Wi-Fi 6 mesh networking for villas and large homes in Chennai. Seamless roaming and high-speed coverage.',
  },
  {
    slug: 'smart-home-automation',
    title: 'Smart Home Automation',
    category: 'SMART HOME',
    parentSlug: '/smart-home',
    parentTitle: 'Smart Home',
    division: 'Home Automation',
    divisionSlug: '/smart-home',
    description: 'Centralized smart home automation unifying lighting, climate control, motorized blinds, audio-video entertainment, and security into a single intuitive smartphone app and wall-mounted touch console.',
    secondaryDescription: 'Built on robust wireless and wired protocols (Matter, Zigbee, KNX), our custom home automation solutions elevate convenience, comfort, and security for modern lifestyles.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Unified Smartphone App & In-Wall Touch Screen Consoles',
      'Automated Climate & Smart AC Thermostat Scheduling',
      'Motorized Curtain & Blind Sun-Tracking Automation',
      'Multi-Room Audio Streaming & Home Theater Integration',
      'Smart Geyser, Water Tank & Pump Level Controllers',
      'Matter & Zigbee Compatible Future-Proof Technology'
    ],
    metaTitle: 'Complete Smart Home Automation Systems in Chennai | TSK One IT',
    metaDescription: 'Full-service luxury home automation for apartments and villas in Chennai. Unified control of lighting, AC, curtains, and security.',
  },

  // ==========================================
  // HOME AUTOMATION -> Home Security
  // ==========================================
  {
    slug: 'cctv-surveillance',
    title: 'CCTV Surveillance',
    category: 'HOME SECURITY',
    parentSlug: '/home-security',
    parentTitle: 'Home Security',
    division: 'Home Automation',
    divisionSlug: '/smart-home',
    description: 'Ultra-high-definition 4K and AI-powered IP CCTV surveillance systems for homes, apartment complexes, and commercial properties. Features smart human/vehicle AI motion detection, color night vision, two-way audio, and remote mobile viewing anywhere in the world.',
    secondaryDescription: 'Our certified security technicians plan optimal camera placement angles to ensure zero blind spots and provide secure local NVR storage with cloud backup integration.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      '4K Ultra HD & 5MP Starlight Color Night Vision Cameras',
      'AI-Powered Human & Vehicle Shape Recognition Alerts',
      'Remote Live Streaming & Playback on iOS & Android Apps',
      'Two-Way Audio Intercom & Active Deterrent Siren/Lights',
      'Weatherproof IP67 Vandal-Resistant Outer Housings',
      'High-Capacity NVR Hard Drive Storage with Cloud Backup'
    ],
    metaTitle: 'HD & IP CCTV Camera Installation in Chennai | TSK One IT',
    metaDescription: 'Professional 4K CCTV surveillance camera installation in Chennai. AI motion detection, color night vision, and mobile live viewing.',
  },
  {
    slug: 'smart-door-locks',
    title: 'Smart Door Locks',
    category: 'HOME SECURITY',
    parentSlug: '/home-security',
    parentTitle: 'Home Security',
    division: 'Home Automation',
    divisionSlug: '/smart-home',
    description: 'Keyless biometric smart door locks offering multi-factor access via high-precision fingerprint recognition, encrypted RFID cards, digital PIN codes, mobile Bluetooth/Wi-Fi unlocking, and traditional mechanical emergency backup keys.',
    secondaryDescription: 'Grant temporary OTP access codes for guests or service staff, receive instant entry push notifications on your phone, and enjoy automatic tamper alarm protection.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      '360° Semiconductor Fast Biometric Fingerprint Sensor',
      'Remote Unlocking & Timed Temporary OTPs via Mobile App',
      'Encrypted RFID Smart Cards & Scramble PIN Code Entry',
      'Anti-Tamper Alarm & Multiple Incorrect Attempt Lockout',
      'High-Strength Heavy Duty Stainless Steel Mortise Bolt',
      'Long-Life Battery with USB-C Emergency Power Jump Port'
    ],
    metaTitle: 'Biometric Smart Door Locks in Chennai | TSK One IT',
    metaDescription: 'Keyless biometric smart door locks for main doors in Chennai. Fingerprint, RFID card, PIN code, and remote mobile unlocking.',
  },
  {
    slug: 'video-door-phones',
    title: 'Video Door Phones',
    category: 'HOME SECURITY',
    parentSlug: '/home-security',
    parentTitle: 'Home Security',
    division: 'Home Automation',
    divisionSlug: '/smart-home',
    description: 'Smart Video Door Phone (VDP) and intercom systems with HD wide-angle camera, two-way crystal-clear audio, infrared night vision, and smartphone call forwarding. Screen visitors at your front gate and unlock doors remotely from anywhere.',
    secondaryDescription: 'Available with high-resolution indoor touchscreen monitors and multi-apartment villa intercom networks for complete residential perimeter security.',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Full HD 1080p Wide-Angle Camera with Night Vision',
      'Two-Way Noise-Canceling Audio Communication',
      'Direct Mobile Phone Ring Forwarding & Remote Door Release',
      'Sleek 7-inch & 10-inch Color Indoor Touchscreen Panels',
      'Visitor Snapshot & Video Recording on Motion Trigger',
      'Multi-Flat Villa & Gated Community Intercom Compatible'
    ],
    metaTitle: 'Smart Video Door Phones & Intercoms | TSK One IT',
    metaDescription: 'Smart video door phone systems in Chennai. HD video camera, mobile app call answering, and remote electronic door release.',
  },
  {
    slug: 'access-control',
    title: 'Access Control',
    category: 'HOME SECURITY',
    parentSlug: '/home-security',
    parentTitle: 'Home Security',
    division: 'Home Automation',
    divisionSlug: '/smart-home',
    description: 'Enterprise and residential access control systems featuring biometric fingerprint readers, facial recognition terminals, electromagnetic magnetic locks (EM locks), and motorized automatic boom barriers for vehicles.',
    secondaryDescription: 'Ideal for offices, gated communities, server rooms, and luxury residences needing strict entry permission tracking, time-attendance logs, and emergency panic release integration.',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'AI Facial Recognition & Fingerprint Access Terminals',
      'High-Holding Force Electromagnetic EM Door Locks',
      'Time & Attendance Cloud Software Management Sync',
      'Automated Vehicle Boom Barriers & RFID Long-Range Tags',
      'Fire Alarm Triggered Emergency Auto-Unlock Protocol',
      'Multi-Door Centralized Access Management Controllers'
    ],
    metaTitle: 'Biometric Access Control Systems in Chennai | TSK One IT',
    metaDescription: 'Biometric access control, facial recognition terminals, and EM locks in Chennai for offices, server rooms, and gated residences.',
  },
  {
    slug: 'home-cyber-security',
    title: 'Home Cyber Security',
    category: 'HOME SECURITY',
    parentSlug: '/home-security',
    parentTitle: 'Home Security',
    division: 'Home Automation',
    divisionSlug: '/smart-home',
    description: 'Comprehensive network security and cyber defense protection for modern connected smart homes. We secure your home router, isolate vulnerability-prone IoT appliances, block malicious domains, and prevent unauthorized intrusion into smart cameras and private networks.',
    secondaryDescription: 'Safeguard your family’s online privacy, protect personal banking devices, and prevent smart home devices from being recruited into botnet DDoS networks.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Hardware Firewall & Unified Threat Management Gateway',
      'Smart Camera & IoT Device Network Isolation (VLANs)',
      'Automated Malicious Website & Phishing Content Filtering',
      'Wi-Fi WPA3 Encryption & Rogue Device Connection Alerts',
      'Parental Controls & Screen Time Protection Profiles',
      'Quarterly Remote Vulnerability Scans & Firmware Audits'
    ],
    metaTitle: 'Smart Home Cyber Security & IoT Protection | TSK One IT',
    metaDescription: 'Protect your smart home network from hackers. IoT network segmentation, router firewalls, and privacy defense in Chennai.',
  },

  // ==========================================
  // BUSINESS SOLUTIONS -> IT Infrastructure & Cloud
  // ==========================================
  {
    slug: 'it-infrastructure',
    title: 'IT Infrastructure',
    category: 'IT INFRASTRUCTURE & CLOUD',
    parentSlug: '/it-infrastructure-and-cloud',
    parentTitle: 'IT Infrastructure & Cloud',
    division: 'Business Solutions',
    divisionSlug: '/it-infrastructure-and-cloud',
    description: 'End-to-end design, deployment, and management of enterprise IT infrastructure. We engineer high-availability server rooms, rack cabling, core routing and switching fabrics, enterprise SAN/NAS storage, and uninterrupted power distribution systems.',
    secondaryDescription: 'Our infrastructure architects build scalable, resilient foundations that empower high-performance corporate operations and support modern business expansion.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Server Room Design, Rack Layout & Thermal Management',
      'Core & Edge Switching (Cisco, Aruba, Juniper, Ubiquiti)',
      'High-Speed 10G/40G Fiber Optic & Cat6A Structured Cabling',
      'Enterprise SAN / NAS Storage Array Implementation',
      'Industrial Online UPS & Power Redundancy Architecture',
      'Hardware Lifecycle Management & Capacity Planning'
    ],
    metaTitle: 'Enterprise IT Infrastructure Solutions | TSK One IT',
    metaDescription: 'Complete enterprise IT infrastructure planning and deployment in Chennai. Server rooms, structured cabling, core networking, and storage.',
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions (Azure, AWS, GCP)',
    category: 'IT INFRASTRUCTURE & CLOUD',
    parentSlug: '/it-infrastructure-and-cloud',
    parentTitle: 'IT Infrastructure & Cloud',
    division: 'Business Solutions',
    divisionSlug: '/it-infrastructure-and-cloud',
    description: 'Strategic cloud consulting, seamless migration, and 24/7 managed cloud infrastructure across Microsoft Azure, Amazon Web Services (AWS), and Google Cloud Platform (GCP). We architect hybrid and multi-cloud environments optimized for security, reliability, and cost-efficiency.',
    secondaryDescription: 'Transform legacy on-premises servers into agile cloud workloads with automated scaling, zero-downtime database migrations, and FinOps cost optimization.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Cloud Architecture Design & Well-Architected Framework',
      'Zero-Downtime Lift-and-Shift & Cloud Native Migration',
      'AWS / Microsoft Azure / Google Cloud Certified Engineers',
      'Automated Disaster Recovery (DRaaS) & Geo-Redundancy',
      'Kubernetes (EKS/AKS/GKE) & Microservices Containerization',
      'FinOps Monthly Cloud Cost Optimization & Right-Sizing'
    ],
    metaTitle: 'Cloud Solutions AWS, Azure & GCP in Chennai | TSK One IT',
    metaDescription: 'Certified AWS, Microsoft Azure, and Google Cloud consulting and migration services in Chennai. Hybrid cloud, disaster recovery, and FinOps.',
  },
  {
    slug: 'managed-it-services',
    title: 'Managed IT Services',
    category: 'IT INFRASTRUCTURE & CLOUD',
    parentSlug: '/it-infrastructure-and-cloud',
    parentTitle: 'IT Infrastructure & Cloud',
    division: 'Business Solutions',
    divisionSlug: '/it-infrastructure-and-cloud',
    description: 'End-to-end management of enterprise network environments with continuous monitoring. We ensure network availability, performance optimization, and proactive issue resolution. Advanced monitoring tools provide real-time visibility into network traffic and health.',
    secondaryDescription: 'Our experts manage routing, switching, security policies, and connectivity, delivering reliable and secure networks that support modern digital operations.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Proactive 24/7 Network Availability & Health Monitoring',
      'Tier 1 to Tier 3 Technical Helpdesk & Dedicated Engineers',
      'Automated Endpoint Patching & Security Policy Deployment',
      'Server Virtualization (VMware ESXi, Microsoft Hyper-V)',
      'SLA-Backed Guaranteed 99.9% Uptime Support Contracts',
      'Executive IT Strategy, V-CIO Services & IT Budgeting'
    ],
    metaTitle: 'Managed IT Services & Network Support | TSK One IT',
    metaDescription: 'Proactive Managed IT services for businesses in Chennai. 24/7 monitoring, SLA-backed helpdesk, and dedicated infrastructure support.',
  },
  {
    slug: 'noc-soc-tac',
    title: 'NOC / SOC / TAC',
    category: 'IT INFRASTRUCTURE & CLOUD',
    parentSlug: '/it-infrastructure-and-cloud',
    parentTitle: 'IT Infrastructure & Cloud',
    division: 'Business Solutions',
    divisionSlug: '/it-infrastructure-and-cloud',
    description: 'Round-the-clock 24/7 Network Operations Center (NOC), Security Operations Center (SOC), and Technical Assistance Center (TAC) monitoring. We detect network anomalies, analyze threat telemetry in real time, and resolve critical incidents before they impact business operations.',
    secondaryDescription: 'Equipped with cutting-edge SIEM, automated SOAR playbooks, and certified level 1-3 network and cybersecurity analysts for total operational assurance.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      '24/7/365 Continuous Threat & Network Telemetry Monitoring',
      'AI-Powered SIEM Log Aggregation & Incident Correlation',
      'Rapid Incident Triage & Automated Containment SOAR',
      'Bandwidth Utilization & Packet Loss Anomaly Detection',
      'Tier-3 TAC Senior Network & Security Specialist Escalation',
      'Compliance-Ready Audit Reports & Security Dashboards'
    ],
    metaTitle: '24/7 NOC, SOC & TAC Managed Monitoring | TSK One IT',
    metaDescription: '24/7 NOC and SOC monitoring services in Chennai. Real-time network telemetry, threat hunting, SIEM log analysis, and incident response.',
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    category: 'IT INFRASTRUCTURE & CLOUD',
    parentSlug: '/it-infrastructure-and-cloud',
    parentTitle: 'IT Infrastructure & Cloud',
    division: 'Business Solutions',
    divisionSlug: '/it-infrastructure-and-cloud',
    description: 'Enterprise cybersecurity defense spanning Next-Generation Firewalls (NGFW), Endpoint Detection and Response (EDR/XDR), Vulnerability Assessment and Penetration Testing (VAPT), Zero Trust Architecture, and regulatory data compliance (ISO 27001, DPDP, GDPR).',
    secondaryDescription: 'Safeguard your proprietary intellectual property, customer records, and financial transactions from ransomware gangs and sophisticated advanced persistent threats (APTs).',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Next-Gen Firewall (Fortinet, Sophos, Palo Alto, Cisco)',
      'Vulnerability Assessment & Penetration Testing (VAPT)',
      'Managed Endpoint Detection & Response (EDR / XDR)',
      'Email Security, Anti-Phishing & DMARC/DKIM/SPF Defense',
      'Zero Trust Network Access (ZTNA) & Identity Management',
      'DPDP Act & ISO 27001 Regulatory Compliance Consulting'
    ],
    metaTitle: 'Enterprise Cybersecurity & VAPT Services | TSK One IT',
    metaDescription: 'Complete corporate cybersecurity solutions in Chennai. Next-gen firewalls, VAPT audits, EDR/XDR, and regulatory compliance.',
  },

  // ==========================================
  // BUSINESS SOLUTIONS -> Software & AI
  // ==========================================
  {
    slug: 'ai-and-business-applications',
    title: 'AI & Business Applications',
    category: 'SOFTWARE & AI',
    parentSlug: '/software-and-ai',
    parentTitle: 'Software & AI',
    division: 'Business Solutions',
    divisionSlug: '/it-infrastructure-and-cloud',
    description: 'Transform your business workflows with Generative AI, intelligent robotic process automation (RPA), predictive analytics, and conversational AI chatbots. We integrate custom Large Language Model (LLM) agents with your internal ERP and CRM databases to automate routine tasks.',
    secondaryDescription: 'From automated customer support triage to AI-powered document processing and forecasting, our AI solutions drive tangible operational efficiency and cost reductions.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Custom Generative AI Agents & Private LLM Fine-Tuning',
      'Automated Customer Service AI Chatbots & Voice Bots',
      'Intelligent Document OCR & Invoice Extraction Pipelines',
      'Robotic Process Automation (RPA) for Repetitive Tasks',
      'Predictive Analytics & Executive Business Intelligence',
      'Secure On-Premises & Private Cloud AI Hosting'
    ],
    metaTitle: 'Enterprise AI & Business Automation Solutions | TSK One IT',
    metaDescription: 'Custom Generative AI applications and process automation in Chennai. Private LLM agents, intelligent chatbots, and predictive analytics.',
  },
  {
    slug: 'crm-erp',
    title: 'CRM / ERP',
    category: 'SOFTWARE & AI',
    parentSlug: '/software-and-ai',
    parentTitle: 'Software & AI',
    division: 'Business Solutions',
    divisionSlug: '/it-infrastructure-and-cloud',
    description: 'Custom Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) development and implementation. We streamline multi-department operations including lead management, sales funnels, inventory tracking, manufacturing workflows, GST invoicing, and financial accounting.',
    secondaryDescription: 'Tailored precisely to your unique business logic, eliminating the bloat and costly recurring per-user licensing fees of generic off-the-shelf software.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Custom ERP Tailored to Manufacturing, Retail & Services',
      'End-to-End Sales CRM Funnel & Lead Tracking Automation',
      'Inventory, Multi-Warehouse & Supply Chain Control',
      'Automated GST Compliant Billing & Invoicing Engine',
      'Role-Based Granular Access & Employee Performance Metrics',
      'Cloud-Based Responsive Dashboard with Real-Time Analytics'
    ],
    metaTitle: 'Custom ERP & CRM Software Development | TSK One IT',
    metaDescription: 'Custom ERP and CRM software development in Chennai. Streamline sales, inventory, accounting, and billing with zero per-user licensing bloat.',
  },
  {
    slug: 'whatsapp-automation',
    title: 'WhatsApp Automation',
    category: 'SOFTWARE & AI',
    parentSlug: '/software-and-ai',
    parentTitle: 'Software & AI',
    division: 'Business Solutions',
    divisionSlug: '/it-infrastructure-and-cloud',
    description: 'Official Meta WhatsApp Business Cloud API integration for marketing, customer support, and transactional automation. Send automated order confirmations, payment reminders, service ticket updates, and deploy interactive 24/7 customer support chatbot flows.',
    secondaryDescription: 'Connect WhatsApp directly with your CRM, website, or ERP to empower multi-agent shared inboxes and broadcast promotional campaigns with high 98% open rates.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Official Meta WhatsApp Business Cloud API Verification',
      'Multi-Agent Shared Customer Support Team Inbox',
      'Automated Order Tracking, Invoices & Payment Reminders',
      'Interactive 24/7 AI Chatbot Flows & Quick Reply Buttons',
      'Targeted Promotional Broadcast Engines with Analytics',
      'Seamless Two-Way Integration with CRM, ERP & Web Forms'
    ],
    metaTitle: 'WhatsApp Business API & Chatbot Automation | TSK One IT',
    metaDescription: 'Official Meta WhatsApp Business Cloud API integration in Chennai. Multi-agent shared inboxes, broadcast campaigns, and automated chatbots.',
  },
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    category: 'SOFTWARE & AI',
    parentSlug: '/software-and-ai',
    parentTitle: 'Software & AI',
    division: 'Business Solutions',
    divisionSlug: '/it-infrastructure-and-cloud',
    description: 'Full-cycle bespoke web application, cloud portal, and mobile software development using modern technologies (Next.js, React, Node.js, Python, PostgreSQL, Flutter). We engineer high-performance, secure, and scalable digital products tailored to your business goals.',
    secondaryDescription: 'From initial architecture planning and UI/UX design to cloud deployment and ongoing maintenance, our engineering team delivers software that scales with your growth.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Modern High-Performance Web & Mobile Applications',
      'Scalable Microservices Architecture & REST/GraphQL APIs',
      'Bespoke Client Portals, SaaS Platforms & Dashboards',
      'Secure Relational & NoSQL Database Engineering',
      'Automated CI/CD Deployment Pipelines & Cloud Hosting',
      'Comprehensive Source Code Ownership & Post-Launch Support'
    ],
    metaTitle: 'Custom Software & Web Development in Chennai | TSK One IT',
    metaDescription: 'Bespoke custom software and web application development in Chennai. Modern Next.js, React, Python, and cloud-native architecture.',
  },
];

export const servicesBySlug: Record<string, SubServiceDetail> = allServicesList.reduce(
  (acc, service) => {
    acc[service.slug] = service;
    return acc;
  },
  {} as Record<string, SubServiceDetail>
);

// Title-to-slug mapping with normalized aliases
const titleToSlugMap: Record<string, string> = {
  // IT Device Care
  'laptop & desktop repair': 'laptop-and-desktop-repair',
  'laptop and desktop repair': 'laptop-and-desktop-repair',
  'apple macbook repair': 'apple-macbook-repair',
  'apple macbook': 'apple-macbook-repair',
  'chip-level motherboard repair': 'chip-level-motherboard-repair',
  'chip level mother board repair': 'chip-level-motherboard-repair',
  'chip level motherboard repair': 'chip-level-motherboard-repair',
  'data recovery': 'data-recovery',
  'ssd & ram upgrades': 'ssd-and-ram-upgrades',
  'ssd and ram upgrades': 'ssd-and-ram-upgrades',
  'genuine spare parts': 'genuine-spare-parts',
  'genuine spareparts': 'genuine-spare-parts',
  'amc / annual maintenance contracts': 'amc-annual-maintenance-contracts',
  'amc / annual maintenance': 'amc-annual-maintenance-contracts',
  'amc': 'amc-annual-maintenance-contracts',
  'doorstep pickup & delivery': 'doorstep-pickup-and-delivery',
  'doorstep pickup and delivery': 'doorstep-pickup-and-delivery',
  'doorstep pickup': 'doorstep-pickup-and-delivery',
  'it troubleshooting': 'it-troubleshooting',
  'managed device support': 'managed-device-support',

  // Home Automation
  'smart lighting': 'smart-lighting',
  'voice assistants': 'voice-assistants',
  'home wi-fi & mesh': 'home-wi-fi-and-mesh',
  'home wifi & mesh': 'home-wi-fi-and-mesh',
  'home wi-fi and mesh': 'home-wi-fi-and-mesh',
  'smart home automation': 'smart-home-automation',
  'smart home': 'smart-home-automation',
  'cctv': 'cctv-surveillance',
  'cctv surveillance': 'cctv-surveillance',
  'smart door locks': 'smart-door-locks',
  'smartdoor locks': 'smart-door-locks',
  'video door phones': 'video-door-phones',
  'access control': 'access-control',
  'home cyber security': 'home-cyber-security',
  'home cybersecurity': 'home-cyber-security',

  // Business Solutions
  'it infrastructure': 'it-infrastructure',
  'cloud solutions': 'cloud-solutions',
  'cloud solutions (azure, aws, gcp)': 'cloud-solutions',
  'cloud solutions (microsoft azure, aws, gcp)': 'cloud-solutions',
  'managed it services': 'managed-it-services',
  'managed it': 'managed-it-services',
  'noc / soc / tac': 'noc-soc-tac',
  'noc/soc/tac': 'noc-soc-tac',
  'cybersecurity': 'cybersecurity',
  'ai & business applications': 'ai-and-business-applications',
  'ai and business applications': 'ai-and-business-applications',
  'crm / erp': 'crm-erp',
  'crm/erp': 'crm-erp',
  'whatsapp automation': 'whatsapp-automation',
  'custom software development': 'custom-software-development',
};

// Aliases in servicesBySlug so direct short paths like /service/cctv also resolve
if (servicesBySlug['cctv-surveillance']) {
  servicesBySlug['cctv'] = servicesBySlug['cctv-surveillance'];
}
if (servicesBySlug['smart-door-locks']) {
  servicesBySlug['smartdoor-locks'] = servicesBySlug['smart-door-locks'];
}

export function getServiceSlugByTitle(title?: string): string {
  if (!title) return '';
  const normalized = title.trim().toLowerCase();
  if (titleToSlugMap[normalized]) {
    return titleToSlugMap[normalized];
  }
  // Try exact slug match
  const slugified = normalized.replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  if (servicesBySlug[slugified]) {
    return slugified;
  }
  return slugified;
}
