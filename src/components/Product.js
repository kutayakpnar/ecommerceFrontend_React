import React from 'react'

function Product({product , addToCart}) {
  return (
    <div className='product'>
        <div className='image-container'>
        <img src={product.image} alt={product.name}/> 
        </div>
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
        <button onClick={()=>addToCart(product)}>Add to Cart</button>

        
        
    </div>
  )
}

export default Product