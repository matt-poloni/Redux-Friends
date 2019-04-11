import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creds: {
        username: '',
        password: '',
      }
    }
  }

  handleChanges = e => {
    this.setState({
      creds: {
        ...this.state.creds,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <form
        // onSubmit={}
      >
        <input
          type="text"
          name="username"
          value={this.state.creds.username}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.creds.password}
          onChange={this.handleChange}
        />
        <button>
          'Log In'
        </button>
      </form>
    );
  }
}

export default Login;