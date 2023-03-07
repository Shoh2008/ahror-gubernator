import styled from "styled-components";
import { theme } from "../../utils/theme";

export const Style = styled.div`
  height: 100vh;
  width: 100%;
  background: ${theme.background};
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  .form {
    height: 100%;
    width: 50%;
    padding: 5px 30px;
    text-align: center;
    input,
    textarea {
      width: 100%;
      margin: 10px 0;
      padding: 10px;
      outline: none;
      border: 2px solid transparent;
      border-radius: 10px;
      background: ${theme.form_back};
      color: ${theme.color};
      transition: .5s;
    }
    input::placeholder,
    textarea::placeholder {
      color: #fff;
    }
    input:focus,
    textarea:focus {
      border: ${theme.border};
    }
    textarea {
      height: 120px;
      max-height: 120px;
    }
    button {
      padding: 10px 30px;
      margin: 10px auto;
      background: ${theme.form_back};
      outline: none;
      border: 2px solid transparent;
      border-radius: 5px;
      font-size: 15px;
      font-weight: bold;
      transition: background 0.5s;
      display: flex;
      align-items: center;
      cursor: pointer;
      color: ${theme.color};
      transition: 0.5s;
      &:hover {
        border: ${theme.border};
      }
    }
  }
  .box {
    background: ${theme.glasess};
    padding: 30px;
    z-index: 1;
    backdrop-filter: blur(20px);
    width: 40%;
    height: 70%;
    border-radius: 20px;
  }
  .box:nth-child(1) {
    border: 1px solid #1e1e1e;
  }
  .box:nth-child(2) {
    width: 400px;
    height: auto;
    border: 1px solid #1e1e1e;
  }
  .text {
    border: 1px solid #1e1e1e;
    padding: 20px;
    div {
      margin: 40px;
      a {
        text-decoration: none;
        color: ${theme.color};
        font-size: 20px;
        i {
          margin-right: 10px;
        }
      }
    }
  }
  @media screen and (max-width: 650px) {
    flex-wrap: wrap;
    padding-top: 90px;
    height: auto;
    .box {
      width: 90%;
      margin: 10px 0;
      padding: 10px;
    }
    .box:nth-child(2) {
      padding: 10px;
      margin: 20px;
      div {
        margin: 20px;
      }
    }
  }
`;
