import Container from "react-bootstrap/Container";
import { useContext, useState } from "react";
import { ItemsContext } from "../contexts/ItemsContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Form, Button, Card, Row, Col, Alert } from "react-bootstrap";

const initialValues = {
  phone: "",
  email: "",
  name: "",
};

export const Checkout = () => {
  const [buyer, setBuyer] = useState(initialValues);
  const { items, reset, removeItems } = useContext(ItemsContext);
  const [orderSuccess, setOrderSuccess] = useState(null);

  const total = items.reduce(
    (acc, act) => acc + (act.price * act.quantity || 0),
    0
  );

  const handleChange = (eve) => {
    setBuyer((prev) => ({
      ...prev,
      [eve.target.name]: eve.target.value,
    }));
  };

  const handleOrder = async () => {
    const order = {
      buyer: buyer,
      items: items,
      total: total,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    try {
      const docRef = await addDoc(orderCollection, order);
      if (docRef.id) {
        setOrderSuccess(`Su compra ha sido procesada correctamente`);

        setTimeout(() => {
          reset();
          setBuyer("initialValues");
        }, 3000);
      }
    } catch (error) {
      console.error("Error al procesar la compra: ", error);
    }
  };

  if (!items.length && !orderSuccess)
    return <Alert variant="info">No hay ningún producto seleccionado</Alert>;

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header>Resumen de la Compra</Card.Header>
            <Card.Body>
              <button type="button" className="btn btn-primary" onClick={reset}>
                Vaciar Carrito
              </button>
              <hr />
              {items?.map((i) => (
                <Row key={i.id} className="mb-3">
                  <Col md={4}>
                    <img src={i.img} alt="producto" className="img-fluid" />
                  </Col>
                  <Col md={8}>
                    <h5>{i.title}</h5>
                    <p>Cantidad: {i.quantity}</p>
                    <p>Precio unitario: ${Number(i.price)}</p>
                    <p>Total: ${Number(i.price) * i.quantity}</p>
                    <Button variant="danger" onClick={() => removeItems(i.id)}>
                      Eliminar
                    </Button>
                  </Col>
                </Row>
              ))}
              <h4>Total de la orden: ${total}</h4>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header>Datos del Comprador</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su nombre"
                    name="name"
                    value={buyer.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese su email"
                    name="email"
                    value={buyer.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su teléfono"
                    name="phone"
                    value={buyer.phone}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  onClick={handleOrder}
                  className="w-100"
                >
                  Comprar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {orderSuccess && (
        <Alert variant="success" className="mt-4">
          {orderSuccess}
        </Alert>
      )}
    </Container>
  );
};

export default Checkout;
