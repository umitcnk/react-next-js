import { useState } from "react";
import { Form, Button } from "react-bootstrap";

import ErrorAlert from "./ErrorAlert";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [show, setShow] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setShow({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (enteredAge < 15) {
      setShow({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setShow(null);
  };

  return (
    <div>
      <Form
        className="m-5 md-4 bg-secondary p-4  justify-content-center"
        onSubmit={onSubmitHandler}
      >
        <Form.Group className=" mb-3 allign-items-center" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3 allign-items-center" controlId="age">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="number"
            placeholder="Age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
        </Form.Group>

        <Button
          className="mb-3 allign-items-center"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      {show && (
        <ErrorAlert
          title={show.title}
          message={show.message}
          onConfirm={errorHandler}
        ></ErrorAlert>
      )}
    </div>
  );
};
export default AddUser;
