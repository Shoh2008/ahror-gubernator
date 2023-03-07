import React, { useState } from "react";
import Navlink from "../../utils/navlink";
import { Style } from "./style";

const Navbar = ({ data }) => {
  const [state, setstate] = useState("");

  window.addEventListener("scroll", () => {
    if (window.scrollY < 600) setstate("home");
    if (window.scrollY > 600) {
      if (window.screenY < 1200) setstate("about");
    }
    if (window.scrollY > 1200) setstate("contact");
  });

  return (
    <Style data={data}>
      <div>
        <div className="logo"></div>
        <h3>Abdumannabov Ahror</h3>
      </div>
      <div className="route">
        <Navlink link="home" state={state} setstate={setstate} />
        <Navlink link="about" state={state} setstate={setstate} />
        <Navlink link="contact" state={state} setstate={setstate} />
        <a href="https://github.com/Abdumannabov" target="_blank" className="link">
          <i className="bi bi-github"></i>
        </a>
      </div>
    </Style>
  );
};

export default Navbar;
