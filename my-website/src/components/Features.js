import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";

function Features() {
  return (
    <Container
      id="features"
      fluid
      style={{ backgroundColor: "#302f3b", padding: "40px" }}
    >
      <h1 style={{ textAlign: "center", color: "white" }}>Features</h1>
      <Row fluid="md" style={{ margin: "0" }}>
        <Row style={{ margin: "7px" }}>
          <Card
            fluid="md"
            className="justify-content-md-center text-white bg-dark"
          >
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://expertcv.netlify.app/images/R1.png"
                style={{
                  width: "284px",
                  alignContent: "center",
                }}
              />
            </Col>
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "2rem", textAlign: "center" }}>
                  Quick and easy resume builder
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Col>
          </Card>
        </Row>
        <Row style={{ margin: "7px" }}>
          <Card
            fluid="md"
            className="justify-content-md-center text-white bg-dark"
          >
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://expertcv.netlify.app/images/R2.png"
                style={{
                  width: "284px",
                  alignContent: "center",
                }}
              />
            </Col>
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "2rem", textAlign: "center" }}>
                  More likely to land a job
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  With a representative and professional CV, you will stand out
                  amongst all other applicants. You are also up to 65% more
                  likely to be invited to an interview.
                </Card.Text>
              </Card.Body>
            </Col>
          </Card>
        </Row>
        <Row style={{ margin: "7px" }}>
          <Card
            fluid="md"
            className="justify-content-md-center text-white bg-dark"
          >
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://expertcv.netlify.app/images/R3.png"
                style={{
                  width: "284px",
                  alignContent: "center",
                }}
              />
            </Col>
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "2rem", textAlign: "center" }}>
                  Oragnize your applications
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  Often, it is important to be able to tailor your CV based on
                  the job you wish to apply for. With CV maker, you can create
                  and manage several different CVs in an organised way through
                  your own personal account hub.
                </Card.Text>
              </Card.Body>
            </Col>
          </Card>
        </Row>
      </Row>
    </Container>
  );
}

export default Features;
