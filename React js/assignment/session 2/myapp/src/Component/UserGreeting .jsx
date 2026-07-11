import React from 'react';

function UserGreeting(props) {
  const userinfo = props.user;

  return (
    <div>
      <h2>Hello, {userinfo.name}! (Functional Component)</h2>
    </div>
  );
}

export default UserGreeting;