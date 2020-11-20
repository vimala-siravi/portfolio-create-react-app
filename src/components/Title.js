import React from "react";

const Title = ({ title, textAlignment, marginAlignment }) => {
  return (
    <div className="section-title" style={{ "text-align": textAlignment }}>
      <h2>{title || "default title"}</h2>
      <div className="underline" style={{ margin: marginAlignment }}></div>
    </div>
  );
};

export default Title;
