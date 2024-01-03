import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Ui.jpg";
import emotion from "../../Assets/Projects/Ui2.jpg";
import editor from "../../Assets/Projects/Ui3.jpg";
import chatify from "../../Assets/Projects/Ui4.jpg";
import suicide from "../../Assets/Projects/Ui5.jpg";
import bitsOfCode from "../../Assets/Projects/Ui6.jpg";
import AboutCard from "../About/AboutCard";
import About from "../About/About";
import Techstack_2 from "../About/Techstack_2";
import About_3 from '../About/About_3'
import Techstack_3 from "../About/Techstack_3";
import Toolstack from "../About/Toolstack";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      
      <Container>
      
        <h1 className="project-heading">
          Hi With <strong className="purple">Ui-Ux</strong>
        </h1>
        <p style={{ color: "white" }}>
        Here we talk about networks and courses
        </p>
        <About_3/>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Linux"
              description="Mastering Linux: Comprehensive Guide to Harnessing the Power of Open-Source Operating Systems"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Computer NetWork"
              description="Mastering Computer Networks: A Comprehensive Guide to Networking Fundamentals and Advanced Concepts."
              
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="introduction to NetWork"
              description="Networking Fundamentals: Connecting the Digital World"
              
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="CCNA NetWork Devices"
              description="Understanding Network Devices: A Comprehensive CCNA Course."
              
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="IntroDuction To Sybersec"
              description="Foundations of Cybersecurity: An Introductory Course. Navigating Cybersecurity Fundamentals: An Introduction.Primer on Cybersecurity: Understanding the Basics"
              
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="CCNA Full Course"
              description="Mastering Networking Fundamentals: The Complete CCNA Course for Beginners to Advanced Professionals"
              
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"    
            />
          </Col>
        </Row>
        <Toolstack/>
      </Container>
    </Container>
  );
}

export default Projects;
