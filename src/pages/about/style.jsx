import styled from "styled-components";
import { theme } from "../../utils/theme";

export const Style = styled.div`
  height: 100vh;
  width: 100%;
  background: ${theme.background};
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .box {
    background: ${theme.glasess};
    padding: 30px;
    z-index: 1;
    backdrop-filter: blur(20px);
    width: 40%;
    height: 60%;
    border-radius: 50%;
    h1 {
      color: transparent;
      -webkit-text-stroke: 0.5px ${theme.element};
    }
    h1:hover {
      color: ${theme.element};
      text-shadow: ${theme.element} 0px 0px 10px;
      cursor: crosshair;
    }
    img {
      transition: 0.5s;
      border-radius: 50%;
    }
  }
  .box:nth-child(1):hover {
    border-radius: 50%;
    transition: 0.5s;
    border: 2px double #fff;
    cursor: crosshair;
    img {
      transition: 0.5s;
      filter: none;
      box-shadow: ${theme.element} 0px 0px 80px 10px;
    }
  }
  .box:nth-child(1) {
    height: 70%;
    width: 430px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: 2px solid #1e1e1e;
    img {
      filter: grayscale(1.75);
      width: 90%;
      height: 90%;
    }
  }
  @media screen and (max-width: 650px) {
    flex-wrap: wrap;
    .box {
      width: 90% !important;
    }
    .box:nth-child(1) {
      height: 330px;
    }
    .box:nth-child(2) {
      margin: 10px 0;
      height: auto;
    }
  }
`;
