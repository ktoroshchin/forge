import React from "react";

import GuestNavBar from "./GuestNavBar"
import UserNavBar from "./UserNavBar"

export default function NavBarDropDown({onClick, cookies, deleteUser}) {
  const username = cookies.get('username')
  if (username) {
    return (
      <UserNavBar onClick={onClick} username={username} deleteUser={deleteUser} />
    )
  } else {
    return (
      <GuestNavBar onClick={onClick} />
    )
  }
}
