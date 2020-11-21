import React from "react";
import Title from "../components/Title";
import blogs from "../constants/blogs";
import Cards from "../components/Cards";

export default function Blog() {
  return (
    <header className="pt-5 mt0" style={{ height: "90vh" }}>
      <div className="container">
        <div>
          <Title title="Blog" textAlignment="center" marginAlignment="auto" />
        </div>
        <div className="pt-5 ml-5 mr-4 row">
          <Cards cardItems={blogs} />
        </div>
      </div>
    </header>
  );
}
