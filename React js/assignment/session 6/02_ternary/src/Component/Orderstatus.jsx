import React from 'react'

function Orderstatus(props) {
  return (
    <div>
      <h2>
        {props.isDelivered ? "Order Delivered  🎉" : "Order on the way  🚚"}
      </h2>
    </div>
  )
}

export default Orderstatus
