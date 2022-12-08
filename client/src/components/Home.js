import React from "react";
import { Carousel, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Properties from "./Properties";

function Home({ properties }) {
  return (
    <>
      <Carousel>
        
        {properties.slice(0, 5).map((property) => (
          <Carousel.Item key={property.id}>
            <img
              className="d-block w-100"
              src={property.image_url}
              alt={property.name}
            />
            <Carousel.Caption>
              <h3>{property.name}</h3>
              <p>{property.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
        <Button variant="primary" className="btn-properties">
          View Properties
        </Button>{" "}
      </Carousel>
      <Container className="home-container">
        <Properties properties={properties} />
      </Container>
    </>
  );
}

export default Home;