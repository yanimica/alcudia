import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { ItemCount } from "./ItemCount";
import { ItemsContext } from "../contexts/ItemsContext";

const ItemDetailContainer = () => {
  const { addItem } = useContext(ItemsContext);

  const [items, setItems] = useState(null);

  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const value = useContext(ItemsContext);

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "items", id);

    getDoc(refDoc)
      .then((snapshot) => {
        setItems({ id: snapshot.id, ...snapshot.data() });
      })
      .finally(() => setLoading(false));
  }, [id]);

  const onAdd = (count) => {
    Swal.fire("Guardado en el carrito!");
    addItem({ ...items, quantity: count });
  };

  if (loading) {
    return <h5>Loading...</h5>;
  }

  if (!items) {
    return <h5>Item not found</h5>;
  }

  return (
    <Container className="mt-4">
      <img src={items.img} style={{ width: "24rem", marginBottom: "1rem" }} />
      <h3>
        {items.title}
        {value.items.length}
      </h3>
      <p>{items.category}</p>
      <p>{items.stock}</p>
      <p>{items.description}</p>
      <p>{items.price}</p>
      <ItemCount stock={items.stock} onAdd={onAdd} />
    </Container>
  );
};

export default ItemDetailContainer;
