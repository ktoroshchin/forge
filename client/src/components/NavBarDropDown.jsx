import React from "react";
import GuestNavBar from "./GuestNavBar"
import UserNavBar from "./UserNavBar"


function NavBarDropDown({cookies, deleteUserID}) {
  const userID = cookies.get('userID')
  if (userID) {
    return (
      <UserNavBar userID={userID} deleteUserID={deleteUserID}/>
    )
  } else {
    return (
      <GuestNavBar />
    )
  }
}

export default NavBarDropDown;
