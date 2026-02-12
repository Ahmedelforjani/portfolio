import { Icons } from "@/components/icons";

export const DATA = {
  name: "Ahmed Al-forjani",
  initials: "AA",
  url: "https://forjani.dev",
  location: "Tripoli, Libya",
  locationLink: "https://www.google.com/maps/place/tripoli",
  description:
    "Senior Full-Stack & Blockchain Engineer building scalable web platforms and production-ready decentralized systems.",
  summary:
    "Senior Full-Stack & Blockchain Engineer architecting scalable web platforms and decentralized systems across Web2 and Web3. I turn ideas into web and blockchain products, learn fast, and enjoy building things that actually help people. I focus on backend architecture, modern frontend engineering, and smart contract development with a strong emphasis on clean system design, performance, security, and long-term maintainability. I'm also big on sharing what I know and having a good time while doing it.",
  avatarUrl: "/me.jpg",
  skills: [
    "Vue",
    "Nuxt",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "PHP",
    "Laravel",
    "Postgres",
    "MySQL",
    "MongoDB",
    "Solidity",
    "TailwindCSS",
    "Nginx",
  ],
  skillGroups: [
    {
      category: "Frontend",
      skills: ["React", "Vue", "Next.js", "Nuxt", "TailwindCSS", "Typescript"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Laravel", "PHP", "Nginx"],
    },
    {
      category: "Blockchain",
      skills: ["Solidity", "Viem", "Wagmi", "Hardhat"],
    },
    {
      category: "Database",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
  ],
  cv: "/cv.pdf",
  contact: {
    email: "ahmedelforjani50@gmail.com",
    // tel: "+218925041820",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ahmedelforjani",
        icon: Icons.github,

        navbar: true,
      },
      // LinkedIn: {
      //   name: "LinkedIn",
      //   url: "https://www.linkedin.com/in/ahmedalforjani/",
      //   icon: Icons.linkedin,

      //   navbar: true,
      // },
      // X: {
      //   name: "X",
      //   url: "https://x.com/Ahmed_Alforjani",
      //   icon: Icons.x,

      //   navbar: true,
      // },
    },
  },

  work: [
    {
      company: "ZiLab",
      href: "https://zilab.co",
      badges: [],
      location: "Remote",
      title: "Web & Blockchain Developer",
      logoUrl: "/zilab.svg",
      start: "June 2022",
      end: "Present",
      description:
        "Design and develop smart contracts and decentralized applications for Web3 and DeFi products. Lead blockchain integration with modern frontend frameworks while building backend services that support on-chain interactions. Contribute to architecture, deployment, testing, and security preparation in distributed teams delivering production-grade blockchain solutions.",
    },
    {
      company: "Esnadcom",
      href: "https://esnadcom.ly/",
      badges: [],
      location: "Tripoli, Libya",
      title: "Full-Stack Web Developer",
      logoUrl: "/esnadcom.png",
      start: "Oct 2018",
      end: "Present",
      description:
        "Architect and deliver enterprise-grade systems for educational institutions, including Student Management Systems (SMS), CMS platforms, and administrative portals. Lead backend API development with Laravel and relational databases, while building responsive frontend applications with Vue.js and modern JavaScript frameworks. Oversee deployment, server configuration, and system optimization for scalability across multiple university branches.",
    },
    {
      company: "Ceramic",
      href: "https://dv.ly",
      badges: [],
      location: "Tripoli, Libya",
      title: "Frontend Developer (Part-Time)",
      logoUrl: "/ceramic.png",
      start: "June 2021",
      end: "Dec 2021",
      description:
        "Built responsive, data-driven interfaces for institutional platforms with a focus on performance, usability, and reliable API integration in a collaborative delivery environment.",
    },
  ],
  education: [
    {
      school: "University of Tripoli",
      href: "https://uot.edu.ly",
      degree: "Bachelor's Degree of Software engineering",
      logoUrl: "/uot.png",
      start: "2015",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Multi Stage Token Presale",
      href: "https://www.pinky.finance/marketplace/redog-full-website-with-eth-multi-stage-token-presale-integration-smart-contract",
      dates: "Nov 2024",
      active: true,
      category: "blockchain",
      description:
        "Built a multi-stage token presale dApp with secure smart-contract logic, wallet integration, and real-time purchase tracking for Web3 fundraising campaigns.",
      technologies: [
        "Solidity",
        "React",
        "Typescript",
        "TailwindCSS",
        "Viem",
        "Wagmi",
        "Reown",
      ],
      links: [
        {
          type: "Website",
          href: "https://redog-multi-stage-ethereum.zilab.co",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Smart Contract",
          href: "https://testnet.bscscan.com/address/0x1d6fb739ac404754945deeb1e830e6ea11ad4f67",
          icon: <Icons.contract className="size-3" />,
        },
      ],
      image: "/projects/cover-presale.svg",
    },

    {
      title: "Zad Al-Muslim",
      href: "https://zad-almuslim.ly",
      dates: "Sep 2024",
      active: true,
      category: "web",
      description:
        "Built an Islamic content platform aggregating Quran recitations, radio streams, and lessons with a fast, accessible interface for daily use.",
      technologies: ["Vue", "Nuxt", "Typescript", "TailwindCSS", "Shadcn/ui"],
      links: [
        {
          type: "Website",
          href: "https://zad-almuslim.ly",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Ahmedelforjani/zad-almuslim",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/cover-zad.svg",
    },
    {
      title: "BuyBot (Cardano Blockchain)",
      href: "https://t.me/ADABuyBot",
      dates: "Aug 2024",
      active: true,
      category: "blockchain",
      description:
        "Developed a Telegram buy-notification bot for Cardano tokens with configurable alerts, token tracking, and reliable message delivery for active trading communities.",
      technologies: ["Telegraf", "Telegram", "Node.js", "MongoDB", "Viem"],
      links: [
        {
          type: "Website",
          href: "https://t.me/ADABuyBot",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/cover-buybot.svg",
    },
    {
      title: "DriftZone",
      href: "https://t.me/DriftZoneBot",
      dates: "Jun 2024",
      active: true,
      category: "web",
      description:
        "Engineered a real-time multiplayer Telegram Mini App serving 300k+ users. Built scalable backend infrastructure, integrated Telegram Stars payments, and implemented crypto-token airdrop mechanics.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Telegraf",
        "Telegram",
        "Node.js",
        "Laravel",
        "MySQL",
        "Websockets",
        "Redis",
        "Viem",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.driftzone.io",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/cover-driftzone.svg",
    },
    {
      title: "BulkSender",
      href: "https://eth-multisender.zilab.co/",
      dates: "Nov 2023",
      active: true,
      category: "blockchain",
      description:
        "Built a multisender dApp for low-fee bulk token distribution, including commission logic for platform owners and secure transaction workflows.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Solidity",
        "Viem",
        "Wagmi",
        "Reown",
      ],
      links: [
        {
          type: "Website",
          href: "https://eth-multisender.zilab.co/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Smart Contract",
          href: "https://testnet.bscscan.com/address/0x45bF7657bF8A7673190333AA2F36C9BcC9610C68",
          icon: <Icons.contract className="size-3" />,
        },
      ],
      image: "/projects/cover-multisender.svg",
    },
    {
      title: "University of Zintan",
      href: "https://uoz.edu.ly",
      dates: "Oct 2023",
      active: true,
      category: "education",
      description:
        "Designed and delivered a fully integrated academic ecosystem including the public website, CMS, and Student Management System to streamline operations, enrollment workflows, and reporting.",
      technologies: ["Vue", "Typescript", "TailwindCSS", "Laravel", "MySQL"],
      links: [
        {
          type: "Website",
          href: "https://uoz.edu.ly",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/cover-uoz.svg",
    },
    {
      title: "Cupcake Portal",
      href: "https://cupcake-portal.vercel.app/",
      dates: "Oct 2023",
      active: true,
      category: "blockchain",
      description:
        "Built a multi-chain donation platform with wallet connectivity and transparent on-chain payment flows for contributors and campaign owners.",
      technologies: [
        "Solidity",
        "React",
        "Typescript",
        "TailwindCSS",
        "Shadcn/ui",
        "Viem",
        "Wagmi",
      ],
      links: [
        {
          type: "Website",
          href: "https://cupcake-portal.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Ahmedelforjani/cupcake-portal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/cover-cupcake.svg",
    },
    {
      title: "Etheract",
      href: "https://ethact.vercel.app",
      dates: "Oct 2023",
      active: true,
      category: "blockchain",
      description:
        "Built a developer tool for interacting with unverified smart-contract methods across chains, with dynamic function rendering and streamlined execution flows.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn/ui",
        "Viem",
        "Wagmi",
      ],
      links: [
        {
          type: "Website",
          href: "https://ethact.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Ahmedelforjani/etheract",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/cover-ethact.svg",
    },
    {
      title: "Pinky Finance",
      href: "https://www.pinky.finance",
      dates: "Aug 2023",
      active: true,
      category: "blockchain",
      description:
        "Developed smart contracts and decentralized marketplace logic enabling crypto-based purchases with automated digital product delivery in a Web3 marketplace environment.",
      technologies: [
        "Solidity",
        "React",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn/ui",
        "Viem",
        "Wagmi",
        "Laravel",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.pinky.finance",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/cover-pinky.svg",
    },
    {
      title: "Skina",
      href: "https://www.skina.net/",
      dates: "Aug 2023",
      active: true,
      category: "web",
      description:
        "Built backend APIs for a scalable booking platform, supporting service scheduling, secure data handling, and smooth integration with the mobile product experience.",
      technologies: ["Laravel", "MySQL", "Pusher", "Radis"],
      links: [
        {
          type: "Website",
          href: "https://www.skina.net/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/cover-skina.svg",
    },
    {
      title: "Multi-Chain DEX",
      href: "https://prodex-base-chain.zilab.co/",
      dates: "Aug 2022",
      active: true,
      category: "blockchain",
      description:
        "Built a multi-chain DEX interface for swaps and liquidity management with wallet connectivity, smart-contract integration, and support for 500+ wallets.",
      technologies: [
        "Solidity",
        "React",
        "Typescript",
        "TailwindCSS",
        "Viem",
        "Shadcn/ui",
        "Wagmi",
        "Reown",
      ],
      links: [
        {
          type: "Website",
          href: "https://prodex-base-chain.zilab.co/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Smart Contract",
          href: "https://testnet.bscscan.com/address/0xE960DD0785Ec63DF20c6000D382C9F04FEd85FD0",
          icon: <Icons.contract className="size-3" />,
        },
      ],
      image: "/projects/cover-dex.svg",
    },
    {
      title: "Libozzle",
      href: "https://libozzle.com/en",
      dates: "Nov 2021",
      active: true,
      category: "web",
      description:
        "Developed an e-commerce platform with product management, scheduling workflows, and payment integration, focused on reliability, usability, and operational scalability.",
      technologies: [
        "Vue",
        "Nuxt",
        "Laravel",
        "TailwindCSS",
        "Pusher",
        "MySQL",
        "Redis",
      ],
      links: [
        {
          type: "Website",
          href: "https://libozzle.com/en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/cover-libozzle.svg",
    },
    {
      title: "Libyan Academy for Postgraduate Studies",
      href: "https://academy.edu.ly/en",
      dates: "May 2020",
      active: true,
      category: "education",
      description:
        "Designed and delivered an end-to-end academic platform including the public website, CMS, and Student Management System for academic operations, enrollment, and reporting across branches.",
      technologies: ["Vue", "Typescript", "TailwindCSS", "Laravel", "MySQL"],
      links: [
        {
          type: "Website",
          href: "https://academy.edu.ly/en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/cover-academy.svg",
    },
    {
      title: "ClassHub",
      href: "https://trial.classhub.ly/",
      dates: "Mar 2020",
      active: true,
      category: "education",
      description:
        "Built an LMS adopted by the Faculty of Information Technology at the University of Tripoli to support remote education during COVID-19, with continued use in academic operations.",
      technologies: [
        "Vue",
        "Laravel",
        "TailwindCSS",
        "Pusher",
        "MySQL",
        "Redis",
      ],
      links: [
        {
          type: "Website",
          href: "https://trial.classhub.ly/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/cover-classhub.svg",
    },
  ],
} as const;
