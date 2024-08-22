import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const ItemList = ({ products }) => {
  return (
    <Container className="mt-4">
      <div className="d-flex flex-wrap justify-content-between">
        {products.map((item) => (
          <Card key={item.id} style={{ width: "24rem", marginBottom: "1rem" }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.category}</Card.Text>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>${item.price}</Card.Text>
              <Card.Text>Stock: {item.stock}</Card.Text>
              <Link to={`/items/${item.id}`}>
                <Button variant="primary">Ver más</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ItemList;
