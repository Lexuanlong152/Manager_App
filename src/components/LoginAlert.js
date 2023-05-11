
import { useState } from "react";
import { Alert, Button } from "react-bootstrap";

const LoginAlert = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && (
        <Alert className="mt-1" variant="danger">
          <p>Tài khoản , mật khẩu không chính xác</p>
          <Button onClick={setShow(true)} variant="outline-primary">
            Close
          </Button>
        </Alert>
      )}
    </div>
  );
};

export default LoginAlert;
