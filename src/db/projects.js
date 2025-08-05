import { BiLogoSpringBoot, BiLogoTailwindCss } from "react-icons/bi";
import { FaJava, FaNodeJs, FaPython, FaReact, FaSass } from "react-icons/fa";
import { SiDjango, SiMongodb, SiPostgresql, SiRedux, SiShadcnui, SiSwiper, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
export const projects = [
  {
    id: 1,
    titleName: "OneMeet",
    description:
      "OneMeet is a cutting-edge AI-powered platform revolutionizing the hiring process. It automates interview scheduling, uses artificial intelligence to evaluate candidate responses, and supports asynchronous video interviews. This allows candidates to answer at their own convenience and lets recruiters review interviews at any time. The platform significantly reduces hiring time, ensures data-driven evaluation, and enhances overall recruitment efficiency for businesses.",
    image: "onemeet1.png",
    link: "https://guileless-sable-b4b0e4.netlify.app/",
    stacks: ["React", "Redux Toolkit", "Shadcn", "Tailwind CSS", "Java", "SpringBot"],
    stacckIcon: [FaReact, SiRedux, SiShadcnui, BiLogoTailwindCss, FaJava, BiLogoSpringBoot],
    info: [
      {
        text: "This is the homepage, providing a brief introduction and introduction to OneMeet's purpose, showcasing its core AI-powered features and user-friendly experience for candidates and recruiters. You can learn more about the essential parts of the project from this page.",
        image: "onemeet1.png",
      },
      {
        text: "Trusted partner companies are shown inside a sleek and responsive carousel. Each logo scrolls smoothly, providing a visual cue to the legitimacy and support OneMeet receives from clients.",
        image: "onemeet2.png",
      },
      {
        text: "Pricing and service plans are clearly laid out so that users can understand the platform’s offerings. Transparent options help users choose a plan suitable for their hiring needs.",
        image: "onemeet3.png",
      },
      {
        text: "Each user type—Candidate, Recruiter, and Company—has its own customizable dashboard for managing applications, interview scheduling, performance metrics, and other user-specific interactions within the platform.",
        image: "onmeet4.jpg",
      },
      {
        text: "An interview session in progress where AI records candidate responses. Browser permissions allow capturing, and audio is split into chunks then combined server-side to generate a full video.",
        image: "fixscreen.jpg",
      },
      {
        text: "The platform includes smart analytics and visualized statistics, giving insight into user activities and progress over time such as monthly applications, interview counts, and hiring KPIs.",
        image: "onemeet5.jpg",
      },
      {
        text: "Secure authentication flows for login and registration, with a clean and responsive UI that ensures smooth access across different devices and screen sizes, improving user engagement.",
        image: "onemeet6.jpg",
      }
    ]
  },
  {
    id: 2,
    titleName: "Oltin Qanot",
    description:
      "Oltin Qanot is a platform dedicated to promoting volunteerism in Uzbekistan. It allows individuals and organizations to register, share social impact stories, and receive support from sponsors and donors. The platform is designed to connect volunteers, track their contributions, and offer real-time updates on charity campaigns and social projects, helping foster a strong philanthropic ecosystem.",
    image: "volunter4.png",
    link: "https://ezgu.uz/",
    stacks: ["React", "Redux Toolkit", "Shadcn", "Tailwind CSS", "Python", "Django", "PostgreSQL"],
    stacckIcon: [FaReact, SiRedux, SiShadcnui, BiLogoTailwindCss, FaPython, SiDjango, SiPostgresql],
    info: [
      {
        text: "Landing page displays highlighted stories, volunteer efforts, and outlines the platform's primary mission—supporting social good through volunteerism, donations, and civic engagement in Uzbekistan.",
        image: "volunter1.png",
      },
      {
        text: "Educational blog section features inspiring stories, personal achievements, and community contributions by volunteers across Uzbekistan, promoting active social involvement and motivation.",
        image: "volunter2.png",
      },
      {
        text: "Interactive Google map integration helps users discover nearby volunteer organizations and social projects with address and contact details, making it easier to join.",
        image: "volunter3.png",
      },
      {
        text: "Client dashboard provides users with real-time updates, personalized recommendations, and seamless access to manage their ongoing participation or donor activity on the platform.",
        image: "volunter4.png",
      },
      {
        text: "Donation system allows users to contribute securely to various causes. Integration with reliable payment gateways ensures safety and traceability of all transactions.",
        image: "volunter5.png",
      },
      {
        text: "Admin panel gives system managers access to insightful analytics, like total active users, donation statistics, and visitor counts for better platform performance monitoring.",
        image: "volunter6.png",
      },
      {
        text: "Phone number verification is powered by Eskiz.uz, ensuring that users are authentic and communication with volunteers or organizations is secure and traceable.",
        image: "volunter7.png",
      },
      {
        text: "SMS-based verification is used during registration or important actions. A one-time code is sent and verified using Eskiz.uz’s reliable API integration.",
        image: "volunter8.png",
      },
      {
        text: "Map visualization helps users find volunteering events and organization locations with accuracy, promoting real-world engagement and easier access to information.",
        image: "volunter10.png",
      },
      {
        text: "Final registration steps ensure that all user data is verified, accounts are activated correctly, and users are onboarded seamlessly into the platform’s ecosystem.",
        image: "volunter9.png",
      }
    ]
  },
  {
    id: 3,
    titleName: "Noventer",
    description:
      "Noventer is a freelance marketplace platform where businesses and professionals connect. It allows companies to post tasks, receive bids, manage milestones, and make secure payments. Freelancers build profiles, showcase portfolios, and earn credibility through reviews. The platform supports multilingual content and is designed for global scalability and efficient remote collaboration.",
    image: "noventer1.png",
    link: "https://noventer-one.vercel.app/ru",
    stacks: ["Next.js", "Redux Toolkit", "Shadcn", "Tailwind CSS", "TypeScript", "Node.js", "MongoDB"],
    stacckIcon: [TbBrandNextjs, SiRedux, SiShadcnui, BiLogoTailwindCss, SiTypescript, FaNodeJs, SiMongodb],
    info: [
      {
        text: "Homepage introduces Noventer’s mission as a freelance platform, highlighting its services and design approach that ensures visibility and usability for both clients and freelancers.",
        image: "noventer1.png",
      },
      {
        text: "The About page presents key facts about Noventer, explaining company goals, work philosophy, and their long-term vision for global freelance collaboration and project success.",
        image: "noventer2.png",
      },
      {
        text: "A well-structured business operations section details how Noventer streamlines hiring, payment milestones, and freelancer rating systems with security and trust in mind.",
        image: "noventer3.png",
      }
    ]
  },
  {
    id: 4,
    titleName: "AB Plast",
    description:
      "AB Plast is a corporate website for a plastic manufacturing company based in Uzbekistan. It features product showcases, order placement functionality, and direct contact with the sales team. The responsive design ensures usability on all devices, while the backend manages manufacturing data, logistics, and sustainability info. The site helps streamline B2B customer communication and sales inquiries.",
    image: "ab1.png",
    link: "https://abplast.uz/",
    stacks: ["React", "Redux Toolkit", "Swipper", "SCSS", "Python", "Django", "PostgreSQL"],
    stacckIcon: [FaReact, SiRedux, SiSwiper, FaSass, FaPython, SiDjango, SiPostgresql],
    info: [
      {
        text: "Homepage introduces AB Plast's services, categories of plastic products, and its commitment to quality, all while reflecting a professional brand presence online.",
        image: "ab1.png",
      },
      {
        text: "Dashboard-like section shows key company performance stats—production capacity, material usage, and delivery metrics, making it easy to understand efficiency at a glance.",
        image: "ab2.png",
      },
      {
        text: "Contact page includes form submissions, company location on the map, and sales representative details to assist with custom orders or inquiries from B2B clients.",
        image: "ab3.png",
      }
    ]
  }
];
