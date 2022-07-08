import { ListGroup } from "react-bootstrap";


const Users = (props) => {
  return (
    <div className="m-5 p-2 bg-secondary d-flex justify-content-center ">
      <ListGroup className="allign-items-center">
        {props.users.map((user) => {
          return (
            <ListGroup.Item className="m-1" key={user.id}>
              {user.name} ({user.age} years old.)
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};
export default Users;
