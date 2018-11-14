import React from "react";

function Register() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>
          First Name:
          <input type="text" name="first_name" />
        </label>
        <label>
          Last Name:
          <input type="text" name="last_name" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    )
}

export default Register;