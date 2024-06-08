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
    spotifylogo,
    codinateimg,
    promptshare,
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
    codingninjas,
    ideathon,
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
    {
      name: "Spotify UI",
      description:
      "A website with a user interface (UI) similar to Spotify's, featuring sleek design and user-friendly navigation, built using HTML and CSS for a seamless and visually appealing experience.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: spotifylogo,
      source_code_link: "https://github.com/bittucse/spotify_clone",
      live_link:"https://fardeen-spotify-clone.netlify.app/",
    },
    {
      name: "Prompt Share",
      description:
      "A web application where users can discover new prompts for various purposes, share their own creative prompts, and engage with a community of like-minded individuals for inspiration and idea exchange.",
      tags: [
        {
          name: "Next js",
          color: "blue-text-gradient",
        },
        {
          name: "Next Auth",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: promptshare,
      source_code_link: "https://github.com/bittucse/Prompt-Share",
      live_link:"https://prompt-share-theta.vercel.app/",
    },
    {
      name: "Codinate",
      description:
      "A web application for collaborative coding lets developers work together in real-time on the same code editor, enhancing teamwork and productivity through seamless, synchronous code editing.",
      tags: [
        {
          name: "MERN Stack",
          color: "blue-text-gradient",
        },
        {
          name: "Socket-io",
          color: "green-text-gradient",
        },
      ],
      image: codinateimg,
      source_code_link: "https://github.com/bittucse/codinate",
      live_link:"https://github.com/bittucse/codinate",
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
      "Solved 100+ question in coding ninjas",
    image: codingninjas,
    profile_link:"https://www.naukri.com/code360/profile/Jacob7",
  },
  {
    name: "ACIC ideathon",
    description:
      "Winner in Chaitanyam - Freshmen Ideathon (Atal Community Innovation Centre)",
    image: ideathon,
    profile_link:"https://drive.google.com/file/d/1H8Bb6LaK3HPFkruEwedxR42luENLzJHl/view",
  },


];



  
  export { services, technologies, experiences, testimonials, projects,education,achievement };