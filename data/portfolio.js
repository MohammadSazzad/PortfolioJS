import {
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Mail,
  MapPin,
  Medal,
  Phone,
  Server,
  Trophy,
  WalletCards
} from 'lucide-react';

// Inline SVG icons for brands (lucide-react dropped brand icons in v1.x)
function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} {...props}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// Base path for GitHub Pages deployment (empty in dev, prefixed in production)
const BASE = process.env.NODE_ENV === 'production' ? '/PortfolioJS' : '';

export const profile = {
  name: 'Mohammad Sazzad',
  role: 'Full-Stack Software Engineer',
  location: 'Sylhet, Bangladesh',
  email: 'sazzad19@student.sust.edu',
  phone: '+880 173 571 8761',
  phoneHref: 'tel:+8801735718761',
  resume: `${BASE}/cv.pdf`,
  headline: 'I build full-stack products that actually work in production.',
  summary:
    'Software Engineering student and full-stack developer who enjoys building real web applications — from authentication and payments to real-time features and APIs. I like taking vague product ideas and turning them into clean, working software.',
  image: `${BASE}/sazzad_1.png`
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' }
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/MohammadSazzad/', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammadsazzadswe/', icon: LinkedinIcon },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail }
];

export const aboutHighlights = [
  'Comfortable owning features across UI, API, database, and integration layers.',
  'Strong foundation in software engineering, algorithms, and practical project delivery.',
  'Experience with payment gateways, SMTP verification, Firebase FCM, Cloudinary, and Azure deployments.',
  'Interested in teams that value clean code, dependable systems, and fast learning.'
];

export const education = [
  {
    icon: GraduationCap,
    institution: 'Shahjalal University of Science and Technology',
    degree: 'Bachelor of Engineering in Software Engineering',
    date: 'March 2022 - November 2025'
  },
  {
    icon: GraduationCap,
    institution: 'Gaibandha Government College',
    degree: 'Higher Secondary Certificate',
    date: 'March 2019 - March 2021'
  },
  {
    icon: GraduationCap,
    institution: 'Gaibandha N.H Modern High School',
    degree: 'Secondary School Certificate',
    date: 'January 2013 - February 2018'
  }
];

export const experiences = [
  {
    company: 'Versatilo Group',
    role: 'Junior Full Stack Developer',
    date: 'February 2026 - Present',
    location: 'On-site / Remote',
    summary:
      'Building and maintaining business-critical web modules across OTA cargo operations, healthcare workflows, visa processing, and secure government-adjacent systems.',
    impact: [
      'Developed cargo module workflows covering booking, ticketing, weight management, and operational tracking.',
      'Built backend services with NestJS and contributed authentication, authorization, SMTP verification, payment, and push-notification integrations.',
      'Worked across NestJS, Next.js, PostgreSQL, Laravel, Firebase FCM, Stripe, and operational admin interfaces.'
    ],
    tech: ['NestJS', 'Next.js', 'PostgreSQL', 'Laravel', 'Firebase FCM', 'Stripe']
  },
  {
    company: 'Deep Mind Labs AI',
    role: 'Trainee AI/ML Engineer',
    date: 'December 2025 - January 2026',
    location: 'Sylhet, Bangladesh',
    summary:
      'Worked in an R&D-focused environment, learning computer vision workflows and building practical object-detection pipelines.',
    impact: [
      'Applied OpenCV and YOLO concepts to object detection and classification tasks.',
      'Explored RAG, Docker, and Django-based development patterns in an AI product setting.'
    ],
    tech: ['Python', 'OpenCV', 'YOLO', 'Django', 'Docker', 'RAG']
  }
];

export const skillGroups = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['React', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'NestJS', 'Laravel', 'Django', 'ASP.NET Core', 'REST APIs', 'WebSocket']
  },
  {
    title: 'Data & Cloud',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'Supabase', 'Entity Framework', 'Cloudinary', 'Azure', 'Firebase FCM']
  },
  {
    title: 'Engineering Core',
    icon: BrainCircuit,
    skills: ['C/C++', 'Python', 'Java', 'C#', 'Problem Solving', 'Agile', 'GitHub Actions', 'Docker']
  }
];

