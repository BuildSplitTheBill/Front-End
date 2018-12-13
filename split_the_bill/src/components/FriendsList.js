import React from "react";

const FriendsList = props => {
  return (
    <div className="friends-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.friends.map(friend => (
            <tr key={friend.key}>
              <td>{friend.name}</td>
              <td>{friend.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FriendsList;
