// src/components/ProductDetails.js
import React from 'react';
import { useParams ,useHistory } from 'react-router-dom';
import { products } from './data'; // Ürün verisi

function ProductDetails() {
  const { productId } = useParams();
  
  const product = products.find(item => item.id === parseInt(productId));

  if (!product) {
    return <div>The product is cannot found.</div>;
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ maxWidth: '100%', height: 'auto' }}/>
      <p>{product.description}</p>
      
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetails;
