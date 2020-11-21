import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

export default function Cards({ cardItems }) {
  return (
    <>
      {cardItems.map((cardItem) => (
        <Card
          className="d-inline-flex shadow p-3 mb-5 bg-white rounded zoom"
          style={{
            width: "20rem",
            "margin-right": "25px"
          }}
        >
          <Card.Img variant="top" src={cardItem.cardItemImage} />
          <Card.Body>
            <Card.Title>{cardItem.cardItemTitle}</Card.Title>
            <Card.Text>{cardItem.cardItemContent}</Card.Text>
            {cardItem.buttons && Array.isArray(cardItem.buttons) ? (
              cardItem.buttons.map((button) => (
                <span class="badge badgeSkills">{button}</span>
              ))
            ) : (
              <>
                <Button
                  variant="secondary"
                  className="mr-5"
                  href={cardItem.cardItemUrl}
                  target="_blank"
                >
                  {cardItem.buttons}
                </Button>
                {cardItem.cardItemDate}
              </>
            )}
          </Card.Body>
          {cardItem && cardItem.cardItemFooterUrl ? (
            <Card.Footer>
              <a
                href={cardItem.cardItemFooterUrl}
                rel="noreferrer"
                target="_blank"
                style={{
                  fontSize: "1.5rem",
                  color: "#102a42"
                }}
              >
                <FaGithub></FaGithub>
              </a>
            </Card.Footer>
          ) : null}
        </Card>
      ))}
    </>
  );
}
