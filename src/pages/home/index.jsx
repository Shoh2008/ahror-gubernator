import React from "react";
import { Bounce, Zoom } from "react-reveal";
import { Style } from "./style";

const Home = () => {
  return (
    <Style>
      <Zoom left>
        <div className="box">
          <h1><Bounce top cascade>Hello!</Bounce></h1>
          <h2>
          <Bounce top cascade>I'm Ahror and I'm{" "}
            {JSON.stringify(new Date()).substring(1, 5) - 2009} years old</Bounce>
          </h2>
          <h4><Bounce left cascade>1 Nothing must be done hastily but killing of fleas</Bounce></h4>
          <h4><Bounce bottom cascade>2 Fools never know when they are well</Bounce></h4>
          <h4><Bounce bottom cascade>3 Fine words dress ill deeds</Bounce></h4>
        </div>
      </Zoom>
      <Zoom right>
        <div className="box">
          <div class="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </Zoom>
    </Style>
  );
};

export default Home;
