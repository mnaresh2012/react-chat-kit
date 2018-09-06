import React, { Component, Fragment } from 'react';

class UsernameForm extends Component {
 constructor(props) {
   super(props)
   this.state = {
     username: ''
   }
   this.onSubmit = this.onSubmit.bind(this);
   this.onChange = this.onChange.bind(this);
 }

 onSubmit(e) {
   e.preventDefault();
   this.props.onSubmit(this.state.username);
 }

 onChange(e) {
    this.setState({ username: e.target.value })
  }

  render() {
    return (
      <Fragment>
        <div className='container'>
          <h1>React Chat-Room</h1>
          <form onSubmit={this.onSubmit}>
            <input
              className = 'username-input'
              type="text"
              placeholder="username"
              onChange={this.onChange}
            />
            <input className = 'submit-btn' type="submit" value= 'Login' />
          </form>
        </div>
      </Fragment>
    )
  }
}
export default UsernameForm;