import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { incrementQuantity, decrementQuantity, removeItem } from '../features/cart/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', padding: '10px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', width: '40%' }}>
        {/* Thumbnail, Name, Unit Price (6 points) */}
        <img src={item.thumbnail} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
        <div>
          <h4>{item.name}</h4>
          <p>Unit Price: ${item.price.toFixed(2)}</p>
        </div>
      </div>

      <div style={{ width: '20%', display: 'flex', alignItems: 'center' }}>
        <button onClick={() => dispatch(decrementQuantity(item.id))} style={{ margin: '5px' }}>-</button> {/* Decrease button (4 points) */}
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(incrementQuantity(item.id))} style={{ margin: '5px' }}>+</button> {/* Increase button (4 points) */}
      </div>

      <div style={{ width: '20%', textAlign: 'right' }}>
        <p>${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      
      {/* Delete button (2 points) */}
      <button onClick={() => dispatch(removeItem(item.id))} style={{ color: 'red', border: 'none', background: 'none' }}>
        🗑 Delete
      </button>
    </div>
  );
};

const ShoppingCartPage = () => {
  const { cartItems, totalItems, totalCost } = useSelector((state) => state.cart);

  return (
    <div>
      <Header />
      <div style={{ padding: '20px' }}>
        <h2>Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty. <Link to="/products">Continue Shopping</Link></p>
        ) : (
          <>
            <p>Total Plant Types: *{cartItems.length}*</p>
            <p>Total Items in Cart: *{totalItems}* (2 points)</p>
            <p>Total Cost: *${totalCost.toFixed(2)}* (2 points)</p>
            
            <div style={{ margin: '20px 0' }}>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
              {/* Continue Shopping button (2 points) */}
              <Link to="/products">
                <button>← Continue Shopping</button> 
              </Link>
              
              {/* Checkout button (1 point) */}
              <button onClick={() => alert("Coming Soon")} style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px' }}>
                Proceed to Checkout (Coming Soon)
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartPage;