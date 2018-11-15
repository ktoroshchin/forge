import React from "react";
import WorldList from "./world-list"

function Homepage() {
  return (
    <div>
      <WorldList />
    </div>
  );
}


const findAllUsers =
  gql`
query {
  allUsers{
    id
    first_name
    last_name
    email
  }
}`;


const Users = () => (
  <Query query={findAllUsers}>

    {({ loading, error, data }) => {
      if (loading) return <div>Fetching</div>
      if (error) return <div>Error</div>

      return (data.findAllUsers.map(({ id, first_name, last_name, email }) => (
        <div key={id}>
          <p>{first_name}</p>
          <p>{last_name}</p>
          <p> {email} </p>
        </div>
      )));
    }}
  </Query>
);




class Homepage extends Component {
  render() {
    return(
      <div>
        <h2>Worlds</h2>
        <div className="world">
          <h4>World 1</h4>
          <p>Description</p>
        </div>
        <div className="world">
          <h4>World 2</h4>
          <p>Description</p>
        </div>
        <div className="world">
          <h4>World 3</h4>
          <p>Description</p>
        </div>
        <Users />
      </div>)
    }
  }
export default Homepage;


