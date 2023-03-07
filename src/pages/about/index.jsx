import React from "react";
import { Bounce } from "react-reveal";
import { Style } from "./style";

const About = () => {
  return (
    <Style>
      <Bounce>
        <div className="box">
          <img src={require("../../assets/hero-1.png")} />
        </div>
      </Bounce>
      <Bounce bottom>
        <div className="box">
          <h4>
            <Bounce top cascade>
              Introduce
            </Bounce>
          </h4>
          <h1>
            <Bounce right cascade>
              Hello? I'm Ahror
            </Bounce>
          </h1>
          <b>
            <Bounce right cascade>
              Every great design begin with an even better story
            </Bounce>
          </b>
          <br />
          <br />
          <p>
            I am Ahror. My last name is Abdumannabov. I'm{" "}
            {JSON.stringify(new Date()).substring(1, 5) - 2009} years old. I am
            Tajik. I can speak Russian, Uzbekish, English. I live
            in Uzbekistan in Angren.
          </p>
        </div>
      </Bounce>
    </Style>
  );
};

export default About;
