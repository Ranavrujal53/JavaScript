import React from 'react'
import person2 from '../assets/person2.jpg';

function MiniProfile(props) {

  const profile = props.user
  
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1> Instagram Profile</h1>

      <img src={person2} alt="Profile" width="200"
        style={{
          borderRadius: '50%',
          border: '2px solid gray'
        }}/>
      <h2>name : {profile.name}</h2>
      <h2>status: {profile.status}</h2>
    </div>
  )
}

export default MiniProfile
