import React from "react";
import data from "../data/products.json";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  //lo que se muestra hasta que pasan los 2seg//
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    })
      .then((response) => {
        if (!id) {
          setItems(response);
        } else {
          const filter = response.filter((i) => i.category === id);
          setItems(filter);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container className="mt-4">
      <h1>Productos</h1>
      <div className="d-flex flex-wrap justify-content-between">
        {items.map((item) => (
          <Card key={item.id} style={{ width: "18rem", marginBottom: "1rem" }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.category}</Card.Text>
              <Card.Text>{item.detail}</Card.Text>
              <Link to={`/item/${item.id}`}>
                <Button variant="primary">Ver más</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ItemListContainer;
