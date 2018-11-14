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
        <br/>
        <label>
          Last Name:
          <input type="text" name="last_name" />
        </label>
        <br/>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <br/>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br/>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
    )
}

export default Register;