import React from "react";
import GuestNavBar from "./GuestNavBar"
import UserNavBar from "./UserNavBar"


function NavBarDropDown({cookies, deleteUsername}) {
  const username = cookies.get('username')
  if (username) {
    return (
      <UserNavBar username={username} deleteUsername={deleteUsername}/>
    )
  } else {
    return (
      <GuestNavBar />
    )
  }
}

export default NavBarDropDown;
