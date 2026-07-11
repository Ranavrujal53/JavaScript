import React from 'react'

function Userprofile(props) {
  return (
    <div  style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '20px',
        width: '250px',
        textAlign: 'center',
        margin: '10px',
      }}>
        <img
        src={props.profilePic}
        alt="Profile"
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
        }}
      />
      <h2>{props.username}</h2>
      <p>{props.followers} Followers</p>
      
    </div>
  )
}

export default Userprofile
