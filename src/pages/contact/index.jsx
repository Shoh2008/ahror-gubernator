import React, { useState } from "react";
import { Bounce, Fade, Zoom } from "react-reveal";
import { Style } from "./style";

const Contact = () => {
  const [state, setstate] = useState({});

  const bot = {
    TOKEN: "6034107481:AAHeJAgQ-7JW15dkGs_lzrfSEpISy5-HzDI",
    chatID: "5935166571",
  };

  const link = `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=`;

  const submit = () => {
    if (state.name && state.email && state.message) {
      fetch(link + "I'm " + state.name, {
        method: "GET",
      });
      fetch(link + state.email, {
        method: "GET",
      });
      fetch(link + state.message, {
        method: "GET",
      });
      setstate({});
    }
  };

  return (
    <Style>
      <Bounce>
        <div className="box form">
          <h1>
            <Zoom left cascade>
              Contact
            </Zoom>
          </h1>
          <Bounce left>
            <input
              type="text"
              placeholder="Name"
              value={state.name}
              onChange={(e) =>
                setstate((p) => ({ ...p, name: e.target.value }))
              }
            />
          </Bounce>
          <Bounce right>
            <input
              type="email"
              placeholder="Email"
              value={state.email}
              onChange={(e) =>
                setstate((p) => ({ ...p, email: e.target.value }))
              }
            />
          </Bounce>
          <Bounce left>
            <textarea
              placeholder="Message"
              value={state.message}
              onChange={(e) =>
                setstate((p) => ({ ...p, message: e.target.value }))
              }
            ></textarea>
          </Bounce>
          <Fade bottom>
            <button onClick={submit}>Submit</button>
          </Fade>
        </div>
      </Bounce>
      <Zoom right>
        <div className="box text">
          <div>
            <h3>Address</h3>
            Uzbekistan Angren city of Tashkent region
          </div>
          <div>
            <h3>Find me on</h3>
            <a href="https://github.com/Abdumannabov" target="_blank" className="gitlink">
              <i className="bi bi-github"></i>
              Github
            </a>
          </div>
        </div>
      </Zoom>
    </Style>
  );
};

export default Contact;
