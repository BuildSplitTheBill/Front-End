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
          {/* {props.friends.map(friend => (
            <tr>
              <td>{friend.name}</td>
              <td>{friend.email}</td>
            </tr>
          ))} */}
          <tr>
            <td>Jim Jolly</td>
            <td>jim.jolly@gmail.com</td>
          </tr>
          <tr>
            <td>Chris Mowry</td>
            <td>chris.mowry@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FriendsList;
