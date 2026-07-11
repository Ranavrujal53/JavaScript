import React from 'react'

function Productcard({ productName, price }) {
    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            width: "250px",
            textAlign: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            margin: "10px",
        }}>

            <h2>{productName}</h2>
            <p>Price: ₹{price}</p>
        </div>
    );
}

export default Productcard
