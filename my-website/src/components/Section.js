//secction.js
import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


function Section() {
  return (
    <Container fluid id="section" fluid style={{ backgroundColor: "#302f3b", padding: "10px",margin:'auto', }}>
      <Row style={{width:'fit-content',margin:'auto',}}>
            <h1
          style={{
            textAlign: "center",
            color: "whitesmoke",
            paddingTop: "2px",
          }}
        >
          Make a resume that stands out
        </h1>
        <p style={{ textAlign: "center", color: "white" }}>
          Increase your chances of getting a job by creating your resume with
          our well designed resume templates.
        </p>
      </Row>
      <Row
        
        style={{
          justifyContent: "center",
          left: "20px",
          backgroundColor: "aliceblue",

          width: "fit-content",
          maxWidth: "fit-content",
          margin: "auto",
          backgroundColor: "#302f3b"
        }}
      >
        <Col style={{ display: "flex", justifyContent: "center",padding:'9px' ,}}>
          <Card style={{ width: "18rem", backgroundColor: "#302f3b" }}>
            <Card.Img
              variant="top"
              src="https://expertcv.netlify.app/images/T2.PNG"
            />
          </Card>
        </Col>
        <Col style={{ display: "flex", justifyContent: "center",padding:'9px' }}>
          <Card style={{ width: "18rem", backgroundColor: "#302f3b" }}>
            <Card.Img
              variant="top"
              src="https://expertcv.netlify.app/images/T2.PNG"
            />
          </Card>
        </Col>
        <Col style={{ display: "flex", justifyContent: "center",padding:'9px' }}>
          <Card style={{ width: "18rem", backgroundColor: "#302f3b" }}>
            <Card.Img
              variant="top"
              src="https://expertcv.netlify.app/images/T2.PNG"
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}


export default Section;
