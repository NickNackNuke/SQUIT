import React, { useState } from 'react';
import '../design/products.css';

const Products = () => {
  const [product, setProduct] = useState({
    productCode: '',
    name: '',
    description: '',
    price: '',
    quantity: '',
    dateAdded: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSave = () => {
    console.log('Product saved:', product);
    // Add your save logic here
  };

  const handleClear = () => {
    setProduct({
      productCode: '',
      name: '',
      description: '',
      price: '',
      quantity: '',
      dateAdded: ''
    });
  };

  return (
    <div className="form-container">
      <div className="form-field">
        <label className="label">Product Code:</label>
        <input className="input" type="text" name="productCode" value={product.productCode} onChange={handleChange} />
      </div>
      <div className="form-field">
        <label className="label">Name:</label>
        <input className="input" type="text" name="name" value={product.name} onChange={handleChange} />
      </div>
      <div className="form-field">
        <label className="label">Description:</label>
        <input className="input" type="text" name="description" value={product.description} onChange={handleChange} />
      </div>
      <div className="form-field">
        <label className="label">Price:</label>
        <input className="input" type="number" name="price" value={product.price} onChange={handleChange} />
      </div>
      <div className="form-field">
        <label className="label">Quantity:</label>
        <input className="input" type="number" name="quantity" value={product.quantity} onChange={handleChange} />
      </div>
      <div className="form-field">
        <label className="label">Date Added:</label>
        <input className="input" type="date" name="dateAdded" value={product.dateAdded} onChange={handleChange} />
      </div>
      <div className="button-container">
        <button className="button" type="button" onClick={handleSave}>Save</button>
        <button className="button" type="button" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default Products;
