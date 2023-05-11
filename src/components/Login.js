import { useEffect, useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Validation from "./Validation";
// import LoginAlert from "./LoginAlert";

function Login() {
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();
  const acoutUser = {
    acout: "lexuanlong",
    pass: "010501",
  };

  const [typePassword, setTypePassword] = useState("password");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [auth, setAuth] = useState(false);
  const [errors, setError] = useState({});
  // const [alert, setAlert] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const changeTypePassword = () => {
    if (typePassword === "password") {
      setTypePassword("text");
    } else {
      setTypePassword("password");
    }
  };
  // function AlertDismissibleExample() {
  //   return (
  //     <div class="alert alert-danger" role="alert">
  //       This is a danger alert—check it out!
  //     </div>
  //   );
  // }

  const handleSignIn = (e) => {
    e.preventDefault();
    setError(Validation(username, password));
    if (username === acoutUser.acout && password === acoutUser.pass) {
      setAuth(true);
    } else {
      alert("Tài khoản ,mật khẩu không chính xác");
      setUsername("");
      setPassword("");
      userRef.current.focus();
    }
  };

  return (
    <>
      {auth ? (
        navigate("/home")
      ) : (
        <>
          <Form className="auth-form">
            <div className="auth-form-content">
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  ref={userRef}
                  type="text"
                  placeholder="Enter email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                {errors.username && (
                  <p style={{ color: "red" }}>{errors.username}</p>
                )}
                <Form.Text className="text-muted mt-2"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3 mt-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={typePassword}
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {errors.password && (
                  <p style={{ color: "red" }}>{errors.password}</p>
                )}
                <Form.Text className="text-muted mt-2"></Form.Text>
              </Form.Group>
              <div className="text-right">
                <Form.Check className="mb-1 pl-0">
                  <Form.Check.Label>
                    <Form.Check.Input
                      type="checkbox"
                      onChange={changeTypePassword}
                    ></Form.Check.Input>
                    <span className="form-check-sign"></span>
                    Show password
                  </Form.Check.Label>
                </Form.Check>
              </div>
              <div className="auth-button-submit text-center">
                <Button
                  variant="outline-info"
                  type="submit"
                  onClick={handleSignIn}
                >
                  SUBMID
                </Button>
              </div>
            </div>
          </Form>
          {/* {alert && <LoginAlert />}    */}
        </>
      )}
    </>
  );
}
export default Login;
