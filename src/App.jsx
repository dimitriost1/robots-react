import "./App.css";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import ScrollToTop from "./ScrollToTop";
import { Container, Row, Col } from "react-bootstrap";
import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

const fetchRobots = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

function App() {
  const { isLoading, data } = useQuery("robots", fetchRobots, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const [searchInput, setSearchInput] = useState("");
  const filteredRobots = data?.data.filter((robot) =>
    robot.name.toUpperCase().includes(searchInput.trim().toUpperCase())
  );

  return (
    <>
      <Container className="min-vh-100">
        <h1 className="fw-light text-primary fs-1 m-5 text-center">ROBOTS</h1>
        <Container>
          {/* SearchBox */}
          <Row>
            <Col>
              <SearchBox
                setSearchInput={setSearchInput}
                searchInput={searchInput}
              />
            </Col>
          </Row>
          {/* ! SearchBox */}

          {/* CardList */}
          <Row className="gy-5">
            <CardList isLoading={isLoading} robots={filteredRobots} />
          </Row>
          {/* ! CardList */}
        </Container>
      </Container>

      {/* Scroll Back to top button */}
      <ScrollToTop />
    </>
  );
}

export default App;