export const projects = [
  {
    title: 'Social Sphere',
    subtitle: 'Full-stack social media platform',
    image: `${BASE}/social_sphere.png`,
    alt: 'Social Sphere project screenshot',
    category: 'Featured',
    problem: 'Built a social platform with authentication, real-time messaging, content sharing, moderation tools, and media uploads — all in one product.',
    outcome: 'React and Node.js app powered by PostgreSQL, Socket.IO, SendGrid, Cloudinary, and deployed on Azure Static Apps.',
    tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Socket.IO', 'Cloudinary', 'Azure'],
    links: [
      { label: 'Live Demo', href: 'https://victorious-flower-0a9eee30f.1.azurestaticapps.net' },
      { label: 'Source Code', href: 'https://github.com/MohammadSazzad/Social_Sphere' }
    ]
  },
  {
    title: 'Food Pro',
    subtitle: 'Food delivery platform',
    image: `${BASE}/food_pro.png`,
    alt: 'Food Pro project screenshot',
    category: 'Full Stack',
    problem: 'A food delivery platform where restaurants manage menus and customers browse, cart, and checkout — all in one responsive app.',
    outcome: 'Full-stack delivery system with secure payments, Cloudinary image handling, and a MySQL database.',
    tech: ['React', 'Node.js', 'Express.js', 'MySQL', 'SSLCOMMERZ', 'Cloudinary'],
    links: [{ label: 'Source Code', href: 'https://github.com/MohammadSazzad/Solo_Project-Food_Pro-' }]
  },
  {
    title: 'Finance App',
    subtitle: 'Personal finance management system',
    image: `${BASE}/finance.png`,
    alt: 'Finance App project screenshot',
    category: 'Backend Heavy',
    problem: 'A personal finance tool for tracking expenses, managing profiles, and reviewing spending — with a clean backend.',
    outcome: 'ASP.NET Core app with Entity Framework, PostgreSQL, Razor views, Bootstrap frontend, and deployed on Azure.',
    tech: ['ASP.NET Core', 'Entity Framework', 'PostgreSQL', 'Supabase', 'Azure'],
    links: [
      { label: 'Live Demo', href: 'https://financeapp-dgg4d2b4b0epehfs.canadacentral-01.azurewebsites.net' },
      { label: 'Source Code', href: 'https://github.com/MohammadSazzad/FinananceApp' }
    ]
  },
  {
    title: 'Shoilpik',
    subtitle: 'E-commerce web application',
    image: `${BASE}/project.jpg`,
    alt: 'Shoilpik project screenshot',
    category: 'Commerce',
    problem: 'An e-commerce platform with product management, shopping cart, payment processing, and media storage.',
    outcome: 'React and Tailwind frontend with a Node.js and Express.js API, MySQL database, SSLCOMMERZ payments, and Cloudinary media.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'MySQL', 'SSLCOMMERZ'],
    links: [{ label: 'Source Code', href: 'https://github.com/MohammadSazzad/SWE330-Project-Shoilpik' }]
  },
  {
    title: 'Spam Email Classifier',
    subtitle: 'Machine learning classifier',
    image: `${BASE}/spam.png`,
    alt: 'Spam Email Classifier screenshot',
    category: 'AI/ML',
    problem: 'An ML pipeline that classifies emails as spam or ham using a practical scikit-learn workflow.',
    outcome: 'Python classifier built with Scikit-learn, with Streamlit for experimentation and Jupyter notebooks for analysis.',
    tech: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'NumPy'],
    links: [{ label: 'Source Code', href: 'https://github.com/MohammadSazzad/Spam-email-classifier' }]
  },
  {
    title: 'Task Manager API',
    subtitle: 'Profile-based CRUD backend',
    image: `${BASE}/project.jpg`,
    alt: 'Task Manager API project screenshot',
    category: 'API',
    problem: 'A backend service needed profile-aware task management with clean CRUD operations.',
    outcome: 'Built a Node.js and Express.js API with MySQL persistence and task/profile separation.',
    tech: ['Node.js', 'Express.js', 'MySQL'],
    links: [{ label: 'Source Code', href: 'https://github.com/MohammadSazzad/Profile-based-Task-Manager-CRUD-app' }]
  }
];

export const achievements = [
  {
    icon: Trophy,
    title: 'Competitive Programming',
    description: 'Solved 1000+ problems across Codeforces, CodeChef, AtCoder, CSES, and LeetCode.',
    meta: '2022 - Present',
    link: { label: 'Codeforces', href: 'https://codeforces.com/profile/Mohammad_Sazzad' }
  },
  {
    icon: Award,
    title: 'Innovation Hub Cohort-2',
    description: '1st Runner-up and Best Innovation Award recipient.',
    meta: '2024'
  },
  {
    icon: Medal,
    title: 'Hackathon Winner',
    description: 'Ideathon Champion at MU 2024 with Kotha, an AI-powered browser assistant concept.',
    meta: '2024'
  },
  {
    icon: BriefcaseBusiness,
    title: 'Data Science with Python',
    description: 'Certification from EDGE, ICT Division Bangladesh.',
    meta: '2025',
    link: {
      label: 'View Certificate',
      href: 'https://training.edge.gov.bd/storage/certificate/student-training/certificate_68283daa996602.91225378.pdf'
    }
  }
];

export const contactCards = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref, icon: Phone },
  { label: 'Location', value: profile.location, href: null, icon: MapPin },
  { label: 'Resume', value: 'Download CV', href: profile.resume, icon: WalletCards }
];
