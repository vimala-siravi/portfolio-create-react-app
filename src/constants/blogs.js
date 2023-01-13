import blog1 from "../blog1.jpeg";
import blog2 from "../blog2.PNG";
import blog3 from "../blog3.gif";

const blogs = [
  {
    id: 1,
    cardItemTitle: "Create the content of a html file with one function call.",
    cardItemContent: `This article is meant for someone who is looking for a quick solution on:
    1) How to fetch data from an API? 
    2) How to convert fetched data from an API into JSON? 
    3) How to display JSON data in HTML with one function call?`,
    buttons: "JAVASCRIPT",
    cardItemDate: "Jun 30, 2019",
    cardItemImage: blog1,
    cardItemUrl:
      "https://medium.com/@vimala1995/display-json-data-in-html-with-one-function-call-d9e8232bdd1d"
  },
  {
    id: 2,
    cardItemTitle: "React Portfolio.",
    cardItemContent: "A short, simple portfolio with React & GitHub Pages",
    buttons: "REACT",
    cardItemDate: "Nov 22, 2020",
    cardItemImage: blog2,
    cardItemUrl:
      "https://vimala1995.medium.com/a-short-simple-portfolio-with-react-github-pages-b1e6f3ca92b1"
  },
  {
    id: 3,
    cardItemTitle: "The secret behind JavaScript’s asynchronous nature",
    cardItemContent: "The secret behind JavaScript’s asynchronous nature",
    buttons: "Event Loop",
    cardItemDate: "Jul 4, 2022",
    cardItemImage: blog3,
    cardItemUrl:
      "https://medium.com/globant/the-secret-behind-javascripts-asynchronous-nature-c9837ed0e723"
  }
];

export default blogs;
