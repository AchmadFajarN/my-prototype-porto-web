const tag = ["All", "React", "MonggoDB", "Node.js", "Firebase", "TypeScript"];
const project = [
  {
    name: "E-Commerce-Platform",
    title:
      "A full-featured online shopping platform with cart, checkout, and payment integration.",
    tag: ["React", "Node.js", "MonggoDB", "Stripe"],
    img: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Task Management App",
    title:
      "A productivity application to manage tasks, projects, and deadlines.",
    tag: ["React", "Firebase", "Tailwindcss"],
    img: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Weather Dashboard",
    title:
      "A weather application showing forecasts and historical data with interactive charts.",
    tag: ["JavaScript", "REST API", "Chart Js"],
    img: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Social Media Dashboard",
    title:
      "Analytics dashboard for social media accounts with data visualization.",
    tag: ["Vue.js", "TypeScript", "D3.js"],
    img: "https://images.pexels.com/photos/7172646/pexels-photo-7172646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Fitnes Tracker",
    title:
      "Mobile-first application to track workouts, nutrition, and health metrics.",
    tag: ["React Native", "GraphQL", "MonggoDb"],
    img: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Podcast Platform",
    title:
      "Audio streaming platform with podcast discovery and playback features.",
    tag: ["React", "AWS", "Node.js"],
    img: "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const animateFunc = (duration = 0.5) => {
  return {
    inital: {
      opacity: 0,
      translateY: 25,
    },
    animate: {
      opacity: 1,
      translateY: 0,
    },
    transition: {
        duration: duration,
        ease: ["easeInOut"]
    }
  };
};

export { tag, project, animateFunc };
