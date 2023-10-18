import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import { Alert } from "bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth, } from "../context/auth";

const headerStyle = {
  backgroundImage: 'url("../img1.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  height: "338px",
  width: "auto",
};

function Header() {
    const [auth] = useAuth();
    const navigate = useNavigate();
const handleCreate = () => {
  if (!auth.user) {
   
     alert("Please log in to create a CV.");

  } else {
    
    navigate("/create")
  }
};

  return (
    <header style={headerStyle}>
      <Container fluid="md">
        <Row>
          <Col>
            <p
              style={{
                color: "white",
                position: "relative",
                left: "20px",
                fontSize: "3rem",
                textAlign: "left",
                fontFamily: "auto",
                width: "fit-content",
              }}
            >
              welcome to<br></br> create an cv <br></br>
              your dream job
            </p>
           <button className="btn btn-outline-success" onClick={handleCreate}>create cv</button>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
