import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    postgresql,
    git,
    figma,
    acic,
    motioncut,
    nikey,
    dicegame,
    threejs,
    c_programming,
    python,
    cbit_logo,
    krishnaveni_logo,
    vvc_logo,

    stack_hackathon,
    bit_hackathon,
    leetcode,
    hackerrank,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "App Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
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
      name: "React JS",
      icon: reactjs,
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
      name: "Postgresql",
      icon: postgresql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "c_programming",
      icon: c_programming,
    },
    {
      name: "python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Cross-functional IoT Developer",
      company_name: "ACIC-CBIT",
      icon: acic,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Nov 2023",
      points: [
        "Engaged in on-site visits to nearby rural areas to understand and identify specific irrigation issues faced by farmers.",
        "Took the initiative to create an IoT (Internet of Things) device aimed at addressing the identified irrigation problems. This device was designed to regulate water usage efficiently.",
        "Created a mobile application using the Blynk platform to empower farmers with the ability to control the IoT device, allowing them to turn the motor on or off remotely.",
        "Integrated automated features into the IoT device to sense water levels and control the irrigation motor, providing a hands-free and efficient solution for farmers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "MotionCut",
      icon: motioncut,
      iconBg: "#E6DEDD",
      date: "Nov 2023 - Dec 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Collaborating with UI/UX designers for seamless integration",
        "Utilizing RESTful APIs for data integration",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Nikey",
      description:
        "Built the Nike Shoes page with a clean and effective UI, showcasing projects, top products, services, special offers, testimonials, and a well-structured footer. Ensuring a enjoyable experience for users.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: nikey,
      source_code_link: "https://github.com/bittucse/nikewebsite",
      live_link:"https://fardeen-nike.netlify.app/",
    },
    {
      name: "Dice Game",
      description:
      "Built a user-friendly web app for playing dice games using React. The game boasts an attractive UI, interactive gameplay, and real-time updates, ensuring a delightful and engaging experience for users.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "styled-components",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: dicegame,
      source_code_link: "https://github.com/bittucse/Dice_game_react",
      live_link:"https://fardeen-dice-game.netlify.app/",
    },
    
  ];

// added education data
const education = [
  {
    institute_name: "Chaitanya Bharathi Institute of Technology",
    icon: cbit_logo,
    standard:"Bachelor of Engineering",
    group:"Major: CSE",
    marks:"CGPA: 9.04/10",
    duration:"2021 - Present",
  },
  {
    institute_name: "Krishnaveni Junior College",
    icon: krishnaveni_logo,
    standard:"Intermediate",
    group:"Major: MPC",
    marks:"Percent: 97.8%",
    duration:"2019 - 2021",
  },
  {
    institute_name: "VV central public school",
    icon: vvc_logo,
    standard:"High School",
    group:"Board: CBSE",
    marks:"450/500",
    duration:"2018 - 2019",
  },
];



const achievement=[
  {
    name: "Bit n Build",
    description:
      "Developed Codinate, a collaborative code editor with a chat option, in just 3 days with my team of 3 members",
    image: bit_hackathon,
  },
  {
    name: "Data Structures and Algorithms",
    description:
      "Solved 100+ problems on Leetcode",
    image: leetcode,
    profile_link:"https://leetcode.com/mohammadFardeen/",
  },
  {
    name: "StackHack 1.0",
    description:
      "Secured a spot in top 12 teams. Developed Food delivary web Application, where user can order food from near by restarents ",
    image: stack_hackathon,
  },
  {
    name: "Data Structures and Algorithms",
    description:
      "5 star, Golden Batch for Problem Solving on HACKERANK",
    image: hackerrank,
    profile_link:"https://www.hackerrank.com/profile/fardeenadil954",
  },


];



  
  export { services, technologies, experiences, testimonials, projects,education,achievement };