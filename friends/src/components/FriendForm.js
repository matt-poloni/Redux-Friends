import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: '',
        age: '',
        email: '',
      }
    }
  }

  // componentDidMount() {}

  handleChanges = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value,
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addFriend(this.state.friend)
      .then(() => {
        this.props.history.push('/');
      });
    this.setState({
      friend: {
        name: '',
        age: '',
        email: '',
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.friend.name}
          onChange={this.handleChanges}
        />
        <input
          type='number'
          min='0'
          placeholder='Age'
          name='age'
          value={this.state.friend.age}
          onChange={this.handleChanges}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={this.state.friend.email}
          onChange={this.handleChanges}
        />
        <button type="submit">
          Add Friend
        </button>
      </form>
    )
  }
}

export default connect(null, { addFriend })(FriendForm);