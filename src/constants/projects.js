import project1 from "../blog1.jpeg";
import project2 from "../project2.png";
import project3 from "../project3.gif";
import project4 from "../project4.gif";
import project5 from "../blog2.PNG";

const projects = [
  {
    id: 1,
    projectTitle: "Create the content of a html file with one function call.",
    projectContent:
      "This project aims at running a node.js script which will extract the data and print response from an API to a html report (table).",
    buttons: ["JAVASCRIPT", "NODEJS"],
    projectDate: "Jun 30, 2019",
    projectImage: project1,
    projectUrl: "https://github.com/vimbo95/report"
  },
  {
    id: 2,
    projectTitle: "JSX Compiler",
    projectContent:
      "This project is about building a JSX Live Compiler as a React Component",
    buttons: ["REACT"],
    projectDate: "Sep 15, 2019",
    projectImage: project2,
    projectUrl: "https://github.com/vimbo95/jsx-compiler"
  },
  {
    id: 3,
    projectTitle: "Slideshow App",
    projectContent: "A basic slideshow application",
    buttons: ["REACT"],
    projectDate: "Nov 17, 2020",
    projectImage: project3,
    projectUrl: "https://github.com/vimbo95/Slideshow-App"
  },
  {
    id: 4,
    projectTitle: "Sorting-App",
    projectContent: "A basic article sorting application",
    buttons: ["REACT"],
    projectDate: "Nov 17, 2020",
    projectImage: project4,
    projectUrl: "https://github.com/vimbo95/Sorting-App"
  },
  {
    id: 5,
    projectTitle: "Portfolio",
    projectContent: "A React Portfolio.",
    buttons: ["REACT"],
    projectDate: "Nov 30, 2020",
    projectImage: project5,
    projectUrl: "https://github.com/vimbo95/Portfolio"
  }
];

export default projects;
