import { useState } from "react";
import React from "react";
import { Card, Container } from "react-bootstrap";
const Products = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      product_name: "Product 1",
      price: 999,
      image: "/logo192.png",
    },
    {
      id: 2,
      product_name: "Product 2",
      price: 999,
      image: "/logo192.png",
    },
    {
      id: 3,
      product_name: "Product 3",
      price: 999,
      image: "/logo192.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 999,
      image: "/logo192.png",
    },
    {
      id: 5,
      product_name: "Product 5",
      price: 999,
      image: "/logo192.png",
    },
  ]);
  return (
    <Container fluid>
      {items.map((elem) => {
        return (
          <Card style={{ float: "left" }}>
            <Card.Img
              variant="top"
              style={{
                height: "200px",
                width: "200px",
                display: "flex",
                justifyContent: "left",
              }}
              src={process.env.PUBLIC_URL + elem.image}
            />
            <Card.Body>
              <Card.Title>{elem.product_name}</Card.Title>
              <Card.Text>${elem.price}</Card.Text>
              <button>Buy Now</button>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default Products;
