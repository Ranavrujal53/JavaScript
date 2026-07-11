import React, { useState } from 'react'

function Like_button() {
    const [count,setcount] = useState(0);

    const like = () => {
        setcount(count + 1);
    };


  return (
    <div>
        <button onClick={like} style={{
        backgroundColor: "#ff4d6d",
        color: "white",
        border: "none",
        padding: "12px 24px",
        fontSize: "20px",
        borderRadius: "8px",
        cursor: "pointer",
      }}>❤️{count}</button>
      
    </div>
  );
}

export default Like_button
