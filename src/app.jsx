import React, { useState } from "react";
import { Style } from "./style";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Navbar from "./pages/navbar";

const App = () => {
  const [data, setdata] = useState(true);
  return (
    <Style>
      <button className="navbtn" onClick={() => setdata((p) => !p)}>
        {data === true ? (
          <i className="bi bi-list" />
        ) : (
          <i className="bi bi-x-lg" />
        )}
      </button>
      <Navbar data={data} />
      <Home />
      <About />
      <Contact />
    </Style>
  );
};

export default App;
