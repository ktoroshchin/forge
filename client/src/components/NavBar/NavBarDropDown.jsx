import React from "react";
import GuestNavBar from "./GuestNavBar"
import UserNavBar from "./UserNavBar"


function NavBarDropDown({cookies, deleteUserID}) {
  const username = cookies.get('username')
  if (username) {
    return (
      <UserNavBar username={username} deleteUserID={deleteUserID}/>
    )
  } else {
    return (
      <GuestNavBar />
    )
  }
}

export default NavBarDropDown;
