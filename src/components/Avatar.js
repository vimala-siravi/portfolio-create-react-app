import { Container, Row, Col, Image } from "react-bootstrap";
import avatar from "../avatar.png";

export default function Avatar({ avatarClass }) {
  return (
    <Container>
      <Row className={avatarClass || "avatar"}>
        <Col xs={12} sm={4} md={4}>
          <Image src={avatar} roundedCircle className="avatar-img" />
        </Col>
      </Row>
    </Container>
  );
}
