import React from 'react'

function Followlist(props) {
  return (
    <div>
        <h2>Followers</h2>
         {props.followers.length > 0 ? (
        <ul>
          {props.followers.map((follower, i) => (
            <li key={i}>{follower}</li>
          ))}
        </ul>
      ) : (
        <p>No followers yet</p>
      )}
    </div>
  )
}

export default Followlist
