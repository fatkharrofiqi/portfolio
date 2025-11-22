import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Achmad Fatkharrofiqi",
  nickname: "Rofiq",
  initials: "AF",
  url: "https://hifatkha.vercel.app",
  location: "Kab. Semarang, Indonesia",
  locationLink: "https://www.google.com/maps/place/Semarang+Regency",
  description:
    "Full-Stack Engineer | Golang, Node.js, React/Next.js | Building scalable systems for government & enterprises",
  summary:
    "Experienced Software Engineer with a proven track record in fullstack development, distributed systems, and real-time applications. Most recently at PT Koltiva (2023–2025) as Software Engineer, working with Go, Node.js, React, Next.js, and AWS. Former Team Lead at Brainmatics delivering mission-critical government platforms. Passionate about clean code, performance, and impactful solutions.",
  avatarUrl: "/img_profile.jpg",
  cvUrl: "/achmad-fatkharrofiqi-cv.pdf",
  skills: [
    "Golang", "Node.js", "React.js", "Next.js", "React Native", "TypeScript",
    "Laravel", "PostgreSQL", "MySQL", "MongoDB",
    "TanStack Query", "Zustand", "Redux", "Tailwind CSS", "ShadCN UI",
    "Docker", "AWS (SQS, Lambda, ECS)", "Git", "Linux", "Figma"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "achmadfatkharrofiqi404@gmail.com",
    tel: "+6285155361164",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/fatkharrofiqi",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/achmad-fatkharrofiqi-4a7a08117/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/yourusername", // optional
        icon: Icons.x,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:achmadfatkharrofiqi404@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "PT Koltiva",
      href: "https://koltiva.com",
      location: "Jakarta, Indonesia",
      badges: ["Fullstack"],
      title: "Software Engineer",
      logoUrl: "/koltiva.png",
      start: "February 2023",
      end: "November 2025",
      description:
        "Fullstack development on Koltitrace & Cocoatrace platforms. Built scalable producer-consumer systems with AWS SQS + ECS, optimized APIs and third-party integrations, and created internal monitoring tools using AWS Lambda.",
    },
    {
      company: "PT Brainmatics Indonesia Cendekia",
      href: "https://brainmatics.com",
      location: "Jakarta, Indonesia",
      badges: ["Fullstack"], 
      title: "Software Team Lead",
      logoUrl: "/brainmatics.webp",
      start: "January 2021",
      end: "December 2022",
      description:
        "Led development of strategic government applications (SIPP 2.0, SIe-KTA, SiSDM, Sismutjab). Managed full SDLC, ran Agile ceremonies, mentored developers, and acted as primary technical contact for stakeholders.",
    },
    {
      company: "PT Brainmatics Indonesia Cendekia",
      href: "https://brainmatics.com",
      badges: ["Fullstack"], 
      location: "Jakarta, Indonesia",
      title: "Junior → Mid → Senior Programmer",
      logoUrl: "/brainmatics.webp",
      start: "April 2015",
      end: "December 2020",
      description:
        "Progressed from Junior to Senior role across multiple long-term government projects (e-KIAT Guru, SIPP 2.0, Desk MELATI, STEFFy). Specialized in backend architecture, database design, API development, and code quality.",
    },
  ],

  education: [
    {
      school: "Nusa Mandiri University",
      degree: "Master of Computer Science",
      href: "https://nusamandiri.ac.id",
      logoUrl: "/UNM.png",
      start: "2020",
      end: "2022",
      description: "GPA 3.91 | Thesis: Sentiment Analysis using BERT",
    },
    {
      school: "Nusa Mandiri University",
      degree: "Bachelor of Informatics Engineering",
      href: "https://nusamandiri.ac.id",
      logoUrl: "/UNM.png",
      start: "2015",
      end: "2019",
      description: "GPA 3.70 | Thesis: Android GPS-Based Attendance System",
    },
  ],

  projects: [
    {
      title: "Pendawa Logistik",
      href: "#",
      dates: "March 2025 – April 2025",
      active: true,
      description:
        "Full-stack real-time vehicle tracking platform with automatic background synchronization from external logistics systems.",
      technologies: ["Golang", "Next.js", "PostgreSQL", "Docker", "Tailwind CSS", "ShadCN UI", "TanStack Query", "Zustand"],
      links: [
        {
          type: "Website",
          href: "https://pendawalogistik.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Minehaul Dashboard",
      href: "https://minehaul.vercel.app/",
      dates: "September 2024 – December 2024",
      active: true,
      description:
        "Responsive real-time mining vehicle monitoring web app built pixel-perfect from Figma designs. Heavy use of server-state (TanStack Query) and client-state (Zustand) management.",
      technologies: ["Next.js", "Tailwind CSS", "ShadCN UI", "TanStack Query", "Zustand"],
      links: [
        {
          type: "Website",
          href: "https://minehaul.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/fatkharrofiqi/minehaul",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Pusat Rumah Lelang (Backend)",
      href: "#",
      dates: "September 2023 – December 2023",
      active: false,
      description:
        "High-performance property listing backend built with Golang + PostgreSQL. Features full user auth, searchable listings, and relational data modeling. Deployed via Docker on VPS (project discontinued by client).",
      technologies: ["Golang", "PostgreSQL", "Docker"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Dzikir App",
      href: "https://github.com/timsyaapsyaap",
      dates: "April 2023 – Present",
      active: true,
      description:
        "Cross-platform Islamic mobile app (Android & iOS) with full Al-Qur’an reader powered by third-party API, daily dhikr tracking, and beautiful modern UI.",
      technologies: ["React Native", "TypeScript", "Quran API"],
      links: [
        {
          type: "Android",
          href: "https://play.google.com/store/apps/details?id=com.fahmialfareza.dzikirapp",
          icon: <Icons.smartphone className="size-3" />,
        },
        {
          type: "IOS",
          href: "https://apps.apple.com/id/app/dzikir-app-tasbih-digital/id1638489103",
          icon: <Icons.smartphone className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/timsyaapsyaap",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;