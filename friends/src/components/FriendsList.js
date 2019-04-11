import React from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';

class FriendsList extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className='FriendsList'>
        <h2>Your Friends</h2>
        <ul className='friends-list'>
          {this.props.friends.map(friend => <li key={friend.id}>{friend.name} ({friend.age}): {friend.email}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ friends, fetchingFriends }) => ({
  friends, fetchingFriends
});

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsList);