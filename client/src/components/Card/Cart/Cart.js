import React, { Fragment, useContext, useState } from 'react';
import { CartItemsContext } from '../../../Context/CartItemsContext';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import './Cart.css';
import Button from '@mui/material/Button';
import StripeCheckout from 'react-stripe-checkout'; // Import StripeCheckout
import axios from 'axios';
import CartCard from '../Cart/CartCard/CartCard';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '350px',
  width: '45%',
  height: '400px',
  bgcolor: 'background.paper',
  border: '5px solid #FFE26E',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};

const Cart = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const cartItems = useContext(CartItemsContext);
  
  const handleToken = async (token) => {
    const config = {
      token,
      amount: cartItems.totalAmount * 100, // Amount should be in cents
    };

    try {
      const res = await axios.post('http://localhost:5000/api/payment', config);
      console.log(res.data);
      window.location.replace(res.data.checkoutUrl);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <Badge badgeContent={cartItems.items.length} color="error">
        <ShoppingCartIcon color="black" onClick={handleOpen} sx={{ width: '35px' }} />
      </Badge>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="cart__header">
            <h2>Your Cart</h2>
          </div>
          <div className="cart__items__container">
            <div className="cartItems">
              {cartItems.items.length === 0 ? (
                <div className="cart__empty">Empty cart!</div>
              ) : (
                <div className="shop__cart__items">
                  {cartItems.items.map((item) => (
                    <CartCard key={item._id} item={item} />
                  ))}
                </div>
              )}
              {cartItems.items.length > 0 && (
                <div className="options">
                  <div className="total__amount">
                    <div className="total__amount__label">Total Amount:</div>
                    <div className="total__amount__value">${cartItems.totalAmount}.00</div>
                  </div>
                  <div className="checkout">
                    {/* Replace the Button with StripeCheckout */}
                    <StripeCheckout
                      token={handleToken}
                      stripeKey="pk_test_51NkUQgSDWmLXZZwiepNfIyBusYpTD6ilmn3Runtqwc7KS3YGDxtYtXCuIXEWIzsMl9IvscZUSGP1ED1UkyluWSOv00NeROTsP5"
                      amount={cartItems.totalAmount * 100}
                    >
                      <Button variant="outlined">Checkout</Button>
                    </StripeCheckout>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Box>
      </Modal>
    </Fragment>
  );
};

export default Cart;
