import React, { Component } from 'react'

export default class UserGreetingClass extends Component {
  render() {

     const userinfo = this.props.user;
    return (
      <div>
         <h2>Hello, {userinfo.name}! (Class Component)</h2>
      </div>
    );
  }
}
