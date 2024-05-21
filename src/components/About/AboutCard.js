import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Irfan Khan</span>
            from <span className="purple"> Texas, USA.</span>
            <br />
            <br/>
            I'm not just your average Senior Full-Stack Developer; I'm your go-to tech partner with over 6+ years of hands-on experience and a proud record of launching.
            <br />
             <strong className="purple">Why choose me?</strong>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
