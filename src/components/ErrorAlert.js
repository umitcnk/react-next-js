import { Alert, Button } from "react-bootstrap";

const ErrorAlert = (props) => {
  return (
    <div
      className="vh-100 fixed-top d-flex justify-content-center bg-light"
      onClick={props.onConfirm}
    >
      <Alert className=" allign-item-center" variant="success">
        <Alert.Heading>{props.title}</Alert.Heading>
        <p>{props.message}</p>
        <div>
          <Button onClick={props.onConfirm} variant="outline-success">
            Okay
          </Button>
        </div>
      </Alert>
    </div>
  );
};
export default ErrorAlert;
