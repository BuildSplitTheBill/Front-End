import React from "react";

import AddFriendForm from "../components/AddFriendForm";
import FriendsList from "../components/FriendsList";

const FriendsView = props => {
  return (
    <div className="friends-page">
      <AddFriendForm />
      <FriendsList
        friends={props.friends}
        // addFriend={props.addFriend}
      />
    </div>
  );
};

export default FriendsView;
