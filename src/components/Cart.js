import React from "react";

function Cart({ cartItems }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} x {product.quantity}
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice.toFixed(2)}</p> {/* Toplam tutarı göster */}
      
    </div>
  );
}

export default Cart;
