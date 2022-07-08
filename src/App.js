import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import AddUser from "./components/AddUser";


import Users from "./components/Users";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          id: Math.random().toString(),
          name: uName,
          age: uAge,
        },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <Users users={usersList}></Users>
    </div>
  );
}

export default App;
