import React from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';
import { Link } from 'react-router-dom';

class FriendsList extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className='FriendsList'>
        <h2>Your Friends</h2>
        {this.props.fetchingFriends
          ? <h3>Loading Friends...</h3>
          : <ul className='friends-list'>
              {this.props.friends.map(friend => <li key={friend.id}>{friend.name} ({friend.age}): {friend.email}</li>)}
              <Link to="/add-friend">
                Add Friend
              </Link>
            </ul>}
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