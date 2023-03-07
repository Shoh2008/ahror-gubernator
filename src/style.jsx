import styled from "styled-components";
import { theme } from "./utils/theme";

export const Style = styled.div`
  max-height: 100vh;
  max-width: 100%;
  background: ${theme.background};
  color: ${theme.color};
  font-family: sans-serif;
  .navbtn {
    display: none;
    background: ${theme.form_back};
    outline: none;
    transition: 0.5s;
    border: none;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    transition: background 0.5s;
    align-items: center;
    cursor: pointer;
    color: ${theme.color};
    transition: 0.5s;
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 10;
    &:hover {
      box-shadow: 0 0 10px, inset 0 0 10px;
      text-shadow: 0 0 10px;
    }
  }
  @media screen and (max-width: 650px) {
    .navbtn {
      display: flex;
    }
  }
`;
