import React, { useState } from 'react';
import '../Checkout.css';

function Checkout() {
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add logic to handle the order placement using the shippingInfo data
    // For now, let's just display a success message
    alert('Order placed successfully! Thank you for shopping with us.');
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={shippingInfo.fullName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={shippingInfo.address}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={shippingInfo.city}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Zip Code:
          <input
            type="text"
            name="zipCode"
            value={shippingInfo.zipCode}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
