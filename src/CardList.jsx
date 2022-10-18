import SingleCard from "./SingleCard";
import { Spinner } from "react-bootstrap";

const CardList = ({ isLoading, robots }) => {
  return (
    <>
      {(isLoading && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )) ||
        robots.map((robot) => (
          <SingleCard
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        ))}
    </>
  );
};

export default CardList;
