

export const Colors_ToUse =[
  {primary: "amber-500",
  second: "black",
  tertiary: "white"}
];

// nav section
export const NAV_LINKS = [
    { href: '#aboutus', key: 'aboutus', label: 'About Us' },
    { href: '#features', key: 'features', label: 'Features' },
    { href: '/', key: 'how_parkease_work', label: 'How ParkEase Work?' },
    { href: '/#support', key: 'support', label: 'Support' },
    { href: '/', key: 'reviews', label: 'Reviews' },
  ];
  
  // FEATURES SECTION
  export const FEATURES = [
    {
      title: 'Real time reservations',
      icon: '/reserved.svg',
      variant: 'green',
      description:
        'Real-time information on parking space availability and the ability to make immediate reservations.',
    },
    {
      title: 'Secure Mobile Payments',
      icon: '/secured.svg',
      variant: 'green',
      description:
        "Integration of secure payment systems allowing users to make transactions directly within the application.",
    },
    {
      title: 'Rating and Review System',
      icon: '/rating.svg',
      variant: 'orange',
      description:
        'Capability for users to rate and leave reviews about parking spaces, providing valuable feedback to other users',
    },
    {
      title: 'QR Code Scanning',
      icon: '/qrcode.svg',
      variant: 'orange',
      description:
        'A system that allows users to scan QR codes at the location to access their reserved parking space.',
    },
    {
      title: 'Reservation history',
      icon: '/history.svg',
      variant: 'orange',
      description:
        'A section where users can view their reservation history, track expenses, and access receipts.',
    },
  ];
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        'About ParkEase',
        'Environment',
        'Privacy Policy',
        'Contact Us',
      ],
    }
  ];
  
  export const CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Phone', value: '123-456-7890' },
      { label: 'Email', value: 'park.ease@gmail.com' },
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '/facebook.svg',
      '/instagram.svg',
      '/twitter.svg',
      '/youtube.svg',
      '/wordpress.svg',
    ],
  };