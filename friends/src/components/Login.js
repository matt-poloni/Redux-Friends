import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

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
        [e.target.name]: e.target.value,
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.creds)
      .then(() => {
        // this.props.history.push('/app');
      });
    this.setState({
      creds: {
        username: '',
        password: '',
      }
    })
  };

  render() {
    return (
      <form
        onSubmit={this.login}
      >
        <input
          type="text"
          name="username"
          value={this.state.creds.username}
          onChange={this.handleChanges}
        />
        <input
          type="password"
          name="password"
          value={this.state.creds.password}
          onChange={this.handleChanges}
        />
        <button
          type="submit"
        >
          {
            this.props.loggingIn
              ? 'Logging In...'
              : 'Log In'
          }
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ loggingIn, error }) => ({
  error,
  loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);