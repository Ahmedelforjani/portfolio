import { Icons } from "@/components/icons";

export const DATA = {
  name: "Ahmed Al-forjani",
  initials: "AA",
  url: "https://forjani.dev",
  location: "Tripoli, Libya",
  locationLink: "https://www.google.com/maps/place/tripoli",
  description:
    "Software Engineer focused primarily on web development, I enjoy learning new technologies, building things, and helping people.",
  summary:
    "My programming journey began in high school in 2012, where I started exploring various programming languages. By late 2018, I began working as a freelancer, with my first project contributing to building a website for the [University of Tripoli](https://uot.edu.ly/). Next up, I co-founded a company with two friends, focusing on developing web applications for universities and academic institutions. I earned a degree in software engineering, and my graduation project, [ClassHub](https://trial.classhub.ly/), an LMS that played a crucial role during COVID-19, was recognized as one of the top projects in my faculty and continues to operate successfully to this day. I also supervised a hackathon managed by Expertise France in Libya, and since 2022, I've been working remotely for [ZiLab](https://zilab.co) blockchain development company based in Latvia.",
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
  // cv: "/cv.pdf",
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
        "ZiLab is a blockchain development company based in Latvia. provide blockchain development services, including smart contract development, DApp development, and blockchain consulting. Our team of blockchain developers has extensive experience in developing blockchain solutions for various industries, including finance, healthcare, supply chain, and more.",
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
        "Esnadcom is a technology company specializing in the development of web-based applications for educational institutions. Our mission is to assist these institutions in establishing robust and efficient systems. Recently, we successfully developed and implemented an integrated system for the Libyan Academy for Postgraduate Studies and its branches, showcasing our commitment to excellence and innovation in the education sector.",
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
        "CERAMIC is a company that aims to work for advancing data handling in governmental and private Libyan institutes. Our domain of work includes data collection, mining, analysis, Software Development, and other related AI technologies.  ",
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
      description:
        "Developed a decentralized application (DApp) using React JS, specifically designed to facilitate token presales on the Ethereum Blockchain. This platform provides a straightforward, single-stage presale process with robust functionalities, perfect for individuals and businesses looking to participate in or launch token sales.",
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
      image: "/projects/presale-website.png",
    },

    {
      title: "Zad Al-Muslim",
      href: "https://zad-almuslim.ly",
      dates: "Sep 2024",
      active: true,
      description:
        "Zad Al-Muslim is an Islamic resource platform offering Quran recitations, Islamic radio stations, and educational lessons. It provides easy access to spiritual resources, enhancing religious knowledge and practice with a user-friendly interface.",
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
      image: "/projects/zad-almuslim.png",
    },
    {
      title: "BuyBot (Cardano Blockchain)",
      href: "https://t.me/ADABuyBot",
      dates: "Aug 2024",
      active: true,
      description:
        "Developed a Telegram bot that can be added to group chats with a given token address, providing customizable notification messages for each purchase.",
      technologies: ["Telegraf", "Telegram", "Node.js", "MongoDB", "Viem"],
      links: [
        {
          type: "Website",
          href: "https://t.me/ADABuyBot",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/buybot.jpg",
    },
    {
      title: "DriftZone",
      href: "https://t.me/DriftZoneBot",
      dates: "Jun 2024",
      active: true,
      description:
        "Developed Telegram Mini-App game with +300k players. DriftZone is a game where players battle in real time between each others using Drifters to earn in-game points, purchase items with Telegram stars, and qualify for crypto token airdrops.",
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
      image: "/projects/driftzone.jpg",
    },
    {
      title: "BulkSender",
      href: "https://eth-multisender.zilab.co/",
      dates: "Nov 2023",
      active: true,
      description:
        "Developed a comprehensive multisender service dApp for the Ethereum Blockchain, designed to facilitate bulk sending of crypto tokens at the lowest market fees, while enabling platform owners to earn commissions.",
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
      image: "/projects/multisender.jpg",
    },
    {
      title: "University of Zintan",
      href: "https://uoz.edu.ly",
      dates: "Oct 2023",
      active: true,
      description:
        "Developed a comprehensive system for the university, which includes a website, a Content Management System (CMS), a Student Management System (SMS), and a fully integrated platform. This system efficiently manages all aspects of the univeristy.",
      technologies: ["Vue", "Typescript", "TailwindCSS", "Laravel", "MySQL"],
      links: [
        {
          type: "Website",
          href: "https://uoz.edu.ly",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/uoz.png",
    },
    {
      title: "Cupcake Portal",
      href: "https://cupcake-portal.vercel.app/",
      dates: "Oct 2023",
      active: true,
      description:
        "Developed a simple Web3 platform for accepting donations from various blockchain networks, ensuring secure and transparent transactions.",
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
      image: "/projects/cupcake.png",
    },
    {
      title: "Etheract",
      href: "https://ethact.vercel.app",
      dates: "Oct 2023",
      active: true,
      description:
        "Developed a web tool for interacting with unverified smart contract methods across multiple blockchain networks via a simple UI. The tool displays available functions, allowing users to input parameters and execute functions seamlessly.",
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
      image: "/projects/ethact.png",
    },
    {
      title: "Pinky Finance",
      href: "https://www.pinky.finance",
      dates: "Aug 2023",
      active: true,
      description:
        "Developed a fully decentralized Web 3.0 marketplace under [ZiLab](https://zilab.io), enabling developers to easily submit their products for sale. Users can purchase these products using cryptocurrency payments, with the convenience of automatic file delivery.",
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
      image: "/projects/web3_marketplace.jpg",
    },
    {
      title: "Skina",
      href: "https://www.skina.net/",
      dates: "Aug 2023",
      active: true,
      description:
        "Skina is a mobile app for booking beauty and sports services near you. I developed the backend APIs to ensure secure and efficient functionality.",
      technologies: ["Laravel", "MySQL", "Pusher", "Radis"],
      links: [
        {
          type: "Website",
          href: "https://www.skina.net/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/skina.jpg",
    },
    {
      title: "Multi-Chain DEX",
      href: "https://prodex-base-chain.zilab.co/",
      dates: "Aug 2022",
      active: true,
      description:
        "Developed a highly efficient multi-chain decentralized exchange (DEX) for seamless trading and liquidity management. Built with React.js, it offers a smooth user experience and advanced smart contract functionalities. The DEX features integrated wallet connect, supporting over 500 wallets for broad accessibility and ease of use.",
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
      image: "/projects/swap.jpg",
    },
    {
      title: "Libozzle",
      href: "https://libozzle.com/en",
      dates: "Nov 2021",
      active: true,
      description:
        "Developed a comprehensive E-Commerce under [Al3lama](https://al3lama.ly) for buying and selling new and used products. The platform offers a wide range of items, featuring special offers on many products. Shop easily and safely from anywhere with our secure and user-friendly interface.",
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
      image: "/projects/libozzle.jpg",
    },
    {
      title: "Libyan Academy for Postgraduate Studies",
      href: "https://academy.edu.ly/en",
      dates: "May 2020",
      active: true,
      description:
        "Developed a comprehensive system for the Academy, which includes a website, a Content Management System (CMS), a Student Management System (SMS), and a fully integrated platform. This system efficiently manages all aspects of the academy.",
      technologies: ["Vue", "Typescript", "TailwindCSS", "Laravel", "MySQL"],
      links: [
        {
          type: "Website",
          href: "https://academy.edu.ly/en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/academy.png",
    },
    {
      title: "ClassHub",
      href: "https://trial.classhub.ly/",
      dates: "Mar 2020",
      active: true,
      description:
        "Classhub is a Learning Management System (LMS) platform designed to streamline and enhance communication between teachers and students throughout the educational process.",
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
      image: "/projects/classhub.png",
    },
  ],
} as const;
