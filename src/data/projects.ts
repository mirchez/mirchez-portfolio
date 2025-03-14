import { Project } from "@/store/useProjectStore";

export const projects: Project[] = [
  {
    id: "12",
    title: "DevTree Clone",
    description:
      "Clone of the DevTree platform, enabling project and task management.",
    image: "/12-devtree.png",
    technologies: [
      {
        id: "react",
        name: "React.js",
        color: { bg: "#E9F3F7", text: "#487CA5" },
      },
      {
        id: "typescript",
        name: "TypeScript",
        color: { bg: "#F6F3F8", text: "#8A67AB" },
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        color: { bg: "#F9F2F5", text: "#B35488" },
      },
      {
        id: "node",
        name: "Node.js",
        color: { bg: "#EEF3ED", text: "#548164" },
      },
      {
        id: "mongodb",
        name: "MongoDB",
        color: { bg: "#EEF3ED", text: "#548164" },
      },
      {
        id: "express",
        name: "Express.js",
        color: { bg: "#FAECEC", text: "#C4554D" },
      },
      {
        id: "mongoose",
        name: "Mongoose",
        color: { bg: "#E3F7E9", text: "#5BAF7C" },
      },
      { id: "vite", name: "Vite", color: { bg: "#FFF4E6", text: "#D98E2D" } },
      {
        id: "jwt",
        name: "JWT Auth",
        color: { bg: "#E9F3F7", text: "#2C6CA1" },
      },
      {
        id: "react-query",
        name: "React Query",
        color: { bg: "#F3F2F7", text: "#6C5B9A" },
      },
      {
        id: "rest-api",
        name: "RESTful APIs",
        color: { bg: "#F3EEEE", text: "#976D57" },
      },
      {
        id: "bcrypt",
        name: "bcrypt",
        color: { bg: "#F0F0F0", text: "#7A7A7A" },
      },
      {
        id: "react-hook-form",
        name: "React Hook Form",
        color: { bg: "#FDF4F7", text: "#D96D8C" },
      },
      {
        id: "postman",
        name: "Postman",
        color: { bg: "#FFF4E6", text: "#F06529" },
      },
      {
        id: "cloudinary",
        name: "Cloudinary",
        color: { bg: "#E9F3F7", text: "#4C8EEB" },
      },
      {
        id: "html-css-js",
        name: "HTML/CSS/JS",
        color: { bg: "#FAECEC", text: "#C4554D" },
      },
      {
        id: "javascript",
        name: "JavaScript",
        color: { bg: "#FAF3DD", text: "#C29343" },
      },
    ],
    category: "fullstack",
    link: "https://devtree-miguel-miranda.netlify.app",
  },
  {
    id: "2",
    title: "Calorie Counter",
    description: "Balances calories consumed and burned.",
    image: "/02-calorias.PNG",
    technologies: [
      {
        id: "react",
        name: "React.js",
        color: { bg: "#E9F3F7", text: "#487CA5" },
      },
      {
        id: "typescript",
        name: "TypeScript",
        color: { bg: "#F6F3F8", text: "#8A67AB" },
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        color: { bg: "#F9F2F5", text: "#B35488" },
      },
      {
        id: "html-css-js",
        name: "HTML/CSS/JS",
        color: { bg: "#FAECEC", text: "#C4554D" },
      },
      {
        id: "javascript",
        name: "JavaScript",
        color: { bg: "#FAF3DD", text: "#C29343" },
      },
    ],
    category: "health",
    link: "https://sage-pasca-360189.netlify.app/",
  },
  {
    id: "5",
    title: "Weather App",
    description: "Check the weather in any city in real time.",
    image: "/05-clima.PNG",
    technologies: [
      {
        id: "react",
        name: "React.js",
        color: { bg: "#E9F3F7", text: "#487CA5" },
      },
      {
        id: "typescript",
        name: "TypeScript",
        color: { bg: "#F6F3F8", text: "#8A67AB" },
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        color: { bg: "#F9F2F5", text: "#B35488" },
      },
      {
        id: "rest-api",
        name: "RESTful APIs",
        color: { bg: "#F3EEEE", text: "#976D57" },
      },
      {
        id: "html-css-js",
        name: "HTML/CSS/JS",
        color: { bg: "#FAECEC", text: "#C4554D" },
      },
      {
        id: "javascript",
        name: "JavaScript",
        color: { bg: "#FAF3DD", text: "#C29343" },
      },
    ],
    category: "external-api",
    link: "https://sparkly-pegasus-5d5f8d.netlify.app/",
  },
  {
    id: "1",
    title: "Tip Calculator",
    description: "Calculates the tip based on the total bill.",
    image: "/01-propina.PNG",
    technologies: [
      {
        id: "react",
        name: "React.js",
        color: { bg: "#E9F3F7", text: "#487CA5" },
      },
      {
        id: "typescript",
        name: "TypeScript",
        color: { bg: "#F6F3F8", text: "#8A67AB" },
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        color: { bg: "#F9F2F5", text: "#B35488" },
      },
      {
        id: "html-css-js",
        name: "HTML/CSS/JS",
        color: { bg: "#FAECEC", text: "#C4554D" },
      },
      {
        id: "javascript",
        name: "JavaScript",
        color: { bg: "#FAF3DD", text: "#C29343" },
      },
    ],
    category: "productivity",
    link: "https://profound-valkyrie-2b3ada.netlify.app/",
  },
  {
    id: "3",
    title: "Expense Planner",
    description: "Set a budget and calculate expenses and remaining funds.",
    image: "/03-gastos.PNG",
    technologies: [
      {
        id: "react",
        name: "React.js",
        color: { bg: "#E9F3F7", text: "#487CA5" },
      },
      {
        id: "typescript",
        name: "TypeScript",
        color: { bg: "#F6F3F8", text: "#8A67AB" },
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        color: { bg: "#F9F2F5", text: "#B35488" },
      },
      {
        id: "html-css-js",
        name: "HTML/CSS/JS",
        color: { bg: "#FAECEC", text: "#C4554D" },
      },
      {
        id: "javascript",
        name: "JavaScript",
        color: { bg: "#FAF3DD", text: "#C29343" },
      },
    ],
    category: "finance",
    link: "https://delicate-figolla-d3716c.netlify.app/",
  },
  {
    id: "4",
    title: "Veterinary Patient Tracker",
    description: "Monitors the status of patients in a veterinary clinic.",
    image: "/04-veterinaria.PNG",
    technologies: [
      {
        id: "react",
        name: "React.js",
        color: { bg: "#E9F3F7", text: "#487CA5" },
      },
      {
        id: "typescript",
        name: "TypeScript",
        color: { bg: "#F6F3F8", text: "#8A67AB" },
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        color: { bg: "#F9F2F5", text: "#B35488" },
      },
      {
        id: "html-css-js",
        name: "HTML/CSS/JS",
        color: { bg: "#FAECEC", text: "#C4554D" },
      },
      {
        id: "javascript",
        name: "JavaScript",
        color: { bg: "#FAF3DD", text: "#C29343" },
      },
    ],
    category: "health",
    link: "https://mellifluous-genie-770ba4.netlify.app/",
  },
  {
    id: "6",
    title: "Cryptocurrency Converter",
    description:
      "Convert regular money to cryptocurrencies with real-time values.",
    image: "/06-criptomonedas.PNG",
    technologies: [
      {
        id: "react",
        name: "React.js",
        color: { bg: "#E9F3F7", text: "#487CA5" },
      },
      {
        id: "typescript",
        name: "TypeScript",
        color: { bg: "#F6F3F8", text: "#8A67AB" },
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        color: { bg: "#F9F2F5", text: "#B35488" },
      },
      {
        id: "rest-api",
        name: "RESTful APIs",
        color: { bg: "#F3EEEE", text: "#976D57" },
      },
      {
        id: "html-css-js",
        name: "HTML/CSS/JS",
        color: { bg: "#FAECEC", text: "#C4554D" },
      },
      {
        id: "javascript",
        name: "JavaScript",
        color: { bg: "#FAF3DD", text: "#C29343" },
      },
    ],
    category: "external-api",
    link: "https://phenomenal-dolphin-3cfaaf.netlify.app/",
  },
  {
    id: "7",
    title: "Furniture Store",
    description: "Online furniture store with an attractive design.",
    image: "/07-muebles.png",
    technologies: [
      {
        id: "html-css-js",
        name: "HTML/CSS/JS",
        color: { bg: "#FAECEC", text: "#C4554D" },
      },
    ],
    category: "ecommerce",
    link: "https://housestore-page.vercel.app/tienda.html",
  },
  {
    id: "8",
    title: "Headphone Shop",
    description: "Store for selling headphones with a minimalist design.",
    image: "/08-auriculares.png",
    technologies: [
      {
        id: "html-css-js",
        name: "HTML/CSS/JS",
        color: { bg: "#FAECEC", text: "#C4554D" },
      },
    ],
    category: "ecommerce",
    link: "https://2-tech-pro.vercel.app/",
  },
  {
    id: "9",
    title: "Rustic Architecture Blog",
    description: "A blog to share content about rustic architecture.",
    image: "/09-arquitectura.png",
    technologies: [
      {
        id: "html-css-js",
        name: "HTML/CSS/JS",
        color: { bg: "#FAECEC", text: "#C4554D" },
      },
    ],
    category: "social",
    link: "https://arquitectura-bosque-ruby.vercel.app/",
  },
  {
    id: "10",
    title: "Finance App Landing",
    description: "Landing page for a finance application.",
    image: "/10-finanzas.png",
    technologies: [
      {
        id: "html-css-js",
        name: "HTML/CSS/JS",
        color: { bg: "#FAECEC", text: "#C4554D" },
      },
    ],
    category: "productivity",
    link: "https://nucleus-delta.vercel.app/",
  },
  {
    id: "11",
    title: "Café Website",
    description: "Website for a café with a friendly design.",
    image: "/11-cafeteria.png",
    technologies: [
      {
        id: "html-css-js",
        name: "HTML/CSS/JS",
        color: { bg: "#FAECEC", text: "#C4554D" },
      },
    ],
    category: "social",
    link: "https://cafeteria-fawn.vercel.app/",
  },
];
