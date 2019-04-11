import React from 'react';

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

  componentDidMount() {
    
  }

  handleChanges = e => {
    e.target.name === 'age'
      ? this.setState(prevState => ({
        friend: {
          ...prevState.friend,
          [e.target.name]: Number(e.target.value)
        }
      }))
      : this.setState(prevState => ({
        friend: {
          ...prevState.friend,
          [e.target.name]: e.target.value
        }
      }));
  }

  handleSubmit = e => {
    e.preventDefault();
    // submit
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

export default FriendForm;