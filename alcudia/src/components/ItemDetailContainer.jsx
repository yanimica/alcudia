import React from "react";
import data from "../data/products.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

const ItemDetailContainer = () => {
  //item en singular - null reprenta ausencia de objeto//
  const [item, setItem] = useState([null]);
  //lo que se muestra hasta que pasan los 2seg//
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    })
      .then((response) => {
        const find = response.find((i) => i.id === Number(id));
        //nos permite recuperar el objeto interno del array que conicide//
        setItem(find);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!item) {
    return <h1>Item not found</h1>;
  }

  return (
    <Container className="mt-4">
      <h1>Productos</h1>
      <img src={item.img} height={200} />
      <h2>{item.name}</h2>
      <h3>{item.category}</h3>
      <p>{item.detail}</p>
    </Container>
  );
};

export default ItemDetailContainer;
