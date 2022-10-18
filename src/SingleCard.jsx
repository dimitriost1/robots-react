import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

const SingleCard = ({ name, email, id }) => {
  return (
    <>
      <Col md={4}>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`https://robohash.org/${id}?size=100x100`}
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{email}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleCard;
