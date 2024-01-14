import React from "react";
import profile from "../images/profile1.png";
const About = () => (
  <div className="about">
    <h2>About Me</h2>
    <img src={profile} alt="Profile-picture" />
    <div>
      Hello, I'm Bhuvaneshwaran, a passionate Systems Engineer based in the
      charming town of Pondicherry. Currently, I'm dedicated to bringing digital
      experiences to life through my expertise in frontend development at
      Infosys. As a frontend developer, I thrive on transforming creative
      concepts into seamless, user-friendly interfaces. 
      <br/><br/>
      My journey in the
      dynamic world of technology has equipped me with a deep understanding of
      web development, where I merge design and functionality to craft engaging
      and responsive user interfaces. With a keen eye for detail and a
      commitment to staying on the cutting edge of technology, I continuously
      explore innovative ways to enhance user experiences. 
      <br/><br/>
      My work not only
      reflects technical proficiency but also a genuine enthusiasm for creating
      visually appealing and efficient web solutions.
    </div>
    <hr/>
  </div>
);

export default About;
