import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack_2 from "./Techstack_2";
import Aboutcard_2 from "./AboutCard_2";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import AboutCard from "./AboutCard";
import ProjectCards from "../Projects/ProjectCards";

import ProjectCard from "../Projects/ProjectCards";

import leaf from "../../Assets/Projects/Back.jpg";
import emotion from "../../Assets/Projects/Font.jpg";
import editor from "../../Assets/Projects/Mobile.jpg";
import chatify from "../../Assets/Projects/c++.jpg";
import suicide from "../../Assets/Projects/java.jpg";
import bitsOfCode from "../../Assets/Projects/py.jpg";

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
          
       <Aboutcard_2/>
       <h1 className="project-heading">
          Hi With <strong className="purple">Programming </strong>
        </h1>
        <p style={{ color: "white" }}>
        Here we talk about Programming and courses
        </p>
        

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Programming basics with C++"
              description="Mastering the Foundations: Comprehensive Guide to Programming Basics with C++..Unlocking the World of Programming: Comprehensive Basics and Beyond with C++"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Python "
              description="Python Unleashed: A Comprehensive Course for Beginners and Beyond..Python Unleashed: A Comprehensive Course for Beginners and Beyond"
              
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="introduction Mobile App"
              description="Mobile App Unleashed: A Comprehensive Course for Beginners and Beyond..Mobile App Unleashed: A Comprehensive Course for Beginners and Beyond"
              
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Back-End"
              description="Back-End  Unleashed: A Comprehensive Course for Beginners and Beyond..Back-End  Unleashed: A Comprehensive Course for Beginners and Beyond"
              
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Java "
              description="Back-End  Unleashed: A Comprehensive Course for Beginners and Beyond..Back-End  Unleashed: A Comprehensive Course for Beginners and Beyond"
              
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title=" Front-End"
              description="Front-End  Unleashed: A Comprehensive Course for Beginners and Beyond..Back-End  Unleashed: A Comprehensive Course for Beginners and Beyond"
              
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"    
            />
          </Col>
        </Row>
          
        </Row>
        <h1 className="project-heading">
        Important  <strong className="purple">Skills </strong>
        </h1>

        <Techstack_2 />

        <h1 className="project-heading">
          <strong className="purple">Important</strong> Tools
        </h1>
        <Toolstack />

        
      
        
      </Container>
    </Container>
    

    

  );
}

export default About;



