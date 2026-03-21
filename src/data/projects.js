import bendriaPNG from "../resources/images/bendria.png";
import dogFactsPNG from "../resources/images/dogFacts.png";
import calcutalorPNG from "../resources/images/calculator.png";
import fakeMonitorPNG from "../resources/images/fakeMonitor.png";

export const PROJECTS = [
  {
    id: 1,
    title: "Community Information Website",
    image: bendriaPNG,
    description:
      "A community website designed for local residents to share important information and stay connected. The site provides a simple interface where community members can post updates, announcements, and useful information for others. Built with React, focusing on clean layout, simple navigation, and responsive design.",
    techStack: "React, React Router, React Hooks, CSS Modules",
    projectLink: "https://local-news-app-sand.vercel.app/",
    gitLink: "https://github.com/DvR1s/localNews-app.git",
  },
  {
    id: 2,
    title: "Dog Facts API Website",
    image: dogFactsPNG,
    description:
      "A React-based front-end project that fetches random dog facts from a custom API. The site allows users to view 5 random facts at a time with a simple, interactive interface. Focused on API integration, modern styling, and responsive layout for all devices.",
    techStack: "React, React Hooks, Fetch API, CSS Modules",
    projectLink: "https://dog-api-rosy-two.vercel.app/",
    gitLink: "https://github.com/DvR1s/Dog-API.git",
  },
  {
    id: 3,
    title: "3D Print Cost Calculator",
    image: calcutalorPNG,
    description:
      "A practical calculator web app for estimating the cost of 3D printed objects based on material, print time, and printer settings. Built with React, this project emphasizes dynamic form handling, real-time calculations, and a clean, user-friendly interface.",
    techStack: "React, React Hooks, JavaScript, CSS Modules",
    projectLink: "https://3-d-print-calculator-sigma.vercel.app/",
    gitLink: "https://github.com/DvR1s/3D-Print-Calculator.git",
  },
  {
    id: 4,
    title: "DevScreen – Product Landing Page",
    image: fakeMonitorPNG,
    description:
      "A modern product landing page for a portable monitor designed for developers and remote workers. The website includes a responsive layout, reusable components, pricing section with monthly/yearly toggle, FAQ accordion, testimonials, and an email signup form. Built with React and Vite, focusing on component-based architecture, clean UI, and responsive design.",
    techStack: "React, Vite, JavaScript, CSS Modules, Responsive Design",
    projectLink: "https://fake-monitor-landing-page.vercel.app/",
    gitLink: "https://github.com/DvR1s/fake-monitor-landing-page.git",
  },
];
