import { useState } from 'react';
import './Checkout.css';

const Checkout = ({ onClick }) => {
  const [negotiateAmount, setNegotiateAmount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(550);

  const handleNegotiateChange = (event) => {
    const negotiateAmount = parseInt(event.target.value, 10);
    setNegotiateAmount(negotiateAmount);
    setFinalPrice(550 - negotiateAmount);
  };

  const handlePaymentClick = () => {
    // Redirect to the payment page
    window.location.href = "https://reactpaymentpage.com";
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product 1</td>
            <td>$100</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Product 2</td>
            <td>$200</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Product 3</td>
            <td>$50</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
      <div className="negotiate-price">
        <label htmlFor="negotiate">Negotiated Price:</label>
        <input
          type="number"
          id="negotiate"
          name="negotiate"
          min="20"
          max="100"
          value={negotiateAmount}
          onChange={handleNegotiateChange}
        />
      </div>
      <div className="total-price">
        <p>
          Total Price: $550
          <br />
          Final Price: ${finalPrice}
        </p>
      </div>
      <button className="payment-button" onClick={handlePaymentClick}>
        Proceed to Payment
      </button>
      <button className="back-button" onClick={onClick}>
        Back to Cart
      </button>
    </div>
  );
};

export default Checkout;