import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    solidity,
    hardhat,
    decoinbazaar,
    bookmyseat,
    curiosityhub,
    codetherapist,
    restbazaar,
    portfolio,
    serene,
    nfthub,
    youtube,
    finexvault,
    adgaming,
    dewitter
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Fullstack Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Smart Contract Developer",
      icon: creator,
    },
    {
      title: "Web3 Explorer",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Solidity",
      icon: solidity,
    },
    {
      name: "Hardhat",
      icon: hardhat,
    },
  ];
  
//   const experiences = [
//     {
//       title: "React.js Developer",
//       company_name: "Starbucks",
//       icon: starbucks,
//       iconBg: "#383E56",
//       date: "March 2020 - April 2021",
//       points: [
//         "Developing and maintaining web applications using React.js and other related technologies.",
//         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//         "Implementing responsive design and ensuring cross-browser compatibility.",
//         "Participating in code reviews and providing constructive feedback to other developers.",
//       ],
//     },
//     {
//       title: "React Native Developer",
//       company_name: "Tesla",
//       icon: tesla,
//       iconBg: "#E6DEDD",
//       date: "Jan 2021 - Feb 2022",
//       points: [
//         "Developing and maintaining web applications using React.js and other related technologies.",
//         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//         "Implementing responsive design and ensuring cross-browser compatibility.",
//         "Participating in code reviews and providing constructive feedback to other developers.",
//       ],
//     },
//   ];
  
//   const testimonials = [
//     {
//       testimonial:
//         "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//       name: "Sara Lee",
//       designation: "CFO",
//       company: "Acme Co",
//       image: "https://randomuser.me/api/portraits/women/4.jpg",
//     },
//     {
//       testimonial:
//         "I've never met a web developer who truly cares about their clients' success like Rick does.",
//       name: "Chris Brown",
//       designation: "COO",
//       company: "DEF Corp",
//       image: "https://randomuser.me/api/portraits/men/5.jpg",
//     },
//     {
//       testimonial:
//         "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//       name: "Lisa Wang",
//       designation: "CTO",
//       company: "456 Enterprises",
//       image: "https://randomuser.me/api/portraits/women/6.jpg",
//     },
//   ];
  
  const projects = [
    {
      name: "FinexVault",
      description:
        "FinexVault is a responsive Banking Application frontend, showcasing my hands-on experience with Tailwind CSS, React JS, and JavaScript. The project is designed to demonstrate a user-friendly and visually appealing interface, catering to various devices and screen sizes.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "reactjs",
          color: "yellow-text-gradient",
        },
      ],
      image: finexvault,
      source_code_link: "https://github.com/Abhi22011/FinexVault",
      live_link: "https://finexvault.netlify.app/",
    },
    {
      name: "NFT Hub",
      description:
        "The NFT Hub is a result of my dedication to honing my skills in JavaScript, React.js, and Tailwind CSS. Although it currently focuses on the UI with no functionality, it serves as a canvas for the incredible stories behind each NFT that I aim to bring to life in the future.",
      tags: [
        {
          name: "tailwindcss",
          color: "yellow-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "reactjs",
          color: "pink-text-gradient",
        },
      ],
      image: nfthub,
      source_code_link: "https://github.com/Abhi22011/nft-hub",
      live_link: "https://thenfthub.netlify.app/",
    },
    {
      name: "DeCoin Bazaar",
      description:
        "It is a Decentralized Cryptocurrency Exchange where users can trade listed crypto tokens.  User can deposit tokens, make orders, fill orders and cancel order on exchange. There's also a Order Book section for history of past trades.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "ethereum",
          color: "pink-text-gradient",
        },
      ],
      image: decoinbazaar,
      source_code_link: "https://github.com/AmAyush18/Decoin-Bazaar",
      live_link: "#",
    },
    {
      name: "R-Est Bazaar",
      description:
        "Fullstack Web Application that is basically marketplace of Real-Estate. One can Signup using an email or Google account. User can buy or rent the flats and also list their apartments and flats for selling or renting. One can search and sort apartments based on different criteria.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "yellow-text-gradient",
        },
      ],
      image: restbazaar,
      source_code_link: "https://github.com/AmAyush18/Real-Estate-Bazaar",
      live_link: "https://real-estate-bazaar.onrender.com/",
    },
  ];
  
export { services, technologies, projects };