import React from "react";

const FriendsList = props => {
  return (
    <div className="friends-list">
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
        <tr>
          <td>Jim Jolly</td>
          <td>jim@gmail.com</td>
        </tr>
        <tr>
          <td>Chris Mowry</td>
          <td>chris@gmail.com</td>
        </tr>
      </table>
    </div>
  );
};

export default FriendsList;
