import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
// import Techstack_2 from "./Techstack_2";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
// import Toolstack from "./Toolstack";


import ProjectCard from "../Projects/ProjectCards";

import leaf from "../../Assets/Projects/IMG-20240102-WA0057.jpg";
import emotion from "../../Assets/Projects/IMG-20240102-WA0058.jpg";
import editor from "../../Assets/Projects/IMG-20240102-WA0059.jpg";
import chatify from "../../Assets/Projects/WhatsApp Image 2024-01-02 at 15.54.41_5752d059.jpg";
import suicide from "../../Assets/Projects/WhatsApp Image 2024-01-02 at 15.54.41_8c46dc53.jpg";
import bitsOfCode from "../../Assets/Projects/cours_one.png";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function About() {
  return (

    
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          
        </Row>
        <h1 className="project-heading">
        Important  <strong className="purple">Skills </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Important</strong> Tools
        </h1>
        <Toolstack_2 />

        
      
        
      </Container>
    </Container>
    

    

  );
}

export default About;



