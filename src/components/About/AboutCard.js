import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

import ProjectCards from "../Projects/ProjectCards";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";


import ProjectCard from "../Projects/ProjectCards";

import leaf from "../../Assets/Projects/IMG-20240102-WA0057.jpg";
import emotion from "../../Assets/Projects/IMG-20240102-WA0058.jpg";
import editor from "../../Assets/Projects/IMG-20240102-WA0059.jpg";
import chatify from "../../Assets/Projects/WhatsApp Image 2024-01-02 at 15.54.41_5752d059.jpg";
import suicide from "../../Assets/Projects/WhatsApp Image 2024-01-02 at 15.54.41_8c46dc53.jpg";
import bitsOfCode from "../../Assets/Projects/cours_one.png";


import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Here's what we're talking about <span className="purple"> The field of networks    </span>
          and <span className="purple"> cybersecurity</span>
            <br />
            And more importantly Free courses 
            <br />
            For this field, on this page, we leave you the tools for this field as well
            <br />
            
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Free Courses
            </li>
            <li className="about-activity">
              <ImPointRight /> The most important tools
            </li>
            <li className="about-activity">
              <ImPointRight /> The most important articles
            </li>
          </ul>

          
          
        </blockquote>
        
      </Card.Body>
     
    </Card>
    
  );
}

export default AboutCard;
