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
    padding: 30px;
    z-index: 1;
    text-align: center;
    width: 40%;
    height: 60%;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
    backdrop-filter: blur(10px);
    background: ${theme.glasess};
  }
  h2 {
    display: flex;
  }
  .box:nth-child(2) {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(0);
    background: transparent;
    .spinner {
      width: 200px;
      height: 200px;
      animation: spinner 15s infinite ease;
      transform-style: preserve-3d;
    }
    .spinner > div {
      background: #97dcff77;
      height: 100%;
      position: absolute;
      width: 100%;
      border: 2px solid ${theme.element};
      box-shadow: ${theme.element} 0px 0px 80px 10px;
    }
    .spinner div:nth-of-type(1) {
      transform: translateZ(-100px) rotateY(180deg);
    }
    .spinner div:nth-of-type(2) {
      transform: rotateY(-270deg) translateX(50%);
      transform-origin: top right;
    }
    .spinner div:nth-of-type(3) {
      transform: rotateY(270deg) translateX(-50%);
      transform-origin: center left;
    }
    .spinner div:nth-of-type(4) {
      transform: rotateX(90deg) translateY(-50%);
      transform-origin: top center;
    }
    .spinner div:nth-of-type(5) {
      transform: rotateX(-90deg) translateY(50%);
      transform-origin: bottom center;
    }
    .spinner div:nth-of-type(6) {
      transform: translateZ(100px);
    }
    @keyframes spinner {
      0% {
        transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
      }
      50% {
        transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
      }
      100% {
        transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
      }
    }
  }
  @media screen and (max-width: 650px) {
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    .box {
      width: 90%;
      height: 45%;
      margin: 10px 0;
      padding: 10px;
      h4:nth-child(1) {
        margin-top: 0px !important;
      }
    }
    .box:nth-child(2) {
      height: auto !important;
      padding: 100px 0;
    }
  }
`;
