import React from 'react'
import { useState } from 'react'

function Cart_items() {
    const [quantity, setquantity] = useState(0);

    const ince = () => {
        setquantity(quantity + 1);
    };

    const decr = () => {
        if(quantity > 0) {
            setquantity(quantity - 1);
        }
    };
  return (
    <div style={{
        border: "1px solid #ddd",
        padding: "15px",
        width: "300px",
        margin: "20px auto",
        borderRadius: "8px",
        textAlign: "center",
      }}>
      <h3>Apple Iphone 16</h3>

      <div  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}>
        <button onClick={decr}>-</button>

        <span style={{ fontSize: "20px", fontWeight: "bold" }}>{quantity}</span>

        <button onClick={ince}>+</button>
      </div>
    </div>
  )
}

export default Cart_items
