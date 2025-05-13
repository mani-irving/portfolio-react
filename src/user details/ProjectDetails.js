import PortfolioReact from "../assets/Portfolio(React).png";
import productivityTracker from "../assets/Productivity Tracker.png";
import bloomAndBlossom from "../assets/Bloom & Blossom.png";
import portfolio from "../assets/Portfolio(HTML & CSS).png";

const ProjectDetails = [
  {
    id: 1,
    name: "Portfolio Using React",
    imgSrc: PortfolioReact,
    desc: `A responsive single-page portfolio built with React and Tailwind CSS, 
    featuring Framer Motion animations and a theme toggle using useState and useEffect. 
    The site includes modular components, a scroll-to-top button, and a scroll progress indicator, 
    offering smooth navigation and a clean user experience.`,
    tech: ["React", "Tailwind", "Framer Motion"],
    projectLink: "https://portfolio-react-pi-six.vercel.app/",
    sourceCodeLink: "https://github.com/mani-irving/portfolio-react",
  },
  {
    id: 2,
    name: " Productivity Tracker",
    imgSrc: productivityTracker,
    desc: `Built a Productivity Tracker web app using HTML, CSS, and JavaScript. 
    The app includes a To-Do List with persistent storage, a progress bar, and a 
    Time Tracker with start/stop functionality and session history. Also designed 
    a Motivation Corner with random quotes and a daily productivity overview for enhanced user engagement.`,
    tech: ["HTML5", "CSS3", "Javascript"],
    projectLink: "https://productivity-tracker-delta.vercel.app/",
    sourceCodeLink: "https://github.com/mani-irving/productivity-tracker",
  },
  {
    id: 3,
    name: "Bloom & Blossom",
    imgSrc: bloomAndBlossom,
    desc: `Developed a responsive flower e-commerce website using React, JavaScript, 
    and Tailwind CSS. Built key components like Product List, 
    Product Card, Cart, and Checkout, with smooth UI interactions. 
    Integrated essential features such as add to cart, update quantity, 
    and remove item, all within a clean, 
    flower-themed layout for a seamless shopping experience.`,
    tech: ["React", "Tailwind", "Framer Motion", "React-Router"],
    projectLink: "#",
    sourceCodeLink: "#",
  },
  {
    id: 4,
    name: "Portfolio Using HTML & CSS",
    imgSrc: portfolio,
    desc: `A responsive and visually clean personal portfolio website built using HTML, CSS, and 
    Vanilla JavaScript. The site showcases my web development skills, including 
    smooth navigation, responsive design principles, and clean code structure. 
    It includes dedicated sections like About Me, Projects, Academics, and Contact, allowing 
    visitors to explore my work and reach out easily.`,
    tech: ["HTML5", "CSS3"],
    projectLink: "https://manikant-portfolio.vercel.app/",
    sourceCodeLink: "https://github.com/mani-irving/Portfolio",
  },
];

export default ProjectDetails;
