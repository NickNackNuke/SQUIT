import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { fetchProducts, saveProduct } from '../api/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../design/products.css';

const Products = () => {
  const [product, setProduct] = useState({
    product_code: '',
    name: '',
    description: '',
    price: '',
    qty: '',
    date_added: ''
  });
  const [errors, setErrors] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const validateProduct = (product) => {
    const errors = {};
    if (!product.product_code) errors.product_code = 'Product code is required';
    if (!product.name) errors.name = 'Name is required';
    if (!product.description) errors.description = 'Description is required';
    if (!product.price) errors.price = 'Price is required';
    if (!product.qty) errors.qty = 'Quantity is required';
    if (!product.date_added) errors.date_added = 'Date added is required';
    return errors;
  };

  const handleSave = async (e) => {
    e.preventDefault();
    console.log('handleSave called');
    const validationErrors = validateProduct(product);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.log('Validation errors:', validationErrors);
    } else {
      try {
        const newProduct = { ...product };
        console.log('Saving product:', newProduct);
        await saveProduct(newProduct); // Call the saveProduct API function
        alert('product is successfully saved.');
        setProducts((prevProducts) => [...prevProducts, newProduct]);
        handleClear();
      } catch (error) {
        console.error("Error saving product", error);
        alert('Saving product failed. Please try again.');
      }
    }
  };

  const handleClear = () => {
    setProduct({
      product_code: '',
      name: '',
      description: '',
      price: '',
      qty: '',
      date_added: ''
    });
    setErrors({});
  };

  return (
    <Container className="form-container">
      <Form onSubmit={handleSave}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formProductCode">
            <Form.Label>Product Code</Form.Label>
            <Form.Control
              type="text"
              name="product_code"
              value={product.product_code}
              onChange={handleChange}
              isInvalid={!!errors.product_code}
            />
            <Form.Control.Feedback type="invalid">
              {errors.product_code}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={product.description}
              onChange={handleChange}
              isInvalid={!!errors.description}
            />
            <Form.Control.Feedback type="invalid">
              {errors.description}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              isInvalid={!!errors.price}
            />
            <Form.Control.Feedback type="invalid">
              {errors.price}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              name="qty"
              value={product.qty}
              onChange={handleChange}
              isInvalid={!!errors.qty}
            />
            <Form.Control.Feedback type="invalid">
              {errors.qty}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formDateAdded">
            <Form.Label>Date Added</Form.Label>
            <Form.Control
              type="date"
              name="date_added"
              value={product.date_added}
              onChange={handleChange}
              isInvalid={!!errors.date_added}
            />
            <Form.Control.Feedback type="invalid">
              {errors.date_added}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Save
        </Button>
        <Button variant="secondary" type="button" onClick={handleClear} className="ms-2">
          Clear
        </Button>
      </Form>
      <div className="products-list mt-4">
        <h2>Products List</h2>
        <ul>
          {products.map((prod) => (
            <li key={prod._id}>
              <h3>{prod.name}</h3>
              <p>ProductCode: {prod.product_code}</p>
              <p>Description: {prod.description}</p>
              <p>Price: ${prod.price}</p>
              <p>Quantity: {prod.qty}</p>
              <p>Date Added: {new Date(prod.date_added).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Products;
