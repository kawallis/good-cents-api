import React, { Component } from 'react';

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      userName: '',
      password: ''
    };

    this.changeUserName = event => this.setState({ userName: event.target.value });
    this.changePassword = event => this.setState({ password: event.target.value });
    this.changeName = event => this.setState({ name: event.target.value });
    this.changeEmail = event => this.setState({ email: event.target.value });
    this.signUp = () => props.signUp(this.state.userName, this.state.password,this.state.name,this.state.email);
  }

  render() {
    return (
      <div>
        <div>
          <label>User Name:
            <input name="username" type="text"  onChange={this.changeUserName} value={this.state.userName} />
          </label>
        </div>
        <div>
          <label>Password:
            <input name="password" type="text" onChange={this.changePassword} value={this.state.password} />
          </label>
        </div>
        <div>
          <label>Email:
            <input name="email" type="text" onChange={this.changeEmail} value={this.state.email} />
          </label>
        </div>
        <div>
          <label>Name:
            <input name="name" type="text" onChange={this.changeName} value={this.state.name} />
          </label>
        </div>
        <div>
          <button onClick={this.logIn}>Sign Up</button>
        </div>
      </div>
    );
  }
}