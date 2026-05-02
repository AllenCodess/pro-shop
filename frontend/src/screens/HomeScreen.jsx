import { Row, Col } from "react-bootstrap";
import Product from "../components/Product.jsx";
import { useState, useEffect } from "react";
// import products from "../products.js";

const HomeScreen = () => {
  const [products, SetProducts] = useState([]);
  const [error, SetError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();

      SetProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
