import React from "react";
import Title from "../components/Title";
import blogs from "../constants/blogs";
import { Card, Button } from "react-bootstrap";

export default function Blog() {
  return (
    <header className="pt-5 mt0" style={{ height: "90vh" }}>
      <div className="container">
        <div>
          <Title title="Blog" textAlignment="center" marginAlignment="auto" />
        </div>
        <div className="pt-5 ml-5 mr-4 row">
          {blogs.map((blog) => (
            <Card
              className="d-inline-flex shadow p-3 mb-5 bg-white rounded zoom"
              style={{
                width: "20rem",
                "margin-right": "25px"
              }}
            >
              <Card.Img variant="top" src={blog.blogImage} />
              <Card.Body>
                <Card.Title>{blog.blogTitle}</Card.Title>
                <Card.Text>{blog.blogContent}</Card.Text>
                <>
                  <Button
                    variant="secondary"
                    className="mr-5"
                    href={blog.blogUrl}
                    target="_blank"
                  >
                    {blog.buttonText}
                  </Button>
                  {blog.blogDate}
                </>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </header>
  );
}
