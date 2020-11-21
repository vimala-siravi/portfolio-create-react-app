import project1 from "../blog1.jpeg";
import project2 from "../project2.png";
import project3 from "../project3.gif";
import project4 from "../project4.gif";
import project5 from "../blog2.PNG";

const projects = [
  {
    id: 1,
    cardItemTitle: "Create the content of a html file with one function call.",
    cardItemContent:
      "This project aims at running a node.js script which will extract the data and print response from an API to a html report (table).",
    buttons: ["JAVASCRIPT", "NODEJS"],
    cardItemDate: "Jun 30, 2019",
    cardItemImage: project1,
    cardItemFooterUrl: "https://github.com/vimala95/report"
  },
  {
    id: 2,
    cardItemTitle: "JSX Compiler",
    cardItemContent:
      "This project is about building a JSX Live Compiler as a React Component",
    buttons: ["REACT"],
    cardItemDate: "Sep 15, 2019",
    cardItemImage: project2,
    cardItemFooterUrl: "https://github.com/vimala95/jsx-compiler"
  },
  {
    id: 3,
    cardItemTitle: "Slideshow App",
    cardItemContent: "A basic slideshow application",
    buttons: ["REACT"],
    cardItemDate: "Nov 17, 2020",
    cardItemImage: project3,
    cardItemFooterUrl: "https://github.com/vimala95/Slideshow-App"
  },
  {
    id: 4,
    cardItemTitle: "Sorting-App",
    cardItemContent: "A basic article sorting application",
    buttons: ["REACT"],
    cardItemDate: "Nov 17, 2020",
    cardItemImage: project4,
    cardItemFooterUrl: "https://github.com/vimala95/Sorting-App"
  },
  {
    id: 5,
    cardItemTitle: "React Portfolio.",
    cardItemContent: "A basic portfolio in React.",
    buttons: ["REACT"],
    cardItemDate: "Nov 30, 2020",
    cardItemImage: project5,
    cardItemFooterUrl: "https://github.com/vimala95/portfolio-create-react-app"
  }
];

export default projects;
