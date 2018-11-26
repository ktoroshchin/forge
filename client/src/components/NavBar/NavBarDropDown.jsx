import React from "react";

import GuestNavBar from "./GuestNavBar"
import UserNavBar from "./UserNavBar"

export default function NavBarDropDown({cookies, deleteUser}) {
  const username = cookies.get('username')
  if (username) {
    return (
      <UserNavBar username={username} deleteUser={deleteUser} />
    )
  } else {
    return (
      <GuestNavBar />
    )
  }
}
