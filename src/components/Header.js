import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import logo from "../assert/imgs/logo.jfif";
import { Link,useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function Header() {
  const handleLogout = () => {
    // window.localStorage.removeItem("accessToken");
    setShow(true);
  };

  const navigate=useNavigate()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleClickLogoutButton = () => {
      navigate('/');
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
            <Navbar.Brand className="mr-2">
              <Link to="/home" style={{ textDecoration: "none" }}>
                <img
                  alt=""
                  src={logo}
                  width="70"
                  height="70"
                  className="d-inline-block align-center"
                />
                Long's App
              </Link>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav me-auto" navbar></Nav>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/about">Trang chủ</Nav.Link>
              <Nav.Link href="/contact">Liên kết</Nav.Link>
              <NavDropdown title="Về chúng tôi" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Hoạt động</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ml-auto" navbar>
              <Nav.Item>
                <Nav.Link className="m-0">
                  {/* <ChangePassword></ChangePassword> */}
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="d-flex justify-content-center align-items-center">
                <Nav.Link
                  onClick={(e) => {
                    handleLogout();
                  }}
                >
                  <span className="d-flex flex-row ">
                    <p className="me-2">Log out</p>
                    <i className="bi bi-box-arrow-right"></i>
                  </span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-danger" onClick={handleClickLogoutButton}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;
