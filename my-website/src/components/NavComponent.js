import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { scrollToComponent } from "./ScrollTo.js"; // Import the scroll utility
import Features from "./Features.js";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row.js";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth.js";
import Header from "./Header.js";


function NavComponent() {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("login"); // Track the active tab

  ////logout
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("logout successfully");
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleLinkClick = (componentId) => {
    scrollToComponent(componentId);
  };
  const handleCloseModal = () => {
    setShow(false);
  };

  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [phone, SetPhone] = useState("");
  const [address, SetAddress] = useState("");
  const [auth, setAuth] = useAuth();
  const [otp, setOtp] = useState(0);
  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        // if (window.Email) {
        //   window.Email.send({
        //     SecureToken: "5003673a-3d81-4ca7-8c50-8e7c21d5190e",
        //     To: email,
        //     From: "adityasingh280303@gmail.com",
        //     Subject: "welcome",
        //     Body: `<h1>Welcome to our awesome website!</h1><p>Thank you for joining us.</p>`,
        //   });
      // }
      toast.success("mail sent");
      } else {
        toast.error(res.data.message);
        setActiveTab("login");
        setShow(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        setShow(false);
      } else {
        toast.error(res.data.message);
        setShow(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  // const otp_field = async()=>{
    
  // }

  //Take the otp from the user and send it to the backend for cross checking..remaining
  const submitotp = async()=>{
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
    }catch(error){
      console.log(error);
      toast.error("something went wrongg");
      }
  }

  return (
    <>
      <Navbar expand="lg" className="navbar-dark bg-dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src="/expert_cv-removebg-preview.png"
              className="navbar-brand"
              style={{ width: "100px", height: "45px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => handleLinkClick}>Home</Nav.Link>
              <Nav.Link onClick={() => handleLinkClick("section")}>
                Template
              </Nav.Link>
              <Nav.Link onClick={() => handleLinkClick("features")}>
                Features
              </Nav.Link>
              <Nav.Link onClick={() => handleLinkClick("profession")}>
                Profession
              </Nav.Link>
            </Nav>
            <Row xs="auto">
              {!auth.user ? (
                <>
                  <Button
                    variant="outline-success"
                    type="submit"
                    onClick={() => setShow(true)}
                    style={{
                      position: "relative",
                      margin: "auto",
                      marginRight: "9px",
                    }}
                  >
                    <Button
                      className="btn btn-success"
                      style={{ textDecoration: "none" }}
                    >
                      login/Signup
                    </Button>
                  </Button>
                </>
              ) : (
                <>
                  {/* Responsive NavDropdown */}
                  <NavDropdown
                    title={auth?.user?.name}
                    variant="success"
                    className="btn btn-outline-success text-white bold d-lg-none" // Hide on screens larger than 992px wide
                  >
                    <NavDropdown.Item
                      className="btn"
                      style={{}}
                      onClick={handleLogout}
                    >
                      logout
                    </NavDropdown.Item>
                  </NavDropdown>

                  {/* Regular NavDropdown for larger screens */}
                  <NavDropdown
                    title={auth?.user?.name}
                    variant="success"
                    className="btn btn-outline-success text-white bold d-none d-lg-block" // Hide on screens smaller than 992px wide
                    id="basic-nav-dropdown"
                    align="end"
                  >
                    <NavDropdown.Item
                      className="btn"
                      style={{}}
                      onClick={handleLogout}
                    >
                      logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w "
          contentClassName="bg-dark text-light"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton style={{ backgroundColor: "#302f3b0" }}>
            <Modal.Title id="example-custom-modal-styling-title ">
              login/Signup page
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#302f3b" }}>
            <Nav fill variant="tabs" activeKey={activeTab} className="bg-dark">
              <Nav.Item>
                <Nav.Link
                  className="text-success"
                  eventKey="login"
                  onClick={() => handleTabClick("login")}
                >
                  <b>Login</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="link-1"
                  className="text-success"
                  onClick={() => handleTabClick("signup")}
                >
                  <b> Signup</b>
                </Nav.Link>
              </Nav.Item>
            </Nav>

            {/* login */}
            {activeTab === "login" ? (
              // Display login input fields when the "Login" tab is active
              <Form onSubmit={handleLogin}>
                <Container fluid className="text-white">
                  <Row>
                    <label>Email:</label>
                    <input
                      className="bg-dark text-white"
                      type="text"
                      id="getEmail"
                      value={email}
                      onChange={(e) => {
                        SetEmail(e.target.value);
                      }}
                      required
                    />
                  </Row>
                  <Row>
                    <label>Password:</label>
                    <input
                      className="bg-dark text-white"
                      type="password"
                      id="getPassword"
                      value={password}
                      onChange={(e) => {
                        SetPassword(e.target.value);
                      }}
                      required
                    />
                  </Row>
                  <Row>
                    <Button
                      xs="auto"
                      variant="outline-light"
                      type="submit"
                      style={{
                        margin: "auto",
                        top: "4px",
                        position: "relative",
                        width: "auto",
                      }}
                    >
                      login
                    </Button>
                  </Row>
                </Container>
              </Form>
            ) : (
              // Display signup input fields when the "Signup" tab is active
              <Form onSubmit={handleSubmit}>
                <Container fluid className="login-modal text-white ">
                  <Row>
                    <label>Name:</label>
                    <input
                      className="bg-dark text-white"
                      type="text"
                      id="getName"
                      value={name}
                      onChange={(e) => {
                        SetName(e.target.value);
                      }}
                      required
                    />
                  </Row>
                  <Row>
                    <label>Email:</label>
                    <input
                      className="bg-dark text-white"
                      type="email"
                      id="getEmail"
                      value={email}
                      onChange={(e) => {
                        SetEmail(e.target.value);
                      }}
                      required
                    />
                  </Row>
                  <Row>
                    <label>Phone no. :</label>
                    <input
                      className="bg-dark text-white"
                      type="Number"
                      id="getPhone"
                      value={phone}
                      onChange={(e) => {
                        SetPhone(e.target.value);
                      }}
                      required
                    />
                  </Row>
                  <Row>
                    <label>Address:</label>
                    <input
                      className="bg-dark text-white"
                      type="text"
                      value={address}
                      id="getAddress"
                      onChange={(e) => {
                        SetAddress(e.target.value);
                      }}
                      required
                    />
                  </Row>
                  <Row>
                    <label>Password:</label>
                    <input
                      className="bg-dark text-white"
                      type="password"
                      id="getPassword"
                      value={password}
                      onChange={(e) => {
                        SetPassword(e.target.value);
                      }}
                      required
                    />
                  </Row>
                  <Row>
                    <Button
                      xs="auto"
                      type="submit"
                      className=""
                      variant="outline-light"
                      style={{
                        margin: "auto",
                        top: "4px",
                        position: "relative",
                        width: "auto",
                      }}
                    >
                      Signup
                    </Button>
                  </Row>
                  <Row>
                    <label>OTP :</label>
                    <input
                      className="bg-dark text-white"
                      type="Number"
                      id="otp"
                      onChange={(e) => {
                        setOtp(e.target.value);
                      }}
                    />
                  </Row>
                  <Row>
                    <Button
                      xs="auto"
                      type="submit"
                      className=""
                      variant="outline-light"
                      style={{
                        margin: "auto",
                        top: "4px",
                        position: "relative",
                        width: "auto",
                      }}
                      onClick={submitotp}
                    >
                      Check Otp
                    </Button>
                  </Row>
                </Container>
              </Form>
            )}
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#302f3b" }}>
            <Button variant="outline-light" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <ToastContainer />
      </Container>
    </>
  );
}
export default NavComponent;
