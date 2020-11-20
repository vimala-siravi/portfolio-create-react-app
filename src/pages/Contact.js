import React from "react";
import Avatar from "../components/Avatar";
import Title from "../components/Title";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <header className="pt-5 mt0" style={{ height: "90vh" }}>
      <div className="container">
        <div className="pt-5 m-auto row">
          <div className="col-lg">
            <Avatar avatarClass="leftAvatar" />
          </div>
          <div className="col-lg">
            <Title title="Contact" textAlignment="left" marginAlignment="0" />
            Have a question? Hit me on my any social media handler, and I will
            make sure to get back to you.
            <br></br>
            <br></br>Additionally you can send me mail at my email directly or,
            just hit on links below to visit my social media handlers.
            <Footer />
          </div>
        </div>
      </div>
    </header>
  );
}
