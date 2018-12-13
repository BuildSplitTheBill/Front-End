import React from "react";

import AddFriendForm from "../components/AddFriendForm";
import FriendsList from "../components/FriendsList";

const FriendsView = props => {
  return (
    <div className="friends-page">
      <AddFriendForm
        addFriend={props.addFriend}
        users={props.users}
        friends={props.friends}
      />
      <FriendsList friends={props.friends} />
    </div>
  );
};

export default FriendsView;
