import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/IMG-20240102-WA0057.jpg";
import emotion from "../../Assets/Projects/IMG-20240102-WA0058.jpg";
import editor from "../../Assets/Projects/IMG-20240102-WA0059.jpg";
import chatify from "../../Assets/Projects/WhatsApp Image 2024-01-02 at 15.54.41_5752d059.jpg";
import suicide from "../../Assets/Projects/WhatsApp Image 2024-01-02 at 15.54.41_8c46dc53.jpg";
import bitsOfCode from "../../Assets/Projects/cours_one.png";
import AboutCard from "../About/AboutCard";
import About from "../About/About";
import Techstack_2 from "../About/Techstack_2";
import Toolstack from "../About/Toolstack";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      
      <Container>
        <h1 className="project-heading">
          Hi With <strong className="purple">Net Work </strong>
        </h1>
        <p style={{ color: "white" }}>
        Here we talk about networks and courses
        </p>
        <AboutCard/>

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
        {/* <About/> */}
        <h1>important Skiils</h1>
        <Techstack_2/>
        <Toolstack/>
      </Container>
    </Container>
  );
}

export default Projects;
