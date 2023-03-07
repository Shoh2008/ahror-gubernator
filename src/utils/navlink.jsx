import React from "react";

const Navlink = ({ link, state, setstate }) => {
  const linking = (link) => {
    if (link === "home") {
      window.scroll(0, 0);
    }
    if (link === "about") {
      window.scroll(0, 650);
    }
    if (link === "contact") {
      window.scroll(0, 1300);
    }
    setstate(link);
  };

  return (
    <a onClick={() => linking(link)} className={state === link ? "active" : ""}>
      {link}
    </a>
  );
};

export default Navlink;
