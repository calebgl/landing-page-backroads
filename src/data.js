import tour1 from "../public/images/tour-1.jpg";
import tour2 from "../public/images/tour-2.jpg";
import tour3 from "../public/images/tour-3.jpg";
import tour4 from "../public/images/tour-4.jpg";

export const pageLinks = [
  { href: "#home", text: "home" },
  { href: "#about", text: "about" },
  { href: "#services", text: "services" },
  { href: "#tours", text: "tours" },
];

export const socialLinks = [
  { href: "https://github.com/calebgl/landing-page-backroads", icon: "mdi:github" },
  { href: "https://www.linkedin.com/in/angel-caleb-guerrero-luna", icon: "mdi:linkedin" },
];

export const services = [
  {
    icon: "material-symbols:attach-money-rounded",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    icon: "material-symbols:hiking-rounded",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    icon: "mdi:sofa",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    duration: 6,
    cost: 2100,
    image: tour1,
  },
  {
    date: "october 1th, 2020",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "indonesia",
    duration: 11,
    cost: 1400,
    image: tour2,
  },
  {
    date: "september 15th, 2020",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "hong kong",
    duration: 8,
    cost: 5000,
    image: tour3,
  },
  {
    date: "december 5th, 2019",
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "kenya",
    duration: 20,
    cost: 3300,
    image: tour4,
  },
];
